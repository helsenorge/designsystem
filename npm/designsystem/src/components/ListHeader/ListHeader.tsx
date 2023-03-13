import React from 'react';

import cn from 'classnames';

import ListHeaderText, { ListHeaderTextProps, ListHeaderTextType } from './ListHeaderText/ListHeaderText';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { isComponent } from '../../utils/component';
import Avatar, { AvatarProps, AvatarSize, AvatarType } from '../Avatar';
import Badge, { BadgeProps, BadgeType } from '../Badge';
import Icon, { IconSize, SvgIcon } from '../Icons';
import { TitleTags } from '../Title';

import styles from './styles.module.scss';

export type ListHeaderSize = 'small' | 'medium' | 'large';

export interface ListHeaderType extends React.ForwardRefExoticComponent<ListHeaderProps & React.RefAttributes<HTMLLIElement>> {
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

export const mapChildren = (
  children: React.ReactNode,
  isJsxChild = false
): {
  avatarChild?: React.ReactElement<AvatarProps>;
  listHeaderTextChildren: Array<React.ReactElement<ListHeaderTextProps>>;
  badgeChild?: React.ReactElement<BadgeProps>;
  stringChildren: Array<string>;
  remainingChildren: Array<any>;
} => {
  let avatarChild: React.ReactElement<AvatarProps> | undefined;
  let badgeChild: React.ReactElement<BadgeProps> | undefined;
  const listHeaderTextChildren: Array<React.ReactElement<ListHeaderTextProps>> = [];
  const stringChildren: Array<string> = [];
  const remainingChildren: Array<any> = [];

  React.Children.forEach(children, child => {
    if (child === null || typeof child === 'undefined') return;
    if (isComponent<AvatarProps>(child, Avatar)) {
      avatarChild = child;
    } else if (isComponent<ListHeaderTextProps>(child, ListHeaderText)) {
      listHeaderTextChildren.push(child);
    } else if (isComponent<BadgeProps>(child, Badge)) {
      badgeChild = child;
    } else if (typeof child === 'string') {
      stringChildren.push(child);
    } else {
      remainingChildren.push(child);
    }
  });

  // Dette og recursive mapChildren under(gjøres en gang) er for å passe på at jsx children også sjekkes for Avatar og liknende innhold.
  // Slik opprettholder vi stylingen i tilfeller hvor vertikaler har wrappet elementer i en parent span eller div.
  const hasSpecialChildren =
    avatarChild !== undefined || listHeaderTextChildren.length > 0 || (badgeChild !== undefined && stringChildren.length > 0);
  const noRemainingRecursiveChildren = remainingChildren.length === 0 || typeof remainingChildren[0]?.props?.children === 'undefined';

  return isJsxChild || hasSpecialChildren || noRemainingRecursiveChildren
    ? { avatarChild, listHeaderTextChildren, badgeChild, stringChildren, remainingChildren }
    : mapChildren(remainingChildren[0]?.props?.children, true);
};

export const ListHeader: ListHeaderType = React.forwardRef((props: ListHeaderProps, ref: React.Ref<HTMLLIElement>) => {
  const { className = '', titleHtmlMarkup = 'h2', chevronIcon, children, icon, isHovered, size, testId } = props;
  const breakpoint = useBreakpoint();
  const showChevronAndIcon = size !== 'small' && !!(chevronIcon || icon);
  const contentIsString = typeof children === 'string';
  const mappedChildren = mapChildren(children);
  const topAlignContent =
    mappedChildren.avatarChild ||
    (mappedChildren.listHeaderTextChildren && mappedChildren.listHeaderTextChildren.length > 0) ||
    (mappedChildren.remainingChildren && mappedChildren.remainingChildren.length > 0);

  const listLabelClasses = cn(
    styles['list-header'],
    {
      [styles['list-header--for-element-content']]: !contentIsString,
      [styles['list-header--top-align-content']]: topAlignContent,
    },
    className
  );
  const badgeClasses = cn(styles['list-header__badge'], {
    [styles['list-header__badge--for-string-content']]: contentIsString,
    [styles['list-header__badge--right']]: !contentIsString,
    [styles['list-header__badge--' + size]]: !contentIsString && size,
  });
  const chevronClasses = cn(styles['list-header__chevron'], {
    [styles['list-header__chevron--for-string-content']]: contentIsString,
    [styles['list-header__chevron--' + size]]: !contentIsString && size,
  });
  const contentClasses = cn(styles['list-header__content'], {
    [styles['list-header__content--string']]: contentIsString,
    [styles['list-header__content--element']]: !contentIsString,
    [styles['list-header__content--spacing']]: !mappedChildren.avatarChild && !icon,
  });
  const iconClasses = cn(styles['list-header__icon'], {
    [styles['list-header__icon--for-string-content']]: contentIsString,
    [styles['list-header__icon--for-element-content']]: !contentIsString,
    [styles['list-header__icon--for-element-content--' + size]]: !contentIsString && size,
  });
  const avatarClasses = cn(styles['list-header__avatar'], {
    [styles['list-header__avatar--for-string-content']]: contentIsString,
    [styles['list-header__avatar--for-element-content']]: !contentIsString,
    [styles['list-header__avatar--for-element-content--' + size]]: !contentIsString && size,
  });
  const CustomTag = titleHtmlMarkup;
  return (
    <div data-testid={testId} className={listLabelClasses}>
      {showChevronAndIcon && icon && (
        <span className={iconClasses}>
          {React.cloneElement(icon, {
            size: breakpoint === Breakpoint.xs ? IconSize.XSmall : IconSize.Small,
            isHovered,
          })}
        </span>
      )}
      {size !== 'small' && mappedChildren.avatarChild && (
        <span className={avatarClasses}>{React.cloneElement(mappedChildren.avatarChild, { size: AvatarSize.xsmall })}</span>
      )}
      <div className={contentClasses}>
        {mappedChildren.listHeaderTextChildren}
        {!!mappedChildren.stringChildren.length && (
          <CustomTag className={styles['list-header__title']}>{mappedChildren.stringChildren}</CustomTag>
        )}
        {mappedChildren.remainingChildren}
      </div>

      {mappedChildren.badgeChild && <span className={badgeClasses}>{mappedChildren.badgeChild}</span>}
      {showChevronAndIcon && chevronIcon && (
        <span className={chevronClasses}>
          <Icon svgIcon={chevronIcon} isHovered={isHovered} size={IconSize.XSmall} />
        </span>
      )}
    </div>
  );
});

export default ListHeader;
