import React, {useState} from 'react';
import {StyledExpander, StyledExpanderContent, StyledExpanderHeader, StyledExpanderTitle} from './Expander.styled';
import Icon from '../Icons';

export type ExpanderVariants = 'box' | 'hollow';

interface ExpanderProps {
  children?: React.ReactNode;
  variant?: ExpanderVariants;
}

export interface ExpanderCompounds
  extends React.ForwardRefExoticComponent<ExpanderProps & React.RefAttributes<HTMLDivElement>> {
  Header: any;
  Title: any;
  Content: any;
}

interface ExpanderHeaderProps {
  children?: React.ReactNode;
  isExpanded?: boolean;
}

function ExpanderHeader(props: ExpanderHeaderProps) {
  const {children, isExpanded} = props;
  return (
    <StyledExpanderHeader>
      <span>{children}</span>
      <Icon color="black">{isExpanded ? 'chevronUp' : 'chevronDown'}</Icon>
    </StyledExpanderHeader>
  );
}

ExpanderHeader.displayName = 'ExpanderHeader';

const Expander = React.forwardRef((props: ExpanderProps, ref: any) => {
  const {children, variant = 'hollow'} = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const expanderHeader = React.Children.toArray(children)[0];
  const expanderContent = React.Children.toArray(children)[1];
  return (
    <StyledExpander variant={variant} ref={ref} onClick={() => setIsExpanded(!isExpanded)}>
      {React.cloneElement(expanderHeader as React.ReactElement, {isExpanded})}
      {isExpanded
        ? React.cloneElement(expanderContent as React.ReactElement, {onClick: (event: any) => event.stopPropagation()})
        : null}
    </StyledExpander>
  );
}) as ExpanderCompounds;

Expander.Header = ExpanderHeader;
Expander.Title = StyledExpanderTitle;
Expander.Content = StyledExpanderContent;
Expander.Content.displayName = 'ExpanderContent';

export default Expander;
