import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import DictionaryTrigger from './DictionaryTrigger';
import { mediumLoremText } from '../../utils/loremtext';
import GridExample from '../GridExample';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/DictionaryTrigger',
  component: DictionaryTrigger,
  parameters: {
    docs: {
      description: {
        component:
          'DictionaryTrigger benyttes til å markere ord i løpende tekst på en gjenkjennelig måte, og skal trigge en HelpBubble med ordforklaring når den aktiveres.',
      },
    },
  },
  args: {
    children: 'Helsebiblioteket',
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
} satisfies Meta<typeof DictionaryTrigger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: action('Trigger clicked!'),
  },
  render: args => (
    <GridExample>
      <DictionaryTrigger {...args} />
    </GridExample>
  ),
};

export const NextToText: Story = {
  args: {
    onClick: action('Trigger clicked!'),
  },
  render: args => (
    <GridExample>
      <div>
        {mediumLoremText} <DictionaryTrigger {...args} /> {mediumLoremText}
      </div>
    </GridExample>
  ),
};
