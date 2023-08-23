import React from 'react';

import HighlightBox, { HighlightBoxSize, HighlightBoxTags } from '../HighlightBox';
import { SvgIcon } from '../Icons';
import Title from '../Title';

interface HelpPanelProps {
  /** What's in the box? */
  children: React.ReactNode;
  /** Changes the size. Default: medium */
  size?: keyof typeof HighlightBoxSize;
  /** Adds an icon to the highlightbox. */
  svgIcon: SvgIcon;
  /** Changes the underlying element. Default: div */
  htmlMarkup?: HighlightBoxTags;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets title if needed */
  title?: string;
}

const HelpPanel: React.FC<HelpPanelProps> = ({ className, testId, size, htmlMarkup, children, svgIcon, title }) => {
  return (
    <HighlightBox
      className={className}
      testId={testId}
      size={size}
      htmlMarkup={htmlMarkup}
      svgIcon={svgIcon}
      color="plum"
      afterIconElement={
        <Title testId="titleId" htmlMarkup="h4" appearance="title4">
          {title}
        </Title>
      }
    >
      {children}
    </HighlightBox>
  );
};

export default HelpPanel;
