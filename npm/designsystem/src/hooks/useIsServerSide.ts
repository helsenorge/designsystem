import { useSyncExternalStore } from 'react';

const emptySubscribe = (): (() => void) => (): void => {};
const getClientSnapshot = (): boolean => false;
const getServerSnapshot = (): boolean => true;

/**
 * Sjekk om React kjører på server, eller ikke.
 *
 * @returns true dersom koden kjører på server
 */
export const useIsServerSide = (): boolean => {
  return useSyncExternalStore(emptySubscribe, getClientSnapshot, getServerSnapshot);
};
