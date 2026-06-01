import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { StoryObj, Meta } from '@storybook/react-vite';

import VisualCheckbox from './VisualCheckbox';

const meta = {
  title: '@helsenorge/designsystem-react/Components/VisualCheckboxGroup/VisualCheckbox',
  component: VisualCheckbox,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={VisualCheckbox} />,
      description: {
        component: 'Underkomponent av VisualCheckboxGroup som rendrer en enkelt avkrysningsboks med ramme.',
      },
    },
  },
  args: {
    children: 'Tekst',
    visualContent: <img src="https://placehold.co/64x64" alt="" />,
    variant: 'line',
    onChange: action('Changed'),
  },
  argTypes: {
    children: { control: 'text' },
    checked: { control: 'boolean' },
    variant: {
      control: 'radio',
      options: ['line', 'rectangle'],
    },
  },
} satisfies Meta<typeof VisualCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <VisualCheckbox {...args} />,
};

export const Variants: Story = {
  args: {
    children: 'Hodepine',
  },
  render: args => (
    <>
      <VisualCheckbox {...args} variant="line" />
      <VisualCheckbox {...args} variant="rectangle" />
    </>
  ),
};
