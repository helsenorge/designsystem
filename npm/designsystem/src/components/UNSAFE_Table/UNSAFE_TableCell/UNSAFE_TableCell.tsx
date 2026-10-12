import { useContext } from 'react';

import classNames from 'classnames';

import { TableColors, TableSizes, TextAlign } from '../constants';
import StackedCellContent from '../StackedCellContent';
import styles from '../styles.module.scss';
import { CellHeadingContext, TableContext } from '../TableContext';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'td'>, 'style'> {
  /**  text align in cell */
  textAlign?: TextAlign;
  /**  nowrap for white space */
  nowrap?: boolean;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the table cell */
  children?: React.ReactNode;
  /** For test purposes */
  testId?: string;
}

export const UNSAFE_TableCell: React.FC<Props> = ({ nowrap = false, textAlign = TextAlign.left, children, className, testId, ...rest }) => {
  const { color, size } = useContext(TableContext);
  const heading = useContext(CellHeadingContext);
  const tableCellClass = classNames(
    styles['table__cell'],
    { [styles['table__cell--stacked']]: !!heading },
    { [styles['table__cell--transparent']]: color === TableColors.transparent },
    { [styles['table__cell--compact']]: size === TableSizes.compact },
    { [styles['table__cell--nowrap']]: nowrap },
    { [styles['table__cell--center']]: textAlign === 'center' },
    { [styles['table__cell--right']]: textAlign === 'right' },
    className
  );

  return (
    <td className={tableCellClass} data-testid={testId} {...rest}>
      <StackedCellContent headingText={heading}>{children}</StackedCellContent>
    </td>
  );
};

export default UNSAFE_TableCell;
