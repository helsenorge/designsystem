import { useState } from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';

import DateInputInternal, { DateInputInternalProps } from './DateInputInternal';

const meta = {
  title: '@helsenorge/datepicker/Unsafe_DatePicker/_Internal/DateInputInternal',
  component: DateInputInternal,
  args: {
    legendId: 'date-picker-legend',
  },
  argTypes: {
    value: { control: 'text' },
    onChange: { action: 'value changed' },
    resources: { control: 'object' },
    setErrorText: { action: 'set error text' },
    withClearButton: { control: 'boolean' },
    'aria-describedby': { control: 'text' },
    inputId: { control: 'text' },
  },
} satisfies Meta<DateInputInternalProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<string>();
    return <DateInputInternal {...args} value={value} onChange={setValue} />;
  },
};
