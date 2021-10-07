import React, { useEffect, useState } from 'react';

import { PaletteNames } from '../../theme/palette';
import Icon from '../Icons';
import ChevronUp from '../Icons/ChevronUp';
import ChevronDown from '../Icons/ChevronDown';
import { useHover } from '../../hooks/useHover';
import { isElementInViewport } from '../../utils/viewport';

import classNames from 'classnames';

import expanderListStyles from './styles.module.scss';

export type ExpanderListColors = PaletteNames;
export type ExpanderType = React.ForwardRefExoticComponent<ExpanderProps & React.RefAttributes<HTMLLIElement>>;

export interface ExpanderListCompound extends React.ForwardRefExoticComponent<ExpanderListProps & React.RefAttributes<HTMLUListElement>> {
  Expander: ExpanderType;
}

interface MouseEventWithPath extends MouseEvent {
  path?: Array<HTMLElement>;
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
    isExpanded?: boolean;
    large?: boolean;
    testId?: string;
    handleExpanderClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
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
    isExpanded = false,
    testId = '',
    handleExpanderClick,
  } = props;
  const { hoverRef, isHovered } = useHover<HTMLButtonElement>();
  const expanderClasses = classNames(expanderListStyles['expander-list-link'], expanderListStyles[`expander-list-link--${color}`], {
    [expanderListStyles['expander-list-link--closed']]: !isExpanded,
    [expanderListStyles['expander-list-link--large']]: large,
  });
  const mainContentClasses = classNames(
    expanderListStyles['expander-list-link__main-content'],
    padding ? expanderListStyles['expander-list-link__main-content--padding'] : ''
  );
  const linkIconClasses = classNames(
    expanderListStyles['expander-list-link__icon'],
    expanderListStyles['expander-list-link__icon--margin-right']
  );

  return (
    <li className={className} ref={ref}>
      <button id={id} onClick={handleExpanderClick} data-testid={testId} className={expanderClasses} ref={hoverRef}>
        <span className={expanderListStyles['expander-list-link__link-content']}>
          {icon ? <span className={linkIconClasses}>{React.cloneElement(icon, { size: 48, isHovered })}</span> : null}
          {title}
        </span>
        <span className={expanderListStyles['expander-list-link__icon']}>
          <Icon size={48} svgIcon={isExpanded ? ChevronUp : ChevronDown} isHovered={isHovered} />
        </span>
      </button>
      {isExpanded ? <div className={mainContentClasses}>{children}</div> : null}
    </li>
  );
});

function findShadowDOMId(event: MouseEventWithPath, tagName: string): string {
  const pathElements: Array<HTMLElement> = event.path || (event.composedPath && (event.composedPath() as Array<HTMLElement>));
  const element = pathElements.find((el: HTMLElement) => el.tagName === tagName);
  return element ? element.id : '';
}

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
  } = props;
  const [activeExpander, setActiveExpander] = useState({});
  const [latestExpander, setLatestExpander] = useState<HTMLElement>();
  const childCount = React.Children.count(children);
  const expanderListClasses = classNames(expanderListStyles['expander-list'], className);

  function handleExpanderClick(event: React.MouseEvent<HTMLElement, MouseEvent>): void {
    const id = event.currentTarget?.id || findShadowDOMId((event as unknown) as MouseEventWithPath, 'BUTTON');
    if (!isOpen) {
      setActiveExpander(prevState => (accordion ? { [id]: !prevState[id] } : { ...prevState, [id]: !prevState[id] }));
      setLatestExpander(event.currentTarget);
    }
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

  return (
    <ul className={expanderListClasses} ref={ref}>
      {React.Children.map(children, (child: React.ReactNode, index: number) => {
        if ((child as React.ReactElement<ExpanderProps>).type === Expander) {
          const isExpanded = isOpen || activeExpander[`expander-${index}`];
          const expanderItemClass = getExpanderItemClass(index);

          return React.cloneElement(child as React.ReactElement<ExpanderProps>, {
            id: `expander-${index}`,
            key: `expander-${index}`,
            isExpanded,
            padding: childPadding,
            color,
            large,
            'aria-expanded': isExpanded,
            className: expanderItemClass,
            handleExpanderClick: handleExpanderClick,
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
