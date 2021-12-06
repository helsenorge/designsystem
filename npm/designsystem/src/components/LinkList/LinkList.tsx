import React from 'react';
import cn from 'classnames';

import { PaletteNames } from '../../theme/palette';
import Icon, { IconSize } from '../Icons';
import ChevronRight from '../Icons/ChevronRight';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { useHover } from '../../hooks/useHover';

import LinkListStyles from './styles.module.scss';

export type LinkListSize = 'small' | 'medium' | 'large';

export type LinkListColors = PaletteNames;
export type LinkType = React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLLIElement>>;
export interface CompoundComponent extends React.ForwardRefExoticComponent<LinkListProps & React.RefAttributes<HTMLUListElement>> {
  Link: LinkType;
}

interface LinkListProps {
  /** Items in the LinkList */
  children: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Changes the link list background color on hover. */
  color: LinkListColors;
  /** Toggles chevron icon on or off. */
  chevron?: boolean;
  /** Toggles the bottom border of the last child element. */
  bottomBorder?: boolean;
  /** Toggles the top border of the first child element. */
  topBorder?: boolean;
  /** Changes size of the LinkList. */
  size?: LinkListSize;
}

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  color?: LinkListColors;
  size?: LinkListSize;
  chevron?: boolean;
  className?: string;
  icon?: React.ReactElement;
  href?: string;
}

const Link: LinkType = React.forwardRef((props: LinkProps, ref: React.Ref<HTMLLIElement>) => {
  const { children, className = '', color = 'neutral', icon, size = 'medium', chevron = false, ...restProps } = props;
  const { hoverRef, isHovered } = useHover<HTMLAnchorElement>();
  const breakpoint = useBreakpoint();

  const hasIcon = size !== 'small' && !!(chevron || icon);

  return (
    <li ref={ref}>
      <a
        className={cn(
          LinkListStyles['link-list__anchor'],
          LinkListStyles['link-list__anchor--' + color],
          {
            [LinkListStyles['link-list__anchor--hasicon']]: hasIcon,
            [LinkListStyles['link-list__anchor--small']]: size === 'small',
            [LinkListStyles['link-list__anchor--medium']]: size === 'medium',
            [LinkListStyles['link-list__anchor--large']]: size === 'large',
          },
          className
        )}
        ref={hoverRef}
        {...restProps}
      >
        {hasIcon && icon && (
          <span className={LinkListStyles['link-list__icon']}>
            {React.cloneElement(icon, {
              size: breakpoint === Breakpoint.Xs ? IconSize.XSmall : IconSize.Small,
              isHovered,
            })}
          </span>
        )}
        <span className={LinkListStyles['link-list__content']}>{children}</span>
        {hasIcon && chevron && (
          <span className={LinkListStyles['link-list__chevron']}>
            <Icon svgIcon={ChevronRight} isHovered={isHovered} size={IconSize.XSmall} />
          </span>
        )}
      </a>
    </li>
  );
});

export const LinkList = React.forwardRef(function LinkListForwardedRef(props: LinkListProps, ref: React.Ref<HTMLUListElement>) {
  const { children, className = '', chevron = false, size = 'medium', color, topBorder = true, bottomBorder = true } = props;
  return (
    <ul
      ref={ref}
      className={cn(
        LinkListStyles['link-list'],
        {
          [LinkListStyles['link-list--hastopborder']]: topBorder,
          [LinkListStyles['link-list--nobottomborder']]: !bottomBorder,
        },
        className ? className : ''
      )}
    >
      {React.Children.map(children, (child: React.ReactNode | React.ReactElement<LinkProps>) => {
        if ((child as React.ReactElement<LinkProps>).type === Link) {
          return React.cloneElement(child as React.ReactElement<LinkProps>, { color, size, chevron });
        }
      })}
    </ul>
  );
}) as CompoundComponent;

LinkList.Link = Link;
Link.displayName = 'LinkList.Link';

export default LinkList;
