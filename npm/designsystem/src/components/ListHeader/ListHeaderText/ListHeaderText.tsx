import React from 'react';
import cn from 'classnames';

import StatusDot, { StatusDotVariant } from '../../StatusDot';

import styles from '../styles.module.scss';
import { TitleTags } from '../../Title';

export type ListHeaderTextType = React.ForwardRefExoticComponent<ListHeaderTextProps & React.RefAttributes<HTMLLIElement>>;

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
}

export const ListHeaderText: ListHeaderTextType = React.forwardRef((props: ListHeaderTextProps, ref: React.Ref<HTMLLIElement>) => {
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
    <div data-testid={testId} className={headerTextWrapperClasses}>
      {statusDotVariant !== undefined && (
        <span>
          <StatusDot text={''} variant={statusDotVariant} />
        </span>
      )}
      <CustomTag className={styles['list-header__title']}>
        <span className={firstHeaderTextSegmentClasses}>{firstText}</span>
        {secondText && <span className={secondHeaderTextSegmentClasses}>{secondText}</span>}
      </CustomTag>
    </div>
  );
});

export default ListHeaderText;
