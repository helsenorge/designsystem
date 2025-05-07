import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useIsMobileBreakpoint } from './useIsMobileBreakpoint';

const UseIsMobileBreakpointExample: React.FC = () => {
  return <p>{useIsMobileBreakpoint() ? 'Is mobile breakpoint' : 'Is not mobile breakpoint'}</p>;
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useIsMobileBreakpoint',
  component: UseIsMobileBreakpointExample,
  parameters: {
    docs: {
      description: {
        component: 'Sjekk om nettleseren er i mobil breakpoint.',
      },
      source: {
        language: 'tsx',
        code: `
import { useIsMobileBreakpoint } from '@helsenorge/designsystem-react/hooks/useIsMobileBreakpoint';
        
const UseIsMobileBreakpointExample: React.FC = () => {
  return <p>{useIsMobileBreakpoint() ? 'Is mobile breakpoint' : 'Is not mobile breakpoint'}</p>;
};
        `,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseIsMobileBreakpointExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseIsMobileBreakpointExample /> };
