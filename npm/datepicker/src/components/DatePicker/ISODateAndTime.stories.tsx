import { useState } from 'react';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';

import ISODateAndTime from './ISODateAndTime';

const meta = {
  title: '@helsenorge/datepicker/DatePicker/ISODateAndTime',
  component: ISODateAndTime,
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
    value: { control: false },
    onChange: { control: false },
  },
} satisfies Meta<typeof ISODateAndTime>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<string>('');
    return (
      <>
        <ISODateAndTime {...args} value={value} onChange={value => setValue(value)} />
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
        <ISODateAndTime {...args} value={value} onChange={value => setValue(value)} />
        <br />
        <span>{'Value: ' + value}</span>
      </>
    );
  },
};
