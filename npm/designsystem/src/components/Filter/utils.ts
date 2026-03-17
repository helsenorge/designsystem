import type { FilterValues, LabelResolver, UseFilterOptions, UseFilterReturn } from './useFilter';

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

/** Konfigurasjon for en filterkategori. For filter array er options per element i arrayet. */
export interface FilterCategoryConfig<V = unknown> {
  options: FilterOption<OptionValue<V>>[];
  defaultValue?: V;
}

/**
 * Lager UseFilterOptions fra et oppsett av filterkategorier.
 * Samler defaultValues og labels automatisk, så consumer slipper å gjøre det manuelt.
 *
 * Eksempel:
 *   const config = createFilterConfig<MyFilters>({
 *     categories: { options: categoryOptions, defaultValue: ['oslo'] },
 *     status: { options: statusOptions },
 *     eResept: { options: [{ value: true, label: 'E-resept' }] },
 *   });
 *   const filter = useFilter(config);
 */
export const createFilterConfig = <T extends FilterValues>(categories: {
  [K in keyof T]?: FilterCategoryConfig<T[K]>;
}): UseFilterOptions<T> => {
  const labels = {} as Record<keyof T, LabelResolver>;
  const defaultValues = {} as Partial<T>;

  for (const key in categories) {
    const category = categories[key];
    if (category) {
      labels[key] = Object.fromEntries((category.options as FilterOption[]).map(o => [String(o.value), o.label]));
      if (category.defaultValue !== undefined) {
        defaultValues[key] = category.defaultValue as T[typeof key];
      }
    }
  }

  return { labels, defaultValues };
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
  /** Array-filter: matcher hvis item-verdien finnes i filterverdien (OR-logikk) */
  arrayIncludes:
    <TItem>(accessor: (item: TItem) => string) =>
    (item: TItem, value: string[]): boolean =>
      value.includes(accessor(item)),

  /** Eksakt match: matcher hvis item-verdien er lik filterverdien */
  exactMatch:
    <TItem>(accessor: (item: TItem) => string) =>
    (item: TItem, value: string): boolean =>
      accessor(item) === value,

  /** Boolean toggle: når filterverdien er true, inkluder kun items der accessor returnerer true */
  booleanToggle:
    <TItem>(accessor: (item: TItem) => boolean) =>
    (item: TItem, value: boolean): boolean =>
      !value || accessor(item),
};

/**
 * Filtrerer en liste med items basert på aktive filterverdier.
 * Hvert filter som er satt må matche for at et item skal inkluderes (AND-logikk).
 *
 * Eksempel:
 *   const filtered = filterItems(documents, filter.filters, {
 *     categories: (doc, value) => value.includes(doc.category),
 *     status: (doc, value) => doc.status === value,
 *     eResept: (doc, value) => !value || doc.eResept === true,
 *   });
 */
export const filterItems = <TItem, T extends FilterValues>(
  items: TItem[],
  filters: Partial<T>,
  matchers: { [K in keyof T]?: (item: TItem, value: NonNullable<T[K]>) => boolean }
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

// Sånn gjør consumere det i dag vs. med våre helpers
// DeltHelseOpplysninger - toggle person i array-filter:
//
// FØR (manuelt):
//   const togglePersonFilter = (person: FilterPerson) => {
//     const isPersonInFilter = searchFilters.personer.some(p => p.id === person.id);
//     const personerFilter = isPersonInFilter
//       ? searchFilters.personer.filter(p => p.id !== person.id)
//       : [...searchFilters.personer, person];
//     dispatch(setSearchFilters({ personer: personerFilter }));
//   };
//
// NÅ (med toggleArrayFilter):
//   toggleArrayFilter(filter, 'personer', person);

// Pasientjournal - sette default filter fra URL-params:
//
// FØR (manuelt):
//   if (fromDate) {
//     defaultValues.fromDate = { value: fromDate, displayText: getDatoDisplayText(resources.filterDateFrom, fromDate) };
//   }
//   if (toDate) {
//     defaultValues.toDate = { value: toDate, displayText: getDatoDisplayText(resources.filterDateTo, toDate) };
//   }
//   if (kategorier) {
//     kategorier.forEach(kategori => {
//       defaultValues[`${kategoriKey}-${kategori}`] = { value: `${kategori}`, displayText: getKategoriLabel(kategori, resources) };
//     });
//   }
//
// NÅ (med createFilterConfig):
//   const config = createFilterConfig<JournalFilters>({
//     fromDate: { options: [], defaultValue: fromDate },
//     toDate: { options: [], defaultValue: toDate },
//     kategorier: { options: kategoriOptions, defaultValue: kategorier },
//   });
//   const filter = useFilter(config);

// Pasientjournal - frontend filtrering:
//
// FØR (manuelt):
//   const onFiltersSubmit = (): void => {
//     const kategorier: Array<XcaDokumentKategori> = getFilterKategorier(activeFilters ?? [], kategoriKey);
//     const filterFraDato = filters?.fromDate?.value;
//     const fraDato = filterFraDato instanceof Date ? filterFraDato : undefined;
//     const filterTilDato = filters?.toDate?.value;
//     const tilDato = filterTilDato instanceof Date ? filterTilDato : undefined;
//     if (komplett) {
//       dispatch(localFilterDokumentListe(fraDato, tilDato, kategorier));
//     } else {
//       dispatch(fetchDokumentListe({ refetch: true, init: false, fromDate: fraDato, toDate: tilDato, kategorier }));
//     }
//   };
//
// NÅ (med filterItems):
//   const filtered = filterItems(dokumenter, filter.filters, {
//     kategorier: (dok, value) => value.includes(dok.kategori),
//     fromDate: (dok, value) => dok.dato >= value,
//     toDate: (dok, value) => dok.dato <= value,
//   });

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
