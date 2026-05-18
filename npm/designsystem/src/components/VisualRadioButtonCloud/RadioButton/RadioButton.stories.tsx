import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { StoryObj, Meta } from '@storybook/react-vite';

import RadioButton from './RadioButton';

const meta = {
  title: '@helsenorge/designsystem-react/Components/VisualRadioButtonCloud/RadioButton',
  component: RadioButton,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={RadioButton} />,
      description: {
        component: 'Underkomponent av VisualRadioButtonCloud som rendrer en enkelt pill-formet radioknapp.',
      },
    },
  },
  args: {
    children: 'Tekst',
    value: 'tekst',
    name: 'eksempel',
    onChange: action('Changed'),
  },
  argTypes: {
    children: { control: 'text' },
    checked: { control: 'boolean' },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <RadioButton {...args} />,
};
