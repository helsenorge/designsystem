import classNames from 'classnames';

import { ModeTypeOld, TextAlignOld } from '../constants';
import tableStyles from '../styles.module.scss';

export interface TableCellPropsOld extends Omit<React.ComponentPropsWithoutRef<'td'>, 'style'> {
  /** Label used for small viewport block */
  dataLabel?: string;
  /**  text align in cell */
  textAlign?: TextAlignOld;
  /**  nowrap for white space */
  nowrap?: boolean;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the table cell */
  children?: React.ReactNode;
  /** For display with less space. Discouraged to use together with interactive elements. */
  mode?: ModeTypeOld;
  /** For test purposes */
  testId?: string;
}

export const TableCellOld: React.FC<TableCellPropsOld> = ({
  nowrap = false,
  textAlign = TextAlignOld.left,
  dataLabel,
  children,
  className,
  testId,
  mode = ModeTypeOld.normal,
  ...rest
}) => {
  const tableCellClass = classNames(
    tableStyles['table__cell'],
    { [tableStyles['table__cell--compact']]: mode === ModeTypeOld.compact },
    { [tableStyles['table__cell--nowrap']]: nowrap },
    { [tableStyles['table__cell--center']]: textAlign === 'center' },
    { [tableStyles['table__cell--right']]: textAlign === 'right' },
    className
  );

  return (
    <td className={tableCellClass} data-label={dataLabel} data-testid={testId} {...rest}>
      {children}
    </td>
  );
};

export default TableCellOld;
