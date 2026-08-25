import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import FormGroup from './FormGroup';
import { allTitleTags } from '../../../.storybook/knobs';
import { mapToBackgoundColor } from '../../../.storybook/StoryBackground';
import Spacer from '../../components/Spacer';
import { FormOnColor, FormSize } from '../../constants';
import Checkbox from '../Checkbox/Checkbox';
import Expander from '../Expander';
import FormFieldTag from '../FormFieldTag';
import FormLayout from '../FormLayout';
import Coronavirus from '../Icons/Coronavirus';
import Input from '../Input/Input';
import Label, { Sublabel } from '../Label';
import Radio from '../Radio/Radio';
import Toggle from '../Toggle';

import styles from './formGroup.module.scss';

const meta = {
  title: '@helsenorge/designsystem-react/Components/FormGroup',
  component: FormGroup,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={FormGroup} />,
      description: {
        component:
          'Et fieldset komponent ment for bruk i forms. Det kan være frittstående eller ligge i et Validation komponent. Dette komponentet wrapper input komponenter som f.eks. Checkbox og Radio.',
      },
    },
  },
  args: {
    title: 'Tittel',
    legend: 'Legend',
    name: 'gruppe1',
  },
  argTypes: {
    title: {
      control: 'text',
    },
    legend: {
      control: 'text',
    },
    onColor: {
      control: 'select',
      options: Object.values(FormOnColor),
    },
    size: {
      control: 'select',
      options: Object.values(FormSize),
    },
    name: {
      control: 'text',
    },
    legendHtmlMarkup: {
      control: 'select',
      options: allTitleTags,
    },
    titleHtmlMarkup: {
      control: 'select',
      options: allTitleTags,
    },
  },
} satisfies Meta<typeof FormGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <FormGroup {...args}>
      <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
      <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
      <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
    </FormGroup>
  ),
};

export const CheckboxChildren: Story = {
  render: args => (
    <div
      style={{
        background: mapToBackgoundColor(args.onColor as FormOnColor),
      }}
    >
      <FormGroup {...args}>
        <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
        <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
        <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
      </FormGroup>
      <Spacer size="m" />
      <FormGroup {...args}>
        <Checkbox
          inputId={'Checkbox1'}
          aria-describedby={'sublabelid01'}
          label={
            <Label
              labelTexts={[{ text: 'Checkbox 1' }]}
              sublabel={<Sublabel id={'sublabelid01'} sublabelTexts={[{ text: 'Sublabel text', type: 'subdued' }]} />}
            />
          }
        />
        <Checkbox
          inputId={'Checkbox2'}
          aria-describedby={'sublabelid02'}
          label={
            <Label
              labelTexts={[{ text: 'Checkbox 2' }]}
              sublabel={<Sublabel id={'sublabelid02'} sublabelTexts={[{ text: 'Sublabel text', type: 'subdued' }]} />}
            />
          }
        />
        <Checkbox
          inputId={'Checkbox3'}
          aria-describedby={'sublabelid03'}
          label={
            <Label
              labelTexts={[{ text: 'Checkbox 3' }]}
              sublabel={<Sublabel id={'sublabelid03'} sublabelTexts={[{ text: 'Sublabel text', type: 'subdued' }]} />}
            />
          }
        />
      </FormGroup>
    </div>
  ),
};

export const RadioChildren: Story = {
  render: args => (
    <div
      style={{
        background: mapToBackgoundColor(args.onColor as FormOnColor),
      }}
    >
      <FormGroup {...args}>
        <Radio inputId={'Radio1'} label={<Label labelTexts={[{ text: 'Radio 1' }]} />} />
        <Radio inputId={'Radio2'} label={<Label labelTexts={[{ text: 'Radio 2' }]} />} />
        <Radio inputId={'Radio3'} label={<Label labelTexts={[{ text: 'Radio 3' }]} />} />
      </FormGroup>
      <Spacer size="m" />
      <FormGroup {...args} name={'gruppe2'}>
        <Radio
          inputId={'Radio4'}
          aria-describedby={'sublabelid04'}
          label={
            <Label
              labelTexts={[{ text: 'Radio 4' }]}
              sublabel={<Sublabel id={'sublabelid04'} sublabelTexts={[{ text: 'Sublabel text', type: 'subdued' }]} />}
            />
          }
        />
        <Radio
          inputId={'Radio5'}
          aria-describedby={'sublabelid05'}
          label={
            <Label
              labelTexts={[{ text: 'Radio 5' }]}
              sublabel={<Sublabel id={'sublabelid05'} sublabelTexts={[{ text: 'Sublabel text', type: 'subdued' }]} />}
            />
          }
        />
        <Radio
          inputId={'Radio6'}
          aria-describedby={'sublabelid06'}
          label={
            <Label
              labelTexts={[{ text: 'Radio 6' }]}
              sublabel={<Sublabel id={'sublabelid06'} sublabelTexts={[{ text: 'Sublabel text', type: 'subdued' }]} />}
            />
          }
        />
      </FormGroup>
    </div>
  ),
};

