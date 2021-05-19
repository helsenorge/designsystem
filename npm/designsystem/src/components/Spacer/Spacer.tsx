import React from 'react';
import StyledSpacer from './Spacer.styled';
import { SpacerSizes } from './../../theme/spacers';

interface SpacerProps {
  /** Sets the size of the spacer. */
  size?: SpacerSizes;
  /** Adds custom classes to the element. */
  className?: string;
}

const Spacer = React.forwardRef(function SpacerForwardedRef(props: SpacerProps, ref: React.ForwardedRef<HTMLElement>) {
  const { size = 's', className } = props;

  return <StyledSpacer size={size} className={className} ref={ref}></StyledSpacer>;
});

export default Spacer;
