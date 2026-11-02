import { isAfter, isBefore } from 'date-fns';

// Minimal matcher logic for react-day-picker Matcher objects
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function matchesDayObjectMatcher(date: Date, matcher: Record<string, any>): boolean {
  // DateRange: { from: Date, to: Date }
  if ('from' in matcher && 'to' in matcher) {
    return (matcher.from ? !isBefore(date, matcher.from) : true) && (matcher.to ? !isAfter(date, matcher.to) : true);
  }
  // DateBefore: { before: Date }
  if ('before' in matcher) {
    return isBefore(date, matcher.before);
  }
  // DateAfter: { after: Date }
  if ('after' in matcher) {
    return isAfter(date, matcher.after);
  }
  // DayOfWeek: { dayOfWeek: number | number[] }
  if ('dayOfWeek' in matcher) {
    if (Array.isArray(matcher.dayOfWeek)) {
      return matcher.dayOfWeek.includes(date.getDay());
    }
    return date.getDay() === matcher.dayOfWeek;
  }
  return false;
}
