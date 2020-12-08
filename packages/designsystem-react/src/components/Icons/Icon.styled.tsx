import styled, {css} from 'styled-components';

interface StyledIconProps {
  size: number;
}

// TODO: Need to refactor the mess at the bottom. Will have to make Icon a StyledComponent.
export const StyledIcon = styled('span')<StyledIconProps>`
  min-width: ${props => props.size};
  min-height: ${props => props.size};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default StyledIcon;
