import React from 'react';

import classNames from 'classnames';

import type { ButtonProps } from '../Button';

import { AnalyticsId } from '../../constants';

import styles from './styles.module.scss';

export interface StepButtonsProps {
  /** Knapp for å gå tilbake. Vises med "outline" variant. */
  backButton?: React.ReactElement<ButtonProps>;
  /** Knapp for å gå videre. Vises med "fill" variant. */
  forwardButton?: React.ReactElement<ButtonProps>;
  /** Ekstra knapper. Valgfritt utseende. */
  additionalButtons?: React.ReactElement<ButtonProps>[];
  /** Knapp for å avbryte eller fortsette senere. Vises med "borderless" variant. */
  cancelButton?: React.ReactElement<ButtonProps>;
  /** Knappene vil vises sticky nederst på skjermen. Default: false  */
  sticky?: boolean;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const StepButtons: React.FC<StepButtonsProps> = props => {
  const { backButton, forwardButton, additionalButtons, cancelButton, sticky = false, testId } = props;

  const navigationClasses = classNames(styles.stepbuttons, sticky && styles['stepbuttons--has-sticky-buttons']);

  if (backButton || forwardButton || additionalButtons || cancelButton) {
    return (
      <div className={navigationClasses} data-testid={testId} data-analyticsid={AnalyticsId.StepButtons}>
        {(backButton || forwardButton) && (
          <div className={styles.stepbuttons__buttons}>
            {backButton &&
              React.cloneElement(backButton, {
                variant: 'outline',
                wrapperClassName: classNames(styles['stepbuttons__button--back']),
              })}
            {forwardButton &&
              React.cloneElement(forwardButton, {
                variant: 'fill',
                wrapperClassName: classNames(styles['stepbuttons__button--forward']),
              })}
          </div>
        )}
        {additionalButtons && (
          <div className={classNames(styles.stepbuttons__buttons, styles['stepbuttons__buttons--additional'])}>{additionalButtons}</div>
        )}
        {cancelButton && (
          <div className={styles.stepbuttons__buttons}>
            {React.cloneElement(cancelButton, {
              variant: 'borderless',
            })}
          </div>
        )}
      </div>
    );
  }
  return null;
};

export default StepButtons;
