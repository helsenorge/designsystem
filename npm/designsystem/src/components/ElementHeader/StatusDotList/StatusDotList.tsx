import React from 'react';

import cn from 'classnames';

import StatusDot, { StatusDotProps, StatusDotVariant } from '../../StatusDot';

import styles from './styles.module.scss';

export type StatusDotListType = typeof StatusDotList;

export interface StatusDotListProps {
  /** Additional text to the bottom statusdot */
  additionalText?: string;
  /** StatusDot that is under the others and outside the stacking */
  bottomStatusDot?: React.ReactElement<StatusDotProps>;
  /** Stacking of the statusdots  */
  stacking?: 'vertical' | 'horizontal';
  /** StatusDots as children */
  children?: React.ReactNode;
  /** Adds custom classes */
  className?: string;
  /** Show a hidden for child statusdot over the other */
  hiddenForChild?: boolean;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** StatusDot that is over the others and outside the stacking */
  topStatusDot?: React.ReactElement<StatusDotProps>;
}

export const StatusDotList: React.FC<StatusDotListProps> = props => {
  const {
    additionalText,
    children,
    className = '',
    testId,
    stacking = 'horizontal',
    hiddenForChild = false,
    topStatusDot,
    bottomStatusDot,
  } = props;

  return (
    <span data-testid={testId} className={cn(styles['statusdotlist'], className)}>
      {topStatusDot}
      {/* @todo: legg til tekst i SOT */}
      {hiddenForChild && <StatusDot variant={StatusDotVariant.hidden} text="Skjult for barnet" />}
      <span data-stacking={stacking} className={styles['statusdotlist__children']}>
        {children}
      </span>
      {bottomStatusDot}
      {additionalText && <span className={styles['statusdotlist__additional-text']}>{additionalText}</span>}
    </span>
  );
};

export default StatusDotList;
