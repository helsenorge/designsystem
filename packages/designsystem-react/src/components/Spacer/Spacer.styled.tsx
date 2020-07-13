import styled from 'styled-components';
import {SpacerSizes} from './../../theme/spacers';
import {getSpacer} from './../../theme/currys';

interface StyledSpacerProps {
  size: SpacerSizes;
}

const StyledSpacer = styled('span')<StyledSpacerProps>`
  display: block;
  width: 100%;
  height: ${props => getSpacer(props.size)};
`;

export default StyledSpacer;
