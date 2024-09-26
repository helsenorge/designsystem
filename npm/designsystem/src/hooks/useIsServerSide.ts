import { useState, useEffect } from 'react';

/**
 * Sjekk om React kjører på server, eller ikke. (useEffect kjører ikke på server)
 *
 * @returns true dersom koden kjører på server
 */
export const useIsServerSide = (): boolean => {
  const [isServerSide, setIsServerSide] = useState(true);

  useEffect(() => {
    setIsServerSide(false);
  }, []);

  return isServerSide;
};
