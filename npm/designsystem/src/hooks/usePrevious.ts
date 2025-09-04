import { useEffect, useRef } from 'react';

/**
 * Brukes f.eks. i forbindelse med useState for å kunne sammenlikne ny verdi med gammel.
 * @param value Verdi du ønsker å ta vare på
 * @returns Forrige verdi
 */
export const usePrevious = <T>(value: T): T | undefined => {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
