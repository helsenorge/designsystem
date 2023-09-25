import React from 'react';

import classNames from 'classnames';

import { IconSize } from '../..';
import { AnalyticsId } from '../../constants';
import { getColor } from '../../theme/currys';
import Attachment from '../Icons/Attachment';
import Group from '../Icons/Group';
import { Icon } from '../Icons/Icon';
import NoAccess from '../Icons/NoAccess';
import Undo from '../Icons/Undo';

import styles from './styles.module.scss';

export enum StatusDotModes {
  onwhite = 'onwhite',
  ondark = 'ondark',
}

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
  attachment = 'attachment',
}

export interface StatusDotIconProps {
  /** The variant defines style formatting and what icon to use */
  variant?: keyof typeof StatusDotVariant;
}

const StatusDotIcon: React.FC<StatusDotIconProps> = ({ variant }) => {
  if (variant === StatusDotVariant.recurring) {
    return <Icon size={IconSize.XXSmall} svgIcon={Undo} />;
  } else if (variant === StatusDotVariant.group) {
    return <Icon size={IconSize.XXSmall} svgIcon={Group} />;
  } else if (variant === StatusDotVariant.noaccess) {
    return <Icon size={IconSize.XXSmall} svgIcon={NoAccess} color={getColor('cherry', 600)} />;
  } else if (variant === StatusDotVariant.attachment) {
    return <Icon size={IconSize.XXSmall} svgIcon={Attachment} />;
  }

  return null;
};

export interface StatusDotProps {
  /** id that is placed on the wrapper */
  id?: string;
  /** Defines the color mode, onwhite, ondark etc. */
  mode?: keyof typeof StatusDotModes;
  /** Visual variants for the statusdot */
  variant?: keyof typeof StatusDotVariant;
  /** Text placed to the right of the statusdot */
  text: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const StatusDot: React.FC<StatusDotProps> = props => {
  const { id, mode = StatusDotModes.onwhite, variant = StatusDotVariant.info, text, className, testId } = props;

  const hasIcon =
    variant === StatusDotVariant.recurring ||
    variant === StatusDotVariant.group ||
    variant === StatusDotVariant.noaccess ||
    variant === StatusDotVariant.attachment;

  const isCancelled = variant === StatusDotVariant.cancelled;

  const statusDotClasses = classNames(styles['statusdot'], isCancelled && styles['statusdot--cancelled'], className);
  const dotClasses = classNames(styles['statusdot__dot'], hasIcon ? styles[`statusdot__dot--icon`] : styles[`statusdot__dot--${variant}`]);
  const labelClasses = classNames(
    styles['statusdot__label'],
    hasIcon && styles['statusdot__label--icon'],
    mode === StatusDotModes.ondark && styles['statusdot__label--on-dark']
  );

  return (
    <span id={id} className={statusDotClasses} data-testid={testId} data-analyticsid={AnalyticsId.StatusDot}>
      <span className={dotClasses}>
        <StatusDotIcon variant={variant} />
      </span>
      <span className={labelClasses}>{text}</span>
    </span>
  );
};

export default StatusDot;
