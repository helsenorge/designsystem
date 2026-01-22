import React, { useState } from 'react';

import { Source } from '@storybook/addon-docs/blocks';
import { parse } from 'date-fns';
import { ar, nb } from 'date-fns/locale';
import { Docs } from 'frankenstein-build-tools';
import { useForm } from 'react-hook-form';

import type { DatePickerProps } from './DatePicker';
import type { StoryObj, Meta } from '@storybook/react-vite';

import Button from '@helsenorge/designsystem-react/components/Button';
import Icon from '@helsenorge/designsystem-react/components/Icon';
import Calendar from '@helsenorge/designsystem-react/components/Icons/Calendar';
import Label from '@helsenorge/designsystem-react/components/Label';
import { PopOverVariant } from '@helsenorge/designsystem-react/components/PopOver';
import Spacer from '@helsenorge/designsystem-react/components/Spacer';
import Validation from '@helsenorge/designsystem-react/components/Validation';
import LanguageProvider from '@helsenorge/designsystem-react/utils/language';
import longLoremText from '@helsenorge/designsystem-react/utils/loremtext';

import { LanguageLocales } from '@helsenorge/designsystem-react';

import DatePicker from './DatePicker';
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
  tags: ['breaking'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs
          component={DatePicker}
          belowControlsContent={
            <>
              <section style={{ margin: '1rem 0' }}>
                <h2>{'Example code:'}</h2>
                <h3>{'A simple DatePicker component:'}</h3>
                <Source
                  language="tsx"
                  code={`
<DatePicker
  label={<Label labelTexts={[{ text: 'Dato' }, { text: '(dd.mm.åååå)'}]} />}
/>`}
                />
                <br />
                <h3>{'A simple DateTime component:'}</h3>
                <Source
                  language="tsx"
                  code={`
<DateTimePickerWrapper>
  <DateTime
  defaultValue={12}
  label={<Label labelId={'label01'} labelTexts={[{ text: 'Tid' }, { text: '(tt:mm)' }]} />}
  timeUnit={'hours'}
  />
  <DateTime defaultValue={0} aria-labelledby={'label01'} timeUnit={'minutes'} />
</DateTimePickerWrapper>`}
                />
                <br />
                <h3>{'Date and time:'}</h3>
                <Source
                  language="tsx"
                  code={`
<DateTimePickerWrapper>
  <DatePicker
  label={<Label labelTexts={[{ text: 'Dato' }, { text: '(dd.mm.åååå)'}]} />}
  />
  <DateTime
  defaultValue={12}
  label={<Label labelId={'label01'} labelTexts={[{ text: 'Tid' }, { text: '(tt:mm)' }]} />}
  timeUnit={'hours'}
  />
  <DateTime defaultValue={0} aria-labelledby={'label01'} timeUnit={'minutes'} />
</DateTimePickerWrapper>`}
                />
                <br />
                <h3>{'With validation:'}</h3>
                <Source
                  language="tsx"
                  code={`
import { useForm } from 'react-hook-form';

const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<DateForm>({ mode: 'onBlur' });

  // ... //

  const requireHour = (hours: number): true | string => {
    // validation logic here
  };

  const requireMinute = (minutes: number): true | string => {
    // validation logic here
  };

  const requireDate = (value: string): true | string => {
    // validation logic here
  };

  // ... //

return (
  <Validation errorTitle={'Sjekk at alt er riktig utfylt:'} errors={errors}>
    <DateTimePickerWrapper legend={'Datepicker legend'}>
      <DatePicker
        label={<Label labelTexts={[{ text: 'Dato' }, { text: '(dd.mm.åååå)' }]} />}
        maxDate={maxDate}
        minDate={minDate}
        errorText={errors.datepicker?.message as string}
        onDatePopupClosed={withOnDatePopupClosed ? (): Promise<boolean> => trigger(datepicker) : undefined}
        {...register(datepicker, { validate: requireDate })}
      />
      <DateTimePickerWrapper errorText={(errors.datetimehour?.message as string) || (errors.datetimeminute?.message as string)}>
        <DateTime
          defaultValue={12}
          label={<Label labelId={'label01'} labelTexts={[{ text: 'Tid' }, { text: '(tt:mm)' }]} />}
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
    </DateTimePickerWrapper>
  </Validation>
)`}
                />
                <br />
              </section>
            </>
          }
        />
      ),
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
    variant: {
      control: 'select',
      options: Object.values(PopOverVariant),
      description: 'Determines the placement of the DatePicker popup. Default: automatic positioning.',
    },
    zIndex: {
      control: 'number',
      description: 'Overrides the default z-index of DatePicker',
    },
    autoComplete: {
      control: 'text',
    },
    ariaLabels: {
      control: 'object',
    },
  },
} satisfies Meta<typeof DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    return (
      <DatePicker
        label={<Label labelTexts={[{ text: 'Dato' }, { text: '(dd.mm.åååå)' }]} />}
        {...args}
        dateValue={args.dateValue ? new Date(Number(args.dateValue)) : undefined}
        disableDays={args.disableDays ? [new Date(Number(args.disableDays))] : undefined}
        maxDate={args.maxDate ? new Date(Number(args.maxDate)) : undefined}
        minDate={args.minDate ? new Date(Number(args.minDate)) : undefined}
      />
    );
  },
};

