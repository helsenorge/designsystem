import React from 'react';

import classNames from 'classnames';

import tableStyles from '../styles.module.scss';
import { CompactDataRendering } from '../Table';

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
  /** For display with less space. Discouraged to use together with interactive elements. */
  compactDataRendering?: CompactDataRendering;
}

export const TableCell = ({
  nowrap = false,
  textAlign = TextAlign.left,
  dataLabel,
  children,
  className,
  compactDataRendering = CompactDataRendering.notCompact,
}: Props): React.Element => {
  const tableCellClass = classNames(
    tableStyles['table__cell'],
    { [tableStyles['go']]: compactDataRendering === CompactDataRendering.compact },
    { [tableStyles['table__cell--compact']]: compactDataRendering === CompactDataRendering.compact },
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
