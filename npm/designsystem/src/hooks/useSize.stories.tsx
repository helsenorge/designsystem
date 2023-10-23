import React, { useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

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

export default {
  title: '@helsenorge∕designsystem-react/Hooks/useSize',
  component: UseSizeExample,
  parameters: {
    docs: {
      description: {
        component: 'Lytt på endringer i størrelse på et element.',
      },
    },
  },
} as ComponentMeta<typeof UseSizeExample>;

export const Default: ComponentStory<typeof UseSizeExample> = () => <UseSizeExample />;
