import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const TableBody = function TableBody({ children }: Props) {
  return <tbody>{children}</tbody>;
};

export default TableBody;
