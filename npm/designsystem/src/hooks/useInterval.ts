import { useEffect } from 'react';

/**
 * Kjør en funksjon ved intervaller basert på ønsket frequency.
 *
 * @param callback Funksjon som skal kjøres
 * @param frequency Hvor ofte vi skal kjøre funksjonen
 * @returns void
 */
export const useInterval = (callback: () => void, frequency = 10): void => {
  useEffect(() => {
    const timer = setInterval(callback, frequency);

    return () => {
      clearInterval(timer);
    };
  }, [callback, frequency]);
};
