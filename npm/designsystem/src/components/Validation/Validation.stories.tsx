import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormVariant } from '../../constants';
import FormExample, { FormExampleVariants } from '../FormExample/FormExample';
import GridExample from '../GridExample';

export default {
  title: 'Components/Validation',
  component: FormExample,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger skal jeg informeres om feil eller mangler i informasjon jeg har lagt inn slik at jeg forstår hvor jeg kan rette feilene og hva som er galt eller mangler.<br>Wrapper enten FormGroup eller et individuelt form input komponent.',
        markdown: 'test',
      },
      source: {
        code: `Eksempel på validation med react-hook-form 7:
        const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm();
        const field1 = 'field1';
        const field2 = 'field2';
        const field3 = 'field3';
        const allErrors = errors.field1 || errors.field2 || errors.field3;
        const errorMessage = 'Du må velge et alternativ';
        const errorMessage2 = 'Du må velge to alternativ';

        const requireTwo = (value: Array<string>): true | string => {
          return value.length >= 2 || errorMessage2;
        };
        const allCheckBoxes = [
          <Checkbox key={0} inputId="checkbox1" label={<Label labelTexts={[{ text: 'Checkbox 1'}]} />} {...register(field1, { required: errorMessage })} />,
          <Checkbox key={1} inputId="checkbox2" label={<Label labelTexts={[{ text: 'Checkbox 2'}]} />} {...register(field1, { required: errorMessage })} />,
          <Checkbox key={2} inputId="checkbox3" label={<Label labelTexts={[{ text: 'Checkbox 3'}]} />} {...register(field1, { required: errorMessage })} />,
        ];

        <form onSubmit={handleSubmit(data => {
                console.log(data);
              })}
        >
        <Validation errorSummary={allErrors ? 'Sjekk at alt er riktig utfylt' : undefined}>
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
        </FormGroup>
        <FormGroup
        key={1}
        legend={'Velg minst to'}
        error={errors.field2 ? (errors.field2.message as string) : undefined}
        variant={props.variant}>
        <Checkbox inputId="checkbox4" label={<Label labelTexts={[{ text: 'Checkbox 4'}]} />} {...register(field2, { validate: requireTwo })} />
        <Checkbox inputId="checkbox5" label={<Label labelTexts={[{ text: 'Checkbox 5'}]} />} {...register(field2, { validate: requireTwo })} />
        <Checkbox inputId="checkbox6" label={<Label labelTexts={[{ text: 'Checkbox 6'}]} />} {...register(field2, { validate: requireTwo })} />
        </FormGroup>
        <FormGroup key={2} legend={'Velg en'} error={errors.field3 ? (errors.field3.message as string) : undefined} variant={props.variant}>
          <RadioButton inputId="radiobutton1" label={<Label labelTexts={[{ text: 'Radiobutton 1'}]} />} {...register(field3, { required: errorMessage })} />
          <RadioButton inputId="radiobutton2" label={<Label labelTexts={[{ text: 'Radiobutton 2'}]} />} {...register(field3, { required: errorMessage })} />
          <RadioButton inputId="radiobutton3" label={<Label labelTexts={[{ text: 'Radiobutton 3'}]} />} {...register(field3, { required: errorMessage })} />
        </FormGroup>
        </Validation>
        <Button type="submit">{'Send inn'}</Button>
        </form>
        
Eksempel på validation med react-hook-form 6:
          const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm();
          const field1 = 'field1';
          const field2 = 'field2';
          const field3 = 'field3';
          const allErrors = errors[field1] || errors[field2] || errors[field3];
          const errorMessage = 'Du må velge et alternativ';
          const errorMessage2 = 'Du må velge to alternativ';
        
          const requireTwo = (value: Array<string>): true | string => {
            return value.length >= 2 || errorMessage2;
          };
          const allCheckBoxes = [
            <Checkbox key={0} inputId="checkbox1" label={<Label labelTexts={[{ text: 'Checkbox 1'}]} />} ref={register({ required: errorMessage })} />,
            <Checkbox key={1} inputId="checkbox2" label={<Label labelTexts={[{ text: 'Checkbox 2'}]} />} ref={register({ required: errorMessage })} />,
            <Checkbox key={2} inputId="checkbox3" label={<Label labelTexts={[{ text: 'Checkbox 3'}]} />} ref={register({ required: errorMessage })} />,
          ];

        <form onSubmit={handleSubmit(data => {
              console.log(data);
            })}
        >
        <Validation errorSummary={allErrors ? 'Sjekk at alt er riktig utfylt' : undefined}>
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
        </FormGroup>
          <FormGroup
          key={1}
          legend={'Velg minst to'}
          error={errors[field2] ? errors[field2].message : undefined}
          variant={props.variant}
          name={field2}
        >
          <Checkbox inputId="checkbox4" label={<Label labelTexts={[{ text: 'Checkbox 4'}]} />} ref={register({ validate: requireTwo })} />
          <Checkbox inputId="checkbox5" label={<Label labelTexts={[{ text: 'Checkbox 5'}]} />} ref={register({ validate: requireTwo })} />
          <Checkbox inputId="checkbox6" label={<Label labelTexts={[{ text: 'Checkbox 6'}]} />} ref={register({ validate: requireTwo })} />
        </FormGroup>
        <FormGroup
          key={2}
          legend={'Velg en'}
          error={errors[field3] ? errors[field3].message : undefined}
          variant={props.variant}
          name={field3}
        >
          <RadioButton inputId="radiobutton1" label={<Label labelTexts={[{ text: 'Radiobutton 1'}]} />} ref={register({ required: errorMessage })} />
          <RadioButton inputId="radiobutton2" label={<Label labelTexts={[{ text: 'Radiobutton 2'}]} />} ref={register({ required: errorMessage })} />
          <RadioButton inputId="radiobutton3" label={<Label labelTexts={[{ text: 'Radiobutton 3'}]} />} ref={register({ required: errorMessage })} />
        </FormGroup>
        </Validation>
        <Button type="submit">{'Send inn'}</Button>
        </form>
        `,
        language: 'tsx',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: FormVariant,
      defaultValue: FormVariant.normal,
    },
  },
} as ComponentMeta<typeof FormExample>;

