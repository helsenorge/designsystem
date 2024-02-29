import React from 'react';

import classNames from 'classnames';

import tableStyles from '../styles.module.scss';
import { ModeType } from '../Table';

export interface Props extends Omit<React.ComponentPropsWithoutRef<'tbody'>, 'style'> {
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the table body. Use TableRows */
  children?: React.ReactNode;
  /** For display with less space. Discouraged to use together with interactive elements. */
  mode?: ModeType;
}

export const TableBody: React.FC<Props> = ({ className, children, mode = ModeType.normal, ...rest }) => {
  const tableBodyClasses = classNames(tableStyles['table-body'], className);
  return (
    <tbody className={tableBodyClasses} {...rest}>
      {React.Children.map(children, child => React.isValidElement<{ mode?: ModeType }>(child) && React.cloneElement(child, { mode }))}
    </tbody>
  );
};

export default TableBody;
