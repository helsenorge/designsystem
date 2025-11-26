import React, { useRef } from 'react';

import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  hide,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
} from '@floating-ui/react';
import { StoryObj, Meta } from '@storybook/react-vite';
import { nb } from 'date-fns/locale';

import Button from '@helsenorge/designsystem-react/components/Button';
import Icon from '@helsenorge/designsystem-react/components/Icon';
import Calendar from '@helsenorge/designsystem-react/components/Icons/Calendar';
import Input from '@helsenorge/designsystem-react/components/Input';
import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';
import Toggle from '@helsenorge/designsystem-react/components/Toggle';
import longLoremText from '@helsenorge/designsystem-react/utils/loremtext';

import { useToggle } from '@helsenorge/designsystem-react';

import BaseDayPicker from './BaseDayPicker';
import NewDayPicker from './NewDatePicker';

const meta = {
  title: '@helsenorge/datepicker/NewDatePicker',
  component: NewDayPicker,
  args: {
    locale: nb,
  },
  argTypes: {
    standalone: {
      control: 'boolean',
    },
    withClearButton: {
      control: 'boolean',
    },
    label: {
      control: 'object',
    },
    selectedDate: {
      control: 'date',
    },
    onDateChange: {
      action: 'onDateChange',
    },
    isLoading: {
      control: 'boolean',
    },
    modifiers: {
      control: 'object',
    },
    showGoToTodayButton: {
      control: 'boolean',
    },
    resources: {
      control: 'object',
    },
    locale: {
      control: 'object',
    },
    fixedWeeks: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof NewDayPicker>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const [selected, setSelected] = React.useState<Date | undefined>(undefined);
    return (
      <>
        <NewDayPicker selectedDate={selected} onDateChange={setSelected} {...args} />
      </>
    );
  },
};

export const Standalone: Story = {
  args: {
    standalone: true,
  },
  render: args => {
    const [selected, setSelected] = React.useState<Date | undefined>(undefined);
    return (
      <>
        <NewDayPicker selectedDate={selected} onDateChange={setSelected} {...args} />
      </>
    );
  },
};

export const Timeavtaler: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | undefined>(undefined);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const captionLayout = 'dropdown';
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const emphasized = [{ from: today, to: new Date('08-11-2026') }];
    const disabled = [{ from: new Date('01-01-0000'), to: yesterday }];
    const partiallyBooked = [tomorrow];
    const startMonth = new Date();
    startMonth.setMonth(today.getMonth() - 3);
    const endMonth = new Date();
    endMonth.setMonth(today.getMonth() + 3);

    return (
      <>
        <span>
          {'Selected date: '}
          {selected ? selected.toDateString() : 'none'}
        </span>
        <Toggle
          label={[
            {
              text: 'Loading',
            },
          ]}
          checked={isLoading}
          onChange={() => setIsLoading(!isLoading)}
        />
        <BaseDayPicker
          selectedDate={selected}
          onDateChange={setSelected}
          captionLayout={captionLayout}
          startMonth={startMonth}
          endMonth={endMonth}
          isLoading={isLoading}
          modifiers={{
            emphasized: emphasized,
            disabled: disabled,
            partiallyBooked: partiallyBooked,
          }}
        />
      </>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | undefined>(undefined);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const captionLayout = 'dropdown';

    return (
      <>
        <span>
          {'Selected date: '}
          {selected ? selected.toDateString() : 'none'}
        </span>
        <Toggle
          label={[
            {
              text: 'Loading',
            },
          ]}
          checked={isLoading}
          onChange={() => setIsLoading(!isLoading)}
        />
        <BaseDayPicker
          showGoToTodayButton
          footer={
            <Button onClick={() => console.log('Clicked')} variant="borderless">
              {'Gå til nærmeste ledige time'}
            </Button>
          }
          selectedDate={selected}
          onDateChange={setSelected}
          isLoading={isLoading}
          captionLayout={captionLayout}
        />
      </>
    );
  },
};

