import React from 'react';

import { AnalyticsId, IconSize } from '../../constants';
import { useExpand } from '../../hooks/useExpand';
import { useHover } from '../../hooks/useHover';
import { getAriaLabelAttributes } from '../../utils/accessibility';
import { mergeRefs } from '../../utils/refs';
import HelpDetails from '../HelpDetails/HelpDetails';
import { HelpTriggerWeights } from '../HelpTriggerIcon/HelpTriggerIcon';
import HelpTriggerStandalone from '../HelpTriggerStandalone';
import Icon from '../Icon';
import ChevronDown from '../Icons/ChevronDown';
import ChevronUp from '../Icons/ChevronUp';

import styles from './styles.module.scss';

export interface HelpExpanderStandaloneProps {
  /** Sets aria-label of the trigger. */
  ariaLabel?: string;
  /** Sets aria-labelledby of the trigger. */
  ariaLabelledById?: string;
  /** Sets the text content of the help text that appears when expanded. */
  children: React.ReactNode;
  /** Expands the component */
  expanded?: boolean;
  /** Called when expander is open/closed. */
  onExpand?: (isExpanded: boolean) => void;
  /**
   * Sets the colors of the help trigger. Default: normal.
   */
  weight?: HelpTriggerWeights;
  /**
   * Classname will be applied to the button element.
   */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** The text that will be displayed in the trigger. */
  triggerText: string;
}

const HelpExpanderStandalone = React.forwardRef<HTMLButtonElement, HelpExpanderStandaloneProps>(
  ({ ariaLabel, ariaLabelledById, children, className, expanded = false, onExpand, testId, triggerText, weight = 'normal' }, ref) => {
    const ariaLabelAttributes = getAriaLabelAttributes({ label: ariaLabel, id: ariaLabelledById });
    const [isExpanded, setIsExpanded] = useExpand(expanded, onExpand);
    const { hoverRef, isHovered } = useHover<HTMLButtonElement>(ref as React.RefObject<HTMLButtonElement>, false);

    return (
      <div className={className} data-testid={testId} data-analyticsid={AnalyticsId.HelpExpanderStandalone}>
        <HelpTriggerStandalone
          className={styles['help-expander-standalone-trigger']}
          aria-expanded={isExpanded}
          onClick={(): void => setIsExpanded(!isExpanded)}
          ref={mergeRefs([ref, hoverRef])}
          weight={weight}
          {...ariaLabelAttributes}
        >
          {triggerText}
          <Icon
            color={`var(--core-color-plum-${isHovered ? '900' : '700'})`}
            svgIcon={isExpanded ? ChevronUp : ChevronDown}
            size={IconSize.XXSmall}
          />
        </HelpTriggerStandalone>
        {isExpanded && <HelpDetails>{children}</HelpDetails>}
      </div>
    );
  }
);

HelpExpanderStandalone.displayName = 'HelpExpanderStandalone';

export default HelpExpanderStandalone;
