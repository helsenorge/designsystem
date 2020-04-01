import React, {useState} from 'react';
import {
  StyledExpanderList,
  StyledExpanderListLink,
  StyledExpanderListLinkContent,
  StyledExpanderContent,
} from './ExpanderList.styled';
import {PaletteNames} from '../../theme/palette';
import Icon from '../Icons';
import {useHover} from '../../hooks/useHover';

export type ExpanderListColors = PaletteNames;

export interface ExpanderListCompound
  extends React.ForwardRefExoticComponent<ExpanderListProps & React.RefAttributes<HTMLUListElement>> {
  Expander: any;
}

interface ExpanderListProps {
  accordion?: boolean;
  bottomBorder?: boolean;
  children: React.ReactNode;
  className?: string;
  color: ExpanderListColors;
  large?: boolean;
  isOpen?: boolean;
  topBorder?: boolean;
}

interface ExpanderProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  color: ExpanderListColors;
  icon?: React.ReactElement;
  isExpanded?: boolean;
  large: boolean;
  title: string;
}

// TODO: See what can be done with regards to double reffing.
const Expander = React.forwardRef((props: ExpanderProps, ref: any) => {
  const {children, color, className = '', icon, large, title, isExpanded = false, ...restProps} = props;
  const {hoverRef, isHovered} = useHover<HTMLButtonElement>();
  return (
    <li>
      <StyledExpanderListLink
        className={className}
        isExpanded={isExpanded}
        large={large}
        color={color}
        ref={hoverRef}
        {...restProps}>
        <StyledExpanderListLinkContent>
          {icon && React.cloneElement(icon, {size: 48, isHovered})}
          {title}
        </StyledExpanderListLinkContent>
        <Icon type={isExpanded ? 'chevronUp' : 'chevronDown'} />
      </StyledExpanderListLink>
      {isExpanded ? <StyledExpanderContent>{children}</StyledExpanderContent> : null}
    </li>
  );
});

function findShadowDOMId(path: any[], tagName: string) {
  return path.find(e => e.tagName === tagName).id;
}

const ExpanderList = React.forwardRef((props: ExpanderListProps, ref: any) => {
  const {
    children,
    large,
    isOpen = false,
    color,
    className = '',
    accordion = false,
    topBorder = true,
    bottomBorder = true,
  } = props;
  const [activeExpander, setActiveExpander] = useState({});
  function handleExpanderClick(e: any) {
    const id = e.currentTarget?.id || findShadowDOMId(e.path, 'BUTTON');
    if (!isOpen) {
      setActiveExpander(prevState =>
        accordion ? {[id]: !Boolean(prevState[id])} : {...prevState, [id]: !Boolean(prevState[id])},
      );
    }
  }
  return (
    <StyledExpanderList className={className} topBorder={topBorder} bottomBorder={bottomBorder} ref={ref}>
      {React.Children.map(children, (child: any, index: number) => {
        if (child.type.displayName === 'ExpanderList.Expander') {
          const isExpanded = isOpen || activeExpander[index];
          return React.cloneElement(child, {
            id: index,
            key: index,
            isExpanded,
            color,
            large,
            onClick: handleExpanderClick,
          });
        }
        return child;
      })}
    </StyledExpanderList>
  );
}) as ExpanderListCompound;

ExpanderList.Expander = Expander;
Expander.displayName = 'ExpanderList.Expander';

export default ExpanderList;
