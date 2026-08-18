import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import FormLayout from './FormLayout';
import Checkbox from '../Checkbox/Checkbox';
import FormGroup from '../FormGroup';
import Label, { Sublabel } from '../Label';
import { FormLayoutColumns } from './constants';
import RadioButton from '../RadioButton/RadioButton';
import Spacer from '../Spacer';

const meta = {
  title: '@helsenorge/designsystem-react/Components/FormLayout',
  component: FormLayout,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={FormLayout} />,
      description: {
        component:
          'Et kolonne komponent som kan legges inne i en FormGroup. Det wrapper flere Checkboxer eller Radiobuttons, og lar deg styre kolonne layout',
      },
    },
  },
  argTypes: {
    maxColumns: {
      control: 'select',
      options: Object.values(FormLayoutColumns),
    },
    colMinWidth: {
      control: 'number',
    },
  },
} satisfies Meta<typeof FormLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <FormGroup>
      <FormLayout {...args}>
        <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox 1' }]} />} />
        <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox 2' }]} />} />
        <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox 3' }]} />} />
        <Checkbox inputId={'Checkbox4'} label={<Label labelTexts={[{ text: 'Checkbox 4' }]} />} />
      </FormLayout>
    </FormGroup>
  ),
};

export const CheckboxChildren: Story = {
  render: args => (
    <FormGroup title={'Her kan du styre maks antall kolonner'} legend={'Antallet er basert på hvor mange som har plass'}>
      <FormLayout {...args}>
        <Checkbox inputId={'Checkbox1'} label={<Label labelTexts={[{ text: 'Checkbox hei' }]} />} />
        <Checkbox inputId={'Checkbox2'} label={<Label labelTexts={[{ text: 'Checkbox lalalala' }]} />} />
        <Checkbox inputId={'Checkbox3'} label={<Label labelTexts={[{ text: 'Checkbox asdadasd afasasfaa' }]} />} />
        <Checkbox inputId={'Checkbox4'} label={<Label labelTexts={[{ text: 'Checkbox hmm' }]} />} />
        <Checkbox inputId={'Checkbox5'} label={<Label labelTexts={[{ text: 'Checkbox' }]} />} />
        <Checkbox inputId={'Checkbox6'} label={<Label labelTexts={[{ text: 'Checkbox jadada' }]} />} />
      </FormLayout>
    </FormGroup>
  ),
};

export const CheckboxChildrenWithSublabel: Story = {
  render: args => (
    <FormGroup title={'Her kan du styre maks antall kolonner'} legend={'Antallet er basert på hvor mange som har plass'}>
      <FormLayout {...args}>
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
        <Checkbox
          inputId={'Checkbox4'}
          aria-describedby={'sublabelid04'}
          label={
            <Label
              labelTexts={[{ text: 'Checkbox 4' }]}
              sublabel={<Sublabel id={'sublabelid04'} sublabelTexts={[{ text: 'Sublabel text', type: 'subdued' }]} />}
            />
          }
        />
      </FormLayout>
    </FormGroup>
  ),
};

export const RadioButtonChildren: Story = {
  render: args => (
    <>
      <FormGroup
        title={'Her kan du styre maks antall kolonner'}
        legend={'Antallet er basert på hvor mange som har plass'}
        name={'radiogroup1'}
      >
        <FormLayout {...args}>
          <RadioButton inputId={'RadioButton1'} label={<Label labelTexts={[{ text: 'Radiobutton 1' }]} />} />
          <RadioButton inputId={'RadioButton2'} label={<Label labelTexts={[{ text: 'Radiobutton 2' }]} />} />
          <RadioButton inputId={'RadioButton3'} label={<Label labelTexts={[{ text: 'Radiobutton 3' }]} />} />
        </FormLayout>
      </FormGroup>
      <Spacer size={'m'} />
      <FormGroup legend={'Radio radio hello!'} name={'radiogroup2'}>
        <FormLayout {...args}>
          <RadioButton inputId={'RadioButton4'} label={<Label labelTexts={[{ text: 'Radiobutton 4' }]} />} />
          <RadioButton inputId={'RadioButton5'} label={<Label labelTexts={[{ text: 'Radiobutton 5' }]} />} />
          <RadioButton inputId={'RadioButton6'} label={<Label labelTexts={[{ text: 'Radiobutton 6' }]} />} />
        </FormLayout>
      </FormGroup>
    </>
  ),
};

export const RadioButtonChildrenWithSublabel: Story = {
  render: args => (
    <FormGroup
      title={'Her kan du styre maks antall kolonner'}
      legend={'Antallet er basert på hvor mange som har plass'}
      name={'radiogroup3'}
    >
      <FormLayout {...args}>
        <RadioButton
          inputId={'RadioButton7'}
          aria-describedby={'sublabelid07'}
          label={
            <Label
              labelTexts={[{ text: 'Radiobutton 7' }]}
              sublabel={<Sublabel id={'sublabelid07'} sublabelTexts={[{ text: 'Sublabel text', type: 'subdued' }]} />}
            />
          }
        />
        <RadioButton
          inputId={'RadioButton8'}
          aria-describedby={'sublabelid08'}
          label={
            <Label
              labelTexts={[{ text: 'Radiobutton 8' }]}
              sublabel={<Sublabel id={'sublabelid08'} sublabelTexts={[{ text: 'Sublabel text', type: 'subdued' }]} />}
            />
          }
        />
        <RadioButton
          inputId={'RadioButton9'}
          aria-describedby={'sublabelid09'}
          label={
            <Label
              labelTexts={[{ text: 'Radiobutton 9' }]}
              sublabel={<Sublabel id={'sublabelid09'} sublabelTexts={[{ text: 'Sublabel text', type: 'subdued' }]} />}
            />
          }
        />
      </FormLayout>
    </FormGroup>
  ),
};
