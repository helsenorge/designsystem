import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

/**
 * useState, men med mulighet for å oppdatere state etter X millisekunder
 * @param initialState Verdi state skal ha ved første render
 * @param delay Vent X millisekunder før state oppdateres
 * @returns state, callback for å oppdatere state etter delay, og callback for å oppdatere state umiddelbart
 */
export const useDelayedState = <S>(initialState: S, delay: number): [S, Dispatch<SetStateAction<S>>, Dispatch<SetStateAction<S>>] => {
  const [value, setValue] = useState(initialState);
  const timer = useRef<number>();

  const setDelayedValue = (newState: SetStateAction<S>): void => {
    clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setValue(newState), delay);
  };

  const setImmediateValue = (newState: SetStateAction<S>): void => {
    clearTimeout(timer.current);
    setValue(newState);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  return [value, setDelayedValue, setImmediateValue];
};
