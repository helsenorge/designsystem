import { useState } from 'react';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Unsafe_DateRangeSelector from './Unsafe_DateRangeSelector';
import { DateRangePresets } from './utils';

const meta = {
  title: '@helsenorge/datepicker/Unsafe_DatePicker/Unsafe_DateRangeSelector',
  component: Unsafe_DateRangeSelector,
  args: {
    name: 'rangepicker-custom',
    options: [],
    value: '',
    selectedRange: { from: new Date(), to: new Date() },
    customValueDisplayText: 'Egendefinert periode/dato',
  },
} satisfies Meta<typeof Unsafe_DateRangeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState(DateRangePresets.Last12Months.value);
    const [selectedRange, setSelectedRange] = useState(DateRangePresets.Last12Months.dateRange);

    return (
      <Unsafe_DateRangeSelector
        {...args}
        options={[
          DateRangePresets.LastMonth,
          DateRangePresets.Last6Months,
          DateRangePresets.Last12Months,
          DateRangePresets.FullYear,
          DateRangePresets.NextMonth,
          DateRangePresets.Next6Months,
          DateRangePresets.Next12Months,
        ]}
        value={value}
        selectedRange={selectedRange}
        onChange={setValue}
        onPresetSelected={preset => {
          setValue(preset.value);
          setSelectedRange(preset.dateRange);
        }}
        onRangeChange={(from, to) => {
          if (from && to) {
            setSelectedRange({ from, to });
          }
        }}
      />
    );
  },
};

export const WithPrintedState: Story = {
  render: args => {
    const [value, setValue] = useState(DateRangePresets.Last12Months.value);
    const [selectedRange, setSelectedRange] = useState(DateRangePresets.Last12Months.dateRange);

    return (
      <>
        <Unsafe_DateRangeSelector
          {...args}
          options={[
            DateRangePresets.LastMonth,
            DateRangePresets.Last6Months,
            DateRangePresets.Last12Months,
            DateRangePresets.FullYear,
            DateRangePresets.NextMonth,
            DateRangePresets.Next6Months,
            DateRangePresets.Next12Months,
          ]}
          value={value}
          selectedRange={selectedRange}
          onChange={setValue}
          onPresetSelected={preset => {
            setValue(preset.value);
            setSelectedRange(preset.dateRange);
          }}
          onRangeChange={(from, to) => {
            if (from && to) {
              setSelectedRange({ from, to });
            }
          }}
        />
        <div>
          {'Value: '}
          {value}
        </div>
        <div>
          {'Selected range: '}
          {selectedRange.from.toISOString()}
          {'--------->'}
          {selectedRange.to.toISOString()}
        </div>
      </>
    );
  },
};

export const CustomProps: Story = {
  render: args => {
    const [value, setValue] = useState(DateRangePresets.Last12Months.value);
    const [selectedRange, setSelectedRange] = useState(DateRangePresets.Last12Months.dateRange);

    return (
      <Unsafe_DateRangeSelector
        {...args}
        options={[
          DateRangePresets.LastMonth,
          DateRangePresets.Last6Months,
          {
            value: DateRangePresets.Last12Months.value,
            displayText: 'Custom text for 12 months',
            dateRange: DateRangePresets.Last12Months.dateRange,
            radioButtonProps: {
              onChange: () => console.log('last 12 months selected'),
            },
          },
          DateRangePresets.FullYear,
        ]}
        datePickerPropsFrom={{
          id: 'custom-from-date',
        }}
        datePickerPropsTo={{
          id: 'custom-to-date',
        }}
        value={value}
        selectedRange={selectedRange}
        onChange={setValue}
        onPresetSelected={preset => {
          setValue(preset.value);
          setSelectedRange(preset.dateRange);
        }}
        onRangeChange={(from, to) => {
          if (from && to) {
            setSelectedRange({ from, to });
          }
        }}
      />
    );
  },
};
