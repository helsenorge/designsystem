import classNames from 'classnames';

import type { TableSizes, TableColors } from '../constants';

import styles from '../styles.module.scss';
import { mapChildren } from '../utils';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'thead'>, 'style'> {
  /** Header category for styling. Default: normal */
  color?: TableColors;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the thead. Add table rows  */
  children: React.ReactNode;
  /** For display with less space. Discouraged to use together with interactive elements. */
  size?: TableSizes;
  /** Applies zebra stripes to every other row. */
  zebraStripes?: boolean;
}

export const UNSAFE_TableHead: React.FC<Props> = ({ children, className, color, size, zebraStripes: _zebraStripes, ...rest }) => {
  return (
    <thead className={classNames(styles.table__head, className)} {...rest}>
      {mapChildren(children, size, color)}
    </thead>
  );
};

export default UNSAFE_TableHead;
