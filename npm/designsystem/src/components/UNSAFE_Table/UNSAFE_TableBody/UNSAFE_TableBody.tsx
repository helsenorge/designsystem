import classNames from 'classnames';

import type { TableColors } from '../constants';

import { TableSizes } from '../constants';
import styles from '../styles.module.scss';
import { mapChildrenWithSizeAndColor } from '../utils';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'tbody'>, 'style'> {
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the table body. Use TableRows */
  children?: React.ReactNode;
  /** Header category for styling. Default: normal */
  color?: TableColors;
  /** For display with less space. Discouraged to use together with interactive elements. */
  size?: TableSizes;
}

export const UNSAFE_TableBody: React.FC<Props> = ({ className, children, color, size = TableSizes.normal, ...rest }) => {
  const tableBodyClasses = classNames(styles['table-body'], className);
  return (
    <tbody className={tableBodyClasses} {...rest}>
      {mapChildrenWithSizeAndColor(children, size, color)}
    </tbody>
  );
};

export default UNSAFE_TableBody;
