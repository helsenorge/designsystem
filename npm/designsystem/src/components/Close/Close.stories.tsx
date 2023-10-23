import React from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Close from './Close';
import GridExample from '../GridExample';

export default {
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
  argTypes: {
    testId: {
      control: 'text',
      defaultValue: '',
    },
    ariaLabel: {
      control: 'text',
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof Close>;

export const Default: ComponentStory<typeof Close> = (args: any) => (
  <GridExample>
    <Close {...args} onClick={action('button-click')} />
  </GridExample>
);
