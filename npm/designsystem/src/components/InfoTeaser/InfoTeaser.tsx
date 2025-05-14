import React, { useState } from 'react';

import classNames from 'classnames';

import Icon, { IconSize, SvgIcon } from '../Icon';
import { IconName } from '../Icons/IconNames';
import LazyIcon from '../LazyIcon';
import Title, { TitleTags } from '../Title';

import styles from './styles.module.scss';

export interface InfoTeaserProps {
  /** For overriding styling on the button */
  buttonClassName?: string;
  /** What's in the box? */
  children: React.ReactNode;
  /** For overriding styling on infoteaser box */
  className?: string;
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
  const { buttonClassName, children, className, svgIcon, testId, title, titleHtmlMarkup = 'h4' } = props;
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div
        className={classNames(styles.infoteaser, className, {
          [styles['infoteaser--collapsed']]: !expanded,
        })}
        data-testid={testId}
      >
        {svgIcon &&
          (typeof svgIcon === 'string' ? (
            <LazyIcon iconName={svgIcon} size={IconSize.Small} className={styles.infoteaser__icon} />
          ) : (
            <Icon svgIcon={svgIcon} size={IconSize.Small} className={styles.infoteaser__icon} />
          ))}
        {title && (
          <Title testId="titleId" htmlMarkup={titleHtmlMarkup} appearance="title4" className={styles.infoteaser__title}>
            {title}
          </Title>
        )}
        <div className={styles.infoteaser__text}>{children}</div>
      </div>
      <button
        type="button"
        className={classNames(styles.infoteaser__button, buttonClassName)}
        onClick={() => {
          setExpanded(!expanded);
        }}
        aria-label="Les mer"
      >
        {/* @todo: språk på knapp */}
        {expanded ? 'Vis mindre' : 'Vis mer'}
      </button>
    </div>
  );
};

export default InfoTeaser;
