import { useState, useEffect } from 'react';

import { breakpoints, screen } from '../theme/grid';

export enum Breakpoint {
  xxs = breakpoints.xxs,
  xs = breakpoints.xs,
  sm = breakpoints.sm,
  md = breakpoints.md,
  lg = breakpoints.lg,
  xl = breakpoints.xl,
}

function getCurrentBreakpoint(): Breakpoint {
  // We read from largest -> smallest or vice versa
  // so that the first match is the "highest" one that applies
  const mediaQueryList = Object.entries(screen)
    .reverse() // e.g. check xl, lg, md, etc. in descending order
    .map(([size, mediaQuery]) => {
      return {
        breakpoint: Breakpoint[size as keyof typeof Breakpoint],
        mq: window.matchMedia(mediaQuery),
      };
    });

  const matched = mediaQueryList.find(entry => entry.mq.matches);
  return matched?.breakpoint ?? Breakpoint.xxs;
}

export const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(Breakpoint.xxs);

  useEffect(() => {
    // Oppdater breakpoint i useEffect for å støtte server side rendering
    setBreakpoint(getCurrentBreakpoint());
  }, []);

  useEffect(() => {
    const mediaQueryList = Object.values(screen).map(mediaQuery => {
      const mq = window.matchMedia(mediaQuery);
      // iOS <=13 har ikke støtte for addEventListener/removeEventListener på MediaQueryList,
      // men har støtte for addListener
      const handler = (): void => {
        setBreakpoint(getCurrentBreakpoint());
      };

      if (mq.addEventListener) {
        mq.addEventListener('change', handler);
      } else if (mq.addListener) {
        mq.addListener(handler);
      }
      return { mq, handler };
    });

    return (): void => {
      mediaQueryList.forEach(({ mq, handler }) => {
        if (mq.removeEventListener) {
          mq.removeEventListener('change', handler);
        } else if (mq.removeListener) {
          mq.removeListener(handler);
        }
      });
    };
  }, []);

  return breakpoint;
};
