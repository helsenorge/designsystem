import { renderHook, act } from '@testing-library/react';

import { useFilter } from './useFilter';
import { createFilterConfig, filterItems, matchFilter, sortBy, sortItems, toggleArrayFilter } from './utils';

interface TestItem {
  name: string;
  kategori: string[];
  status: string;
  aktiv: boolean;
}

const testItems: TestItem[] = [
  { name: 'Alfa', kategori: ['a', 'b'], status: 'aktiv', aktiv: true },
  { name: 'Beta', kategori: ['b', 'c'], status: 'inaktiv', aktiv: false },
  { name: 'Gamma', kategori: ['a'], status: 'aktiv', aktiv: true },
  { name: 'Delta', kategori: ['c'], status: 'venter', aktiv: false },
];

describe('Gitt at createFilterConfig brukes', (): void => {
  describe('Når config har defaultValues', (): void => {
    test('Så returneres riktige defaultValues i filterOptions', (): void => {
      const { filterOptions } = createFilterConfig<{ status: string }>({
        status: { options: [{ value: 'aktiv', label: 'Aktiv' }], defaultValue: 'aktiv' },
      });

      expect(filterOptions.defaultValues).toEqual({ status: 'aktiv' });
    });
  });

  describe('Når config har options med getLabel', (): void => {
    test('Så returnerer getLabel riktig tekst', (): void => {
      const { getLabel } = createFilterConfig<{ status: string }>({
        status: {
          options: [
            { value: 'aktiv', label: 'Aktiv' },
            { value: 'inaktiv', label: 'Inaktiv' },
          ],
          getLabel: o => o.label,
        },
      });

      expect(getLabel('status', 'aktiv')).toBe('Aktiv');
      expect(getLabel('status', 'inaktiv')).toBe('Inaktiv');
    });
  });

  describe('Når getLabel kalles med ukjent verdi', (): void => {
    test('Så returneres String(value) som fallback', (): void => {
      const { getLabel } = createFilterConfig<{ status: string }>({
        status: { options: [{ value: 'aktiv', label: 'Aktiv' }], getLabel: o => o.label },
      });

      expect(getLabel('status', 'ukjent')).toBe('ukjent');
    });
  });

  describe('Når getLabel ikke er satt i config', (): void => {
    test('Så brukes String(value) som label', (): void => {
      const { getLabel } = createFilterConfig<{ status: string }>({
        status: { options: [{ value: 'aktiv' }] },
      });

      expect(getLabel('status', 'aktiv')).toBe('aktiv');
    });
  });
});

describe('Gitt at filterItems brukes', (): void => {
  describe('Når ingen filtre er satt', (): void => {
    test('Så returneres alle items', (): void => {
      const result = filterItems(testItems, {}, {});

      expect(result).toHaveLength(4);
    });
  });

  describe('Når et filter er satt med matcher', (): void => {
    test('Så filtreres items som ikke matcher', (): void => {
      const result = filterItems<TestItem, { status: string }>(
        testItems,
        { status: 'aktiv' },
        {
          status: matchFilter.exactMatch<TestItem>(i => i.status),
        }
      );

      expect(result).toHaveLength(2);
      expect(result.map(i => i.name)).toEqual(['Alfa', 'Gamma']);
    });
  });

  describe('Når flere filtre er satt', (): void => {
    test('Så brukes AND-logikk mellom filtrene', (): void => {
      const result = filterItems<TestItem, { status: string; kategori: string[] }>(
        testItems,
        { status: 'aktiv', kategori: ['a'] },
        {
          status: matchFilter.exactMatch<TestItem>(i => i.status),
          kategori: matchFilter.arrayIncludes<TestItem>(i => i.kategori),
        }
      );

      expect(result).toHaveLength(2);
      expect(result.map(i => i.name)).toEqual(['Alfa', 'Gamma']);
    });
  });
});

