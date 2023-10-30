import { isWithinInterval, isSameDay, parse, isValid } from 'date-fns';

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

/** react-hook-form fromDate and toDate validation */
export const validateMinMaxDate = (date: string, minDate: Date, maxDate: Date, errorMessage: string): string | true => {
  const formattedDate = parseInputDate(date);
  if (!formattedDate || !isValid(minDate) || !isValid(maxDate)) {
    return 'Invalid date format';
  }

  if (isWithinInterval(formattedDate, { start: minDate, end: maxDate })) {
    return true;
  }

  return errorMessage;
};

/** react-hook-form fromDate and toDate validation */
export const validateDisabledDates = (date: string, disabledDates: Date[], errorMessage: string): string | true => {
  const formattedDate = parseInputDate(date);
  if (!formattedDate) {
    return 'Invalid date format';
  }
  if (!disabledDates.some(d => isSameDay(d, formattedDate))) {
    return true;
  }

  return errorMessage;
};

/** react-hook-form fromTime and toTime validation */
export const validateMinTimeMaxTime = (
  time: { hour: number; minute: number },
  minTime: { hour: number; minute: number },
  maxTime: { hour: number; minute: number },
  errorMessage: string
): string | true => {
  const timeParsed = parse((time.hour + ':' + time.minute).toString(), 'HH:mm', new Date());
  const minTimeParsed = parse((minTime.hour + ':' + minTime.minute).toString(), 'HH:mm', new Date());
  const maxTimeParsed = parse((maxTime.hour + ':' + maxTime.minute).toString(), 'HH:mm', new Date());

  if (timeParsed >= minTimeParsed && timeParsed <= maxTimeParsed) {
    return true;
  }

  return errorMessage;
};
