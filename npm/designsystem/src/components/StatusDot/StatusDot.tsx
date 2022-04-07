import React from 'react';

import classNames from 'classnames';

import statusDotStyles from './styles.module.scss';
import { AnalyticsId } from '../../constants';
import { Icon } from '../Icons/Icon';
import Undo from '../Icons/Undo';
import Group from '../Icons/Group';
import { IconSize } from '../..';

export enum StatusDotVariant {
  info = 'info',
  warning = 'warning',
  alert = 'alert',
  cancelled = 'cancelled',
  active = 'active',
  transparent = 'transparent',
  recurring = 'recurring',
  group = 'group',
}

export interface StatusDotProps {
  /** Visual variants for the statusdot */
  variant?: keyof typeof StatusDotVariant;
  /** Text placed to the right of the statusdot */
  text: string;
  /** Adds custom classes to the element. */
  className?: string;
}

const Spacer = React.forwardRef(function SpacerForwardedRef(props: StatusDotProps, ref: React.ForwardedRef<HTMLElement>) {
  const { variant = StatusDotVariant.info, text, className } = props;
  const hasIcon = variant === StatusDotVariant.recurring || variant === StatusDotVariant.group;
  const isCancelled = variant === StatusDotVariant.cancelled;
  const statusDotClasses = classNames(statusDotStyles['statusdot'], { [statusDotStyles['statusdot--cancelled']]: isCancelled }, className);
  const dotClasses = classNames(statusDotStyles['statusdot__dot'], [
    hasIcon ? statusDotStyles[`statusdot__dot--icon`] : statusDotStyles[`statusdot__dot--${variant}`],
  ]);
  const labelClasses = classNames(statusDotStyles['statusdot__label'], { [statusDotStyles[`statusdot__label--icon`]]: hasIcon }, className);
  let svgIcon: JSX.Element | null = null;

  if (variant === 'recurring') {
    svgIcon = <Icon size={IconSize.XXSmall} svgIcon={Undo} />;
  } else if (variant === 'group') {
    svgIcon = <Icon size={IconSize.XXSmall} svgIcon={Group} />;
  }

  return (
    <div className={statusDotClasses} data-analyticsid={AnalyticsId.StatusDot}>
      <span className={dotClasses}>{svgIcon}</span>
      <span className={labelClasses}>{text}</span>
    </div>
  );
});

export default Spacer;