import React from 'react';

export interface Props {
  /** Adds custom classes to the element. */
  className?: string;
  /** Sets the content of the table body. Use TableRows */
  children?: React.ReactNode;
}

export const TableBody = function TableBody({ className, children }: Props) {
  return <tbody className={className}>{children}</tbody>;
};

export default TableBody;
