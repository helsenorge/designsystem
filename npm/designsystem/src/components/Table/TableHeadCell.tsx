import React from 'react';
import classNames from 'classnames';
import tableStyles from './styles.module.scss';
import Icon, { IconSize } from '../Icons';
import ArrowUp from '../Icons/ArrowUp';
import ArrowDown from '../Icons/ArrowDown';

export enum SortDirection {
  asc = 'asc',
  desc = 'desc',
}

export interface Props {
  /** Sets if column for head cell should be sortable*/
  sortable?: boolean;
  /** Sort direction  */
  sortDir?: SortDirection;
  /** Function that is called when clicked */
  onClick?: () => void;
  /** Sets tabIndex on th element */
  tabIndex?: 0 | -1;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the td element.  */
  children?: React.ReactNode;
}

export const TableHeadCell = function TableHeadCell({ sortable, onClick, className, children, sortDir, tabIndex }: Props) {
  const tableHeadCellDefaultClass = tableStyles['table__head-cell'];

  if (!sortable) {
    return (
      <th scope="col" className={classNames(tableHeadCellDefaultClass, className)}>
        {children}
      </th>
    );
  }

  const tableHeadCellClass = classNames(
    tableHeadCellDefaultClass,
    tableStyles['table__head-cell--sortable'],
    { [tableStyles['table__head-cell--sorted']]: !!sortDir },
    className
  );

  let sortIcon: JSX.Element | null = null;
  if (sortDir) {
    const arrow = sortDir == SortDirection.asc ? ArrowDown : ArrowUp;
    sortIcon = <Icon svgIcon={arrow} size={IconSize.XXSmall}></Icon>;
  }

  return (
    <th
      scope="col"
      role="button"
      tabIndex={tabIndex === undefined ? 0 : tabIndex}
      className={tableHeadCellClass}
      onClick={onClick}
      onKeyPress={e => e.key === 'Enter' && onClick && onClick()}
    >
      <div className={tableStyles['table__head-cell-sort-icon-wrapper']}>{sortIcon}</div>
      {children}
    </th>
  );
};

export default TableHeadCell;
