import * as React from 'react';
import * as classNames from 'classnames';
import {Header, SortTypes} from './Header';
import RowBecameVisible from './RowBecameVisible';
import {Row} from './Row';
import {ExpandableRowProps} from './ExpandableRow';
import ReactElement = React.ReactElement;
import {Spinner} from '../spinner';
import {TextMessage, RestDocumentListItem, XDSDokument} from './Entities';
import {findDOMNode} from 'react-dom';

/* tslint:disable:no-any */
export type ReactElementAny = ReactElement<any>;
/* tslint:enable:no-any */

export interface TableProps {
  id?: string;
  header?: () => void | JSX.Element;
  cell?: () => void | JSX.Element;
  data?: Array<Object>;
  emptyContentText?: string;
  emptyContentElement?: JSX.Element;
  sortableStyle?: boolean;
  sortDisabled?: boolean;
  initialSortColumnKey?: string;
  sortColumnKey?: string;
  initialSortDirIsAsc?: boolean;
  sortDirIsAsc?: boolean;
  onSortColumn?: (columnKey: string, sortDirIsAsc: boolean, isClicked?: boolean, isDisabled?: boolean) => void;
  children?: React.ReactNode;
  highlightText?: string;
  classNames?: string;
  caption?: string;
  helpTrigger?: JSX.Element;
  rowKeyColumnKey?: string;
  useRenderOnScroll?: boolean;
  renderScrollRowSize?: number;
  renderScrollPrefethLimit?: number;
  showSpinner?: boolean;
  showOverlaySpinner?: boolean;
  error?: TextMessage | null;
  customSetSortValue?: (object: Object, value: string, columnKey: string) => string;
  stickyHeader?: boolean;
  useNumericSort?: boolean;
  disableTwoDimensional?: boolean;
  doInitialSort?: boolean;
  showMorePageSize?: number;
  showMoreButtonText?: string;
  showMoreButtonClasses?: string;
  formatColumnKeyOnMobile?: boolean;
}

export interface TableState {
  sortedData?: Array<Object>;
  colSortDirs?: Object;
  columns?: Array<ReactElementAny>;
  expandableRow?: ReactElementAny | null;
  sortable?: boolean;
  sortableStyle?: boolean;
  currentSortDir?: string;
  currentSortKey?: string;
  sortedByUserClick?: boolean;
  expandedRows?: Object;
  isTwoDimensional?: boolean;
  numberOfRowsToRender?: number;
  countShowing?: number;
  showStickyheader: boolean;
}

export interface ChildrenProps {
  columns: Array<ReactElementAny>;
  expandableRow: ReactElementAny | null;
}

interface HtmlObject {
  __html: string;
}

export class Table extends React.Component<TableProps, TableState> {
  static defaultProps: TableProps = {
    sortDisabled: false,
    renderScrollRowSize: 50,
    renderScrollPrefethLimit: 10,
  };

  refs: {
    trigger: HTMLButtonElement;
    tabellHeader: HTMLElement;
    stickyHeader: HTMLElement;
    tabellBody: HTMLElement;
  };

  constructor(props: TableProps) {
    super(props);
    const childrenProps: ChildrenProps = this._checkChildren(props);
    const {initialSortColumnKey}: TableProps = props;

    const colSortDirs: Object = {};
    if (initialSortColumnKey) {
      colSortDirs[initialSortColumnKey] = props.initialSortDirIsAsc ? SortTypes.ASC : SortTypes.DESC;
    }

    this.state = {
      sortedData: props.data ? props.data : [],
      colSortDirs,
      columns: childrenProps.columns,
      expandableRow: childrenProps.expandableRow,
      sortable: false,
      sortableStyle: props.sortableStyle ? props.sortableStyle : false,
      currentSortDir: '',
      currentSortKey: '',
      sortedByUserClick: false,
      expandedRows: {},
      isTwoDimensional:
        props.data && !props.disableTwoDimensional ? this._isTwoDimensional(props.data, childrenProps.columns) : false,
      numberOfRowsToRender: props.renderScrollRowSize ? props.renderScrollRowSize : 0,
      countShowing: props.showMorePageSize ? props.showMorePageSize : undefined,
      showStickyheader: false,
    };
    this._onHeaderClickSortChange = this._onHeaderClickSortChange.bind(this);
    this._sortStateChanged = this._sortStateChanged.bind(this);
    this.toggleExpandRow = this.toggleExpandRow.bind(this);
    this._rowBecameVisible = this._rowBecameVisible.bind(this);
    this.setHeaderStickyWhenScroll = this.setHeaderStickyWhenScroll.bind(this);
    this.updateCountShowing = this.updateCountShowing.bind(this);
  }

