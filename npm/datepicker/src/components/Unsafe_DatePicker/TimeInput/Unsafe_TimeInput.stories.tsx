import { useState } from 'react';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';

import Unsafe_DatePicker from '../Unsafe_DatePicker';
import Unsafe_TimeInput from './Unsafe_TimeInput';

const meta = {
  title: '@helsenorge/datepicker/Unsafe_DatePicker/Unsafe_TimeInput',
  component: Unsafe_TimeInput,
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
} satisfies Meta<typeof Unsafe_TimeInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<string | undefined>();
    return <Unsafe_TimeInput {...args} value={value} onChange={setValue} />;
  },
};

export const WithDefaultValue: Story = {
  render: args => {
    const [value, setValue] = useState<string | undefined>('12:31');
    return (
      <>
        <Unsafe_TimeInput {...args} value={value} onChange={value => setValue(value)} />
        <br />
        <span>{'Value: ' + value}</span>
      </>
    );
  },
};

export const BesideDate: Story = {
  render: args => {
    const [date, setDate] = useState<Date | undefined>(new Date());
    const [time, setTime] = useState<string | undefined>('12:31');
    return (
      <div style={{ display: 'flex', alignItems: 'start', gap: '0.2rem' }}>
        <Unsafe_TimeInput {...args} value={time} onChange={value => setTime(value)} />
        <Unsafe_DatePicker
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