export const WithTodayButton: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | undefined>(undefined);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    return (
      <>
        <Toggle
          label={[
            {
              text: 'Loading',
            },
          ]}
          checked={isLoading}
          onChange={() => setIsLoading(!isLoading)}
        />
        <BaseDayPicker showGoToTodayButton selectedDate={selected} onDateChange={setSelected} isLoading={isLoading} />
      </>
    );
  },
};

export const PreFilled: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | undefined>(new Date());
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const captionLayout = 'label';

    return (
      <>
        <span>
          {'Selected date: '}
          {selected ? selected.toDateString() : 'none'}
        </span>
        <Toggle
          label={[
            {
              text: 'Loading',
            },
          ]}
          checked={isLoading}
          onChange={() => setIsLoading(!isLoading)}
        />
        <BaseDayPicker
          navLayout="after"
          selectedDate={selected}
          onDateChange={setSelected}
          isLoading={isLoading}
          captionLayout={captionLayout}
        />
      </>
    );
  },
};

export const Popup: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Date | undefined>(undefined);
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const controllerRef = useRef<HTMLDivElement>(null);
    const { value, toggleValue } = useToggle(false);
    const { refs, floatingStyles, context, middlewareData } = useFloating({
      placement: 'bottom-start',
      middleware: [offset(8), flip({ mainAxis: true, crossAxis: false }), shift({ mainAxis: true, padding: 8 }), hide()],
      whileElementsMounted: autoUpdate,
      elements: {
        reference: controllerRef.current,
      },
    });

    const click = useClick(context);
    const dismiss = useDismiss(context);

    const { getFloatingProps } = useInteractions([click, dismiss]);
    const isVisible = value && !middlewareData.hide?.referenceHidden;

    return (
      <>
        <span>{longLoremText}</span>
        <span>
          {'Selected date: '}
          {selected ? selected.toDateString() : 'none'}
        </span>
        <Toggle
          label={[
            {
              text: 'Loading',
            },
          ]}
          checked={isLoading}
          onChange={() => setIsLoading(!isLoading)}
        />
        <div ref={controllerRef}>
          <Input
            label={<Label labelTexts={[{ text: 'Velg dato' }]} />}
            width={10}
            rightOfInput={
              <Button onClick={toggleValue} ariaLabel="Open datepicker" variant="outline">
                <Icon svgIcon={Calendar} />
              </Button>
            }
          />
        </div>
        {value && (
          <FloatingFocusManager context={context} modal={false}>
            <div ref={refs.setFloating} style={{ ...floatingStyles, visibility: isVisible ? 'visible' : 'hidden' }} {...getFloatingProps()}>
              <BaseDayPicker
                navLayout="around"
                captionLayout="label"
                selectedDate={selected}
                onDateChange={setSelected}
                isLoading={isLoading}
              />
            </div>
          </FloatingFocusManager>
        )}
        <br />
        <span>{longLoremText}</span>
        <span>{longLoremText}</span>
        <span>{longLoremText}</span>
        <span>{longLoremText}</span>
      </>
    );
  },
};

export const New: Story = {
  render: () => {
    return (
      <>
        <span>{longLoremText}</span>
        <span>{longLoremText}</span>
        <br />
        <NewDayPicker
          withClearButton={true}
          label={
            <Label
              labelTexts={[{ text: 'Dato' }]}
              sublabel={<Sublabel id="sublabel-testid1" sublabelTexts={[{ text: 'dd.mm.åååå', type: 'subdued' }]} />}
            />
          }
        />
        <br />
        <span>{longLoremText}</span>
        <span>{longLoremText}</span>
        <NewDayPicker standalone captionLayout="dropdown" />
        <br />
        <span>{longLoremText}</span>
        <span>{longLoremText}</span>
      </>
    );
  },
};
