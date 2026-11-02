import { formatISO, isValid } from 'date-fns';

import type { DatePickerProps } from './DatePicker';

import DatePicker from './DatePicker';

export interface ISODateInputProps extends Omit<DatePickerProps, 'value' | 'onChange'> {
  /** Currently given date, given as ISO string  */
  value?: string;
  /** Callback for change in the given date as ISO string */
  onChange?: (dateValue: string) => void;
}

const ISODatePicker = ({ value, onChange, ...baseDateInputProps }: ISODateInputProps): React.ReactNode => {
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

  const handleDateChange = (newDate: Date | null): void => {
    onChange?.(dateToIso(newDate ?? undefined));
  };

  return <DatePicker {...baseDateInputProps} value={isoToDate(value)} onChange={handleDateChange} />;
};

export default ISODatePicker;
