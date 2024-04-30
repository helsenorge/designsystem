import React, { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useResizeObserver } from './useResizeObserver';
import HighlightBox from '../components/HighlightBox';

const UseResizeObserverExample: React.FC = () => {
  const ref = useRef<HTMLPreElement>(null);
  const size = useResizeObserver(ref);

  return (
    <HighlightBox color="blueberry" size="fluid">
      <pre ref={ref}>{JSON.stringify(size?.toJSON(), null, 2)}</pre>
    </HighlightBox>
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
    },
  },
} satisfies Meta<typeof UseResizeObserverExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseResizeObserverExample /> };
