import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { parse } from 'date-fns';
import { ar, nb } from 'date-fns/locale';
import { useForm } from 'react-hook-form';

import Button from '@helsenorge/designsystem-react/components/Button';
import Icon from '@helsenorge/designsystem-react/components/Icon';
import Calendar from '@helsenorge/designsystem-react/components/Icons/Calendar';
import Label from '@helsenorge/designsystem-react/components/Label';
import Validation from '@helsenorge/designsystem-react/components/Validation';
import Docs from '@helsenorge/designsystem-react/docs';

import DatePicker, { DatePickerProps } from './DatePicker';
import DateTime from './DateTime';
import DateTimePickerWrapper from './DateTimePickerWrapper';
import {
  validateDisabledDates,
  validateMinMaxDate as validateMinMaxDate,
  validateMinTimeMaxTime as validateMinMaxTime,
} from './validate-utils';

const meta = {
  title: '@helsenorge/datepicker/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={DatePicker} />,
      description: {
        component: 'Som innbygger ønsker jeg å kunne velge dato og tidspunkt for tjenestene på helsenorge.',
      },
      story: {
        inline: false,
        iframeHeight: '30rem',
      },
    },
  },
  args: {
    dateButtonAriaLabel: 'Open datepicker',
    dateFormat: 'dd.MM.yyyy',
    disabled: false,
    disableWeekends: false,
    disableDays: [],
    locale: nb,
    error: false,
    errorText: '',
    autoComplete: 'off',
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Adds custom classes to the element.',
    },
    dateButtonAriaLabel: {
      control: 'text',
      description: 'Sets aria-label on the button that opens the datepicker dialogue',
    },
    dateFormat: {
      control: 'select',
      options: ['dd.MM.yyyy'],
      description: 'Sets the format of the date - only applies for desktop use. Native mobile date fields base their formats on the device',
    },
    dateValue: {
      control: 'date',
      description: 'Sets the date of the component',
    },
    defaultMonth: {
      control: 'date',
      description: 'Sets the current month',
    },
    disableDays: {
      control: 'date',
      description: 'Disables the days in the datepicker',
    },
    disableWeekends: {
      control: 'boolean',
      description: 'Disables weekends in the datepicker',
    },
    error: {
      control: 'boolean',
      description: 'Activates Error style for the input',
    },
    errorText: {
      control: 'text',
      description: 'Error text to show above the component',
    },
    errorTextId: {
      control: 'text',
      description: 'Error text id',
    },
    footerContent: {
      control: 'object',
      description: 'Content to be rendered in the footer of the datepicker popup',
    },
    label: {
      control: 'object',
      description: 'Label of the input',
    },
    inputId: {
      control: 'text',
      description: 'Input element id',
    },
    locale: {
      control: 'object',
      description: 'Sets the locale of the datepicker',
    },
    maxDate: {
      control: 'date',
      description: 'Maximum date allowed to be selected',
    },
    minDate: {
      control: 'date',
      description: 'Minimum date allowed to be selected',
    },
    onChange: {
      action: 'onChange',
      description: 'onChange callback triggered by change in chosen date.',
    },
    testId: {
      control: 'text',
      description: 'Sets the data-testid attribute.',
    },
    zIndex: {
      control: 'number',
      description: 'Overrides the default z-index of DatePicker',
    },
    autoComplete: {
      control: 'text',
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    return (
      <DatePicker
        label={<Label labelTexts={[{ text: 'Dato', type: 'semibold' }, { text: '(dd.mm.åååå)' }]} />}
        {...args}
        dateValue={args.dateValue ? new Date(Number(args.dateValue)) : undefined}
        disableDays={args.disableDays ? [new Date(Number(args.disableDays))] : undefined}
        maxDate={args.maxDate ? new Date(Number(args.maxDate)) : undefined}
        minDate={args.minDate ? new Date(Number(args.minDate)) : undefined}
      />
    );
  },
};

export const DateRangePicker: Story = {
  render: (args: DatePickerProps) => {
    const [fromDate, setFromDate] = React.useState<Date | undefined>();
    const [toDate, setToDate] = React.useState<Date | undefined>();

    return (
      <DateTimePickerWrapper>
        <DatePicker
          {...args}
          label={<Label labelTexts={[{ text: 'Fra dato', type: 'semibold' }]} />}
          maxDate={toDate}
          onChange={(
            _event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<Element, MouseEvent>,
            date: string | Date | undefined
          ): void => {
            date instanceof Date && setFromDate(date);
          }}
        />
        <DatePicker
          {...args}
          label={<Label labelTexts={[{ text: 'Til dato', type: 'semibold' }]} />}
          minDate={fromDate}
          onChange={(
            _event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<Element, MouseEvent>,
            date: string | Date | undefined
          ): void => {
            date instanceof Date && setToDate(date);
          }}
        />
      </DateTimePickerWrapper>
    );
  },
};