const DateRangePickerRender = (args: DatePickerProps): React.ReactElement => {
  const [fromDate, setFromDate] = React.useState<Date | undefined>();
  const [toDate, setToDate] = React.useState<Date | undefined>();

  return (
    <DateTimePickerWrapper>
      <DatePicker
        {...args}
        label={<Label labelTexts={[{ text: 'Fra dato' }]} />}
        maxDate={toDate}
        onChange={(_e, date) => {
          if (date instanceof Date) setFromDate(date);
        }}
      />
      <DatePicker
        {...args}
        label={<Label labelTexts={[{ text: 'Til dato' }]} />}
        minDate={fromDate}
        onChange={(_e, date) => {
          if (date instanceof Date) setToDate(date);
        }}
      />
    </DateTimePickerWrapper>
  );
};

export const DateRangePicker: Story = { render: DateRangePickerRender };

const DateAndTimeRender = (args: DatePickerProps): React.ReactElement => {
  const [startDate] = React.useState(new Date('01.01.2024'));
  return (
    <DateTimePickerWrapper>
      <DatePicker {...args} dateValue={startDate} label={<Label labelTexts={[{ text: 'Dato' }, { text: '(dd.mm.åååå)' }]} />} />
      <DateTime
        defaultValue={12}
        label={<Label labelId="label01" labelTexts={[{ text: 'Tid' }, { text: '(tt:mm)' }]} />}
        timeUnit="hours"
      />
      <DateTime defaultValue={0} aria-labelledby="label01" timeUnit="minutes" />
    </DateTimePickerWrapper>
  );
};

export const DateAndTime: Story = { render: DateAndTimeRender };

const MinMaxDaysRender = (args: DatePickerProps): React.ReactElement => {
  const [startDate] = React.useState(new Date());
  const minDate = new Date(startDate);
  minDate.setDate(startDate.getDate() - 15);
  const maxDate = new Date(startDate);
  maxDate.setDate(startDate.getDate() + 15);

  return (
    <DatePicker
      {...args}
      label={<Label labelTexts={[{ text: 'Dato' }, { text: '(dd.mm.åååå)' }]} />}
      dateValue={startDate}
      minDate={minDate}
      maxDate={maxDate}
      disableDays={args.disableDays ? [new Date(Number(args.disableDays))] : undefined}
    />
  );
};

export const MinMaxDays: Story = { render: MinMaxDaysRender };

const DisabledDaysRender = (args: DatePickerProps): React.ReactElement => {
  const [startDate] = React.useState(new Date('01.01.2024'));
  const disabledDate = new Date(startDate);
  disabledDate.setDate(startDate.getDate() - 3);

  return (
    <DatePicker
      {...args}
      label={<Label labelTexts={[{ text: 'Dato' }, { text: '(dd.mm.åååå)' }]} />}
      dateValue={startDate}
      disableDays={[disabledDate]}
      disableWeekends
      maxDate={args.maxDate ? new Date(Number(args.maxDate)) : undefined}
      minDate={args.minDate ? new Date(Number(args.minDate)) : undefined}
    />
  );
};

export const DisabledDays: Story = { render: DisabledDaysRender };

