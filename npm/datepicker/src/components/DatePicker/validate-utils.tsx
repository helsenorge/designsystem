import { isWithinInterval, isSameDay, parse } from 'date-fns';

/** react-hook-form fromDate and toDate validation */
export const validateMinMaxDate = (date: Date, minDate: Date, maxDate: Date, errorMessage: string): string | true => {
  const newDate = parse(date.toString(), 'dd.MM.yyyy', new Date());
  if (isWithinInterval(newDate, { start: minDate.setDate(minDate.getDate() - 1), end: maxDate })) {
    return true;
  }

  return errorMessage;
};

/** react-hook-form fromDate and toDate validation */
export const validateDisabledDates = (date: Date, disabledDates: Date[], errorMessage: string): string | true => {
  const newDate = parse(date.toString(), 'dd.MM.yyyy', new Date());
  if (!disabledDates.some(d => isSameDay(d, newDate))) {
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
