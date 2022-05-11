import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Breakpoint } from '../../hooks/useBreakpoint';
import { BreakpointProps, withBreakpoint } from './withBreakpoint';

const Example: React.FC<BreakpointProps> = ({ breakpoint }) => {

  const description = breakpoint && `Breakpoint er nå ${Breakpoint[breakpoint]} (${breakpoint}px)`;

  console.log(description);

  return (
    <div>
      <p>{description}</p>
    </div>
  );
};

const ExampleWithBreakpoint = withBreakpoint(Example);

export default {
  title: 'Hooks/withBreakpoint',
  component: ExampleWithBreakpoint,
} as ComponentMeta<typeof ExampleWithBreakpoint>;

export const Default: ComponentStory<typeof ExampleWithBreakpoint> = () => <ExampleWithBreakpoint />;
