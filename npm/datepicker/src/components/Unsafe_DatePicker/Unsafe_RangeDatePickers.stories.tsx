import { useState } from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { nb } from 'date-fns/locale';

import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';

import Unsafe_RangeDatePickers from './Unsafe_RangeDatePickers';

import Unsafe_DatePicker from './index';

const meta = {
  title: '@helsenorge/datepicker/Unsafe_DatePicker/Unsafe_RangeDateInputs',
  component: Unsafe_RangeDatePickers,
  argTypes: {
    from: { control: 'object' },
    to: { control: 'object' },
  },
} satisfies Meta<typeof Unsafe_RangeDatePickers>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [from, setFrom] = useState<Date | undefined>(new Date());
    const [to, setTo] = useState<Date | undefined>();

    const fromComponent = (
      <Unsafe_DatePicker
        id="from-date"
        aria-describedby="sublabel-from"
        label={
          <Label
            htmlFor="from-date"
            labelTexts={[{ text: 'Fra' }]}
            sublabel={<Sublabel id="sublabel-from" sublabelTexts={[{ text: 'dd.mm.åååå', type: 'subdued' }]} />}
          />
        }
        value={from}
        onChange={date => {
          setFrom(date);
        }}
        localeForCalendar={nb}
      />
    );
    const toComponent = (
      <Unsafe_DatePicker
        id="to-date"
        aria-describedby="sublabel-to"
        label={
          <Label
            htmlFor="to-date"
            labelTexts={[{ text: 'Til' }]}
            sublabel={<Sublabel id="sublabel-to" sublabelTexts={[{ text: 'dd.mm.åååå', type: 'subdued' }]} />}
          />
        }
        value={to}
        onChange={date => {
          setTo(date);
        }}
        localeForCalendar={nb}
      />
    );

    const handleRangeChange = (from: Date | undefined, to: Date | undefined, isValid: boolean) => {
      setFrom(from);
      setTo(to);
      if (!isValid) {
        console.log('Ugyldig datointervall');
      }
    };
    return <Unsafe_RangeDatePickers from={fromComponent} to={toComponent} onRangeChange={handleRangeChange} />;
  },
};
