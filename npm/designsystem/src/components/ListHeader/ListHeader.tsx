import React from 'react';

import cn from 'classnames';

import ListHeaderText, { ListHeaderTextProps, ListHeaderTextType } from './ListHeaderText/ListHeaderText';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { isComponent, isComponentWithChildren } from '../../utils/component';
import Avatar, { AvatarProps, AvatarSize, AvatarType } from '../Avatar';
import Badge, { BadgeProps, BadgeType } from '../Badge';
import Highlighter from '../Highlighter';
import Icon, { IconSize, SvgIcon } from '../Icon';
import { TitleTags } from '../Title';

import styles from './styles.module.scss';

export type ListHeaderSize = 'small' | 'medium' | 'large';

export interface ListHeaderType extends React.FC<ListHeaderProps> {
  Avatar?: AvatarType;
  Badge?: BadgeType;
  ListHeaderText?: ListHeaderTextType;
}

export const renderListHeader = (
  element: React.ReactNode,
  titleHtmlMarkup: TitleTags,
  isHovered: boolean,
  size: ListHeaderSize,
  chevronIcon?: SvgIcon,
  icon?: React.ReactElement,
  highlightText?: string
): JSX.Element | undefined => {
  if (isComponent<ListHeaderProps>(element, ListHeader)) {
    return React.cloneElement(element, {
      chevronIcon,
      icon,
      isHovered,
      size,
      highlightText,
    });
  }
  if (element) {
    return (
      <ListHeader
        highlightText={highlightText}
        titleHtmlMarkup={titleHtmlMarkup}
        chevronIcon={chevronIcon}
        icon={icon}
        isHovered={isHovered}
        size={size}
      >
        {element}
      </ListHeader>
    );
  }
};

export interface ListHeaderProps {
  /** Adds custom classes to the ListHeader element. */
  className?: string;
  /** Chevron to render inside of the ListHeader */
  chevronIcon?: SvgIcon;
  /** Children to be rendered inside of ListHeader */
  children: React.ReactNode;
  /** Changes the underlying element of the title. Default: h2*/
  titleHtmlMarkup?: TitleTags;
  /** icon to be rendered inside of ListHeader */
  icon?: React.ReactElement;
  /** whether or not the parent is hovered */
  isHovered?: boolean;
  /** Changes size of the ListHeader. */
  size?: ListHeaderSize;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Highlights text in title. Used for search results */
  highlightText?: string;
}

interface ListHeaderChildren {
  avatarChild?: React.ReactElement<AvatarProps>;
  listHeaderTextChildren: React.ReactElement<ListHeaderTextProps>[];
  badgeChildren?: React.ReactElement<BadgeProps>[];
  elementChild?: React.ReactElement;
  stringChildren: string[];
  remainingChildren: React.ReactNode[];
}

type ChildrenMapper = (children: React.ReactNode, isJsxChild?: boolean) => ListHeaderChildren | undefined;

export const mapChildren: ChildrenMapper = (children, isJsxChild = false) => {
  let avatarChild: React.ReactElement<AvatarProps> | undefined;
  const badgeChildren: React.ReactElement<BadgeProps>[] = [];
  const listHeaderTextChildren: React.ReactElement<ListHeaderTextProps>[] = [];
  const stringChildren: string[] = [];
  const remainingChildren: React.ReactNode[] = [];

  React.Children.forEach(children, child => {
    if (child === null || typeof child === 'undefined') return;
    if (isComponent<AvatarProps>(child, Avatar)) {
      avatarChild = child;
    } else if (isComponent<ListHeaderTextProps>(child, ListHeaderText)) {
      listHeaderTextChildren.push(child);
    } else if (isComponent<BadgeProps>(child, Badge)) {
      badgeChildren.push(child);
    } else if (typeof child === 'string') {
      stringChildren.push(child);
    } else {
      remainingChildren.push(child);
    }
  });

  // Dette og recursive mapChildren under(gjøres en gang) er for å passe på at jsx children også sjekkes for Avatar og liknende innhold.
  // Slik opprettholder vi stylingen i tilfeller hvor vertikaler har wrappet elementer i en parent span eller div.
  const hasSpecialChildren =
    avatarChild !== undefined || listHeaderTextChildren.length > 0 || (badgeChildren !== undefined && stringChildren.length > 0);
  const noRemainingRecursiveChildren =
    remainingChildren.length === 0 ||
    (isComponentWithChildren(remainingChildren[0]) && typeof remainingChildren[0]?.props?.children === 'undefined');

  if (isJsxChild || hasSpecialChildren || noRemainingRecursiveChildren) {
    return { avatarChild, listHeaderTextChildren, badgeChildren, stringChildren, remainingChildren };
  }

  if (isComponentWithChildren(remainingChildren[0])) {
    return mapChildren(remainingChildren[0]?.props?.children, true);
  }
};

export const ListHeader: ListHeaderType = props => {
  const { className = '', titleHtmlMarkup = 'h2', chevronIcon, children, icon, isHovered, size, testId, highlightText } = props;
  const breakpoint = useBreakpoint();
  const showIcon = size !== 'small' && !!icon;
  const contentIsString = typeof children === 'string';
  const mappedChildren = mapChildren(children);

  const listLabelClasses = cn(styles['list-header'], className);
  const badgeContainerClasses = cn(styles['list-header__badge-container']);
  const badgeClasses = cn(styles['list-header__badge']);
  const chevronClasses = cn(styles['list-header__chevron']);
  const contentClasses = cn(styles['list-header__content'], {
    [styles['list-header__content--element']]: !contentIsString,
  });
  const iconClasses = cn(styles['list-header__icon'], {});
  const avatarClasses = cn(styles['list-header__avatar'], {});
  const CustomTag = titleHtmlMarkup;
  return (
    <span data-testid={testId} className={listLabelClasses}>
      {showIcon && icon && (
        <span className={iconClasses}>
          {React.cloneElement(icon, {
            size: breakpoint <= Breakpoint.xs ? IconSize.XSmall : IconSize.Small,
            isHovered,
          })}
        </span>
      )}
      {size !== 'small' && mappedChildren?.avatarChild && (
        <span className={avatarClasses}>{React.cloneElement(mappedChildren.avatarChild, { size: AvatarSize.xsmall })}</span>
      )}
      <span className={contentClasses}>
        {mappedChildren?.listHeaderTextChildren}
        {!!mappedChildren?.stringChildren.length && (
          <CustomTag className={styles['list-header__title']}>
            <Highlighter searchText={highlightText}>{mappedChildren.stringChildren}</Highlighter>
          </CustomTag>
        )}
        <Highlighter searchText={highlightText}>{mappedChildren?.remainingChildren}</Highlighter>
      </span>

      <span className={badgeContainerClasses}>
        {mappedChildren?.badgeChildren &&
          mappedChildren.badgeChildren.map((badgeChild, index) => {
            return (
              <span key={index} className={badgeClasses}>
                {badgeChild}
              </span>
            );
          })}
      </span>
      {chevronIcon && (
        <span className={chevronClasses}>
          <Icon svgIcon={chevronIcon} isHovered={isHovered} size={IconSize.XSmall} />
        </span>
      )}
    </span>
  );
};

ListHeader.displayName = 'ListHeader';

export default ListHeader;
