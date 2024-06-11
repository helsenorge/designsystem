import React from 'react';

import cn from 'classnames';

import ListHeaderText, { ListHeaderTextProps, ListHeaderTextType } from './ListHeaderText/ListHeaderText';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { isComponent, isComponentWithChildren } from '../../utils/component';
import uuid from '../../utils/uuid';
import Avatar, { AvatarProps, AvatarSize, AvatarType } from '../Avatar';
import Badge, { BadgeProps, BadgeType } from '../Badge';
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
  icon?: React.ReactElement
): JSX.Element | undefined => {
  if (isComponent<ListHeaderProps>(element, ListHeader)) {
    return React.cloneElement(element, {
      chevronIcon,
      icon,
      isHovered,
      size,
    });
  }
  if (element) {
    return (
      <ListHeader titleHtmlMarkup={titleHtmlMarkup} chevronIcon={chevronIcon} icon={icon} isHovered={isHovered} size={size}>
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
  const { className = '', titleHtmlMarkup = 'h2', chevronIcon, children, icon, isHovered, size, testId } = props;
  const breakpoint = useBreakpoint();
  const showChevronAndIcon = size !== 'small' && !!(chevronIcon || icon);
  const contentIsString = typeof children === 'string';
  const mappedChildren = mapChildren(children);
  const topAlignContent =
    mappedChildren?.avatarChild ||
    (mappedChildren?.listHeaderTextChildren && mappedChildren.listHeaderTextChildren.length > 0) ||
    (mappedChildren?.remainingChildren && mappedChildren?.remainingChildren.length > 0);

  const listLabelClasses = cn(
    styles['list-header'],
    {
      [styles['list-header--for-element-content']]: !contentIsString,
      [styles['list-header--top-align-content']]: topAlignContent,
    },
    className
  );
  const badgeClasses = cn(
    styles['list-header__badge'],
    {
      [styles['list-header__badge--for-string-content']]: contentIsString,
    },
    !contentIsString && size && styles[`list-header__badge--${size}`]
  );
  const chevronClasses = cn(styles['list-header__chevron'], !contentIsString && size && styles[`list-header__chevron--${size}`], {
    [styles['list-header__chevron--for-string-content']]: contentIsString,
  });
  const contentClasses = cn(styles['list-header__content'], {
    [styles['list-header__content--string']]: contentIsString,
    [styles['list-header__content--element']]: !contentIsString,
    [styles['list-header__content--spacing']]: !mappedChildren?.avatarChild && !icon,
  });
  const iconClasses = cn(
    styles['list-header__icon'],
    !contentIsString && size && (size === 'medium' || size === 'large') && styles[`list-header__icon--for-element-content--${size}`],
    {
      [styles['list-header__icon--for-string-content']]: contentIsString,
      [styles['list-header__icon--for-element-content']]: !contentIsString,
    }
  );
  const avatarClasses = cn(
    styles['list-header__avatar'],
    !contentIsString && size && (size === 'medium' || size === 'large') && styles[`list-header__avatar--for-element-content--${size}`],
    {
      [styles['list-header__avatar--for-string-content']]: contentIsString,
      [styles['list-header__avatar--for-element-content']]: !contentIsString,
    }
  );
  const CustomTag = titleHtmlMarkup;
  return (
    <span data-testid={testId} className={listLabelClasses}>
      {showChevronAndIcon && icon && (
        <span className={iconClasses}>
          {React.cloneElement(icon, {
            size: breakpoint === Breakpoint.xs ? IconSize.XSmall : IconSize.Small,
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
          <CustomTag className={styles['list-header__title']}>{mappedChildren.stringChildren}</CustomTag>
        )}
        {mappedChildren?.remainingChildren}
      </span>

      {mappedChildren?.badgeChildren &&
        mappedChildren.badgeChildren.map(badgeChild => {
          const id = uuid();
          return (
            <span key={id} className={badgeClasses}>
              {badgeChild}
            </span>
          );
        })}
      {showChevronAndIcon && chevronIcon && (
        <span className={chevronClasses}>
          <Icon svgIcon={chevronIcon} isHovered={isHovered} size={IconSize.XSmall} />
        </span>
      )}
    </span>
  );
};

ListHeader.displayName = 'ListHeader';

export default ListHeader;
