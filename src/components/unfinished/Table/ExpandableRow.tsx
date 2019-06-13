import * as React from './node_modules/react';
import ReactElement = React.ReactElement;
import {Collapse} from './node_modules/react-collapse';
import * as classNames from './node_modules/classnames';
import {RowProps} from './Row';
import * as tabbable from './node_modules/tabbable';
import {TabbableElement} from '../.././atoms/expandable-section/index';

export interface ExpandableRowProps extends React.Props<{}> {
  open?: boolean;
  colspan?: number;
  columnKey?: string;
  rowData?: Object;
  toggle?: (expandableRowKey: string) => void;
  hideDetailsText?: string;
  showDetailsText?: string;
  expandableRowKey?: string;
}

export class ExpandableRow extends React.Component<ExpandableRowProps, {}> {
  refs: {
    row: HTMLTableRowElement;
  };

  constructor(props: ExpandableRowProps) {
    super(props);
    this.toggleClick = this.toggleClick.bind(this);
  }

  /* tslint:disable */
  static isExpandableRow = true;
  /* tslint:enable */

  componentDidUpdate(prevProps: ExpandableRowProps): void {
    if (prevProps.open && !this.props.open) {
      // Set tabindex of all children to -1 to prevent user from tabbing into content while closing
      const tabbableElements: TabbableElement[] = tabbable(this.refs.row);
      tabbableElements.forEach(el => {
        el.setAttribute('tabindex', '-1');
      });
    }
  }

  toggleClick(): void {
    if (this.props.expandableRowKey && this.props.toggle) {
      this.props.toggle(this.props.expandableRowKey);
    }
  }

  render(): JSX.Element {
    let children: ReactElement<RowProps> | React.ReactNode;
    if (this.props.children) {
      if (React.isValidElement<RowProps>(this.props.children)) {
        const props = {
          rowData: this.props.rowData,
          expanded: this.props.open,
        };
        children = React.cloneElement(this.props.children, props);
      } else {
        children = this.props.children;
      }
    }

    const expandableClasses: string = classNames({
      'arrow-up': true,
      'arrow-after': true,
      'atom_inline-navigationbutton': true,
      'close-expander': true,
    });

    return (
      <tr className="expandable-content" ref="row">
        <td colSpan={this.props.colspan} className="expandable-container" aria-hidden={!this.props.open}>
          <Collapse isOpened={this.props.open ? this.props.open : false}>
            <div className="innercontainer">
              {children}
              <button
                type="button"
                onClick={this.toggleClick}
                className={expandableClasses}
                tabIndex={this.props.open ? 0 : -1}>
                {this.props.hideDetailsText}
              </button>
            </div>
          </Collapse>
        </td>
      </tr>
    );
  }
}
