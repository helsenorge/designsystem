import React from 'react';

import classNames from 'classnames';

import tableStyles from '../styles.module.scss';

export enum TextAlign {
  left = 'left',
  center = 'center',
  right = 'right',
}

export interface Props {
  /** Label used for small viewport block */
  dataLabel: string;
  /**  text align in cell */
  textAlign?: TextAlign;
  /**  nowrap for white space */
  nowrap?: boolean;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the table cell */
  children: React.ReactNode;
}

export const TableCell = function TableCell({ nowrap = false, textAlign = TextAlign.left, dataLabel, children, className }: Props) {
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
