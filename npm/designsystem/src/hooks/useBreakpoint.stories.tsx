import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Breakpoint, useBreakpoint } from './useBreakpoint';
import GridExample from '../components/GridExample';

const UseBreakpointExample: React.FC = () => {
  const breakpoint = useBreakpoint();

  const description = `Breakpoint er nå ${Breakpoint[breakpoint]} (${breakpoint}px)`;

  return (
    <GridExample>
      <p>{description}</p>
    </GridExample>
  );
};

export default {
  title: '@helsenorge∕designsystem-react/Hooks/useBreakpoint',
  component: UseBreakpointExample,
  parameters: {
    docs: {
      description: {
        component: 'Lytt på endringer i breakpoint basert på media queries. Trigger re-render bare når breakpoint er endret.',
      },
    },
  },
} as ComponentMeta<typeof UseBreakpointExample>;

export const Default: ComponentStory<typeof UseBreakpointExample> = () => <UseBreakpointExample />;
