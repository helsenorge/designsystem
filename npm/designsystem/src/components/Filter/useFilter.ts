import { useState } from 'react';

// Key er string men value kan være hva som helst og er ukjent for oss internt i useFilter. Den er typesikker for consumer.
// Dette mønsteret lar oss ha ulike typer i samme objekt.
export type FilterValues = Record<string, unknown>;

// Bestemmer teksten som vises i chip/tag for en filtervalue.
// Et objekt med { value: 'visningstekst' }.
export type LabelResolver = Record<string, string>;

// TODO: Sett opp useFilter uten activeFilter fra oss
// ActiveFilter brukes til å rendre chips og tags i Filter komponenten
export interface ActiveFilter {
  /** Key of the filter in the filter state */
  filterKey: string;
  /** The filter option value - type is defined by consumer */
  value: unknown;
  // TODO: displayText istedet?
  // TODO: Er det noen grunn til at useFilter trenger å vite om label lenger?
  /** Display text for the chip */
  label: string;
  /** Remove this filter. When provided, the filter renders as a removable Chip. When omitted, it renders as a Tag. */
  remove?: () => void;
}

export interface UseFilterOptions<T extends FilterValues> {
  /** Initial filter values */
  defaultValues?: Partial<T>;
  /** Map of filterKey → label resolver. Et objekt med { value: 'visningstekst' }. */
  labels?: Partial<Record<keyof T, LabelResolver>>;
  /** When true, active filters include a remove function and render as removable Chips. Defaults to true. */
  removable?: boolean;
}

export interface UseFilterReturn<T extends FilterValues> {
  /** Current committed filter values */
  filters: Partial<T>;
  /** Update a single filter. Pass undefined to remove it. */
  setFilter: <K extends keyof T>(name: K, value: T[K] | undefined) => void;
  /** Replace all filters at once (useful for applying draft/delayed filters) */
  setFilters: (filters: Partial<T>) => void;
  /** Remove a filter entirely, or a specific value from an array filter */
  removeFilter: (filterKey: keyof T, optionValue?: string) => void;
  /** Active filters derived from current state, ready for chip rendering */
  activeFilters: ActiveFilter[];
  /** Reset filters to default values */
  resetFilters: () => void;
}

export const useFilter = <T extends FilterValues>(options?: UseFilterOptions<T>): UseFilterReturn<T> => {
  const [filters, setFiltersState] = useState<Partial<T>>(options?.defaultValues ?? {});

  // Sett en filtervalue. Send inn undefined for å fjerne filteret.
  const setFilter = <K extends keyof T>(name: K, value: T[K] | undefined): void => {
    if (value === undefined) {
      removeFilter(name);
      return;
    }
    setFiltersState(prev => ({ ...prev, [name]: value }));
  };

  // Erstatt alle filtre på én gang (f.eks. ved "Bruk filter" i delayed modus).
  const setFilters = (newFilters: Partial<T>): void => {
    setFiltersState(newFilters);
  };

  // Fjern et filter helt, eller fjern en value fra filter array.
  const removeFilter = (filterKey: keyof T, optionValue?: string): void => {
    setFiltersState(prev => {
      const current = prev[filterKey];
      if (Array.isArray(current) && optionValue) {
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

  // Slår opp visningsteksten for en filtervalue. Bruker labels fra config hvis de finnes.
  const resolveLabel = (filterKey: string, value: unknown): string => {
    const resolver = options?.labels?.[filterKey];
    const stringValue = String(value);
    if (resolver) {
      return resolver[stringValue] ?? stringValue;
    }
    return stringValue;
  };

  // Bygger listen over aktive filtre for chip/tag rendering.
  const activeFilters: ActiveFilter[] = Object.entries(filters).flatMap(([name, value]) => {
    if (value === undefined || value === '') {
      return [];
    }
    const removable = options?.removable ?? true;
    if (Array.isArray(value)) {
      return value.filter(Boolean).map(v => ({
        filterKey: name,
        value: v,
        label: resolveLabel(name, v),
        ...(removable && { remove: () => removeFilter(name as keyof T, String(v)) }),
      }));
    }
    return [
      {
        filterKey: name,
        value: value,
        label: resolveLabel(name, value),
        ...(removable && { remove: () => removeFilter(name as keyof T) }),
      },
    ];
  });

  // Resetter alle filtre til default values.
  const resetFilters = (): void => {
    setFiltersState(options?.defaultValues ?? {});
  };

  return { filters, setFilter, setFilters, removeFilter, activeFilters, resetFilters };
};
