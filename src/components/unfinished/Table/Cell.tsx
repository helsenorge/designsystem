import * as React from './node_modules/react';
import * as classNames from './node_modules/classnames';

export interface CellProps extends React.Props<{}> {
  className?: string;
  columnKey?: string;
  rowData?: Object;
  highlightText?: string;
  visible?: boolean;
  loadMore?: () => void;
  threshold?: boolean;
  altTitle?: string;
  formatColumnKey?: boolean;
}

export class Cell extends React.Component<CellProps, {}> {
  highlightText(text: string, highlight: string): JSX.Element | string {
    const highlightStartIndex: number = text.toLowerCase().indexOf(highlight.toLowerCase());
    if (highlightStartIndex >= 0) {
      const highlightEndIndex: number = highlightStartIndex + highlight.length;
      const textStart: string = text.substr(0, highlightStartIndex);
      const textHighlight: string = text.substr(highlightStartIndex, highlight.length);
      const textEnd: string = text.substr(highlightEndIndex);
      return (
        <span>
          {textStart}
          <span className="atom_highlight-text">{textHighlight}</span>
          {textEnd}
        </span>
      );
    }
    return text;
  }

  highlightContent(children: React.ReactNode, highlightText: string): JSX.Element | string {
    /* tslint:disable */
    let highlightedContent: any;
    /* tslint:enable */

    highlightedContent = React.Children.map(children, (child: JSX.Element | string) => {
      if (typeof child === 'string') {
        return this.highlightText((child as string).toString(), highlightText);
      }

      if (child) {
        let childProps: React.Props<{}> = (child as JSX.Element).props;
        if (childProps && childProps.children) {
          const highlightedChildren: JSX.Element | string = this.highlightContent(
            childProps.children as JSX.Element,
            highlightText,
          );
          return Object.assign({}, child, {props: Object.assign({}, childProps, {children: highlightedChildren})});
        }
      }
      return child;
    });
    return highlightedContent;
  }

  formatColumnKey(columnKey: string) {
    return <div className="data-key" dangerouslySetInnerHTML={{__html: columnKey.replace('/', '/</div><div>')}} />;
  }

  render(): JSX.Element {
    /* tslint:disable */
    const {children, highlightText, columnKey, formatColumnKey} = this.props;
    /* tslint:enable */

    const content = highlightText ? this.highlightContent(children, highlightText) : children;
    const classes = classNames(this.props.className, {'hide-label': formatColumnKey});

    return (
      <td data-label={columnKey} className={classes ? classes : undefined}>
        {formatColumnKey && columnKey ? this.formatColumnKey(columnKey) : null}
        {formatColumnKey ? <div className="data-content">{content}</div> : content}
      </td>
    );
  }
}
