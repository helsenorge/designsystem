import { action } from 'storybook/actions';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Chip from './Chip';

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
    onChipClick: action('Chip clicked'),
    onCloseClick: action('Close clicked'),
    closeButtonProps: {},
    chipButtonProps: {},
  },
  argTypes: {
    children: {
      control: 'text',
    },
    withCloseButton: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Chip {...args} />,
};

export const WithAndWithoutCloseButton: Story = {
  render: args => (
    <>
      <Chip {...args} withCloseButton />
      <br />
      <br />
      <Chip {...args} withCloseButton={false} />
    </>
  ),
};
