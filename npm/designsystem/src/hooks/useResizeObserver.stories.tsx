import React, { useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useResizeObserver } from './useResizeObserver';
import GridExample from '../components/GridExample';
import HighlightBox from '../components/HighlightBox';

const UseResizeObserverExample: React.FC = () => {
  const ref = useRef<HTMLPreElement>(null);
  const size = useResizeObserver(ref);

  return (
    <GridExample>
      <HighlightBox color="blueberry" size="fluid">
        <pre ref={ref}>{JSON.stringify(size?.toJSON(), null, 2)}</pre>
      </HighlightBox>
    </GridExample>
  );
};

export default {
  title: 'Hooks/useResizeObserver',
  component: UseResizeObserverExample,
  parameters: {
    docs: {
      description: {
        component: 'Lytt på endringer i størrelse på et element. Bruker ResizeObserver-APIet.',
      },
    },
  },
} as ComponentMeta<typeof UseResizeObserverExample>;

export const Default: ComponentStory<typeof UseResizeObserverExample> = () => <UseResizeObserverExample />;
