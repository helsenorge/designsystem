import { useId } from 'react';

import classNames from 'classnames';

import type { HNDesignsystemInfoTeaser } from '../../resources/Resources';
import type { SvgIcon } from '../Icon';
import type { IconName } from '../Icons/IconNames';
import type { TitleTags } from '../Title';

import { AnalyticsId, LanguageLocales } from '../../constants';
import { useExpand } from '../../hooks/useExpand';
import { useLanguage } from '../../hooks/useLanguage';
import Icon, { IconSize } from '../Icon';
import LazyIcon from '../LazyIcon';
import Title from '../Title';
import { getResources } from './resourceHelper';

import styles from './styles.module.scss';

export type InfoTeaserTags = 'div' | 'section' | 'aside' | 'article';

export interface InfoTeaserProps {
  /** For overriding styling on the button */
  buttonClassName?: string;
  /** What's in the box? */
  children: React.ReactNode;
  /** Override the default max height for collapsed teaser. Default is 12.25rem */
  collapsedMaxHeight?: string;
  /** For overriding styling on infoteaser box */
  className?: string;
  /** Opens or closes the teaser */
  expanded?: boolean;
  /** Changes the underlying element of the wrapper */
  htmlMarkup?: InfoTeaserTags;
  /** Called when the teaser is expanded/collapsed. */
  onExpand?: (isExpanded: boolean) => void;
  /** Resources for component */
  resources?: Partial<HNDesignsystemInfoTeaser>;
  /** Adds an icon */
  svgIcon?: SvgIcon | IconName;
  /** Sets the data-testid attribute */
  testId?: string;
  /** Title on top of the component */
  title?: string;
  /** Markup props for title */
  titleHtmlMarkup?: TitleTags;
}

const InfoTeaser: React.FC<InfoTeaserProps> = props => {
  const {
    buttonClassName,
    children,
    className,
    expanded = false,
    htmlMarkup = 'div',
    onExpand,
    resources,
    svgIcon,
    testId,
    title,
    titleHtmlMarkup = 'h2',
    collapsedMaxHeight,
  } = props;
  const [isExpanded, setIsExpanded] = useExpand(expanded, onExpand);
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);
  const infoteaserTextId = useId();

  const mergedResources: HNDesignsystemInfoTeaser = {
    ...defaultResources,
    ...resources,
  };

  const WrapperTag = htmlMarkup;

  return (
    <WrapperTag className={styles.wrapper} data-testid={testId} data-analyticsid={AnalyticsId.InfoTeaser}>
      <div
        className={classNames(styles.infoteaser, className, {
          [styles['infoteaser--collapsed']]: !isExpanded,
        })}
        style={{ maxHeight: !isExpanded ? (collapsedMaxHeight ? collapsedMaxHeight : '12.25rem') : undefined }}
      >
        {svgIcon &&
          (typeof svgIcon === 'string' ? (
            <LazyIcon iconName={svgIcon} size={IconSize.Small} className={styles.infoteaser__icon} />
          ) : (
            <Icon svgIcon={svgIcon} size={IconSize.Small} className={styles.infoteaser__icon} />
          ))}
        {title && typeof title !== 'undefined' && (
          <Title testId="titleId" htmlMarkup={titleHtmlMarkup} appearance="title4" className={styles.infoteaser__title}>
            {title}
          </Title>
        )}
        <div className={styles.infoteaser__text} aria-hidden={isExpanded ? false : true} id={infoteaserTextId}>
          {children}
        </div>
      </div>
      <button
        type="button"
        className={classNames(styles.infoteaser__button, buttonClassName)}
        onClick={() => {
          setIsExpanded(!isExpanded);
        }}
        aria-expanded={isExpanded}
        aria-controls={infoteaserTextId}
      >
        {isExpanded ? mergedResources.expandButtonOpen : mergedResources.expandButtonClose}
      </button>
    </WrapperTag>
  );
};

export default InfoTeaser;
