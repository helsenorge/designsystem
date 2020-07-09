import React from 'react';
import StyledSpacer from './Spacer.styled';
import {SpacerSizes} from './../../theme/spacers';

interface SpacerProps {
  size?: SpacerSizes;
  className?: string;
}

const AnchorLink = React.forwardRef((props: SpacerProps) => {
  const {size = 's', className} = props;

  return <StyledSpacer size={size} className={className}></StyledSpacer>;
});

export default AnchorLink;
