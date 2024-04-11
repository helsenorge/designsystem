import React, { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useSize } from './useSize';
import HighlightBox from '../components/HighlightBox';

const UseSizeExample: React.FC = () => {
  const ref = useRef<HTMLPreElement>(null);
  const size = useSize(ref);

  return (
    <HighlightBox color="blueberry" size="fluid">
      <pre ref={ref}>{JSON.stringify(size?.toJSON(), null, 2)}</pre>
    </HighlightBox>
  );
};

const meta = {
  title: '@helsenorge∕designsystem-react/Hooks/useSize',
  component: UseSizeExample,
  parameters: {
    docs: {
      description: {
        component: 'Lytt på endringer i størrelse på et element.',
      },
    },
  },
} satisfies Meta<typeof UseSizeExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseSizeExample /> };
