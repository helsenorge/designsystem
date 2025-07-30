import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import HelpTrigger from './HelpTrigger';
import { mediumLoremText } from '../../utils/loremtext';
import Button from '../Button';

const meta = {
  title: '@helsenorge/designsystem-react/Components/HelpTrigger',
  component: HelpTrigger,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs
          component={HelpTrigger}
          supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/help-trigger/bruk-o4PKfguM"
        />
      ),
      description: {
        component:
          'HelpTrigger lar innbygger se at hjelp finnes for et område eller en detalj, og tillater innbygger å be om hjelp ved behov. Brukes der hvor innbygger skal kunne be om assistanse”',
      },
    },
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['medium', 'large'],
    },
    onColor: {
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
} satisfies Meta<typeof HelpTrigger>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <>
      {args.onColor === 'ondark' ? (
        <div style={{ backgroundColor: '#6a2abf', padding: '2rem' }}>
          <HelpTrigger {...args} onClick={action('Trigger clicked!')} />
        </div>
      ) : (
        <HelpTrigger {...args} onClick={action('Trigger clicked!')} />
      )}
    </>
  ),
};

export const OnDark: Story = {
  render: args => (
    <div style={{ backgroundColor: '#6a2abf', padding: '2rem' }}>
      <HelpTrigger {...args} onClick={action('Trigger clicked!')} onColor="ondark" />
    </div>
  ),
};

export const NextToText: Story = {
  render: args => (
    <>
      <div>
        {mediumLoremText}
        <HelpTrigger {...args} onClick={action('Trigger clicked!')} />
        {mediumLoremText}
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2>{'Overskrift 2'}</h2>
        <HelpTrigger {...args} onClick={action('Trigger clicked!')} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Button>{'Knapp'}</Button>
        <HelpTrigger {...args} onClick={action('Trigger clicked!')} />
      </div>
    </>
  ),
};
