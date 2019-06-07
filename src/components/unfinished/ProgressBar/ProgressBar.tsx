/*  This file has been converted to TypeScript
 When making changes to this file please make them
 in the file with a .ts or .tsx extension located in
 the Common/src/toolkit folder structure
 Then run the command "npm run build-toolkit" to generate the jsx file
 Please check both files into TFS */

import * as React from 'react';
import * as classNames from 'classnames';

export interface ProgressbarProps {
  min: number;
  max: number;
  value: number;
  formatValue?: (value: number) => string;
}

export default class Progressbar extends React.Component<ProgressbarProps, {}> {
  public static defaultProps: ProgressbarProps = {
    min: 0,
    max: 100,
    value: 0,
    formatValue: undefined,
  };

  calculateCompletedPercent(): number {
    const {value, min, max}: ProgressbarProps = this.props;
    if (value < min) {
      return 0;
    }
    if (value > max) {
      return 100;
    }
    const diff: number = max - min;
    return ((value - min) / diff) * 100;
  }

  shouldValueBeInside(): boolean {
    return this.calculateCompletedPercent() >= 50;
  }

  formatValue(): string {
    const {value, min, max, formatValue}: ProgressbarProps = this.props;
    let valueToFormat: number = value;
    if (value < min) {
      valueToFormat = min;
    }
    if (value > max) {
      valueToFormat = max;
    }
    if (formatValue) {
      return formatValue(valueToFormat);
    }
    return valueToFormat + '';
  }

  render(): JSX.Element {
    const completeClasses: string = classNames('complete', {
      full: this.calculateCompletedPercent() >= 100,
    });
    const classes: string = classNames('value', {
      inside: this.shouldValueBeInside(),
      outside: !this.shouldValueBeInside(),
    });
    return (
      <div className="atom_progressbar">
        <div className="track">
          <div className={completeClasses} style={{width: `${this.calculateCompletedPercent()}%`}}>
            <div className={classes}>{this.formatValue()}</div>
          </div>
        </div>
      </div>
    );
  }
}
