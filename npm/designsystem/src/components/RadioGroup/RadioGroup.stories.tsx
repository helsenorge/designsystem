import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useForm } from 'react-hook-form';

import RadioGroup from './RadioGroup';
import RadioGroupButton from './RadioGroupButton';
import GridExample from '../GridExample';
import Label from '../Label';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av RadioGroup',
      },
    },
  },
  argTypes: {
    id: {
      defaultValue: 'test',
      description: 'ID for gruppe',
    },
  },
} as ComponentMeta<typeof RadioGroup>;

export const Default: ComponentStory<typeof RadioGroup> = (args: any) => (
  <GridExample>
    <RadioGroup defaultCheckedRadioButton={1} {...args}>
      <RadioGroupButton label={<Label labelTexts={[{ text: `Label onwhite` }]} />} mode="onwhite" />
      <RadioGroupButton label={<Label labelTexts={[{ text: 'Label ongrey' }]} />} mode="ongrey" />
      <RadioGroupButton label={<Label labelTexts={[{ text: 'Label onblueberry' }]} />} mode="onblueberry" />
      <RadioGroupButton label={<Label labelTexts={[{ text: 'Label onwhite - disabled' }]} />} mode="onwhite" disabled />
    </RadioGroup>
  </GridExample>
);

export const ReactHookForm: ComponentStory<typeof RadioGroup> = (args: any) => {
  const form = useForm({ mode: 'onChange' });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <GridExample>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RadioGroup onChange={onSubmit} {...args}>
          <RadioGroupButton {...register('Testform')} label={<Label labelTexts={[{ text: 'Label onwhite' }]} />} mode="onwhite" />
          <RadioGroupButton {...register('Testform')} label={<Label labelTexts={[{ text: 'Label ongrey' }]} />} mode="ongrey" />
          <RadioGroupButton
            {...register('Testform')}
            label={<Label labelTexts={[{ text: 'Label onblueberry' }]} />}
            mode="onblueberry"
            checked
          />
          <RadioGroupButton
            {...register('Testform')}
            label={<Label labelTexts={[{ text: 'Label onwhite - disabled' }]} />}
            mode="onwhite"
            disabled
          />
        </RadioGroup>
        <button type="submit">Bekreft</button>
        <pre>{JSON.stringify(form.watch(), null, 2)}</pre>
      </form>
    </GridExample>
  );
};
