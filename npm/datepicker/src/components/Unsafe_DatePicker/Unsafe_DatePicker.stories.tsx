import { useState } from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { action } from 'storybook/actions';

import Button from '@helsenorge/designsystem-react/components/Button';
import Input from '@helsenorge/designsystem-react/components/Input';
import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';
import Title from '@helsenorge/designsystem-react/components/Title';

import Unsafe_DatePicker, { Matcher, Modifiers, Unsafe_ISODatePicker } from './index';

const meta = {
  title: '@helsenorge/datepicker/Unsafe_DatePicker',
  component: Unsafe_DatePicker,
  args: {
    withClearButton: true,
    id: 'date-picker',
    ['aria-describedby']: 'sublabel-format',
    label: (
      <Label
        labelTexts={[{ text: 'Dato test' }]}
        sublabel={<Sublabel id="sublabel-format" sublabelTexts={[{ text: 'dd.mm.åååå', type: 'subdued' }]} />}
      />
    ),
  },
  argTypes: {
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
    animate: { control: 'boolean' },
    fixedWeeks: { control: 'boolean' },
  },
} satisfies Meta<typeof Unsafe_DatePicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return <Unsafe_DatePicker {...args} value={value} onChange={setValue} />;
  },
};

export const WithDefaultValue: Story = {
  render: args => {
    const [value, setValue] = useState<Date | undefined>(new Date('2025-12-03'));
    return (
      <>
        <Unsafe_DatePicker {...args} value={value} onChange={value => setValue(value)} />
        <br />
        <span>{'Value: ' + value}</span>
      </>
    );
  },
};

export const WithFooter: Story = {
  args: {
    showGoToTodayButton: true,
    footer: (
      <Button onClick={action('Clicked')} variant="borderless">
        {'Gå til nærmeste ledige time'}
      </Button>
    ),
  },
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return (
      <>
        <Unsafe_DatePicker {...args} value={value} onChange={setValue} />
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
    const emphasized: Matcher[] = [{ from: today, to: new Date('08-11-2026') }];
    const disabled = [{ from: new Date('01-01-0000'), to: yesterday }];
    const partiallyBooked = [tomorrow, new Date('12-31-2025')];
    const startMonth = new Date();
    startMonth.setMonth(today.getMonth());
    const endMonth = new Date();
    endMonth.setMonth(today.getMonth() + 3);

    return (
      <>
        <Unsafe_DatePicker
          {...args}
          value={value}
          onChange={setValue}
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

// @todo: gjør ferdig denne funksjonaliteten
// export const WithHelpBubbles: Story = {
//   args: {
//     helpBubbleTexts: [
//       {
//         id: 'disabledPast',
//         dates: [{ from: new Date(0), to: new Date() }],
//         text: 'Du kan ikke velge datoer i fortiden',
//       },
//       {
//         id: 'emphasizedWeekends',
//         dates: [{ dayOfWeek: [0, 6] }],
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
//         <Unsafe_DatePicker {...args} value={value} onChange={setValue} />
//         <br />
//         <span>{'Value: ' + value}</span>
//       </>
//     );
//   },
// };

export const ISO: Story = {
  render: args => {
    const [value, setValue] = useState<string>('2025-12-03');
    return (
      <>
        <Unsafe_ISODatePicker {...args} value={value} onChange={setValue} />
        <br />
        <span>{'Value: ' + value}</span>
      </>
    );
  },
};

export const MultipleFields: Story = {
  render: args => {
    const [value, setValue] = useState<string>('2025-12-03');
    return (
      <>
        <Input />
        <br />
        <Unsafe_ISODatePicker {...args} value={value} onChange={setValue} />
        <br />
        <span>{'Value: ' + value}</span>
      </>
    );
  },
};

export const VoiceOver: Story = {
  render: args => {
    const [value, setValue] = useState<Date | undefined>();
    return (
      <div>
        <Title>{'Med aria-describedby'}</Title>
        <Unsafe_DatePicker
          {...args}
          label={
            <Label
              labelTexts={[{ text: 'Fødselsdato' }]}
              sublabel={<Sublabel id="sublabel-format" sublabelTexts={[{ text: 'dd.mm.åååå', type: 'subdued' }]} />}
            />
          }
          aria-describedby="sublabel-format"
          value={value}
          onChange={setValue}
        />
        <br />
        <Title>{'Med aria-labelledby'}</Title>
        <Unsafe_DatePicker
          {...args}
          label={
            <Label
              labelId="date-label"
              labelTexts={[{ text: 'Fødselsdato' }]}
              sublabel={<Sublabel id="sublabel-format" sublabelTexts={[{ text: 'dd.mm.åååå', type: 'subdued' }]} />}
            />
          }
          aria-labelledby="date-label sublabel-format"
          value={value}
          onChange={setValue}
        />
        <br />
        <Title>{'Med sublabel skjult for skjermleser'}</Title>
        <Unsafe_DatePicker
          {...args}
          label={
            <Label
              labelTexts={[{ text: 'Fødselsdato' }]}
              sublabel={
                <Sublabel id="sublabel-format" sublabelTexts={[{ text: 'dd.mm.åååå', type: 'subdued', hideFromScreenReader: true }]} />
              }
            />
          }
          value={value}
          onChange={setValue}
        />
        <br />
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
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
<Unsafe_DatePicker 
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
    return <Unsafe_DatePicker {...args} />;
  },
};

export const WithChangingValue: Story = {
  render: args => {
    const [value, setValue] = useState<Date | undefined>(new Date('2025-12-03'));
    return (
      <>
        <Unsafe_DatePicker {...args} value={value} onChange={value => setValue(value)} />
        <br />
        <span>{'Value: ' + value}</span>
        <br />
        <Button onClick={() => setValue(new Date())}>{'Sett til dagens dato'}</Button>
      </>
    );
  },
};
