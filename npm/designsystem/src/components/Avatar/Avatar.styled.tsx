import styled from 'styled-components';
import { getColor } from '../../theme/currys';

interface StyledAvatarProps {
  selected?: boolean;
}

const StyledAvatar = styled('span')<StyledAvatarProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: 700;
  background-color: ${props => (props.selected ? 'transparent' : getColor('blueberry', 100))};
`;

export default StyledAvatar;
