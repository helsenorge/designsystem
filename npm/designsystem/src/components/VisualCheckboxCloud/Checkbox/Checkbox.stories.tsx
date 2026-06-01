import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Checkbox from './Checkbox';

const meta = {
  title: '@helsenorge/designsystem-react/Components/VisualCheckboxCloud/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Checkbox} />,
      description: {
        component: 'Underkomponent av VisualCheckboxCloud som rendrer en enkelt pill-formet avkrysningsboks.',
      },
    },
  },
  args: {
    children: 'Tekst',
    onChange: action('Changed'),
  },
  argTypes: {
    children: { control: 'text' },
    checked: { control: 'boolean' },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Checkbox {...args} />,
};
