import * as React from './node_modules/react';
import {Cell, CellProps} from './Cell';
import ReactElement = React.ReactElement;
import * as classNames from './node_modules/classnames';

const shallowCompare: Function = require('react-addons-shallow-compare');

/* tslint:disable:no-any */
export type ReactElementAny = ReactElement<any>;
/* tslint:enable:no-any */

export interface RowProps extends React.Props<{}> {
  rowData: Object;
  columns?: Array<ReactElementAny>;
  rowClasses?: string;
  toggle?: (expandableRowKey: string) => void;
  expandableRow?: boolean;
  expanded: boolean;
  highlightText?: string;
  showDetailsText?: string;
  hideDetailsText?: string;
  visible?: boolean;
  rowBecameVisible?: () => void;
  expandableRowKey?: string;
  formatColumnKey?: boolean;
}

export class Row extends React.Component<RowProps, {}> {
  refs: {
    trigger: HTMLButtonElement;
  };

  constructor(props: RowProps) {
    super(props);
    this.toggleClick = this.toggleClick.bind(this);
  }

  shouldComponentUpdate(nextProps: RowProps, nextState: {}): boolean {
    return shallowCompare(this, nextProps, nextState);
  }

  createRow(
    columns: Array<ReactElementAny>,
    rowData: Object,
    expandableRow?: boolean,
    expanded?: boolean,
  ): Array<JSX.Element> {
    const newColumns: Array<JSX.Element> = [];
    const expandableKey = `expandable`;
    const expandableKeyMobile = `expandableMobile`;

    if (expandableRow) {
      // Expand trigger column. Hidden on smaller screens.
      newColumns.push(
        <td key={expandableKey} className="trigger">
          <span className="arrow-icon" aria-expanded={expanded} aria-hidden={true} />
        </td>,
      );
    }
    for (let i = 0; i < columns.length; ++i) {
      const column: ReactElementAny = columns[i];

      const element: ReactElement<CellProps> = column.props.cell;
      if (React.isValidElement(element)) {
        const props: CellProps = {
          // TODO: Does cell make sense?
          // A cell: column.props.cell,
          columnKey: `${column.props.altTitle ? `${column.props.altTitle} / ` : ``}${column.props.title}`,
          rowData,
          key: column.props.name,
          highlightText: this.props.highlightText,
          altTitle: column.props.altTitle,
        };
        newColumns.push(React.cloneElement(element, Object.assign({}, column.props.cell.props, props)));
      } else {
        let processedJsonObjectName: string;
        let rowValue: string;
        const processedColName: string[] = column.props.name.split('.');
        if (processedColName.length > 1) {
          const temp: string = rowData[processedColName[0]];
          rowValue = temp[processedColName[1]];
        } else {
          processedJsonObjectName = processedColName[0];
          rowValue = rowData[processedJsonObjectName];
        }

        newColumns.push(
          <Cell
            key={column.props.name}
            columnKey={column.props.title}
            rowData={rowData}
            highlightText={this.props.highlightText}
            formatColumnKey={this.props.formatColumnKey}>
            {rowValue}
          </Cell>,
        );
      }
    }

    if (expandableRow) {
      // Extra column to appear on smaller screens
      const expandableClasses: string = classNames({
        'arrow-up': expanded,
        'arrow-down': !expanded,
        'arrow-after': true,
        'atom_inline-navigationbutton': true,
      });
      newColumns.push(
        <td key={expandableKeyMobile} className="trigger-mobile">
          <span className={expandableClasses} aria-hidden={true}>
            {expanded ? this.props.hideDetailsText : this.props.showDetailsText}
          </span>
        </td>,
      );
    }
    return newColumns;
  }

  toggleClick(): void {
    if (this.props.toggle && this.props.expandableRowKey) {
      this.props.toggle(this.props.expandableRowKey);
    }
  }

  render(): JSX.Element {
    const {
      rowData,
      columns,
      rowClasses,
      expandableRow,
      expanded,
      hideDetailsText,
      showDetailsText,
    }: RowProps = this.props;

    let cells: JSX.Element[] | null = null;
    if (columns) {
      cells = this.createRow(columns, rowData, expandableRow, expanded);
    }
    return (
      <tr
        className={rowClasses}
        onClick={this.toggleClick}
        onKeyPress={this.toggleClick}
        tabIndex={expandableRow ? 0 : -1}
        role={expandableRow ? 'button' : 'group'}
        ref={expandableRow ? 'trigger' : undefined}
        aria-expanded={expanded}
        aria-label={expandableRow ? (expanded ? hideDetailsText : showDetailsText) : undefined}>
        {cells}
      </tr>
    );
  }
}