  componentDidMount(): void {
    if (this.props.initialSortColumnKey && (!this.props.sortDisabled || this.props.doInitialSort) && this.props.data) {
      this._onSortChange(
        this.props.initialSortColumnKey,
        this.props.initialSortDirIsAsc ? SortTypes.ASC : SortTypes.DESC,
        this.props.data,
      );
    }

    if (this.props.stickyHeader) {
      window.addEventListener('scroll', this.setHeaderStickyWhenScroll);
    }
  }

  componentWillUnmount(): void {
    if (this.props.stickyHeader) {
      window.removeEventListener('scroll', this.setHeaderStickyWhenScroll);
    }
  }

  componentWillReceiveProps(nextProps: TableProps): void {
    if (nextProps.sortDisabled !== this.props.sortDisabled) {
      this.setState({
        sortable: !nextProps.sortDisabled,
      });
    }

    const nextSortColumnKey: string | undefined = nextProps.sortColumnKey
      ? nextProps.sortColumnKey
      : this.state.currentSortKey;
    const nextSortColumDir: string | undefined =
      nextProps.sortDirIsAsc !== null && typeof nextProps.sortDirIsAsc !== 'undefined'
        ? nextProps.sortDirIsAsc
          ? SortTypes.ASC
          : SortTypes.DESC
        : this.state.currentSortDir;

    if (
      !nextProps.sortDisabled &&
      nextSortColumnKey &&
      nextProps.data &&
      nextSortColumDir &&
      (nextSortColumnKey !== this.state.currentSortKey ||
        nextSortColumDir !== this.state.currentSortDir ||
        nextProps.data !== this.props.data)
    ) {
      this._onSortChange(nextSortColumnKey, nextSortColumDir, nextProps.data);
    } else {
      if (nextProps.renderScrollRowSize && nextProps.data !== this.props.data) {
        this.setState({
          sortedData: nextProps.data ? nextProps.data : [],
          numberOfRowsToRender: nextProps.renderScrollRowSize,
        });
      }
    }

    const currentColumnCount: number = this.state.columns ? this.state.columns.length : 0;
    const nextColumnCount: number = this._checkChildren(nextProps).columns.length;
    if (currentColumnCount !== nextColumnCount) {
      this._updateColumns(nextProps);
    }
  }

  _onHeaderClickSortChange(columnKey: string, sortDir: string): void {
    if (this.props.sortDisabled) {
      this.setState({
        currentSortDir: sortDir,
        currentSortKey: columnKey,
      });
      if (this.props.onSortColumn) {
        this.props.onSortColumn(columnKey, sortDir === SortTypes.ASC, true, true);
      }
    } else {
      this._onSortChange(columnKey, sortDir, this.state.sortedData ? this.state.sortedData : [], true);
    }
  }

