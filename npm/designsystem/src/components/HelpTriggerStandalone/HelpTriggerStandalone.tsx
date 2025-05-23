import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import { useIsMobileBreakpoint } from '../../hooks/useIsMobileBreakpoint';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import { HelpTriggerIconInternal, HelpTriggerWeights } from '../HelpTriggerIcon';

import styles from './styles.module.scss';

export interface HelpTriggerStandaloneProps
  extends Pick<React.InputHTMLAttributes<HTMLButtonElement>, 'onClick' | 'aria-haspopup' | 'aria-controls' | 'aria-expanded'> {
  /**
   * Sets aria-label of the trigger. ariaLabel or ariaLabelledById MUST be set!
   */
  ariaLabel?: string;
  /**
   * Sets aria-labelledby of the trigger. ariaLabel or ariaLabelledById MUST be set!
   */
  ariaLabelledById?: string;
  /** Sets the text content of the HelpTriggerStandalone. */
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

const HelpTriggerStandalone = React.forwardRef<HTMLButtonElement, HelpTriggerStandaloneProps>(
  ({ ariaLabel, ariaLabelledById, children, className, testId, weight = 'normal', ...rest }, ref) => {
    const isMobile = useIsMobileBreakpoint();
    const ariaLabelAttributes = getAriaLabelAttributes({ label: ariaLabel, id: ariaLabelledById });
    const helpTriggerStandaloneStyles = classNames(styles['help-trigger-standalone'], className);

    return (
      <button
        aria-label={ariaLabel}
        type="button"
        data-testid={testId}
        data-analyticsid={AnalyticsId.HelpTriggerStandalone}
        className={helpTriggerStandaloneStyles}
        ref={ref}
        {...ariaLabelAttributes}
        {...rest}
      >
        <span className={styles['help-trigger-standalone__inner-container']}>
          <HelpTriggerIconInternal weight={weight} size={isMobile ? 'medium' : 'large'} htmlMarkup={'span'} />
          <span className={styles['help-trigger-standalone__text']}>{children}</span>
        </span>
      </button>
    );
  }
);

HelpTriggerStandalone.displayName = 'HelpTriggerStandalone';

export default HelpTriggerStandalone;
