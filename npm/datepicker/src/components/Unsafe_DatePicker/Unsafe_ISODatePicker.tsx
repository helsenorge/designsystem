import { formatISO, isValid } from 'date-fns';

import type { Unsafe_DatePickerProps } from './Unsafe_DatePicker';

import Unsafe_DatePicker from './Unsafe_DatePicker';

export interface ISODateInputProps extends Omit<Unsafe_DatePickerProps, 'value' | 'onChange'> {
  /** Currently given date, given as ISO string  */
  value?: string;
  /** Callback for change in the given date as ISO string */
  onChange?: (dateValue: string) => void;
}

const Unsafe_ISODatePicker = ({ value, onChange, ...baseDateInputProps }: ISODateInputProps): React.ReactNode => {
  const isoToDate = (iso: string | undefined): Date | undefined => {
    if (!iso) {
      return undefined;
    }

    const date = new Date(iso);

    if (!isValid(date)) {
      return undefined;
    }
    return date;
  };

  const dateToIso = (date: Date | undefined): string => {
    if (!isValid(date) || !date) {
      return '';
    }
    return formatISO(date, { representation: 'date' });
  };

  const handleDateChange = (newDate: Date | undefined): void => {
    onChange?.(dateToIso(newDate));
  };

  return <Unsafe_DatePicker {...baseDateInputProps} value={isoToDate(value)} onChange={handleDateChange} />;
};

export default Unsafe_ISODatePicker;