export const ToggleChildren: Story = {
  render: args => (
    <div
      style={{
        background: mapToBackgoundColor(args.onColor as FormOnColor),
      }}
    >
      <FormGroup {...args}>
        <Toggle label={[{ text: 'Label text' }]} />
        <Toggle label={[{ text: 'Label text' }]} />
        <Toggle label={[{ text: 'Label text' }]} />
      </FormGroup>
      <Spacer size="m" />
      <FormGroup {...args}>
        <Toggle label={[{ text: 'Label text' }]} subLabel="Sublabel text" />
        <Toggle label={[{ text: 'Label text' }]} subLabel="Sublabel text" />
        <Toggle label={[{ text: 'Label text' }]} subLabel="Sublabel text" />
      </FormGroup>
    </div>
  ),
};

export const InputChildren: Story = {
  render: args => (
    <div
      style={{
        background: mapToBackgoundColor(args.onColor as FormOnColor),
      }}
    >
      <FormGroup {...args}>
        <Input label={<Label labelTexts={[{ text: 'Input 1' }]} />} />
        <Input icon={Coronavirus} label={<Label labelTexts={[{ text: 'Input 2' }]} />} />
        <Input icon={Coronavirus} iconRight label={<Label labelTexts={[{ text: 'Input 3' }]} />} />
      </FormGroup>
    </div>
  ),
};

export const DivTagTrue: Story = {
  render: args => (
    <div
      style={{
        background: mapToBackgoundColor(args.onColor as FormOnColor),
      }}
    >
      <FormGroup htmlMarkup="div" {...args}>
        <Radio inputId={'Radio1'} label={<Label labelTexts={[{ text: 'Radio 1' }]} />} />
        <Radio inputId={'Radio2'} label={<Label labelTexts={[{ text: 'Radio 2' }]} />} />
        <Radio inputId={'Radio3'} label={<Label labelTexts={[{ text: 'Radio 3' }]} />} />
      </FormGroup>
    </div>
  ),
};

export const CustomErrorWrapperClass: Story = {
  render: args => (
    <div
      style={{
        background: mapToBackgoundColor(args.onColor as FormOnColor),
      }}
    >
      <FormGroup
        htmlMarkup="div"
        {...args}
        legend={'ErrorWrapperClass gir mulighet til å style ErrorWrapper som ligger rundt form'}
        errorWrapperClassName={styles['error-wrapper-class--with-bottom-margin']}
      >
        <Radio inputId={'Radio1'} label={<Label labelTexts={[{ text: 'Radio 1' }]} />} />
        <Radio inputId={'Radio2'} label={<Label labelTexts={[{ text: 'Radio 2' }]} />} />
        <Radio inputId={'Radio3'} label={<Label labelTexts={[{ text: 'Legg merke til avstand ned til border' }]} />} />
      </FormGroup>
      <Spacer size="2xs" />
      <FormGroup htmlMarkup="div" {...args} errorWrapperClassName={styles['error-wrapper-class']}>
        <Radio inputId={'Radio4'} label={<Label labelTexts={[{ text: 'Radio 4' }]} />} />
        <Radio inputId={'Radio5'} label={<Label labelTexts={[{ text: 'Radio 5' }]} />} />
        <Radio inputId={'Radio6'} label={<Label labelTexts={[{ text: 'Med standard avstand ned til border' }]} />} />
      </FormGroup>
    </div>
  ),
};

export const FormLayoutChildren: Story = {
  render: args => (
    <div
      style={{
        background: mapToBackgoundColor(args.onColor as FormOnColor),
      }}
    >
      <FormGroup {...args}>
        <FormLayout maxColumns={'two'}>
          <Radio inputId={'Radio1'} label={<Label labelTexts={[{ text: 'Radio 1' }]} />} />
          <Radio inputId={'Radio2'} label={<Label labelTexts={[{ text: 'Radio 2' }]} />} />
          <Radio inputId={'Radio3'} label={<Label labelTexts={[{ text: 'Radio 3' }]} />} />
        </FormLayout>
      </FormGroup>
    </div>
  ),
};

export const WithExternalLegendText: Story = {
  args: {
    title: undefined,
    legend: undefined,
  },
  render: args => (
    <div style={{ background: mapToBackgoundColor(args.onColor as FormOnColor) }}>
      <Expander buttonId="expander-tittel-id" title="Velg mellom checkboxer">
        <FormGroup ariaLabelledBy="expander-tittel-id" {...args}>
          <Checkbox inputId="Checkbox1" label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
          <Checkbox inputId="Checkbox2" label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
          <Checkbox inputId="Checkbox3" label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
        </FormGroup>
      </Expander>
    </div>
  ),
};

export const WithFormFieldTag: Story = {
  render: args => (
    <FormGroup {...args} formFieldTag={<FormFieldTag level="required-field" id="formfieldtag-id" />}>
      <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
      <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
      <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
    </FormGroup>
  ),
};
