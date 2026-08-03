import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import FormLayout from './FormLayout';
import Checkbox from '../Checkbox/Checkbox';
import FormGroup from '../FormGroup';
import Label from '../Label';
import { FormLayoutColumns } from './constants';
import Radio from '../Radio/Radio';

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

export const RadioButtonChildren: Story = {
  render: args => (
    <>
      <FormGroup
        title={'Her kan du styre maks antall kolonner'}
        legend={'Antallet er basert på hvor mange som har plass'}
        name={'radiogroup1'}
      >
        <FormLayout {...args}>
          <Radio inputId={'Radio1'} label={<Label labelTexts={[{ text: 'Radio 1' }]} />} />
          <Radio inputId={'Radio2'} label={<Label labelTexts={[{ text: 'Radio 2' }]} />} />
          <Radio inputId={'Radio3'} label={<Label labelTexts={[{ text: 'Radio 3' }]} />} />
        </FormLayout>
      </FormGroup>
      <FormGroup legend={'Radio radio hello!'} name={'radiogroup2'}>
        <FormLayout {...args}>
          <Radio inputId={'Radio4'} label={<Label labelTexts={[{ text: 'Radio 4' }]} />} />
          <Radio inputId={'Radio5'} label={<Label labelTexts={[{ text: 'Radio 5' }]} />} />
          <Radio inputId={'Radio6'} label={<Label labelTexts={[{ text: 'Radio 6' }]} />} />
        </FormLayout>
      </FormGroup>
    </>
  ),
};
