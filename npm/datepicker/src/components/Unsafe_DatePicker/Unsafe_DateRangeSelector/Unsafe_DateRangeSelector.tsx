import { useState } from 'react';

import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';
import RadioButton from '@helsenorge/designsystem-react/components/RadioButton';

import Unsafe_DatePicker from '../Unsafe_DatePicker';
import Unsafe_RangeDatePickers from '../Unsafe_RangeDatePickers';

export interface ReadableRangeOption {
  value: string;
  displayText: string;
  dateRange: unknown;
}

//@todo: utvide denne til å ta inn ISODatePicker også
export interface Unsafe_DateRangeSelectorProps {
  name: string;
  options: ReadableRangeOption[];
  customValueDisplayText: string;
  /** Callback when the date range changes with validation result */
  onRangeChange?: (from: Date | undefined, to: Date | undefined, isValid: boolean) => void;
}

const Unsafe_DateRangeSelector: React.FC<Unsafe_DateRangeSelectorProps> = props => {
  // Start with nothing selected
  const [selected, setSelected] = useState<string>('');
  const [customStartDate, setCustomStartDate] = useState<Date | undefined>();
  const [customEndDate, setCustomEndDate] = useState<Date | undefined>();

  const showCustom = selected === 'custom';
  const pickerStart = customStartDate;
  const pickerEnd = customEndDate;

  // Helper to check if a preset is selected
  const presetSelected = selected && selected !== 'custom';
  return (
    <div>
      {props.options.map(option => (
        <RadioButton
          name={props.name}
          key={option.value}
          value={option.value}
          checked={selected === option.value}
          onChange={() => {
            setSelected(option.value);
            // Set pickers to preset range when preset is selected
            if (option.value !== 'custom' && option.dateRange && typeof option.dateRange === 'object') {
              const range = option.dateRange as { from?: Date; to?: Date };
              setCustomStartDate(range.from);
              setCustomEndDate(range.to);
            } else {
              setCustomStartDate(undefined);
              setCustomEndDate(undefined);
            }
          }}
          label={<Label labelTexts={[{ text: option.displayText, type: 'subdued' }]} />}
        />
      ))}
      <RadioButton
        name={props.name}
        value="custom"
        checked={showCustom}
        onChange={() => {
          setSelected('custom');
          setCustomStartDate(undefined);
          setCustomEndDate(undefined);
        }}
        label={<Label labelTexts={[{ text: props.customValueDisplayText, type: 'subdued' }]} />}
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
            onChange={date => {
              // Only switch to custom if a preset was selected
              if (presetSelected) {
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
            endMonth={new Date()}
            aria-describedby="sublabel-sluttdato"
            captionLayout="dropdown"
            showGoToTodayButton
            value={pickerEnd}
            onChange={date => {
              // Only switch to custom if a preset was selected
              if (presetSelected) {
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
