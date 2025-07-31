import React, { useEffect, useRef, useState } from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';
import { useExpand } from '../../hooks/useExpand';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import { useUuid } from '../../hooks/useUuid';
import { PaletteNames } from '../../theme/palette';
import { mergeRefs } from '../../utils/refs';
import { isElementInViewport } from '../../utils/viewport';
import { ElementHeaderType, renderElementHeader } from '../ElementHeader/ElementHeader';
import Highlighter from '../Highlighter';
import ChevronDown from '../Icons/ChevronDown';
import ChevronUp from '../Icons/ChevronUp';
import { TitleTags } from '../Title';

import expanderListStyles from './styles.module.scss';

export type ExpanderListColors = Extract<PaletteNames, 'white' | 'blueberry' | 'cherry' | 'neutral'>;
export interface ExpanderType extends React.ForwardRefExoticComponent<ExpanderProps & React.RefAttributes<HTMLLIElement>> {
  ElementHeader?: ElementHeaderType;
}

export interface ExpanderListCompound extends React.ForwardRefExoticComponent<ExpanderListProps & React.RefAttributes<HTMLUListElement>> {
  Expander: ExpanderType;
}

export type ExpanderListVariant = 'line' | 'outline' | 'fill' | 'fill-negative';

interface ExpanderListProps {
  /** Toggles accordion functionality for the expanders. */
  accordion?: boolean;
  /** Items in the ExpanderList */
  children: React.ReactNode;
  /** Toggles padding of child elements */
  childPadding?: boolean;
  /** Adds custom classes to the element. */
  className?: string;
  /** Changes the colors of the list. */
  color?: ExpanderListColors;
  /** Changes the font size. */
  large?: boolean;
  /** Whether to render children when closed (in which case they are hidden with CSS). Default: false */
  renderChildrenWhenClosed?: boolean;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets visual priority */
  variant?: ExpanderListVariant;
  /** Overrides the default z-index of the expander header */
  zIndex?: number;
  /** Highlights text in title and content. Used for search results */
  highlightText?: string;
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
    /** Overrides the default z-index of the expander header */
    zIndex?: number;
    /** Highlights text in title and content. Override if different from list. */
    highlightText?: string;
  }
> &
  Pick<ExpanderListProps, 'renderChildrenWhenClosed' | 'variant'>;

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
    testId,
    handleExpanderClick,
    onExpand,
    renderChildrenWhenClosed,
    variant = 'line',
    zIndex = 0,
    highlightText,
  } = props;
  const [isExpanded] = useExpand(expanded, onExpand);
  const expanderRef = useRef<HTMLLIElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { isHovered, isFocused } = usePseudoClasses(triggerRef);

  const isFill = variant === 'fill';
  const isFillNegative = variant === 'fill-negative';
  const isOutline = variant === 'outline';
  const isLine = variant === 'line';

  const itemClasses = classNames(className, expanderListStyles['expander-list__item'], {
    [expanderListStyles[`expander-list__item--fill`]]: isFill,
    [expanderListStyles[`expander-list__item--fill--${color}`]]: isFill,
    [expanderListStyles[`expander-list__item--fill-negative`]]: isFillNegative,
    [expanderListStyles['expander-list__item--outline']]: isOutline,
    [expanderListStyles[`expander-list__item--outline--${color}`]]: isOutline,
    [expanderListStyles['expander-list__item--line']]: isLine,
    [expanderListStyles[`expander-list__item--line--${color}`]]: isLine,
  });

  const expanderClasses = classNames(expanderListStyles['expander-list-link'], expanderListStyles[`expander-list-link--${color}`], {
    [expanderListStyles[`expander-list-link--fill`]]: isFill,
    [expanderListStyles[`expander-list-link--fill--${color}`]]: isFill,
    [expanderListStyles[`expander-list-link--fill-negative`]]: isFillNegative,
    [expanderListStyles[`expander-list-link--fill-negative--${color}`]]: isFillNegative,
    [expanderListStyles['expander-list-link--outline']]: isOutline,
    [expanderListStyles[`expander-list-link--outline--${color}`]]: isOutline,
    [expanderListStyles[`expander-list-link--line--${color}`]]: isLine,
    [expanderListStyles['expander-list-link--closed']]: !isExpanded,
    [expanderListStyles['expander-list-link--open']]: isExpanded,
    [expanderListStyles['expander-list-link--large']]: large,
  });

  const renderContent = (): React.ReactNode => {
    if (!renderChildrenWhenClosed && !isExpanded) {
      return null;
    }

    const mainContentClasses = classNames(
      expanderListStyles['expander-list-link__main-content'],
      isExpanded && expanderListStyles['expander-list-link__main-content--expanded'],
      padding ? expanderListStyles['expander-list-link__main-content--padding'] : ''
    );

    return (
      <div className={mainContentClasses}>
        <Highlighter searchText={highlightText}>{children}</Highlighter>
      </div>
    );
  };

  return (
    <li className={itemClasses} ref={mergeRefs([ref, expanderRef])}>
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
          zIndex: isFocused ? zIndex + 1 : zIndex,
        }}
      >
        {renderElementHeader(title, {
          titleHtmlMarkup,
          isHovered: isHovered || isFocused,
          size: large ? 'large' : 'medium',
          parentType: 'expanderlist',
          chevronIcon: isExpanded ? ChevronUp : ChevronDown,
          icon,
          highlightText,
        })}
      </button>
      {renderContent()}
    </li>
  );
});

