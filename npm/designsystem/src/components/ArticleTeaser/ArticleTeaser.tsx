import classNames from 'classnames';

import type { HNDesignsystemArticleTeaser } from '../../resources/Resources';

import { getResources } from './resourceHelper';
import { AnalyticsId, LanguageLocales } from '../../constants';
import { useLanguage } from '../../hooks/useLanguage';

import styles from './styles.module.scss';

export type ArticleTeaserTags = 'div' | 'section' | 'aside' | 'article';

export interface ArticleTeaserProps {
  /** Callback for the button. Should be used for setting the expanded boolean */
  onExpand: () => void;
  /** What's in the box? */
  children: React.ReactNode;
  /** Id of the content, used to set aria-controls */
  contentId: string;
  /** If the component is expanded or not */
  expanded: boolean;
  /** For overriding the height of the collapsed teaser */
  heightCollapsed?: string;
  /** Changes the underlying element of the wrapper */
  htmlMarkup?: ArticleTeaserTags;
  /** Resources for component */
  resources?: Partial<HNDesignsystemArticleTeaser>;
  /** Sets the data-testid attribute */
  testId?: string;
}

const ArticleTeaser: React.FC<ArticleTeaserProps> = props => {
  const { onExpand, children, contentId, expanded, htmlMarkup = 'div', resources, testId } = props;
  const WrapperTag = htmlMarkup;

  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources: HNDesignsystemArticleTeaser = {
    ...defaultResources,
    ...resources,
  };

  return (
    <WrapperTag className={classNames(styles.articleteaser)} data-testid={testId} data-analyticsid={AnalyticsId.ArticleTeaser}>
      <div
        className={classNames(styles['articleteaser__content'], {
          [styles['articleteaser__content--collapsed']]: !expanded,
        })}
        style={{
          maxHeight: expanded ? 'none' : props.heightCollapsed,
        }}
      >
        {children}
      </div>
      <button
        type="button"
        className={classNames(styles['articleteaser__button'], {
          [styles['articleteaser__button--expanded']]: expanded,
        })}
        onClick={onExpand}
        aria-expanded={expanded}
        aria-controls={contentId}
      >
        {expanded ? mergedResources.expandButtonOpen : mergedResources.expandButtonClose}
      </button>
    </WrapperTag>
  );
};

export default ArticleTeaser;
