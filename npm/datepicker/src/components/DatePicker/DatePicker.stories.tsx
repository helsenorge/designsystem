import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useForm } from 'react-hook-form';

// TODO: FIKS IMPORT - hent fra designsystem pakken ikke lokale filplasseringer

import DatePicker from './DatePicker';
import Button from '../../../../designsystem/src/components/Button';
import GridExample from '../../../../designsystem/src/components/GridExample';
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

  const datepicker = 'datepicker';

  const requireDate = (value: Date | string): true | string => {
    console.log('Validating: ', value);

    return value ? true : 'Du må fylle inn en dato';
  };

  const onSubmit = data => {
    console.log('Date submitted', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Validation errorSummary={errors.datepicker ? 'Sjekk at alt er riktig utfylt' : undefined}>
        <DatePicker
          dateValue={startDate}
          errorText={errors.datepicker?.message as string}
          label={<Label labelTexts={[{ text: 'Dato', type: 'semibold' }, { text: '(dd.mm.åååå)' }]} />}
          {...register(datepicker, { validate: requireDate })}
        />
      </Validation>
      <Button type="submit">{'Send inn'}</Button>
    </form>
  );
};

export const DateRangePicker: ComponentStory<typeof DatePicker> = (args: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'all' });

  const [startDate] = React.useState(new Date());

  const datepicker = 'datepicker';

  const requireDate = (value: Date | string): true | string => {
    console.log('Validating: ', value);

    return value ? true : 'Du må fylle inn en dato';
  };

  const onSubmit = data => {
    console.log('Date submitted', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Validation errorSummary={errors.datepicker ? 'Sjekk at alt er riktig utfylt' : undefined}>
        <DatePicker
          dateValue={startDate}
          errorText={errors.datepicker?.message as string}
          label={<Label labelTexts={[{ text: 'Dato', type: 'semibold' }, { text: '(dd.mm.åååå)' }]} />}
          mode={'range'}
          {...register(datepicker, { validate: requireDate })}
        />
      </Validation>
      <Button type="submit">{'Send inn'}</Button>
    </form>
  );
};
