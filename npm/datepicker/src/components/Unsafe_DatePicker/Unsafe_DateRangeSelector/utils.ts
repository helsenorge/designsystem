import type { DateRange, DateRangePreset, DateRangePresetsType } from './constants';
import type { HNDesignsystemUnsafe_DateRangeSelector } from '../../../resources/Resources';

import { formatResource } from '@helsenorge/designsystem-react';

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
    Custom: {
      value: 'custom',
      dateRange: {
        from: undefined,
        to: undefined,
      },
    },
  } as const;
})();

/**
 * Map each preset value to its localized display text using the component resources.
 * @param resources - The DateRangeSelector resources for the active language
 * @returns A record mapping preset value to its localized label
 */
export const createPresetLabelMap = (resources: HNDesignsystemUnsafe_DateRangeSelector): Record<string, string> => ({
  [DateRangePresets.LastMonth.value]: resources.lastMonthLabel,
  [DateRangePresets.Last6Months.value]: formatResource(resources.lastMonthsLabel, 6),
  [DateRangePresets.Last12Months.value]: formatResource(resources.lastMonthsLabel, 12),
  [DateRangePresets.NextMonth.value]: resources.nextMonthLabel,
  [DateRangePresets.Next6Months.value]: formatResource(resources.nextMonthsLabel, 6),
  [DateRangePresets.Next12Months.value]: formatResource(resources.nextMonthsLabel, 12),
  [DateRangePresets.Custom.value]: resources.customPeriodLabel,
});

/**
 * Format a custom date range for display in filter labels
 * @param selectedRange - The date range object with from and to dates
 * @param locale - The locale for date formatting (default: 'nb-NO')
 * @returns Formatted date range string, e.g. "01.01.2026-31.12.2026"
 */
export const formatDateRange = (selectedRange: DateRange, locale: string = 'nb-NO'): string => {
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

/**
 * Resolve the display label for a `DateRangePreset`, e.g. for filter chips/links.
 * Returns an empty string when there is nothing meaningful to show.
 * @param preset - The selected preset, or undefined when nothing is selected
 * @param presetLabels - Map of preset value to localized label (e.g. from `createPresetLabelMap`)
 * @param locale - The locale for custom date range formatting (default: 'nb-NO')
 * @returns The localized label for the preset, or a formatted date range for custom selections
 */
export const getSelectedRangeLabel = (
  preset: DateRangePreset | undefined,
  presetLabels?: Record<string, string>,
  locale?: string
): string => {
  if (!preset) {
    return '';
  }
  if (preset.value === DateRangePresets.Custom.value) {
    return preset.dateRange.from || preset.dateRange.to ? formatDateRange(preset.dateRange, locale) : '';
  }
  return preset.displayText ?? presetLabels?.[preset.value] ?? preset.value;
};
