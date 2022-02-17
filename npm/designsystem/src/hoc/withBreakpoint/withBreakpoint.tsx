import React from 'react';

import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';

export interface BreakpointProps {
  breakpoint?: Breakpoint;
}

// Hentet fra https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35834#issuecomment-497605842
export function withBreakpoint<T extends React.ComponentClass<any>>(
  Component: T
): React.ForwardRefExoticComponent<React.ComponentPropsWithoutRef<T> & { ref?: React.Ref<InstanceType<T>> }>;

export function withBreakpoint<P extends { ref?: React.Ref<any> }>(
  Component: React.ForwardRefExoticComponent<P>
): React.ForwardRefExoticComponent<P>;

export function withBreakpoint<P>(Component: React.FunctionComponent<P>): React.ForwardRefExoticComponent<P>;

export function withBreakpoint<P>(Component: React.ComponentType<P>) {
  return React.forwardRef((props, ref) => {
    const breakpoint = useBreakpoint();
    return <Component ref={ref} {...(props as P)} breakpoint={breakpoint} />;
  });
}

export default withBreakpoint;
