import React, { cloneElement, isValidElement, useState } from 'react';

import { isBefore, startOfDay } from 'date-fns';

import type { Unsafe_DatePickerProps } from './Unsafe_DatePicker';

import { isValidRange } from './validate';

import styles from './RangeDatePickers.module.scss';

//@todo: utvide denne til å ta inn ISODatePicker også
export interface RangeDateInputsProps {
  /** The 'from' date. Must be DateInput */
  from: React.ReactElement<Unsafe_DatePickerProps>;
  /** The 'to' date. Must be DateInput */
  to: React.ReactElement<Unsafe_DatePickerProps>;
  /** Callback when the date range changes with validation result */
  onRangeChange?: (from: Date | undefined, to: Date | undefined, isValid: boolean) => void;
}

const Unsafe_RangeDatePickers: React.FC<RangeDateInputsProps> = props => {
  const { from, to, onRangeChange } = props;

  const [fromDate, setFromDate] = useState<Date | undefined>(from.props.value);
  const [toDate, setToDate] = useState<Date | undefined>(to.props.value);

  const handleFromChange = (date: Date | undefined): void => {
    setFromDate(date);
    const valid = isValidRange(date, toDate);
    if (from.props.onChange) {
      from.props.onChange(date);
    }
    if (onRangeChange) {
      onRangeChange(date, toDate, valid);
    }
  };

  const handleToChange = (date: Date | undefined): void => {
    setToDate(date);
    const valid = isValidRange(fromDate, date); // @todo: gjøre noe mer her?
    if (to.props.onChange) {
      to.props.onChange(date);
    }
    if (onRangeChange) {
      onRangeChange(fromDate, date, valid);
    }
  };

  // Create a matcher function to disable dates before the from date in the 'to' picker
  const disableDatesBeforeFrom = fromDate
    ? (date: Date): boolean => {
        return isBefore(startOfDay(date), startOfDay(fromDate));
      }
    : undefined;

  // Create a matcher function to disable dates after the to date in the 'from' picker
  const disableDatesAfterTo = toDate
    ? (date: Date): boolean => {
        return isBefore(startOfDay(toDate), startOfDay(date));
      }
    : undefined;

  // Clone the from DateInput with additional props
  const enhancedFrom = isValidElement<Unsafe_DatePickerProps>(from)
    ? cloneElement(from, {
        ...from.props,
        onChange: handleFromChange,
        modifiers: {
          ...from.props.modifiers,
          disabled: [
            ...(Array.isArray(from.props.modifiers?.disabled) ? from.props.modifiers.disabled : []),
            ...(disableDatesAfterTo ? [disableDatesAfterTo] : []),
          ].filter(Boolean),
        },
      })
    : from;

  // Clone the to DateInput with additional props
  const enhancedTo = isValidElement<Unsafe_DatePickerProps>(to)
    ? cloneElement(to, {
        ...to.props,
        onChange: handleToChange,
        modifiers: {
          ...to.props.modifiers,
          disabled: [
            ...(Array.isArray(to.props.modifiers?.disabled) ? to.props.modifiers.disabled : []),
            ...(disableDatesBeforeFrom ? [disableDatesBeforeFrom] : []),
          ].filter(Boolean),
        },
      })
    : to;

  return (
    <div className={styles['range-date-pickers']}>
      {enhancedFrom}
      {enhancedTo}
    </div>
  );
};

export default Unsafe_RangeDatePickers;
