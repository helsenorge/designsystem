import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import Trigger from './Trigger';
import { mediumLoremText } from '../../utils/loremtext';
import Button from '../Button';
import GridExample from '../GridExample';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Trigger',
  component: Trigger,
  parameters: {
    docs: {
      description: {
        component:
          'Hjelpetrigger/Infotrigger lar innbygger se at hjelp finnes for et område eller en detalj, og tillater innbygger å be om hjelp ved behov. Brukes der hvor innbygger skal kunne be om assistanse”',
      },
    },
  },
  args: {
    ariaLabel: 'Hjelp',
    variant: 'help',
    size: 'medium',
    mode: 'onlight',
    selected: false,
    htmlMarkup: 'button',
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['help'], //['help', 'info'], @todo Åpne for info igjen når design er klart
    },
    size: {
      control: 'select',
      options: ['medium', 'large'],
    },
    mode: {
      control: 'select',
      options: ['onlight', 'ondark'],
    },
    selected: {
      control: 'boolean',
    },
    htmlMarkup: {
      control: 'select',
      options: ['button', 'span'],
    },
  },
} satisfies Meta<typeof Trigger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <GridExample>
      {args.mode === 'ondark' ? (
        <div style={{ backgroundColor: '#6a2abf', padding: '2rem' }}>
          <Trigger {...args} onClick={action('Trigger clicked!')} />
        </div>
      ) : (
        <Trigger {...args} onClick={action('Trigger clicked!')} />
      )}
    </GridExample>
  ),
};

export const HelpTrigger: Story = {
  render: args => (
    <GridExample>
      <Trigger {...args} onClick={action('Trigger clicked!')} variant="help" />
    </GridExample>
  ),
};

export const OnDark: Story = {
  render: args => (
    <GridExample>
      <div style={{ backgroundColor: '#6a2abf', padding: '2rem' }}>
        <Trigger {...args} onClick={action('Trigger clicked!')} mode="ondark" />
      </div>
    </GridExample>
  ),
};

export const NextToText: Story = {
  render: args => (
    <GridExample>
      <div>
        {mediumLoremText}
        <Trigger {...args} onClick={action('Trigger clicked!')} variant="help" />
        {mediumLoremText}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2>{'Overskrift 2'}</h2>
        <Trigger {...args} onClick={action('Trigger clicked!')} variant="help" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Button>{'Knapp'}</Button>
        <Trigger {...args} onClick={action('Trigger clicked!')} variant="help" />
      </div>
    </GridExample>
  ),
};
