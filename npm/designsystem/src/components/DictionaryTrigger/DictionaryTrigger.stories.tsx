import type React from 'react';

import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { StoryObj, Meta } from '@storybook/react-vite';

import DictionaryTrigger from './DictionaryTrigger';
import { mediumLoremText } from '../../utils/loremtext';

const meta = {
  title: '@helsenorge/designsystem-react/Components/DictionaryTrigger',
  component: DictionaryTrigger,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs
          component={DictionaryTrigger}
          supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/dictionary-trigger/bruk-ePYzzy1y"
        />
      ),
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
  render: args => <DictionaryTrigger {...args} />,
};

export const NextToText: Story = {
  args: {
    onClick: action('Trigger clicked!'),
  },
  render: args => (
    <>
      <p style={{ fontSize: '18px', lineHeight: '27px' }}>
        {mediumLoremText} <DictionaryTrigger {...args} /> {mediumLoremText}
      </p>
      <p style={{ fontSize: '20px', lineHeight: '30px' }}>
        {mediumLoremText} <DictionaryTrigger {...args} /> {mediumLoremText}
      </p>
    </>
  ),
};
