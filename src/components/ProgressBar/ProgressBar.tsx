import React from 'react';
import cn from 'classnames';
import styles from './ProgressBar.scss';
import {useCalculatePercentageAndFormatValue} from './UseCalculatePercentageAndFormatValue';

interface ProgressBarProps extends React.HTMLProps<HTMLDivElement> {
  min?: number;
  max?: number;
  value: number;
  formatValue?: (value: number) => string;
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({min = 0, max = 100, value, formatValue = value => `${value}`, ...restProps}, ref): JSX.Element => {
    const [percentage, formattedValue] = useCalculatePercentageAndFormatValue({min, max, value});

    function isValueInside(): boolean {
      return percentage >= 50;
    }

    function isComplete(): boolean {
      return percentage >= 100;
    }

    const indicatorClasses = cn(styles['progress-bar__indicator'], {
      [styles['progress-bar__indicator--complete']]: isComplete(),
    });

    const valueClasses = cn(
      styles['progress-bar__indicator__value'],
      {[styles['progress-bar__indicator__value--inside']]: isValueInside()},
      {[styles['progress-bar__indicator__value--outside']]: !isValueInside()},
    );

    return (
      <div ref={ref} className={styles['progress-bar']}>
        <div className={indicatorClasses} style={{width: `${percentage}%`}}>
          <div className={valueClasses}>{formatValue(formattedValue)}</div>
        </div>
      </div>
    );
  },
);

export {ProgressBar};
