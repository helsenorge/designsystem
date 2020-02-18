import styled from 'styled-components';
import {PaletteNames} from '../../theme/palette';
import {getColor} from '../../theme/currys/color';

type BadgeColors = PaletteNames;

interface BadgeProps {
  color?: BadgeColors;
}

const Badge = styled('span')<BadgeProps>`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  min-width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background-color: ${props => (props.color ? getColor(props.color, 500) : getColor('vein', 500))};
`;

export default Badge;
