import { useState, useRef } from 'react';

import type { Unsafe_DatePickerProps } from '../Unsafe_DatePicker';
import type { DateRangePreset } from './utils';

import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';
import type { RadioButtonProps } from '@helsenorge/designsystem-react/components/RadioButton';
import RadioButton from '@helsenorge/designsystem-react/components/RadioButton';

import Unsafe_DatePicker from '../Unsafe_DatePicker';
import Unsafe_RangeDatePickers from '../Unsafe_RangeDatePickers';

export interface DateRange {
  from: Date;
  to: Date;
}

export type ReadableRangeOption = DateRangePreset & {
  /** Optional extra props for the radiobutton */
  radioButtonProps?: Partial<RadioButtonProps>;
};

export interface Unsafe_DateRangeSelectorProps {
  /** Name for the radiobuttongroup */
  name: string;
  /** Options for radiobuttongroup */
  options: ReadableRangeOption[];
  /** Overrides the text for the custom value radiobutton option */
  customValueDisplayText?: string;
  /** Callback when the date range changes with validation result */
  onRangeChange?: (from: Date | undefined, to: Date | undefined, isValid: boolean) => void;
  /** Extra props for the custom value radiobutton option */
  customRadioButtonProps?: Partial<RadioButtonProps>;
  /** Extra props for the 'from' date picker */
  datePickerPropsFrom?: Partial<Unsafe_DatePickerProps>;
  /** Extra props for the 'to' date picker */
  datePickerPropsTo?: Partial<Unsafe_DatePickerProps>;
  /** Extra props for specific radio buttons by value */
  radioButtonPropsByValue?: Record<string, Partial<RadioButtonProps>>;
}

const Unsafe_DateRangeSelector: React.FC<Unsafe_DateRangeSelectorProps> = props => {
  const [selected, setSelected] = useState<string>('');
  const [customStartDate, setCustomStartDate] = useState<Date | undefined>(undefined);
  const [customEndDate, setCustomEndDate] = useState<Date | undefined>(undefined);

  // Ref to track how many picker changes to ignore after preset selection
  const ignorePickerChanges = useRef(0);

  const showCustom = selected === 'custom';
  const pickerStart = customStartDate;
  const pickerEnd = customEndDate;

  return (
    <div>
      {props.options.map(option => {
        return (
          <RadioButton
            name={props.name}
            key={option.value}
            value={option.value}
            checked={selected === option.value}
            label={<Label labelTexts={[{ text: option.displayText, type: 'subdued' }]} />}
            {...option.radioButtonProps}
            onChange={e => {
              setSelected(option.value);
              if (option.value !== 'custom' && option.dateRange && typeof option.dateRange === 'object') {
                const range = option.dateRange as { from?: Date; to?: Date };
                ignorePickerChanges.current = 2;
                setCustomStartDate(range.from);
                setCustomEndDate(range.to);
              } else {
                setCustomStartDate(undefined);
                setCustomEndDate(undefined);
              }
              if (option.radioButtonProps?.onChange) {
                option.radioButtonProps?.onChange(e);
              }
            }}
          />
        );
      })}
      <RadioButton
        name={props.name}
        value="custom"
        checked={showCustom}
        label={<Label labelTexts={[{ text: props.customValueDisplayText ?? 'Egendefinert periode/dato', type: 'subdued' }]} />}
        {...props.customRadioButtonProps}
        onChange={e => {
          setSelected('custom');
          setCustomStartDate(undefined);
          setCustomEndDate(undefined);
          if (props.customRadioButtonProps?.onChange) {
            props.customRadioButtonProps?.onChange(e);
          }
        }}
      />
      <Unsafe_RangeDatePickers
        from={
          <Unsafe_DatePicker
            label={
              <Label
                labelTexts={[{ text: 'Startdato' }]}
                sublabel={<Sublabel sublabelTexts={[{ text: 'dd.mm.yyyy', type: 'subdued' }]} id={'sublabel-startdato'} />}
              />
            }
            aria-describedby="sublabel-startdato"
            captionLayout="dropdown"
            showGoToTodayButton
            value={pickerStart}
            {...props.datePickerPropsFrom}
            onChange={date => {
              if (ignorePickerChanges.current > 0) {
                ignorePickerChanges.current--;
              } else if (selected !== 'custom') {
                setSelected('custom');
              }
              setCustomStartDate(date);
            }}
          />
        }
        to={
          <Unsafe_DatePicker
            label={
              <Label
                labelTexts={[{ text: 'Sluttdato' }]}
                sublabel={<Sublabel sublabelTexts={[{ text: 'dd.mm.yyyy', type: 'subdued' }]} id={'sublabel-sluttdato'} />}
              />
            }
            aria-describedby="sublabel-sluttdato"
            captionLayout="dropdown"
            showGoToTodayButton
            value={pickerEnd}
            {...props.datePickerPropsTo}
            onChange={date => {
              if (ignorePickerChanges.current > 0) {
                ignorePickerChanges.current--;
              } else if (selected !== 'custom') {
                setSelected('custom');
              }
              setCustomEndDate(date);
            }}
          />
        }
      />
    </div>
  );
};

export default Unsafe_DateRangeSelector;
