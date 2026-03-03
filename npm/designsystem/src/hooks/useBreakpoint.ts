import { useSyncExternalStore } from 'react';

import { breakpoints, screen } from '../theme/grid';

export enum Breakpoint {
  xxs = breakpoints.xxs,
  xs = breakpoints.xs,
  sm = breakpoints.sm,
  md = breakpoints.md,
  lg = breakpoints.lg,
  xl = breakpoints.xl,
}

/** Sjekker nettleserens media queries fra største til minste; det høyeste treffet gjelder */
function getCurrentBreakpoint(): Breakpoint {
  const mediaQueryList = Object.entries(screen)
    .reverse() // Sjekk xl, lg, md, osv. i synkende rekkefølge
    .map(([size, mediaQuery]) => {
      return {
        breakpoint: Breakpoint[size as keyof typeof Breakpoint],
        mq: window.matchMedia(mediaQuery),
      };
    });

  const matched = mediaQueryList.find(entry => entry.mq.matches);
  return matched?.breakpoint ?? Breakpoint.xxs;
}

/** Event listeners for media queries - dette varslet React ved endringer */
function subscribeToBreakpointChanges(callback: () => void): () => void {
  const mediaQueryList = Object.values(screen).map(mediaQuery => {
    const mq = window.matchMedia(mediaQuery);
    mq.addEventListener('change', callback);
    return mq;
  });

  return (): void => {
    mediaQueryList.forEach(mq => {
      mq.removeEventListener('change', callback);
    });
  };
}

/** Brukes ved server side rendering der window ikke finnes. Returnerer minste breakpoint som default */
const getServerSnapshot = (): Breakpoint => Breakpoint.xxs;

export const useBreakpoint = (): Breakpoint => {
  return useSyncExternalStore(subscribeToBreakpointChanges, getCurrentBreakpoint, getServerSnapshot);
};
