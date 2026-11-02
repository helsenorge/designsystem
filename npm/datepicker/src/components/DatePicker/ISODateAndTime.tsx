import { formatISO, isValid } from 'date-fns';

import type { DateAndTimeProps } from './DateAndTime';

import DateAndTime from './DateAndTime';

export interface ISODateAndTimeProps extends Omit<DateAndTimeProps, 'value' | 'onChange'> {
  /** Currently given date and time, given as ISO string */
  value?: string;
  /** Callback for change in the given date and time as ISO string. Emits an empty string when the field is cleared. */
  onChange?: (dateTimeValue: string) => void;
}

const ISODateAndTime = ({ value, onChange, ...baseDateAndTimeProps }: ISODateAndTimeProps): React.ReactNode => {
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
    if (!date || !isValid(date)) {
      return '';
    }
    return formatISO(date);
  };

  const handleChange = (newDate: Date | null): void => {
    onChange?.(dateToIso(newDate ?? undefined));
  };

  return <DateAndTime {...baseDateAndTimeProps} value={isoToDate(value)} onChange={handleChange} />;
};

export default ISODateAndTime;
