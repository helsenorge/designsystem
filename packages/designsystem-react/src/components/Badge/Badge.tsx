import styled, {css} from 'styled-components';
import {PaletteNames} from '../../theme/palette';
import {getColor} from '../../theme/currys/color';

export type BadgeColors = PaletteNames;

interface BadgeProps {
  color?: BadgeColors;
}

const Badge = styled('span')<BadgeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => (props.color === 'white' ? 'black' : 'white')};
  min-width: 1.375rem;
  height: 1.375rem;
  border-radius: 1rem;
  background-color: ${props => (props.color ? getColor(props.color, 500) : getColor('black'))};
`;

export default Badge;
