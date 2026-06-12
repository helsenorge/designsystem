import { useState } from 'react';

import type { Unsafe_DatePickerProps } from '../Unsafe_DatePicker';
import type { DateRangePreset, ReadableRangeOption } from './constants';
import type { HNDesignsystemUnsafe_DateRangeSelector } from '../../../resources/Resources';

import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';
import type { RadioButtonProps } from '@helsenorge/designsystem-react/components/RadioButton';
import RadioButton from '@helsenorge/designsystem-react/components/RadioButton';

import { LanguageLocales, useLanguage } from '@helsenorge/designsystem-react';

import Unsafe_DatePicker from '../Unsafe_DatePicker';
import Unsafe_DateRangePickers from '../Unsafe_DateRangePickers';
import { getResources } from './resourceHelper';
import { DateRangePresets, createPresetLabelMap } from './utils';

import styles from './styles.module.scss';

export interface Unsafe_DateRangeSelectorProps {
  /** Name for the radiobuttongroup */
  name: string;
  /** Options for radiobuttongroup */
  options: ReadableRangeOption[];
  /** The currently selected value */
  value?: DateRangePreset;
  /** Called with the new value, or undefined when the selection is empty (custom option with no dates). */
  onChange?: (value?: DateRangePreset) => void;
  /** Optional extra props for the built-in custom radio option */
  customRadioButtonProps?: Omit<RadioButtonProps, 'checked' | 'onChange' | 'value' | 'label'>;
  /** Extra props for the 'from' date picker */
  datePickerPropsFrom?: Omit<Unsafe_DatePickerProps, 'value' | 'onChange'>;
  /** Extra props for the 'to' date picker */
  datePickerPropsTo?: Omit<Unsafe_DatePickerProps, 'value' | 'onChange'>;
  /** Resources for the component */
  resources?: Partial<HNDesignsystemUnsafe_DateRangeSelector>;
}

const Unsafe_DateRangeSelector: React.FC<Unsafe_DateRangeSelectorProps> = props => {
  const { name, options, value, onChange, customRadioButtonProps, datePickerPropsFrom, datePickerPropsTo, resources } = props;
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);
  const localizedResources = { ...defaultResources, ...resources };
  const mergedResources: HNDesignsystemUnsafe_DateRangeSelector & Record<string, string> = {
    ...localizedResources,
    startDateLabel: datePickerPropsTo?.label?.toString() || resources?.startDateLabel || defaultResources.startDateLabel,
    endDateLabel: datePickerPropsFrom?.label?.toString() || resources?.endDateLabel || defaultResources.endDateLabel,
    ...createPresetLabelMap(localizedResources),
  };

  const [selectedRadio, setSelectedRadio] = useState(value?.value);
  const [prevValue, setPrevValue] = useState(value);
  if (value !== prevValue) {
    setPrevValue(value);
    setSelectedRadio(value?.value);
  }
  const selectedRange = value?.dateRange ?? DateRangePresets.Custom.dateRange;

  const customOptionFromOptions = options.find(option => option.value === DateRangePresets.Custom.value);
  const customOption: ReadableRangeOption = {
    ...DateRangePresets.Custom,
    displayText: mergedResources.customPeriodLabel,
    ...customOptionFromOptions,
    radioButtonProps: {
      ...(customOptionFromOptions?.radioButtonProps ?? {}),
      ...(customRadioButtonProps ?? {}),
    },
  };
  const allOptions = customOptionFromOptions ? options : [...options, customOption];

  const emitCustomRange = (from?: Date | null, to?: Date | null): void => {
    if (!from && !to) {
      onChange?.(undefined);
      return;
    }

    onChange?.({
      ...customOption,
      value: DateRangePresets.Custom.value,
      dateRange: {
        from: from ?? undefined,
        to: to ?? undefined,
      },
    });
  };

  const handleRadioChange = (option: ReadableRangeOption): void => {
    setSelectedRadio(option.value);
    if (option.value === DateRangePresets.Custom.value) {
      emitCustomRange(selectedRange.from, selectedRange.to);
      return;
    }

    onChange?.(option);
  };

  return (
    <div className={styles['date-range-selector']}>
      <div>
        {allOptions.map(option => {
          return (
            <RadioButton
              name={name}
              key={option.value}
              value={option.value}
              checked={selectedRadio === option.value}
              label={
                <Label labelTexts={[{ text: option.displayText ?? mergedResources[option.value] ?? option.value, type: 'subdued' }]} />
              }
              {...option.radioButtonProps}
              onChange={() => {
                handleRadioChange(option);
              }}
            />
          );
        })}
      </div>
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
              emitCustomRange(date, selectedRange.to);
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
              emitCustomRange(selectedRange.from, date);
            }}
          />
        }
      />
    </div>
  );
};

export default Unsafe_DateRangeSelector;
