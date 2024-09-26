import React from 'react';

import classNames from 'classnames';

import { IconSize } from '../..';
import { AnalyticsId, FormMode } from '../../constants';
import { getColor } from '../../theme/currys';
import { Icon } from '../Icon';
import Attachment from '../Icons/Attachment';
import Change from '../Icons/Change';
import Group from '../Icons/Group';
import NoAccess from '../Icons/NoAccess';

import styles from './styles.module.scss';

export enum StatusDotModes {
  onwhite = FormMode.onwhite,
  ondark = FormMode.ondark,
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
  /** Defines the color of the icon */
  mode?: keyof typeof StatusDotModes;
  /** The variant defines style formatting and what icon to use */
  variant?: keyof typeof StatusDotVariant;
}

const StatusDotIcon: React.FC<StatusDotIconProps> = ({ mode, variant }) => {
  const color = mode === StatusDotModes.ondark ? getColor('white') : getColor('black');
  const iconProps = { color, size: IconSize.XXSmall, mode };

  if (variant === StatusDotVariant.recurring) {
    return <Icon {...iconProps} svgIcon={Change} />;
  } else if (variant === StatusDotVariant.group) {
    return <Icon {...iconProps} svgIcon={Group} />;
  } else if (variant === StatusDotVariant.noaccess) {
    return <Icon {...iconProps} svgIcon={NoAccess} color={getColor('cherry', 600)} />;
  } else if (variant === StatusDotVariant.attachment) {
    return <Icon {...iconProps} svgIcon={Attachment} />;
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
  const dotClasses = classNames(styles['statusdot__dot'], {
    ...(hasIcon ? {} : { [styles[`statusdot__dot--${variant}`]]: true }),
    [styles['statusdot__dot--on-dark']]: mode === StatusDotModes.ondark,
  });
  const labelClasses = classNames(mode === StatusDotModes.ondark && styles['statusdot__label--on-dark']);

  return (
    <span id={id} className={statusDotClasses} data-testid={testId} data-analyticsid={AnalyticsId.StatusDot}>
      <span className={dotClasses}>
        <StatusDotIcon mode={mode} variant={variant} />
      </span>
      <span className={labelClasses}>{text}</span>
    </span>
  );
};

export default StatusDot;
