import { useState, useRef } from 'react';

import type { Unsafe_DatePickerProps } from '../Unsafe_DatePicker';
import type { ReadableRangeOption } from './constants';
import type { DateRangePreset } from './utils';

import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';
import type { RadioButtonProps } from '@helsenorge/designsystem-react/components/RadioButton';
import RadioButton from '@helsenorge/designsystem-react/components/RadioButton';

import Unsafe_DatePicker from '../Unsafe_DatePicker';
import Unsafe_RangeDatePickers from '../Unsafe_RangeDatePickers';

export interface Unsafe_DateRangeSelectorProps {
  /** Name for the radiobuttongroup */
  name: string;
  /** Options for radiobuttongroup */
  options: ReadableRangeOption[];
  /** The currently selected value */
  value?: string;
  /** Callback when the selected value changes */
  onChange?: (value: string) => void;
  /** Overrides the text for the custom value radiobutton option */
  customValueDisplayText?: string;
  /** Callback when a preset is selected */
  onPresetSelected?: (preset: DateRangePreset) => void;
  /** Callback when the date range changes */
  onRangeChange?: (from: Date | undefined, to: Date | undefined, isValid?: boolean) => void;
  /** Extra props for the custom value radiobutton option */
  customRadioButtonProps?: Partial<RadioButtonProps>;
  /** Extra props for the 'from' date picker */
  datePickerPropsFrom?: Partial<Unsafe_DatePickerProps>;
  /** Extra props for the 'to' date picker */
  datePickerPropsTo?: Partial<Unsafe_DatePickerProps>;
}

const Unsafe_DateRangeSelector: React.FC<Unsafe_DateRangeSelectorProps> = props => {
  const {
    name,
    options,
    value,
    onChange,
    customValueDisplayText,
    onPresetSelected,
    onRangeChange,
    customRadioButtonProps,
    datePickerPropsFrom,
    datePickerPropsTo,
  } = props;
  const [customStartDate, setCustomStartDate] = useState<Date | undefined>(undefined);
  const [customEndDate, setCustomEndDate] = useState<Date | undefined>(undefined);

  // Ref to track how many picker changes to ignore after preset selection
  const ignorePickerChanges = useRef(0);

  const selected = value ?? '';
  const showCustom = selected === 'custom';
  const pickerStart = customStartDate;
  const pickerEnd = customEndDate;

  return (
    <div>
      {options.map(option => {
        const { onChange: extraOnChange, ...restExtraProps } = option.radioButtonProps ?? {};
        return (
          <RadioButton
            name={name}
            key={option.value}
            value={option.value}
            checked={selected === option.value}
            label={<Label labelTexts={[{ text: option.displayText, type: 'subdued' }]} />}
            {...restExtraProps}
            onChange={e => {
              if (onChange) {
                onChange(option.value);
              }
              if (option.value !== 'custom' && option.dateRange && typeof option.dateRange === 'object') {
                const range = option.dateRange as { from?: Date; to?: Date };
                ignorePickerChanges.current = 2;
                setCustomStartDate(range.from);
                setCustomEndDate(range.to);
              } else {
                setCustomStartDate(undefined);
                setCustomEndDate(undefined);
              }
              if (onPresetSelected) {
                onPresetSelected(option);
              }
              if (extraOnChange) {
                extraOnChange(e);
              }
            }}
          />
        );
      })}
      <RadioButton
        name={name}
        value="custom"
        checked={showCustom}
        label={<Label labelTexts={[{ text: customValueDisplayText ?? 'Egendefinert periode/dato', type: 'subdued' }]} />}
        {...customRadioButtonProps}
        onChange={e => {
          if (onChange) {
            onChange('custom');
          }
          setCustomStartDate(undefined);
          setCustomEndDate(undefined);
          if (customRadioButtonProps?.onChange) {
            customRadioButtonProps?.onChange(e);
          }
        }}
      />
      <Unsafe_RangeDatePickers
        onRangeChange={onRangeChange}
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
            {...datePickerPropsFrom}
            onChange={date => {
              if (ignorePickerChanges.current > 0) {
                ignorePickerChanges.current--;
              } else if (selected !== 'custom' && onChange) {
                onChange('custom');
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
            {...datePickerPropsTo}
            onChange={date => {
              if (ignorePickerChanges.current > 0) {
                ignorePickerChanges.current--;
              } else if (selected !== 'custom' && onChange) {
                onChange('custom');
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
