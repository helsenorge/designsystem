import classNames from 'classnames';

import type { TableColors } from '../constants';

import { TableSizes } from '../constants';
import styles from '../styles.module.scss';
import { mapChildren } from '../utils';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'tbody'>, 'style'> {
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the table body. Use TableRows */
  children?: React.ReactNode;
  /** Header category for styling. Default: normal */
  color?: TableColors;
  /** For display with less space. Discouraged to use together with interactive elements. */
  size?: TableSizes;
  /** Applies zebra stripes to every other row. Default: false */
  zebraStripes?: boolean;
}

export const UNSAFE_TableBody: React.FC<Props> = ({
  className,
  children,
  color,
  size = TableSizes.normal,
  zebraStripes = false,
  ...rest
}) => {
  const tableBodyClasses = classNames(styles['table-body'], { [styles['table-body--zebra']]: zebraStripes }, className);
  return (
    <tbody className={tableBodyClasses} {...rest}>
      {mapChildren(children, size, color)}
    </tbody>
  );
};

export default UNSAFE_TableBody;