export const DateAndTime: Story = {
  render: (args: DatePickerProps) => {
    const [startDate] = React.useState(new Date());

    return (
      <DateTimePickerWrapper>
        <DatePicker
          {...args}
          dateValue={startDate}
          label={<Label labelTexts={[{ text: 'Dato', type: 'semibold' }, { text: '(dd.mm.åååå)' }]} />}
        />
        <DateTime
          defaultValue={12}
          label={<Label labelId={'label01'} labelTexts={[{ text: 'Tid', type: 'semibold' }, { text: '(tt:mm)' }]} />}
          timeUnit={'hours'}
        />
        <DateTime defaultValue={0} aria-labelledby={'label01'} timeUnit={'minutes'} />
      </DateTimePickerWrapper>
    );
  },
};

export const MinMaxDays: Story = {
  render: (args: DatePickerProps) => {
    const [startDate] = React.useState(new Date());
    const minDate = new Date();
    const maxDate = new Date();
    minDate.setDate(startDate.getDate() - 15);
    maxDate.setDate(startDate.getDate() + 15);

    return (
      <DatePicker
        label={<Label labelTexts={[{ text: 'Dato', type: 'semibold' }, { text: '(dd.mm.åååå)' }]} />}
        {...args}
        disableDays={args.disableDays ? [new Date(Number(args.disableDays))] : undefined}
        dateValue={startDate}
        maxDate={maxDate}
        minDate={minDate}
      />
    );
  },
};

export const DisabledDays: Story = {
  render: (args: DatePickerProps) => {
    const [startDate] = React.useState(new Date());
    const disabledDate = new Date();
    disabledDate.setDate(startDate.getDate() - 3);

    return (
      <DatePicker
        label={<Label labelTexts={[{ text: 'Dato', type: 'semibold' }, { text: '(dd.mm.åååå)' }]} />}
        {...args}
        disableDays={[disabledDate]}
        disableWeekends
        dateValue={startDate}
        maxDate={args.maxDate ? new Date(Number(args.maxDate)) : undefined}
        minDate={args.minDate ? new Date(Number(args.minDate)) : undefined}
      />
    );
  },
};

export const FooterContent: Story = {
  render: (args: DatePickerProps) => {
    return (
      <DatePicker
        label={<Label labelTexts={[{ text: 'Dato', type: 'semibold' }, { text: '(dd.mm.åååå)' }]} />}
        {...args}
        footerContent={<Icon size={38} svgIcon={Calendar} />}
        dateValue={args.dateValue ? new Date(Number(args.dateValue)) : undefined}
        disableDays={args.disableDays ? [new Date(Number(args.disableDays))] : undefined}
        maxDate={args.maxDate ? new Date(Number(args.maxDate)) : undefined}
        minDate={args.minDate ? new Date(Number(args.minDate)) : undefined}
      />
    );
  },
};

export const Locale: Story = {
  args: {
    locale: ar,
  },
  render: (args: DatePickerProps) => {
    return (
      <DatePicker
        label={<Label labelTexts={[{ text: 'Date', type: 'semibold' }, { text: '(dd.mm.yyyy)' }]} />}
        {...args}
        dateValue={args.dateValue ? new Date(Number(args.dateValue)) : undefined}
        disableDays={args.disableDays ? [new Date(Number(args.disableDays))] : undefined}
        maxDate={args.maxDate ? new Date(Number(args.maxDate)) : undefined}
        minDate={args.minDate ? new Date(Number(args.minDate)) : undefined}
        locale={args.locale}
      />
    );
  },
};

interface DateForm {
  datepicker: string;
  datetimehour: number;
  datetimeminute: number;
}

