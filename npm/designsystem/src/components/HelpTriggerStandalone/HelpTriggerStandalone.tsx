import type React from 'react';

import classNames from 'classnames';

import type { HelpTriggerWeights } from '../HelpTriggerIcon';

import { AnalyticsId } from '../../constants';
import { useIsMobileBreakpoint } from '../../hooks/useIsMobileBreakpoint';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import { isMutableRefObject, mergeRefs } from '../../utils/refs';
import { HelpTriggerIconInternal } from '../HelpTriggerIcon';

import styles from './styles.module.scss';

export interface HelpTriggerStandaloneProps extends Pick<
  React.InputHTMLAttributes<HTMLButtonElement>,
  'onClick' | 'aria-haspopup' | 'aria-controls' | 'aria-expanded'
> {
  /**
   * Sets aria-label of the trigger. ariaLabel or ariaLabelledById MUST be set!
   */
  ariaLabel?: string;
  /**
   * Sets aria-labelledby of the trigger. ariaLabel or ariaLabelledById MUST be set!
   */
  ariaLabelledById?: string;
  /** Sets the text content of the HelpTriggerStandalone. */
  children: React.ReactNode;
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
  /** Ref passed to the component */
  ref?: React.Ref<HTMLButtonElement | null>;
}

const HelpTriggerStandalone: React.FC<HelpTriggerStandaloneProps> = props => {
  const { ariaLabel, ariaLabelledById, children, className, testId, weight = 'normal', ref, ...rest } = props;
  const isMobile = useIsMobileBreakpoint();
  const ariaLabelAttributes = getAriaLabelAttributes({ label: ariaLabel, id: ariaLabelledById });
  const helpTriggerStandaloneStyles = classNames(styles['help-trigger-standalone'], className);
  const { refObject, isHovered } = usePseudoClasses<HTMLButtonElement>(isMutableRefObject(ref) ? ref : null);

  return (
    <button
      aria-label={ariaLabel}
      type="button"
      data-testid={testId}
      data-analyticsid={AnalyticsId.HelpTriggerStandalone}
      className={helpTriggerStandaloneStyles}
      ref={mergeRefs([refObject, ref])}
      {...ariaLabelAttributes}
      {...rest}
    >
      <HelpTriggerIconInternal weight={weight} size={isMobile ? 'medium' : 'large'} htmlMarkup={'span'} isHovered={isHovered} />
      <span className={styles['help-trigger-standalone__children']}>{children}</span>
    </button>
  );
};

HelpTriggerStandalone.displayName = 'HelpTriggerStandalone';

export default HelpTriggerStandalone;
