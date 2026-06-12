import { useState } from 'react';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import '@testing-library/jest-dom';

import type { DateRangePreset } from './constants';

import Unsafe_DateRangeSelector from './Unsafe_DateRangeSelector';
import { DateRangePresets } from './utils';

const testResources = {
  startDateLabel: 'TEST_START_DATE',
  endDateLabel: 'TEST_END_DATE',
  dateSublabel: 'TEST_DATE_FORMAT',
  lastMonthLabel: 'TEST_LAST_MONTH',
  lastMonthsLabel: 'TEST_LAST_{0}_MONTHS',
  nextMonthsLabel: 'TEST_NEXT_{0}_MONTHS',
  nextMonthLabel: 'TEST_NEXT_MONTH',
  customPeriodLabel: 'TEST_CUSTOM_PERIOD',
};

const testDatePickerResources = {
  clearButtonAriaLabel: 'TEST_CLEAR_DATE',
  ariaLabelInputDay: 'TEST_DAY',
};

const CLEAR_LABEL = testDatePickerResources.clearButtonAriaLabel;
const DAY_LABEL = testDatePickerResources.ariaLabelInputDay;

const presetOptions = [DateRangePresets.LastMonth, DateRangePresets.Last6Months, DateRangePresets.Last12Months, DateRangePresets.FullYear];

const getRadio = (value: string): HTMLInputElement =>
  screen.getAllByRole('radio').find(r => (r as HTMLInputElement).value === value) as HTMLInputElement;

const getClearButtons = (): HTMLElement[] => screen.getAllByLabelText(CLEAR_LABEL);
const getDayInputs = (): HTMLInputElement[] => screen.getAllByLabelText(DAY_LABEL) as HTMLInputElement[];

const renderDateRangeSelector = (props: React.ComponentProps<typeof Unsafe_DateRangeSelector>): void => {
  render(
    <Unsafe_DateRangeSelector
      resources={testResources}
      datePickerPropsFrom={{ resources: testDatePickerResources }}
      datePickerPropsTo={{ resources: testDatePickerResources }}
      {...props}
    />
  );
};

const getPadded = (value: number): string => value.toString().padStart(2, '0');

describe('Gitt at Unsafe_DateRangeSelector skal vises', () => {
  describe('Når en preset-radio velges', () => {
    it('Så skal onChange kalles med preset-objektet', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      renderDateRangeSelector({ name: 'periode', options: presetOptions, value: undefined, onChange: handleChange });

      await user.click(getRadio(DateRangePresets.Last6Months.value));

      expect(handleChange).toHaveBeenLastCalledWith(DateRangePresets.Last6Months);
    });
  });

  describe('Når brukeren velger et custom radio-alternativ levert av consumer', () => {
    it('Så skal onChange kalles med det valgte alternativet', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();
      const customOption: DateRangePreset = {
        value: 'last14days',
        displayText: 'Siste 14 dager',
        dateRange: {
          from: new Date('2026-05-01'),
          to: new Date('2026-05-15'),
        },
      };

      render(
        <Unsafe_DateRangeSelector
          resources={testResources}
          datePickerPropsFrom={{ resources: testDatePickerResources }}
          datePickerPropsTo={{ resources: testDatePickerResources }}
          name="periode"
          options={[...presetOptions, customOption]}
          value={DateRangePresets.Last12Months}
          onChange={handleChange}
        />
      );

      await user.click(getRadio(customOption.value));

      expect(handleChange).toHaveBeenLastCalledWith(customOption);
    });

    it('Så skal innebygd custom beholde eksisterende datointervall', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      renderDateRangeSelector({ name: 'periode', options: presetOptions, value: DateRangePresets.Last12Months, onChange: handleChange });

      await user.click(getRadio(DateRangePresets.Custom.value));

      const lastCall = handleChange.mock.calls.at(-1)?.[0] as DateRangePreset;
      expect(lastCall.value).toBe(DateRangePresets.Custom.value);
      expect(lastCall.dateRange).toEqual(DateRangePresets.Last12Months.dateRange);
    });

    it('Så skal onChange kalles med undefined når innebygd custom velges med tomme datoer', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      renderDateRangeSelector({ name: 'periode', options: presetOptions, value: undefined, onChange: handleChange });

      await user.click(getRadio(DateRangePresets.Custom.value));

      expect(handleChange).toHaveBeenLastCalledWith(undefined);
      expect(getRadio(DateRangePresets.Custom.value)).toBeChecked();
    });
  });

  describe('Når brukeren redigerer en datepicker mens en preset er valgt', () => {
    it('Så skal onChange kalles med custom-preset med oppdatert dato og custom-radio velges', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      const Wrapper = (): React.ReactNode => {
        const [value, setValue] = useState<DateRangePreset | undefined>(DateRangePresets.Last12Months);

        return (
          <Unsafe_DateRangeSelector
            resources={testResources}
            datePickerPropsFrom={{ resources: testDatePickerResources }}
            datePickerPropsTo={{ resources: testDatePickerResources }}
            name="periode"
            options={presetOptions}
            value={value}
            onChange={next => {
              handleChange(next);
              setValue(next);
            }}
          />
        );
      };
      render(<Wrapper />);

      const dayInputs = getDayInputs();
      await user.clear(dayInputs[0]);
      await user.type(dayInputs[0], '15');

      const lastCall = handleChange.mock.calls.at(-1)?.[0] as DateRangePreset;
      expect(lastCall.value).toBe('custom');
      expect(lastCall.dateRange.to).toEqual(DateRangePresets.Last12Months.dateRange.to);
      expect(getRadio('custom')).toBeChecked();
    });
  });

  describe('Når brukeren tømmer begge datepickerne', () => {
    it('Så skal onChange kalles med undefined når begge feltene er tomme', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      const Wrapper = (): React.ReactNode => {
        const [value, setValue] = useState<DateRangePreset | undefined>({
          value: 'custom',
          dateRange: {
            from: new Date('2026-01-15'),
            to: new Date('2026-12-24'),
          },
        });

        return (
          <Unsafe_DateRangeSelector
            resources={testResources}
            datePickerPropsFrom={{ resources: testDatePickerResources }}
            datePickerPropsTo={{ resources: testDatePickerResources }}
            name="periode"
            options={presetOptions}
            value={value}
            onChange={next => {
              handleChange(next);
              setValue(next);
            }}
          />
        );
      };
      render(<Wrapper />);

      const [clearFrom, clearTo] = getClearButtons();
      await user.click(clearFrom);
      await user.click(clearTo);

      expect(handleChange).toHaveBeenLastCalledWith(undefined);
    });
  });

  describe('Når en radio velges i controlled mode', () => {
    it('Så skal datepicker-feltene oppdateres fra valgt preset', async () => {
      const user = userEvent.setup();

      const Wrapper = (): React.ReactNode => {
        const [value, setValue] = useState<DateRangePreset | undefined>(DateRangePresets.LastMonth);

        return (
          <Unsafe_DateRangeSelector
            resources={testResources}
            datePickerPropsFrom={{ resources: testDatePickerResources }}
            datePickerPropsTo={{ resources: testDatePickerResources }}
            name="periode"
            options={presetOptions}
            value={value}
            onChange={setValue}
          />
        );
      };
      render(<Wrapper />);

      await user.click(getRadio(DateRangePresets.Last6Months.value));

      const dayInputs = getDayInputs();
      expect(dayInputs[0].value).toBe(getPadded(DateRangePresets.Last6Months.dateRange.from!.getUTCDate()));
      expect(getRadio(DateRangePresets.Last6Months.value)).toBeChecked();
    });
  });
});
