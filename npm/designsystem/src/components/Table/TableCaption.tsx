import classNames from 'classnames';

import styles from './styles.module.scss';

export interface TableCaptionProps {
  /** Unique ID. Can be used with aria-labelledby, e.g. for the scroll container. */
  id?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the caption. */
  children: React.ReactNode;
}

export const TableCaption: React.FC<TableCaptionProps> = ({ id, className, children }) => (
  <caption id={id} className={classNames(styles['table-caption'], className)}>
    {children}
  </caption>
);

export default TableCaption;
