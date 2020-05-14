import React, {useState} from 'react';
import {
  StyledExpanderList,
  StyledExpanderListLink,
  StyledExpanderListLinkContent,
  StyledExpanderContent,
  StyledExpanderListIconContainer,
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
  childPadding?: boolean;
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
  padding?: boolean;
  isExpanded?: boolean;
  large: boolean;
  title: string;
}

// TODO: See what can be done with regards to double reffing.
const Expander = React.forwardRef((props: ExpanderProps, ref: any) => {
  const {children, padding = true, color, className = '', icon, large, title, isExpanded = false, ...restProps} = props;
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
          {icon ? (
            <StyledExpanderListIconContainer>
              {React.cloneElement(icon, {size: 48, isHovered})}
            </StyledExpanderListIconContainer>
          ) : null}
          {title}
        </StyledExpanderListLinkContent>
        <StyledExpanderListIconContainer>
          <Icon type={isExpanded ? 'chevronUp' : 'chevronDown'} />
        </StyledExpanderListIconContainer>
      </StyledExpanderListLink>
      {isExpanded ? <StyledExpanderContent padding={padding}>{children}</StyledExpanderContent> : null}
    </li>
  );
});

function findShadowDOMId(event: any, tagName: string) {
  const path = event.path || (event.composedPath && event.composedPath());
  return path.find((e: any) => e.tagName === tagName).id;
}

const ExpanderList = React.forwardRef((props: ExpanderListProps, ref: any) => {
  const {
    children,
    childPadding = true,
    large,
    isOpen = false,
    color,
    className = '',
    accordion = false,
    topBorder = true,
    bottomBorder = true,
  } = props;
  const [activeExpander, setActiveExpander] = useState({});
  function handleExpanderClick(event: any) {
    const id = event.currentTarget?.id || findShadowDOMId(event, 'BUTTON');
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
          const isExpanded = isOpen || activeExpander[`expander-${index}`];
          return React.cloneElement(child, {
            id: `expander-${index}`,
            key: `expander-${index}`,
            isExpanded,
            padding: childPadding,
            color,
            large,
            'aria-expanded': isExpanded,
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
