import React from 'react';
import { useForm } from 'react-hook-form';

import Validation from '../Validation';
import FormGroup from '../FormGroup/FormGroup';
import Checkbox from '../Checkbox';
import Button from '../Button';
import RadioButton from '../RadioButton';
import Textarea from '../Textarea';
import { FormVariant } from '../../constants';

interface FormExampleProps {
  exampleType: FormExampleVariants;
  variant?: keyof typeof FormVariant;
}

export enum FormExampleVariants {
  formgroup = 'formgroup',
  checkbox = 'checkbox',
  radiobutton = 'radiobutton',
  textarea = 'textarea',
}

export const FormExample = (props: FormExampleProps): JSX.Element => {
  const { exampleType = FormExampleVariants.formgroup } = props;
  const { register, handleSubmit, errors } = useForm();
  const formGroup1 = 'formgroup1';
  const formGroup2 = 'formgroup2';
  const formGroup3 = 'formgroup3';
  const formGroup4 = 'formgroup4';
  const allErrors = errors[formGroup1] || errors[formGroup2] || errors[formGroup3] || errors[formGroup4];
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
          name={formGroup1}
        >
          <Checkbox label={'Checkbox 1'} ref={register({ required: errorMessage })} />
          <Checkbox label={'Checkbox 2'} ref={register({ required: errorMessage })} />
          <Checkbox label={'Checkbox 3'} ref={register({ required: errorMessage })} />
        </FormGroup>,
        <FormGroup
          key={1}
          legend={'Select two options!'}
          error={errors[formGroup2] ? errors[formGroup2].message : undefined}
          variant={props.variant}
          name={formGroup2}
        >
          <Checkbox label={'Checkbox 4'} ref={register({ validate: requireTwo })} />
          <Checkbox label={'Checkbox 5'} ref={register({ validate: requireTwo })} />
          <Checkbox label={'Checkbox 6'} ref={register({ validate: requireTwo })} />
        </FormGroup>,
        <FormGroup
          key={2}
          legend={'Select two options!'}
          error={errors[formGroup3] ? errors[formGroup3].message : undefined}
          variant={props.variant}
          name={formGroup3}
        >
          <RadioButton label={'Radiobutton 1'} ref={register({ required: errorMessage })} />
          <RadioButton label={'Radiobutton 2'} ref={register({ required: errorMessage })} />
          <RadioButton label={'Radiobutton 3'} ref={register({ required: errorMessage })} />
        </FormGroup>,
        <FormGroup key={3} error={errors[formGroup4] ? errors[formGroup4].message : undefined}>
          <Textarea
            defaultValue={`Dette er en test \n\n Hello \n\n test \n\n test test`}
            grow
            maxCharacters={40}
            minRows={5}
            label="Skriv din historie her"
            name={formGroup4}
            ref={register({ maxLength: { value: 40, message: errorMessage3 } })}
          />
        </FormGroup>,
      ];
    } else if (exampleType === FormExampleVariants.checkbox) {
      return (
        <FormGroup name={formGroup1} error={errors[formGroup1] ? errors[formGroup1].message : undefined}>
          <Checkbox
            name={formGroup1}
            label={'Checkbox 1'}
            error={errors[formGroup1]}
            variant={props.variant}
            ref={register({ required: errorMessage })}
          />
        </FormGroup>
      );
    } else if (exampleType === FormExampleVariants.radiobutton) {
      return (
        <FormGroup name={formGroup3} error={errors[formGroup3] ? errors[formGroup3].message : undefined}>
          <RadioButton
            name={formGroup3}
            label={'Radiobutton 1'}
            error={errors[formGroup3]}
            variant={props.variant}
            ref={register({ required: errorMessage })}
          />
        </FormGroup>
      );
    } else if (exampleType === FormExampleVariants.textarea) {
      return (
        <FormGroup error={errors[formGroup4] ? errors[formGroup4].message : undefined}>
          <Textarea
            defaultValue={`Dette er min historie \n\n Hello \n\n test`}
            grow
            maxCharacters={40}
            minRows={5}
            label="Skriv din historie her"
            name={formGroup4}
            ref={register({ maxLength: { value: 40, message: errorMessage3 } })}
          />
        </FormGroup>
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
