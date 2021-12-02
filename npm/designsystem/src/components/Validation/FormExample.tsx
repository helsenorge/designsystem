import React from 'react';
import { useForm } from 'react-hook-form';

import Validation from './Validation';
import FormGroup, { FormGroupVariants } from '../FormGroup/FormGroup';
import Checkbox from '../Checkbox';
import Button from '../Button';

interface FormExampleProps {
  exampleType: FormExampleVariants;
  variant?: FormGroupVariants;
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
            title={'One amazing title'}
            legend={'Check out these checkboxes!'}
            error={errors[formGroup1] ? errors[formGroup1].message : undefined}
          >
            <Checkbox name={formGroup1} label={'Checkbox 1'} ref={register({ required: errorMessage })} />
            <Checkbox name={formGroup1} label={'Checkbox 2'} ref={register({ required: errorMessage })} />
            <Checkbox name={formGroup1} label={'Checkbox 3'} ref={register({ required: errorMessage })} />
          </FormGroup>
          <FormGroup legend={'Select two options!'} error={errors[formGroup2] ? errors[formGroup2].message : undefined}>
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
      <Validation variant={props.variant} errorSummary={allErrors ? 'Sjekk at alt er riktig utfylt' : undefined}>
        {getFormExample()}
      </Validation>
      <br />
      <Button>{'Submit'}</Button>
    </form>
  );
});

export default FormExample;
