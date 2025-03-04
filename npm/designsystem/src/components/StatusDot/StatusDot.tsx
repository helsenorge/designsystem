import React from 'react';

import classNames from 'classnames';

import { IconSize } from '../..';
import { AnalyticsId, FormOnColor } from '../../constants';
import { getColor } from '../../theme/currys';
import { Icon } from '../Icon';
import Attachment from '../Icons/Attachment';
import Change from '../Icons/Change';
import DotAlert from '../Icons/DotAlert';
import DotCancelled from '../Icons/DotCancelled';
import DotHalfDisc from '../Icons/DotHalfDisc';
import DotInfo from '../Icons/DotInfo';
import DotLookingGlass from '../Icons/DotLookingGlass';
import DotQuestionMark from '../Icons/DotQuestionMark';
import DotSuccess from '../Icons/DotSuccess';
import DotTransparent from '../Icons/DotTransparent';
import DotWarningTriangle from '../Icons/DotWarningTriangle';
import Group from '../Icons/Group';
import Login from '../Icons/Login';
import NoAccess from '../Icons/NoAccess';
import NoEye from '../Icons/NoEye';
import Pencil from '../Icons/Pencil';

import styles from './styles.module.scss';

export enum StatusDotOnColor {
  onwhite = FormOnColor.onwhite,
  ondark = FormOnColor.ondark,
}

export enum StatusDotVariant {
  success = 'success',
  warning = 'warning',
  warningtriangle = 'warningtriangle',
  warningquestionmark = 'warningquestionmark',
  warninglookingglass = 'warninglookingglass',
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

  if (variant === StatusDotVariant.success) {
    return <Icon {...iconProps} svgIcon={DotSuccess} />;
  } else if (variant === StatusDotVariant.warning) {
    return <Icon {...iconProps} svgIcon={DotHalfDisc} />;
  } else if (variant === StatusDotVariant.warningtriangle) {
    return <Icon {...iconProps} svgIcon={DotWarningTriangle} />;
  } else if (variant === StatusDotVariant.warningquestionmark) {
    return <Icon {...iconProps} svgIcon={DotQuestionMark} />;
  } else if (variant === StatusDotVariant.warninglookingglass) {
    return <Icon {...iconProps} svgIcon={DotLookingGlass} />;
  } else if (variant === StatusDotVariant.cancelled) {
    return <Icon {...iconProps} svgIcon={DotCancelled} />;
  } else if (variant === StatusDotVariant.alert) {
    return <Icon {...iconProps} svgIcon={DotAlert} />;
  } else if (variant === StatusDotVariant.transparent) {
    return <Icon {...iconProps} svgIcon={DotTransparent} />;
  } else if (variant === StatusDotVariant.info) {
    return <Icon {...iconProps} svgIcon={DotInfo} />;
  } else if (variant === StatusDotVariant.group) {
    return <Icon {...iconProps} svgIcon={Group} />;
  } else if (variant === StatusDotVariant.recurring) {
    return <Icon {...iconProps} svgIcon={Change} />;
  } else if (variant === StatusDotVariant.noaccess) {
    return <Icon {...iconProps} svgIcon={NoAccess} />;
  } else if (variant === StatusDotVariant.draft) {
    return <Icon {...iconProps} svgIcon={Pencil} />;
  } else if (variant === StatusDotVariant.hidden) {
    return <Icon {...iconProps} svgIcon={NoEye} />;
  } else if (variant === StatusDotVariant.login) {
    return <Icon {...iconProps} svgIcon={Login} />;
  } else if (variant === StatusDotVariant.attachment) {
    return <Icon {...iconProps} svgIcon={Attachment} />;
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
  const labelClasses = classNames(onColor === StatusDotOnColor.ondark && styles['statusdot__label--on-dark']);

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
