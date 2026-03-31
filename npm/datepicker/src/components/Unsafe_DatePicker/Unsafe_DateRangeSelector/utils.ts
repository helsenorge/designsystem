import type { DateRangePresetsType } from './constants';

export const DateRangePresets = ((): DateRangePresetsType => {
  const today = new Date();
  const safeDay = (year: number, month: number, day: number): number => Math.min(day, new Date(year, month + 1, 0).getDate());
  const addMonths = (date: Date, months: number): Date => {
    const y = date.getFullYear();
    const m = date.getMonth() + months;
    const d = date.getDate();
    const newY = y + Math.floor(m / 12);
    const newM = ((m % 12) + 12) % 12;
    return new Date(newY, newM, safeDay(newY, newM, d));
  };
  const todaysYear = today.getFullYear();
  return {
    LastMonth: {
      value: 'lastMonth',
      displayText: 'Siste måned',
      dateRange: {
        from: addMonths(today, -1),
        to: today,
      },
    },
    Last6Months: {
      value: 'last6Months',
      displayText: 'Siste 6 måneder',
      dateRange: {
        from: addMonths(today, -6),
        to: today,
      },
    },
    Last12Months: {
      value: 'last12Months',
      displayText: 'Siste 12 måneder',
      dateRange: {
        from: addMonths(today, -12),
        to: today,
      },
    },
    FullYear: {
      value: 'fullYear',
      displayText: todaysYear.toString(),
      dateRange: {
        from: new Date(todaysYear, 0, 1),
        to: new Date(todaysYear, 11, 31),
      },
    },
    NextMonth: {
      value: 'nextMonth',
      displayText: 'Neste måned',
      dateRange: {
        from: today,
        to: addMonths(today, 1),
      },
    },
    Next6Months: {
      value: 'next6Months',
      displayText: 'Neste 6 måneder',
      dateRange: {
        from: today,
        to: addMonths(today, 6),
      },
    },
    Next12Months: {
      value: 'next12Months',
      displayText: 'Neste 12 måneder',
      dateRange: {
        from: today,
        to: addMonths(today, 12),
      },
    },
  } as const;
})();

/**
 * Format a custom date range for display in filter labels
 * @param selectedRange - The date range object with from and to dates
 * @param locale - The locale for date formatting (default: 'nb-NO')
 * @returns Formatted date range string, e.g. "01.01.2026-31.12.2026"
 */
export const getDateRangeLabel = (selectedRange: { from: Date; to: Date }, locale: string = 'nb-NO'): string => {
  const formatDate = (date: Date | undefined): string =>
    date ? date.toLocaleDateString(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }) : '';

  if (selectedRange.from && selectedRange.to) {
    return `${formatDate(selectedRange.from)}-${formatDate(selectedRange.to)}`;
  }
  if (selectedRange.from) {
    return `${formatDate(selectedRange.from)}->`;
  }
  if (selectedRange.to) {
    return `<-${formatDate(selectedRange.to)}`;
  }
  return 'Egendefinert periode';
};
