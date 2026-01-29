/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { enGB, nb, nn, se } from 'date-fns/locale';
import { Modifiers } from 'react-day-picker';

import Title from '@helsenorge/designsystem-react/components/Title';

import { Unsafe_DatePickerStandalone, Unsafe_DatePickerStandaloneProps } from './index';

const meta = {
  title: '@helsenorge/datepicker/Unsafe_DatePicker/Unsafe_DatePickerStandalone',
  component: Unsafe_DatePickerStandalone,
  args: {},
  argTypes: {
    selectedDate: { control: 'date' },
    onDateChange: { action: 'date changed' },
    isLoading: { control: 'boolean' },
    modifiers: { control: 'object' },
    showGoToTodayButton: { control: 'boolean' },
    resources: { control: 'object' },
    // helpBubbleTexts: { control: 'object' },
    startMonth: { control: 'date' },
    endMonth: { control: 'date' },
    captionLayout: {
      control: { type: 'select' },
      options: ['dropdown', 'label'],
    },
    footer: { control: 'object' },
    fixedWeeks: { control: 'boolean' },
    labelsForCalendar: { control: 'object' },
  },
} satisfies Meta<Unsafe_DatePickerStandaloneProps>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return <Unsafe_DatePickerStandalone {...args} selectedDate={value} onDateChange={setValue} />;
  },
};

export const StandaloneValue: Story = {
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return (
      <>
        <Unsafe_DatePickerStandalone {...args} selectedDate={value} onDateChange={setValue} />
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
        <Unsafe_DatePickerStandalone {...args} selectedDate={value} onDateChange={setValue} />
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
        <Unsafe_DatePickerStandalone
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

// export const WithHelpBubbles: Story = {
//   args: {
//     helpBubbleTexts: [
//       {
//         id: 'disabledPast',
//         dates: { from: new Date(0), to: new Date() },
//         text: 'Du kan ikke velge datoer i fortiden',
//       },
//       {
//         id: 'emphasizedWeekends',
//         dates: { dayOfWeek: [0, 6] },
//         text: 'Helgedager er markert',
//       },
//     ],
//     modifiers: {
//       disabled: [{ from: new Date(0), to: new Date() }],
//     },
//   },
//   render: args => {
//     const [value, setValue] = useState<Date>();
//     return (
//       <>
//         <Unsafe_DatePickerStandalone {...args} selectedDate={value} onDateChange={setValue} />
//         <br />
//         <span>{'Value: ' + value}</span>
//       </>
//     );
//   },
// };

export const Locales: Story = {
  args: {
    captionLayout: 'dropdown',
  },
  render: args => {
    return (
      <div>
        <Title>{'Norsk bokmål'}</Title>
        <Unsafe_DatePickerStandalone {...args} localeForCalendar={nb} />
        <br />
        <Title>{'Norsk nynorsk'}</Title>
        <Unsafe_DatePickerStandalone {...args} localeForCalendar={nn} />
        <br />
        <Title>{'Engelsk'}</Title>
        <Unsafe_DatePickerStandalone {...args} localeForCalendar={enGB} />
        <br />
        <Title>{'Samisk'}</Title>
        <Unsafe_DatePickerStandalone {...args} localeForCalendar={se} />
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
      labelGridcell: (date: Date, modifiers?: Modifiers) => `Dato ${date.getDate()}`,
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
<Unsafe_DatePickerStandalone 
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
    return <Unsafe_DatePickerStandalone {...args} />;
  },
};
