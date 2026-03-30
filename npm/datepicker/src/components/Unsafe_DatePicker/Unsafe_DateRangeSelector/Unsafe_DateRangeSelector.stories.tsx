import type { StoryObj, Meta } from '@storybook/react-vite';

import Unsafe_DateRangeSelector from './Unsafe_DateRangeSelector';

const meta = {
  title: '@helsenorge/datepicker/Unsafe_DatePicker/Unsafe_DateRangeSelector',
  component: Unsafe_DateRangeSelector,
} satisfies Meta<typeof Unsafe_DateRangeSelector>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'rangepicker',
    customValueDisplayText: 'Custom period',
    options: [
      {
        value: 'lastmonth',
        displayText: 'Last month',
        dateRange: 'todo: range for last month',
      },
      {
        value: 'lastyear',
        displayText: 'Last year',
        dateRange: 'todo: range for last year',
      },
    ],
  },
  render: args => <Unsafe_DateRangeSelector {...args} />,
};
