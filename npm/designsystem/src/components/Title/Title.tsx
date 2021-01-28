import React from 'react';
import StyledTitle from './Title.styled';

export type TitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span';
export type TitleAppearances = 'titleFeature' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5';

interface TitleProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  margin?: number;
  htmlMarkup?: TitleTags;
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
