import classNames from 'classnames';

import { AnalyticsId } from '../../constants';

import styles from './styles.module.scss';

export type ListVariant = 'bullet' | 'dashed' | 'numbered' | 'alphabetical';

export interface ItemProps {
  children: React.ReactNode;
  /** Sets the ordinal value of the item. Only applies to numbered and alphabetical lists. */
  value?: number;
}

const Item: React.FC<ItemProps> = ({ children, value }: ItemProps) => (
  <li className={styles.list__item} value={value}>
    {children}
  </li>
);

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
  /** Number to start counting from. Only applies to numbered and alphabetical lists. */
  start?: number;
  /** Counts the list in reverse order. Only applies to numbered and alphabetical lists. */
  reversed?: boolean;
}

export interface ListCompound extends React.FC<ListProps> {
  Item: typeof Item;
}

const List: ListCompound = ({ children, className, testId, variant = 'bullet', margin, start, reversed }: ListProps) => {
  const CustomTag = ['numbered', 'alphabetical'].includes(variant) ? 'ol' : 'ul';
  const orderedProps = CustomTag === 'ol' ? { start, reversed } : {};

  const listClasses = classNames(styles.list, styles[`list--${variant}`], margin && styles['list--margin'], className);

  return (
    <CustomTag className={listClasses} data-testid={testId} data-analyticsid={AnalyticsId.List} {...orderedProps}>
      {children}
    </CustomTag>
  );
};

List.Item = Item;

export default List;
