import React from 'react';

import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';

export interface BreakpointProps {
  breakpoint: Breakpoint;
}

// Hentet fra https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35834#issuecomment-497605842
export function withBreakpoint<P extends BreakpointProps, C extends React.ComponentClass<P>>(
  Component: C & React.ComponentType<P>
): React.ForwardRefExoticComponent<Omit<React.ComponentPropsWithoutRef<C> & { ref?: React.Ref<InstanceType<C>> }, keyof BreakpointProps>>;

export function withBreakpoint<P extends BreakpointProps & { ref?: React.Ref<any> }>(
  Component: React.ForwardRefExoticComponent<P>
): React.ForwardRefExoticComponent<Omit<P, keyof BreakpointProps>>;

export function withBreakpoint<P extends BreakpointProps>(
  Component: React.FunctionComponent<P>
): React.ForwardRefExoticComponent<Omit<P, keyof BreakpointProps>>;

export function withBreakpoint<P extends BreakpointProps>(Component: React.ComponentType<P>) {
  return React.forwardRef((props, ref) => {
    const breakpoint = useBreakpoint();
    return <Component ref={ref} {...(props as P)} breakpoint={breakpoint} />;
  });
}

export default withBreakpoint;
