import {parseDate, getHoursFromTimeString, getMinutesFromTimeString, buildNewDate} from './date-core';
import * as moment from 'moment';

describe('parseDate', () => {
  it('should return date', () => {
    const d = parseDate('2017-05-18T05:28:45Z');
    expect(d).toBeDefined();
    expect(d instanceof Date).toEqual(true);
  });
});

describe('getHoursFromTimeString', () => {
  it('should not fail on empty input', () => {
    expect(getHoursFromTimeString('')).toEqual('');
  });

  it('should return correct hour', () => {
    expect(getHoursFromTimeString('05:15')).toEqual('05');
  });
});

describe('getMinutesFromTimeString', () => {
  it('should not fail on empty input', () => {
    expect(getMinutesFromTimeString('')).toEqual('');
  });

  it('should return correct minute', () => {
    expect(getMinutesFromTimeString('05:15')).toEqual('15');
  });
});

describe('buildNewDate', () => {
  it('should return new date', () => {
    const d = parseDate('2017-05-18T05:28:45Z');
    const newDate = buildNewDate(d, '05:15');
    expect(newDate).not.toBeNull();

    if (newDate) {
      expect(moment(d).isSame(newDate, 'day')).toBeTruthy();
      expect(newDate.getHours()).toEqual(5);
      expect(newDate.getMinutes()).toEqual(15);
    }
  });
});
