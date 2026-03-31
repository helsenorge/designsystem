import type { DateRangePreset } from './utils';

import type { RadioButtonProps } from '@helsenorge/designsystem-react/components/RadioButton';

export interface DateRange {
  from: Date;
  to: Date;
}

export type ReadableRangeOption = DateRangePreset & {
  /** Optional extra props for the radiobutton */
  radioButtonProps?: Partial<RadioButtonProps>;
};
