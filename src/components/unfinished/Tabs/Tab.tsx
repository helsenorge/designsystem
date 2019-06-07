import * as React from 'react';
import * as classNames from 'classnames';

export interface TabProps {
  title: string;
  id?: string;
  labelledBy?: string;
  className?: string;
  isTab?: boolean;
  selected?: boolean;
}

export default class Tab extends React.Component<TabProps, {}> {
  isTab: boolean;
  render() {
    const {className, title, labelledBy, isTab, selected, ...other} = this.props;
    const classes = classNames('pane', className);
    const styles = selected ? {display: 'inherit'} : {display: 'none'};
    return selected ? (
      <div
        className={classes}
        style={styles}
        role="tabpanel"
        aria-labelledby={this.props.labelledBy}
        id={this.props.id}
        {...other}>
        {this.props.children}
      </div>
    ) : null;
  }
}

Tab.prototype.isTab = true;
