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
import ChevronUp from '../Icons/ChevronUp';
import ChevronDown from '../Icons/ChevronDown';
import {useHover} from '../../hooks/useHover';

export type ExpanderListColors = PaletteNames;
export type ExpanderType = React.ForwardRefExoticComponent<ExpanderProps & React.RefAttributes<unknown>>;

export interface ExpanderListCompound
  extends React.ForwardRefExoticComponent<ExpanderListProps & React.RefAttributes<HTMLUListElement>> {
  Expander: ExpanderType;
}

interface MouseEventWithPath extends MouseEvent {
  path?: Array<HTMLElement>;
}

interface ExpanderListProps {
  accordion?: boolean;
  bottomBorder?: boolean;
  children: React.ReactNode;
  childPadding?: boolean;
  className?: string;
  color?: ExpanderListColors;
  large?: boolean;
  isOpen?: boolean;
  topBorder?: boolean;
}

interface ExpanderProps extends React.HTMLAttributes<HTMLButtonElement> {
  title: string;
  children: React.ReactNode;
  className?: string;
  color?: ExpanderListColors;
  icon?: React.ReactElement;
  padding?: boolean;
  isExpanded?: boolean;
  large?: boolean;
}

// TODO: See what can be done with regards to double reffing.

const Expander = React.forwardRef((props: ExpanderProps, ref: any) => {
  const {
    children,
    padding = true,
    color = 'neutral',
    className = '',
    icon,
    large = false,
    title,
    isExpanded = false,
    ...restProps
  } = props;
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
          <Icon svgIcon={isExpanded ? ChevronUp : ChevronDown} />
        </StyledExpanderListIconContainer>
      </StyledExpanderListLink>
      {isExpanded ? <StyledExpanderContent padding={padding}>{children}</StyledExpanderContent> : null}
    </li>
  );
});

function findShadowDOMId(event: MouseEventWithPath, tagName: string): string {
  const pathElements: Array<HTMLElement> =
    event.path || (event.composedPath && (event.composedPath() as Array<HTMLElement>));
  const element = pathElements.find((el: HTMLElement) => el.tagName === tagName);
  return element ? element.id : '';
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

  function handleExpanderClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void {
    const id = event.currentTarget?.id || findShadowDOMId((event as unknown) as MouseEventWithPath, 'BUTTON');
    if (!isOpen) {
      setActiveExpander(prevState => (accordion ? {[id]: !prevState[id]} : {...prevState, [id]: !prevState[id]}));
    }
  }

  return (
    <StyledExpanderList className={className} topBorder={topBorder} bottomBorder={bottomBorder} ref={ref}>
      {React.Children.map(children, (child: React.ReactNode, index: number) => {
        if ((child as React.ReactElement<ExpanderProps>).type === Expander) {
          const isExpanded = isOpen || activeExpander[`expander-${index}`];
          return React.cloneElement(child as React.ReactElement<ExpanderProps>, {
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
