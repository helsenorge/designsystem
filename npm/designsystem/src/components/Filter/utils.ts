import type { FilterValues, UseFilterOptions, UseFilterReturn } from './useFilter';

/** Et filtervalg med verdi og visningstekst */
export interface FilterOption<V = string> {
  value: V;
  label: string;
}

// Hvis V er et array (f.eks. string[]), hent ut typen inni arrayet (string).
// Hvis V ikke er et array (f.eks. boolean), bruk V som den er.
// Brukes for å sikre at options-listen matcher elementene, ikke hele arrayet.
// Eksempel: FilterCategoryConfig<string[]> → options er FilterOption<string>[], ikke FilterOption<string[]>[]
type OptionValue<V> = V extends (infer U)[] ? U : V;

/** Konfigurasjon for en filterkategori. */
export interface FilterCategoryConfig<V = unknown> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: ({ value: OptionValue<V> } & { [key: string]: any })[];
  defaultValue?: V;
  /** Hent visningstekst fra et option-objekt. Hvis ikke satt, brukes String(value). */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getLabel?: (option: any) => string;
}

export interface FilterConfigResult<T extends FilterValues> {
  /** Options for useFilter (defaultValues) */
  filterOptions: UseFilterOptions<T>;
  /** Look up the display label for a filter value */
  getLabel: (key: keyof T, value: unknown) => string;
}

/**
 * Lager UseFilterOptions fra et oppsett av filterkategorier.
 * Samler defaultValues og label-oppslag automatisk fra config.
 *
 * Eksempel:
 *   const { filterOptions, getLabel } = createFilterConfig<MyFilters>({
 *     sykehus: { options: sykehusOptions, defaultValue: ['haukeland'], getLabel: o => o.label },
 *     status: { options: statusOptions, getLabel: o => o.displayText },
 *   });
 *   const filter = useFilter(filterOptions);
 *   getLabel('sykehus', 'haukeland') // → 'Haukeland universitetssjukehus'
 */
export const createFilterConfig = <T extends FilterValues>(categories: {
  [K in keyof T]?: FilterCategoryConfig<T[K]>;
}): FilterConfigResult<T> => {
  const defaultValues = {} as Partial<T>;
  const labelMaps = new Map<string, Map<unknown, string>>();

  for (const key in categories) {
    const category = categories[key];
    if (category?.defaultValue !== undefined) {
      defaultValues[key] = category.defaultValue as T[typeof key];
    }
    if (category?.options) {
      const resolve = category.getLabel ?? ((o: { value: unknown }): string => String(o.value));
      const map = new Map<unknown, string>();
      for (const opt of category.options) {
        map.set(opt.value, resolve(opt));
      }
      labelMaps.set(key, map);
    }
  }

  const getLabel = (key: keyof T, value: unknown): string => {
    return labelMaps.get(key as string)?.get(value) ?? String(value); // todo: fallback til .displaytext om det ikke er sendt inn noe, og String(value) om .label ikke finnes
  };

  return { filterOptions: { defaultValues }, getLabel };
};

/**
 * Ferdige matcher-funksjoner for typiske filter mønster.
 * Brukes som deler i matcher objektet til filterItems.
 *
 * Eksempel:
 *   const filterMatchers = {
 *     categories: matchFilter.arrayIncludes<Medisin>(m => m.sykehus),
 *     status: matchFilter.exactMatch<Medisin>(m => m.status),
 *     eResept: matchFilter.booleanToggle<Medisin>(m => m.eResept),
 *   };
 */
export const matchFilter = {
  /** Array-filter: matcher hvis det er overlapp mellom filterverdier og item-verdier (OR-logikk). */
  arrayIncludes:
    <TItem>(accessor: (item: TItem) => unknown) =>
    (item: TItem, value: unknown): boolean => {
      const filterValues = Array.isArray(value) ? value : [value];
      const itemValue = accessor(item);
      if (Array.isArray(itemValue)) {
        return itemValue.some(v => filterValues.includes(v));
      }
      return filterValues.includes(itemValue);
    },

  /** Eksakt match: matcher hvis item-verdien er lik én av filterverdiene */
  exactMatch:
    <TItem>(accessor: (item: TItem) => unknown) =>
    (item: TItem, value: unknown): boolean => {
      if (Array.isArray(value)) {
        return value.includes(accessor(item));
      }
      return accessor(item) === value;
    },

  /** Boolean toggle: når filterverdien er true, inkluder kun items der accessor returnerer true */
  booleanToggle:
    <TItem>(accessor: (item: TItem) => boolean) =>
    (item: TItem, value: unknown): boolean => {
      const active = Array.isArray(value) ? value.includes(true) : value === true;
      return !active || accessor(item);
    },

  /** Fritekstsøk: matcher hvis søketeksten finnes i ett eller flere felt (case-insensitive) */
  textSearch:
    <TItem>(...accessors: ((item: TItem) => string | undefined)[]) =>
    (item: TItem, value: unknown): boolean => {
      const search = String(value).toLowerCase();
      return accessors.some(accessor => accessor(item)?.toLowerCase().includes(search));
    },
};

