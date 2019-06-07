import * as React from 'react';
import * as classNames from 'classnames';

export interface SortTypeConstants {
  ASC: string;
  DESC: string;
}

/* tslint:disable */
export const SortTypes: SortTypeConstants = {
  ASC: 'ASC',
  DESC: 'DESC',
};
/* tslint:enable */

export interface HeaderProps {
  sortDir?: string;
  columnKey?: string;
  tabIndex?: number;
  onSortChange?: (columnKey?: string, sortDir?: string) => void;
  noSort?: boolean;
  date?: boolean;
}

function reverseSortDirection(sortDir: string): string {
  return sortDir === SortTypes.DESC ? SortTypes.ASC : SortTypes.DESC;
}

export class Header extends React.Component<HeaderProps, {}> {
  onSortChange(event: Event): void {
    event.preventDefault();
    if (this.props.onSortChange) {
      this.props.onSortChange(
        this.props.columnKey,
        this.props.sortDir ? reverseSortDirection(this.props.sortDir) : SortTypes.ASC,
      );
    }
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.charCode === 13) {
      this.onSortChange(event);
    }
  }

  render(): JSX.Element {
    /* tslint:disable */
    const {sortDir, children, noSort} = this.props;
    /* tslint:enable */

    const classes: string = classNames({
      selected: !!sortDir,
      descending: sortDir === SortTypes.DESC,
      ascending: !!sortDir && sortDir !== SortTypes.DESC,
      nosort: !!noSort,
      datecell: this.props.date,
    });

    let result: JSX.Element;
    if (this.props.tabIndex !== undefined) {
      result = (
        <th
          className={classes}
          tabIndex={this.props.tabIndex}
          onClick={this.onSortChange.bind(this)}
          onKeyPress={this.handleKeyPress.bind(this)}>
          {children}
        </th>
      );
    } else {
      result = (
        <th className={classes} onClick={this.onSortChange.bind(this)} onKeyPress={this.handleKeyPress.bind(this)}>
          {children}
        </th>
      );
    }
    return result;
  }
}
