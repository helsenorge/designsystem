import React from 'react';
import { useForm } from 'react-hook-form';

import Validation from '../Validation';
import FormGroup, { FormVariant } from '../FormGroup/FormGroup';
import Checkbox from '../Checkbox';
import Button from '../Button';
import Textarea from '../Textarea';

interface FormExampleProps {
  exampleType: FormExampleVariants;
  variant?: FormVariant;
}

export enum FormExampleVariants {
  formgroup = 'formgroup',
  checkbox = 'checkbox',
  textarea = 'textarea',
}

export const FormExample = (props: FormExampleProps) => {
  const { exampleType = FormExampleVariants.formgroup } = props;
  const { register, handleSubmit, errors } = useForm();
  const formGroup1 = 'formgroup1';
  const formGroup2 = 'formgroup2';
  const formGroup3 = 'formgroup3';
  const allErrors = errors[formGroup1] || errors[formGroup2] || errors[formGroup3];
  const errorMessage = 'Du må velge et alternativ';
  const errorMessage2 = 'Du må velge to alternativ';
  const errorMessage3 = 'Det kan ikke legges inn mer enn 40 tegn';

  const requireTwo = (value: Array<string>): true | string => {
    return value.length >= 2 || errorMessage2;
  };

  const getFormExample = () => {
    if (exampleType === FormExampleVariants.formgroup) {
      return [
        <FormGroup
          key={0}
          title={'One amazing title'}
          legend={'Check out these checkboxes!'}
          error={errors[formGroup1] ? errors[formGroup1].message : undefined}
          variant={props.variant}
        >
          <Checkbox name={formGroup1} label={'Checkbox 1'} ref={register({ required: errorMessage })} />
          <Checkbox name={formGroup1} label={'Checkbox 2'} ref={register({ required: errorMessage })} />
          <Checkbox name={formGroup1} label={'Checkbox 3'} ref={register({ required: errorMessage })} />
        </FormGroup>,
        <FormGroup
          key={1}
          legend={'Select two options!'}
          error={errors[formGroup2] ? errors[formGroup2].message : undefined}
          variant={props.variant}
        >
          <Checkbox name={formGroup2} label={'Checkbox 4'} ref={register({ validate: requireTwo })} />
          <Checkbox name={formGroup2} label={'Checkbox 5'} ref={register({ validate: requireTwo })} />
          <Checkbox name={formGroup2} label={'Checkbox 6'} ref={register({ validate: requireTwo })} />
        </FormGroup>,
      ];
    } else if (exampleType === FormExampleVariants.checkbox) {
      return (
        <>
          <Checkbox
            name={formGroup1}
            label={'Checkbox 1'}
            error={errors[formGroup1]}
            errorText={errors[formGroup1] ? errors[formGroup1].message : undefined}
            variant={props.variant}
            ref={register({ required: errorMessage })}
          />
        </>
      );
    } else if (exampleType === FormExampleVariants.textarea) {
      return (
        <>
          <Textarea
            errorText={errors[formGroup3] ? errors[formGroup3].message : undefined}
            value={`Dette er min historie \n\n Hello \n\n test`}
            grow
            max={40}
            minRows={5}
            label="Skriv din historie her"
            name={formGroup3}
            ref={register({ maxLength: { value: 40, message: errorMessage3 } })}
          />
        </>
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(data => {
        // eslint-disable-next-line no-console
        console.log(data);
      })}
    >
      <Validation variant={props.variant} errorSummary={allErrors ? 'Sjekk at alt er riktig utfylt' : undefined}>
        {getFormExample()}
      </Validation>
      <Button>{'Submit'}</Button>
    </form>
  );
};

export default FormExample;
