import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import { PaletteNames } from '../../theme/palette';

import badgeStyles from './styles.module.scss';

export type BadgeColors = Extract<PaletteNames, 'blueberry' | 'cherry' | 'neutral'>;
export type BadgeChildren = string | number;

export interface BadgeProps {
  /** Sets the content of the badge. */
  children: BadgeChildren;
  /** Adds custom classes to the element. */
  className?: string;
  /** Changes the badge background color. */
  color?: BadgeColors;
  /** Sets the data-testid attribute. */
  testId?: string;
}
export type BadgeType = React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLElement>>;
const Badge: BadgeType = React.forwardRef(function BadgeForwardedRef(props: BadgeProps, ref: React.ForwardedRef<HTMLElement>) {
  const { children, className = '', color = 'blueberry', testId } = props;
  const badgeClasses = classNames(
    badgeStyles.badge,
    {
      [badgeStyles['badge--blueberry']]: color === 'blueberry',
      [badgeStyles['badge--cherry']]: color === 'cherry',
      [badgeStyles['badge--neutral']]: color === 'neutral',
    },
    className
  );

  return (
    <span className={badgeClasses} ref={ref} data-testid={testId} data-analyticsid={AnalyticsId.Badge}>
      {children}
    </span>
  );
});

export default Badge;
