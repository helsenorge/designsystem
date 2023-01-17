import React from 'react';
import cn from 'classnames';

import Avatar, { AvatarProps, AvatarType } from '../Avatar';
import Badge, { BadgeProps, BadgeType } from '../Badge';
import ListHeaderText, { ListHeaderTextProps, ListHeaderTextType } from './ListHeaderText/ListHeaderText';

import styles from './styles.module.scss';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import Icon, { IconSize, SvgIcon } from '../Icons';
import { isComponent } from '../../utils/component';
import { TitleTags } from '../Title';

export type ListHeaderSize = 'small' | 'medium' | 'large';

export interface ListHeaderType extends React.ForwardRefExoticComponent<ListHeaderProps & React.RefAttributes<HTMLLIElement>> {
  Avatar?: AvatarType;
  Badge?: BadgeType;
  ListHeaderText?: ListHeaderTextType;
}

export const renderListHeader = (
  element: React.ReactNode,
  titleHtmlMarkup: TitleTags,
  chevronIcon: SvgIcon,
  isHovered: boolean,
  size: ListHeaderSize,
  icon?: React.ReactElement
) => {
  return isComponent<ListHeaderProps>(element, ListHeader)
    ? React.cloneElement(element as React.ReactElement<ListHeaderProps>, {
        chevronIcon: chevronIcon,
        icon: icon,
        isHovered: isHovered,
        size: size,
      })
    : element && (
        <ListHeader titleHtmlMarkup={titleHtmlMarkup} chevronIcon={chevronIcon} icon={icon} isHovered={isHovered} size={size}>
          {element}
        </ListHeader>
      );
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
  avatarChild?: AvatarProps;
  listHeaderTextChildren: Array<ListHeaderTextProps>;
  badgeChild?: BadgeProps;
  stringChildren: Array<string>;
  remainingChildren: Array<any>;
} => {
  let avatarChild: AvatarProps | undefined = undefined;
  let listHeaderTextChildren: Array<ListHeaderTextProps> = [];
  let badgeChild: BadgeProps | undefined = undefined;
  let stringChildren: Array<string> = [];
  let remainingChildren: Array<any> = [];

  React.Children.map(children, (child: React.ReactNode | React.ReactElement<string>) => {
    if (child === null || typeof child === 'undefined') return;
    if ((child as React.ReactElement<AvatarType>).type === Avatar) {
      avatarChild = child as AvatarProps;
    } else if ((child as React.ReactElement<ListHeaderTextType>).type === ListHeaderText) {
      listHeaderTextChildren.push(child as ListHeaderTextProps);
    } else if ((child as React.ReactElement<BadgeType>).type === Badge) {
      badgeChild = child as BadgeProps;
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
    [styles['list-header__chevron--right']]: !mappedChildren.badgeChild,
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
      {size !== 'small' && mappedChildren.avatarChild && <span className={avatarClasses}>{mappedChildren.avatarChild}</span>}
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
