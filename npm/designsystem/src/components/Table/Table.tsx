import React from 'react';
import classNames from 'classnames';

import tableStyles from './styles.module.scss';

interface Props {
  /** Adds custom classes to the element. */
  className?: string;
  /** Adds custom classes to the element. */
  wrapperClassName?: string;

  children: React.ReactNode;
  /** Unik ID */
  id?: string; // TODO: Kanksje denne skal være påkrevd?
  smallViewportVariant: 'horizontalscroll' | 'block';
}

// Se highlightbox for håndtering av grid

export const Table = function Table({ className, wrapperClassName, children, smallViewportVariant = 'block' }: Props) {
  const tableWrapperClass = classNames(tableStyles['table-wrapper'], wrapperClassName);
  const tableClass = classNames(
    tableStyles['table'],
    { [tableStyles['table--collapse2col']]: smallViewportVariant === 'block' },
    className
  );

  return (
    <div className={tableWrapperClass}>
      <table className={tableClass}>{children}</table>
    </div>
  );
};

export default Table;
