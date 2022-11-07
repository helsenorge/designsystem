import React, { useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useResizeObserver } from './useResizeObserver';
import GridExample from '../components/GridExample';

const ResizeObserverExample: React.FC = () => {
  const ref = useRef<HTMLPreElement>(null);
  const size = useResizeObserver(ref);

  return (
    <GridExample>
      <pre ref={ref} style={{ width: '100%', border: '1px solid black', padding: '1rem' }}>
        {JSON.stringify(size?.toJSON(), null, 2)}
      </pre>
    </GridExample>
  );
};

export default {
  title: 'Hooks/ResizeObserver',
  component: ResizeObserverExample,
  parameters: {
    docs: {
      description: {
        component: 'Lytt på endringer i størrelse på et element. Bruker ResizeObserver-APIet.',
      },
    },
  },
} as ComponentMeta<typeof ResizeObserverExample>;

export const Default: ComponentStory<typeof ResizeObserverExample> = () => <ResizeObserverExample />;
