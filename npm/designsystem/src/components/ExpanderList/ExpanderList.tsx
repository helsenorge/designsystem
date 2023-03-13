import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import { AnalyticsId, ZIndex } from '../../constants';
import { useExpand } from '../../hooks/useExpand';
import { useHover } from '../../hooks/useHover';
import { useSticky } from '../../hooks/useSticky';
import { useUuid } from '../../hooks/useUuid';
import { PaletteNames } from '../../theme/palette';
import { mergeRefs } from '../../utils/refs';
import { isElementInViewport } from '../../utils/viewport';
import ChevronDown from '../Icons/ChevronDown';
import ChevronUp from '../Icons/ChevronUp';
import { ListHeaderType, renderListHeader } from '../ListHeader/ListHeader';
import { TitleTags } from '../Title';

import expanderListStyles from './styles.module.scss';

export type ExpanderListColors = PaletteNames;
export interface ExpanderType extends React.ForwardRefExoticComponent<ExpanderProps & React.RefAttributes<HTMLLIElement>> {
  ListHeader?: ListHeaderType;
}

export interface ExpanderListCompound extends React.ForwardRefExoticComponent<ExpanderListProps & React.RefAttributes<HTMLUListElement>> {
  Expander: ExpanderType;
}

export type ExpanderListVariant = 'line' | 'outline' | 'fill';

interface ExpanderListProps {
  /** Toggles accordion functionality for the expanders. */
  accordion?: boolean;
  /** @deprecated Skal fases ut - Brukes ikke lenger. */
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
  /** @deprecated Skal fases ut til fordel for å bruke expanded-prop på første ExpanderList.Expander */
  isOpen?: boolean;
  /** Whether to render children when closed (in which case they are hidden with CSS). Default: false */
  renderChildrenWhenClosed?: boolean;
  /** @deprecated Skal fases ut - Brukes ikke lenger. */
  topBorder?: boolean;
  /** Stick expander trigger to top of screen while scrolling down */
  sticky?: boolean;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets visual priority */
  variant?: ExpanderListVariant;
}

type Modify<T, R> = Omit<T, keyof R> & R;

