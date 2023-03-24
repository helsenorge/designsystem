import React from 'react';

import classNames from 'classnames';

import { ButtonProps } from '../Button';
import { StepperProps } from '../Stepper';

import styles from './styles.module.scss';

interface StepProps {
  /** Stepper viser fremdriften */
  stepper?: React.ReactElement<StepperProps>;
  /** Innhold i steget */
  children: React.ReactNode;
  /** Knapp for å gå tilbake. Vises med "outline" variant. */
  backButton?: React.ReactElement<ButtonProps>;
  /** Knapp for å gå videre. Vises med "fill" variant. */
  forwardButton?: React.ReactElement<ButtonProps>;
  /** Ekstra knapper. Valgfritt utseende. */
  additionalButtons?: React.ReactElement<ButtonProps>[];
  /** Knapp for å avbryte eller fortsette senere. Vises med "borderless" variant. */
  cancelButton?: React.ReactElement<ButtonProps>;
}

const Step: React.FC<StepProps> = ({ stepper, children, backButton, forwardButton, additionalButtons, cancelButton }) => {
  return (
    <>
      {stepper && <div className={styles.step__stepper}>{stepper}</div>}
      <div className={styles.step__content}>{children}</div>
      <div className={styles.step__navigation}>
        {(backButton || forwardButton) && (
          <div className={classNames(styles.step__buttons, styles['step__buttons--navigation'])}>
            {backButton &&
              React.cloneElement(backButton, {
                variant: 'outline',
                wrapperClassName: classNames(styles['step__button--back']),
              })}
            {forwardButton &&
              React.cloneElement(forwardButton, {
                variant: 'fill',
                wrapperClassName: classNames(styles['step__button--forward']),
              })}
          </div>
        )}
        {additionalButtons && (
          <div className={classNames(styles.step__buttons, styles['step__buttons--additional'])}>{additionalButtons}</div>
        )}
        {cancelButton && (
          <div className={styles.step__buttons}>
            {React.cloneElement(cancelButton, {
              variant: 'borderless',
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Step;
