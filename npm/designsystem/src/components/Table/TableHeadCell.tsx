import React from 'react';
import classNames from 'classnames';
import tableStyles from './styles.module.scss';
import Icon, { IconSize } from '../Icons';
import ArrowUp from '../Icons/ArrowTop';
import ArrowDown from '../Icons/ArrowBottom';

interface Props {
  sortable?: boolean;
  transparent?: boolean;
  sortDir?: 'asc' | 'desc';
  onClick?: () => void;
  /** Adds custom classes to the element. */
  className?: string;
  children?: React.ReactNode;
}

export const TableHeadCell = function TableHeadCell({ sortable, onClick, className, children, sortDir }: Props) {
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
    const arrow = sortDir == 'asc' ? ArrowDown : ArrowUp;
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
      tabIndex={1}
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
