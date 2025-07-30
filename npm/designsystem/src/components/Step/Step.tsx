import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import { ButtonProps } from '../Button';
import StepButtons from '../StepButtons';
import { StepperProps } from '../Stepper';

import styles from './styles.module.scss';

export interface StepProps {
  /** Stepper viser fremdriften */
  stepper?: React.ReactElement<StepperProps>;
  /** Innhold i steget */
  children: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Adds custom classes to the content element. */
  contentClassName?: string;
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
  /** Sets the data-testid attribute. */
  testId?: string;
}

const Step: React.FC<StepProps> = ({
  stepper,
  children,
  className,
  contentClassName,
  backButton,
  forwardButton,
  additionalButtons,
  cancelButton,
  stickyButtons = false,
  testId,
}) => {
  const hasNavigation = backButton || forwardButton || additionalButtons || cancelButton;

  return (
    <div data-testid={testId} data-analyticsid={AnalyticsId.Step} className={className}>
      {stepper && <div className={styles.step__stepper}>{stepper}</div>}
      <div className={classNames(styles.step__content, contentClassName)}>{children}</div>
      {hasNavigation && (
        <StepButtons
          backButton={backButton}
          forwardButton={forwardButton}
          additionalButtons={additionalButtons}
          cancelButton={cancelButton}
          sticky={stickyButtons}
        />
      )}
    </div>
  );
};

export default Step;
