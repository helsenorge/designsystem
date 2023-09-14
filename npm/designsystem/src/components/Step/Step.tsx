import React, { useRef } from 'react';

import classNames from 'classnames';

import { useSticky } from '../../hooks/useSticky';
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
  /** Knappene vil vises sticky nederst på skjermen dersom innholdet i Step tar mer plass enn vinduet. Default: false  */
  stickyButtons?: boolean;
}

const Step: React.FC<StepProps> = ({
  stepper,
  children,
  backButton,
  forwardButton,
  additionalButtons,
  cancelButton,
  stickyButtons = false,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const { isOutsideWindow, offsetHeight, contentWidth } = useSticky(contentRef, navigationRef, 'bottom');

  const isSticky = stickyButtons && isOutsideWindow;
  const hasNavigation = backButton || forwardButton || additionalButtons || cancelButton;

  const contentClasses = classNames(!hasNavigation && styles['step__content--no-navigation']);
  const navigationClasses = classNames(
    styles.step__navigation,
    !hasNavigation && styles['step__navigation--hidden'],
    stickyButtons && styles['step__navigation--has-sticky-buttons'],
    isSticky && styles['step__navigation--is-sticky']
  );

  return (
    <div className={classNames(stickyButtons && styles['step--has-sticky-buttons'])}>
      {stepper && <div className={styles.step__stepper}>{stepper}</div>}
      <div
        className={contentClasses}
        ref={contentRef}
        style={{ paddingBottom: stickyButtons && offsetHeight ? `${offsetHeight}px` : undefined }}
      >
        {children}
      </div>
      <div
        className={navigationClasses}
        ref={navigationRef}
        style={{
          width: stickyButtons && contentWidth ? `${contentWidth}px` : undefined,
        }}
      >
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
    </div>
  );
};

export default Step;
