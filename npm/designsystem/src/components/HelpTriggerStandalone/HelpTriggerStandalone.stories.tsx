import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import HelpTriggerStandalone from './HelpTriggerStandalone';
import { mediumLoremText } from '../../utils/loremtext';
import Button from '../Button';

const meta = {
  title: '@helsenorge/designsystem-react/Components/HelpTriggerStandalone',
  component: HelpTriggerStandalone,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs
          component={HelpTriggerStandalone}
          supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/help-trigger-standalone/bruk-o4PKfguM"
        />
      ),
      description: {
        component:
          'HelpTriggerStandalone lar innbygger se at hjelp finnes for et område eller en detalj, og tillater innbygger å be om hjelp ved behov. Brukes i tekst der innbygger skal kunne be om assistanse”',
      },
    },
  },
  args: {
    children: 'Help text',
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
    weight: {
      control: {
        type: 'select',
        options: ['normal', 'strong'],
      },
    },
  },
} satisfies Meta<typeof HelpTriggerStandalone>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: 'test',
  },

  render: args => <HelpTriggerStandalone {...args} onClick={action('Trigger clicked!')} />,
};

export const Weights: Story = {
  render: args => (
    <>
      <HelpTriggerStandalone {...args} onClick={action('Trigger clicked!')} weight="normal" />
      <HelpTriggerStandalone {...args} onClick={action('Trigger clicked!')} weight="strong" />
    </>
  ),
};

export const NextToElements: Story = {
  render: args => (
    <>
      <div>
        {mediumLoremText}
        <HelpTriggerStandalone {...args} onClick={action('Trigger clicked!')} />
        {mediumLoremText}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2>{'Overskrift 2'}</h2>
        <HelpTriggerStandalone {...args} onClick={action('Trigger clicked!')} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Button>{'Knapp'}</Button>
        <HelpTriggerStandalone {...args} onClick={action('Trigger clicked!')} />
      </div>
      <div>
        {mediumLoremText + ' '}
        <HelpTriggerStandalone {...args} onClick={action('Trigger clicked!')}>
          {'Help text'}
        </HelpTriggerStandalone>
        {' ' + mediumLoremText}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2>{'Overskrift 2'}</h2>
        <HelpTriggerStandalone {...args} onClick={action('Trigger clicked!')}>
          {'Help text'}
        </HelpTriggerStandalone>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Button>{'Knapp'}</Button>
        <HelpTriggerStandalone {...args} onClick={action('Trigger clicked!')}>
          {'Help text'}
        </HelpTriggerStandalone>
      </div>
    </>
  ),
};
