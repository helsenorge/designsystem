import React from 'react';

import HighlightBox, { HighlightBoxSize } from '../HighlightBox';
import HandWaving from '../Icons/HandWaving';

interface HelpPanelProps {
  /** What's in the box? */
  children: React.ReactNode;
  /** Changes the size. Default: medium */
  size?: keyof typeof HighlightBoxSize;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets title if needed */
  title?: string;
}

const HelpPanel: React.FC<HelpPanelProps> = ({ className, testId, size, children, title }) => {
  return (
    <HighlightBox className={className} testId={testId} size={size} svgIcon={HandWaving} color="plum" title={title}>
      {children}
    </HighlightBox>
  );
};

export default HelpPanel;
