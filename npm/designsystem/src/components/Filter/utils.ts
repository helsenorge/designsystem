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
}

/**
 * Lager UseFilterOptions fra et oppsett av filterkategorier.
 * Samler defaultValues automatisk fra config.
 *
 * Eksempel:
 *   const config = createFilterConfig<MyFilters>({
 *     sykehus: { options: sykehusOptions, defaultValue: ['haukeland'] },
 *     status: { options: statusOptions },
 *     eResept: { options: [{ value: true, label: 'E-resept' }] },
 *   });
 *   const filter = useFilter(config);
 */
export const createFilterConfig = <T extends FilterValues>(categories: {
  [K in keyof T]?: FilterCategoryConfig<T[K]>;
}): UseFilterOptions<T> => {
  const defaultValues = {} as Partial<T>;

  for (const key in categories) {
    const category = categories[key];
    if (category?.defaultValue !== undefined) {
      defaultValues[key] = category.defaultValue as T[typeof key];
    }
  }

  return { defaultValues };
};

// TODO: Flere varianter her?
// TODO: Dato range er en
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

/** Bygger en Map fra value → label fra en options-liste. Nyttig for å slå opp labels utenfor filterstate.
 *
 * Eksempel:
 *   const labelMap = createLabelMap(omradeOptions);
 *   labelMap.get(FagomradeType.PSYKISK_HELSE) // → 'Psykisk helse'
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createLabelMap = <V>(options: { value: V; [key: string]: any }[], getLabel?: (o: any) => string): Map<V, string> => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const resolve = getLabel ?? ((o: any): string => String(o.label ?? o.value));
  return new Map(options.map(o => [o.value, resolve(o)]));
};

// ─── Før/etter-eksempler: slik gjør consumere det i dag vs. med våre helpers ───
//
// 1. Toggle verdi i array-filter (DeltHelseOpplysninger)
//
// FØR (manuelt):
//   const toggleSykehusFilter = (sykehus: string) => {
//     const isSelected = searchFilters.sykehus.includes(sykehus);
//     const updated = isSelected
//       ? searchFilters.sykehus.filter(s => s !== sykehus)
//       : [...searchFilters.sykehus, sykehus];
//     dispatch(setSearchFilters({ sykehus: updated }));
//   };
//
// NÅ (med toggleArrayFilter):
//   toggleArrayFilter(filter, 'sykehus', sykehus);
//
//
// 2. Oppsett av filter med options, labels og default values (Pasientjournal)
//
// FØR (manuelt):
//   const defaultValues: Record<string, { value: string; displayText: string }> = {};
//   if (fromDate) {
//     defaultValues.fromDate = { value: fromDate, displayText: getDatoDisplayText(resources.filterDateFrom, fromDate) };
//   }
//   if (toDate) {
//     defaultValues.toDate = { value: toDate, displayText: getDatoDisplayText(resources.filterDateTo, toDate) };
//   }
//   kategorier.forEach(kategori => {
//     defaultValues[`${kategoriKey}-${kategori}`] = { value: kategori, displayText: getKategoriLabel(kategori, resources) };
//   });
//
// NÅ (med createFilterConfig + useFilter):
//   const config = createFilterConfig<MyFilters>({
//     sykehus: { options: sykehusOptions, defaultValue: ['haukeland'] },
//     reseptstatus: { options: reseptStatusOptions },
//     eResept: { options: eReseptOptions, defaultValue: true },
//   });
//   const filter = useFilter(config);
//
//
// 3. Frontend filtrering av data (Pasientjournal)
//
// FØR (manuelt):
//   const onFiltersSubmit = (): void => {
//     const kategorier = getFilterKategorier(activeFilters ?? [], kategoriKey);
//     const fraDato = filters?.fromDate?.value instanceof Date ? filters.fromDate.value : undefined;
//     const tilDato = filters?.toDate?.value instanceof Date ? filters.toDate.value : undefined;
//     if (komplett) {
//       dispatch(localFilterDokumentListe(fraDato, tilDato, kategorier));
//     } else {
//       dispatch(fetchDokumentListe({ refetch: true, init: false, fromDate: fraDato, toDate: tilDato, kategorier }));
//     }
//   };
//
// NÅ (med filterItems + matchFilter):
//   const filterMatchers = {
//     sykehus: matchFilter.arrayIncludes<Medisin>(m => m.sykehus),
//     reseptstatus: matchFilter.exactMatch<Medisin>(m => m.reseptstatus),
//     eResept: matchFilter.booleanToggle<Medisin>(m => m.eResept),
//   };
//   const filtered = filterItems(medisiner, filter.filters, filterMatchers);
//
//
// 4. Rendering av aktive filtre som chips/tags
//
// FØR (manuelt):
//   {Object.entries(activeFilters).map(([key, value]) => (
//     <button onClick={() => removeFilter(key)}>
//       {value.displayText} ✕
//     </button>
//   ))}
//
// NÅ (med FilterResult-komponenten):
//   <FilterResult filters={filter.filters}>
//     <Button onClick={openDrawer}>Åpne filter</Button>
//   </FilterResult>
//   // Chips med remove-knapp rendres automatisk fra enriched filters

// TODO: Eksempel på filtrering på en key med backup key tilfelle det ikke er treff på den første
// Undersøk om vi kan tilby dette, eller la consumerne bruke vårt filter + legge på sitt eget som backup?
// export const filterOmraderOgRekvirent = (
//   omrader: string[],
//   rekvirent: string[],
//   provesvarListe: NasjonaleProvesvar[]
// ): NasjonaleProvesvar[] => {
//   const filteredOmrade =
//     omrader.length > 0 ? provesvarListe.filter(svar => svar.OmraadeKode && omrader.includes(svar.OmraadeKode)) : provesvarListe;
//   return rekvirent.length > 0
//     ? filteredOmrade.filter(
//         svar => (svar.Navn && rekvirent.includes(svar.Navn)) || (svar.Organisasjon && rekvirent.includes(svar.Organisasjon))
//       )
//     : filteredOmrade;
// };
