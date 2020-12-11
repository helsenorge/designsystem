import styled from 'styled-components';

interface StyledIconProps {
  size: number;
}

export const StyledIcon = styled('div')<StyledIconProps>`
  min-width: ${props => props.size};
  min-height: ${props => props.size};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledIcon;
