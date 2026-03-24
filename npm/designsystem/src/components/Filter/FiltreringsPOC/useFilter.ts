import { useState } from 'react';

// Key er string men value kan være hva som helst og er ukjent for oss internt i useFilter. Den er typesikker for consumer.
// Dette mønsteret lar oss ha ulike typer i samme objekt.
export type FilterValues = Record<string, unknown>;

export interface UseFilterOptions<T extends FilterValues> {
  /** Initial filter values */
  defaultValues?: Partial<T>;
}

export interface UseFilterReturn<T extends FilterValues> {
  /** Current filter state */
  filters: Partial<T>;
  /** Update a single filter. Pass undefined to remove it. */
  setFilter: <K extends keyof T>(name: K, value: T[K] | undefined) => void;
  /** Replace all filters at once (useful for applying draft/delayed filters) */
  setFilters: (filters: Partial<T>) => void;
  /** Remove a filter entirely, or a specific value from an array filter */
  removeFilter: (filterKey: keyof T | string, optionValue?: unknown) => void;
  /** Reset filters to default values */
  resetFilters: () => void;
  /** Resets to empty filter */
  resetFiltersToEmpty: () => void;
}

export const useFilter = <T extends FilterValues>(options?: UseFilterOptions<T>): UseFilterReturn<T> => {
  const [filters, setFiltersState] = useState<Partial<T>>(() => ({ ...options?.defaultValues }) as Partial<T>);

  // Fjern et filter helt, eller fjern en spesifikk verdi fra et array-filter.
  const removeFilter = (filterKey: keyof T, optionValue?: unknown): void => {
    setFiltersState(prev => {
      const current = prev[filterKey];
      if (current === undefined) return prev;
      if (optionValue !== undefined && Array.isArray(current)) {
        const updated = current.filter(v => v !== optionValue);
        if (updated.length === 0) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [filterKey as string]: _removed, ...rest } = prev;
          return rest as Partial<T>;
        }
        return { ...prev, [filterKey]: updated };
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [filterKey as string]: _removed, ...rest } = prev;
      return rest as Partial<T>;
    });
  };

  // Sett en filtervalue. Send inn undefined for å fjerne filteret.
  const setFilter = <K extends keyof T>(name: K, value: T[K] | undefined): void => {
    if (value === undefined) {
      removeFilter(name);
      return;
    }
    setFiltersState(prev => ({ ...prev, [name]: value }));
  };

  // Erstatt alle filtre på en gang (f.eks. ved "Bruk filter" i delayed filtrering).
  const setFilters = (newFilters: Partial<T>): void => {
    setFiltersState(newFilters);
  };

  const resetFilters = (): void => {
    setFiltersState({ ...options?.defaultValues } as Partial<T>);
  };

  const resetFiltersToEmpty = (): void => {
    setFiltersState({});
  };

  return { filters, setFilter, setFilters, removeFilter, resetFilters, resetFiltersToEmpty };
};
