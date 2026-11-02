import { useState } from 'react';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';

import DatePicker from '../DatePicker';
import TimeInput from './TimeInput';

const meta = {
  title: '@helsenorge/datepicker/DatePicker/TimeInput',
  component: TimeInput,
  args: {
    withClearButton: true,
    label: (
      <Label
        labelId="custom-time-legend"
        labelTexts={[{ text: 'Tid' }]}
        sublabel={<Sublabel id="tid-sublabel" sublabelTexts={[{ text: 'tt:mm', type: 'subdued' }]} />}
      />
    ),
    'aria-labelledby': 'tid-sublabel',
  },
  argTypes: {
    value: { control: 'text' },
    id: { control: 'text' },
    onChange: { action: 'onChange' },
    onBlur: { action: 'onBlur' },
    errorText: { control: 'text' },
    resources: { control: 'object' },
    ['aria-describedby']: { control: 'text' },
    ['aria-labelledby']: { control: 'text' },
  },
} satisfies Meta<typeof TimeInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<string | undefined>();
    return <TimeInput {...args} value={value} onChange={setValue} />;
  },
};

export const WithDefaultValue: Story = {
  render: args => {
    const [value, setValue] = useState<string | undefined>('12:31');
    return (
      <>
        <TimeInput {...args} value={value} onChange={value => setValue(value)} />
        <br />
        <span>{'Value: ' + value}</span>
      </>
    );
  },
};

export const BesideDate: Story = {
  render: args => {
    const [date, setDate] = useState<Date | null | undefined>(new Date());
    const [time, setTime] = useState<string | undefined>('12:31');
    return (
      <div style={{ display: 'flex', alignItems: 'start', gap: '0.2rem' }}>
        <TimeInput {...args} value={time} onChange={value => setTime(value)} />
        <DatePicker
          value={date}
          onChange={setDate}
          aria-labelledby="sublabel"
          label={
            <Label
              labelTexts={[{ text: 'Dato' }]}
              sublabel={<Sublabel id="sublabel" sublabelTexts={[{ text: 'dd.mm.åååå', type: 'subdued' }]} />}
            />
          }
        />
      </div>
    );
  },
};
