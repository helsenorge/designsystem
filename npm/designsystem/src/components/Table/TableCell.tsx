import React from 'react';
import classNames from 'classnames';
import tableStyles from './styles.module.scss';

interface Props {
  nowrap?: boolean;
  dataLabel: string;
  textAlign?: 'left' | 'center' | 'right';
  /** Adds custom classes to the element. */
  className?: string;
  children: React.ReactNode;
}

export const TableCell = function TableCell({ nowrap = false, textAlign = 'left', dataLabel, children, className }: Props) {
  const tableCellClass = classNames(
    tableStyles['table__cell'],
    { [tableStyles['table__cell--nowrap']]: nowrap },
    { [tableStyles['table__cell--center']]: textAlign === 'center' },
    { [tableStyles['table__cell--right']]: textAlign === 'right' },
    className
  );

  return (
    <td className={tableCellClass} data-label={dataLabel}>
      {children}
    </td>
  );
};

export default TableCell;
