import classNames from 'classnames';

import styles from '../styles.module.scss';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'thead'>, 'style'> {
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the thead. Add table rows  */
  children: React.ReactNode;
}

export const UNSAFE_TableHead: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <thead className={classNames(styles.table__head, className)} {...rest}>
      {children}
    </thead>
  );
};

export default UNSAFE_TableHead;
