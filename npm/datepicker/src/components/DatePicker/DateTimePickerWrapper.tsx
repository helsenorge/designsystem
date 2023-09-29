import React from 'react';

import classNames from 'classnames';

import DatePicker, { DatePickerProps } from './DatePicker';
import DateTime, { DateTimeProps } from './DateTime';
import ErrorWrapper from '../../../../designsystem/src/components/ErrorWrapper';
import { isComponent } from '../../../../designsystem/src/utils/component';

import styles from './styles.module.scss';

export type TimeUnits = 'hours' | 'minutes';

interface DateTimePickerWrapperProps {
  /** Sets the children of the datetimepicker - the DatePicker and DateTime components go here */
  children?: React.ReactNode;
  /** Error text to show above the component */
  errorText?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

const DateTimePickerWrapper: React.FC<DateTimePickerWrapperProps> = props => {
  const { children, errorText, testId } = props;

  const mapDateComponents = (child: React.ReactNode): React.ReactNode => {
    if (isComponent<DatePickerProps>(child, DatePicker)) {
      return React.cloneElement(child as React.ReactElement<DatePickerProps>, {
        className: classNames(styles['date-time-picker-wrapper__date-picker']),
        error: !!errorText,
      });
    } else if (isComponent<DateTimeProps>(child, DateTime)) {
      return React.cloneElement(child, {
        error: !!errorText,
      });
    }
    return child;
  };

  return (
    <ErrorWrapper errorText={errorText}>
      <div className={styles['date-time-picker-wrapper']} data-testid={testId}>
        {React.Children.map(children, mapDateComponents)}
      </div>
    </ErrorWrapper>
  );
};

DateTimePickerWrapper.displayName = 'DateTimePickerWrapper';

export default DateTimePickerWrapper;