  _onSortChange(columnKey: string, sortDir: string, data: Array<Object>, isClicked?: boolean): void {
    const sortIndexes: Object[] = data.slice();
    sortIndexes.sort((a: Object, b: Object) => {
      let valueA: string;
      let valueB: string;
      const processedColNameValue: string[] = columnKey.split('.');
      if (processedColNameValue.length > 1) {
        const tempA: string = a[processedColNameValue[0]];
        const tempB: string = b[processedColNameValue[0]];
        valueA = tempA[processedColNameValue[1]];
        valueB = tempB[processedColNameValue[1]];
      } else {
        const columnValue: string = processedColNameValue[0];
        valueA = a[columnValue];
        valueB = b[columnValue];
      }

      if (!valueA) {
        valueA = '';
      }
      if (!valueB) {
        valueB = '';
      }

      if (this.props.customSetSortValue) {
        valueA = this.props.customSetSortValue(a, valueA, columnKey);
        valueB = this.props.customSetSortValue(b, valueB, columnKey);
      }

      const compareOptions = this.props.useNumericSort ? {numeric: true, sensitivity: 'base'} : {};

      let sortVal = 0;
      sortVal = valueA.localeCompare(valueB, 'nb', compareOptions);
      if (sortVal !== 0 && sortDir === SortTypes.DESC) {
        sortVal = sortVal * -1;
      }
      return sortVal;
    });

    this.setState(
      {
        sortedData: sortIndexes,
        colSortDirs: {
          [columnKey]: sortDir,
        },
        currentSortDir: sortDir,
        currentSortKey: columnKey,
        sortedByUserClick: isClicked ? isClicked : false,
        numberOfRowsToRender: this.props.renderScrollRowSize ? this.props.renderScrollRowSize : 0,
      },
      this._sortStateChanged,
    );
  }

  _sortStateChanged(): void {
    if (this.props.onSortColumn) {
      this.props.onSortColumn(
        this.state.currentSortKey ? this.state.currentSortKey : '',
        this.state.currentSortDir === SortTypes.ASC,
        this.state.sortedByUserClick,
        this.props.sortDisabled,
      );
    }
  }

  _updateColumns(props: TableProps): void {
    const childrenProps: ChildrenProps = this._checkChildren(props);
    this.setState({
      columns: childrenProps.columns,
    });
  }

  _checkChildren(props: TableProps): ChildrenProps {
    const columns: Array<ReactElementAny> = [];
    let expandableRow: ReactElementAny | null = null;

    React.Children.forEach(props.children, (child: ReactElementAny) => {
      if (child === null) {
        return;
      }
      /* tslint:disable: no-string-literal */
      if ((child as Object)['type'] !== undefined) {
        if ((child as Object)['type'].isExpandableRow) {
          expandableRow = child;
        }
        if ((child as Object)['type'].isColumn) {
          columns.push(child);
        }
      }
      /* tslint:enable: no-string-literal */
    });
    return {columns, expandableRow};
  }

  _createAltTitleMarkup(markup: string): HtmlObject {
    const newMarkup = markup.replace(/\(/g, '<span class="alt-title-info">(').replace(/\)/g, ')</span>');
    return {__html: `${newMarkup}<br />`};
  }

  _createHeaders(columns: Array<ReactElementAny>, colSortDirs: Object): Array<JSX.Element> {
    const headers: Array<JSX.Element> = [];
    if (
      (this.state.expandableRow || this.state.isTwoDimensional) &&
      this.state.sortedData &&
      this.state.sortedData.length > 0
    ) {
      headers.push(<th className="trigger-header nosort" key="expandableHeader" />);
    }
    for (let i = 0; i < columns.length; ++i) {
      const column: ReactElementAny = columns[i];
      const title: string = column.props.title;
      const altTitle: JSX.Element | null = column.props.altTitle ? (
        <span className="alt-title" dangerouslySetInnerHTML={this._createAltTitleMarkup(column.props.altTitle)} />
      ) : null;
      const name: string = column.props.name;
      const headerkey = `header${i}`;
      const sortDirection: string = colSortDirs[name];

      if (this.props.initialSortColumnKey && this.props.sortDisabled) {
        headers.push(
          <Header date={column.props.date} key={headerkey} columnKey={name} sortDir={sortDirection} noSort>
            {altTitle}
            {title}
          </Header>,
        );
      } else if (column.props.sortable && this.state.sortedData && this.state.sortedData.length > 0) {
        headers.push(
          <Header
            date={column.props.date}
            key={headerkey}
            columnKey={name}
            sortDir={sortDirection}
            onSortChange={this._onHeaderClickSortChange}
            tabIndex={0}>
            {altTitle}
            {title}
          </Header>,
        );
      } else if (name === this.props.sortColumnKey && this.state.sortedData && this.state.sortedData.length > 0) {
        headers.push(
          <Header date={column.props.date} key={headerkey} columnKey={name} sortDir={sortDirection} tabIndex={0}>
            {altTitle}
            {title}
          </Header>,
        );
      } else {
        headers.push(
          <th className={column.props.date ? 'datecell' : undefined} key={headerkey} tabIndex={0}>
            {altTitle}
            {title}
          </th>,
        );
      }
    }
    if (this.state.expandableRow || this.state.isTwoDimensional) {
      headers.push(<th className="trigger-header-mobile" key="expandableHeaderMobile" tabIndex={0} />);
    }
    return headers;
  }

