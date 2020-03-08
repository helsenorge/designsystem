import React from 'react';
import {StyledLinkList, StyledLinkListLink, StyledLinkListLinkContent} from './LinkList.styled';
import {PaletteNames} from '../../theme/palette';
import {HTMLAnchorProps} from '../../constants';
import Icon from '../Icons';

export type LinkListColors = PaletteNames;

export interface CompoundComponent
  extends React.ForwardRefExoticComponent<LinkListProps & React.RefAttributes<HTMLUListElement>> {
  Link: any;
}

interface LinkListProps {
  children: React.ReactNode;
  color: LinkListColors;
  chevron?: boolean;
  bottomBorder?: boolean;
  topBorder?: boolean;
  large?: boolean;
}

interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  icon?: React.ReactElement;
  color: LinkListColors;
  large: boolean;
  chevron: boolean;
}

const Link = React.forwardRef((props: LinkProps, ref: any) => {
  const {children, color, icon, large, chevron, ...restProps} = props;
  return (
    <li ref={ref}>
      <StyledLinkListLink hasIcon={!!(chevron || icon)} large={large} color={color} {...restProps}>
        <StyledLinkListLinkContent>
          {icon && React.cloneElement(icon, {size: 48})}
          {children}
        </StyledLinkListLinkContent>
        {chevron ? <Icon type="chevronRight" /> : null}
      </StyledLinkListLink>
    </li>
  );
});

const LinkList = React.forwardRef((props: LinkListProps, ref: any) => {
  const {children, chevron = false, large, color, topBorder = true, bottomBorder = true} = props;
  return (
    <StyledLinkList topBorder={topBorder} bottomBorder={bottomBorder} ref={ref}>
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
