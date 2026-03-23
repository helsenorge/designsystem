import { useState } from 'react';

import type { Filters } from './utils';

// Key er string men value kan være hva som helst og er ukjent for oss internt i useFilter. Den er typesikker for consumer.
// Dette mønsteret lar oss ha ulike typer i samme objekt.
export type FilterValues = Record<string, unknown>;

// Bestemmer teksten som vises i chip/tag for en filtervalue.
// Et objekt med { value: 'visningstekst' }.
export type LabelResolver = Record<string, string>;

export interface UseFilterOptions<T extends FilterValues> {
  /** Initial filter values */
  defaultValues?: Partial<T>;
  /** Map of filterKey → label resolver. Et objekt med { value: 'visningstekst' }. */
  // labels?: Partial<Record<keyof T, LabelResolver>>;
  /** When true, active filters include a remove function and render as removable Chips. Defaults to true. */
  // removable?: boolean;
}

export interface UseFilterReturn<T extends FilterValues> {
  /** Current filter state with label/remove info — use for both filtering and chip rendering */
  filters: Filters<T>;
  /** Update a single filter. Pass undefined to remove it. */
  setFilter: <K extends keyof T>(name: K, value: T[K] | undefined) => void;
  /** Replace all filters at once (useful for applying draft/delayed filters) */
  setFilters: (filters: Partial<T>) => void;
  /** Remove a filter entirely, or a specific value from an array filter */
  removeFilter: (filterKey: keyof T, optionValue?: string) => void;
  /** Reset filters to default values */
  resetFilters: () => void;
  /** Resets to empty filter */
  resetFiltersToEmpty: () => void;
}

export const useFilter = <T extends FilterValues>(options?: UseFilterOptions<T>): UseFilterReturn<T> => {
  // Slå opp label for en filterverdi fra labels-configen.
  const resolveLabel = (filterKey: string, value: unknown): string => {
    const resolver = options?.labels?.[filterKey];
    const str = String(value);
    return resolver?.[str] ?? str;
  };

  // Konverter en rå verdi til filter items.
  const toItems = (filterKey: string, value: unknown): NonNullable<Filters<T>[keyof T]> => {
    // const removable = options?.removable ?? true;
    if (Array.isArray(value)) {
      return value.filter(Boolean).map(v => ({
        filterKey,
        value: v,
        label: resolveLabel(filterKey, v),
        // ...(removable && { remove: (): void => removeFilter(filterKey as keyof T, String(v)) }),
      }));
    }
    return [
      {
        filterKey,
        value,
        label: resolveLabel(filterKey, value),
        // ...(removable && { remove: (): void => removeFilter(filterKey as keyof T) }),
      },
    ];
  };

  // Konverter rå filterverdier til Filters<T>.
  const fromRawValues = (raw: Partial<T>): Filters<T> => {
    const result = {} as Filters<T>;
    for (const [key, value] of Object.entries(raw)) {
      if (value === undefined || value === '') continue;
      result[key as keyof T] = toItems(key, value);
    }
    return result;
  };

  const [filters, setFiltersState] = useState<Filters<T>>(() => fromRawValues(options?.defaultValues ?? {}));

  // Fjern et filter helt, eller fjern en spesifikk verdi.
  // Bruker setState(prev => ...) så closures aldri blir stale.
  const removeFilter = (filterKey: keyof T, optionValue?: string): void => {
    setFiltersState(prev => {
      const items = prev[filterKey];
      if (!items) return prev;
      if (optionValue) {
        const updated = items.filter(item => String(item.value) !== optionValue);
        if (updated.length === 0) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { [filterKey as string]: _removed, ...rest } = prev;
          return rest as Filters<T>;
        }
        return { ...prev, [filterKey]: updated };
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [filterKey as string]: _removed, ...rest } = prev;
      return rest as Filters<T>;
    });
  };

  // Sett en filtervalue. Send inn undefined for å fjerne filteret.
  const setFilter = <K extends keyof T>(name: K, value: T[K] | undefined): void => {
    if (value === undefined) {
      removeFilter(name);
      return;
    }
    setFiltersState(prev => ({ ...prev, [name]: toItems(String(name), value) }));
  };

  // Erstatt alle filtre på en gang (f.eks. ved "Bruk filter" i delayed filtrering).
  const setFilters = (newFilters: Partial<T>): void => {
    setFiltersState(fromRawValues(newFilters));
  };

  // Resetter alle filtre til default values.
  // @@todo: trengs nok både en funksjon som nullstiller helt og
  // defaultValues vil nok brukes mye til query params og da er det fint å kunne nullstille helt
  const resetFilters = (): void => {
    setFiltersState(fromRawValues(options?.defaultValues ?? {}));
  };

  const resetFiltersToEmpty = (): void => {
    setFiltersState({} as Filters<T>);
  };

  return { filters, setFilter, setFilters, removeFilter, resetFilters, resetFiltersToEmpty };
};
