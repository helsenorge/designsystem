import React from 'react';
import { useForm } from 'react-hook-form';

import Validation from '../Validation';
import FormGroup from '../FormGroup/FormGroup';
import Checkbox from '../Checkbox';
import Button from '../Button';
import RadioButton from '../RadioButton';
import Textarea from '../Textarea';
import { FormVariant } from '../../constants';
import Input from '../Input';
import Hospital from '../Icons/Hospital';
import FormLayout, { FormLayoutColumns } from '../FormLayout';
import { isTest } from '../../utils/environment';

interface FormExampleProps {
  exampleType: FormExampleVariants;
  variant?: keyof typeof FormVariant;
}

export enum FormExampleVariants {
  formgroup = 'formgroup',
  checkbox = 'checkbox',
  radiobutton = 'radiobutton',
  textarea = 'textarea',
  input = 'input',
}

export const FormExample = (props: FormExampleProps): JSX.Element => {
  const { exampleType = FormExampleVariants.formgroup } = props;
  const { register, handleSubmit, errors } = useForm();
  const field1 = 'field1';
  const field2 = 'field2';
  const field3 = 'field3';
  const field4 = 'field4';
  const field5 = 'field5';
  const allErrors = errors[field1] || errors[field2] || errors[field3] || errors[field4] || errors[field5];
  const errorMessage = 'Du må velge et alternativ';
  const errorMessage2 = 'Du må velge to alternativ';
  const errorMessage3 = 'Det kan ikke legges inn mer enn 40 tegn';
  const errorMessage4 = 'Du må skrive noe her';

  const allCheckBoxes = [
    <Checkbox key={0} inputId="checkbox1" label={'Checkbox 1'} ref={register({ required: errorMessage })} />,
    <Checkbox key={1} inputId="checkbox2" label={'Checkbox 2'} ref={register({ required: errorMessage })} />,
    <Checkbox key={2} inputId="checkbox3" label={'Checkbox 3'} ref={register({ required: errorMessage })} />,
  ];

  const requireTwo = (value: Array<string>): true | string => {
    return value.length >= 2 || errorMessage2;
  };

  const getFormExample = () => {
    if (exampleType === FormExampleVariants.formgroup) {
      return [
        <FormGroup
          key={0}
          title={'Gruppe tittel'}
          legend={'Velg minst en'}
          error={errors[field1] ? errors[field1].message : undefined}
          variant={props.variant}
          name={field1}
        >
          <FormLayout maxColumns={FormLayoutColumns.two}>
            {allCheckBoxes.map(check => {
              return check;
            })}
          </FormLayout>
        </FormGroup>,
        <FormGroup
          key={1}
          legend={'Velg minst to'}
          error={errors[field2] ? errors[field2].message : undefined}
          variant={props.variant}
          name={field2}
        >
          <Checkbox inputId="checkbox4" label={'Checkbox 4'} ref={register({ validate: requireTwo })} />
          <Checkbox inputId="checkbox5" label={'Checkbox 5'} ref={register({ validate: requireTwo })} />
          <Checkbox inputId="checkbox6" label={'Checkbox 6'} ref={register({ validate: requireTwo })} />
        </FormGroup>,
        <FormGroup
          key={2}
          legend={'Velg en'}
          error={errors[field3] ? errors[field3].message : undefined}
          variant={props.variant}
          name={field3}
        >
          <RadioButton inputId="radiobutton1" label={'Radiobutton 1'} ref={register({ required: errorMessage })} />
          <RadioButton inputId="radiobutton2" label={'Radiobutton 2'} ref={register({ required: errorMessage })} />
          <RadioButton inputId="radiobutton3" label={'Radiobutton 3'} ref={register({ required: errorMessage })} />
        </FormGroup>,
        <FormGroup key={3} error={errors[field4] ? errors[field4].message : undefined}>
          <Textarea
            defaultValue={`Dette er en test \n\n Hello \n\n test \n\n test test`}
            grow
            maxCharacters={40}
            minRows={5}
            label="Skriv din historie her"
            textareaId="textarea1"
            name={field4}
            ref={register({ maxLength: { value: 40, message: errorMessage3 } })}
          />
        </FormGroup>,
        <FormGroup name={field5} key={4} variant={props.variant} error={errors[field5] ? errors[field5].message : undefined}>
          <Input label={'Skriv inn din tekst'} placeholder={'Skriv noe!'} icon={Hospital} ref={register({ required: errorMessage4 })} />
        </FormGroup>,
      ];
    } else if (exampleType === FormExampleVariants.checkbox) {
      return (
        <Checkbox
          name={field1}
          inputId="checkbox1"
          label={'Checkbox 1'}
          errorText={errors[field1] ? errors[field1].message : undefined}
          variant={props.variant}
          ref={register({ required: errorMessage })}
        />
      );
    } else if (exampleType === FormExampleVariants.radiobutton) {
      return (
        <RadioButton
          name={field3}
          inputId="radiobutton1"
          label={'Radiobutton 1'}
          error={errors[field3] ? errors[field3].message : undefined}
          errorText={errors[field3] ? errors[field3].message : undefined}
          variant={props.variant}
          ref={register({ required: errorMessage })}
        />
      );
    } else if (exampleType === FormExampleVariants.textarea) {
      return (
        <Textarea
          defaultValue={`Dette er min historie \n\n Hello \n\n test`}
          grow
          maxCharacters={40}
          minRows={5}
          errorText={errors[field4] ? errors[field4].message : undefined}
          label="Skriv din historie her"
          textareaId="textarea1"
          name={field4}
          ref={register({ maxLength: { value: 40, message: errorMessage3 } })}
        />
      );
    } else if (exampleType === FormExampleVariants.input) {
      return (
        <Input
          inputId="input1"
          label={'Skriv inn din tekst'}
          placeholder={'Skriv noe!'}
          name={field5}
          errorText={errors[field5] ? errors[field5].message : undefined}
          icon={Hospital}
          ref={register({ required: errorMessage4 })}
        />
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit(data => {
        // eslint-disable-next-line no-console
        !isTest() && console.log(data);
      })}
    >
      <Validation variant={props.variant} errorSummary={allErrors ? 'Sjekk at alt er riktig utfylt' : undefined}>
        {getFormExample()}
      </Validation>
      <Button type="submit">{'Send inn'}</Button>
    </form>
  );
};

export default FormExample;
