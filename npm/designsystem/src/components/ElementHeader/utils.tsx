import React from 'react';

import type { AvatarProps } from '../Avatar';
import type { BadgeProps } from '../Badge';
import type { StatusDotProps } from '../StatusDot';

import ElementHeader, { type ElementHeaderChildren, type ElementHeaderProps } from './ElementHeader';
import { ElementHeaderText, type ElementHeaderTextProps } from './ElementHeaderText';
import { StatusDotList, type StatusDotListProps } from './StatusDotList';
import { isComponent, isComponentWithChildren } from '../../utils/component';
import Avatar from '../Avatar';
import Badge from '../Badge';
import StatusDot from '../StatusDot';

type ChildrenMapper = (children: React.ReactNode, isJsxChild?: boolean) => ElementHeaderChildren | undefined;

export const mapChildren: ChildrenMapper = (children, isJsxChild = false) => {
  let avatarChild: React.ReactElement<AvatarProps> | undefined;
  const badgeChildren: React.ReactElement<BadgeProps>[] = [];
  const statusDotChildren: React.ReactElement<StatusDotProps>[] = [];
  let statusDotMCChild: React.ReactElement<StatusDotListProps> | undefined;
  const elementHeaderTextChildren: React.ReactElement<ElementHeaderTextProps>[] = [];
  const stringChildren: string[] = [];
  const remainingChildren: React.ReactNode[] = [];

  React.Children.forEach(children, child => {
    if (child === null || typeof child === 'undefined') return;
    if (isComponent<AvatarProps>(child, Avatar)) {
      avatarChild = child;
    } else if (isComponent<ElementHeaderTextProps>(child, ElementHeaderText)) {
      elementHeaderTextChildren.push(child);
    } else if (isComponent<BadgeProps>(child, Badge)) {
      badgeChildren.push(child);
    } else if (isComponent<StatusDotListProps>(child, StatusDotList)) {
      statusDotMCChild = child;
    } else if (isComponent<StatusDotProps>(child, StatusDot)) {
      statusDotChildren.push(child);
    } else if (typeof child === 'string') {
      stringChildren.push(child);
    } else {
      remainingChildren.push(child);
    }
  });

  // Dette og recursive mapChildren under(gjøres en gang) er for å passe på at jsx children også sjekkes for Avatar og liknende innhold.
  // Slik opprettholder vi stylingen i tilfeller hvor vertikaler har wrappet elementer i en parent span eller div.
  const hasSpecialChildren =
    avatarChild !== undefined ||
    elementHeaderTextChildren.length > 0 ||
    statusDotChildren.length > 0 ||
    statusDotMCChild !== undefined ||
    (badgeChildren !== undefined && stringChildren.length > 0);
  const noRemainingRecursiveChildren =
    remainingChildren.length === 0 ||
    (isComponentWithChildren(remainingChildren[0]) && typeof remainingChildren[0]?.props?.children === 'undefined');

  if (isJsxChild || hasSpecialChildren || noRemainingRecursiveChildren) {
    return {
      avatarChild,
      elementHeaderTextChildren: elementHeaderTextChildren,
      badgeChildren,
      statusDotChildren,
      statusDotMCChild,
      stringChildren,
      remainingChildren,
    };
  }

  if (isComponentWithChildren(remainingChildren[0])) {
    return mapChildren(remainingChildren[0]?.props?.children, true);
  }
};

export const renderElementHeader = (
  element: React.ReactNode,
  options: Pick<
    ElementHeaderProps,
    'titleHtmlMarkup' | 'isHovered' | 'size' | 'parentType' | 'chevronIcon' | 'icon' | 'highlightText' | 'closeButton'
  >
): React.ReactElement | undefined => {
  const { titleHtmlMarkup, isHovered, size, parentType, chevronIcon, icon, highlightText, closeButton } = options;

  if (isComponent<ElementHeaderProps>(element, ElementHeader)) {
    return React.cloneElement(element, {
      chevronIcon,
      icon,
      isHovered,
      size,
      parentType,
      highlightText,
      closeButton,
    });
  }
  if (element) {
    return (
      <ElementHeader
        highlightText={highlightText}
        titleHtmlMarkup={titleHtmlMarkup}
        parentType={parentType}
        chevronIcon={chevronIcon}
        icon={icon}
        isHovered={isHovered}
        size={size}
        closeButton={closeButton}
      >
        {element}
      </ElementHeader>
    );
  }
};