export const ValidateDateTime: Story = {
  render: (args: DatePickerProps) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
      getValues,
    } = useForm<DateForm>({ mode: 'all' });

    const dateString = '30.11.2023';
    const formatString = 'dd.MM.yyyy';

    const parsedDate = parse(dateString, formatString, new Date());
    const [startDate] = React.useState(parsedDate);
    const minDate = new Date();
    const maxDate = new Date();
    const disabledDate = new Date();
    minDate.setDate(startDate.getDate() - 30);
    maxDate.setDate(startDate.getDate() + 30);
    disabledDate.setDate(startDate.getDate() - 3);

    const datepicker = 'datepicker';
    const datetimehour = 'datetimehour';
    const datetimeminute = 'datetimeminute';

    const requireHour = (hours: number): true | string => {
      const minutes = getValues(datetimeminute);
      // eslint-disable-next-line no-console
      console.log('Validating time: ', hours, minutes);

      const validateResult = validateMinMaxTime(
        { hour: hours, minute: minutes },
        'Tidspunkt må være innenfor 10:00 og 13:30',
        { hour: 10, minute: 0 },
        { hour: 13, minute: 30 }
      );

      return validateResult;
    };

    const requireMinute = (minutes: number): true | string => {
      const hours = getValues(datetimehour);
      // eslint-disable-next-line no-console
      console.log('Validating time: ', hours, minutes);

      const validateResult = validateMinMaxTime(
        { hour: hours, minute: minutes },
        'Tidspunkt må være innenfor 10:00 og 13:30',
        { hour: 10, minute: 0 },
        { hour: 13, minute: 30 }
      );

      return validateResult;
    };

    const requireDate = (value: string): true | string => {
      // eslint-disable-next-line no-console
      console.log('Validating date: ', value);
      let validateResult = validateMinMaxDate(value, `Datoen må være fra ${minDate} og til ${maxDate}`, minDate, maxDate);
      validateResult =
        typeof validateResult !== 'string'
          ? validateDisabledDates(value, [disabledDate], `Datoen kan ikke være ${disabledDate}`)
          : validateResult;

      return validateResult;
    };

    const onSubmit = (data: DateForm): void => {
      // eslint-disable-next-line no-console
      console.log('Date submitted', data);
    };

    return (
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Validation errorTitle={'Sjekk at alt er riktig utfylt:'} errors={errors}>
          <DateTimePickerWrapper
            errorText={
              (errors.datepicker?.message as string) ||
              (errors.datetimehour?.message as string) ||
              (errors.datetimeminute?.message as string)
            }
            legend={'Datepicker legend'}
          >
            <DatePicker
              {...args}
              dateValue={startDate}
              disableDays={[disabledDate]}
              disableWeekends
              footerContent={<Icon size={38} svgIcon={Calendar} />}
              label={<Label labelTexts={[{ text: 'Dato', type: 'semibold' }, { text: '(dd.mm.åååå)' }]} />}
              maxDate={maxDate}
              minDate={minDate}
              {...register(datepicker, { validate: requireDate })}
            />
            <DateTime
              defaultValue={12}
              label={<Label labelId={'label01'} labelTexts={[{ text: 'Tid', type: 'semibold' }, { text: '(tt:mm)' }]} />}
              timeUnit={'hours'}
              {...register(datetimehour, { validate: requireHour })}
            />
            <DateTime
              defaultValue={0}
              aria-labelledby={'label01'}
              timeUnit={'minutes'}
              {...register(datetimeminute, { validate: requireMinute })}
            />
          </DateTimePickerWrapper>
        </Validation>
        <Button type="submit">{'Send inn'}</Button>
        <div>
          {
            'Sunt et ullamco deserunt tempor ad id incididunt quis sint ea do culpa. Minim laboris voluptate id dolor consequat fugiat tempor laboris magna in Lorem ex. Fugiat velit amet cillum sint adipisicing nulla laborum nisi dolor non duis voluptate.Esse irure duis proident veniam enim consectetur duis deserunt sit esse in irure fugiat fugiat. Officia pariatur voluptate Lorem ullamco adipisicing ex sit ex mollit labore deserunt aliqua velit cillum. Aliqua incididunt pariatur labore ea dolore. Voluptate veniam nulla velit enim veniam excepteur dolor qui quis anim est minim. Voluptate laboris id ex pariatur laboris sunt sunt et nostrud adipisicing elit quis culpa.Mollit tempor commodo est excepteur commodo dolore laborum in. Officia ipsum tempor ullamco incididunt labore sint commodo nulla mollit esse cupidatat cupidatat. Sit exercitation excepteur non do reprehenderit ipsum. Aute adipisicing excepteur consectetur ea proident pariatur non. Duis fugiat qui consectetur laborum eu aute fugiat reprehenderit sit aute. Sunt et ullamco deserunt tempor ad id incididunt quis sint ea do culpa. Minim laboris voluptate id dolor consequat fugiat tempor laboris magna in Lorem ex. Fugiat velit amet cillum sint adipisicing nulla laborum nisi dolor non duis voluptate.Esse irure duis proident veniam enim consectetur duis deserunt sit esse in irure fugiat fugiat. Officia pariatur voluptate Lorem ullamco adipisicing ex sit ex mollit labore deserunt aliqua velit cillum. Aliqua incididunt pariatur labore ea dolore. Voluptate veniam nulla velit enim veniam excepteur dolor qui quis anim est minim. Voluptate laboris id ex pariatur laboris sunt sunt et nostrud adipisicing elit quis culpa.Mollit tempor commodo est excepteur commodo dolore laborum in. Officia ipsum tempor ullamco incididunt labore sint commodo nulla mollit esse cupidatat cupidatat. Sit exercitation excepteur non do reprehenderit ipsum. Aute adipisicing excepteur consectetur ea proident pariatur non. Duis fugiat qui consectetur laborum eu aute fugiat reprehenderit sit aute.'
          }
        </div>
      </form>
    );
  },
};
