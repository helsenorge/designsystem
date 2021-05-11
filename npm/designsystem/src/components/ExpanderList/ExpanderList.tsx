import React, { useEffect, useState } from 'react';
import {
  StyledExpanderList,
  StyledExpanderListLink,
  StyledExpanderListLinkContent,
  StyledExpanderContent,
  StyledExpanderListIconContainer,
} from './ExpanderList.styled';
import { PaletteNames } from '../../theme/palette';
import Icon from '../Icons';
import ChevronUp from '../Icons/ChevronUp';
import ChevronDown from '../Icons/ChevronDown';
import { useHover } from '../../hooks/useHover';
import { isElementInViewport } from '../../utils/viewport';

export type ExpanderListColors = PaletteNames;
export type ExpanderType = React.ForwardRefExoticComponent<ExpanderProps & React.RefAttributes<HTMLLIElement>>;

export interface ExpanderListCompound extends React.ForwardRefExoticComponent<ExpanderListProps & React.RefAttributes<HTMLUListElement>> {
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

type Modify<T, R> = Omit<T, keyof R> & R;

type ExpanderProps = Modify<
  React.HTMLAttributes<HTMLButtonElement>,
  {
    title: JSX.Element | string;
    children: React.ReactNode;
    className?: string;
    color?: ExpanderListColors;
    icon?: React.ReactElement;
    padding?: boolean;
    isExpanded?: boolean;
    large?: boolean;
    testId?: string;
  }
>;

// TODO: See what can be done with regards to double reffing.
const Expander: ExpanderType = React.forwardRef((props: ExpanderProps, ref: React.Ref<HTMLLIElement>) => {
  const {
    children,
    padding = true,
    color = 'neutral',
    className = '',
    icon,
    large = false,
    title,
    isExpanded = false,
    testId = '',
    ...restProps
  } = props;
  const { hoverRef, isHovered } = useHover<HTMLButtonElement>();
  return (
    <li ref={ref}>
      <StyledExpanderListLink
        data-testid={testId}
        className={className}
        isExpanded={isExpanded}
        large={large}
        color={color}
        ref={hoverRef}
        {...restProps}
      >
        <StyledExpanderListLinkContent>
          {icon ? (
            <StyledExpanderListIconContainer>{React.cloneElement(icon, { size: 48, isHovered })}</StyledExpanderListIconContainer>
          ) : null}
          {title}
        </StyledExpanderListLinkContent>
        <StyledExpanderListIconContainer>
          <Icon svgIcon={isExpanded ? ChevronUp : ChevronDown} isHovered={isHovered} />
        </StyledExpanderListIconContainer>
      </StyledExpanderListLink>
      {isExpanded ? <StyledExpanderContent padding={padding}>{children}</StyledExpanderContent> : null}
    </li>
  );
});

function findShadowDOMId(event: MouseEventWithPath, tagName: string): string {
  const pathElements: Array<HTMLElement> = event.path || (event.composedPath && (event.composedPath() as Array<HTMLElement>));
  const element = pathElements.find((el: HTMLElement) => el.tagName === tagName);
  return element ? element.id : '';
}

const ExpanderList = React.forwardRef((props: ExpanderListProps, ref: React.Ref<HTMLUListElement>) => {
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
  const [latestExpander, setLatestExpander] = useState<HTMLElement>();

  function handleExpanderClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void {
    const id = event.currentTarget?.id || findShadowDOMId((event as unknown) as MouseEventWithPath, 'BUTTON');
    if (!isOpen) {
      setActiveExpander(prevState => (accordion ? { [id]: !prevState[id] } : { ...prevState, [id]: !prevState[id] }));
      setLatestExpander(event.currentTarget);
    }
  }

  useEffect(() => {
    if (accordion && latestExpander && !isElementInViewport(latestExpander)) {
      latestExpander.scrollIntoView();
    }
  }, [accordion, latestExpander]);

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
