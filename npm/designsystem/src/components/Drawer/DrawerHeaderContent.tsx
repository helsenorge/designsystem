import type React from 'react';

import classNames from 'classnames';

import type { TitleTags } from '../Title';

import DrawerBackButton from './DrawerBackButton';
import Title from '../Title';

import styles from './DrawerHeaderContent.module.scss';

export interface DrawerHeaderContentProps {
  /** Title shown in the header */
  title?: React.ReactNode;
  /** id of the title element */
  titleId?: string;
  /** Ref passed to the title heading element */
  titleRef?: React.Ref<HTMLHeadingElement | null>;
  /** Changes the underlying element of the title. Default: h3 */
  titleHtmlMarkup?: TitleTags;
  /** Shows a back button before the title. When present the title is centered. */
  withBackButton?: boolean;
  /** Callback for the back button */
  onRequestBack?: () => void;
  /** Sets the aria-label of the back button */
  backButtonAriaLabel?: string;
  /** Adds custom classes to the root element. */
  className?: string;
}

const DrawerHeaderContent: React.FC<DrawerHeaderContentProps> = props => {
  const { title, titleId, titleRef, titleHtmlMarkup = 'h3', withBackButton, onRequestBack, backButtonAriaLabel, className } = props;

  return (
    <div className={classNames(styles['header-content'], className)}>
      <span
        className={classNames(styles['header-content__title'], {
          [styles['header-content__title--centered']]: withBackButton,
        })}
      >
        <Title id={titleId} ref={titleRef} tabIndex={-1} htmlMarkup={titleHtmlMarkup} appearance="title3">
          {title}
        </Title>
      </span>
      {withBackButton && (
        <DrawerBackButton ariaLabel={backButtonAriaLabel} onClick={onRequestBack} className={styles['header-content__back-button']} />
      )}
    </div>
  );
};

export default DrawerHeaderContent;
