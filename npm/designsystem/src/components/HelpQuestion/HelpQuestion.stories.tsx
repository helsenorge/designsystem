import React from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HelpQuestion from './HelpQuestion';
import { mediumLoremText } from '../../utils/loremtext';
import GridExample from '../GridExample';

export default {
  title: '@helsenorge∕designsystem-react/Components/HelpQuestion',
  component: HelpQuestion,
  parameters: {
    docs: {
      description: {
        component: 'Mulighet for å aktivere hjelp i form av svar på et konkret spørsmål.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Hvordan finner jeg HPR-nummer?',
    },
    selected: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof HelpQuestion>;

export const Default: ComponentStory<typeof HelpQuestion> = (args: any) => (
  <GridExample>
    <div>{mediumLoremText}</div>
    <div>
      <HelpQuestion {...args} onClick={action('Trigger clicked!')}>
        {args.children}
      </HelpQuestion>
    </div>
    <div>{mediumLoremText}</div>
  </GridExample>
);
