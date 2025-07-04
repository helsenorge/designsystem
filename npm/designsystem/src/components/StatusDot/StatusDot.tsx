import React from 'react';

import classNames from 'classnames';

import { IconSize } from '../..';
import { AnalyticsId, FormOnColor } from '../../constants';
import { getColor } from '../../theme/currys';
import { LazyIcon } from '../LazyIcon';

import styles from './styles.module.scss';

export enum StatusDotOnColor {
  onwhite = FormOnColor.onwhite,
  ondark = FormOnColor.ondark,
}

export enum StatusDotVariant {
  success = 'success',
  inprocess = 'inprocess',
  exception = 'exception',
  unknown = 'unknown',
  inspected = 'inspected',
  cancelled = 'cancelled',
  alert = 'alert',
  transparent = 'transparent',
  info = 'info',
  group = 'group',
  recurring = 'recurring',
  noaccess = 'noaccess',
  draft = 'draft',
  hidden = 'hidden',
  login = 'login',
  attachment = 'attachment',
  active = 'active',
  pending = 'pending',
  inactive = 'inactive',
}

export interface StatusDotIconProps {
  /** Defines the color of the icon */
  onColor?: keyof typeof StatusDotOnColor;
  /** The variant defines style formatting and what icon to use */
  variant?: keyof typeof StatusDotVariant;
}

const StatusDotIcon: React.FC<StatusDotIconProps> = ({ onColor, variant = 'info' }) => {
  const color = onColor === StatusDotOnColor.ondark ? getColor('white') : getColor('black');
  const iconProps = {
    color,
    size: IconSize.XXSmall,
    onColor,
    className: classNames({
      [styles[`statusdot__dot--${variant}`]]: typeof variant !== 'undefined',
      [styles['statusdot__dot--on-dark']]: onColor === StatusDotOnColor.ondark,
    }),
  };

  switch (variant) {
    case StatusDotVariant.success:
      return <LazyIcon {...iconProps} iconName={'DotSuccess'} />;
    case StatusDotVariant.inprocess:
      return <LazyIcon {...iconProps} iconName={'DotHalfDisc'} />;
    case StatusDotVariant.exception:
      return <LazyIcon {...iconProps} iconName={'DotWarningTriangle'} />;
    case StatusDotVariant.unknown:
      return <LazyIcon {...iconProps} iconName={'DotQuestionMark'} />;
    case StatusDotVariant.inspected:
      return <LazyIcon {...iconProps} iconName={'DotLookingGlass'} />;
    case StatusDotVariant.cancelled:
      return <LazyIcon {...iconProps} iconName={'DotCancelled'} />;
    case StatusDotVariant.alert:
      return <LazyIcon {...iconProps} iconName={'DotAlert'} />;
    case StatusDotVariant.transparent:
      return <LazyIcon {...iconProps} iconName={'DotTransparent'} />;
    case StatusDotVariant.info:
      return <LazyIcon {...iconProps} iconName={'DotInfo'} />;
    case StatusDotVariant.group:
      return <LazyIcon {...iconProps} iconName={'Group'} />;
    case StatusDotVariant.recurring:
      return <LazyIcon {...iconProps} iconName={'Change'} />;
    case StatusDotVariant.noaccess:
      return <LazyIcon {...iconProps} iconName={'NoAccess'} />;
    case StatusDotVariant.draft:
      return <LazyIcon {...iconProps} iconName={'Pencil'} />;
    case StatusDotVariant.hidden:
      return <LazyIcon {...iconProps} iconName={'NoEye'} />;
    case StatusDotVariant.login:
      return <LazyIcon {...iconProps} iconName={'Login'} />;
    case StatusDotVariant.attachment:
      return <LazyIcon {...iconProps} iconName={'Attachment'} />;
    case StatusDotVariant.active:
      return <LazyIcon {...iconProps} iconName={'DotActive'} />;
    case StatusDotVariant.pending:
      return <LazyIcon {...iconProps} iconName={'DotPending'} />;
    case StatusDotVariant.inactive:
      return <LazyIcon {...iconProps} iconName={'DotInactive'} />;
  }

  return null;
};

export interface StatusDotProps {
  /** id that is placed on the wrapper */
  id?: string;
  /** Defines the color mode, onwhite, ondark etc. */
  onColor?: keyof typeof StatusDotOnColor;
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
  const { id, onColor = StatusDotOnColor.onwhite, variant = StatusDotVariant.info, text, className, testId } = props;

  const statusDotClasses = classNames(styles['statusdot'], className);
  const labelClasses = classNames(styles['statusdot__label'], {
    [styles['statusdot__label--on-dark']]: onColor === StatusDotOnColor.ondark,
  });

  return (
    <span id={id} className={statusDotClasses} data-testid={testId} data-analyticsid={AnalyticsId.StatusDot}>
      <span className={styles['statusdot__dot']} data-testid={testId + '-dot'}>
        <StatusDotIcon onColor={onColor} variant={variant} />
      </span>
      <span className={labelClasses}>{text}</span>
    </span>
  );
};

export default StatusDot;
