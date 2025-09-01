import React from 'react';

import cn from 'classnames';

import ElementHeaderText, { ElementHeaderTextProps, ElementHeaderTextType } from './ElementHeaderText/ElementHeaderText';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { isComponent, isComponentWithChildren } from '../../utils/component';
import Avatar, { AvatarProps, AvatarSize, AvatarType } from '../Avatar';
import Badge, { BadgeProps, BadgeType } from '../Badge';
import Icon, { IconSize, SvgIcon } from '../Icon';
import StatusDot, { StatusDotProps, StatusDotType } from '../StatusDot';
import { TitleTags } from '../Title';
import StatusDotList from './StatusDotList';
import Highlighter from '../Highlighter';
import { StatusDotListProps, StatusDotListType } from './StatusDotList/StatusDotList';

import styles from './styles.module.scss';

export type ElementHeaderSize = 'small' | 'medium' | 'large';
export type ParentType = 'linklist' | 'expanderlist';

export interface ElementHeaderType extends React.FC<ElementHeaderProps> {
  Avatar?: AvatarType;
  Badge?: BadgeType;
  ElementHeaderText?: ElementHeaderTextType;
  StatusDot?: StatusDotType;
  StatusDotList?: StatusDotListType;
}

export const renderElementHeader = (
  element: React.ReactNode,
  options: Pick<ElementHeaderProps, 'titleHtmlMarkup' | 'isHovered' | 'size' | 'parentType' | 'chevronIcon' | 'icon' | 'highlightText'>
): React.ReactElement | undefined => {
  const { titleHtmlMarkup, isHovered, size, parentType, chevronIcon, icon, highlightText } = options;

  if (isComponent<ElementHeaderProps>(element, ElementHeader)) {
    return React.cloneElement(element, {
      chevronIcon,
      icon,
      isHovered,
      size,
      parentType,
      highlightText,
    });
  }
  if (element) {
    return (
      <ElementHeader
        highlightText={highlightText}
        titleHtmlMarkup={titleHtmlMarkup}
        parentType={parentType}
        chevronIcon={chevronIcon}
        icon={icon}
        isHovered={isHovered}
        size={size}
      >
        {element}
      </ElementHeader>
    );
  }
};

export interface ElementHeaderProps {
  /** Adds custom classes to the ElementHeader element. */
  className?: string;
  /** Chevron to render inside of the ElementHeader */
  chevronIcon?: SvgIcon;
  /** Children to be rendered inside of ElementHeader */
  children: React.ReactNode;
  /** Changes the underlying element of the title. Default: h2*/
  titleHtmlMarkup?: TitleTags;
  /** icon to be rendered inside of ElementHeader */
  icon?: React.ReactElement;
  /** whether or not the parent is hovered */
  isHovered?: boolean;
  /** Adjusts styling based on parent */
  parentType?: ParentType;
  /** Changes size of the ElementHeader. */
  size?: ElementHeaderSize;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Highlights text in title. Used for search results */
  highlightText?: string;
}

interface ElementHeaderChildren {
  avatarChild?: React.ReactElement<AvatarProps>;
  elementHeaderTextChildren: React.ReactElement<ElementHeaderTextProps>[];
  badgeChildren?: React.ReactElement<BadgeProps>[];
  statusDotChildren?: React.ReactElement<StatusDotProps>[];
  statusDotMCChild?: React.ReactElement<StatusDotListProps>;
  elementChild?: React.ReactElement;
  stringChildren: string[];
  remainingChildren: React.ReactNode[];
}

type ChildrenMapper = (children: React.ReactNode, isJsxChild?: boolean) => ElementHeaderChildren | undefined;

export const mapChildren: ChildrenMapper = (children, isJsxChild = false) => {
  let avatarChild: React.ReactElement<AvatarProps> | undefined;
  const badgeChildren: React.ReactElement<BadgeProps>[] = [];
  const statusDotChildren: React.ReactElement<StatusDotProps>[] = [];
  let statusDotMCChild: React.ReactElement<StatusDotListProps> | undefined;
  const elementHeaderTextChildren: React.ReactElement<ElementHeaderTextProps>[] = [];
  const stringChildren: string[] = [];
  const remainingChildren: React.ReactNode[] = [];

  React.Children.forEach(children, child => {
    if (child === null || typeof child === 'undefined') return;
    if (isComponent<AvatarProps>(child, Avatar)) {
      avatarChild = child;
    } else if (isComponent<ElementHeaderTextProps>(child, ElementHeaderText)) {
      elementHeaderTextChildren.push(child);
    } else if (isComponent<BadgeProps>(child, Badge)) {
      badgeChildren.push(child);
    } else if (isComponent<StatusDotListProps>(child, StatusDotList)) {
      statusDotMCChild = child;
    } else if (isComponent<StatusDotProps>(child, StatusDot)) {
      statusDotChildren.push(child);
    } else if (typeof child === 'string') {
      stringChildren.push(child);
    } else {
      remainingChildren.push(child);
    }
  });

  // Dette og recursive mapChildren under(gjøres en gang) er for å passe på at jsx children også sjekkes for Avatar og liknende innhold.
  // Slik opprettholder vi stylingen i tilfeller hvor vertikaler har wrappet elementer i en parent span eller div.
  const hasSpecialChildren =
    avatarChild !== undefined ||
    elementHeaderTextChildren.length > 0 ||
    statusDotChildren.length > 0 ||
    statusDotMCChild !== undefined ||
    (badgeChildren !== undefined && stringChildren.length > 0);
  const noRemainingRecursiveChildren =
    remainingChildren.length === 0 ||
    (isComponentWithChildren(remainingChildren[0]) && typeof remainingChildren[0]?.props?.children === 'undefined');

  if (isJsxChild || hasSpecialChildren || noRemainingRecursiveChildren) {
    return {
      avatarChild,
      elementHeaderTextChildren: elementHeaderTextChildren,
      badgeChildren,
      statusDotChildren,
      statusDotMCChild,
      stringChildren,
      remainingChildren,
    };
  }

  if (isComponentWithChildren(remainingChildren[0])) {
    return mapChildren(remainingChildren[0]?.props?.children, true);
  }
};

