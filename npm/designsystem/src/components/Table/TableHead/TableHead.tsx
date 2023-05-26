import React from 'react';

import classNames from 'classnames';

import tableStyles from '../styles.module.scss';
import { CompactDataRendering } from '../Table';

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
  compactDataRendering?: CompactDataRendering;
}

export const TableHead = ({ category, className, children, compactDataRendering }: Props): React.Element => {
  const tableHeadClass = classNames(
    tableStyles['table__head'],
    {
      [tableStyles['table__head--normal']]: category === HeaderCategory.normal,
      [tableStyles['table__head--transparent']]: category === HeaderCategory.transparent,
      [tableStyles['table__head--sortable']]: category == HeaderCategory.sortable,
      [tableStyles['table__head--compact']]: compactDataRendering == CompactDataRendering.compact,
    },
    className
  );

  return (
    <thead className={tableHeadClass}>
      {React.Children.map(children, child => React.cloneElement(child as React.ReactElement<Props>, { compactDataRendering }))}
    </thead>
  );
};

export default TableHead;
