import React from 'react';

import HighlightBox, { HighlightBoxSize } from '../HighlightBox';
import HandWaving from '../Icons/HandWaving';
import Title, { TitleProps } from '../Title';

interface HelpPanelProps {
  /** What's in the box? */
  children: React.ReactNode;
  /** Changes the size. Default: medium */
  size?: keyof typeof HighlightBoxSize;
  /**  */
  titleHtmlMarkup: TitleProps;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets title if needed */
  title?: string;
}

const HelpPanel: React.FC<HelpPanelProps> = ({
  className,
  testId,
  size,
  titleHtmlMarkup = { testId: 'titleId', htmlMarkup: 'h2', appearance: 'title4' },
  children,
  title,
}) => {
  return (
    <HighlightBox
      className={className}
      testId={testId}
      size={size}
      svgIcon={HandWaving}
      color="plum"
      afterIconElement={title && <Title {...titleHtmlMarkup}>{title}</Title>}
    >
      {children}
    </HighlightBox>
  );
};

export default HelpPanel;
