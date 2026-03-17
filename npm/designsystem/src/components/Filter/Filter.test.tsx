import { render, screen, renderHook, act } from '@testing-library/react';

import Filter from './Filter';
import { useFilter } from './useFilter';

describe('Gitt at Filter skal vises', (): void => {
  describe('Når Filter vises', (): void => {
    test('Så vises Filter', (): void => {
      render(
        <Filter activeFilters={[]} testId="filter-test">
          {'Innhold'}
        </Filter>
      );
      expect(screen.getByTestId('filter-test')).toBeInTheDocument();
    });
  });
});

describe('Gitt at useFilter brukes', (): void => {
  describe('Når et filter settes', (): void => {
    test('Så oppdateres filters', (): void => {
      const { result } = renderHook(() => useFilter<{ status: string }>());
      act(() => {
        result.current.setFilter('status', 'active');
      });
      expect(result.current.filters.status).toBe('active');
    });

    test('Så oppdateres activeFilters', (): void => {
      const { result } = renderHook(() => useFilter<{ status: string }>({ labels: { status: { active: 'Aktiv' } } }));
      act(() => {
        result.current.setFilter('status', 'active');
      });
      expect(result.current.activeFilters).toHaveLength(1);
      expect(result.current.activeFilters[0].label).toBe('Aktiv');
    });
  });

  describe('Når et filter fjernes', (): void => {
    test('Så fjernes det fra filters', (): void => {
      const { result } = renderHook(() => useFilter<{ status: string }>({ defaultValues: { status: 'active' } }));
      act(() => {
        result.current.removeFilter('status');
      });
      expect(result.current.filters.status).toBeUndefined();
      expect(result.current.activeFilters).toHaveLength(0);
    });
  });

  describe('Når en verdi fjernes fra et array-filter', (): void => {
    test('Så fjernes bare den ene verdien', (): void => {
      const { result } = renderHook(() => useFilter<{ categories: string[] }>({ defaultValues: { categories: ['a', 'b', 'c'] } }));
      act(() => {
        result.current.removeFilter('categories', 'b');
      });
      expect(result.current.filters.categories).toEqual(['a', 'c']);
    });
  });

  describe('Når setFilters brukes', (): void => {
    test('Så erstattes alle filter', (): void => {
      const { result } = renderHook(() => useFilter<{ status: string; categories: string[] }>({ defaultValues: { status: 'active' } }));
      act(() => {
        result.current.setFilters({ categories: ['x'] });
      });
      expect(result.current.filters).toEqual({ categories: ['x'] });
      expect(result.current.filters.status).toBeUndefined();
    });
  });

  describe('Når resetFilters kalles', (): void => {
    test('Så tilbakestilles filter til defaultValues', (): void => {
      const { result } = renderHook(() => useFilter<{ status: string }>({ defaultValues: { status: 'default' } }));
      act(() => {
        result.current.setFilter('status', 'changed');
      });
      expect(result.current.filters.status).toBe('changed');
      act(() => {
        result.current.resetFilters();
      });
      expect(result.current.filters.status).toBe('default');
    });
  });
});
