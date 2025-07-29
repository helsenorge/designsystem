import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import HelpQuestion from './HelpQuestion';
import { mediumLoremText } from '../../utils/loremtext';

const meta = {
  title: '@helsenorge/designsystem-react/Components/HelpQuestion',
  component: HelpQuestion,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs
          component={HelpQuestion}
          supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/help-question/bruk-MTQ8TkDW"
        />
      ),
      description: {
        component: 'Mulighet for å aktivere hjelp i form av svar på et konkret spørsmål.',
      },
    },
  },
  args: {
    children: 'Hvordan finner jeg HPR-nummer?',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    selected: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof HelpQuestion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: action('Trigger clicked!'),
  },
  render: args => <HelpQuestion {...args} />,
};

export const InText: Story = {
  args: {
    onClick: action('Trigger clicked!'),
  },
  render: args => (
    <>
      <div>{mediumLoremText}</div>
      <div>
        <HelpQuestion {...args} />
      </div>
      <div>{mediumLoremText}</div>
    </>
  ),
};
