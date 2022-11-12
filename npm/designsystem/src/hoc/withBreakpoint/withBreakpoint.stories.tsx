import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Breakpoint } from '../../hooks/useBreakpoint';
import { BreakpointProps, withBreakpoint } from './withBreakpoint';
import GridExample from '../../components/GridExample';

const Example: React.FC<BreakpointProps> = ({ breakpoint }) => {
  const description = breakpoint && `Breakpoint er nå ${Breakpoint[breakpoint]} (${breakpoint}px)`;

  console.log(description);

  return (
    <GridExample>
      <p>{description}</p>
    </GridExample>
  );
};

const ExampleWithBreakpoint = withBreakpoint(Example);

export default {
  title: 'HOC/withBreakpoint',
  component: ExampleWithBreakpoint,
  parameters: {
    docs: {
      description: {
        component: 'Send inn nåværende breakpoint som en prop til en React-komponent.',
      },
    },
  },
} as ComponentMeta<typeof ExampleWithBreakpoint>;

export const Default: ComponentStory<typeof ExampleWithBreakpoint> = () => <ExampleWithBreakpoint />;
