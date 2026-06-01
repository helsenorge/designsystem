import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { StoryObj, Meta } from '@storybook/react-vite';

import VisualRadio from './VisualRadio';

const meta = {
  title: '@helsenorge/designsystem-react/Components/VisualRadioGroup/VisualRadio',
  component: VisualRadio,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={VisualRadio} />,
      description: {
        component: 'Underkomponent av VisualRadioGroup som rendrer en enkelt radioknapp med ramme.',
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
} satisfies Meta<typeof VisualRadio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <VisualRadio {...args} />,
};

export const Variants: Story = {
  args: {
    children: 'Hodepine',
  },
  render: args => (
    <>
      <VisualRadio {...args} variant="line" />
      <VisualRadio {...args} variant="rectangle" />
    </>
  ),
};
