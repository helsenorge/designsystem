import type React from 'react';

import type { Breakpoint } from '../../hooks/useBreakpoint';

import { useBreakpoint } from '../../hooks/useBreakpoint';

export interface BreakpointProps {
  breakpoint: Breakpoint;
}

// Hentet fra https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35834#issuecomment-497605842
export function withBreakpoint<P extends BreakpointProps, C extends React.ComponentClass<P>>(
  Component: C & React.ComponentType<P>
): React.FC<Omit<React.ComponentPropsWithoutRef<C>, keyof BreakpointProps>>;

export function withBreakpoint<P extends BreakpointProps>(Component: React.FC<P>): React.FC<Omit<P, keyof BreakpointProps>>;

export function withBreakpoint<P extends BreakpointProps>(Component: React.ComponentType<P>): React.FC<Omit<P, keyof BreakpointProps>> {
  const WithBreakpoint: React.FC<Omit<P, keyof BreakpointProps>> = props => {
    const breakpoint = useBreakpoint();
    return <Component {...(props as P)} breakpoint={breakpoint} />;
  };
  return WithBreakpoint;
}

export default withBreakpoint;
