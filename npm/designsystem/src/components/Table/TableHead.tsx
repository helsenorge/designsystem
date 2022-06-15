import React from 'react';
import classNames from 'classnames';
import tableStyles from './styles.module.scss';

interface Props {
  sortable?: boolean;
  category?: 'normal' | 'transparent';
  /** Adds custom classes to the element. */
  className?: string;
  children: React.ReactNode;
}

export const TableHead = function TableHead({ sortable = false, category = 'normal', className, children }: Props) {
  const tableHeadClass = classNames(
    tableStyles['table__head'],
    {
      [tableStyles['table__head--normal']]: category === 'normal',
      [tableStyles['table__head--transparent']]: category === 'transparent',
      [tableStyles['table__head--sortable']]: sortable,
    },
    className
  );

  return <thead className={tableHeadClass}>{children}</thead>;
};

export default TableHead;
