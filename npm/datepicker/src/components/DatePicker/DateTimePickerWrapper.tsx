import React, { useId } from 'react';

import classNames from 'classnames';

import ErrorWrapper, { ErrorWrapperClassNameProps } from '@helsenorge/designsystem-react/components/ErrorWrapper';
import { isComponent } from '@helsenorge/designsystem-react/utils/component';

import DatePicker, { DatePickerProps } from './DatePicker';
import DateTime, { DateTimeProps } from './DateTime';

import styles from './styles.module.scss';

export type TimeUnits = 'hours' | 'minutes';

interface DateTimePickerWrapperProps extends ErrorWrapperClassNameProps {
  /** Sets the children of the datetimepicker - the DatePicker and DateTime components go here */
  children?: React.ReactNode;
  /** Error text to show above the component */
  errorText?: string;
  /** text placed in the legend tag of the fieldset */
  legend?: string;
  /** Sets the data-testid attribute. */
  testId?: string;
  /** Ref that is passed to the component */
  ref?: React.Ref<HTMLDivElement | null>;
}

export const DateTimePickerWrapper: React.FC<DateTimePickerWrapperProps> = props => {
  const { children, errorWrapperClassName, errorText, legend, testId, ref } = props;
  const errorTextId = useId();

  const mapDateComponents = (child: React.ReactNode): React.ReactNode => {
    if (isComponent<DatePickerProps>(child, DatePicker)) {
      return React.cloneElement(child, {
        className: classNames(styles['date-time-picker-wrapper__date-picker']),
        error: !!errorText,
        errorTextId,
      });
    } else if (isComponent<DateTimeProps>(child, DateTime)) {
      return React.cloneElement(child, {
        error: !!errorText,
        errorTextId,
      });
    }
    return child;
  };

  return (
    <div ref={ref} tabIndex={-1}>
      <ErrorWrapper className={errorWrapperClassName} errorText={errorText} errorTextId={errorTextId}>
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
};

export default DateTimePickerWrapper;
