import React from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Trigger from './Trigger';
import { mediumLoremText } from '../../utils/loremtext';
import GridExample from '../GridExample';

export default {
  title: 'Components/Trigger',
  component: Trigger,
  parameters: {
    docs: {
      description: {
        component:
          'Hjelpetrigger/Infotrigger lar innbygger se at hjelp finnes for et område eller en detalj, og tillater innbygger å be om hjelp ved behov. Brukes der hvor innbygger skal kunne be om assistanse”',
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
      defaultValue: 'Hjelp',
    },
    variant: {
      control: 'select',
      options: ['help'], //['help', 'info'], @todo Åpne for info igjen når design er klart
      defaultValue: 'help',
    },
    size: {
      control: 'select',
      options: ['medium', 'large'],
      defaultValue: 'medium',
    },
    mode: {
      control: 'select',
      options: ['onlight', 'ondark'],
      defaultValue: 'onlight',
    },
    selected: {
      control: 'boolean',
      defaultValue: false,
    },
    htmlMarkup: {
      control: 'select',
      options: ['button', 'span'],
      defaultValue: 'button',
    },
  },
} as ComponentMeta<typeof Trigger>;

export const Default: ComponentStory<typeof Trigger> = (args: any) => (
  <GridExample>
    {args.mode === 'ondark' ? (
      <div style={{ backgroundColor: '#6a2abf', padding: '2rem' }}>
        <Trigger {...args} onClick={action('Trigger clicked!')} />
      </div>
    ) : (
      <Trigger {...args} onClick={action('Trigger clicked!')} />
    )}
  </GridExample>
);

export const HelpTrigger: ComponentStory<typeof Trigger> = (args: any) => (
  <GridExample>
    <Trigger {...args} onClick={action('Trigger clicked!')} variant="help" />
  </GridExample>
);

// export const InfoTrigger: ComponentStory<typeof Trigger> = (args: any) => (
//   <GridExample>
//     <Trigger {...args} onClick={action('Trigger clicked!')} variant="info" />
//   </GridExample>
// );

export const OnDark: ComponentStory<typeof Trigger> = (args: any) => (
  <GridExample>
    <div style={{ backgroundColor: '#6a2abf', padding: '2rem' }}>
      <Trigger {...args} onClick={action('Trigger clicked!')} mode="ondark" />
    </div>
  </GridExample>
);

export const NextToText: ComponentStory<typeof Trigger> = (args: any) => (
  <GridExample>
    <div>
      {mediumLoremText} <Trigger {...args} onClick={action('Trigger clicked!')} variant="help" /> {mediumLoremText}
    </div>
  </GridExample>
);
