import React from 'react';

import classNames from 'classnames';

import tableStyles from '../styles.module.scss';
import { ModeType } from '../Table';
import TableExpanderCellMobile from '../TableExpanderCell/TableExpanderCellMobile';

export interface Props {
  /** Sets if expanded row can be expanded */
  expandable?: boolean;
  /** Sets if expanded row is expanded */
  expanded?: boolean;
  /** When hide/show button for expanded row is clicked. */
  onClick?: () => void;
  /** Text for expanded row hide button. */
  hideDetailsText?: string;
  /** Text for expanded row show button. */
  showDetailsText?: string;
  /** Key attribute for row */
  rowKey?: string;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the cells of the table row element.  */
  children?: React.ReactNode;
  /** For display with less space. Discouraged to use together with interactive elements. */
  mode?: ModeType;
}

export const TableRow: React.FC<Props> = ({
  rowKey,
  hideDetailsText,
  showDetailsText,
  expandable,
  expanded,
  onClick,
  className,
  children,
  mode = ModeType.normal,
}) => {
  const tableRowClass = classNames(
    tableStyles['table-row'],
    {
      [tableStyles['table__row--expandable']]: expandable,
      [tableStyles['table__row--expanded']]: expanded,
    },
    className
  );

  return (
    <tr className={tableRowClass} onClick={onClick} key={rowKey}>
      {React.Children.map(children, child => React.isValidElement<Props>(child) && React.cloneElement(child, { mode }))}
      {expandable && (
        <TableExpanderCellMobile
          expanded={expanded}
          onClick={onClick}
          hideDetailsText={hideDetailsText}
          showDetailsText={showDetailsText}
          mode={mode}
        />
      )}
    </tr>
  );
};

export default TableRow;
