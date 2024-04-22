import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import HelpQuestion from './HelpQuestion';
import Docs from '../../docs';
import { mediumLoremText } from '../../utils/loremtext';

const meta = {
  title: '@helsenorge/designsystem-react/Components/HelpQuestion',
  component: HelpQuestion,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={HelpQuestion} />,
      description: {
        component: 'Mulighet for å aktivere hjelp i form av svar på et konkret spørsmål.',
      },
    },
  },
  args: {
    children: 'Hvordan finner jeg HPR-nummer?',
    selected: false,
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
