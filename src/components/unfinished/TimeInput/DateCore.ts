import DateTimeConstants from '../../../constants/datetime';
import * as moment from 'moment';

export function parseDate(dateString: string): Date {
  return new Date(dateString);
}

export function getHoursFromTimeString(timeString: string | undefined): string {
  if (!timeString || timeString === 'undefined') {
    return '';
  }
  return timeString.split(DateTimeConstants.TIME_SEPARATOR)[0];
}

export function getMinutesFromTimeString(timeString: string | undefined): string {
  if (!timeString || timeString === 'undefined') {
    return '';
  }
  return timeString.split(DateTimeConstants.TIME_SEPARATOR)[1];
}

export function buildNewDate(date: Date | undefined, timeString: string | undefined): Date | undefined {
  const hours = getHoursFromTimeString(timeString);
  const minutes = getMinutesFromTimeString(timeString);
  if (!hours || !minutes || !date) {
    return;
  }
  try {
    const momentDate = moment(date)
      .hours(parseInt(hours, 10))
      .minutes(parseInt(minutes, 10));
    return momentDate.toDate();
  } catch (e) {
    return undefined;
  }
}
