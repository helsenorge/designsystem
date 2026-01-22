import type React from 'react';
import { useRef } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { useResizeObserver } from './useResizeObserver';
import HighlightPanel from '../components/HighlightPanel';

const UseResizeObserverExample: React.FC = () => {
  const ref = useRef<HTMLPreElement>(null);
  const size = useResizeObserver(ref);

  return (
    <HighlightPanel color="blueberry" size="fluid">
      <pre ref={ref}>{JSON.stringify(size?.toJSON(), null, 2)}</pre>
    </HighlightPanel>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useResizeObserver',
  component: UseResizeObserverExample,
  parameters: {
    docs: {
      description: {
        component: 'Lytt på endringer i størrelse på et element. Bruker ResizeObserver-APIet.',
      },
      source: {
        language: 'tsx',
        code: `
import { useResizeObserver } from '@helsenorge/designsystem-react/hooks/useResizeObserver';
import HighlightPanel from '@helsenorge/designsystem-react/components/HighlightPanel';
        
const UseResizeObserverExample: React.FC = () => {
  const ref = useRef<HTMLPreElement>{'(null);
  const size = useResizeObserver(ref);

  return ('}<HighlightPanel color="blueberry" size="fluid">
      <pre ref={ref}>{JSON.stringify(size?.toJSON(), null, 2)}</pre>
    </HighlightPanel>
  );
};
        `,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseResizeObserverExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseResizeObserverExample /> };
