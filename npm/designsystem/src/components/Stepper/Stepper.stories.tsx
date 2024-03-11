import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Stepper from './Stepper';
import GridExample from '../GridExample';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Stepper',
  component: Stepper,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg kunne se hvor jeg befinner meg i en stegvisning eller prosess slik at jeg ikke mister motivasjonen og slik at jeg får en følelse av at det jeg gjør bringer med nærmere målet.',
      },
    },
  },
  args: {
    ariaLabel: 'Steg for steg',
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
    },
    ariaLabelledById: {
      control: 'text',
    },
    value: {
      control: 'number',
    },
    min: {
      control: 'number',
    },
    max: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dots: Story = {
  render: args => (
    <GridExample>
      <Stepper {...args} />
    </GridExample>
  ),
};

export const Smooth: Story = {
  args: {
    min: 1,
    max: 100,
  },
  render: args => (
    <GridExample>
      <Stepper {...args} />
    </GridExample>
  ),
};
