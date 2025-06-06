import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import { HelpTriggerIconInternal, HelpTriggerWeights } from '../HelpTriggerIcon';

import styles from './styles.module.scss';

export interface HelpTriggerInlineProps
  extends Pick<React.InputHTMLAttributes<HTMLButtonElement>, 'onClick' | 'aria-haspopup' | 'aria-controls' | 'aria-expanded'> {
  /**
   * Sets aria-label of the trigger. ariaLabel or ariaLabelledById MUST be set!
   */
  ariaLabel?: string;
  /**
   * Sets aria-labelledby of the trigger. ariaLabel or ariaLabelledById MUST be set!
   */
  ariaLabelledById?: string;
  /** Sets the text content of the HelpTriggerInline. */
  children: string;
  /**
   * Sets the colors of the help trigger. Default: normal.
   */
  weight?: HelpTriggerWeights;
  /**
   * Classname will be applied to the button element.
   */
  className?: string;
  /**
   * Optional test id.
   */
  testId?: string;
}

const HelpTriggerInline = React.forwardRef<HTMLButtonElement, HelpTriggerInlineProps>(
  ({ ariaLabel, ariaLabelledById, children, className, testId, weight = 'normal', ...rest }, ref) => {
    const ariaLabelAttributes = getAriaLabelAttributes({ label: ariaLabel, id: ariaLabelledById });
    const helpTriggerInlineStyles = classNames(styles['help-trigger-inline'], className);

    return (
      <button
        aria-label={ariaLabel}
        type="button"
        data-testid={testId}
        data-analyticsid={AnalyticsId.HelpTriggerInline}
        className={helpTriggerInlineStyles}
        ref={ref}
        {...ariaLabelAttributes}
        {...rest}
      >
        <span className={styles['help-trigger-inline__text']}>{children}</span>
        <HelpTriggerIconInternal weight={weight} size={'inherit'} htmlMarkup={'span'} />
      </button>
    );
  }
);

HelpTriggerInline.displayName = 'HelpTriggerInline';

export default HelpTriggerInline;
