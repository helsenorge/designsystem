import React from 'react';

import classNames from 'classnames';

import tableStyles from '../styles.module.scss';
import { ModeType } from '../Table';

export enum HeaderCategory {
  normal = 'normal',
  transparent = 'transparent',
  sortable = 'sortable',
}

export interface Props {
  /** Header category for styling */
  category: HeaderCategory;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the thead. Add table rows  */
  children: React.ReactNode;
  /** For display with less space. Discouraged to use together with interactive elements. */
  mode?: ModeType;
}

export const TableHead = ({ category, className, children, mode }: Props): React.JSX.Element => {
  const tableHeadClass = classNames(
    tableStyles['table__head'],
    {
      [tableStyles['table__head--normal']]: category === HeaderCategory.normal,
      [tableStyles['table__head--transparent']]: category === HeaderCategory.transparent,
      [tableStyles['table__head--sortable']]: category == HeaderCategory.sortable,
      [tableStyles['table__head--compact']]: mode == ModeType.compact,
    },
    className
  );

  return (
    <thead className={tableHeadClass}>
      {React.Children.map(children, child => React.isValidElement<Props>(child) && React.cloneElement(child, { mode }))}
    </thead>
  );
};

export default TableHead;
