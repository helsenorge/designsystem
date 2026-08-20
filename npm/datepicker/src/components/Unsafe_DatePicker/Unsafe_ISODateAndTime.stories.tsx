import { useState } from 'react';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';

import Unsafe_ISODateAndTime from './Unsafe_ISODateAndTime';

const meta = {
  title: '@helsenorge/datepicker/Unsafe_DatePicker/Unsafe_ISODateAndTime',
  component: Unsafe_ISODateAndTime,
  args: {
    datepickerProps: {
      label: (
        <Label
          htmlMarkup="legend"
          labelId="custom-date-label"
          labelTexts={[{ text: 'Dato' }]}
          sublabel={<Sublabel id="sublabel-date" sublabelTexts={[{ text: 'dd.mm.åååå', type: 'subdued' }]} />}
        />
      ),
      'aria-labelledby': 'sublabel-date',
    },
    timeInputProps: {
      label: (
        <Label
          htmlMarkup="legend"
          labelId="custom-time-label"
          labelTexts={[{ text: 'Klokkeslett' }]}
          sublabel={<Sublabel id="sublabel-time" sublabelTexts={[{ text: 'tt:mm', type: 'subdued' }]} />}
        />
      ),
      'aria-labelledby': 'sublabel-time',
    },
  },
  argTypes: {
    value: { control: 'text', description: 'Currently given date and time as ISO string' },
    onChange: { action: 'onChange', description: 'Callback for change in the given date and time as ISO string' },
    legend: { control: 'object', description: 'Legend for labelling both fields' },
    errorText: { control: 'text', description: 'Errortext for validation errors' },
  },
} satisfies Meta<typeof Unsafe_ISODateAndTime>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<string>('');
    return (
      <>
        <Unsafe_ISODateAndTime {...args} value={value} onChange={value => setValue(value)} />
        <br />
        <span>{'Value: ' + value}</span>
      </>
    );
  },
};

export const WithInitialValue: Story = {
  render: args => {
    const [value, setValue] = useState<string>('2026-01-15T10:30:00');
    return (
      <>
        <Unsafe_ISODateAndTime {...args} value={value} onChange={value => setValue(value)} />
        <br />
        <span>{'Value: ' + value}</span>
      </>
    );
  },
};
