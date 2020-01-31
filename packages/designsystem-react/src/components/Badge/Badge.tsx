import styled from 'styled-components';
import {Colors} from '../../theme/palette';
import {color} from '../../theme';

type BadgeColors = Colors;

interface BadgeProps {
  color?: BadgeColors;
}

const Badge = styled('span')<BadgeProps>`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background-color: ${props => color(props.color, {fallback: 'urine200'})};
`;

export default Badge;
