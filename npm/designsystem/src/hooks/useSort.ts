import { useMemo, useState } from 'react';

import { SortDirection } from '../components/UNSAFE_Table/constants';

/** Values that should never be treated as "an object to sort one level deeper into" */
type SortLeaf =
  string | number | boolean | bigint | symbol | null | undefined | Date | readonly unknown[] | ((...args: never[]) => unknown);

/**
 * A sort key for TData: rejects unknown property names (so typos are caught), while still allowing
 * one level of dot-notation into a nested property (e.g. "kontor.navn"). Nested properties with dynamic
 * keys (e.g. Record<string, number>) accept any suffix after the dot, since their keys aren't statically known.
 */
export type SortKey<TData> = {
  [K in Extract<keyof TData, string>]: NonNullable<TData[K]> extends SortLeaf
    ? K
    : K | `${K}.${Extract<keyof NonNullable<TData[K]>, string>}`;
}[Extract<keyof TData, string>];

export type SortValueGetter<TData> = (item: TData, sortKey: SortKey<TData>) => unknown;

/** A comparator function with the same signature as Array.prototype.sort */
export type SortComparer<TData> = (a: TData, b: TData) => number;

/** A named sort option, e.g. for a FilterSort dropdown, mapping an option key to a column key + direction. */
export interface SortOption<TData> {
  columnKey: SortKey<TData>;
  direction?: SortDirection;
}

/** Decides whether a sortOptions entry matches the current sort state. Default: compareSortOption. */
export type SortOptionMatcher<TData> = (
  option: SortOption<TData>,
  columnKey: SortKey<TData> | undefined,
  direction: SortDirection | undefined
) => boolean;

export interface SortableHeadCellProps {
  /** Sort direction, for displaying the current sort state on the column header (e.g. aria-sort) */
  sortDir?: SortDirection;
}

export interface UseSortOptions<TData> {
  /** The items to sort */
  data: TData[];
  /** Key to sort by on mount (uncontrolled mode) */
  initialSortColumnKey?: SortKey<TData>;
  /** Sort direction on mount (uncontrolled mode). Default: SortDirection.asc */
  initialSortDirection?: SortDirection;
  /** Currently sorted key (controlled mode). When set, the consumer owns the sort state and must update it based on onSortChange. */
  sortColumnKey?: SortKey<TData>;
  /** Current sort direction (controlled mode). Default: SortDirection.asc */
  sortDirection?: SortDirection;
  /** Disable internal sorting of data, e.g. when sorting happens server-side. requestSort still updates state and calls onSortChange. */
  disableInternalSort?: boolean;
  /**
   * Get the value to sort an item by. Default: reads the sort key as a property from the item, with support for dot-notation paths like "person.name".
   * Memoize this (e.g. with useCallback) if provided inline, otherwise sortedData recomputes on every render.
   */
  getSortValue?: SortValueGetter<TData>;
  /**
   * Custom comparators per sort key, for keys that need their own ordering (e.g. status ranking). The comparator should sort ascending; direction is applied by the hook.
   * Memoize this (e.g. with useMemo) if provided inline, otherwise sortedData recomputes on every render.
   */
  sorters?: Partial<Record<SortKey<TData>, SortComparer<TData>>>;
  /** Called whenever the sort changes */
  onSortChange?: (columnKey: SortKey<TData>, sortDirection: SortDirection) => void;
  /**
   * Named sort options (e.g. for a FilterSort dropdown), each mapping an option key to a column key + direction.
   * When provided, the hook exposes `sortOptionKey` (the option matching the current sort, if any) and
   * `setSortOption` (set the sort directly from an option's key, e.g. straight from a <select>'s onChange).
   */
  sortOptions?: Record<string, SortOption<TData>>;
  /**
   * Custom matcher for deciding which sortOptions entry matches the current sort. Default: matches on exact
   * columnKey, treating a missing direction as SortDirection.asc. Only needed for non-standard matching.
   */
  matchSortOption?: SortOptionMatcher<TData>;
}

export interface UseSortReturn<TData> {
  /** The items, sorted by the current sort (or as-is when disableInternalSort is set) */
  sortedData: TData[];
  /** The key currently sorted by */
  sortColumnKey: SortKey<TData> | undefined;
  /** The current sort direction */
  sortDirection: SortDirection | undefined;
  /** Sort by a key. Toggles direction when the key is already sorted. */
  requestSort: (columnKey: SortKey<TData>) => void;
  /** Set both sort key and direction directly, without toggling. Useful when a control (e.g. a FilterSort dropdown) maps its own options to a fixed (key, direction) pair. */
  setSort: (columnKey: SortKey<TData>, direction?: SortDirection) => void;
  /** Get props for TableHeadCell to display the current sort state (aria-sort). Sorting itself is triggered by the consumer, e.g. via requestSort/onSortChange from a FilterSort control. */
  getSortProps: (columnKey: SortKey<TData>) => SortableHeadCellProps;
  /** The sortOptions key matching the current sort state, if any. undefined if sortOptions wasn't provided or none match. */
  sortOptionKey: string | undefined;
  /** Set the sort from a sortOptions key, e.g. straight from a <select>'s onChange. No-ops if the key isn't found in sortOptions. */
  setSortOption: (optionKey: string) => void;
}

