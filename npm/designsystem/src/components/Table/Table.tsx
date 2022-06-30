import React from 'react';
import classNames from 'classnames';

import tableStyles from './styles.module.scss';

import { AnalyticsId } from '../../constants';

export enum SmallViewportVariant {
  horizontalscroll = 'horizontalscroll',
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

export const Table = function Table({ id, testId, className, children, smallViewportVariant = SmallViewportVariant.block }: Props) {
  const tableClass = classNames(
    tableStyles['table'],
    { [tableStyles['table--collapse2col']]: smallViewportVariant === SmallViewportVariant.block },
    className
  );

  return (
    <table className={tableClass} id={id} data-testid={testId} data-analyticsid={AnalyticsId.Table}>
      {children}
    </table>
  );
};

export default Table;
