import React from 'react';
import StyledTitle from './Title.styled';

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

const Title = React.forwardRef(function TitleForwardedRef(props: TitleProps, ref: React.ForwardedRef<HTMLElement>) {
  const { id, children, className, htmlMarkup = 'h1', appearance = 'title1', margin = 0 } = props;
  return (
    <StyledTitle id={id} className={className} as={htmlMarkup} margin={margin} appearance={appearance} ref={ref}>
      {children}
    </StyledTitle>
  );
});

export default Title;
