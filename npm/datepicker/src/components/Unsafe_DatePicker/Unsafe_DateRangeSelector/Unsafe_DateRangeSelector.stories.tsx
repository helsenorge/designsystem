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
      {
        value: DateRangePresets.Last12Months.value,
        displayText: 'Next 12 months', // bare for å vise custom
        dateRange: DateRangePresets.Last12Months.dateRange,
      },
      DateRangePresets.FullYear,
      DateRangePresets.NextMonth,
      DateRangePresets.Next6Months,
      DateRangePresets.Next12Months,
    ],
  },
  render: args => <Unsafe_DateRangeSelector {...args} />,
};
