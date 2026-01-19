import React from 'react';

import cn from 'classnames';

import Highlighter from '../../Highlighter';
import { TitleTags } from '../../Title';
import styles from '../styles.module.scss';

export type ElementHeaderTextType = typeof ElementHeaderText;

export interface ElementHeaderTextProps {
  /** The first text in the ElementHeaderText Component */
  firstText: string;
  /** Will style the first text as bold */
  firstTextEmphasised?: boolean;
  /** The second text in the ElementHeaderText Component */
  secondText?: string;
  /** Will style the second text as bold */
  secondTextEmphasised?: boolean;
  /** Whether or not this ElementHeaderText is a sub text */
  subText?: boolean;
  /** Adds custom classes to the ElementHeaderText component. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Changes the underlying element of the text. Default: span*/
  titleHtmlMarkup?: TitleTags;
  /** Highlights text. Used for search results */
  highlightText?: string;
}

export const ElementHeaderText: React.FC<ElementHeaderTextProps> = props => {
  const {
    firstText,
    firstTextEmphasised = false,
    secondText = undefined,
    secondTextEmphasised = false,
    subText = false,
    className = '',
    testId,
    titleHtmlMarkup = 'span',
    highlightText,
  } = props;

  const headerTextWrapperClasses = cn(className, styles['text-wrapper'], {
    [styles['text-wrapper--sub-level']]: subText,
  });
  const firstHeaderTextSegmentClasses = cn({
    [styles['text-wrapper__text--emphasised']]: firstTextEmphasised,
  });
  const secondHeaderTextSegmentClasses = cn({
    [styles['text-wrapper__text--emphasised']]: secondTextEmphasised,
  });
  const CustomTag = titleHtmlMarkup;

  return (
    <span data-testid={testId} className={headerTextWrapperClasses}>
      <CustomTag className={styles['element-header__title']}>
        <Highlighter searchText={highlightText}>
          <span className={firstHeaderTextSegmentClasses}>{firstText}</span>
          {secondText && <span className={secondHeaderTextSegmentClasses}>{secondText}</span>}
        </Highlighter>
      </CustomTag>
    </span>
  );
};

export default ElementHeaderText;