export const ElementHeaderRoot: ElementHeaderType = props => {
  const {
    className = '',
    titleHtmlMarkup = 'h2',
    parentType = 'linklist',
    chevronIcon,
    children,
    icon,
    isHovered,
    size,
    testId,
    highlightText,
  } = props;
  const breakpoint = useBreakpoint();
  const showIcon = size !== 'small' && !!icon;
  const contentIsString = typeof children === 'string';
  const mappedChildren = mapChildren(children);
  const hasStatusDots = !!mappedChildren?.statusDotChildren?.length || !!mappedChildren?.statusDotMCChild;

  const listLabelClasses = cn(styles['element-header'], { [styles['element-header--with-statusdot']]: hasStatusDots }, className);
  const badgeContainerClasses = cn(styles['element-header__badge-container']);
  const badgeClasses = cn(styles['element-header__badge']);
  const statusdotContainerClasses = cn(styles['element-header__statusdot-container']);
  const chevronClasses = cn(styles['element-header__chevron']);
  const contentClasses = cn(styles['element-header__content'], {
    [styles['element-header__content--element']]: !contentIsString,
  });
  const iconClasses = cn(styles['element-header__icon'], {});
  const avatarClasses = cn(styles['element-header__avatar'], {});
  const CustomTag = titleHtmlMarkup;
  return (
    <span data-testid={testId} className={listLabelClasses}>
      {showIcon && icon && (
        <span className={iconClasses}>
          {React.cloneElement(icon, {
            size: breakpoint < Breakpoint.md ? IconSize.XSmall : IconSize.Small,
            isHovered,
          })}
        </span>
      )}
      {size !== 'small' && mappedChildren?.avatarChild && (
        <span className={avatarClasses}>{React.cloneElement(mappedChildren.avatarChild, { size: AvatarSize.xsmall })}</span>
      )}

      <span className={contentClasses} data-hasstatusdots={hasStatusDots}>
        {mappedChildren?.elementHeaderTextChildren}
        {!!mappedChildren?.stringChildren.length && (
          <CustomTag className={styles['element-header__title']}>
            <Highlighter searchText={highlightText}>{mappedChildren.stringChildren}</Highlighter>
          </CustomTag>
        )}
        <Highlighter searchText={highlightText}>{mappedChildren?.remainingChildren}</Highlighter>
      </span>

      {hasStatusDots && (
        <span className={statusdotContainerClasses}>
          {!!mappedChildren?.statusDotChildren && <StatusDotList>{mappedChildren.statusDotChildren}</StatusDotList>}
          {!!mappedChildren?.statusDotMCChild && mappedChildren?.statusDotMCChild}
        </span>
      )}

      <span className={badgeContainerClasses}>
        {mappedChildren?.badgeChildren &&
          mappedChildren.badgeChildren.map((badgeChild, index) => {
            return (
              <span key={index} className={badgeClasses} data-parenttype={parentType}>
                {badgeChild}
              </span>
            );
          })}
      </span>
      {chevronIcon && (
        <span className={chevronClasses} data-parenttype={parentType}>
          <Icon svgIcon={chevronIcon} isHovered={isHovered} size={IconSize.XSmall} />
        </span>
      )}
    </span>
  );
};

type ElementHeaderComponent = typeof ElementHeaderRoot & {
  Text: React.FC<ElementHeaderTextProps>;
  StatusDotList: React.FC<StatusDotListProps>;
};
ElementHeaderRoot.displayName = 'ElementHeader';
const ElementHeader = ElementHeaderRoot as ElementHeaderComponent;
ElementHeader.Text = ElementHeaderText;
ElementHeader.Text.displayName = 'ElementHeader.Text';
ElementHeader.StatusDotList = StatusDotList;
ElementHeader.StatusDotList.displayName = 'ElementHeader.StatusDotList';

export default ElementHeader;
