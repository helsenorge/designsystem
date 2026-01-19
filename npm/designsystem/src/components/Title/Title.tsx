import React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';

import titleStyles from './styles.module.scss';

export type TitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
export type TitleAppearances = 'titleFeature' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5' | 'title6';

export interface TitleProps {
  children: React.ReactNode;
  /** Gives a unique id to the title */
  id?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Adds top and bottom margin in rem. */
  margin?: number | TitleMargin;
  /** Changes the underlying element of the title. */
  htmlMarkup?: TitleTags;
  /** Changes the appearance of the title. */
  appearance?: TitleAppearances;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Ref passed to the heading element */
  ref?: React.Ref<HTMLHeadingElement | null>;
}

export const Title: React.FC<TitleProps> = (props: TitleProps) => {
  const { id, children, className, htmlMarkup = 'h1', appearance = 'title1', margin = 0, testId, ref } = props;
  const titleClasses = classNames(
    titleStyles.title,
    {
      [titleStyles['title--feature']]: appearance === 'titleFeature',
      [titleStyles['title--title1']]: appearance === 'title1',
      [titleStyles['title--title2']]: appearance === 'title2',
      [titleStyles['title--title3']]: appearance === 'title3',
      [titleStyles['title--title4']]: appearance === 'title4',
      [titleStyles['title--title5']]: appearance === 'title5',
      [titleStyles['title--title6']]: appearance === 'title6',
    },
    className
  );
  const CustomTag = htmlMarkup;

  const inlineStyle = instanceOfTitleMargin(margin)
    ? { marginTop: `${margin.marginTop}rem`, marginBottom: `${margin.marginBottom}rem` }
    : { marginTop: `${margin}rem`, marginBottom: `${margin}rem` };

  return (
    <CustomTag id={id} className={titleClasses} style={inlineStyle} ref={ref} data-testid={testId} data-analyticsid={AnalyticsId.Title}>
      {children}
    </CustomTag>
  );
};

export interface TitleMargin {
  marginTop: number;
  marginBottom: number;
}

export const instanceOfTitleMargin = (margin: unknown): margin is TitleMargin => {
  return Object.prototype.hasOwnProperty.call(margin, 'marginTop') && Object.prototype.hasOwnProperty.call(margin, 'marginBottom');
};

export default Title;
