/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

import { enGB, nb, nn, se } from 'date-fns/locale';

import type { DatePickerStandaloneProps } from './index';
import type { StoryObj, Meta } from '@storybook/react-vite';
import type { Modifiers } from 'react-day-picker';

import Title from '@helsenorge/designsystem-react/components/Title';

import { DatePickerStandalone } from './index';

const meta = {
  title: '@helsenorge/datepicker/DatePicker/DatePickerStandalone',
  component: DatePickerStandalone,
  args: {},
  argTypes: {
    selectedDate: { control: 'date' },
    onDateChange: { action: 'date changed' },
    isLoading: { control: 'boolean' },
    modifiers: { control: 'object' },
    showGoToTodayButton: { control: 'boolean' },
    resources: { control: 'object' },
    startMonth: { control: 'date' },
    endMonth: { control: 'date' },
    defaultMonth: { control: 'date' },
    captionLayout: {
      control: { type: 'select' },
      options: ['dropdown', 'label'],
    },
    footer: { control: 'object' },
    fixedWeeks: { control: 'boolean' },
    labelsForCalendar: { control: 'object' },
  },
} satisfies Meta<DatePickerStandaloneProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return <DatePickerStandalone {...args} selectedDate={value} onDateChange={setValue} />;
  },
};

export const StandaloneValue: Story = {
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return (
      <>
        <DatePickerStandalone {...args} selectedDate={value} onDateChange={setValue} />
        <br />
        <span>{'Value: ' + value}</span>
      </>
    );
  },
};

export const WithDefaultValue: Story = {
  render: args => {
    const [value, setValue] = useState<Date | undefined>(new Date());
    return (
      <>
        <DatePickerStandalone {...args} selectedDate={value} onDateChange={setValue} />
        <br />
        <span>{'Value: ' + value}</span>
      </>
    );
  },
};

export const ModifiersExample: Story = {
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const overtomorrow = new Date();
    overtomorrow.setDate(tomorrow.getDate() + 1);
    const emphasized = [{ from: today, to: new Date('08-11-2026') }];
    const disabled = [{ from: new Date('01-01-0000'), to: yesterday }];
    const partiallyBooked = [tomorrow, new Date('12-31-2025')];
    const startMonth = new Date();
    startMonth.setMonth(today.getMonth());
    const endMonth = new Date();
    endMonth.setMonth(today.getMonth() + 3);

    return (
      <>
        <DatePickerStandalone
          {...args}
          selectedDate={value}
          onDateChange={setValue}
          modifiers={{
            emphasized: emphasized,
            disabled: disabled,
            partiallyBooked: partiallyBooked,
            fullyBooked: [overtomorrow],
          }}
          startMonth={startMonth}
          endMonth={endMonth}
        />
        <br />
        <span>{'Value: ' + value}</span>
      </>
    );
  },
};

export const Locales: Story = {
  args: {
    captionLayout: 'dropdown',
  },
  render: args => {
    return (
      <div>
        <Title>{'Norsk bokmål'}</Title>
        <DatePickerStandalone {...args} localeForCalendar={nb} />
        <br />
        <Title>{'Norsk nynorsk'}</Title>
        <DatePickerStandalone {...args} localeForCalendar={nn} />
        <br />
        <Title>{'Engelsk'}</Title>
        <DatePickerStandalone {...args} localeForCalendar={enGB} />
        <br />
        <Title>{'Samisk'}</Title>
        <DatePickerStandalone {...args} localeForCalendar={se} />
      </div>
    );
  },
};

export const AriaLabels: Story = {
  args: {
    captionLayout: 'dropdown',
    labelsForCalendar: {
      labelDayButton: (date: Date, modifiers: Modifiers) =>
        `Dato ${date.toISOString()} ${modifiers?.selected ? ', er valgt' : ', ikke valgt'}`,
      labelGrid: (date: Date) => `Måned ${date.getMonth() + 1} År ${date.getFullYear()}`,
      labelGridcell: (date: Date, _modifiers?: Modifiers) => `Dato ${date.getDate()}`,
      labelMonthDropdown: () => 'Velg måned',
      labelNext: () => 'Neste måned',
      labelPrevious: () => 'Forrige måned',
      labelWeekday: (date: Date) => `${date.toLocaleDateString('nb-NO', { weekday: 'long' })}`,
      labelYearDropdown: () => 'Velg år',
    },
  },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
<DatePickerStandalone 
  labelsForCalendar={
    labelDayButton: (date: Date, modifiers: Modifiers) =>
      \`Dato \${date.toISOString()} \${modifiers?.selected ? ', er valgt' : ', ikke valgt'}\`,
    labelGrid: (date: Date) => \`Måned \${date.getMonth() + 1} År \${date.getFullYear()}\`,
    labelGridcell: (date: Date, modifiers?: Modifiers) => \`Dato \${date.getDate()}\`,
    labelMonthDropdown: () => 'Velg måned',
    labelNext: () => 'Neste måned',
    labelPrevious: () => 'Forrige måned',
    labelWeekday: (date: Date) => \`\${date.toLocaleDateString('nb-NO', { weekday: 'long' })}\`,
    labelYearDropdown: () => 'Velg år',
  } 
/>`,
      },
    },
  },
  render: args => {
    return <DatePickerStandalone {...args} />;
  },
};

export const DefaultMonth: Story = {
  args: { defaultMonth: new Date(2020, 2) },
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return <DatePickerStandalone {...args} selectedDate={value} onDateChange={setValue} />;
  },
};
