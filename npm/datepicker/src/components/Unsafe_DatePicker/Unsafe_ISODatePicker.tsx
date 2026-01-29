import { useEffect, useState } from 'react';

import { formatISO, isValid } from 'date-fns';

import Unsafe_DatePicker, { Unsafe_DatePickerProps } from './Unsafe_DatePicker';

export interface ISODateInputProps extends Omit<Unsafe_DatePickerProps, 'value' | 'onChange'> {
  /** Currently given date, given as ISO string  */
  value?: string;
  /** Callback for change in the given date as ISO string */
  onChange?: (dateValue: string) => void;
}

const Unsafe_ISODatePicker = ({ value, onChange, ...baseDateInputProps }: ISODateInputProps): JSX.Element => {
  const defaultDate = value ? new Date(value) : undefined;
  const [internalDate, setInternalDate] = useState<Date | undefined>(defaultDate);

  const dateToIso = (date: Date | undefined): string => {
    if (!isValid(date) || !date) {
      return '';
    }
    return formatISO(date, { representation: 'date' });
  };

  const isoToDate = (iso: string): Date | undefined => {
    const date = new Date(iso);
    if (!isValid(date)) {
      return undefined;
    }
    return date;
  };

  useEffect(() => {
    if (value) {
      setInternalDate(isoToDate(value));
    } else {
      setInternalDate(undefined);
    }
  }, [value]);

  useEffect(() => {
    if (!internalDate) {
      onChange?.('');
      return;
    }
    const iso = dateToIso(internalDate);
    onChange?.(iso);
  }, [internalDate]);

  return <Unsafe_DatePicker {...baseDateInputProps} value={internalDate} onChange={setInternalDate} />;
};

export default Unsafe_ISODatePicker;
