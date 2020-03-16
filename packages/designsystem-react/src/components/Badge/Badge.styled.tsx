import {BadgeColors} from './Badge';
import styled from 'styled-components';
import {getColor} from '../../theme/currys';

interface StyledBadgeProps {
  color: BadgeColors;
  oversized: boolean;
}

const StyledBadge = styled('span')<StyledBadgeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${props => (props.oversized ? '0.25rem' : 0)};
  font-size: 0.875rem;
  font-weight: 600;
  color: ${props => (props.color === 'white' ? 'black' : 'white')};
  min-width: 1.375rem;
  height: 1.375rem;
  border-radius: 1rem;
  background-color: ${props => (props.color ? getColor(props.color, 500) : getColor('black'))};
`;

export default StyledBadge;
