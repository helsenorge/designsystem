import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BreakpointProps, withBreakpoint } from './withBreakpoint';
import GridExample from '../../components/GridExample';
import { Breakpoint } from '../../hooks/useBreakpoint';

const Example: React.FC<BreakpointProps> = ({ breakpoint }) => {
  const description = `Breakpoint er nå ${Breakpoint[breakpoint]} (${breakpoint}px)`;

  console.log(description);

  return (
    <GridExample>
      <p>{description}</p>
    </GridExample>
  );
};

const ExampleWithBreakpoint = withBreakpoint(Example);

export default {
  title: '@helsenorge∕designsystem-react/HOC/withBreakpoint',
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
