import React, { useRef } from 'react';
import classNames from 'classnames';

import tableStyles from './styles.module.scss';

import { AnalyticsId } from '../../constants';
import HorizontalScroll from '../HorizontalScroll';
import { useSize } from '../../hooks/useSize';

export enum SmallViewportVariant {
  /**
   * Show horizontal scrollbar when table is too big for the screen
   */
  horizontalscroll = 'horizontalscroll',
  /**
   * Collapse to two columns on small screens
   */
  block = 'block',
}

export interface Props {
  /** Unique ID */
  id?: string;
  /** Id used for testing */
  testId?: string;
  /** Type of table view om small devices */
  smallViewportVariant?: SmallViewportVariant;
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the table. Use TableHead and TableBody */
  children: React.ReactNode;
}

export const Table = function Table({
  id,
  testId,
  className,
  children,
  smallViewportVariant = SmallViewportVariant.horizontalscroll,
}: Props) {
  const tableRef = useRef<HTMLTableElement>(null);
  const { width: tableWidth = 0 } = useSize(tableRef) || {};
  const tableClass = classNames(
    tableStyles['table'],
    { [tableStyles['table--collapse2col']]: smallViewportVariant === SmallViewportVariant.block },
    className
  );

  return (
    <HorizontalScroll childWidth={tableWidth}>
      <table className={tableClass} id={id} data-testid={testId} data-analyticsid={AnalyticsId.Table} ref={tableRef}>
        {children}
      </table>
    </HorizontalScroll>
  );
};

export default Table;
