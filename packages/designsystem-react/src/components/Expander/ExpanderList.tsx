import React, {useState, useEffect} from 'react';
import {
  StyledExpanderList,
  StyledExpanderListLink,
  StyledExpanderListLinkContent,
  StyledExpanderContent,
} from './ExpanderList.styled';
import {PaletteNames} from '../../theme/palette';
import Icon from '../Icons';

export type ExpanderListColors = PaletteNames;

export interface CompoundComponent
  extends React.ForwardRefExoticComponent<ExpanderListProps & React.RefAttributes<HTMLUListElement>> {
  Expander: any;
}

interface ExpanderListProps {
  accordion?: boolean;
  bottomBorder?: boolean;
  children: React.ReactNode;
  color: ExpanderListColors;
  large?: boolean;
  topBorder?: boolean;
}

interface ExpanderProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color: ExpanderListColors;
  icon?: React.ReactElement;
  isExpanded?: boolean;
  large: boolean;
  title: string;
}

const Expander = React.forwardRef((props: ExpanderProps, ref: any) => {
  const {children, color, icon, large, title, isExpanded = false, ...restProps} = props;
  return (
    <li>
      <StyledExpanderListLink
        isExpanded={isExpanded}
        hasIcon={!!icon}
        large={large}
        color={color}
        ref={ref}
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
  const {children, large, color, accordion = false, topBorder = true, bottomBorder = true} = props;
  const [activeExpander, setActiveExpander] = useState({});
  function handleExpanderClick(e: any) {
    const id = e.currentTarget.id;
    setActiveExpander(prevState =>
      accordion ? {[id]: !Boolean(prevState[id])} : {...prevState, [id]: !Boolean(prevState[id])},
    );
  }
  return (
    <StyledExpanderList topBorder={topBorder} bottomBorder={bottomBorder} ref={ref}>
      {React.Children.map(children, (child: any, index: number) => {
        if (child.type.displayName === 'ExpanderList.Expander') {
          const isExpanded = activeExpander[index];
          return React.cloneElement(child, {
            id: index,
            key: index,
            isExpanded,
            color,
            large,
            onClick: handleExpanderClick,
          });
        }
      })}
    </StyledExpanderList>
  );
}) as CompoundComponent;

ExpanderList.Expander = Expander;
Expander.displayName = 'ExpanderList.Expander';

export default ExpanderList;
