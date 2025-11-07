import React from 'react';

import { useForm } from 'react-hook-form';

import type { Meta, StoryObj } from '@storybook/react-vite';

import Button from '@helsenorge/designsystem-react/components/Button';
import Checkbox from '@helsenorge/designsystem-react/components/Checkbox';
import FormGroup from '@helsenorge/designsystem-react/components/FormGroup';
import Hospital from '@helsenorge/designsystem-react/components/Icons/Hospital';
import Input from '@helsenorge/designsystem-react/components/Input';
import Label from '@helsenorge/designsystem-react/components/Label';
import RadioButton from '@helsenorge/designsystem-react/components/RadioButton';
import Select from '@helsenorge/designsystem-react/components/Select';
import Spacer from '@helsenorge/designsystem-react/components/Spacer';
import Textarea from '@helsenorge/designsystem-react/components/Textarea';
import Validation from '@helsenorge/designsystem-react/components/Validation';

const meta: Meta = {
  title: 'Documentation/Examples/Form with React Hook Form',
  parameters: {
    docs: {
      description: {
        component:
          'This example demonstrates how to use components from @helsenorge/designsystem-react with react-hook-form. ' +
          'This story lives in the docs/guide workspace and has its own dependencies.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => {
    interface FormExampleData {
      sizes: string[];
      positions: string;
      story: string;
      name: string;
      monster: string[];
    }

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormExampleData>();

    const sizeErrorMessage = 'Du må velge minst to størrelser';
    const positionErrorMessage = 'Du må velge minst én plassering';
    const storyErrorMessage = 'Historien må være på maks 40 tegn';
    const nameErrorMessage = 'Navn må fylles ut';
    const monsterErrorMessage = 'Du må velge "Frankenstein"';

    const requireTwo = (value: Array<string>): true | string => {
      return value.length >= 2 || sizeErrorMessage;
    };

    const requireFrankenstein = (value: Array<string>): true | string => {
      return value.toString() === 'Frankenstein' || monsterErrorMessage;
    };

    return (
      <form
        noValidate
        onSubmit={handleSubmit(data => {
          console.table(data);
        })}
      >
        <Validation errorTitle={'Sjekk at alt er riktig utfylt:'} errors={errors}>
          <FormGroup legend={'Størrelser'} error={errors.sizes ? errors.sizes.message : undefined} errorTextId="error1">
            <Checkbox
              inputId="sizes1"
              label={<Label labelTexts={[{ text: 'Small' }]} />}
              {...register('sizes', { validate: requireTwo })}
            />
            <Checkbox
              inputId="sizes2"
              label={<Label labelTexts={[{ text: 'Medium' }]} />}
              {...register('sizes', { validate: requireTwo })}
            />
            <Checkbox
              inputId="sizes3"
              label={<Label labelTexts={[{ text: 'Large' }]} />}
              {...register('sizes', { validate: requireTwo })}
            />
          </FormGroup>
          <Spacer />
          <FormGroup legend={'Plassering'} error={errors.positions ? (errors.positions.message as string) : undefined} errorTextId="error2">
            <RadioButton
              inputId="positions1"
              label={<Label labelTexts={[{ text: 'Venstre', type: 'normal' }]} />}
              {...register('positions', { required: positionErrorMessage })}
            />
            <RadioButton
              inputId="positions2"
              label={<Label labelTexts={[{ text: 'Høyre', type: 'normal' }]} />}
              {...register('positions', { required: positionErrorMessage })}
            />
            <RadioButton
              inputId="positions3"
              label={<Label labelTexts={[{ text: 'Midten', type: 'normal' }]} />}
              {...register('positions', { required: positionErrorMessage })}
            />
          </FormGroup>
          <Spacer />
          <Textarea
            errorText={errors.story ? (errors.story.message as string) : undefined}
            errorTextId="error3"
            defaultValue={'Dette er en test \\n\\n Hello \\n\\n test \\n\\n test test'}
            grow
            maxCharacters={40}
            minRows={5}
            label={<Label labelTexts={[{ text: 'Historie' }]} />}
            textareaId="story"
            {...register('story', { maxLength: { value: 40, message: storyErrorMessage } })}
          />
          <Input
            errorText={errors.name ? (errors.name.message as string) : undefined}
            errorTextId="error4"
            label={<Label labelTexts={[{ text: 'Navn' }]} />}
            placeholder={'Skriv noe!'}
            icon={Hospital}
            inputId="name"
            {...register('name', { required: nameErrorMessage })}
          />
          <Select
            errorText={errors.monster ? (errors.monster.message as string) : undefined}
            errorTextId="error5"
            selectId="monster"
            label={<Label labelTexts={[{ text: 'Velg et monster' }]} />}
            {...register('monster', { validate: requireFrankenstein })}
          >
            <option value={'Troll'}>{'Troll'}</option>
            <option value={'Frankenstein'}>{'Frankenstein'}</option>
          </Select>
        </Validation>
        <Spacer />
        <Button type="submit">{'Send inn'}</Button>
      </form>
    );
  },
};
