import { useState, useEffect } from 'react';
import { useWindowSize } from './useWindowSize';
import { breakpoints } from '../theme/grid';

export enum Breakpoint {
  Xs = breakpoints.xs,
  Sm = breakpoints.sm,
  Md = breakpoints.md,
  Lg = breakpoints.lg,
  Xl = breakpoints.xl,
}

export const useBreakpoint = (): Breakpoint | undefined => {
  const { width } = useWindowSize();
  const [breakpoint, setBreakpoint] = useState<Breakpoint>();

  useEffect(() => {
    if (!width) {
      return;
    }
    if (width >= Breakpoint.Xl) {
      setBreakpoint(Breakpoint.Xl);
    } else if (width >= Breakpoint.Lg) {
      setBreakpoint(Breakpoint.Lg);
    } else if (width >= Breakpoint.Md) {
      setBreakpoint(Breakpoint.Md);
    } else if (width >= Breakpoint.Sm) {
      setBreakpoint(Breakpoint.Sm);
    } else {
      setBreakpoint(Breakpoint.Xs);
    }
  }, [width]);

  return breakpoint;
};
