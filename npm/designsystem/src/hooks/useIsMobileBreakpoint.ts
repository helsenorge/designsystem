import { useBreakpoint } from './useBreakpoint';
import { breakpoints } from '../theme/grid';

export const useIsMobileBreakpoint = (): boolean => {
  const breakpoint = useBreakpoint();
  return breakpoint < breakpoints.md;
};
