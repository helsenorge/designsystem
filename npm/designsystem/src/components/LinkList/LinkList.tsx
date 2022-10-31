import React from 'react';
import cn from 'classnames';

import { PaletteNames } from '../../theme/palette';
import Icon, { IconSize } from '../Icons';
import ChevronRight from '../Icons/ChevronRight';
import { Breakpoint, useBreakpoint } from '../../hooks/useBreakpoint';
import { useHover } from '../../hooks/useHover';

import LinkListStyles from './styles.module.scss';
import { AnalyticsId } from '../../constants';

export type LinkListSize = 'small' | 'medium' | 'large';

export type LinkAnchorTargets = '_self' | '_blank' | '_parent';

export type LinkListColors = PaletteNames;
export type LinkType = React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLLIElement>>;

export type LinkTags = 'button' | 'a';
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
  /** Sets the data-testid attribute. */
  testId?: string;
}

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement> {
  children: React.ReactNode;
  color?: LinkListColors;
  size?: LinkListSize;
  chevron?: boolean;
  className?: string;
  icon?: React.ReactElement;
  href?: string;
  target?: LinkAnchorTargets;
  /** HTML markup for link. Default: a */
  htmlMarkup?: LinkTags;
  /**
   * Ref for lenke/knapp
   */
  linkRef?: React.RefObject<HTMLButtonElement | HTMLAnchorElement>;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const Link: LinkType = React.forwardRef((props: LinkProps, ref: React.Ref<HTMLLIElement>) => {
  const {
    children,
    className = '',
    color = 'neutral',
    icon,
    size = 'medium',
    chevron = false,
    linkRef,
    testId,
    target,
    htmlMarkup = 'a',
    ...restProps
  } = props;
  const { hoverRef, isHovered } = useHover<HTMLButtonElement | HTMLAnchorElement>(linkRef);
  const breakpoint = useBreakpoint();

  const hasIcon = size !== 'small' && !!(chevron || icon);

  const renderContent = (): JSX.Element => (
    <>
      {hasIcon && icon && (
        <span className={LinkListStyles['link-list__icon']}>
          {React.cloneElement(icon, {
            size: breakpoint === Breakpoint.xs ? IconSize.XSmall : IconSize.Small,
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
    </>
  );

  const linkClasses = cn(
    LinkListStyles['link-list__anchor'],
    LinkListStyles['link-list__anchor--' + color],
    {
      [LinkListStyles['link-list__anchor--small']]: size === 'small',
      [LinkListStyles['link-list__anchor--medium']]: size === 'medium',
      [LinkListStyles['link-list__anchor--large']]: size === 'large',
      [LinkListStyles['link-list__anchor--button']]: htmlMarkup === 'button',
    },
    className
  );

  return (
    <li ref={ref} data-testid={testId} data-analyticsid={AnalyticsId.Link}>
      {htmlMarkup === 'a' && (
        <a
          className={linkClasses}
          ref={hoverRef as React.RefObject<HTMLAnchorElement>}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          target={target}
          {...restProps}
        >
          {renderContent()}
        </a>
      )}
      {htmlMarkup === 'button' && (
        <button className={linkClasses} ref={hoverRef as React.RefObject<HTMLButtonElement>} type="button" {...restProps}>
          {renderContent()}
        </button>
      )}
    </li>
  );
});

export const LinkList = React.forwardRef(function LinkListForwardedRef(props: LinkListProps, ref: React.Ref<HTMLUListElement>) {
  const { children, className = '', chevron = false, size = 'medium', color, topBorder = true, bottomBorder = true, testId } = props;
  return (
    <ul
      ref={ref}
      className={cn(
        LinkListStyles['link-list'],
        {
          [LinkListStyles['link-list--hastopborder']]: topBorder,
          [LinkListStyles['link-list--nobottomborder']]: !bottomBorder,
        },
        className
      )}
      data-testid={testId}
      data-analyticsid={AnalyticsId.LinkList}
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
