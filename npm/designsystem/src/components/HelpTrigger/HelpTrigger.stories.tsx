import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

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
      options: ['medium', 'large', 'xlarge'],
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
  args: {
    ariaLabel: 'test',
  },

  render: args => <HelpTrigger {...args} onClick={action('Trigger clicked!')} />,
};

export const Sizes: Story = {
  render: args => (
    <>
      <HelpTrigger {...args} onClick={action('Trigger clicked!')} size="medium" />
      <HelpTrigger {...args} onClick={action('Trigger clicked!')} size="large" />
      <HelpTrigger {...args} onClick={action('Trigger clicked!')} size="xlarge" />
    </>
  ),
};

export const Weights: Story = {
  render: args => (
    <>
      <HelpTrigger {...args} onClick={action('Trigger clicked!')} weight="normal" />
      <HelpTrigger {...args} onClick={action('Trigger clicked!')} weight="strong" />
    </>
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
