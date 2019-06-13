import * as React from 'react';

export interface ColumnProps {
  header?: () => void | JSX.Element;
  cell?: JSX.Element;
  level2Cells?: JSX.Element;
  title?: string;
  altTitle?: string;
  name: string;
  sortable?: boolean;
  date?: boolean;
}

export class Column extends React.Component<ColumnProps, {}> {
  static isColumn = true;

  render(): null {
    return null;
  }
}
