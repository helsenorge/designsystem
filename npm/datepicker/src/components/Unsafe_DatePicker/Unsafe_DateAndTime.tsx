import { useEffect, useRef, useState } from 'react';

import { isValid } from 'date-fns';

import ErrorWrapper from '@helsenorge/designsystem-react/components/ErrorWrapper';

import Unsafe_TimeInput, { type Unsafe_TimeInputProps } from './TimeInput/Unsafe_TimeInput';
import Unsafe_DatePicker, { type Unsafe_DatePickerProps } from './Unsafe_DatePicker';

import styles from './Unsafe_DateAndTime.module.scss';

export interface Unsafe_DateAndTimeProps {
  /** Currently given date */
  value?: Date;
  /** Callback for change on the given date */
  onChange?: (value: Date | undefined) => void;
  /** Legend for labelling both fields */
  legend?: React.ReactNode;
  /** Errortext for validation errors */
  errorText?: string;
  datepickerProps?: Unsafe_DatePickerProps;
  timeInputProps?: Unsafe_TimeInputProps;
}

const toTimeString = (date: Date | undefined): string | undefined => {
  if (!date || !isValid(date)) {
    return undefined;
  }
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
};

const mergeDateAndTime = (date: Date | undefined, time: string | undefined): Date | undefined => {
  if (!date || !isValid(date)) {
    return undefined;
  }

  const merged = new Date(date);

  if (!time) {
    // If time is cleared, reset to 00:00
    merged.setHours(0, 0, 0, 0);
    return merged;
  }

  const [hoursStr, minutesStr] = time.split(':');
  const hours = parseInt(hoursStr, 10);
  const minutes = parseInt(minutesStr, 10);

  if (isNaN(hours) || isNaN(minutes)) {
    // If time is invalid, reset to 00:00
    merged.setHours(0, 0, 0, 0);
    return merged;
  }

  merged.setHours(hours, minutes, 0, 0);
  return merged;
};

const Unsafe_DateAndTime = ({
  value,
  onChange,
  legend,
  errorText,
  datepickerProps,
  timeInputProps,
}: Unsafe_DateAndTimeProps): React.ReactNode => {
  // Date is fully controlled from value prop
  const internalDate = value;

  // Helper to check if the value has a meaningful time (not just default 00:00)
  const hasMeaningfulTime = (date: Date | undefined): boolean => {
    if (!date) {
      return false;
    }
    return date.getHours() !== 0 || date.getMinutes() !== 0;
  };

  // Time needs internal state to allow typing without padding interfering
  // Only initialize with time if the value has a non-zero time
  const [internalTime, setInternalTime] = useState<string | undefined>(hasMeaningfulTime(value) ? toTimeString(value) : undefined);

  // Track if we're currently typing in the time field
  const isTypingTimeRef = useRef(false);
  // Track if the user has explicitly entered a time (vs it being auto-filled)
  const hasUserTimeRef = useRef(hasMeaningfulTime(value));

  // Sync time from value prop when it changes externally (not from our own typing)
  useEffect(() => {
    if (!isTypingTimeRef.current && hasUserTimeRef.current) {
      // Only extract time from value if user has explicitly set a time
      // This prevents "00:00" from appearing when user only selects a date
      const newTimeString = toTimeString(value);
      // Also check if the new time is meaningful (not 00:00)
      if (hasMeaningfulTime(value)) {
        setInternalTime(newTimeString);
      }
    }
    isTypingTimeRef.current = false;
  }, [value]);

  const handleDateChange = (newDate: Date | undefined): void => {
    // Don't update hasUserTimeRef here - keep time empty if user hasn't entered one
    // Merge the new date with the current time string (from state, not value)
    // If time is undefined, the merged date will have 00:00 but we won't display it
    const merged = mergeDateAndTime(newDate, internalTime);
    onChange?.(merged);
  };

  const handleTimeChange = (newTime: string | undefined): void => {
    // Mark that user has entered a time
    hasUserTimeRef.current = !!newTime; // Only mark as true if there's actually a time value
    // Mark that we're typing, so the useEffect doesn't overwrite our input
    isTypingTimeRef.current = true;
    // Update internal time state immediately to allow free typing
    setInternalTime(newTime);
    // Merge the new time with the existing date from value prop
    const merged = mergeDateAndTime(value, newTime);
    onChange?.(merged);
  };

  return (
    <ErrorWrapper errorText={errorText}>
      <fieldset className={styles['date-and-time--fieldset']}>
        {legend}
        <div className={styles['date-and-time__fields']}>
          <Unsafe_DatePicker {...datepickerProps} value={internalDate} onChange={handleDateChange} />
          <Unsafe_TimeInput {...timeInputProps} value={internalTime} onChange={handleTimeChange} />
        </div>
      </fieldset>
    </ErrorWrapper>
  );
};

export default Unsafe_DateAndTime;
