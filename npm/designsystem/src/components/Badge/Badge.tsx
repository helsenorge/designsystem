import React from 'react';
import {PaletteNames} from '../../theme/palette';
import StyledBadge from './Badge.styled';

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

export default Badge;
