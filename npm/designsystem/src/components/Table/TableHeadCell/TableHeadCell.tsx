import React from 'react';
import classNames from 'classnames';
import tableStyles from '../styles.module.scss';
import Icon, { IconSize } from '../../Icons';
import ArrowUp from '../../Icons/ArrowUp';
import ArrowDown from '../../Icons/ArrowDown';

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
  /** Sets the content of the td element.  */
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

  const sortableClasses = classNames(
    tableHeadCellDefaultClass,
    tableStyles['table__head-cell--sortable'],
    { [tableStyles['table__head-cell--sorted']]: sortDir },
    className
  );

  const renderSortIcon = (): JSX.Element | undefined =>
    sortDir && (
      <div className={tableStyles['table__head-cell-sort-icon-wrapper']}>
        <Icon svgIcon={sortDir == SortDirection.asc ? ArrowDown : ArrowUp} size={IconSize.XXSmall} />
      </div>
    );

  const getSortDirection = (): React.AriaAttributes['aria-sort'] => {
    switch (sortDir) {
      case SortDirection.asc:
        return 'ascending';
      case SortDirection.desc:
        return 'descending';
    }
  };

  return (
    <th scope="col" className={sortableClasses} aria-sort={getSortDirection()}>
      <button type="button" onClick={onClick} className={tableStyles['table__sort-button']} aria-pressed={sortDir ? !!sortDir : undefined}>
        {renderSortIcon()}
        {children}
      </button>
    </th>
  );
};

export default TableHeadCell;
