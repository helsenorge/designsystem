import { isWithinInterval, isAfter, isBefore, isSameDay, parse, isValid } from 'date-fns';

export const parseInputDate = (dateString: string): Date | null => {
  const possibleFormats = ['yyyy-MM-dd', 'dd.MM.yyyy'];

  for (const format of possibleFormats) {
    const parsedDate = parse(dateString, format, new Date());
    if (isValid(parsedDate)) {
      return parsedDate;
    }
  }

  return null;
};

export const isValidDate = (dateString: string): boolean => {
  const date = new Date(dateString);
  return date instanceof Date && !isNaN(date.getTime());
};

/** react-hook-form fromDate and toDate validation */
export const validateMinMaxDate = (
  date: string,
  outsideRangeErrorMessage: string,
  invalidFormatErrorMessage?: string,
  minDate?: Date,
  maxDate?: Date
): string | true => {
  const formattedDate = parseInputDate(date);
  const hasMinDate = typeof minDate !== 'undefined';
  const hasMaxDate = typeof maxDate !== 'undefined';
  if (!formattedDate || (hasMinDate && !isValid(minDate)) || (hasMaxDate && !isValid(maxDate))) {
    return invalidFormatErrorMessage || 'Invalid date format';
  }

  if (hasMinDate && !hasMaxDate && (isSameDay(formattedDate, minDate) || isAfter(formattedDate, minDate))) return true;
  else if (hasMaxDate && !hasMinDate && (isSameDay(formattedDate, maxDate) || isBefore(formattedDate, maxDate))) return true;
  else if (
    hasMinDate &&
    hasMaxDate &&
    (isSameDay(formattedDate, minDate) ||
      isSameDay(formattedDate, maxDate) ||
      isWithinInterval(formattedDate, { start: minDate, end: maxDate }))
  ) {
    return true;
  }

  return outsideRangeErrorMessage;
};

/** react-hook-form fromDate and toDate validation */
export const validateDisabledDates = (
  date: string,
  disabledDates: Date[],
  isDisabledErrorMessage: string,
  invalidFormatErrorMessage?: string
): string | true => {
  const formattedDate = parseInputDate(date);
  if (!formattedDate) {
    return invalidFormatErrorMessage || 'Invalid date format';
  }
  if (!disabledDates.some(d => isSameDay(d, formattedDate))) {
    return true;
  }

  return isDisabledErrorMessage;
};

/** react-hook-form fromTime and toTime validation */
export const validateMinTimeMaxTime = (
  time: { hour: number; minute: number },
  errorMessage: string,
  minTime?: { hour: number; minute: number },
  maxTime?: { hour: number; minute: number }
): string | true => {
  const timeParsed = parse((time.hour + ':' + time.minute).toString(), 'HH:mm', new Date());
  const minTimeParsed = parse((minTime?.hour + ':' + minTime?.minute).toString(), 'HH:mm', new Date());
  const maxTimeParsed = parse((maxTime?.hour + ':' + maxTime?.minute).toString(), 'HH:mm', new Date());

  if ((typeof minTime === 'undefined' || timeParsed >= minTimeParsed) && (typeof maxTime === 'undefined' || timeParsed <= maxTimeParsed)) {
    return true;
  }

  return errorMessage;
};
