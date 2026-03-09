import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Close from './Close';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Close',
  component: Close,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={Close} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/close/bruk-hLj6IwjS" />
      ),
      description: {
        component:
          'Close er en spesiell variant av Button tenkt til bruk ved lukking av modal vinduer, error meldinger eller andre informasjon bokser. Komponentet har unike layout regler, og burde derfor ikke brukes utenfor disse spesielle scenarioene.',
      },
    },
  },
  args: {
    ariaLabel: 'Lukk',
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
    },
    testId: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['blueberry', 'black', 'plum'],
    },
  },
} satisfies Meta<typeof Close>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: action('button-click'),
  },
  render: args => <Close {...args} />,
};

export const AllColors: Story = {
  args: {
    onClick: action('button-click'),
  },
  render: args => (
    <div>
      <Close {...args} color="blueberry" />
      <Close {...args} color="black" />
      <Close {...args} color="plum" />
    </div>
  ),
};
