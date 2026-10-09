import { act, renderHook } from '@testing-library/react';

import { useTableExpandedRows } from './useTableExpandedRows';

describe('Gitt at useTableExpandedRows brukes', (): void => {
  describe('Når hooken initialiseres', (): void => {
    test('Så er ingen rader ekspandert', (): void => {
      const { result } = renderHook(() => useTableExpandedRows());

      expect(result.current.expandedRows).toEqual({});
      expect(result.current.isExpanded('rad1')).toBe(false);
    });
  });

  describe('Når toggleExpanded kalles', (): void => {
    test('Så ekspanderes raden', (): void => {
      const { result } = renderHook(() => useTableExpandedRows());

      act(() => {
        result.current.toggleExpanded('rad1');
      });

      expect(result.current.isExpanded('rad1')).toBe(true);
      expect(result.current.isExpanded('rad2')).toBe(false);
    });

    test('Så lukkes raden når den allerede er ekspandert', (): void => {
      const { result } = renderHook(() => useTableExpandedRows());

      act(() => {
        result.current.toggleExpanded('rad1');
      });
      act(() => {
        result.current.toggleExpanded('rad1');
      });

      expect(result.current.isExpanded('rad1')).toBe(false);
    });
  });

  describe('Når collapseAll kalles', (): void => {
    test('Så lukkes alle rader', (): void => {
      const { result } = renderHook(() => useTableExpandedRows());

      act(() => {
        result.current.toggleExpanded('rad1');
        result.current.toggleExpanded('rad2');
      });
      act(() => {
        result.current.collapseAll();
      });

      expect(result.current.expandedRows).toEqual({});
    });
  });
});