describe('Gitt at matchFilter-funksjoner brukes', (): void => {
  describe('Når arrayIncludes brukes', (): void => {
    test('Så matcher den hvis det er overlapp', (): void => {
      const matcher = matchFilter.arrayIncludes<TestItem>(i => i.kategori);

      expect(matcher(testItems[0], ['a'])).toBe(true);
      expect(matcher(testItems[0], ['c'])).toBe(false);
      expect(matcher(testItems[0], ['a', 'c'])).toBe(true);
    });
  });

  describe('Når exactMatch brukes', (): void => {
    test('Så matcher den kun ved eksakt likhet', (): void => {
      const matcher = matchFilter.exactMatch<TestItem>(i => i.status);

      expect(matcher(testItems[0], 'aktiv')).toBe(true);
      expect(matcher(testItems[0], 'inaktiv')).toBe(false);
    });

    test('Så matcher den mot array av verdier', (): void => {
      const matcher = matchFilter.exactMatch<TestItem>(i => i.status);

      expect(matcher(testItems[0], ['aktiv', 'venter'])).toBe(true);
      expect(matcher(testItems[0], ['inaktiv', 'venter'])).toBe(false);
    });
  });

  describe('Når booleanToggle brukes', (): void => {
    test('Så inkluderes alle items når filteret er false', (): void => {
      const matcher = matchFilter.booleanToggle<TestItem>(i => i.aktiv);

      expect(matcher(testItems[0], false)).toBe(true);
      expect(matcher(testItems[1], false)).toBe(true);
    });

    test('Så filtreres items der accessor er false når filteret er true', (): void => {
      const matcher = matchFilter.booleanToggle<TestItem>(i => i.aktiv);

      expect(matcher(testItems[0], true)).toBe(true); // aktiv=true
      expect(matcher(testItems[1], true)).toBe(false); // aktiv=false
    });
  });

  describe('Når textSearch brukes', (): void => {
    test('Så matcher den case-insensitivt', (): void => {
      const matcher = matchFilter.textSearch<TestItem>(i => i.name);

      expect(matcher(testItems[0], 'alfa')).toBe(true);
      expect(matcher(testItems[0], 'ALFA')).toBe(true);
      expect(matcher(testItems[0], 'beta')).toBe(false);
    });

    test('Så søker den i flere felt', (): void => {
      const matcher = matchFilter.textSearch<TestItem>(
        i => i.name,
        i => i.status
      );

      expect(matcher(testItems[0], 'aktiv')).toBe(true);
      expect(matcher(testItems[0], 'Alfa')).toBe(true);
    });
  });
});

describe('Gitt at toggleArrayFilter brukes', (): void => {
  describe('Når verdien ikke finnes i arrayet', (): void => {
    test('Så legges verdien til', (): void => {
      const { result } = renderHook(() => useFilter<{ kategori: string[] }>());

      act(() => {
        toggleArrayFilter(result.current, 'kategori', 'a');
      });

      expect(result.current.filters.kategori).toEqual(['a']);
    });
  });

  describe('Når verdien allerede finnes i arrayet', (): void => {
    test('Så fjernes verdien', (): void => {
      const { result } = renderHook(() => useFilter<{ kategori: string[] }>({ defaultValues: { kategori: ['a', 'b'] } }));

      act(() => {
        toggleArrayFilter(result.current, 'kategori', 'a');
      });

      expect(result.current.filters.kategori).toEqual(['b']);
    });
  });

  describe('Når siste verdi toggles bort', (): void => {
    test('Så settes filteret til undefined', (): void => {
      const { result } = renderHook(() => useFilter<{ kategori: string[] }>({ defaultValues: { kategori: ['a'] } }));

      act(() => {
        toggleArrayFilter(result.current, 'kategori', 'a');
      });

      expect(result.current.filters.kategori).toBeUndefined();
    });
  });
});