  _createLevel2Rows(rowData: Object, isExpanded: boolean, rowKey: string): Array<JSX.Element> {
    const rows: Array<JSX.Element> = [];
    if (this.state.columns) {
      for (let i = 0; i < this.state.columns.length; i++) {
        const column: ReactElementAny = this.state.columns[i];
        if (!Array.isArray(rowData[column.props.name])) {
          continue;
        }
        if (!column.props.level2Cells) {
          continue;
        }
        const childRows: Object[] = rowData[column.props.name];
        for (let j = 0; j < childRows.length; j++) {
          let childRowKey = `${rowKey}_${column.props.name}_${j}`;
          rows.push(
            React.cloneElement(column.props.level2Cells, {
              key: childRowKey,
              columns: this.state.columns,
              rowData: rowData[column.props.name][j],
              rowClasses: 'row',
              expandableRow: true,
              expanded: isExpanded,
              index: j,
              total: childRows.length,
            }),
          );
        }
      }
    }
    return rows;
  }

  _isTwoDimensional(data: Array<Object>, columns: Array<ReactElementAny>): boolean {
    for (let index = 0; index < data.length; ++index) {
      const rowData: Object = data[index];
      for (let j = 0; j < columns.length; j++) {
        const column: ReactElementAny = columns[j];
        if (Array.isArray(rowData[column.props.name])) {
          return true;
        }
      }
    }
    return false;
  }

  _rowBecameVisible(): void {
    // set next visible rows to render if not all data rendered
    if (
      this.state.numberOfRowsToRender &&
      this.state.sortedData &&
      this.state.numberOfRowsToRender < this.state.sortedData.length
    ) {
      const nextVisibleRowsToRender: number = this.props.renderScrollRowSize
        ? this.state.numberOfRowsToRender + this.props.renderScrollRowSize > this.state.sortedData.length
          ? this.state.sortedData.length
          : this.state.numberOfRowsToRender + this.props.renderScrollRowSize
        : 0;
      this.setState({numberOfRowsToRender: nextVisibleRowsToRender});
    }
  }

