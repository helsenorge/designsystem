import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Stepper from './Stepper';
import Docs from '../../docs';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Stepper',
  component: Stepper,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Stepper} />,
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
  render: args => <Stepper {...args} />,
};

export const Smooth: Story = {
  args: {
    min: 1,
    max: 100,
  },
  render: args => <Stepper {...args} />,
};
