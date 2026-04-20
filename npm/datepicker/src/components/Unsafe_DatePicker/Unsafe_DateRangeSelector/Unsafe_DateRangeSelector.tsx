import { useEffect, useRef } from 'react';

import type { Unsafe_DatePickerProps } from '../Unsafe_DatePicker';
import type { DateRange, DateRangePreset, ReadableRangeOption } from './constants';

import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';
import type { RadioButtonProps } from '@helsenorge/designsystem-react/components/RadioButton';
import RadioButton from '@helsenorge/designsystem-react/components/RadioButton';

import type { HNDesignsystemUnsafe_DateRangeSelector } from '@helsenorge/datepicker/resources/Resources';
import { formatResource, LanguageLocales, useLanguage } from '@helsenorge/designsystem-react';

import Unsafe_DatePicker from '../Unsafe_DatePicker';
import Unsafe_DateRangePickers from '../Unsafe_DateRangePickers';
import { getResources } from './resourceHelper';

export interface Unsafe_DateRangeSelectorProps {
  /** Name for the radiobuttongroup */
  name: string;
  /** Options for radiobuttongroup */
  options: ReadableRangeOption[];
  /** The currently selected value */
  value: string | undefined;
  /** The currently selected range */
  selectedRange: DateRange;
  /** Callback when the selected value changes */
  onChange?: (value: string) => void;
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
  /** Resources for the component */
  resources?: Partial<HNDesignsystemUnsafe_DateRangeSelector>;
}

const Unsafe_DateRangeSelector: React.FC<Unsafe_DateRangeSelectorProps> = props => {
  const {
    name,
    options,
    value,
    selectedRange,
    onChange,
    onPresetSelected,
    onRangeChange,
    customRadioButtonProps,
    datePickerPropsFrom,
    datePickerPropsTo,
    resources,
  } = props;
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);
  const mergedResources: HNDesignsystemUnsafe_DateRangeSelector & Record<string, string> = {
    ...defaultResources,
    ...resources,
    startDateLabel: datePickerPropsTo?.label?.toString() || resources?.startDateLabel || defaultResources.startDateLabel,
    endDateLabel: datePickerPropsFrom?.label?.toString() || resources?.endDateLabel || defaultResources.endDateLabel,
    lastMonth: resources?.lastMonthLabel || defaultResources.lastMonthLabel,
    last6Months: resources?.lastMonthsLabel || formatResource(defaultResources.lastMonthsLabel, 6),
    last12Months: resources?.lastMonthsLabel || formatResource(defaultResources.lastMonthsLabel, 12),
    nextMonth: resources?.nextMonthLabel || defaultResources.nextMonthLabel,
    next6Months: resources?.nextMonthsLabel || formatResource(defaultResources.nextMonthsLabel, 6),
    next12Months: resources?.nextMonthsLabel || formatResource(defaultResources.nextMonthsLabel, 12),
  };

  const ignorePickerChanges = useRef(2);

  const selected = value ?? '';
  const showCustom = selected === 'custom';

  useEffect(() => {
    ignorePickerChanges.current = 2;
  }, [selectedRange]);

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
            label={<Label labelTexts={[{ text: option.displayText ?? mergedResources[option.value] ?? option.value, type: 'subdued' }]} />}
            {...restExtraProps}
            onChange={e => {
              if (onChange) {
                onChange(option.value);
              }
              if (option.value !== 'custom' && option.dateRange && typeof option.dateRange === 'object') {
                // Set ignore counter so date pickers don't trigger 'custom' selection
                ignorePickerChanges.current = 2;
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
        label={<Label labelTexts={[{ text: mergedResources.customPeriodLabel, type: 'subdued' }]} />}
        {...customRadioButtonProps}
        onChange={e => {
          if (onChange) {
            onChange('custom');
          }
          if (customRadioButtonProps?.onChange) {
            customRadioButtonProps?.onChange(e);
          }
        }}
      />
      <Unsafe_DateRangePickers
        from={
          <Unsafe_DatePicker
            label={
              <Label
                labelTexts={[{ text: mergedResources.startDateLabel }]}
                sublabel={<Sublabel sublabelTexts={[{ text: mergedResources.dateSublabel, type: 'subdued' }]} id={'sublabel-startdato'} />}
              />
            }
            aria-describedby="sublabel-startdato"
            captionLayout="dropdown"
            showGoToTodayButton
            value={selectedRange.from}
            {...datePickerPropsFrom}
            onChange={date => {
              if (ignorePickerChanges.current > 0) {
                ignorePickerChanges.current--;
              } else {
                if (selected !== 'custom' && onChange) {
                  onChange('custom');
                }
                if (onRangeChange) {
                  onRangeChange(date, selectedRange.to);
                }
              }
            }}
          />
        }
        to={
          <Unsafe_DatePicker
            label={
              <Label
                labelTexts={[{ text: mergedResources.endDateLabel }]}
                sublabel={<Sublabel sublabelTexts={[{ text: mergedResources.dateSublabel, type: 'subdued' }]} id={'sublabel-sluttdato'} />}
              />
            }
            aria-describedby="sublabel-sluttdato"
            captionLayout="dropdown"
            showGoToTodayButton
            value={selectedRange.to}
            {...datePickerPropsTo}
            onChange={date => {
              if (ignorePickerChanges.current > 0) {
                ignorePickerChanges.current--;
              } else {
                if (selected !== 'custom' && onChange) {
                  onChange('custom');
                }
                if (onRangeChange) {
                  onRangeChange(selectedRange.from, date);
                }
              }
            }}
          />
        }
      />
    </div>
  );
};

export default Unsafe_DateRangeSelector;
