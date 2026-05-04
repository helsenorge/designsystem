import { renderHook, act } from '@testing-library/react';

import { useFilter } from './useFilter';

type Status = 'aktiv' | 'inaktiv' | 'ventende';

interface TestFilters {
  kategori: string[];
  status: Status;
  søk: string;
  erGodkjent: boolean;
}

describe('Gitt at useFilter brukes', (): void => {
  describe('Når hooken initialiseres uten defaultValues', (): void => {
    test('Så er filters et tomt objekt', (): void => {
      const { result } = renderHook(() => useFilter<TestFilters>());

      expect(result.current.filters).toEqual({});
    });
  });

  describe('Når hooken initialiseres med defaultValues', (): void => {
    test('Så inneholder filters standardverdiene', (): void => {
      const { result } = renderHook(() => useFilter<TestFilters>({ defaultValues: { status: 'aktiv' } }));

      expect(result.current.filters).toEqual({ status: 'aktiv' });
    });
  });

  describe('Når setFilter kalles', (): void => {
    test('Så oppdateres filteret med ny verdi', (): void => {
      const { result } = renderHook(() => useFilter<TestFilters>());

      act(() => {
        result.current.setFilter('status', 'aktiv');
      });

      expect(result.current.filters.status).toBe('aktiv');
    });

    test('Så fjernes filteret når verdien er undefined', (): void => {
      const { result } = renderHook(() => useFilter<TestFilters>({ defaultValues: { status: 'aktiv' } }));

      act(() => {
        result.current.setFilter('status', undefined);
      });

      expect(result.current.filters).not.toHaveProperty('status');
    });
  });

  describe('Når setFilters kalles', (): void => {
    test('Så erstattes alle filtre på en gang', (): void => {
      const { result } = renderHook(() => useFilter<TestFilters>({ defaultValues: { status: 'aktiv' } }));

      act(() => {
        result.current.setFilters({ kategori: ['a', 'b'], søk: 'test' });
      });

      expect(result.current.filters).toEqual({ kategori: ['a', 'b'], søk: 'test' });
      expect(result.current.filters.status).toBeUndefined();
    });
  });

  describe('Når removeFilter kalles', (): void => {
    test('Så fjernes hele filteret', (): void => {
      const { result } = renderHook(() => useFilter<TestFilters>({ defaultValues: { status: 'aktiv' } }));

      act(() => {
        result.current.removeFilter('status');
      });

      expect(result.current.filters).not.toHaveProperty('status');
    });

    test('Så fjernes en spesifikk verdi fra et array-filter', (): void => {
      const { result } = renderHook(() => useFilter<TestFilters>({ defaultValues: { kategori: ['a', 'b', 'c'] } }));

      act(() => {
        result.current.removeFilter('kategori', 'b');
      });

      expect(result.current.filters.kategori).toEqual(['a', 'c']);
    });

    test('Så fjernes hele filteret når siste verdi fjernes fra arrayet', (): void => {
      const { result } = renderHook(() => useFilter<TestFilters>({ defaultValues: { kategori: ['a'] } }));

      act(() => {
        result.current.removeFilter('kategori', 'a');
      });

      expect(result.current.filters).not.toHaveProperty('kategori');
    });
  });

  describe('Når setFilter kalles med boolean-filter', (): void => {
    test('Så settes boolean-verdien riktig', (): void => {
      const { result } = renderHook(() => useFilter<TestFilters>());

      act(() => {
        result.current.setFilter('erGodkjent', true);
      });

      expect(result.current.filters.erGodkjent).toBe(true);
    });

    test('Så kan boolean settes til false uten å fjerne filteret', (): void => {
      const { result } = renderHook(() => useFilter<TestFilters>({ defaultValues: { erGodkjent: true } }));

      act(() => {
        result.current.setFilter('erGodkjent', false);
      });

      expect(result.current.filters).toHaveProperty('erGodkjent');
      expect(result.current.filters.erGodkjent).toBe(false);
    });
  });

  describe('Når setFilter kalles med custom type', (): void => {
    test('Så settes verdien med riktig type', (): void => {
      const { result } = renderHook(() => useFilter<TestFilters>());

      act(() => {
        result.current.setFilter('status', 'ventende');
      });

      expect(result.current.filters.status).toBe('ventende');
    });
  });

  describe('Når resetFilters kalles', (): void => {
    test('Så tilbakestilles filtrene til defaultValues', (): void => {
      const { result } = renderHook(() => useFilter<TestFilters>({ defaultValues: { status: 'aktiv' } }));

      act(() => {
        result.current.setFilter('kategori', ['a', 'b']);
        result.current.setFilter('søk', 'hei');
      });

      act(() => {
        result.current.resetFilters();
      });

      expect(result.current.filters).toEqual({ status: 'aktiv' });
    });
  });

  describe('Når resetFiltersToEmpty kalles', (): void => {
    test('Så tømmes alle filtre helt', (): void => {
      const { result } = renderHook(() => useFilter<TestFilters>({ defaultValues: { status: 'aktiv' } }));

      act(() => {
        result.current.setFilter('kategori', ['a']);
      });

      act(() => {
        result.current.resetFiltersToEmpty();
      });

      expect(result.current.filters).toEqual({});
    });
  });
});
