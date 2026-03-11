import React from 'react';

import cn from 'classnames';

import { AnalyticsId, IconSize } from '../../constants';
import { usePseudoClasses } from '../../hooks/usePseudoClasses';
import Icon from '../Icon';
import ChevronRight from '../Icons/ChevronRight';
import Tag from '../Tag';
import TagList from '../TagList';

import LinkListStyles from './FilterOverviewLinkList.module.scss';

export type LinkListStatus = 'none' | 'new';

export type LinkType = React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLLIElement>>;

export interface CompoundComponent extends React.ForwardRefExoticComponent<LinkListProps & React.RefAttributes<HTMLUListElement>> {
  Link: LinkType;
}

export interface LinkListProps {
  /** Items in the LinkList */
  children: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

type Modify<T, R> = Omit<T, keyof R> & R;

export type LinkProps = Modify<
  React.HTMLAttributes<HTMLButtonElement>,
  {
    title: string;
    chips?: string[];
    className?: string;
    href?: string;
    /** Ref for knapp */
    linkRef?: React.RefObject<HTMLButtonElement> | null;
    /** Sets the data-testid attribute. */
    testId?: string;
  }
>;

export const Link: LinkType = React.forwardRef((props: LinkProps, ref: React.Ref<HTMLLIElement>) => {
  const { title, chips, className = '', linkRef, testId, ...restProps } = props;
  const { refObject, isHovered } = usePseudoClasses<HTMLButtonElement>(linkRef);

  const liClasses = cn(LinkListStyles['link-list__item'], className);
  const linkClasses = cn(LinkListStyles['link-list__button']);

  return (
    <li ref={ref} className={liClasses} data-testid={testId} data-analyticsid={AnalyticsId.Link}>
      <button className={linkClasses} ref={refObject as React.RefObject<HTMLButtonElement>} type="button" {...restProps}>
        <div className={LinkListStyles['link-list__button__content']}>
          <span>{title}</span>
          {chips && chips.length > 0 && (
            <TagList>
              {chips.map(chip => (
                <Tag key={chip}>{chip}</Tag>
              ))}
            </TagList>
          )}
        </div>
        <Icon svgIcon={ChevronRight} isHovered={isHovered} size={IconSize.XSmall} color={'var(--color-action-graphics-onlight)'} />
      </button>
    </li>
  );
});

export const FilterOverviewLinkList = React.forwardRef(function LinkListForwardedRef(
  props: LinkListProps,
  ref: React.Ref<HTMLUListElement>
) {
  const { children, className = '', testId } = props;

  const listClassNames = cn(LinkListStyles['link-list'], className);

  return (
    <ul ref={ref} className={listClassNames} data-testid={testId} data-analyticsid={AnalyticsId.LinkList}>
      {React.Children.map(children, (child: React.ReactNode) => {
        if (React.isValidElement<LinkProps>(child) && child.type === Link) {
          return React.cloneElement(child);
        }
      })}
    </ul>
  );
}) as CompoundComponent;

FilterOverviewLinkList.displayName = 'FilterOverviewLinkList';
FilterOverviewLinkList.Link = Link;
Link.displayName = 'FilterOverviewLinkList.Link';

export default FilterOverviewLinkList;