/**
 * Filtrerer en liste med items basert på aktive filterverdier.
 * Hvert filter som er satt må matche for at et item skal inkluderes (AND-logikk).
 *
 * Eksempel:
 *   const filtered = filterItems(medisiner, filter.filters, {
 *     sykehus: matchFilter.arrayIncludes<Medisin>(m => m.sykehus),
 *     reseptstatus: matchFilter.exactMatch<Medisin>(m => m.reseptstatus),
 *     eResept: matchFilter.booleanToggle<Medisin>(m => m.eResept),
 *   });
 */

/** Type for matcher-objektet som sendes til filterItems. Sikrer at keys matcher filtertypen. */
export type FilterMatchers<TItem, T extends FilterValues> = { [K in keyof T]?: (item: TItem, value: NonNullable<T[K]>) => boolean };

export const filterItems = <TItem, T extends FilterValues>(
  items: TItem[],
  filters: Partial<T>,
  matchers: FilterMatchers<TItem, T>
): TItem[] => {
  return items.filter(item => {
    for (const key in matchers) {
      const value = filters[key];
      if (value === undefined) {
        continue;
      }
      const matcher = matchers[key];
      if (matcher && !matcher(item, value as NonNullable<T[typeof key]>)) {
        return false;
      }
    }
    return true;
  });
};

/** Sorteringsretning for sortBy */
export type SortOrder = 'asc' | 'desc';

/** Verdier sortBy kan sammenligne automatisk */
export type SortableValue = string | number | boolean | Date | null | undefined;

/** En comparator-funksjon som kan brukes av sortItems (samme signatur som Array.prototype.sort) */
export type SortComparer<TItem> = (a: TItem, b: TItem) => number;

const compareValues = (a: SortableValue, b: SortableValue): number => {
  // null/undefined sorteres alltid sist, uavhengig av retning
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

/**
 * Lager en comparator som sorterer på verdien fra accessor.
 * Håndterer string (norsk locale), number, boolean og Date automatisk.
 * null/undefined sorteres alltid sist.
 *
 * Eksempel:
 *   sortBy<Resept>(r => r.navn)                    // alfabetisk A-Å
 *   sortBy<Resept>(r => r.rekvirertDato, 'desc')   // nyeste først
 */
export const sortBy =
  <TItem>(accessor: (item: TItem) => SortableValue, order: SortOrder = 'asc'): SortComparer<TItem> =>
  (a: TItem, b: TItem): number => {
    const aValue = accessor(a);
    const bValue = accessor(b);
    // null/undefined skal alltid sist, også ved desc
    if (aValue === null || aValue === undefined || bValue === null || bValue === undefined) {
      return compareValues(aValue, bValue);
    }
    const result = compareValues(aValue, bValue);
    return order === 'desc' ? -result : result;
  };

/** Type for sorters-objektet som sendes til sortItems. Nøkler matcher sorteringsvalgene (f.eks. option-values i FilterSort). */
export type FilterSorters<TItem> = Record<string, SortComparer<TItem> | undefined>;

/**
 * Sorterer en liste med items basert på valgt sorteringsnøkkel.
 * Returnerer en ny, sortert liste. Hvis sortKey ikke finnes i sorters
 * (f.eks. "standard sortering"), returneres listen i original rekkefølge.
 *
 * Eksempel:
 *   const sorted = sortItems(filtered, sortKey, {
 *     navn: sortBy<Resept>(r => r.navn),
 *     rekvirertDato: sortBy<Resept>(r => r.rekvirertDato, 'desc'),
 *     status: (a, b) => statusRang(a) - statusRang(b), // egendefinert comparator
 *   });
 *
 *   <FilterSort value={sortKey} onChange={e => setSortKey(e.target.value)}>
 *     <option value="standard">Standard sortering</option>
 *     <option value="navn">Navn</option>
 *     <option value="rekvirertDato">Rekvirert dato</option>
 *   </FilterSort>
 */
export const sortItems = <TItem>(items: TItem[], sortKey: string | undefined, sorters: FilterSorters<TItem>): TItem[] => {
  const comparer = sortKey !== undefined ? sorters[sortKey] : undefined;
  if (!comparer) {
    return items;
  }
  return [...items].sort(comparer);
};

/**
 * Toggler en verdi i et array-basert filter.
 * Legger til verdien hvis den ikke finnes, fjerner den hvis den finnes.
 * Setter filteret til undefined hvis arrayet blir tomt.
 */
export const toggleArrayFilter = <T extends FilterValues, K extends keyof T>(
  filter: UseFilterReturn<T>,
  filterKey: K,
  value: T[K] extends (infer U)[] | undefined ? U : never
): void => {
  const current = (filter.filters[filterKey] ?? []) as unknown[];
  const updated = current.includes(value) ? current.filter(v => v !== value) : [...current, value];
  filter.setFilter(filterKey, (updated.length > 0 ? updated : undefined) as T[K] | undefined);
};
