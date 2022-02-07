import { useState, useEffect } from 'react';
import { breakpoints, screen } from '../theme/grid';

export enum Breakpoint {
  xs = breakpoints.xs,
  sm = breakpoints.sm,
  md = breakpoints.md,
  lg = breakpoints.lg,
  xl = breakpoints.xl,
}

/**
 * Lytt på endringer i breakpoint basert på media queries. Trigger re-render bare når breakpoint er endret.
 * @returns Gjeldende breakpoint
 */
export const useBreakpoint = (): Breakpoint | undefined => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>();

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
        default:
          setBreakpoint(Breakpoint.xs);
          return;
      }
    };

    // Lytt etter endringer for hvert breakpoint
    const mediaQueryList = Object.entries(screen)
      .reverse()
      .map(([size, mediaQuery]) => {
        return { breakpoint: Breakpoint[size as keyof typeof Breakpoint], mediaQuery: window.matchMedia(mediaQuery) };
      });
    mediaQueryList.forEach(x => x.mediaQuery.addEventListener('change', handleMediaQueryEvent));

    // Finn breakpoint ved første render
    const initialBreakpoint = mediaQueryList.find(x => x.mediaQuery.matches)?.breakpoint ?? Breakpoint.xs;
    setBreakpoint(initialBreakpoint);

    return (): void => {
      mediaQueryList.forEach(x => x.mediaQuery.removeEventListener('change', handleMediaQueryEvent));
    };
  }, []);

  return breakpoint;
};
