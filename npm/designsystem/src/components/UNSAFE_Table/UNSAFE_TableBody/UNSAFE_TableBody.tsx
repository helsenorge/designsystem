import { useContext } from 'react';

import classNames from 'classnames';

import styles from '../styles.module.scss';
import { TableContext } from '../TableContext';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'tbody'>, 'style'> {
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the table body. Use TableRows */
  children?: React.ReactNode;
  /** Applies zebra stripes to every other row. Overrides the value from UNSAFE_Table. */
  zebraStripes?: boolean;
}

export const UNSAFE_TableBody: React.FC<Props> = ({ className, children, zebraStripes, ...rest }) => {
  const { zebraStripes: inheritedZebraStripes } = useContext(TableContext);
  const tableBodyClasses = classNames(
    styles['table-body'],
    { [styles['table-body--zebra']]: zebraStripes ?? inheritedZebraStripes },
    className
  );

  return (
    <tbody className={tableBodyClasses} {...rest}>
      {children}
    </tbody>
  );
};

export default UNSAFE_TableBody;
