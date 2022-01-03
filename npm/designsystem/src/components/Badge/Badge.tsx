import React from 'react';
import classNames from 'classnames';

import { PaletteNames } from '../../theme/palette';

import badgeStyles from './styles.module.scss';

export type BadgeColors = PaletteNames;
export type BadgeChildren = string | number;

interface BadgeProps {
  /** Sets the content of the badge. */
  children: BadgeChildren;
  /** Adds custom classes to the element. */
  className?: string;
  /** Changes the badge background color. */
  color?: BadgeColors;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const Badge = React.forwardRef(function BadgeForwardedRef(props: BadgeProps, ref: React.ForwardedRef<HTMLElement>) {
  const { children, className = '', color = 'black', testId } = props;
  const oversized = children.toString().length > 2;
  const badgeClasses = classNames(
    badgeStyles.badge,
    {
      [badgeStyles['badge--oversized']]: oversized,
      [badgeStyles['badge--black']]: color === 'black',
      [badgeStyles['badge--white']]: color === 'white',
      [badgeStyles['badge--blueberry']]: color === 'blueberry',
      [badgeStyles['badge--banana']]: color === 'banana',
      [badgeStyles['badge--cherry']]: color === 'cherry',
      [badgeStyles['badge--kiwi']]: color === 'kiwi',
      [badgeStyles['badge--neutral']]: color === 'neutral',
      [badgeStyles['badge--plum']]: color === 'plum',
    },
    className
  );

  return (
    <span className={badgeClasses} ref={ref} data-testid={testId}>
      {children}
    </span>
  );
});

export default Badge;
