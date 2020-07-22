import React from 'react';
import {
  StyledLinkList,
  StyledLinkListLink,
  StyledLinkListLinkContent,
  StyledLinkListIconContainer,
} from './LinkList.styled';
import {PaletteNames} from '../../theme/palette';
import {HTMLAnchorProps} from '../../constants';
import Icon from '../Icons';
import ChevronRight from '../Icons/ChevronRight';
import {useHover} from '../../hooks/useHover';

export type LinkListColors = PaletteNames;

export interface CompoundComponent
  extends React.ForwardRefExoticComponent<LinkListProps & React.RefAttributes<HTMLUListElement>> {
  Link: any;
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

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactElement;
  color: LinkListColors;
  large: boolean;
  chevron: boolean;
}

const Link = React.forwardRef((props: LinkProps, ref: any) => {
  const {children, className = '', color, icon, large, chevron, ...restProps} = props;
  const {hoverRef, isHovered} = useHover<HTMLAnchorElement>();
  return (
    <li ref={ref}>
      <StyledLinkListLink
        className={className}
        ref={hoverRef}
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
            <Icon svgIcon={ChevronRight} />
          </StyledLinkListIconContainer>
        )}
      </StyledLinkListLink>
    </li>
  );
});

const LinkList = React.forwardRef((props: LinkListProps, ref: any) => {
  const {children, className = '', chevron = false, large, color, topBorder = true, bottomBorder = true} = props;
  return (
    <StyledLinkList className={className} topBorder={topBorder} bottomBorder={bottomBorder} ref={ref}>
      {React.Children.map(children, (child: any) => {
        if (child.type.displayName === 'LinkList.Link') {
          return React.cloneElement(child, {color, large, chevron});
        }
      })}
    </StyledLinkList>
  );
}) as CompoundComponent;

LinkList.Link = Link;
Link.displayName = 'LinkList.Link';

export default LinkList;
