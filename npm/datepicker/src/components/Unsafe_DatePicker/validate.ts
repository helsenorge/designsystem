import { isBefore, startOfDay } from 'date-fns';

// Validate that the range is valid (from date is before or equal to to date)
export const isValidRange = (fromValue: Date | undefined, toValue: Date | undefined): boolean => {
  if (!fromValue || !toValue) {
    return true; // If either date is missing, we don't show validation error
  }
  // Normalize to start of day to compare only dates, not times
  // @todo: expand this with time
  const normalizedFrom = startOfDay(fromValue);
  const normalizedTo = startOfDay(toValue);
  return !isBefore(normalizedTo, normalizedFrom);
};
