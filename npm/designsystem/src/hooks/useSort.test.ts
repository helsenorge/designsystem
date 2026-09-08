import { act, renderHook } from '@testing-library/react';

import { useSort } from './useSort';
import { SortDirection } from '../components/Table/constants';

interface Rad {
  navn: string;
  alder: number;
  kontor: { navn: string };
}

const data: Rad[] = [
  { navn: 'Bjørn', alder: 40, kontor: { navn: 'Curato' } },
  { navn: 'Arne', alder: 9, kontor: { navn: 'Best helse' } },
  { navn: 'Åse', alder: 100, kontor: { navn: 'Aleris' } },
];

describe('Gitt at useSort brukes', (): void => {
  describe('Når hooken initialiseres uten sortering', (): void => {
    test('Så returneres data usortert', (): void => {
      const { result } = renderHook(() => useSort({ data }));

      expect(result.current.sortedData).toEqual(data);
      expect(result.current.sortColumnKey).toBeUndefined();
      expect(result.current.sortDirection).toBeUndefined();
    });
  });

  describe('Når requestSort kalles', (): void => {
    test('Så sorteres data stigende med norsk locale', (): void => {
      const { result } = renderHook(() => useSort({ data }));

      act(() => {
        result.current.requestSort('navn');
      });

      expect(result.current.sortedData.map(rad => rad.navn)).toEqual(['Arne', 'Bjørn', 'Åse']);
      expect(result.current.sortDirection).toBe(SortDirection.asc);
    });

    test('Så snus retningen når samme kolonne sorteres igjen', (): void => {
      const { result } = renderHook(() => useSort({ data }));

      act(() => {
        result.current.requestSort('navn');
      });
      act(() => {
        result.current.requestSort('navn');
      });

      expect(result.current.sortedData.map(rad => rad.navn)).toEqual(['Åse', 'Bjørn', 'Arne']);
      expect(result.current.sortDirection).toBe(SortDirection.desc);
    });

    test('Så kalles onSortChange med kolonne og retning', (): void => {
      const onSortChange = vi.fn();
      const { result } = renderHook(() => useSort({ data, onSortChange }));

      act(() => {
        result.current.requestSort('navn');
      });

      expect(onSortChange).toHaveBeenCalledWith('navn', SortDirection.asc);
    });
  });

  describe('Når initialSortColumnKey er satt', (): void => {
    test('Så er data sortert fra start', (): void => {
      const { result } = renderHook(() => useSort({ data, initialSortColumnKey: 'navn', initialSortDirection: SortDirection.desc }));

      expect(result.current.sortedData.map(rad => rad.navn)).toEqual(['Åse', 'Bjørn', 'Arne']);
      expect(result.current.sortColumnKey).toBe('navn');
      expect(result.current.sortDirection).toBe(SortDirection.desc);
    });
  });

  describe('Når det sorteres på tall', (): void => {
    test('Så sorteres tallene numerisk', (): void => {
      const { result } = renderHook(() => useSort({ data, initialSortColumnKey: 'alder' }));

      expect(result.current.sortedData.map(rad => rad.alder)).toEqual([9, 40, 100]);
    });

    test('Så sorteres null til slutt', (): void => {
      const antall = [{ antall: 2 }, { antall: 10 }, { antall: null }, { antall: 1 }];
      const { result } = renderHook(() => useSort({ data: antall, initialSortColumnKey: 'antall' }));

      expect(result.current.sortedData.map(rad => rad.antall)).toEqual([1, 2, 10, null]);
    });
  });

  describe('Når strenger inneholder tall', (): void => {
    test('Så sorteres tallene numerisk', (): void => {
      const rom = [{ navn: 'Rom 10' }, { navn: 'Rom 2' }, { navn: 'Rom 1' }];
      const { result } = renderHook(() => useSort({ data: rom, initialSortColumnKey: 'navn' }));

      expect(result.current.sortedData.map(rad => rad.navn)).toEqual(['Rom 1', 'Rom 2', 'Rom 10']);
    });
  });

  describe('Når det sorteres på Date', (): void => {
    const datoer = [
      { navn: 'B', dato: new Date('2024-03-01') },
      { navn: 'A', dato: new Date('2024-01-15') },
      { navn: 'C', dato: undefined as Date | undefined },
    ];

    test('Så sorteres det kronologisk med undefined til slutt', (): void => {
      const { result } = renderHook(() => useSort({ data: datoer, initialSortColumnKey: 'dato' }));

      expect(result.current.sortedData.map(rad => rad.navn)).toEqual(['A', 'B', 'C']);
    });

    test('Så beholdes undefined sist også ved desc', (): void => {
      const { result } = renderHook(() =>
        useSort({ data: datoer, initialSortColumnKey: 'dato', initialSortDirection: SortDirection.desc })
      );

      expect(result.current.sortedData.map(rad => rad.navn)).toEqual(['B', 'A', 'C']);
    });
  });

  describe('Når det sorteres på boolean', (): void => {
    test('Så kommer true sist ved asc', (): void => {
      const rader = [{ aktiv: true }, { aktiv: false }, { aktiv: true }, { aktiv: false }];
      const { result } = renderHook(() => useSort({ data: rader, initialSortColumnKey: 'aktiv' }));

      expect(result.current.sortedData.map(rad => rad.aktiv)).toEqual([false, false, true, true]);
    });
  });

  describe('Når kolonnenavnet bruker dot-notasjon', (): void => {
    test('Så sorteres det på den nøstede verdien', (): void => {
      const { result } = renderHook(() => useSort({ data, initialSortColumnKey: 'kontor.navn' }));

      expect(result.current.sortedData.map(rad => rad.kontor.navn)).toEqual(['Aleris', 'Best helse', 'Curato']);
    });
  });

  describe('Når nøkkelen ikke finnes på elementene', (): void => {
    test('Så beholdes original rekkefølge', (): void => {
      const { result } = renderHook(() => useSort({ data, initialSortColumnKey: 'adresse.gate' }));

      expect(result.current.sortedData).toEqual(data);
    });
  });

  describe('Når getSortValue er satt', (): void => {
    test('Så brukes den til å hente sorteringsverdien', (): void => {
      const { result } = renderHook(() =>
        useSort({
          data,
          initialSortColumnKey: 'navn',
          getSortValue: (rad): number => rad.alder,
        })
      );

      expect(result.current.sortedData.map(rad => rad.navn)).toEqual(['Arne', 'Bjørn', 'Åse']);
    });
  });

  describe('Når sorters er satt for en nøkkel', (): void => {
    test('Så brukes den egendefinerte comparatoren', (): void => {
      const { result } = renderHook(() =>
        useSort({
          data,
          initialSortColumnKey: 'navn',
          sorters: { navn: (a, b): number => a.navn.length - b.navn.length },
        })
      );

      expect(result.current.sortedData.map(rad => rad.navn)).toEqual(['Åse', 'Arne', 'Bjørn']);
    });

    test('Så snus comparatoren ved desc', (): void => {
      const { result } = renderHook(() =>
        useSort({
          data,
          initialSortColumnKey: 'navn',
          initialSortDirection: SortDirection.desc,
          sorters: { navn: (a, b): number => a.navn.length - b.navn.length },
        })
      );

      expect(result.current.sortedData.map(rad => rad.navn)).toEqual(['Bjørn', 'Arne', 'Åse']);
    });

    test('Så brukes standard sortering for andre nøkler', (): void => {
      const { result } = renderHook(() =>
        useSort({
          data,
          initialSortColumnKey: 'alder',
          sorters: { navn: (a, b): number => a.navn.length - b.navn.length },
        })
      );

      expect(result.current.sortedData.map(rad => rad.alder)).toEqual([9, 40, 100]);
    });
  });

  describe('Når sortColumnKey er satt (kontrollert modus)', (): void => {
    test('Så sorteres data etter den kontrollerte nøkkelen', (): void => {
      const { result } = renderHook(() => useSort({ data, sortColumnKey: 'navn', sortDirection: SortDirection.asc }));

      expect(result.current.sortedData.map(rad => rad.navn)).toEqual(['Arne', 'Bjørn', 'Åse']);
    });

    test('Så endrer ikke requestSort sorteringen selv, men kaller onSortChange', (): void => {
      const onSortChange = vi.fn();
      const { result } = renderHook(() => useSort({ data, sortColumnKey: 'navn', sortDirection: SortDirection.asc, onSortChange }));

      act(() => {
        result.current.requestSort('navn');
      });

      expect(result.current.sortDirection).toBe(SortDirection.asc);
      expect(onSortChange).toHaveBeenCalledWith('navn', SortDirection.desc);
    });
  });

  describe('Når disableInternalSort er satt', (): void => {
    test('Så returneres data usortert, men state og callback oppdateres', (): void => {
      const onSortChange = vi.fn();
      const { result } = renderHook(() => useSort({ data, disableInternalSort: true, onSortChange }));

      act(() => {
        result.current.requestSort('navn');
      });

      expect(result.current.sortedData).toEqual(data);
      expect(result.current.sortColumnKey).toBe('navn');
      expect(onSortChange).toHaveBeenCalledWith('navn', SortDirection.asc);
    });
  });

  describe('Når getSortProps brukes', (): void => {
    test('Så returneres props for sorterbar TableHeadCell', (): void => {
      const { result } = renderHook(() => useSort({ data, initialSortColumnKey: 'navn' }));

      expect(result.current.getSortProps('navn')).toEqual({
        sortable: true,
        sortDir: SortDirection.asc,
        onClick: expect.any(Function),
      });
      expect(result.current.getSortProps('alder').sortDir).toBeUndefined();
    });

    test('Så sorterer onClick på kolonnen', (): void => {
      const { result } = renderHook(() => useSort({ data }));

      act(() => {
        result.current.getSortProps('navn').onClick();
      });

      expect(result.current.sortColumnKey).toBe('navn');
    });
  });
});
