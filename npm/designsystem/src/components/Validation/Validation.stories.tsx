import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import Validation from './Validation';
import { FormSize } from '../../constants';
import FormExample, { FormExampleVariants } from '../../docs/FormExample/FormExample';

const meta: Meta<typeof Validation> = {
  title: '@helsenorge/designsystem-react/Components/Validation',
  component: Validation,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={Validation} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/validation/bruk-C8MGO5PV" />
      ),
      description: {
        component:
          'Som innbygger skal jeg informeres om feil eller mangler i informasjon jeg har lagt inn slik at jeg forstår hvor jeg kan rette feilene og hva som er galt eller mangler.<br>Wrapper enten FormGroup eller et individuelt form input komponent.',
        markdown: 'test',
      },
      source: {
        code: `
Eksempel på validation med react-hook-form 7:

import { useForm } from 'react-hook-form';

interface FormExampleData {
  sizes: string[];
  positions: string;
  story: string;
  name: string;
  monster: string[];
}

export const FormExample = (props: FormExampleProps): React.JSX.Element => {
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
        // eslint-disable-next-line no-console
        !isTest() && console.log(data);
      })}
    >
      <Validation size={props.size} errorTitle={'Sjekk at alt er riktig utfylt:'} errors={errors}>
        <Checkbox
          errorText={errors.sizes ? errors.sizes.message : undefined}
          errorTextId="error1"
          inputId="sizes1"
          label={<Label labelTexts={[{ text: 'Small' }]} />}
          {...register('sizes', { validate: requireTwo })}
        />
        <RadioButton
          errorText={errors.positions ? (errors.positions.message as string) : undefined}
          errorTextId="error2"
          inputId="positions1"
          label={<Label labelTexts={[{ text: 'Venstre' }]} />}
          {...register('positions', { required: positionErrorMessage })}
        />
        <Textarea
          errorText={errors.story ? (errors.story.message as string) : undefined}
          errorTextId="error3"
          defaultValue={"Dette er en test \\n\\n Hello \\n\\n test \\n\\n test test"}
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
};
`,
        language: 'tsx',
      },
    },
  },
  args: {
    size: FormSize.medium,
  },
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(FormSize),
    },
    visuallyHiddenSummary: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormExample>;

export const FormGroup: Story = {
  args: {
    exampleType: FormExampleVariants.formgroup,
  },
  render: args => <FormExample {...args} />,
};

export const WithoutFormGroup: Story = {
  args: {
    exampleType: FormExampleVariants.withoutformgroup,
  },
  render: args => <FormExample {...args} />,
};

export const Checkbox: Story = {
  args: {
    exampleType: FormExampleVariants.checkbox,
  },
  render: args => <FormExample {...args} />,
};

export const Radiobutton: Story = {
  args: {
    exampleType: FormExampleVariants.radiobutton,
  },
  render: args => <FormExample {...args} />,
};

export const Textarea: Story = {
  args: {
    exampleType: FormExampleVariants.textarea,
  },
  render: args => <FormExample {...args} />,
};

export const Input: Story = {
  args: {
    exampleType: FormExampleVariants.input,
  },
  render: args => <FormExample {...args} />,
};

export const Select: Story = {
  args: {
    exampleType: FormExampleVariants.select,
  },
  render: args => <FormExample {...args} />,
};

export const Slider: Story = {
  args: {
    exampleType: FormExampleVariants.slider,
  },
  render: args => <FormExample {...args} />,
};
