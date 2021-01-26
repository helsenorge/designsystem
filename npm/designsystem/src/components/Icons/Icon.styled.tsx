import styled, {css} from 'styled-components';
import {SvgIcon} from './Icon';

interface StyledIconProps {}

export const StyledIcon = styled('svg')<StyledIconProps>`
  ${props =>
    props.width &&
    props.height &&
    css`
      min-width: ${props.width}px;
      min-height: ${props.height}px;
    `}
`;

export default StyledIcon;