export const FooterContent: Story = {
  render: (args: DatePickerProps) => {
    return (
      <DatePicker
        label={<Label labelTexts={[{ text: 'Dato' }, { text: '(dd.mm.åååå)' }]} />}
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
        label={<Label labelTexts={[{ text: 'Date' }, { text: '(dd.mm.yyyy)' }]} />}
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
  render: (args: DatePickerProps) => <ValidateDateTimeExample {...args} withOnDatePopupClosed={false} />,
};

export const ValidateOnDatePopupClosed: Story = {
  render: (args: DatePickerProps) => <ValidateDateTimeExample {...args} withOnDatePopupClosed={true} />,
};

interface StoryDatePickerProps extends DatePickerProps {
  withOnDatePopupClosed?: boolean;
}

const ValidateDateTimeExample = ({ withOnDatePopupClosed, ...args }: StoryDatePickerProps): React.JSX.Element => {
  const {
    register,
    trigger,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<DateForm>({ mode: 'onBlur', reValidateMode: 'onBlur' });

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
    console.log('Validating date: ', value);
    let validateResult = validateMinMaxDate(
      value,
      `Datoen må være fra ${minDate} og til ${maxDate}`,
      'Datoen har feil format',
      minDate,
      maxDate
    );
    validateResult =
      typeof validateResult !== 'string'
        ? validateDisabledDates(value, [disabledDate], `Datoen kan ikke være ${disabledDate}`)
        : validateResult;

    return validateResult;
  };

  const onSubmit = (data: DateForm): void => {
    console.log('Date submitted', data);
  };

  return (
    <>
      {withOnDatePopupClosed && (
        <p>
          {'use onDatePopupClosed to trigger validation:'}
          <br />
          {'onDatePopupClosed={(): Promise<boolean> => trigger(datepicker)}'}
        </p>
      )}
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Validation errorTitle={'Sjekk at alt er riktig utfylt:'} errors={errors}>
          <DateTimePickerWrapper legend={'Datepicker legend'}>
            <DatePicker
              {...args}
              disableDays={[disabledDate]}
              disableWeekends
              footerContent={<Icon size={38} svgIcon={Calendar} />}
              label={<Label labelTexts={[{ text: 'Dato' }, { text: '(dd.mm.åååå)' }]} />}
              maxDate={maxDate}
              minDate={minDate}
              errorText={errors.datepicker?.message as string}
              onDatePopupClosed={withOnDatePopupClosed ? (): Promise<boolean> => trigger(datepicker) : undefined}
              {...register(datepicker, { validate: requireDate })}
            />
            <DateTimePickerWrapper errorText={(errors.datetimehour?.message as string) || (errors.datetimeminute?.message as string)}>
              <DateTime
                defaultValue={12}
                label={<Label labelId={'label01'} labelTexts={[{ text: 'Tid' }, { text: '(tt:mm)' }]} />}
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
          </DateTimePickerWrapper>
        </Validation>
        <Spacer size={'s'} />
        <Button type="submit">{'Send inn'}</Button>
      </form>
    </>
  );
};

export const Variants: Story = {
  render: args => {
    return (
      <div>
        <p>{longLoremText}</p>
        <DatePicker
          label={<Label labelTexts={[{ text: 'Dato' }, { text: '(dd.mm.åååå)' }]} />}
          {...args}
          dateValue={args.dateValue ? new Date(Number(args.dateValue)) : undefined}
          disableDays={args.disableDays ? [new Date(Number(args.disableDays))] : undefined}
          maxDate={args.maxDate ? new Date(Number(args.maxDate)) : undefined}
          minDate={args.minDate ? new Date(Number(args.minDate)) : undefined}
        />
        <p>{longLoremText}</p>
      </div>
    );
  },
};

export const AriaLabels: Story = {
  args: {
    ariaLabels: {
      dayButtonBase: 'Standard tekst for {date}',
      dayButtonToday: 'I dag, {date}',
      dayButtonSelected: '{date}, valgt',
      nextMonth: 'Neste måned',
      previousMonth: 'Forrige måned',
      monthDropdown: 'Velg måned',
      yearDropdown: 'Velg år',
    },
  },
  render: args => {
    return (
      <DatePicker
        label={<Label labelTexts={[{ text: 'Dato' }, { text: '(dd.mm.åååå)' }]} />}
        {...args}
        dateValue={args.dateValue ? new Date(Number(args.dateValue)) : undefined}
        disableDays={args.disableDays ? [new Date(Number(args.disableDays))] : undefined}
        maxDate={args.maxDate ? new Date(Number(args.maxDate)) : undefined}
        minDate={args.minDate ? new Date(Number(args.minDate)) : undefined}
      />
    );
  },
};

export const WithLanguageProvider: Story = {
  render: args => {
    const [language, setLanguage] = useState<LanguageLocales>(LanguageLocales.ENGLISH);

    return (
      <LanguageProvider<LanguageLocales> language={language}>
        <Button onClick={() => setLanguage(LanguageLocales.NORWEGIAN)} variant="outline">
          {'Bytt til bokmål'}
        </Button>
        <Button onClick={() => setLanguage(LanguageLocales.ENGLISH)} variant="outline">
          {'Switch to English'}
        </Button>
        <Spacer />
        <span>{`Valgt språk: ${language}`}</span>
        <Spacer />
        <DatePicker
          label={<Label labelTexts={[{ text: 'Dato' }, { text: '(dd.mm.åååå)' }]} />}
          {...args}
          dateValue={args.dateValue ? new Date(Number(args.dateValue)) : undefined}
          disableDays={args.disableDays ? [new Date(Number(args.disableDays))] : undefined}
          maxDate={args.maxDate ? new Date(Number(args.maxDate)) : undefined}
          minDate={args.minDate ? new Date(Number(args.minDate)) : undefined}
        />
      </LanguageProvider>
    );
  },
};
