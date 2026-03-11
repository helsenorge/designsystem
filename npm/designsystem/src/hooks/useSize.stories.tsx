import { useRef } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { useSize } from './useSize';
import HighlightPanel from '../components/HighlightPanel';

const UseSizeExample: React.FC = () => {
  const ref = useRef<HTMLPreElement>(null);
  const size = useSize(ref);

  return (
    <HighlightPanel color="blueberry">
      <pre ref={ref}>{JSON.stringify(size?.toJSON(), null, 2)}</pre>
    </HighlightPanel>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useSize',
  component: UseSizeExample,
  parameters: {
    docs: {
      description: {
        component: 'Lytt på endringer i størrelse på et element.',
      },
      source: {
        language: 'tsx',
        code: `
import { useSize } from '@helsenorge/designsystem-react/hooks/useSize';

const UseSizeExample: React.FC = () => {
  const ref = useRef<HTMLPreElement>(null);
  const size = useSize(ref);

  return (
  <HighlightPanel color="blueberry" size="fluid">
      <pre ref={ref}>{JSON.stringify(size?.toJSON(), null, 2)}</pre>
    </HighlightPanel>
  );
};
`,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseSizeExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseSizeExample /> };
