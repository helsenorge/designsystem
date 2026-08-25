import { formatISO, isValid } from 'date-fns';

import type { Unsafe_DateAndTimeProps } from './Unsafe_DateAndTime';

import Unsafe_DateAndTime from './Unsafe_DateAndTime';

export interface ISODateAndTimeProps extends Omit<Unsafe_DateAndTimeProps, 'value' | 'onChange'> {
  /** Currently given date and time, given as ISO string */
  value?: string;
  /** Callback for change in the given date and time as ISO string. Emits an empty string when the field is cleared. */
  onChange?: (dateTimeValue: string) => void;
}

const Unsafe_ISODateAndTime = ({ value, onChange, ...baseDateAndTimeProps }: ISODateAndTimeProps): React.ReactNode => {
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

  return <Unsafe_DateAndTime {...baseDateAndTimeProps} value={isoToDate(value)} onChange={handleChange} />;
};

export default Unsafe_ISODateAndTime;
