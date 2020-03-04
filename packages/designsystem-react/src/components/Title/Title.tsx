import React from 'react';
import StyledTitle from './Title.styled';

export type TitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export type TitleAppearances = 'titleFeature' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  margin?: number;
  is?: TitleTags;
  appearance?: TitleAppearances;
}

const Title = React.forwardRef((props: TitleProps, ref: any) => {
  const {children, className, is = 'h1', appearance = 'title1', margin = 0} = props;
  return (
    <StyledTitle className={className} as={is} margin={margin} appearance={appearance} ref={ref}>
      {children}
    </StyledTitle>
  );
});

export default Title;