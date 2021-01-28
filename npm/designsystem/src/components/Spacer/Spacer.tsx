import React from 'react';
import StyledSpacer from './Spacer.styled';
import { SpacerSizes } from './../../theme/spacers';

interface SpacerProps {
  size?: SpacerSizes;
  className?: string;
}

const Spacer = React.forwardRef((props: SpacerProps, ref: any) => {
  const { size = 's', className } = props;

  return <StyledSpacer size={size} className={className} ref={ref}></StyledSpacer>;
});

export default Spacer;
