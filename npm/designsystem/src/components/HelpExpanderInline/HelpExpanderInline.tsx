import React from 'react';

import { AnalyticsId } from '../../constants';
import { useExpand } from '../../hooks/useExpand';
import HelpDetails from '../HelpDetails/HelpDetails';

export interface HelpExpanderInlineProps {
  /** Sets the text content of the help text that appears when expanded. */
  children: React.ReactNode;
  /** Ref for the element that triggers the HelpExpanderInline */
  controllerRef?: React.RefObject<HTMLButtonElement>;
  /** Expands the component */
  expanded?: boolean;
  /** Called when expander is open/closed. */
  onExpand?: (isExpanded: boolean) => void;
  /** Classname will be applied to the button element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const HelpExpanderInline = React.forwardRef<HTMLDivElement, HelpExpanderInlineProps>(
  ({ children, className, controllerRef, expanded = false, onExpand, testId }, ref) => {
    const [isExpanded] = useExpand(expanded, onExpand);

    return (
      <div className={className} data-testid={testId} data-analyticsid={AnalyticsId.HelpExpanderInline} ref={ref}>
        {isExpanded && <HelpDetails controllerRef={controllerRef}>{children}</HelpDetails>}
      </div>
    );
  }
);

HelpExpanderInline.displayName = 'HelpExpanderInline';

export default HelpExpanderInline;
