import React from 'react';

import classNames from 'classnames';

import tableStyles from '../styles.module.scss';

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
}

export const TableHead = function TableHead({ category, className, children }: Props) {
  const tableHeadClass = classNames(
    tableStyles['table__head'],
    {
      [tableStyles['table__head--normal']]: category === HeaderCategory.normal,
      [tableStyles['table__head--transparent']]: category === HeaderCategory.transparent,
      [tableStyles['table__head--sortable']]: category == HeaderCategory.sortable,
    },
    className
  );

  return <thead className={tableHeadClass}>{children}</thead>;
};

export default TableHead;
