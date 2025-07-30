import React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { Breakpoint, useBreakpoint } from './useBreakpoint';

const UseBreakpointExample: React.FC = () => {
  const breakpoint = useBreakpoint();

  const description = `Breakpoint er nå ${Breakpoint[breakpoint]} (${breakpoint}px)`;

  return <p>{description}</p>;
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useBreakpoint',
  component: UseBreakpointExample,
  parameters: {
    docs: {
      description: {
        component: 'Lytt på endringer i breakpoint basert på media queries. Trigger re-render bare når breakpoint er endret.',
      },
      source: {
        language: 'tsx',
        code: `
import { Breakpoint, useBreakpoint } from '@helsenorge/designsystem-react/hooks/useBreakpoint';

const UseBreakpointExample: React.FC = () => {
  const breakpoint = useBreakpoint();
  const description = \`Breakpoint er nå \${Breakpoint[breakpoint]} (\${breakpoint}px)\`;

  return <p>{description}</p>;
}
`,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseBreakpointExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseBreakpointExample /> };
