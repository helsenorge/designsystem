import React, { useEffect, useState } from 'react';

import { PaletteNames } from '../../theme/palette';
import Icon, { IconSize } from '../Icons';
import ChevronUp from '../Icons/ChevronUp';
import ChevronDown from '../Icons/ChevronDown';
import { useHover } from '../../hooks/useHover';
import { usePrevious } from '../../hooks/usePrevious';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { isElementInViewport } from '../../utils/viewport';

import classNames from 'classnames';

import expanderListStyles from './styles.module.scss';
import { AnalyticsId } from '../../constants';
import { useUuid } from '../../hooks/useUuid';

export type ExpanderListColors = PaletteNames;
export type ExpanderType = React.ForwardRefExoticComponent<ExpanderProps & React.RefAttributes<HTMLLIElement>>;

export interface ExpanderListCompound extends React.ForwardRefExoticComponent<ExpanderListProps & React.RefAttributes<HTMLUListElement>> {
  Expander: ExpanderType;
}

interface ExpanderListProps {
  /** Toggles accordion functionality for the expanders. */
  accordion?: boolean;
  /** Toggles the bottom border of the last child element. */
  bottomBorder?: boolean;
  /** Items in the ExpanderList */
  children: React.ReactNode;
  /** Toggles padding of child elements */
  childPadding?: boolean;
  /** Adds custom classes to the element. */
  className?: string;
  /** Changes the link list background color on hover. */
  color?: ExpanderListColors;
  /** Changes the font size. */
  large?: boolean;
  /** Opens the first item in the list. */
  isOpen?: boolean;
  /** Toggles the top border of the first child element. */
  topBorder?: boolean;
  /** Sets the data-testid attribute. */
  testId?: string;
}

type Modify<T, R> = Omit<T, keyof R> & R;

type ExpanderProps = Modify<
  React.HTMLAttributes<HTMLButtonElement>,
  {
    id?: string;
    title: JSX.Element | string;
    children: React.ReactNode;
    className?: string;
    color?: ExpanderListColors;
    icon?: React.ReactElement;
    padding?: boolean;
    expanded?: boolean;
    large?: boolean;
    testId?: string;
    handleExpanderClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    /** Called when expander is open/closed. */
    onExpand?: (isExpanded: boolean) => void;
  }
>;

// TODO: See what can be done with regards to double reffing.
const Expander: ExpanderType = React.forwardRef((props: ExpanderProps, ref: React.Ref<HTMLLIElement>) => {
  const {
    id,
    children,
    padding = true,
    color = 'neutral',
    className = '',
    icon,
    large = false,
    title,
    expanded = false,
    testId,
    handleExpanderClick,
    onExpand,
  } = props;
  const [isExpanded, setIsExpanded] = useState<boolean>(expanded);
  const previousIsExpanded = usePrevious(isExpanded);
  const { hoverRef, isHovered } = useHover<HTMLButtonElement>();
  const breakpoint = useBreakpoint();
  const expanderClasses = classNames(expanderListStyles['expander-list-link'], expanderListStyles[`expander-list-link--${color}`], {
    [expanderListStyles['expander-list-link--closed']]: !isExpanded,
    [expanderListStyles['expander-list-link--large']]: large,
  });
  const mainContentClasses = classNames(
    expanderListStyles['expander-list-link__main-content'],
    isExpanded && expanderListStyles['expander-list-link__main-content--expanded'],
    padding ? expanderListStyles['expander-list-link__main-content--padding'] : ''
  );

  useEffect(() => {
    if (expanded !== isExpanded) {
      setIsExpanded(expanded);
    }
  }, [expanded]);

  useEffect(() => {
    if (onExpand && isExpanded !== !!previousIsExpanded) {
      onExpand(isExpanded);
    }
  }, [isExpanded, onExpand]);

  return (
    <li className={className} ref={ref}>
      <button
        id={id}
        onClick={handleExpanderClick}
        data-testid={testId}
        data-analyticsid={AnalyticsId.ExpanderListExpander}
        className={expanderClasses}
        ref={hoverRef}
        aria-expanded={isExpanded}
      >
        {icon && (
          <span className={expanderListStyles['expander-list-link__icon']}>
            {React.cloneElement(icon, {
              size: breakpoint === Breakpoint.xs ? IconSize.XSmall : IconSize.Small,
              isHovered,
            })}
          </span>
        )}
        <span className={expanderListStyles['expander-list-link__title']}>{title}</span>
        <span className={expanderListStyles['expander-list-link__chevron']}>
          <Icon size={IconSize.XSmall} svgIcon={isExpanded ? ChevronUp : ChevronDown} isHovered={isHovered} />
        </span>
      </button>
      <div className={mainContentClasses}>{children}</div>
    </li>
  );
});

export const ExpanderList = React.forwardRef((props: ExpanderListProps, ref: React.Ref<HTMLUListElement>) => {
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
    testId,
  } = props;
  const [activeExpander, setActiveExpander] = useState({});
  const [latestExpander, setLatestExpander] = useState<HTMLElement>();
  const uuid = useUuid();
  const childCount = React.Children.count(children);
  const expanderListClasses = classNames(expanderListStyles['expander-list'], className);

  function handleExpanderClick(event: React.MouseEvent<HTMLElement, MouseEvent>, id: string): void {
    setActiveExpander(prevState => (accordion ? { [id]: !prevState[id] } : { ...prevState, [id]: !prevState[id] }));
    setLatestExpander(event.currentTarget);
  }

  /** Returns the class modifier top when we want to show the top border and no-bottom when we don't want to show the bottom border */
  const getExpanderItemClass = (index: number) => {
    return classNames(expanderListStyles['expander-list__item'], {
      [expanderListStyles['expander-list__item--top']]: index === 0 && topBorder,
      [expanderListStyles['expander-list__item--no-bottom']]: index === childCount - 1 && !bottomBorder,
    });
  };

  useEffect(() => {
    if (accordion && latestExpander && !isElementInViewport(latestExpander)) {
      latestExpander.scrollIntoView();
    }
  }, [accordion, latestExpander]);

  useEffect(() => {
    if (isOpen) {
      const id = `${uuid}-0`;
      setActiveExpander(prevState => (accordion ? { [id]: !prevState[id] } : { ...prevState, [id]: !prevState[id] }));
    }
  }, [isOpen]);

  return (
    <ul className={expanderListClasses} ref={ref} data-testid={testId} data-analyticsid={AnalyticsId.ExpanderList}>
      {React.Children.map(children, (child: React.ReactNode, index: number) => {
        if ((child as React.ReactElement<ExpanderProps>).type === Expander) {
          const expanded = activeExpander[`${uuid}-${index}`];

          const expanderItemClass = getExpanderItemClass(index);

          return React.cloneElement(child as React.ReactElement<ExpanderProps>, {
            id: `${uuid}-${index}`,
            key: index,
            expanded,
            padding: childPadding,
            color,
            large,
            'aria-expanded': expanded,
            className: expanderItemClass,
            handleExpanderClick: (event: React.MouseEvent<HTMLElement>) => handleExpanderClick(event, `${uuid}-${index}`),
          });
        }
        return child;
      })}
    </ul>
  );
}) as ExpanderListCompound;

ExpanderList.Expander = Expander;
Expander.displayName = 'ExpanderList.Expander';

export default ExpanderList;
