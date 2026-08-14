import { useId } from 'react';

import classNames from 'classnames';

import type { HNDesignsystemInfoTeaser } from '../../resources/Resources';
import type { TitleTags } from '../Title';

import { useIsMobileBreakpoint } from '@helsenorge/designsystem-react/hooks/useIsMobileBreakpoint';

import { LanguageLocales } from '../../constants';
import { useExpand } from '../../hooks/useExpand';
import { useLanguage } from '../../hooks/useLanguage';
import Icon, { IconSize } from '../Icon';
import HandWaving from '../Icons/HandWaving';
import { getResources } from '../InfoTeaser/resourceHelper';
import Title from '../Title';

import styles from './styles.module.scss';

export type HelpTeaserVariants = 'normal' | 'subdued';
export type HelpTeaserTags = 'div' | 'section' | 'aside' | 'article';

export interface HelpTeaserProps {
  /** What's in the box? */
  children: React.ReactNode;
  /** Override the default max height for collapsed teaser. Default is 12.25rem */
  collapsedMaxHeight?: string;
  /** Changes the underlying element of the wrapper */
  htmlMarkup?: HelpTeaserTags;
  /** Resources for component */
  resources?: Partial<HNDesignsystemInfoTeaser>;
  /** Sets the data-testid attribute */
  testId?: string;
  /** Title on top of the component */
  title: string;
  /** Markup props for title */
  titleHtmlMarkup?: TitleTags;
  /** Sets the visual variant */
  variant?: HelpTeaserVariants;
}

const HelpTeaser: React.FC<HelpTeaserProps> = props => {
  const { children, htmlMarkup, resources, testId, title, titleHtmlMarkup, collapsedMaxHeight, variant = 'normal' } = props;

  const [isExpanded, setIsExpanded] = useExpand(false);
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);
  const helpTeaserTextId = useId();
  const isMobile = useIsMobileBreakpoint();

  const mergedResources: HNDesignsystemInfoTeaser = {
    ...defaultResources,
    ...resources,
  };

  const WrapperTag = htmlMarkup ?? 'div';

  return (
    <WrapperTag className={styles.wrapper} data-testid={testId}>
      <div
        className={classNames(styles.helpteaser, {
          [styles['helpteaser--collapsed']]: !isExpanded,
          [styles['helpteaser--subdued']]: variant === 'subdued',
        })}
        style={{ maxHeight: !isExpanded ? (collapsedMaxHeight ?? '12.25rem') : undefined }}
      >
        <Icon svgIcon={HandWaving} size={isMobile ? IconSize.XSmall : IconSize.Small} className={styles['helpteaser__icon']} />
        {title && typeof title !== 'undefined' && (
          <Title testId="titleId" htmlMarkup={titleHtmlMarkup ?? 'h2'} appearance="title6" className={styles['helpteaser__title']}>
            {title}
          </Title>
        )}
        <div className={styles['helpteaser__text']} aria-hidden={isExpanded ? false : true} id={helpTeaserTextId}>
          {children}
        </div>
      </div>
      <button
        type="button"
        className={styles['helpteaser__button']}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
        aria-expanded={isExpanded}
        aria-controls={helpTeaserTextId}
      >
        {isExpanded ? mergedResources.expandButtonOpen : mergedResources.expandButtonClose}
      </button>
    </WrapperTag>
  );
};

export default HelpTeaser;
