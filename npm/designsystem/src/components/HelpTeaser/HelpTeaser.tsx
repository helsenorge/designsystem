import type { HNDesignsystemInfoTeaser } from '../../resources/Resources';
import type { InfoTeaserTags } from '../InfoTeaser';
import type { TitleTags } from '../Title';

import HandWaving from '../Icons/HandWaving';
import InfoTeaser from '../InfoTeaser';

import styles from './styles.module.scss';

export interface HelpTeaserProps {
  /** What's in the box? */
  children: React.ReactNode;
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
  const { children, htmlMarkup, resources, testId, title, titleHtmlMarkup } = props;
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
    >
      {children}
    </InfoTeaser>
  );
};

export default HelpTeaser;
