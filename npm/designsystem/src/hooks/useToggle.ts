import { useState, useEffect } from 'react';
import { usePrevious } from './usePrevious';

/**
 * Hook for å toggle en boolean og kjøre en callback når verdien endres
 *
 * @param initialValue Initiell verdi for boolean
 * @param callback Funksjon som kalles når value endrer verdi (optional)
 * @returns Objekt med nåværende verdi og funksjon som kan kalles for å toggle verdien
 */
export const useToggle = (initialValue: boolean, callback?: (value: boolean) => void): { value: boolean; toggleValue: () => void } => {
  const [value, setValue] = useState(initialValue);
  const previousValue = usePrevious(value);

  const toggleValue = () => {
    setValue(!value);
  };

  useEffect(() => {
    if (initialValue !== value) {
      setValue(initialValue);
    }
  }, [initialValue]);

  useEffect(() => {
    if (callback && value !== !!previousValue) {
      callback(value);
    }
  }, [value, callback]);

  return { value, toggleValue };
};
