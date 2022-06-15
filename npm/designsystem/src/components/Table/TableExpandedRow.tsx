import React from 'react';
import classNames from 'classnames';
import tableStyles from './styles.module.scss';

interface Props {
  /** Adds custom classes to the element. */
  className?: string;
  expanded: boolean;
  numberOfColumns: number;
  children: React.ReactNode;
}

export const TableCell = function TableCell({ numberOfColumns, expanded, children, className }: Props) {
  const tableRowClass = classNames(tableStyles['table__expanded-row'], className);
  const tableCellClass = classNames(tableStyles['table__cell'], className);

  if (!expanded) {
    // TODO: bør vise rad, men sette display none eller height 0
    return null;
  }

  return (
    <tr className={tableRowClass}>
      <td colSpan={numberOfColumns} className={tableCellClass}>
        {children}
      </td>
    </tr>
  );
};

export default TableCell;
