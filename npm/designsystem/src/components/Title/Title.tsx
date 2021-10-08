import React from 'react';

import titleStyles from './styles.module.scss';
import classNames from 'classnames';

export type TitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span';
export type TitleAppearances = 'titleFeature' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5';

interface TitleProps {
  children: React.ReactNode;
  /** Gives a unique id to the title */
  id?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Adds top and bottom margin in rem. */
  margin?: number;
  /** Changes the underlying element of the title. */
  htmlMarkup?: TitleTags;
  /** Changes the appearance of the title. */
  appearance?: TitleAppearances;
}

const Title = React.forwardRef(function TitleForwardedRef(props: TitleProps, ref: React.ForwardedRef<HTMLHeadingElement>) {
  const { id, children, className, htmlMarkup = 'h1', appearance = 'title1', margin = 0 } = props;
  const titleClasses = classNames(
    titleStyles.title,
    {
      [titleStyles['title--feature']]: appearance === 'titleFeature',
      [titleStyles['title--title1']]: appearance === 'title1',
      [titleStyles['title--title2']]: appearance === 'title2',
      [titleStyles['title--title3']]: appearance === 'title3',
      [titleStyles['title--title4']]: appearance === 'title4',
      [titleStyles['title--title5']]: appearance === 'title5',
    },
    className
  );

  if (htmlMarkup === 'h1') {
    return (
      <h1 id={id} className={titleClasses} style={{ marginTop: `${margin}rem`, marginBottom: `${margin}rem` }} ref={ref}>
        {children}
      </h1>
    );
  } else if (htmlMarkup === 'h2') {
    return (
      <h2 id={id} className={titleClasses} style={{ marginTop: `${margin}rem`, marginBottom: `${margin}rem` }} ref={ref}>
        {children}
      </h2>
    );
  } else if (htmlMarkup === 'h3') {
    return (
      <h3 id={id} className={titleClasses} style={{ marginTop: `${margin}rem`, marginBottom: `${margin}rem` }} ref={ref}>
        {children}
      </h3>
    );
  } else if (htmlMarkup === 'h4') {
    return (
      <h4 id={id} className={titleClasses} style={{ marginTop: `${margin}rem`, marginBottom: `${margin}rem` }} ref={ref}>
        {children}
      </h4>
    );
  } else if (htmlMarkup === 'h5') {
    return (
      <h5 id={id} className={titleClasses} style={{ marginTop: `${margin}rem`, marginBottom: `${margin}rem` }} ref={ref}>
        {children}
      </h5>
    );
  } else {
    return (
      <span id={id} className={titleClasses} style={{ marginTop: `${margin}rem`, marginBottom: `${margin}rem` }} ref={ref}>
        {children}
      </span>
    );
  }
});

export default Title;
