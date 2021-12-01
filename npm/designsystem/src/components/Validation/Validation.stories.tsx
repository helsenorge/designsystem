import React from 'react';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import Validation from './Validation';

import { useForm } from 'react-hook-form';
import FormGroup, { FormGroupModes, FormGroupVariants } from '../FormGroup/FormGroup';

import Checkbox from '../Checkbox';
import Button from '../Button';

const stories = storiesOf('Validation', module);
stories.addDecorator(withKnobs);

interface FormExampleProps {
  exampleType: FormExampleVariants;
}

export enum FormExampleVariants {
  formgroup = 'formgroup',
  checkbox = 'checkbox',
}

export const FormExample = React.forwardRef((props: FormExampleProps, ref: React.ForwardedRef<HTMLElement>) => {
  const { exampleType = FormExampleVariants.formgroup } = props;
  const { register, handleSubmit, errors } = useForm();
  const formGroup1 = 'formgroup1';
  const formGroup2 = 'formgroup2';
  const allErrors = errors[formGroup1] || errors[formGroup2];
  const errorMessage = 'Du må velge et alternativ';
  const errorMessage2 = 'Du må velge to alternativ';

  const requireTwo = (value: Array<string>) => {
    return value.length >= 2 || errorMessage2;
  };

  const getFormExample = () => {
    if (exampleType === FormExampleVariants.formgroup) {
      return (
        <>
          <FormGroup
            title={text('Title 1', 'One amazing title')}
            legend={text('Legend 1', 'Check out these checkboxes!')}
            mode={select('Mode', FormGroupModes, FormGroupModes.onWhite)}
            variant={select('Variant', FormGroupVariants, FormGroupVariants.normal)}
            error={errors[formGroup1] ? errors[formGroup1].message : undefined}
          >
            <Checkbox name={formGroup1} label={'Checkbox 1'} ref={register({ required: errorMessage })} />
            <Checkbox name={formGroup1} label={'Checkbox 2'} ref={register({ required: errorMessage })} />
            <Checkbox name={formGroup1} label={'Checkbox 3'} ref={register({ required: errorMessage })} />
          </FormGroup>
          <FormGroup
            legend={text('Legend 2', 'Select two options!')}
            mode={select('Mode', FormGroupModes, FormGroupModes.onWhite)}
            variant={select('Variant', FormGroupVariants, FormGroupVariants.normal)}
            error={errors[formGroup2] ? errors[formGroup2].message : undefined}
          >
            <Checkbox name={formGroup2} label={'Checkbox 4'} ref={register({ validate: requireTwo })} />
            <Checkbox name={formGroup2} label={'Checkbox 5'} ref={register({ validate: requireTwo })} />
            <Checkbox name={formGroup2} label={'Checkbox 6'} ref={register({ validate: requireTwo })} />
          </FormGroup>
        </>
      );
    } else if (exampleType === FormExampleVariants.checkbox) {
      return (
        <>
          <Checkbox
            name={formGroup1}
            label={'Checkbox 1'}
            error={errors[formGroup1]}
            errorText={errors[formGroup1] ? errors[formGroup1].message : undefined}
            mode={select('Mode', FormGroupModes, FormGroupModes.onWhite)}
            variant={select('Variant', FormGroupVariants, FormGroupVariants.normal)}
            ref={register({ required: errorMessage })}
          />
        </>
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(data => {
        console.log(data);
      })}
    >
      <Validation
        variant={select('Variant', FormGroupVariants, FormGroupVariants.normal)}
        errorSummary={allErrors ? 'Sjekk at alt er riktig utfylt' : undefined}
      >
        {getFormExample()}
      </Validation>
      <br />
      <Button>{'Submit'}</Button>
    </form>
  );
});

// TODO: Ta i bruk eksempel for to krevd checkbox

stories.add('FormGroup', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <FormExample exampleType={FormExampleVariants.formgroup} />
  </div>
));

stories.add('Checkbox', () => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <FormExample exampleType={FormExampleVariants.checkbox} />
  </div>
));
