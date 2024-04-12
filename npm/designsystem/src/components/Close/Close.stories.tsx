import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import Close from './Close';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Close',
  component: Close,
  parameters: {
    docs: {
      description: {
        component:
          'Close er en spesiell variant av Button tenkt til bruk ved lukking av modal vinduer, error meldinger eller andre informasjon bokser. Komponentet har unike layout regler, og burde derfor ikke brukes utenfor disse spesielle scenarioene.',
      },
    },
  },
  args: {
    ariaLabel: '',
    testId: '',
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
    },
    testId: {
      control: 'text',
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
