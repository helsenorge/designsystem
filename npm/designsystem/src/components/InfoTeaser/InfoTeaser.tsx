import React, { useState } from 'react';

import classNames from 'classnames';

import { LanguageLocales } from '../../constants';
import { HNDesignsystemInfoTeaser } from '../../resources/Resources';
import { useLanguage } from '../../utils/language';
import Icon, { IconSize, SvgIcon } from '../Icon';
import { IconName } from '../Icons/IconNames';
import LazyIcon from '../LazyIcon';
import Title, { TitleTags } from '../Title';
import { getResources } from './resourceHelper';
import { useUuid } from '../../hooks/useUuid';

import styles from './styles.module.scss';

export type InfoTeaserTags = 'div' | 'section' | 'aside' | 'article';

export interface InfoTeaserProps {
  /** For overriding styling on the button */
  buttonClassName?: string;
  /** What's in the box? */
  children: React.ReactNode;
  /** For overriding styling on infoteaser box */
  className?: string;
  /** Changes the underlying element of the wrapper */
  htmlMarkup?: InfoTeaserTags;
  /** Resources for component */
  resources?: Partial<HNDesignsystemInfoTeaser>;
  /** Adds an icon */
  svgIcon?: SvgIcon | IconName;
  /** Sets the data-testid attribute */
  testId?: string;
  /** Title on top of the component */
  title: string;
  /** Markup props for title */
  titleHtmlMarkup?: TitleTags;
}

const InfoTeaser: React.FC<InfoTeaserProps> = props => {
  const { buttonClassName, children, className, htmlMarkup = 'div', resources, svgIcon, testId, title, titleHtmlMarkup = 'h2' } = props;
  const [expanded, setExpanded] = useState(false);
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);
  const infoteaserTextId = useUuid();

  const mergedResources: HNDesignsystemInfoTeaser = {
    ...defaultResources,
    ...resources,
  };

  const WrapperTag = htmlMarkup;

  return (
    <WrapperTag className={styles.wrapper} data-testid={testId}>
      <div
        className={classNames(styles.infoteaser, className, {
          [styles['infoteaser--collapsed']]: !expanded,
        })}
      >
        {svgIcon &&
          (typeof svgIcon === 'string' ? (
            <LazyIcon iconName={svgIcon} size={IconSize.Small} className={styles.infoteaser__icon} />
          ) : (
            <Icon svgIcon={svgIcon} size={IconSize.Small} className={styles.infoteaser__icon} />
          ))}
        <Title testId="titleId" htmlMarkup={titleHtmlMarkup} appearance="title4" className={styles.infoteaser__title}>
          {title}
        </Title>
        <div className={styles.infoteaser__text} aria-hidden={expanded ? false : true} id={infoteaserTextId}>
          {children}
        </div>
      </div>
      <button
        type="button"
        className={classNames(styles.infoteaser__button, buttonClassName)}
        onClick={() => {
          setExpanded(!expanded);
        }}
        aria-expanded={expanded}
        aria-controls={infoteaserTextId}
      >
        {expanded ? mergedResources.expandButtonOpen : mergedResources.expandButtonClose}
      </button>
    </WrapperTag>
  );
};

export default InfoTeaser;
