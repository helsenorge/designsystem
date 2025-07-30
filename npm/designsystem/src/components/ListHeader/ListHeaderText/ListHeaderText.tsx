import React from 'react';

import cn from 'classnames';

import Highlighter from '../../Highlighter';
import StatusDot, { StatusDotVariant } from '../../StatusDot';
import { TitleTags } from '../../Title';
import styles from '../styles.module.scss';

export type ListHeaderTextType = React.FC<ListHeaderTextProps>;

export interface ListHeaderTextProps {
  /** The first text in the ListHeaderText Component */
  firstText: string;
  /** Will style the first text as bold */
  firstTextEmphasised?: boolean;
  /** The second text in the ListHeaderText Component */
  secondText?: string;
  /** Will style the second text as bold */
  secondTextEmphasised?: boolean;
  /** Whether or not this ListHeaderText is a sub text */
  subText?: boolean;
  /** Decides the variant for the StatusDot */
  statusDotVariant?: StatusDotVariant;
  /** Adds custom classes to the ListHeaderText component. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Changes the underlying element of the title. Default: span*/
  titleHtmlMarkup?: TitleTags;
  /** Highlights text. Used for search results */
  highlightText?: string;
}

export const ListHeaderText: ListHeaderTextType = props => {
  const {
    firstText,
    firstTextEmphasised = false,
    secondText = undefined,
    secondTextEmphasised = false,
    subText = false,
    statusDotVariant,
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
      {statusDotVariant !== undefined && (
        <span>
          <StatusDot text={''} variant={statusDotVariant} />
        </span>
      )}
      <CustomTag className={styles['list-header__title']}>
        <Highlighter searchText={highlightText}>
          <span className={firstHeaderTextSegmentClasses}>{firstText}</span>
          {secondText && <span className={secondHeaderTextSegmentClasses}>{secondText}</span>}
        </Highlighter>
      </CustomTag>
    </span>
  );
};

ListHeaderText.displayName = 'ListHeaderText';

export default ListHeaderText;
