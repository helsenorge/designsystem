import { useState, useRef } from 'react';

import type { Unsafe_DatePickerProps } from '../Unsafe_DatePicker';

import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';
import type { RadioButtonProps } from '@helsenorge/designsystem-react/components/RadioButton';
import RadioButton from '@helsenorge/designsystem-react/components/RadioButton';

import Unsafe_DatePicker from '../Unsafe_DatePicker';
import Unsafe_RangeDatePickers from '../Unsafe_RangeDatePickers';

export interface ReadableRangeOption {
  value: string;
  displayText: string;
  dateRange: unknown;
}

export interface Unsafe_DateRangeSelectorProps {
  name: string;
  options: ReadableRangeOption[];
  customValueDisplayText: string;
  /** Callback when the date range changes with validation result */
  onRangeChange?: (from: Date | undefined, to: Date | undefined, isValid: boolean) => void;
  /** Extra props for the 'from' date picker */
  datePickerPropsFrom?: Partial<Unsafe_DatePickerProps>;
  /** Extra props for the 'to' date picker */
  datePickerPropsTo?: Partial<Unsafe_DatePickerProps>;
  /** Extra props for all radio buttons */
  radioButtonProps?: Partial<RadioButtonProps>;
  /** Extra props for specific radio buttons by value */
  radioButtonPropsByValue?: Record<string, Partial<RadioButtonProps>>;
}

const Unsafe_DateRangeSelector: React.FC<Unsafe_DateRangeSelectorProps> = props => {
  // Start with nothing selected
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
        const extraRadioProps = props.radioButtonPropsByValue?.[option.value] || {};
        const { onChange: extraOnChange, ...restExtraProps } = extraRadioProps;
        return (
          <RadioButton
            name={props.name}
            key={option.value}
            value={option.value}
            checked={selected === option.value}
            onChange={e => {
              setSelected(option.value);
              // Set pickers to preset range when preset is selected
              if (option.value !== 'custom' && option.dateRange && typeof option.dateRange === 'object') {
                const range = option.dateRange as { from?: Date; to?: Date };
                ignorePickerChanges.current = 2;
                setCustomStartDate(range.from);
                setCustomEndDate(range.to);
              } else {
                setCustomStartDate(undefined);
                setCustomEndDate(undefined);
              }
              if (extraOnChange) {
                extraOnChange(e);
              }
              if (props.radioButtonProps?.onChange && !extraOnChange) {
                props.radioButtonProps.onChange(e);
              }
            }}
            label={<Label labelTexts={[{ text: option.displayText, type: 'subdued' }]} />}
            {...props.radioButtonProps}
            {...restExtraProps}
          />
        );
      })}
      {((): React.ReactElement => {
        const customExtraProps = props.radioButtonPropsByValue?.custom || {};
        const { onChange: customOnChange, ...restCustomProps } = customExtraProps;
        return (
          <RadioButton
            name={props.name}
            value="custom"
            checked={showCustom}
            onChange={e => {
              setSelected('custom');
              setCustomStartDate(undefined);
              setCustomEndDate(undefined);
              if (customOnChange) {
                customOnChange(e);
              }
              if (props.radioButtonProps?.onChange && !customOnChange) {
                props.radioButtonProps.onChange(e);
              }
            }}
            label={<Label labelTexts={[{ text: props.customValueDisplayText, type: 'subdued' }]} />}
            {...props.radioButtonProps}
            {...restCustomProps}
          />
        );
      })()}
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
            onChange={date => {
              if (ignorePickerChanges.current > 0) {
                ignorePickerChanges.current--;
              } else if (selected !== 'custom') {
                setSelected('custom');
              }
              setCustomStartDate(date);
            }}
            {...props.datePickerPropsFrom}
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
            onChange={date => {
              if (ignorePickerChanges.current > 0) {
                ignorePickerChanges.current--;
              } else if (selected !== 'custom') {
                setSelected('custom');
              }
              setCustomEndDate(date);
            }}
            {...props.datePickerPropsTo}
          />
        }
      />
    </div>
  );
};

export default Unsafe_DateRangeSelector;
