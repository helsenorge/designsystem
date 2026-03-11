import React from 'react';

import cn from 'classnames';

import type { AvatarProps, AvatarType } from '../Avatar';
import type { BadgeProps, BadgeType } from '../Badge';
import type { IconProps, SvgIcon } from '../Icon';
import type { LazyIconProps } from '../LazyIcon';
import type { StatusDotProps, StatusDotType } from '../StatusDot';
import type { TitleTags } from '../Title';
import type { ElementHeaderTextProps, ElementHeaderTextType } from './ElementHeaderText/ElementHeaderText';
import type { StatusDotListProps, StatusDotListType } from './StatusDotList/StatusDotList';

import ElementHeaderText from './ElementHeaderText/ElementHeaderText';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { isComponent } from '../../utils/component';
import { AvatarSize } from '../Avatar';
import Icon, { IconSize } from '../Icon';
import StatusDotList from './StatusDotList';
import Highlighter from '../Highlighter';
import LazyIcon from '../LazyIcon';
import { mapChildren } from './utils';

import styles from './styles.module.scss';

export type ElementHeaderSize = 'compact' | 'small' | 'medium' | 'large';
export type ParentType = 'linklist' | 'expanderlist';

export interface ElementHeaderType extends React.FC<ElementHeaderProps> {
  Avatar?: AvatarType;
  Badge?: BadgeType;
  ElementHeaderText?: ElementHeaderTextType;
  StatusDot?: StatusDotType;
  StatusDotList?: StatusDotListType;
}

export interface ElementHeaderProps {
  /** Adds custom classes to the ElementHeader element. */
  className?: string;
  /** Chevron to render inside of the ElementHeader */
  chevronIcon?: SvgIcon;
  /** Close button to be rendered inside of ElementHeader. This renders in place of chevronIcon */
  closeButton?: React.ReactElement;
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

export interface ElementHeaderChildren {
  avatarChild?: React.ReactElement<AvatarProps>;
  elementHeaderTextChildren: React.ReactElement<ElementHeaderTextProps>[];
  badgeChildren?: React.ReactElement<BadgeProps>[];
  statusDotChildren?: React.ReactElement<StatusDotProps>[];
  statusDotMCChild?: React.ReactElement<StatusDotListProps>;
  elementChild?: React.ReactElement;
  stringChildren: string[];
  remainingChildren: React.ReactNode[];
}

export const ElementHeaderRoot: ElementHeaderType = props => {
  const {
    className = '',
    titleHtmlMarkup = 'h2',
    parentType = 'linklist',
    chevronIcon,
    closeButton,
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

  const listLabelClasses = cn(styles['element-header'], { [styles['element-header--compact']]: size === 'compact' }, className);
  const badgeContainerClasses = cn(styles['element-header__badge-container']);
  const badgeClasses = cn(styles['element-header__badge']);
  const statusdotContainerClasses = cn(styles['element-header__statusdot-container']);
  const chevronClasses = cn(styles['element-header__chevron']);
  const contentClasses = cn(styles['element-header__content'], {
    [styles['element-header__content--element']]: !contentIsString,
    [styles['element-header__content--compact']]: size === 'compact',
  });
  const iconClasses = cn(styles['element-header__icon'], { [styles['element-header__icon--with-statusdot']]: hasStatusDots });
  const avatarClasses = cn(styles['element-header__avatar'], {});
  const CustomTag = titleHtmlMarkup;
  const iconPropIsIconComponent = isComponent<IconProps>(icon, Icon);
  const iconPropIsLazyIconComponent = !iconPropIsIconComponent && isComponent<LazyIconProps>(icon, LazyIcon);

  let iconComponent;
  if (iconPropIsIconComponent) {
    iconComponent = React.cloneElement(icon as React.ReactElement<IconProps>, {
      size: breakpoint < Breakpoint.md ? IconSize.XSmall : IconSize.Small,
      isHovered,
    });
  } else if (iconPropIsLazyIconComponent) {
    iconComponent = React.cloneElement(icon as React.ReactElement<LazyIconProps>, {
      size: breakpoint < Breakpoint.md ? IconSize.XSmall : IconSize.Small,
      isHovered,
    });
  } else {
    iconComponent = icon;
  }

  return (
    <span data-testid={testId} className={listLabelClasses}>
      {showIcon && icon && <span className={iconClasses}>{iconComponent}</span>}
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
      {chevronIcon && typeof closeButton === 'undefined' && (
        <span className={chevronClasses} data-parenttype={parentType}>
          <Icon svgIcon={chevronIcon} isHovered={isHovered} size={IconSize.XSmall} />
        </span>
      )}
      {closeButton && (
        <span className={chevronClasses} data-parenttype={parentType}>
          {closeButton}
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
