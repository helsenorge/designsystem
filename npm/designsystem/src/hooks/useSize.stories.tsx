import React, { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useSize } from './useSize';
import GridExample from '../components/GridExample';
import HighlightBox from '../components/HighlightBox';

const UseSizeExample: React.FC = () => {
  const ref = useRef<HTMLPreElement>(null);
  const size = useSize(ref);

  return (
    <GridExample>
      <HighlightBox color="blueberry" size="fluid">
        <pre ref={ref}>{JSON.stringify(size?.toJSON(), null, 2)}</pre>
      </HighlightBox>
    </GridExample>
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