export const FormGroup: ComponentStory<typeof FormExample> = (args: any) => (
  <GridExample>
    <FormExample {...args} exampleType={FormExampleVariants.formgroup} />
  </GridExample>
);

export const Checkbox: ComponentStory<typeof FormExample> = (args: any) => (
  <GridExample>
    <FormExample {...args} exampleType={FormExampleVariants.checkbox} />
  </GridExample>
);

export const Radiobutton: ComponentStory<typeof FormExample> = (args: any) => (
  <GridExample>
    <FormExample {...args} exampleType={FormExampleVariants.radiobutton} />
  </GridExample>
);

export const Textarea: ComponentStory<typeof FormExample> = (args: any) => (
  <GridExample>
    <FormExample {...args} exampleType={FormExampleVariants.textarea} />
  </GridExample>
);

export const Input: ComponentStory<typeof FormExample> = (args: any) => (
  <GridExample>
    <FormExample {...args} exampleType={FormExampleVariants.input} />
  </GridExample>
);

export const Select: ComponentStory<typeof FormExample> = (args: any) => (
  <GridExample>
    <FormExample {...args} exampleType={FormExampleVariants.select} />
  </GridExample>
);

export const DateTime: ComponentStory<typeof FormExample> = (args: any) => (
  <GridExample>
    <FormExample {...args} exampleType={FormExampleVariants.date} />
  </GridExample>
);

DateTime.parameters = {
  docs: {
    source: {
      code: `Eksempel på validation med react-hook-form 7:
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const defaultDate = new Date();
      const minDate = new Date();
      minDate.setDate(defaultDate.getDate() - 5);
      const maxDate = new Date();
      maxDate.setDate(defaultDate.getDate() + 5);

      const field1 = 'field1';
      const field2 = 'field2';
      const field3 = 'field3';
      
      const errorMessage1 = \`Du må velge dato mellom \${minDate.toLocaleDateString('nb')} og \${maxDate.toLocaleDateString('nb')}\`;
      const errorMessage2 = \`Du må skrive inn tidspunkt mellom \${minDate.toLocaleTimeString('nb', {
        hour: '2-digit',
        minute: '2-digit',
      })} og \${maxDate.toLocaleTimeString('nb', {
        hour: '2-digit',
        minute: '2-digit',
      })}\`;

      const requireDate = (value: Date, min: Date, max: Date): true | string => {
        const dateValue = new Date(value);
        return (!!value && dateValue.getTime() >= min.getTime() && dateValue.getTime() <= max.getTime()) || errorMessage1;
      };
      const requireTime = (hour: number, minute: number): true | string => {
        const validTime = // Validering av time og minutt her
        return validTime || errorMessage2;
      };
      
      const currentError = errors.field1 || errors.field2 || errors.field3;
      return (
        <>
        <form onSubmit={handleSubmit(data => {
          console.log(data);
        })}
        >
          <Validation errorSummary={currentError ? 'Sjekk at alt er riktig utfylt' : undefined}>
          <FormGroup
            legend={'Velg en dato og et klokkeslett'}
            fieldsetClassName={styles['fieldset--flex']}
            error={currentError ? (currentError.message as string) : undefined}
          >
            <Input
              className={styles['date-picker--spacing']}
              label={<Label labelTexts={[{ text: 'dato'}]} />}
              width={20}
              type={'date'}
              defaultValue={defaultDate.toLocaleDateString('en-CA')}
              min={minDate.toLocaleDateString('en-CA')}
              max={maxDate.toLocaleDateString('en-CA')}
              {...register(field1, { validate: (value): true | string => requireDate(value, minDate, maxDate) })}
            />
            <FormGroup htmlMarkup={'div'} fieldsetClassName={styles['fieldset--flex-time']}>
              <Input
                labelId={'time-label-id'}
                afterInputChildren={<span style={{ padding: '0 1rem' }}>{':'}</span>}
                label={<Label labelTexts={[{ text: 'klokke'}]} />}
                width={4}
                type={'number'}
                defaultValue={defaultDate.toLocaleTimeString('nb', {
                  hour: '2-digit',
                })}
                max={23}
                min={0}
                // Må oppdateres med validering som tar hensyn til timer og minutter i sammenheng med hverandre
                {...register(field2, { validate: (value): true | string => requireTime(value, /* minute value her */) })}
              />
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
                {...register(field3, { validate: (value): true | string => requireTime(/* hour value her */, value) })}
              />
            </FormGroup>
          </FormGroup>
          </Validation>
        <Button type="submit">{'Send inn'}</Button>
        </form>`,
      language: 'tsx',
    },
  },
};