  _createRows(data: Array<Object>): Array<JSX.Element> {
    const showDetailsText = 'Vis detaljer'; // TODO: Replace with resource values
    const hideDetailsText = 'Skjul detaljer'; // TODO: Replace with resource values
    const rows: Array<JSX.Element> = [];

    // calculate how many rows to render if useRenderOnScroll prop is set
    let rowsToRender = 0;
    if (this.props.useRenderOnScroll) {
      rowsToRender = this.state.numberOfRowsToRender
        ? this.state.numberOfRowsToRender > data.length
          ? data.length
          : this.state.numberOfRowsToRender
        : 0;
    } else {
      rowsToRender = data.length;
    }
    // set becameVisibleRow if there are more rows left to render
    let becameVisibleRowIndex: number = this.props.renderScrollPrefethLimit
      ? rowsToRender - this.props.renderScrollPrefethLimit - 1
      : 0;
    if (becameVisibleRowIndex < 0) {
      becameVisibleRowIndex = 0;
    }

    for (let index = 0; index < rowsToRender; ++index) {
      let rowKey = `row${index}`;
      const expandableRowKey = `expandableRow${index}`;
      const rowData: Object = data[index];
      if (this.props.rowKeyColumnKey) {
        rowKey = rowData[this.props.rowKeyColumnKey];
      }
      const isExpanded: boolean = this.state.expandedRows ? !!this.state.expandedRows[expandableRowKey] : false;
      const rowClasses: string = classNames('row', {
        open: isExpanded,
        'row--emphasized':
          rowData &&
          (((rowData as RestDocumentListItem).Item && (rowData as RestDocumentListItem).Item.IsRestricted) ||
            (rowData as XDSDokument).ErBegrenset),
      });

      const level2Rows: Array<JSX.Element> = this._createLevel2Rows(rowData, isExpanded, rowKey);

      if (this.props.useRenderOnScroll && index === becameVisibleRowIndex) {
        rows.push(
          <RowBecameVisible
            key={rowKey}
            rowData={rowData}
            columns={this.state.columns}
            rowClasses={rowClasses}
            expandableRow={this.state.expandableRow !== null || this.state.isTwoDimensional}
            expanded={isExpanded}
            toggle={this.toggleExpandRow}
            highlightText={this.props.highlightText}
            showDetailsText={showDetailsText}
            hideDetailsText={hideDetailsText}
            rowBecameVisible={this._rowBecameVisible}
            expandableRowKey={expandableRowKey}
            formatColumnKey={this.props.formatColumnKeyOnMobile}
          />,
        );
      } else {
        rows.push(
          <Row
            key={rowKey}
            ref={expandableRowKey}
            rowData={rowData}
            columns={this.state.columns}
            rowClasses={rowClasses}
            expandableRow={this.state.expandableRow !== null || this.state.isTwoDimensional}
            expanded={isExpanded}
            toggle={this.toggleExpandRow}
            highlightText={this.props.highlightText}
            showDetailsText={showDetailsText}
            hideDetailsText={hideDetailsText}
            expandableRowKey={expandableRowKey}
            formatColumnKey={this.props.formatColumnKeyOnMobile}
          />,
        );
      }

      rows.push(...level2Rows);

      if (this.state.expandableRow && React.isValidElement(this.state.expandableRow)) {
        const props: ExpandableRowProps = {
          colspan: this.state.columns ? this.state.columns.length + 2 : 0,
          rowData,
          key: expandableRowKey,
          open: isExpanded,
          toggle: this.toggleExpandRow,
          hideDetailsText: hideDetailsText,
          showDetailsText: showDetailsText,
          expandableRowKey,
        };
        rows.push(React.cloneElement(this.state.expandableRow, props));
      }
    }
    if (rows.length === 0) {
      // TODO: Replace fallback text with resource values
      const label: string = this.state.columns && this.state.columns[0] ? this.state.columns[0].props.title : '';
      rows.push(
        <tr key={'noContentRow'}>
          <td data-label={label} colSpan={this.state.columns ? this.state.columns.length : 0}>
            <em>{this.props.emptyContentText}</em>
            {this.props.emptyContentElement ? this.props.emptyContentElement : null}
          </td>
        </tr>,
      );
    }
    return rows;
  }

  toggleExpandRow(expandableRowKey: string): void {
    var expanded: boolean = this.state.expandedRows && this.state.expandedRows[expandableRowKey];

    // Set focus to expander button
    if (expanded) {
      if (this.refs[expandableRowKey] && this.refs[expandableRowKey].refs.trigger) {
        this.refs[expandableRowKey].refs.trigger.focus();
      }
    }

    this.setState({expandedRows: Object.assign({}, this.state.expandedRows, {[expandableRowKey]: !expanded})});
  }

  setHeaderStickyWhenScroll(): void {
    const thead = findDOMNode(this.refs.tabellHeader) as HTMLElement;
    const theadSticky = findDOMNode(this.refs.stickyHeader) as HTMLElement;
    const tbody = findDOMNode(this.refs.tabellBody) as HTMLElement;

    if (thead && theadSticky && tbody) {
      let showStickyheader = this.state.showStickyheader;
      const tbodyTop = tbody.getBoundingClientRect().top + document.documentElement.scrollTop;
      const windowScrollTop = document.documentElement.scrollTop;

      if (tbody.scrollHeight && windowScrollTop > tbodyTop + tbody.scrollHeight) {
        showStickyheader = false;
      } else if (thead.scrollHeight && windowScrollTop > tbodyTop - thead.scrollHeight) {
        showStickyheader = true;
      } else {
        showStickyheader = false;
      }

      this.setState({
        showStickyheader: showStickyheader,
      });
    }
  }

