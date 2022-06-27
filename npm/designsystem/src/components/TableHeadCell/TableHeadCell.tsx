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
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets tabIndex on th element */
  tabIndex?: 0 | -1;
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
    sortIcon = (
      <div>
        <Icon svgIcon={arrow} size={IconSize.XXSmall}></Icon>
      </div>
    );
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
      {sortIcon}
      {children}
    </th>
  );
};

export default TableHeadCell;
