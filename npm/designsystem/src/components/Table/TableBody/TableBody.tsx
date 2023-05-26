import React from 'react';

import classNames from 'classnames';

import tableStyles from '../styles.module.scss';
import { CompactDataRendering } from '../Table';

export interface Props {
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the table body. Use TableRows */
  children?: React.ReactNode;
  /** For display with less space. Discouraged to use together with interactive elements. */
  compactDataRendering?: CompactDataRendering;
}

export const TableBody = ({ className, children, compactDataRendering = CompactDataRendering.notCompact }: Props): JSX.Element => {
  const tableBodyClasses = classNames(tableStyles['table-body'], className);
  return (
    <tbody className={tableBodyClasses}>
      {React.Children.map(children, child => React.cloneElement(child as React.ReactElement<Props>, { compactDataRendering }))}
    </tbody>
  );
};

export default TableBody;