  updateCountShowing(event: React.MouseEvent<{}>): void {
    if (event) {
      event.preventDefault();
    }
    if (this.props.data && this.props.showMorePageSize && this.state.countShowing) {
      const newCountShowing = this.state.countShowing + this.props.showMorePageSize;
      if (newCountShowing <= this.props.data.length) {
        this.setState({
          countShowing: newCountShowing,
        });
      } else if (this.state.countShowing < this.props.data.length) {
        this.setState({
          countShowing: this.props.data.length,
        });
      }
    }
  }

  render(): JSX.Element {
    const {sortedData, colSortDirs}: TableState = this.state;
    let helpTrigger: JSX.Element | undefined;
    if (this.props.helpTrigger) {
      helpTrigger = this.props.helpTrigger;
    }
    let body: JSX.Element | null;
    const headers: JSX.Element[] = this._createHeaders(
      this.state.columns ? this.state.columns : [],
      colSortDirs ? colSortDirs : [],
    );
    let rows: JSX.Element[] = [];
    if (sortedData) {
      rows = this._createRows(this.state.countShowing ? sortedData.slice(0, this.state.countShowing) : sortedData);
    }

    const emptyTable: boolean = rows.length === 1 && rows[0].key === 'noContentRow';
    const classesV3: string = classNames(
      {
        expandable: !!this.state.expandableRow || this.state.isTwoDimensional,
        sortable: (this.state.sortable || !!this.props.sortableStyle) && !emptyTable,
        empty: emptyTable,
        'has-hjelpetrigger': helpTrigger !== undefined,
        'has-overlay-spinner': this.props.showOverlaySpinner,
      },
      this.props.classNames,
    );

    const classes: string = classesV3;
    let caption: JSX.Element | undefined;

    if (this.props.caption || helpTrigger) {
      caption = (
        <caption>
          {this.props.caption} {helpTrigger}
        </caption>
      );
    }

    const overlaySpinnerClasses =
      sortedData && (sortedData.length === 0 || (sortedData.length && sortedData.length <= 6))
        ? 'overlay-spinner middle-align'
        : 'overlay-spinner';
    const overlaySpinner: JSX.Element | null = this.props.showOverlaySpinner ? <Spinner local /> : null;

    body =
      this.props.showSpinner !== true && !this.props.error ? (
        <tbody ref="tabellBody">
          {overlaySpinner ? (
            <tr>
              <td className={overlaySpinnerClasses}>{overlaySpinner}</td>
            </tr>
          ) : null}
          {rows}
        </tbody>
      ) : null;

    const spinner: JSX.Element | null = this.props.showSpinner ? <Spinner inline /> : null;

    // To be replaced with <MessageBox type="error" title={this.props.error.Title} description={this.props.error.Body} />
    const error: JSX.Element | null = this.props.error ? (
      <p>
        Temporary error msg: {this.props.error.Title} {this.props.error.Body}
      </p>
    ) : null;

    const showMoreButton: JSX.Element | null =
      this.props.showMorePageSize &&
      this.state.countShowing &&
      this.props.data &&
      this.state.countShowing < this.props.data.length ? (
        <button type="button" className={this.props.showMoreButtonClasses} onClick={this.updateCountShowing}>
          {this.props.showMoreButtonText}
        </button>
      ) : null;

    const subContentClasses = classNames({
      'table-load': true,
      'has-error': !!this.props.error,
    });

    const theadClasses = classNames({
      hide: this.state.showStickyheader,
    });

    const theadStickyClasses = classNames('sticky', {
      hide: !this.state.showStickyheader,
    });

    return (
      <div>
        <table className={classes} id={this.props.id}>
          {caption}
          <thead ref="tabellHeader" className={theadClasses}>
            <tr>{headers}</tr>
          </thead>

          {this.props.stickyHeader ? (
            <thead ref="stickyHeader" className={theadStickyClasses}>
              <tr>{headers}</tr>
            </thead>
          ) : null}

          {body}
        </table>
        <div className={subContentClasses}>
          {spinner}
          {error}
        </div>
        {showMoreButton}
      </div>
    );
  }
}
