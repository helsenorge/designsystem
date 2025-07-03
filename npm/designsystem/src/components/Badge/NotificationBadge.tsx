import React from 'react';

import { IconSize } from '../../constants';
import { palette } from '../../theme/palette';
import Icon from '../Icon';
import CheckFill from '../Icons/CheckFill';
import ErrorSignFill from '../Icons/ErrorSignFill';
import InfoSignFill from '../Icons/InfoSignFill';
import TriangleX from '../Icons/TriangleX';

export type BadgeNotificationVariant = 'info' | 'warn' | 'error' | 'success';

export interface NotificationBadgeProps {
  /** Changes the type of the badge */
  variant: BadgeNotificationVariant;
  /** Sets the size of the badge */
  size: IconSize;
  /** Adds custom classes to the element */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets hover state */
  isHovered?: boolean;
}

const NotificationBadge = (props: NotificationBadgeProps): React.JSX.Element => {
  const { variant, size, className = '', testId, isHovered = false } = props;
  switch (variant) {
    case 'info':
      return (
        <Icon
          svgIcon={InfoSignFill}
          color={palette.blueberry700}
          hoverColor={palette.blueberry700}
          size={size}
          className={className}
          testId={testId}
          isHovered={isHovered}
        />
      );
    case 'warn':
      return (
        <Icon
          svgIcon={ErrorSignFill}
          color={palette.banana800}
          hoverColor={palette.banana700}
          size={size}
          className={className}
          testId={testId}
          isHovered={isHovered}
        />
      );
    case 'error':
      return (
        <Icon
          svgIcon={TriangleX}
          color={palette.cherry700}
          hoverColor={palette.cherry700}
          size={size}
          className={className}
          testId={testId}
          isHovered={isHovered}
        />
      );
    case 'success':
      return (
        <Icon
          svgIcon={CheckFill}
          color={palette.kiwi900}
          hoverColor={palette.kiwi900}
          size={size}
          className={className}
          testId={testId}
          isHovered={isHovered}
        />
      );
  }
};

export default NotificationBadge;
