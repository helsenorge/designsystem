import React from 'react';

import cn from 'classnames';

import { AnalyticsId, IconSize } from '../../../constants';
import { usePseudoClasses } from '../../../hooks/usePseudoClasses';
import Icon from '../../Icon';
import ChevronRight from '../../Icons/ChevronRight';

import styles from './FilterLinkList.module.scss';

export type LinkType = React.FC<LinkProps>;

export interface CompoundComponent extends React.FC<LinkListProps> {
  Link: LinkType;
}

export interface LinkListProps {
  /** Items in the LinkList */
  children: React.ReactNode;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Ref passed to the ul element */
  ref?: React.Ref<HTMLUListElement | null>;
}

type Modify<T, R> = Omit<T, keyof R> & R;

export type LinkProps = Modify<
  React.HTMLAttributes<HTMLAnchorElement | HTMLButtonElement>,
  {
    /** If needed children will be content instead of title and chips. Use only in edge cases */
    children?: React.ReactNode;
    /** Title text on link element */
    title?: string;
    /** Texts rendered inside non-interactive chips on link element */
    chips?: string[];
    /** Custom classname for link element */
    className?: string;
    /** Ref for button */
    linkRef?: React.RefObject<HTMLButtonElement | null>;
    /** Sets the data-testid attribute. */
    testId?: string;
    /** Ref passed to the list item element */
    ref?: React.Ref<HTMLLIElement | null>;
  }
>;

export const Link: LinkType = (props: LinkProps) => {
  const { children, title, chips, className = '', linkRef, testId, ref, ...restProps } = props;
  const { refObject, isHovered } = usePseudoClasses<HTMLButtonElement | null>(linkRef);

  const liClasses = cn(styles['link-list__item']);
  const linkClasses = cn(styles['link-list__button'], className);

  return (
    <li className={liClasses} ref={ref} data-testid={testId} data-analyticsid={AnalyticsId.Link}>
      <button className={linkClasses} ref={refObject as React.RefObject<HTMLButtonElement>} type="button" {...restProps}>
        <div className={styles['link-list__button__content']}>
          {title ? (
            <>
              <span>{title}</span>
              {chips && chips.length > 0 && (
                <div className={styles['link-list__chip-list']}>
                  {chips.map(chip => (
                    <span className={styles['link-list__chip']} key={chip}>
                      {chip}
                    </span>
                  ))}
                </div>
              )}
            </>
          ) : (
            <>{children}</>
          )}
        </div>
        <Icon svgIcon={ChevronRight} isHovered={isHovered} size={IconSize.XSmall} color={'var(--color-action-graphics-onlight)'} />
      </button>
    </li>
  );
};

const LinkListComponent: React.FC<LinkListProps> = (props: LinkListProps) => {
  const { children, className = '', testId, ref } = props;

  const listClassNames = cn(styles['link-list'], className);

  return (
    <ul ref={ref} className={listClassNames} data-testid={testId} data-analyticsid={AnalyticsId.LinkList}>
      {React.Children.map(children, (child: React.ReactNode) => {
        if (React.isValidElement<LinkProps>(child) && child.type === Link) {
          return React.cloneElement(child);
        }
      })}
    </ul>
  );
};

export const FilterLinkList = LinkListComponent as CompoundComponent;

FilterLinkList.displayName = 'FilterLinkList';
FilterLinkList.Link = Link;
Link.displayName = 'FilterLinkList.Link';

export default FilterLinkList;
