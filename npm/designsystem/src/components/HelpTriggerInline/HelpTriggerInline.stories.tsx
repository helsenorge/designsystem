import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import HelpTriggerInline from './HelpTriggerInline';

const meta = {
  title: '@helsenorge/designsystem-react/Components/HelpTriggerInline',
  component: HelpTriggerInline,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs
          component={HelpTriggerInline}
          supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/help-trigger-inline/bruk-o4PKfguM"
        />
      ),
      description: {
        component:
          'HelpTriggerInline lar innbygger se at hjelp finnes for et område eller en detalj, og tillater innbygger å be om hjelp ved behov. Brukes i tekst der innbygger skal kunne be om assistanse”',
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
} satisfies Meta<typeof HelpTriggerInline>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ariaLabel: 'test',
  },

  render: args => <HelpTriggerInline {...args} onClick={action('Trigger clicked!')} />,
};

export const Weights: Story = {
  render: args => (
    <>
      <HelpTriggerInline {...args} onClick={action('Trigger clicked!')} weight="normal" />
      <br />
      <HelpTriggerInline {...args} onClick={action('Trigger clicked!')} weight="strong" />
    </>
  ),
};

export const InsideText: Story = {
  render: args => (
    <>
      <p style={{ fontSize: '18px' }}>
        {'Laborum eu commodo qui pariatur irure exercitation duis id qui proident nisi nulla aliquip veniam '}
        <HelpTriggerInline {...args} onClick={action('Trigger clicked!')} />
        {' Laborum eu commodo qui pariatur irure exercitation duis id qui proident nisi nulla aliquip veniam'}
      </p>
      <p style={{ fontSize: '26px' }}>
        {'Laborum eu commodo qui pariatur irure exercitation duis id qui proident nisi nulla aliquip veniam '}
        <HelpTriggerInline {...args} onClick={action('Trigger clicked!')} />
        {' Cillum quis sit reprehenderit adipisicing labore.'}
      </p>
    </>
  ),
};
