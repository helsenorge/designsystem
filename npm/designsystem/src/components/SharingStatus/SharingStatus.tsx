import React from 'react';

import classNames from 'classnames';

import { AnalyticsId, IconSize } from '../../constants';
import { PaletteNames, palette } from '../../theme/palette';
import Icon, { SvgIcon } from '../Icon';

import styles from './styles.module.scss';

export type SharingStatusColor = Extract<PaletteNames, 'kiwi' | 'cherry' | 'neutral' | 'blueberry' | 'banana'>;

export interface SharingStatusProps {
  /** Color choices represent variants of sharingstatus */
  color?: SharingStatusColor;
  /** Adds custom classes to the element. */
  className?: string;
  /** Icon to be displayed next to the sharingstatus */
  icon: SvgIcon;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets the text placed to the right of the sharingstatus */
  children: string;
  /** turn on and off word wrapping */
  wrapText?: boolean;
}

const SharingStatus: React.FC<SharingStatusProps> = props => {
  const { color = 'blueberry', icon, children, className, testId, wrapText } = props;

  const sharingStatusClasses = classNames(styles['sharing-status'], className);
  const dotClasses = classNames(styles['sharing-status__dot'], styles[`sharing-status__dot--${color}`]);
  const labelClasses = classNames(styles['sharing-status__label'], styles[`sharing-status__label--${color}`], {
    [styles['sharing-status__label--wrap']]: wrapText,
  });

  return (
    <span className={sharingStatusClasses} data-testid={testId} data-analyticsid={AnalyticsId.SharingStatus}>
      <span className={dotClasses}>
        <Icon color={palette.white} svgIcon={icon} size={IconSize.XXSmall} />
      </span>
      <span className={labelClasses}>{children}</span>
    </span>
  );
};

export default SharingStatus;
