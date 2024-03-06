import React from 'react';

import cn from 'classnames';

import { AnalyticsId } from '../../constants';
import { useHover } from '../../hooks/useHover';
import { PaletteNames } from '../../theme/palette';
import ChevronRight from '../Icons/ChevronRight';
import { ListHeaderType, renderListHeader } from '../ListHeader/ListHeader';

import LinkListStyles from './styles.module.scss';

export type LinkListSize = 'small' | 'medium' | 'large';

export type LinkAnchorTargets = '_self' | '_blank' | '_parent';

export type LinkListColors = PaletteNames;
export type LinkListVariant = 'line' | 'outline' | 'fill';

export interface LinkType extends React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLLIElement>> {
  ListHeader?: ListHeaderType;
}

export type LinkTags = 'button' | 'a';
export interface CompoundComponent extends React.ForwardRefExoticComponent<LinkListProps & React.RefAttributes<HTMLUListElement>> {
  Link: LinkType;
}

export interface LinkListProps {
  /** Items in the LinkList */
  children: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Changes the link list background color on hover. */
  color?: LinkListColors;
  /** Toggles chevron icon on or off. */
  chevron?: boolean;
  /** Changes size of the LinkList. */
  size?: LinkListSize;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Sets visual priority */
  variant?: LinkListVariant;
}

type Modify<T, R> = Omit<T, keyof R> & R;

export type LinkProps = Modify<
  React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
  {
    children: React.ReactNode;
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
> &
  Pick<LinkListProps, 'color' | 'size' | 'variant'>;

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
    variant,
    htmlMarkup = 'a',
    ...restProps
  } = props;
  const { hoverRef, isHovered } = useHover<HTMLButtonElement | HTMLAnchorElement>(linkRef);

  const liClasses = cn({
    [LinkListStyles['link-list__list-item--line']]: variant === 'line',
    [LinkListStyles['link-list__list-item--outline']]: variant === 'outline',
  });
  const linkClasses = cn(
    LinkListStyles['link-list__anchor'],
    LinkListStyles[`link-list__anchor--${color}`],
    {
      [LinkListStyles['link-list__anchor--fill']]: variant === 'fill',
      [LinkListStyles[`link-list__anchor--${size}`]]: size,
      [LinkListStyles['link-list__anchor--button']]: htmlMarkup === 'button',
    },
    className
  );
  return (
    <li className={liClasses} ref={ref} data-testid={testId} data-analyticsid={AnalyticsId.Link}>
      {htmlMarkup === 'a' && (
        <a
          className={linkClasses}
          ref={hoverRef as React.RefObject<HTMLAnchorElement>}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}
          target={target}
          {...restProps}
        >
          {renderListHeader(children, 'span', isHovered, size, chevron ? ChevronRight : undefined, icon)}
        </a>
      )}
      {htmlMarkup === 'button' && (
        <button className={linkClasses} ref={hoverRef as React.RefObject<HTMLButtonElement>} type="button" {...restProps}>
          {renderListHeader(children, 'span', isHovered, size, chevron ? ChevronRight : undefined, icon)}
        </button>
      )}
    </li>
  );
});

export const LinkList = React.forwardRef(function LinkListForwardedRef(props: LinkListProps, ref: React.Ref<HTMLUListElement>) {
  const { children, className = '', chevron = false, size = 'medium', color, testId, variant = 'line' } = props;
  return (
    <ul ref={ref} className={cn(LinkListStyles['link-list'], className)} data-testid={testId} data-analyticsid={AnalyticsId.LinkList}>
      {React.Children.map(children, (child: React.ReactNode | React.ReactElement<LinkProps>) => {
        if ((child as React.ReactElement<LinkProps>).type === Link) {
          return React.cloneElement(child as React.ReactElement<LinkProps>, { color, size, chevron, variant });
        }
      })}
    </ul>
  );
}) as CompoundComponent;

LinkList.Link = Link;
Link.displayName = 'LinkList.Link';

export default LinkList;
