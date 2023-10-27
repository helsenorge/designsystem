import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FormVariant } from '../../constants';
import FormExample, { FormExampleVariants } from '../FormExample/FormExample';
import GridExample from '../GridExample';

export default {
  title: '@helsenorge∕designsystem-react/Components/Validation',
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