describe('Gitt at sortBy brukes', (): void => {
  interface SortItem {
    navn: string;
    dato?: Date;
    antall: number | null;
    aktiv: boolean;
  }

  const items: SortItem[] = [
    { navn: 'Østre', dato: new Date('2024-01-15'), antall: 2, aktiv: false },
    { navn: 'Alfa', dato: new Date('2024-03-01'), antall: 10, aktiv: true },
    { navn: 'Ærlig', dato: undefined, antall: null, aktiv: true },
    { navn: 'beta', dato: new Date('2024-02-01'), antall: 1, aktiv: false },
  ];

  describe('Når det sorteres på string', (): void => {
    test('Så sorteres det alfabetisk med norsk locale (æøå til slutt)', (): void => {
      const sorted = [...items].sort(sortBy(i => i.navn));
      expect(sorted.map(i => i.navn)).toEqual(['Alfa', 'beta', 'Ærlig', 'Østre']);
    });

    test('Så snus rekkefølgen med desc', (): void => {
      const sorted = [...items].sort(sortBy(i => i.navn, 'desc'));
      expect(sorted.map(i => i.navn)).toEqual(['Østre', 'Ærlig', 'beta', 'Alfa']);
    });
  });

  describe('Når det sorteres på Date', (): void => {
    test('Så sorteres det kronologisk med undefined til slutt', (): void => {
      const sorted = [...items].sort(sortBy(i => i.dato));
      expect(sorted.map(i => i.navn)).toEqual(['Østre', 'beta', 'Alfa', 'Ærlig']);
    });

    test('Så beholdes undefined sist også ved desc', (): void => {
      const sorted = [...items].sort(sortBy(i => i.dato, 'desc'));
      expect(sorted.map(i => i.navn)).toEqual(['Alfa', 'beta', 'Østre', 'Ærlig']);
    });
  });

  describe('Når det sorteres på number', (): void => {
    test('Så sorteres det numerisk med null til slutt', (): void => {
      const sorted = [...items].sort(sortBy(i => i.antall));
      expect(sorted.map(i => i.antall)).toEqual([1, 2, 10, null]);
    });
  });

  describe('Når det sorteres på boolean', (): void => {
    test('Så kommer true sist ved asc', (): void => {
      const sorted = [...items].sort(sortBy(i => i.aktiv));
      expect(sorted.map(i => i.aktiv)).toEqual([false, false, true, true]);
    });
  });

  describe('Når strenger inneholder tall', (): void => {
    test('Så sorteres tallene numerisk', (): void => {
      const values = [{ v: 'Rom 10' }, { v: 'Rom 2' }, { v: 'Rom 1' }];
      const sorted = [...values].sort(sortBy(i => i.v));
      expect(sorted.map(i => i.v)).toEqual(['Rom 1', 'Rom 2', 'Rom 10']);
    });
  });
});

describe('Gitt at sortItems brukes', (): void => {
  interface Resept {
    navn: string;
    rekvirertDato: Date;
  }

  const resepter: Resept[] = [
    { navn: 'Paracet', rekvirertDato: new Date('2024-02-01') },
    { navn: 'Ibux', rekvirertDato: new Date('2024-03-01') },
    { navn: 'Zoloft', rekvirertDato: new Date('2024-01-01') },
  ];

  const sorters = {
    navn: sortBy<Resept>(r => r.navn),
    rekvirertDato: sortBy<Resept>(r => r.rekvirertDato, 'desc'),
  };

  describe('Når en sorteringsnøkkel er valgt', (): void => {
    test('Så returneres en ny sortert liste', (): void => {
      const sorted = sortItems(resepter, 'navn', sorters);
      expect(sorted.map(r => r.navn)).toEqual(['Ibux', 'Paracet', 'Zoloft']);
      expect(sorted).not.toBe(resepter);
      expect(resepter[0].navn).toBe('Paracet');
    });

    test('Så brukes riktig retning fra comparatoren', (): void => {
      const sorted = sortItems(resepter, 'rekvirertDato', sorters);
      expect(sorted.map(r => r.navn)).toEqual(['Ibux', 'Paracet', 'Zoloft']);
    });
  });

  describe('Når sortKey ikke finnes i sorters', (): void => {
    test('Så returneres listen i original rekkefølge', (): void => {
      expect(sortItems(resepter, 'standard', sorters)).toBe(resepter);
      expect(sortItems(resepter, undefined, sorters)).toBe(resepter);
    });
  });

  describe('Når en egendefinert comparator brukes', (): void => {
    test('Så sorteres det med den', (): void => {
      const sorted = sortItems(resepter, 'lengde', {
        lengde: (a, b) => a.navn.length - b.navn.length,
      });
      expect(sorted.map(r => r.navn)).toEqual(['Ibux', 'Zoloft', 'Paracet']);
    });
  });
});
