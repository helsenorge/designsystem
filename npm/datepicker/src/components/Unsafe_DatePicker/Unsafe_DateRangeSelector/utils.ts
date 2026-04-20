import type { DateRangePresetsType } from './constants';

export const DateRangePresets = ((): DateRangePresetsType => {
  const now = new Date();
  const today = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const addMonths = (date: Date, months: number): Date => {
    const result = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + months, date.getUTCDate()));
    return result;
  };
  const todaysYear = today.getUTCFullYear();
  return {
    LastMonth: {
      value: 'lastMonth',
      dateRange: {
        from: addMonths(today, -1),
        to: today,
      },
    },
    Last6Months: {
      value: 'last6Months',
      dateRange: {
        from: addMonths(today, -6),
        to: today,
      },
    },
    Last12Months: {
      value: 'last12Months',
      dateRange: {
        from: addMonths(today, -12),
        to: today,
      },
    },
    FullYear: {
      value: 'fullYear',
      displayText: todaysYear.toString(),
      dateRange: {
        from: new Date(Date.UTC(todaysYear, 0, 1)),
        to: new Date(Date.UTC(todaysYear, 11, 31)),
      },
    },
    NextMonth: {
      value: 'nextMonth',
      dateRange: {
        from: today,
        to: addMonths(today, 1),
      },
    },
    Next6Months: {
      value: 'next6Months',
      dateRange: {
        from: today,
        to: addMonths(today, 6),
      },
    },
    Next12Months: {
      value: 'next12Months',
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
    return `${formatDate(selectedRange.from)}-`;
  }
  if (selectedRange.to) {
    return `-${formatDate(selectedRange.to)}`;
  }
  return 'Egendefinert periode';
};
