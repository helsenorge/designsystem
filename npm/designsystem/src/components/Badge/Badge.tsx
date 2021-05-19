import React from 'react';
import { PaletteNames } from '../../theme/palette';
import StyledBadge from './Badge.styled';

export type BadgeColors = PaletteNames;
export type BadgeChildren = string | number;

interface BadgeProps {
  /** Sets the content of the badge. */
  children: BadgeChildren;
  /** Adds custom classes to the element. */
  className?: string;
  /** Changes the badge background color. */
  color?: BadgeColors;
}

const Badge = React.forwardRef(function BadgeForwardedRef(props: BadgeProps, ref: React.ForwardedRef<HTMLElement>) {
  const { children, className = '', color = 'black' } = props;
  const oversized = children.toString().length > 2;
  return (
    <StyledBadge oversized={oversized} className={className} color={color} ref={ref}>
      {children}
    </StyledBadge>
  );
});

export default Badge;