type ExpanderProps = Modify<
  React.HTMLAttributes<HTMLButtonElement>,
  {
    id?: string;
    title: JSX.Element | string;
    /** Changes the underlying element of the title. Default: span*/
    titleHtmlMarkup?: TitleTags;
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
> &
  Pick<ExpanderListProps, 'renderChildrenWhenClosed' | 'sticky' | 'variant'>;

const Expander: ExpanderType = React.forwardRef<HTMLLIElement, ExpanderProps>((props, ref) => {
  const {
    id,
    children,
    padding = true,
    color = 'neutral',
    className = '',
    icon,
    large = false,
    title,
    titleHtmlMarkup = 'span',
    expanded = false,
    sticky,
    testId,
    handleExpanderClick,
    onExpand,
    renderChildrenWhenClosed,
    variant = 'line',
  } = props;
  const [isExpanded] = useExpand(expanded, onExpand);
  const expanderRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { isHovered } = useHover(triggerRef);

  const { isOutsideWindow, isLeavingWindow, offsetHeight, contentWidth } = useSticky(expanderRef, triggerRef);
  const isSticky = sticky && isExpanded && isOutsideWindow;
  const isJsxTitle = typeof title === 'object';

  const itemClasses = classNames(className, {
    [expanderListStyles['expander-list__item--' + variant]]: variant,
    [expanderListStyles['expander-list__item--jsx']]: isJsxTitle,
  });

  const expanderClasses = classNames(expanderListStyles['expander-list-link'], expanderListStyles[`expander-list-link--${color}`], {
    [expanderListStyles['expander-list-link--fill']]: variant === 'fill',
    [expanderListStyles['expander-list-link--closed']]: !isExpanded,
    [expanderListStyles['expander-list-link--large']]: large,
    [expanderListStyles['expander-list-link--jsx']]: isJsxTitle,
    [expanderListStyles['expander-list-link--sticky']]: isSticky && !isLeavingWindow,
    [expanderListStyles['expander-list-link--absolute']]: isSticky && isLeavingWindow,
  });

  const renderContent = () => {
    if (!renderChildrenWhenClosed && !isExpanded) {
      return null;
    }

    const mainContentClasses = classNames(
      expanderListStyles['expander-list-link__main-content'],
      isExpanded && expanderListStyles['expander-list-link__main-content--expanded'],
      padding ? expanderListStyles['expander-list-link__main-content--padding'] : ''
    );

    return <div className={mainContentClasses}>{children}</div>;
  };

  return (
    <li
      className={itemClasses}
      ref={mergeRefs([ref, expanderRef])}
      style={{ paddingTop: isSticky && offsetHeight ? `${offsetHeight}px` : undefined }}
    >
      <button
        type="button"
        id={id}
        onClick={handleExpanderClick}
        data-testid={testId}
        data-analyticsid={AnalyticsId.ExpanderListExpander}
        className={expanderClasses}
        ref={triggerRef}
        aria-expanded={isExpanded}
        style={{
          zIndex: isHovered || isSticky ? ZIndex.ExpanderTrigger : undefined,
          width: isSticky && contentWidth ? `${contentWidth}px` : undefined,
        }}
      >
        {renderListHeader(title, titleHtmlMarkup, isHovered, large ? 'large' : 'medium', isExpanded ? ChevronUp : ChevronDown, icon)}
      </button>
      {renderContent()}
    </li>
  );
});

type ActiveExpander = Record<string, boolean>;

const isExpanderComponent = (element: {} | null | undefined): element is React.ReactElement<ExpanderProps> =>
  React.isValidElement<ExpanderProps>(element) && (element as React.ReactElement).type === Expander;

export const ExpanderList = React.forwardRef((props: ExpanderListProps, ref: React.Ref<HTMLUListElement>) => {
  const {
    children,
    childPadding = true,
    large,
    isOpen = false,
    renderChildrenWhenClosed = false,
    color,
    className = '',
    accordion = false,
    topBorder = true,
    bottomBorder = true,
    sticky = false,
    testId,
    variant,
  } = props;
  const [activeExpander, setActiveExpander] = useState<ActiveExpander>();
  const [latestExpander, setLatestExpander] = useState<HTMLElement>();
  const uuid = useUuid();
  const childCount = React.Children.count(children);
  const expanderListClasses = classNames(expanderListStyles['expander-list'], className);

  function handleExpanderClick(event: React.MouseEvent<HTMLElement, MouseEvent>, id: string): void {
    setActiveExpander(prevState => (accordion ? { [id]: !prevState?.[id] } : { ...prevState, [id]: !prevState?.[id] }));
    setLatestExpander(event.currentTarget);
  }

  /** Returns the class modifier top when we want to show the top border and no-bottom when we don't want to show the bottom border */
  const getExpanderItemClass = (index: number) => {
    return classNames(expanderListStyles['expander-list__item'], {
      [expanderListStyles['expander-list__item--top']]: index === 0 && topBorder,
      [expanderListStyles['expander-list__item--no-bottom']]: index === childCount - 1 && !bottomBorder,
    });
  };

  const getExpanderId = (index: number) => `${uuid}-${index}`;

  useEffect(() => {
    if (accordion && latestExpander && !isElementInViewport(latestExpander)) {
      latestExpander.scrollIntoView();
    }
  }, [accordion, latestExpander]);

  useEffect(() => {
    if (isOpen) {
      const id = getExpanderId(0);
      setActiveExpander(prevState => (accordion ? { [id]: !prevState?.[id] } : { ...prevState, [id]: !prevState?.[id] }));
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      const newActiveExpander = React.Children.map(children, child => {
        if (isExpanderComponent(child)) {
          return child;
        }
      })?.reduce((acc, child, index) => {
        // Expanded-status skal bare settes dersom prop er satt av den som bruker komponenten
        if (typeof child.props.expanded !== 'undefined') {
          acc[getExpanderId(index)] = child.props.expanded;
        }
        return acc;
      }, {} as ActiveExpander);

      setActiveExpander({ ...activeExpander, ...newActiveExpander });
    }
  }, [children]);

  return (
    <ul className={expanderListClasses} ref={ref} data-testid={testId} data-analyticsid={AnalyticsId.ExpanderList}>
      {React.Children.map(children, (child, index) => {
        if (isExpanderComponent(child)) {
          const id = getExpanderId(index);
          const expanded = activeExpander?.[id];
          const expanderItemClass = getExpanderItemClass(index);

          return React.cloneElement(child as React.ReactElement<ExpanderProps>, {
            id,
            key: index,
            expanded,
            padding: childPadding,
            color,
            large,
            sticky,
            'aria-expanded': expanded,
            className: expanderItemClass,
            handleExpanderClick: (event: React.MouseEvent<HTMLElement>) => handleExpanderClick(event, `${uuid}-${index}`),
            renderChildrenWhenClosed,
            variant,
          });
        }
        return child;
      })}
    </ul>
  );
}) as ExpanderListCompound;

ExpanderList.displayName = 'ExpanderList';
ExpanderList.Expander = Expander;
Expander.displayName = 'ExpanderList.Expander';

export default ExpanderList;
