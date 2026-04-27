import { renderHook, act } from '@testing-library/react';

import { useFilterDrawer } from './useFilterDrawer';

describe('Gitt at useFilterDrawer brukes', (): void => {
  describe('Når hooken initialiseres', (): void => {
    test('Så er draweren lukket', (): void => {
      const { result } = renderHook(() => useFilterDrawer());

      expect(result.current.isOpen).toBe(false);
      expect(result.current.initialView).toBeUndefined();
    });
  });

  describe('Når open kalles uten view', (): void => {
    test('Så åpnes draweren uten initialView', (): void => {
      const { result } = renderHook(() => useFilterDrawer());

      act(() => {
        result.current.open();
      });

      expect(result.current.isOpen).toBe(true);
      expect(result.current.initialView).toBeUndefined();
    });
  });

  describe('Når open kalles med et view', (): void => {
    test('Så åpnes draweren med riktig initialView', (): void => {
      const { result } = renderHook(() => useFilterDrawer<'kategori' | 'status'>());

      act(() => {
        result.current.open('kategori');
      });

      expect(result.current.isOpen).toBe(true);
      expect(result.current.initialView).toBe('kategori');
    });
  });

  describe('Når close kalles', (): void => {
    test('Så lukkes draweren', (): void => {
      const { result } = renderHook(() => useFilterDrawer());

      act(() => {
        result.current.open();
      });
      expect(result.current.isOpen).toBe(true);

      act(() => {
        result.current.close();
      });
      expect(result.current.isOpen).toBe(false);
    });
  });
});
