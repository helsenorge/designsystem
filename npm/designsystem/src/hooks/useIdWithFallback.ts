import { useId } from 'react';

/**
 * Returner unik id som ikke endrer seg for hver render
 * @param initial id som vil overstyre react sin useId
 * @returns stable id-string
 */
export const useIdWithFallback = (initial?: string): string => {
  const fallbackId = useId();

  return initial || fallbackId;
};
