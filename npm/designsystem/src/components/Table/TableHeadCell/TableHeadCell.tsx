import React from 'react';

import classNames from 'classnames';

import Icon, { IconSize } from '../../Icon';
import ArrowDown from '../../Icons/ArrowDown';
import ArrowUp from '../../Icons/ArrowUp';
import tableStyles from '../styles.module.scss';
import { ModeType } from '../Table';

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
  /** For display with less space. Discouraged to use together with interactive elements. */
  mode?: ModeType;
}

export const TableHeadCell = ({ sortable, onClick, className, children, sortDir, mode = ModeType.normal }: Props): React.JSX.Element => {
  const tableHeadCellDefaultClass = classNames(tableStyles['table__head-cell'], className, {
    [tableStyles['table__head-cell--compact']]: mode === ModeType.compact,
  });

  if (!sortable && !children) {
    return <td className={tableHeadCellDefaultClass}></td>;
  }

  if (!sortable) {
    return (
      <th scope="col" className={tableHeadCellDefaultClass}>
        {children}
      </th>
    );
  }

  const sortableClasses = classNames(tableHeadCellDefaultClass, tableStyles['table__head-cell--sortable'], className);

  const renderSortIcon = (): React.JSX.Element | undefined =>
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
