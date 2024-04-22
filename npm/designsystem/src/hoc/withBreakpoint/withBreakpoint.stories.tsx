import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { BreakpointProps, withBreakpoint } from './withBreakpoint';
import { Breakpoint } from '../../hooks/useBreakpoint';

const Example: React.FC<BreakpointProps> = ({ breakpoint }) => {
  const description = `Breakpoint er nå ${Breakpoint[breakpoint]} (${breakpoint}px)`;

  console.log(description);

  return <p>{description}</p>;
};

const ExampleWithBreakpoint = withBreakpoint(Example);

const meta = {
  title: '@helsenorge/designsystem-react/HOC/withBreakpoint',
  component: ExampleWithBreakpoint,
  parameters: {
    docs: {
      description: {
        component: 'Send inn nåværende breakpoint som en prop til en React-komponent.',
      },
    },
  },
} satisfies Meta<typeof ExampleWithBreakpoint>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <ExampleWithBreakpoint /> };
