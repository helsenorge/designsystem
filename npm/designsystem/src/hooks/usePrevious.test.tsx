import { act, renderHook } from '@testing-library/react';

import { useExpand } from './useExpand';
import { usePrevious } from './usePrevious';
import { useToggle } from './useToggle';

describe('Gitt at usePrevious brukes', (): void => {
  describe('Når hooken rendres første gang', (): void => {
    it('Så er forrige verdi null', (): void => {
      const { result } = renderHook(() => usePrevious('a'));

      expect(result.current).toBeNull();
    });
  });

  describe('Når verdien endres', (): void => {
    it('Så returneres verdien fra forrige render', (): void => {
      const { result, rerender } = renderHook(({ value }) => usePrevious(value), { initialProps: { value: 'a' } });

      rerender({ value: 'b' });
      expect(result.current).toBe('a');

      rerender({ value: 'c' });
      expect(result.current).toBe('b');
    });
  });

  describe('Når komponenten rendres på nytt uten at verdien endres', (): void => {
    it('Så er forrige verdi lik nåværende verdi', (): void => {
      const { result, rerender } = renderHook(({ value }) => usePrevious(value), { initialProps: { value: 'a' } });

      rerender({ value: 'b' });
      rerender({ value: 'b' });

      expect(result.current).toBe('b');
    });
  });
});

describe('Gitt at useToggle bruker usePrevious', (): void => {
  describe('Når callback får ny identitet uten at verdien endres', (): void => {
    it('Så kalles ikke callback på nytt', (): void => {
      const first = vi.fn();
      const second = vi.fn();
      const { result, rerender } = renderHook(({ cb }) => useToggle(false, cb), { initialProps: { cb: first } });

      act(() => result.current.toggleValue());
      rerender({ cb: first });
      expect(first).toHaveBeenCalledTimes(1);

      rerender({ cb: second });
      expect(second).not.toHaveBeenCalled();
    });
  });
});

describe('Gitt at useExpand ikke skal varsle på nytt', (): void => {
  describe('Når onExpand får ny identitet uten at verdien endres', (): void => {
    it('Så kalles ikke onExpand på nytt, og kalles ved faktisk endring', (): void => {
      const first = vi.fn();
      const second = vi.fn();
      const { result, rerender } = renderHook(({ cb }) => useExpand(false, cb), { initialProps: { cb: first } });

      act(() => result.current[1](true));
      expect(first).toHaveBeenCalledWith(true);

      rerender({ cb: second });
      expect(second).not.toHaveBeenCalled();

      act(() => result.current[1](false));
      expect(second).toHaveBeenCalledWith(false);
    });
  });
});
