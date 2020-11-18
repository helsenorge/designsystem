import React from 'react';
import {
  StyledLinkList,
  StyledLinkListLink,
  StyledLinkListLinkContent,
  StyledLinkListIconContainer,
} from './LinkList.styled';
import {PaletteNames} from '../../theme/palette';
import Icon from '../Icons';
import ChevronRight from '../Icons/ChevronRight';
import {useHover} from '../../hooks/useHover';

export type LinkListColors = PaletteNames;
export type LinkType = React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLLIElement>>;
export interface CompoundComponent
  extends React.ForwardRefExoticComponent<LinkListProps & React.RefAttributes<HTMLUListElement>> {
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
  const {children, className = '', color = 'neutral', icon, large = false, chevron = false, ...restProps} = props;
  const {hoverRef, isHovered} = useHover<HTMLAnchorElement>();
  return (
    <li ref={ref}>
      <StyledLinkListLink
        ref={hoverRef}
        className={className}
        hasIcon={!!(chevron || icon)}
        large={large}
        color={color}
        {...restProps}>
        <StyledLinkListLinkContent>
          {icon && (
            <StyledLinkListIconContainer>{React.cloneElement(icon, {size: 48, isHovered})}</StyledLinkListIconContainer>
          )}
          {children}
        </StyledLinkListLinkContent>
        {chevron && (
          <StyledLinkListIconContainer>
            <Icon svgIcon={ChevronRight} isHovered={isHovered} />
          </StyledLinkListIconContainer>
        )}
      </StyledLinkListLink>
    </li>
  );
});

const LinkList = React.forwardRef((props: LinkListProps, ref: React.Ref<HTMLUListElement>) => {
  const {children, className = '', chevron = false, large, color, topBorder = true, bottomBorder = true} = props;
  return (
    <StyledLinkList className={className} topBorder={topBorder} bottomBorder={bottomBorder} ref={ref}>
      {React.Children.map(children, (child: React.ReactNode | React.ReactElement<LinkProps>) => {
        if ((child as React.ReactElement<LinkProps>).type === Link) {
          return React.cloneElement(child as React.ReactElement<LinkProps>, {color, large, chevron});
        }
      })}
    </StyledLinkList>
  );
}) as CompoundComponent;

LinkList.Link = Link;
Link.displayName = 'LinkList.Link';

export default LinkList;
