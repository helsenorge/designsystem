export type DateRangePreset = {
  readonly value: string;
  readonly displayText: string;
  readonly dateRange: { readonly from: Date; readonly to: Date };
};

export type DateRangePresetsType = {
  readonly [key: string]: DateRangePreset;
};

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
      displayText: today.getFullYear().toString(),
      dateRange: {
        from: new Date(today.getFullYear(), 0, 1),
        to: new Date(today.getFullYear(), 11, 31),
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
