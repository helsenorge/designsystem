import { action } from 'storybook/actions';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Chip from './Chip';
import { ChipAction, ChipSize, ChipVariant } from './constants';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Chip',
  component: Chip,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  args: {
    children: 'Tekst',
    action: ChipAction.remove,
    onClick: action('Chip clicked'),
  },
  argTypes: {
    children: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: Object.values(ChipSize),
    },
    color: {
      control: 'select',
      options: ['blueberry', 'neutral', 'cherry', 'banana', 'kiwi', 'plum'],
    },
    variant: {
      control: 'select',
      options: Object.values(ChipVariant),
    },
    action: {
      control: 'select',
      options: Object.values(ChipAction),
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Chip {...args} />,
};

export const Actions: Story = {
  render: args => (
    <>
      <Chip {...args} action="remove" />
      <br />
      <br />
      <Chip {...args} action="undo" />
    </>
  ),
};
