import React, {useState} from 'react';
import {
  StyledExpander,
  StyledExpanderContent,
  StyledExpanderHeader,
  StyledExpanderTitle,
  StyledExpanderHeaderContent,
} from './Expander.styled';
import Icon from '../Icons';
import {PaletteNames} from '../../theme/palette';

export type ExpanderVariants = 'box' | 'hollow';

export interface ExpanderCompounds
  extends React.ForwardRefExoticComponent<ExpanderProps & React.RefAttributes<HTMLDivElement>> {
  Title: any;
}

interface ExpanderHeaderProps {
  children?: React.ReactNode;
  isExpanded?: boolean;
  chevron?: boolean;
}

function ExpanderHeader(props: ExpanderHeaderProps) {
  const {children, isExpanded = false} = props;
  return (
    <StyledExpanderHeader>
      <StyledExpanderHeaderContent>{children}</StyledExpanderHeaderContent>
      <Icon type={isExpanded ? 'chevronUp' : 'chevronDown'} />
    </StyledExpanderHeader>
  );
}

export type ExpanderColors = PaletteNames;

interface ExpanderProps {
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactElement;
  title: React.ReactElement;
  color?: ExpanderColors;
  bottomBorder?: boolean;
  topBorder?: boolean;
}

const Expander = React.forwardRef((props: ExpanderProps, ref: any) => {
  const {children, className, icon, title, topBorder = true, bottomBorder = true} = props;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <StyledExpander
      topBorder={topBorder}
      bottomBorder={bottomBorder}
      className={className}
      ref={ref}
      onClick={() => setIsExpanded(!isExpanded)}>
      <ExpanderHeader>
        {icon && React.cloneElement(icon, {size: 48})}
        {title}
      </ExpanderHeader>
    </StyledExpander>
  );
}) as ExpanderCompounds;

export type TitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
export type TitleAppearances = 'titleFeature' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5';

interface TitleProps {
  children: React.ReactNode;
  className?: string;
  is?: TitleTags;
  appearance?: TitleAppearances;
}

const Title = React.forwardRef((props: TitleProps, ref: any) => {
  const {children, className, htmlMarkup = 'h1', appearance = 'title1', margin = 0} = props;
  return (
    <StyledTitle className={className} as={htmlMarkup} margin={margin} appearance={appearance} ref={ref}>
      {children}
    </StyledTitle>
  );
});

Expander.Title = StyledExpanderTitle;
Expander.displayName = 'Expander';

export default Expander;