type ActiveExpander = Record<string, boolean>;

const isExpanderComponent = (element: unknown | null | undefined): element is React.ReactElement<ExpanderProps> =>
  React.isValidElement<ExpanderProps>(element) && (element as React.ReactElement).type === Expander;

export const ExpanderList = React.forwardRef((props: ExpanderListProps, ref: React.Ref<HTMLUListElement>) => {
  const {
    children,
    childPadding = true,
    large,
    renderChildrenWhenClosed = false,
    color,
    className = '',
    accordion = false,
    testId,
    variant,
    zIndex,
    highlightText,
  } = props;
  const [activeExpander, setActiveExpander] = useState<ActiveExpander>();
  const [latestExpander, setLatestExpander] = useState<HTMLElement>();
  const uuid = useUuid();
  const expanderListClasses = classNames(expanderListStyles['expander-list'], className);

  function handleExpanderClick(event: React.MouseEvent<HTMLElement, MouseEvent>, id: string): void {
    setActiveExpander(prevState => (accordion ? { [id]: !prevState?.[id] } : { ...prevState, [id]: !prevState?.[id] }));
    setLatestExpander(event.currentTarget);
  }

  const getExpanderId = (index: number): string => `${uuid}-${index}`;

  useEffect(() => {
    if (accordion && latestExpander && !isElementInViewport(latestExpander)) {
      latestExpander.scrollIntoView();
    }
  }, [accordion, latestExpander]);

  useEffect(() => {
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
  }, [children]);

  return (
    <ul className={expanderListClasses} ref={ref} data-testid={testId} data-analyticsid={AnalyticsId.ExpanderList}>
      {React.Children.map(children, (child, index) => {
        if (isExpanderComponent(child)) {
          const id = getExpanderId(index);
          const expanded = activeExpander?.[id];
          const highlightTextChild: string | undefined = child.props.highlightText || highlightText;

          return React.cloneElement(child as React.ReactElement<ExpanderProps>, {
            id,
            key: index,
            expanded,
            padding: childPadding,
            color,
            large,
            'aria-expanded': expanded,
            className: expanderListStyles['expander-list__item'],
            handleExpanderClick: (event: React.MouseEvent<HTMLElement>) => handleExpanderClick(event, `${uuid}-${index}`),
            renderChildrenWhenClosed,
            variant,
            zIndex: zIndex,
            highlightText: highlightTextChild,
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
