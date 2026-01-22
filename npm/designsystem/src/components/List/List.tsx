import type React from 'react';

import classNames from 'classnames';

import { AnalyticsId } from '../../constants';

import styles from './styles.module.scss';

export type ListVariant = 'bullet' | 'dashed' | 'numbered' | 'alphabetical';

export interface ItemProps {
  children: React.ReactNode;
}

const Item: React.FC<ItemProps> = ({ children }: ItemProps) => <li className={styles.list__item}>{children}</li>;

export interface ListProps {
  /** List contents */
  children: React.ReactNode;
  /** Changes the visual representation of the list. */
  variant?: ListVariant;
  /** Adds margin above/below list */
  margin?: boolean;
  /** Adds className to list element */
  className?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export interface ListCompound extends React.FC<ListProps> {
  Item: typeof Item;
}

const List: ListCompound = ({ children, className, testId, variant = 'bullet', margin }: ListProps) => {
  const CustomTag = ['numbered', 'alphabetical'].includes(variant) ? 'ol' : 'ul';

  const listClasses = classNames(styles.list, styles[`list--${variant}`], margin && styles['list--margin'], className);

  return (
    <CustomTag className={listClasses} data-testid={testId} data-analyticsid={AnalyticsId.List}>
      {children}
    </CustomTag>
  );
};

List.Item = Item;

export default List;
