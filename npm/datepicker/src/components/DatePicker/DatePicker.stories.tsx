import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useForm } from 'react-hook-form';

// TODO: FIKS IMPORT - hent fra designsystem pakken ikke lokale filplasseringer

import DatePicker from './DatePicker';
import DateTime from './DateTime';
import DateTimePickerWrapper from './DateTimePickerWrapper';
import Button from '../../../../designsystem/src/components/Button';
import GridExample from '../../../../designsystem/src/components/GridExample';
import Icon from '../../../../designsystem/src/components/Icons';
import Calendar from '../../../../designsystem/src/components/Icons/Calendar';
import Label from '../../../../designsystem/src/components/Label';
import Validation from '../../../../designsystem/src/components/Validation';

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av DatePicker',
      },
    },
  },

  argTypes: {},
} as ComponentMeta<typeof DatePicker>;

export const Default: ComponentStory<typeof DatePicker> = (args: any) => (
  <GridExample>
    <DatePicker {...args} />
  </GridExample>
);

export const ValidationTest: ComponentStory<typeof DatePicker> = (args: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const [startDate] = React.useState(new Date());
  const minDate = new Date();
  const maxDate = new Date();
  const disabledDate = new Date();
  minDate.setDate(startDate.getDate() - 30);
  maxDate.setDate(startDate.getDate() + 30);
  disabledDate.setDate(startDate.getDate() - 3);

  const datepicker = 'datepicker';
  const datetimehour = 'datetimehour';
  const datetimeminute = 'datetimeminute';

  const requireTime = (value: string): true | string => {
    console.log('Validating time: ', value);

    return value ? true : 'Du må fylle inn et tidspunkt';
  };

  const requireDate = (value: Date | string): true | string => {
    console.log('Validating date: ', value);

    return value ? true : 'Du må fylle inn en dato';
  };

  const onSubmit = data => {
    console.log('Date submitted', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Validation
        errorSummary={errors.datepicker || errors.datetimehour || errors.datetimeminute ? 'Sjekk at alt er riktig utfylt' : undefined}
      >
        <DateTimePickerWrapper
          errorText={
            (errors.datepicker?.message as string) || (errors.datetimehour?.message as string) || (errors.datetimeminute?.message as string)
          }
        >
          <DatePicker
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
            {...register(datetimehour, { validate: requireTime })}
          />
          <DateTime
            defaultValue={0}
            aria-labelledby={'label01'}
            timeUnit={'minutes'}
            {...register(datetimeminute, { validate: requireTime })}
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
};
