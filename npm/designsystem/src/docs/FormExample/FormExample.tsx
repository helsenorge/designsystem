import { useForm } from 'react-hook-form';

import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import FormGroup from '../../components/FormGroup/FormGroup';
import FormLayout, { FormLayoutColumns } from '../../components/FormLayout';
import Hospital from '../../components/Icons/Hospital';
import Input from '../../components/Input';
import Label from '../../components/Label';
import RadioButton from '../../components/RadioButton';
import Select from '../../components/Select';
import Spacer from '../../components/Spacer';
import Textarea from '../../components/Textarea';
import Validation from '../../components/Validation';
import { FormSize } from '../../constants';
import { isTest } from '../../utils/environment';

export interface FormExampleProps {
  exampleType: FormExampleVariants;
  size?: keyof typeof FormSize;
}

export enum FormExampleVariants {
  formgroup = 'formgroup',
  checkbox = 'checkbox',
  radiobutton = 'radiobutton',
  textarea = 'textarea',
  input = 'input',
  select = 'select',
  withoutformgroup = 'withoutformgroup',
}

interface FormExampleData {
  colour: string;
  sizes: string[];
  positions: string;
  story: string;
  name: string;
  monster: string[];
}

export const FormExample = (props: FormExampleProps): JSX.Element => {
  const { exampleType = FormExampleVariants.formgroup } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormExampleData>();

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

  const colorErrorMessage = 'Du må velge minst én farge';
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

  const color = (): React.ReactElement => (
    <FormGroup
      title={'FormGroup-tittel'}
      legend={'Farge'}
      error={errors.colour ? errors.colour.message : undefined}
      errorTextId="error"
      size={props.size}
    >
      <FormLayout maxColumns={FormLayoutColumns.two}>
        <Checkbox
          inputId="colour1"
          label={<Label labelTexts={[{ text: 'Blueberry' }]} />}
          {...register('colour', { required: colorErrorMessage })}
        />
        <Checkbox
          inputId="colour2"
          label={<Label labelTexts={[{ text: 'Cherry' }]} />}
          {...register('colour', { required: colorErrorMessage })}
        />
        <Checkbox
          inputId="colour3"
          label={<Label labelTexts={[{ text: 'Neutral' }]} />}
          {...register('colour', { required: colorErrorMessage })}
        />
      </FormLayout>
    </FormGroup>
  );

  const size = (): React.ReactElement => (
    <FormGroup legend={'Størrelser'} error={errors.sizes ? errors.sizes.message : undefined} size={props.size} errorTextId="error1">
      <Checkbox inputId="sizes1" label={<Label labelTexts={[{ text: 'Small' }]} />} {...register('sizes', { validate: requireTwo })} />
      <Checkbox inputId="sizes2" label={<Label labelTexts={[{ text: 'Medium' }]} />} {...register('sizes', { validate: requireTwo })} />
      <Checkbox inputId="sizes3" label={<Label labelTexts={[{ text: 'Large' }]} />} {...register('sizes', { validate: requireTwo })} />
    </FormGroup>
  );

  const position = (): React.ReactElement => (
    <FormGroup
      legend={'Plassering'}
      error={errors.positions ? (errors.positions.message as string) : undefined}
      size={props.size}
      errorTextId="error2"
    >
      <RadioButton
        inputId="positions1"
        label={<Label labelTexts={[{ text: 'Venstre' }]} />}
        {...register('positions', { required: positionErrorMessage })}
      />
      <RadioButton
        inputId="positions2"
        label={<Label labelTexts={[{ text: 'Høyre' }]} />}
        {...register('positions', { required: positionErrorMessage })}
      />
      <RadioButton
        inputId="positions3"
        label={<Label labelTexts={[{ text: 'Midten' }]} />}
        {...register('positions', { required: positionErrorMessage })}
      />
    </FormGroup>
  );

  const story = (): React.ReactElement => (
    <FormGroup error={errors.story ? (errors.story.message as string) : undefined} errorTextId="error3">
      <Textarea
        defaultValue={`Dette er en test \n\n Hello \n\n test \n\n test test`}
        grow
        maxCharacters={40}
        minRows={5}
        label={<Label labelTexts={[{ text: 'Historie', type: 'semibold' }]} />}
        textareaId="story"
        {...register('story', { maxLength: { value: 40, message: storyErrorMessage } })}
      />
    </FormGroup>
  );

  const name = (): React.ReactElement => (
    <FormGroup size={props.size} error={errors.name ? (errors.name.message as string) : undefined} errorTextId="error4">
      <Input
        label={<Label labelTexts={[{ text: 'Navn', type: 'semibold' }]} />}
        placeholder={'Skriv noe!'}
        icon={Hospital}
        inputId="name"
        {...register('name', { required: nameErrorMessage })}
      />
    </FormGroup>
  );

  const monster = (): React.ReactElement => (
    <FormGroup size={props.size} error={errors.monster ? (errors.monster.message as string) : undefined} errorTextId="error5">
      <Select
        selectId="monster"
        label={<Label labelTexts={[{ text: 'Velg et monster', type: 'semibold' }]} />}
        {...register('monster', { validate: requireFrankenstein })}
      >
        <option value={'Troll'}>{'Troll'}</option>
        <option value={'Frankenstein'}>{'Frankenstein'}</option>
      </Select>
    </FormGroup>
  );

  const getFormExample = (): React.ReactElement | undefined => {
    if (exampleType === FormExampleVariants.formgroup) {
      return (
        <>
          {color()}
          {size()}
          {position()}
          {story()}
          {name()}
          {monster()}
        </>
      );
    } else if (exampleType === FormExampleVariants.checkbox) {
      return color();
    } else if (exampleType === FormExampleVariants.radiobutton) {
      return position();
    } else if (exampleType === FormExampleVariants.textarea) {
      return story();
    } else if (exampleType === FormExampleVariants.input) {
      return name();
    } else if (exampleType === FormExampleVariants.select) {
      return monster();
    } else if (exampleType === FormExampleVariants.withoutformgroup) {
      return (
        <>
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
            defaultValue={`Dette er en test \n\n Hello \n\n test \n\n test test`}
            grow
            maxCharacters={40}
            minRows={5}
            label={<Label labelTexts={[{ text: 'Historie', type: 'semibold' }]} />}
            textareaId="story"
            {...register('story', { maxLength: { value: 40, message: storyErrorMessage } })}
          />
          <Input
            errorText={errors.name ? (errors.name.message as string) : undefined}
            errorTextId="error4"
            label={<Label labelTexts={[{ text: 'Navn', type: 'semibold' }]} />}
            placeholder={'Skriv noe!'}
            icon={Hospital}
            inputId="name"
            {...register('name', { required: nameErrorMessage })}
          />
          <Select
            errorText={errors.monster ? (errors.monster.message as string) : undefined}
            errorTextId="error5"
            selectId="monster"
            label={<Label labelTexts={[{ text: 'Velg et monster', type: 'semibold' }]} />}
            {...register('monster', { validate: requireFrankenstein })}
          >
            <option value={'Troll'}>{'Troll'}</option>
            <option value={'Frankenstein'}>{'Frankenstein'}</option>
          </Select>
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
      <Validation size={props.size} errorTitle={'Sjekk at alt er riktig utfylt:'} errors={errors}>
        {getFormExample()}
      </Validation>
      <Spacer />
      <Button type="submit">{'Send inn'}</Button>
    </form>
  );
};

export default FormExample;
