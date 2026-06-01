import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Radio from './Radio';

const meta = {
  title: '@helsenorge/designsystem-react/Components/VisualRadioCloud/Radio',
  component: Radio,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Radio} />,
      description: {
        component: 'Underkomponent av VisualRadioCloud som rendrer en enkelt pill-formet radioknapp.',
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
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Radio {...args} />,
};
