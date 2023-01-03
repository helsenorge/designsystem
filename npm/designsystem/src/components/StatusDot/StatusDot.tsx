import React from 'react';

import classNames from 'classnames';

import statusDotStyles from './styles.module.scss';
import { AnalyticsId } from '../../constants';
import { Icon } from '../Icons/Icon';
import Undo from '../Icons/Undo';
import { getColor } from '../../theme/currys';
import Group from '../Icons/Group';
import NoAccess from '../Icons/NoAccess';
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
  noaccess = 'noaccess',
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
  const hasIcon = variant === StatusDotVariant.recurring || variant === StatusDotVariant.group || variant === StatusDotVariant.noaccess;
  const isCancelled = variant === StatusDotVariant.cancelled;
  const statusDotClasses = classNames(statusDotStyles['statusdot'], { [statusDotStyles['statusdot--cancelled']]: isCancelled }, className);
  const dotClasses = classNames(statusDotStyles['statusdot__dot'], [
    hasIcon ? statusDotStyles[`statusdot__dot--icon`] : statusDotStyles[`statusdot__dot--${variant}`],
  ]);
  const labelClasses = classNames(statusDotStyles['statusdot__label'], {
    [statusDotStyles[`statusdot__label--icon`]]: hasIcon,
  });
  let svgIcon: JSX.Element | null = null;

  if (variant === StatusDotVariant.recurring) {
    svgIcon = <Icon size={IconSize.XXSmall} svgIcon={Undo} />;
  } else if (variant === StatusDotVariant.group) {
    svgIcon = <Icon size={IconSize.XXSmall} svgIcon={Group} />;
  } else if (variant === StatusDotVariant.noaccess) {
    svgIcon = <Icon size={IconSize.XXSmall} svgIcon={NoAccess} color={getColor('cherry', 600)} />;
  }

  return (
    <div className={statusDotClasses} data-analyticsid={AnalyticsId.StatusDot}>
      <span className={dotClasses}>{svgIcon}</span>
      <span className={labelClasses}>{text}</span>
    </div>
  );
});

export default Spacer;
