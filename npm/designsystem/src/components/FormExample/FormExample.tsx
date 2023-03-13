import React from 'react';

import { useForm } from 'react-hook-form';

import { FormVariant } from '../../constants';
import { isTest } from '../../utils/environment';
import Button from '../Button';
import Checkbox from '../Checkbox';
import FormGroup from '../FormGroup/FormGroup';
import FormLayout, { FormLayoutColumns } from '../FormLayout';
import Hospital from '../Icons/Hospital';
import Input from '../Input';
import RadioButton from '../RadioButton';
import Select from '../Select';
import Textarea from '../Textarea';
import Validation from '../Validation';

import styles from './styles.module.scss';

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
  select = 'select',
  date = 'date',
}

export const FormExample = (props: FormExampleProps): JSX.Element => {
  const { exampleType = FormExampleVariants.formgroup } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const defaultDate = new Date();
  defaultDate.setHours(0);
  defaultDate.setMinutes(0);
  defaultDate.setSeconds(0);
  const minDate = new Date();
  minDate.setDate(defaultDate.getDate() - 5);
  minDate.setHours(6);
  minDate.setMinutes(10);
  minDate.setSeconds(0);
  const maxDate = new Date();
  maxDate.setDate(defaultDate.getDate() + 5);
  maxDate.setHours(22);
  maxDate.setMinutes(0);
  maxDate.setSeconds(0);

  const field1 = 'field1';
  const field2 = 'field2';
  const field3 = 'field3';
  const field4 = 'field4';
  const field5 = 'field5';
  const field6 = 'field6';
  const field7 = 'field7';
  const field8 = 'field8';
  const field9 = 'field9';
  const allErrors =
    errors.field1 ||
    errors.field2 ||
    errors.field3 ||
    errors.field4 ||
    errors.field5 ||
    errors.field6 ||
    errors.field7 ||
    errors.field8 ||
    errors.field9;
  const errorMessage = 'Du må velge et alternativ';
  const errorMessage2 = 'Du må velge to alternativ';
  const errorMessage3 = 'Det kan ikke legges inn mer enn 40 tegn';
  const errorMessage4 = 'Du må skrive noe her';
  const errorMessage5 = 'Du må velge "Option 2"';
  const errorMessage6 = `Du må velge dato mellom ${minDate.toLocaleDateString('nb')} og ${maxDate.toLocaleDateString('nb')}`;
  const errorMessage7 = `Du må skrive inn tidspunkt mellom ${minDate.toLocaleTimeString('nb', {
    hour: '2-digit',
    minute: '2-digit',
  })} og ${maxDate.toLocaleTimeString('nb', {
    hour: '2-digit',
    minute: '2-digit',
  })}`;

  const requireTwo = (value: Array<string>): true | string => {
    return value.length >= 2 || errorMessage2;
  };
  const requireSelect = (value: Array<string>): true | string => {
    return value.toString() === 'Option 2' || errorMessage5;
  };
  const requireDate = (value: Date, min: Date, max: Date): true | string => {
    const dateValue = new Date(value);
    return (!!value && dateValue.getTime() >= min.getTime() && dateValue.getTime() <= max.getTime()) || errorMessage6;
  };
  const requireTime = (hour: number, minute: number): true | string => {
    const newDate = new Date();
    newDate.setHours(hour);
    newDate.setMinutes(minute);
    newDate.setSeconds(0);
    const minTime = minDate.toLocaleTimeString('nb');
    const maxTime = maxDate.toLocaleTimeString('nb');
    const valueTime = newDate.toLocaleTimeString('nb');
    console.log('value', valueTime);
    return (!!newDate && valueTime >= minTime && valueTime <= maxTime) || errorMessage7;
  };

  const getFormExample = () => {
    if (exampleType === FormExampleVariants.formgroup) {
      const allCheckBoxes = [
        <Checkbox key={0} inputId="checkbox1" label={'Checkbox 1'} {...register(field1, { required: errorMessage })} />,
        <Checkbox key={1} inputId="checkbox2" label={'Checkbox 2'} {...register(field1, { required: errorMessage })} />,
        <Checkbox key={2} inputId="checkbox3" label={'Checkbox 3'} {...register(field1, { required: errorMessage })} />,
      ];

      return [
        <FormGroup
          key={0}
          title={'Gruppe tittel'}
          legend={'Velg minst en'}
          error={errors.field1 ? (errors.field1.message as string) : undefined}
          variant={props.variant}
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
          error={errors.field2 ? (errors.field2.message as string) : undefined}
          variant={props.variant}
        >
          <Checkbox inputId="checkbox4" label={'Checkbox 4'} {...register(field2, { validate: requireTwo })} />
          <Checkbox inputId="checkbox5" label={'Checkbox 5'} {...register(field2, { validate: requireTwo })} />
          <Checkbox inputId="checkbox6" label={'Checkbox 6'} {...register(field2, { validate: requireTwo })} />
        </FormGroup>,
        <FormGroup key={2} legend={'Velg en'} error={errors.field3 ? (errors.field3.message as string) : undefined} variant={props.variant}>
          <RadioButton inputId="radiobutton1" label={'Radiobutton 1'} {...register(field3, { required: errorMessage })} />
          <RadioButton inputId="radiobutton2" label={'Radiobutton 2'} {...register(field3, { required: errorMessage })} />
          <RadioButton inputId="radiobutton3" label={'Radiobutton 3'} {...register(field3, { required: errorMessage })} />
        </FormGroup>,
        <FormGroup key={3} error={errors.field4 ? (errors.field4.message as string) : undefined}>
          <Textarea
            defaultValue={`Dette er en test \n\n Hello \n\n test \n\n test test`}
            grow
            maxCharacters={40}
            minRows={5}
            label="Skriv din historie her"
            textareaId="textarea1"
            {...register(field4, { maxLength: { value: 40, message: errorMessage3 } })}
          />
        </FormGroup>,
        <FormGroup key={4} variant={props.variant} error={errors.field5 ? (errors.field5.message as string) : undefined}>
          <Input
            label={'Skriv inn din tekst'}
            placeholder={'Skriv noe!'}
            icon={Hospital}
            {...register(field5, { required: errorMessage4 })}
          />
        </FormGroup>,
        <FormGroup key={5} variant={props.variant} error={errors.field6 ? (errors.field6.message as string) : undefined}>
          <Select label={'Skriv inn din tekst'} {...register(field6, { validate: requireSelect })}>
            <option value={'Option 1'}>{'Option 1'}</option>
            <option value={'Option 2'}>{'Option 2'}</option>
            <option value={'Option 3'}>{'Option 3'}</option>
          </Select>
        </FormGroup>,
      ];
    } else if (exampleType === FormExampleVariants.checkbox) {
      return (
        <Checkbox
          inputId="checkbox1"
          label={'Checkbox 1'}
          errorText={errors.field1 ? (errors.field1.message as string) : undefined}
          variant={props.variant}
          {...register(field1, { required: errorMessage })}
        />
      );
    } else if (exampleType === FormExampleVariants.radiobutton) {
      return (
        <RadioButton
          inputId="radiobutton1"
          label={'Radiobutton 1'}
          errorText={errors.field3 ? (errors.field3.message as string) : undefined}
          variant={props.variant}
          {...register(field3, { required: errorMessage })}
        />
      );
    } else if (exampleType === FormExampleVariants.textarea) {
      return (
        <Textarea
          defaultValue={`Dette er min historie \n\n Hello \n\n test`}
          grow
          maxCharacters={40}
          minRows={5}
          errorText={errors.field4 ? (errors.field4.message as string) : undefined}
          label="Skriv din historie her"
          textareaId="textarea1"
          {...register(field4, { maxLength: { value: 40, message: errorMessage3 } })}
        />
      );
    } else if (exampleType === FormExampleVariants.input) {
      return (
        <Input
          inputId="input1"
          label={'Skriv inn din tekst'}
          placeholder={'Skriv noe!'}
          errorText={errors.field5 ? (errors.field5.message as string) : undefined}
          icon={Hospital}
          {...register(field5, { required: errorMessage4 })}
        />
      );
    } else if (exampleType === FormExampleVariants.select) {
      return (
        <Select
          errorText={errors.field6 ? (errors.field6.message as string) : undefined}
          label={'Skriv inn din tekst'}
          {...register(field6, { validate: requireSelect })}
        >
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      );
    } else if (exampleType === FormExampleVariants.date) {
      const currentError = errors.field7 || errors.field8 || errors.field9;
      return (
        <>
          <FormGroup
            legend={'Velg en dato og et klokkeslett'}
            fieldsetClassName={styles['date-time']}
            error={currentError ? (currentError.message as string) : undefined}
          >
            <Input
              className={styles['date-time__date-picker']}
              label={'dato'}
              width={20}
              type={'date'}
              defaultValue={defaultDate.toLocaleDateString('en-CA')}
              min={minDate.toLocaleDateString('en-CA')}
              max={maxDate.toLocaleDateString('en-CA')}
              {...register(field7, { validate: (value): true | string => requireDate(value, minDate, maxDate) })}
            />
            <FormGroup htmlMarkup={'div'} fieldsetClassName={styles['date-time__time-wrapper']}>
              <Input
                labelId={'time-label-id'}
                label={'klokke'}
                width={4}
                type={'number'}
                defaultValue={defaultDate.toLocaleTimeString('nb', {
                  hour: '2-digit',
                })}
                max={23}
                min={0}
                // Må oppdateres med validering som tar hensyn til timer og minutter i sammenheng med hverandre
                {...register(field8, { validate: (value): true | string => requireTime(value, value) })}
              />
              <span className={styles['date-time__time-separator']}>{':'}</span>
              <Input
                aria-labelledby={'time-label-id'}
                width={4}
                type={'number'}
                defaultValue={defaultDate.toLocaleTimeString('nb', {
                  minute: '2-digit',
                })}
                max={59}
                min={0}
                // Må oppdateres med validering som tar hensyn til timer og minutter i sammenheng med hverandre
                {...register(field9, { validate: (value): true | string => requireTime(7, value) })}
              />
            </FormGroup>
          </FormGroup>
        </>
      );
    }
  };

  return (
    <form
      noValidate
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
