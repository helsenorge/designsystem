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
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(!!window.matchMedia ? getCurrentBreakpoint() : Breakpoint.xxs);

  useEffect(() => {
    const handleMediaQueryEvent = (event: MediaQueryListEvent): void => {
      switch (event.media) {
        case screen.xl:
          setBreakpoint(event.matches ? Breakpoint.xl : Breakpoint.lg);
          return;
        case screen.lg:
          setBreakpoint(event.matches ? Breakpoint.lg : Breakpoint.md);
          return;
        case screen.md:
          setBreakpoint(event.matches ? Breakpoint.md : Breakpoint.sm);
          return;
        case screen.sm:
          setBreakpoint(event.matches ? Breakpoint.sm : Breakpoint.xs);
          return;
        case screen.xs:
          setBreakpoint(event.matches ? Breakpoint.xs : Breakpoint.xxs);
          return;
        default:
          setBreakpoint(Breakpoint.xxs);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const mediaQueryList = Object.entries(screen).map(([_size, mediaQuery]) => {
      const mq = window.matchMedia(mediaQuery);
      // iOS <=13 har ikke støtte for addEventListener/removeEventListener på MediaQueryList,
      // men har støtte for addListener
      if (mq.addEventListener) {
        mq.addEventListener('change', handleMediaQueryEvent);
      } else if (mq.addListener) {
        mq.addListener(handleMediaQueryEvent);
      }
      return mq;
    });

    return (): void => {
      mediaQueryList.forEach(mq => {
        if (mq.removeEventListener) {
          mq.removeEventListener('change', handleMediaQueryEvent);
        } else if (mq.removeListener) {
          mq.removeListener(handleMediaQueryEvent);
        }
      });
    };
  }, []);

  return breakpoint;
};
