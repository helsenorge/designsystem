import type { RadioProps } from '@helsenorge/designsystem-react/components/Radio';

export interface DateRange {
  from?: Date | null;
  to?: Date | null;
}

export type ReadableRangeOption = DateRangePreset & {
  /** Optional extra props for the radiobutton */
  radioButtonProps?: Partial<RadioProps>;
};

export type DateRangePreset = {
  readonly value: string;
  readonly displayText?: string;
  readonly dateRange: { readonly from?: Date; readonly to?: Date };
};

export type DateRangePresetsType = {
  readonly [key: string]: DateRangePreset;
};
