import React from 'react';

import classNames from 'classnames';

import NotificationBadge, { BadgeNotificationVariant } from './NotificationBadge';
import { AnalyticsId, IconSize } from '../../constants';
import { PaletteNames } from '../../theme/palette';

import badgeStyles from './styles.module.scss';

export type BadgeColors = Extract<PaletteNames, 'blueberry' | 'cherry' | 'neutral'>;
export type BadgeChildren = string | number;
export type BadgeVariant = 'string' | 'notification';

export interface BadgeProps {
  /** Sets the content of the badge. */
  children?: BadgeChildren;
  /** Adds custom classes to the element. */
  className?: string;
  /** Changes the badge background color. */
  color?: BadgeColors;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Changes the type of the badge. Default: string */
  type?: BadgeVariant;
  /** Type of notification badge. Only works if type is 'notification'. */
  notificationVariant?: BadgeNotificationVariant;
  /** Ref passed to the root element */
  ref?: React.Ref<HTMLElement | null>;
}

export type BadgeType = typeof Badge;
const Badge: React.FC<BadgeProps> = (props: BadgeProps) => {
  const { children, className = '', color = 'blueberry', testId, type = 'string', notificationVariant = 'info', ref } = props;
  const badgeClasses = classNames(
    badgeStyles.badge,
    {
      [badgeStyles['badge--blueberry']]: color === 'blueberry',
      [badgeStyles['badge--cherry']]: color === 'cherry',
      [badgeStyles['badge--neutral']]: color === 'neutral',
    },
    className
  );

  if (type === 'notification' && notificationVariant !== undefined) {
    return (
      <NotificationBadge
        variant={notificationVariant}
        size={IconSize.XSmall}
        className={className}
        testId={testId}
        data-analyticsid={AnalyticsId.Badge}
      />
    );
  }

  return (
    <span className={badgeClasses} ref={ref} data-testid={testId} data-analyticsid={AnalyticsId.Badge}>
      {children}
    </span>
  );
};

export default Badge;
