import { useRef, useState } from 'react';

import { isValid } from 'date-fns';

import ErrorWrapper from '@helsenorge/designsystem-react/components/ErrorWrapper';

import Unsafe_TimeInput, { type Unsafe_TimeInputProps } from './TimeInput/Unsafe_TimeInput';
import Unsafe_DatePicker, { type Unsafe_DatePickerProps } from './Unsafe_DatePicker';

import styles from './Unsafe_DateAndTime.module.scss';

export interface Unsafe_DateAndTimeProps {
  /** Currently given date. `null` and `undefined` are both treated as "no value". */
  value?: Date | null;
  /** Callback for change on the given date. Emits `null` when the field is cleared. */
  onChange?: (value: Date | null) => void;
  /** Legend for labelling both fields */
  legend?: React.ReactNode;
  /** Errortext for validation errors */
  errorText?: string;
  /** Props sent to the DatePicker */
  datepickerProps?: Omit<Unsafe_DatePickerProps, 'value' | 'onChange'>;
  /** Props sent to TimeInput */
  timeInputProps?: Omit<Unsafe_TimeInputProps, 'value' | 'onChange'>;
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
  const hours = hoursStr ? parseInt(hoursStr, 10) : 0;
  const minutes = minutesStr ? parseInt(minutesStr, 10) : 0;

  // If either part is invalid (but not just empty), reset to 00:00
  if ((hoursStr && isNaN(hours)) || (minutesStr && isNaN(minutes))) {
    merged.setHours(0, 0, 0, 0);
    return merged;
  }

  // Validate ranges
  if (hoursStr && (hours < 0 || hours >= 24)) {
    merged.setHours(0, 0, 0, 0);
    return merged;
  }
  if (minutesStr && (minutes < 0 || minutes >= 60)) {
    merged.setHours(0, 0, 0, 0);
    return merged;
  }

  merged.setHours(hours, minutes, 0, 0);
  return merged;
};

const Unsafe_DateAndTime = ({
  value: valueProp,
  onChange,
  legend,
  errorText,
  datepickerProps,
  timeInputProps,
}: Unsafe_DateAndTimeProps): React.ReactNode => {
  // Normalize null and undefined to a single internal representation.
  const value = valueProp ?? undefined;
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

  // Track the last value we emitted so we can distinguish our own updates from external ones
  const lastSentValueTime = useRef<number | undefined>(value?.getTime());

  // Sync internal time when external value changes (works for both controlled and uncontrolled use).
  // Skip sync when the change originated from our own onChange — otherwise partial typed input gets reformatted mid-edit.
  const [prevValueTime, setPrevValueTime] = useState<number | undefined>(value?.getTime());
  const currentValueTime = value?.getTime();
  if (currentValueTime !== prevValueTime) {
    setPrevValueTime(currentValueTime);
    if (currentValueTime !== lastSentValueTime.current) {
      setInternalTime(hasMeaningfulTime(value) ? toTimeString(value) : undefined);
      lastSentValueTime.current = currentValueTime;
    }
  }

  const handleDateChange = (newDate: Date | null): void => {
    const merged = mergeDateAndTime(newDate ?? undefined, internalTime);
    lastSentValueTime.current = merged?.getTime();
    onChange?.(merged ?? null);
  };

  const handleTimeChange = (newTime: string | undefined): void => {
    // Update internal time state immediately to allow free typing
    setInternalTime(newTime);

    // Merge the new time with the existing date from value prop
    const merged = mergeDateAndTime(value, newTime);
    lastSentValueTime.current = merged?.getTime();
    onChange?.(merged ?? null);
  };

  return (
    <ErrorWrapper errorText={errorText}>
      <fieldset className={styles['date-and-time--fieldset']}>
        {legend}
        <div className={styles['date-and-time__fields']}>
          <div className={styles['date-and-time__date-field']}>
            <Unsafe_DatePicker {...datepickerProps} value={internalDate} onChange={handleDateChange} />
          </div>
          <div className={styles['date-and-time__time-field']}>
            <Unsafe_TimeInput {...timeInputProps} value={internalTime} onChange={handleTimeChange} />
          </div>
        </div>
      </fieldset>
    </ErrorWrapper>
  );
};

export default Unsafe_DateAndTime;
