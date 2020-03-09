import React, {useState} from 'react';
import {
  StyledExpanderList,
  StyledExpanderListLink,
  StyledExpanderListLinkContent,
  StyledExpanderContent,
} from './ExpanderList.styled';
import {PaletteNames} from '../../theme/palette';
import {HTMLAnchorProps} from '../../constants';
import Icon from '../Icons';

export type ExpanderListColors = PaletteNames;

export interface CompoundComponent
  extends React.ForwardRefExoticComponent<ExpanderListProps & React.RefAttributes<HTMLUListElement>> {
  Expander: any;
}

interface ExpanderListProps {
  children: React.ReactNode;
  color: ExpanderListColors;
  bottomBorder?: boolean;
  topBorder?: boolean;
  large?: boolean;
}

interface ExpanderProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  title: string;
  icon?: React.ReactElement;
  color: ExpanderListColors;
  large: boolean;
}

const Expander = React.forwardRef((props: ExpanderProps, ref: any) => {
  const {children, color, icon, large, title, ...restProps} = props;
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <li ref={ref}>
      <StyledExpanderListLink
        onClick={() => setIsExpanded(!isExpanded)}
        isExpanded={isExpanded}
        hasIcon={!!icon}
        large={large}
        color={color}
        {...restProps}>
        <StyledExpanderListLinkContent>
          {icon && React.cloneElement(icon, {size: 48})}
          {title}
        </StyledExpanderListLinkContent>
        <Icon type={isExpanded ? 'chevronUp' : 'chevronDown'} />
      </StyledExpanderListLink>
      {isExpanded ? <StyledExpanderContent>{children}</StyledExpanderContent> : null}
    </li>
  );
});

const ExpanderList = React.forwardRef((props: ExpanderListProps, ref: any) => {
  const {children, large, color, topBorder = true, bottomBorder = true} = props;
  return (
    <StyledExpanderList topBorder={topBorder} bottomBorder={bottomBorder} ref={ref}>
      {React.Children.map(children, (child: any) => {
        if (child.type.displayName === 'ExpanderList.Expander') {
          return React.cloneElement(child, {color, large});
        }
      })}
    </StyledExpanderList>
  );
}) as CompoundComponent;

ExpanderList.Expander = Expander;
Expander.displayName = 'ExpanderList.Expander';

export default ExpanderList;
