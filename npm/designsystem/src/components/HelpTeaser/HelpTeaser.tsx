import React from 'react';

import { HNDesignsystemInfoTeaser } from '../../resources/Resources';
import HandWaving from '../Icons/HandWaving';
import InfoTeaser, { InfoTeaserTags } from '../InfoTeaser';
import { TitleTags } from '../Title';

import styles from './styles.module.scss';

export interface HelpTeaserProps {
  /** What's in the box? */
  children: React.ReactNode;
  /** Override the default max height for collapsed teaser. Default is 12.25rem */
  collapsedMaxHeight?: string;
  /** Changes the underlying element of the wrapper */
  htmlMarkup?: InfoTeaserTags;
  /** Resources for component */
  resources?: Partial<HNDesignsystemInfoTeaser>;
  /** Sets the data-testid attribute */
  testId?: string;
  /** Title on top of the component */
  title: string;
  /** Markup props for title */
  titleHtmlMarkup?: TitleTags;
}

const HelpTeaser: React.FC<HelpTeaserProps> = props => {
  const { children, htmlMarkup, resources, testId, title, titleHtmlMarkup, collapsedMaxHeight } = props;
  return (
    <InfoTeaser
      testId={testId}
      htmlMarkup={htmlMarkup}
      className={styles.helpteaser}
      title={title}
      titleHtmlMarkup={titleHtmlMarkup}
      resources={resources}
      svgIcon={HandWaving}
      buttonClassName={styles['helpteaser__button']}
      collapsedMaxHeight={collapsedMaxHeight}
    >
      {children}
    </InfoTeaser>
  );
};

export default HelpTeaser;
