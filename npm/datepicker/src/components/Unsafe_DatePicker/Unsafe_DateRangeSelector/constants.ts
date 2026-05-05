import type { RadioButtonProps } from '@helsenorge/designsystem-react/components/RadioButton';

export interface DateRange {
  from: Date;
  to: Date;
}

export type ReadableRangeOption = DateRangePreset & {
  /** Optional extra props for the radiobutton */
  radioButtonProps?: Partial<RadioButtonProps>;
};

export type DateRangePreset = {
  readonly value: string;
  readonly displayText?: string;
  readonly dateRange: { readonly from: Date; readonly to: Date };
};

export type DateRangePresetsType = {
  readonly [key: string]: DateRangePreset;
};