interface SortState<TData> {
  columnKey: SortKey<TData>;
  direction: SortDirection;
}

type SortableValue = string | number | boolean | Date | null | undefined;

const getValueByPath = (item: unknown, path: string): unknown =>
  path
    .split('.')
    .reduce<unknown>(
      (value, key) => (value !== null && typeof value === 'object' ? (value as Record<string, unknown>)[key] : undefined),
      item
    );

const compareSortValues = (a: SortableValue, b: SortableValue): number => {
  if (a === null || a === undefined) {
    return b === null || b === undefined ? 0 : 1;
  }
  if (b === null || b === undefined) {
    return -1;
  }
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }
  if (typeof a === 'boolean' && typeof b === 'boolean') {
    return Number(a) - Number(b);
  }
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() - b.getTime();
  }
  return String(a).localeCompare(String(b), 'nb', { numeric: true, sensitivity: 'base' });
};

const sortBy =
  <TData>(accessor: (item: TData) => SortableValue, direction: SortDirection = SortDirection.asc): SortComparer<TData> =>
  (a: TData, b: TData): number => {
    const aValue = accessor(a);
    const bValue = accessor(b);
    // null/undefined skal alltid sist, også ved desc
    if (aValue === null || aValue === undefined || bValue === null || bValue === undefined) {
      return compareSortValues(aValue, bValue);
    }
    const result = compareSortValues(aValue, bValue);
    return direction === SortDirection.desc ? -result : result;
  };

const defaultMatchSortOption = <TData>(
  option: SortOption<TData>,
  columnKey: SortKey<TData> | undefined,
  direction: SortDirection | undefined
): boolean => option.columnKey === columnKey && (option.direction ?? SortDirection.asc) === (direction ?? SortDirection.asc);

/**
 * Sort state and type-aware sorting for any list (tables, filtered result lists etc.).
 * Strings sort with Norwegian locale and numeric collation, numbers/booleans/Dates sort natively,
 * and null/undefined always sort last. Supports uncontrolled mode (internal state),
 * controlled mode (sortColumnKey/sortDirection props) and server-side sorting (disableInternalSort).
 */
export const useSort = <TData>(options: UseSortOptions<TData>): UseSortReturn<TData> => {
  const {
    data,
    initialSortColumnKey,
    initialSortDirection,
    sortColumnKey,
    sortDirection,
    disableInternalSort,
    getSortValue,
    sorters,
    onSortChange,
    sortOptions,
    matchSortOption = defaultMatchSortOption,
  } = options;

  const [internalSort, setInternalSort] = useState<SortState<TData> | undefined>(() =>
    initialSortColumnKey ? { columnKey: initialSortColumnKey, direction: initialSortDirection ?? SortDirection.asc } : undefined
  );

  const isControlled = sortColumnKey !== undefined;
  const sort: SortState<TData> | undefined = isControlled
    ? { columnKey: sortColumnKey, direction: sortDirection ?? SortDirection.asc }
    : internalSort;

  const requestSort = (columnKey: SortKey<TData>): void => {
    const direction = sort?.columnKey === columnKey && sort.direction === SortDirection.asc ? SortDirection.desc : SortDirection.asc;

    if (!isControlled) {
      setInternalSort({ columnKey, direction });
    }
    onSortChange?.(columnKey, direction);
  };

  const setSort = (columnKey: SortKey<TData>, direction: SortDirection = SortDirection.asc): void => {
    if (!isControlled) {
      setInternalSort({ columnKey, direction });
    }
    onSortChange?.(columnKey, direction);
  };

  const currentSortColumnKey = sort?.columnKey;
  const currentSortDirection = sort?.direction;

  const sortedData = useMemo(() => {
    if (!currentSortColumnKey || disableInternalSort) {
      return data;
    }

    const customComparer = sorters?.[currentSortColumnKey];
    const comparer: SortComparer<TData> = customComparer
      ? (a, b): number => (currentSortDirection === SortDirection.desc ? -customComparer(a, b) : customComparer(a, b))
      : sortBy(item => (getSortValue ?? getValueByPath)(item, currentSortColumnKey) as SortableValue, currentSortDirection);

    return [...data].sort(comparer);
  }, [data, currentSortColumnKey, currentSortDirection, disableInternalSort, getSortValue, sorters]);

  const getSortProps = (columnKey: SortKey<TData>): SortableHeadCellProps => ({
    sortDir: sort?.columnKey === columnKey ? sort.direction : undefined,
  });

  const sortOptionKey = sortOptions
    ? Object.entries(sortOptions).find(([, option]) => matchSortOption(option, currentSortColumnKey, currentSortDirection))?.[0]
    : undefined;

  const setSortOption = (optionKey: string): void => {
    const option = sortOptions?.[optionKey];
    if (option) {
      setSort(option.columnKey, option.direction);
    }
  };

  return {
    sortedData,
    sortColumnKey: sort?.columnKey,
    sortDirection: sort?.direction,
    requestSort,
    setSort,
    getSortProps,
    sortOptionKey,
    setSortOption,
  };
};
