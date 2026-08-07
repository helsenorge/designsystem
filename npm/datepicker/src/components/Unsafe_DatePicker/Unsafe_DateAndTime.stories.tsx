import { useRef, useState } from 'react';

import type { Unsafe_DatePickerHandle } from './Unsafe_DatePicker';
import type { StoryObj, Meta } from '@storybook/react-vite';

import Button from '@helsenorge/designsystem-react/components/Button';
import FormFieldTag from '@helsenorge/designsystem-react/components/FormFieldTag';
import FormGroup from '@helsenorge/designsystem-react/components/FormGroup/FormGroup';
import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';

import Unsafe_DateAndTime from './Unsafe_DateAndTime';

const meta = {
  title: '@helsenorge/datepicker/Unsafe_DatePicker/Unsafe_DateAndTime',
  component: Unsafe_DateAndTime,
  args: {
    // legend: <Label htmlMarkup="legend" labelId="custom-datetime-legend" labelTexts={[{ text: 'Dato for reise' }]} />,
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
    value: { control: 'date', description: 'Currently given date' },
    onChange: { action: 'onChange', description: 'Callback for change on the given date ' },
    legend: { control: 'object', description: 'Legend for labelling both fields ' },
    errorText: { control: 'text', description: 'Errortext for validation errors ' },
  },
} satisfies Meta<typeof Unsafe_DateAndTime>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<Date | null | undefined>();
    return (
      <>
        <Unsafe_DateAndTime {...args} value={value} onChange={value => setValue(value)} />
        <br />
        <span>{'Value: ' + value}</span>
      </>
    );
  },
};

export const WithFormGroup: Story = {
  render: args => {
    const [value, setValue] = useState<Date | null | undefined>();
    return (
      <FormGroup legend="Reisen startet" legendId="formgroup-legend-id">
        <Unsafe_DateAndTime
          {...args}
          value={value}
          onChange={value => setValue(value)}
          datepickerProps={{
            label: (
              <Label
                formFieldTag={<FormFieldTag id="formfield-date-id" level="required-field" />}
                labelId="label-date-id"
                labelTexts={[{ text: 'Dato' }]}
                sublabel={<Sublabel id="sublabel-date-id" sublabelTexts={[{ text: 'dd.mm.åååå', type: 'subdued' }]} />}
              />
            ),
            'aria-labelledby': 'formgroup-legend-id label-date-id formfield-date-id sublabel-date-id',
          }}
          timeInputProps={{
            label: (
              <Label
                formFieldTag={<FormFieldTag id="formfield-time-id" level="required-field" />}
                labelId="label-time-id"
                labelTexts={[{ text: 'Klokkeslett' }]}
                sublabel={<Sublabel id="sublabel-time-id" sublabelTexts={[{ text: 'tt:mm', type: 'subdued' }]} />}
              />
            ),
            'aria-labelledby': 'formgroup-legend-id label-time-id formfield-time-id sublabel-time-id',
          }}
        />
      </FormGroup>
    );
  },
};

export const WithImperativeFocus: Story = {
  render: args => {
    const [value, setValue] = useState<Date | null | undefined>();
    const datePickerRef = useRef<Unsafe_DatePickerHandle>(null);
    return (
      <>
        <Button onClick={() => datePickerRef.current?.focus()}>{'Sett fokus i datofeltet'}</Button>
        <br />
        <Unsafe_DateAndTime
          {...args}
          value={value}
          onChange={value => setValue(value)}
          datepickerProps={{ ...args.datepickerProps, ref: datePickerRef }}
        />
      </>
    );
  },
};
