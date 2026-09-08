import { useMemo, useState } from 'react';

import { SortDirection } from '../components/Table/constants';

export type SortValueGetter<TData> = (item: TData, sortKey: string) => unknown;

/** A comparator function with the same signature as Array.prototype.sort */
export type SortComparer<TData> = (a: TData, b: TData) => number;

export interface SortableHeadCellProps {
  /** Sets if column for head cell should be sortable */
  sortable: boolean;
  /** Sort direction */
  sortDir?: SortDirection;
  /** Function that is called when clicked */
  onClick: () => void;
}

export interface UseSortOptions<TData> {
  /** The items to sort */
  data: TData[];
  /** Key to sort by on mount (uncontrolled mode) */
  initialSortColumnKey?: string;
  /** Sort direction on mount (uncontrolled mode). Default: SortDirection.asc */
  initialSortDirection?: SortDirection;
  /** Currently sorted key (controlled mode). When set, the consumer owns the sort state and must update it based on onSortChange. */
  sortColumnKey?: string;
  /** Current sort direction (controlled mode). Default: SortDirection.asc */
  sortDirection?: SortDirection;
  /** Disable internal sorting of data, e.g. when sorting happens server-side. requestSort still updates state and calls onSortChange. */
  disableInternalSort?: boolean;
  /** Get the value to sort an item by. Default: reads the sort key as a property from the item, with support for dot-notation paths like "person.name". */
  getSortValue?: SortValueGetter<TData>;
  /** Custom comparators per sort key, for keys that need their own ordering (e.g. status ranking). The comparator should sort ascending; direction is applied by the hook. */
  sorters?: Record<string, SortComparer<TData> | undefined>;
  /** Called whenever the sort changes */
  onSortChange?: (columnKey: string, sortDirection: SortDirection) => void;
}

export interface UseSortReturn<TData> {
  /** The items, sorted by the current sort (or as-is when disableInternalSort is set) */
  sortedData: TData[];
  /** The key currently sorted by */
  sortColumnKey: string | undefined;
  /** The current sort direction */
  sortDirection: SortDirection | undefined;
  /** Sort by a key. Toggles direction when the key is already sorted. */
  requestSort: (columnKey: string) => void;
  /** Get props for TableHeadCell to make it a sortable header for a column */
  getSortProps: (columnKey: string) => SortableHeadCellProps;
}

interface SortState {
  columnKey: string;
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

const compareSortValues = (a: unknown, b: unknown): number => {
  if (a === null || a === undefined) return b === null || b === undefined ? 0 : 1;
  if (b === null || b === undefined) return -1;
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
  } = options;

  const [internalSort, setInternalSort] = useState<SortState | undefined>(() =>
    initialSortColumnKey ? { columnKey: initialSortColumnKey, direction: initialSortDirection ?? SortDirection.asc } : undefined
  );

  const isControlled = sortColumnKey !== undefined;
  const sort: SortState | undefined = isControlled
    ? { columnKey: sortColumnKey, direction: sortDirection ?? SortDirection.asc }
    : internalSort;

  const requestSort = (columnKey: string): void => {
    const direction = sort?.columnKey === columnKey && sort.direction === SortDirection.asc ? SortDirection.desc : SortDirection.asc;

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

  const getSortProps = (columnKey: string): SortableHeadCellProps => ({
    sortable: true,
    sortDir: sort?.columnKey === columnKey ? sort.direction : undefined,
    onClick: (): void => requestSort(columnKey),
  });

  return {
    sortedData,
    sortColumnKey: sort?.columnKey,
    sortDirection: sort?.direction,
    requestSort,
    getSortProps,
  };
};
