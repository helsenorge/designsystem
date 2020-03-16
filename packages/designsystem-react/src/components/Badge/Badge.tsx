import React from 'react';
import styled, {css} from 'styled-components';
import {PaletteNames} from '../../theme/palette';
import {getColor} from '../../theme/currys/color';

export type BadgeColors = PaletteNames;
export type BadgeChildren = string | number;

interface BadgeProps {
  children: BadgeChildren;
  className?: string;
  color?: BadgeColors;
}

const Badge = React.forwardRef((props: BadgeProps, ref: any) => {
  const {children, className = '', color = 'black'} = props;
  const oversized = children.toString().length > 2;
  return (
    <StyledBadge oversized={oversized} className={className} color={color} ref={ref}>
      {children}
    </StyledBadge>
  );
});

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

export default Badge;
