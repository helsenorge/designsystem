import React from 'react';
import cn from 'classnames';

import { PaletteNames } from '../../theme/palette';
import Icon from '../Icons';
import ChevronRight from '../Icons/ChevronRight';
import { useHover } from '../../hooks/useHover';

import LinkListStyles from './styles.module.scss';

export type LinkListColors = PaletteNames;
export type LinkType = React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLLIElement>>;
export interface CompoundComponent extends React.ForwardRefExoticComponent<LinkListProps & React.RefAttributes<HTMLUListElement>> {
  Link: LinkType;
}

interface LinkListProps {
  children: React.ReactNode;
  className?: string;
  color: LinkListColors;
  chevron?: boolean;
  bottomBorder?: boolean;
  topBorder?: boolean;
  large?: boolean;
}

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  color?: LinkListColors;
  large?: boolean;
  chevron?: boolean;
  className?: string;
  icon?: React.ReactElement;
  href?: string;
}

const Link: LinkType = React.forwardRef((props: LinkProps, ref: React.Ref<HTMLLIElement>) => {
  const { children, className = '', color = 'neutral', icon, large = false, chevron = false, ...restProps } = props;
  const { hoverRef, isHovered } = useHover<HTMLAnchorElement>();
  return (
    <li ref={ref}>
      <a
        className={cn(LinkListStyles['link-list__anchor'], LinkListStyles['link-list__anchor--' + color], {
          [LinkListStyles['link-list__anchor--hasicon']]: !!(chevron || icon),
          [LinkListStyles['link-list__anchor--large']]: large,
        })}
        ref={hoverRef}
        {...restProps}
      >
        <span className={LinkListStyles['link-list__content']}>
          {icon && (
            <span className={`${LinkListStyles['link-list__icon-container']} ${LinkListStyles['link-list__icon-container--hasmargin']}`}>
              {React.cloneElement(icon, { className: LinkListStyles['link-list__icon'], size: 48, isHovered })}
            </span>
          )}
          {children}
        </span>
        {chevron && (
          <span className={LinkListStyles['link-list__icon-container']}>
            <Icon className={LinkListStyles['link-list__icon']} svgIcon={ChevronRight} isHovered={isHovered} />
          </span>
        )}
      </a>
    </li>
  );
});

const LinkList = React.forwardRef(function LinkListForwardedRef(props: LinkListProps, ref: React.Ref<HTMLUListElement>) {
  const { children, className = '', chevron = false, large, color, topBorder = true, bottomBorder = true } = props;
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
          return React.cloneElement(child as React.ReactElement<LinkProps>, { color, large, chevron });
        }
      })}
    </ul>
  );
}) as CompoundComponent;

LinkList.Link = Link;
Link.displayName = 'LinkList.Link';

export default LinkList;
