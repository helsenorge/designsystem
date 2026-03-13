import { useState } from 'react';

// Vi har åpnet for at consumer kan sende inn egne FilterValue navn f.eks. { kategori: "klinikker" }
// TODO: Kan denne åpnes mer og fortsatt ha typesikkerhet?
// TODO: Marie har eksempel på key typesikkerhet her
export type FilterValues = Record<string, string | string[] | undefined>;

// TODO: Denne burde kanskje og være mer åpen
export interface ActiveFilter {
  /** Name of the filter group */
  filterName: string;
  /** The filter option value */
  value: string;
  /** Display text for the chip */
  label: string;
  /** Remove this filter */
  remove: () => void;
}

export interface UseFilterOptions<T extends FilterValues> {
  /** Initial filter values */
  defaultValues?: Partial<T>;
  /** Map of filter name → { optionValue: displayLabel } for chip rendering */
  labels?: Partial<Record<keyof T, Record<string, string>>>;
}

export interface UseFilterReturn<T extends FilterValues> {
  /** Current committed filter values */
  filters: Partial<T>;
  /** Update a single filter. Pass undefined to remove it. */
  setFilter: <K extends keyof T>(name: K, value: T[K] | undefined) => void;
  /** Replace all filters at once (useful for applying draft/delayed filters) */
  setFilters: (filters: Partial<T>) => void;
  /** Remove a filter entirely, or a specific value from an array filter */
  removeFilter: (filterName: keyof T, optionValue?: string) => void;
  /** Active filters derived from current state, ready for chip rendering */
  activeFilters: ActiveFilter[];
  /** Reset filters to default values */
  resetFilters: () => void;
}

export const useFilter = <T extends FilterValues>(options?: UseFilterOptions<T>): UseFilterReturn<T> => {
  const [filters, setFiltersState] = useState<Partial<T>>(options?.defaultValues ?? {});

  const setFilter = <K extends keyof T>(name: K, value: T[K] | undefined): void => {
    if (value === undefined) {
      removeFilter(name);
      return;
    }
    setFiltersState(prev => ({ ...prev, [name]: value }));
  };

  const setFilters = (newFilters: Partial<T>): void => {
    setFiltersState(newFilters);
  };

  const removeFilter = (filterName: keyof T, optionValue?: string): void => {
    setFiltersState(prev => {
      const current = prev[filterName];
      if (Array.isArray(current) && optionValue) {
        const updated = current.filter(v => v !== optionValue);
        if (updated.length === 0) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [filterName as string]: _removed, ...rest } = prev;
          return rest as Partial<T>;
        }
        return { ...prev, [filterName]: updated };
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [filterName as string]: _removed, ...rest } = prev;
      return rest as Partial<T>;
    });
  };

  const resolveLabel = (filterName: string, value: string): string => {
    return options?.labels?.[filterName]?.[value] ?? value;
  };

  const activeFilters: ActiveFilter[] = Object.entries(filters).flatMap(([name, value]) => {
    if (value === undefined || value === '') return [];
    if (Array.isArray(value)) {
      return value.filter(Boolean).map(v => ({
        filterName: name,
        value: v,
        label: resolveLabel(name, v),
        remove: () => removeFilter(name as keyof T, v),
      }));
    }
    return [
      {
        filterName: name,
        value: value as string,
        label: resolveLabel(name, value as string),
        remove: () => removeFilter(name as keyof T),
      },
    ];
  });

  const resetFilters = (): void => {
    setFiltersState(options?.defaultValues ?? {});
  };

  return { filters, setFilter, setFilters, removeFilter, activeFilters, resetFilters };
};
