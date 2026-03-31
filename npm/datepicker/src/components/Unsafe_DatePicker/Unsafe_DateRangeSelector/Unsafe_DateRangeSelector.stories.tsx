import type { StoryObj, Meta } from '@storybook/react-vite';

import Unsafe_DateRangeSelector from './Unsafe_DateRangeSelector';
import { DateRangePresets } from './utils';

const meta = {
  title: '@helsenorge/datepicker/Unsafe_DatePicker/Unsafe_DateRangeSelector',
  component: Unsafe_DateRangeSelector,
} satisfies Meta<typeof Unsafe_DateRangeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'rangepicker',
    customValueDisplayText: 'Egendefinert periode/dato',
    options: [
      DateRangePresets.LastMonth,
      DateRangePresets.Last6Months,
      DateRangePresets.Last12Months,
      DateRangePresets.FullYear,
      DateRangePresets.NextMonth,
      DateRangePresets.Next6Months,
      DateRangePresets.Next12Months,
    ],
  },
  render: args => <Unsafe_DateRangeSelector {...args} />,
};
export const CustomProps: Story = {
  args: {
    name: 'rangepicker-custom',
    customValueDisplayText: 'Egendefinert periode/dato',
    options: [
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
    ],
    datePickerPropsFrom: {
      id: 'custom-from-date',
    },
    datePickerPropsTo: {
      id: 'custom-to-date',
    },
  },
  render: args => <Unsafe_DateRangeSelector {...args} />,
};
