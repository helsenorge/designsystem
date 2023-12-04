import React from 'react';

import classNames from 'classnames';

import ErrorWrapper from '@helsenorge/designsystem-react/components/ErrorWrapper';
import { isComponent } from '@helsenorge/designsystem-react/utils/component';

import DatePicker, { DatePickerProps } from './DatePicker';
import DateTime, { DateTimeProps } from './DateTime';

import styles from './styles.module.scss';

export type TimeUnits = 'hours' | 'minutes';

interface DateTimePickerWrapperProps {
  /** Sets the children of the datetimepicker - the DatePicker and DateTime components go here */
  children?: React.ReactNode;
  /** Error text to show above the component */
  errorText?: string;
  /** text placed in the legend tag of the fieldset */
  legend?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
}

export const DateTimePickerWrapper = React.forwardRef((props: DateTimePickerWrapperProps, ref: React.ForwardedRef<HTMLDivElement>) => {
  const { children, errorText, legend, testId } = props;

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
    <div ref={ref} tabIndex={-1}>
      <ErrorWrapper errorText={errorText}>
        {props.legend ? (
          <fieldset className={styles['date-time-picker-wrapper']} data-testid={testId}>
            {props.legend && <legend className={styles['date-time-picker-wrapper__legend']}>{legend}</legend>}
            {React.Children.map(children, mapDateComponents)}
          </fieldset>
        ) : (
          <div className={styles['date-time-picker-wrapper']}>{React.Children.map(children, mapDateComponents)}</div>
        )}
      </ErrorWrapper>
    </div>
  );
});

DateTimePickerWrapper.displayName = 'DateTimePickerWrapper';

export default DateTimePickerWrapper;
