import React from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DictionaryTrigger from './DictionaryTrigger';
import { mediumLoremText } from '../../utils/loremtext';
import GridExample from '../GridExample';

export default {
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
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Helsebiblioteket',
    },
    selected: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof DictionaryTrigger>;

export const Default: ComponentStory<typeof DictionaryTrigger> = (args: any) => (
  <GridExample>
    <DictionaryTrigger {...args} onClick={action('Trigger clicked!')} />
  </GridExample>
);

export const NextToText: ComponentStory<typeof DictionaryTrigger> = (args: any) => (
  <GridExample>
    <div>
      {mediumLoremText} <DictionaryTrigger {...args} onClick={action('Trigger clicked!')} /> {mediumLoremText}
    </div>
  </GridExample>
);
