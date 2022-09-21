import React, { useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useResizeObserver } from './useResizeObserver';

const ResizeObserverExample: React.FC = () => {
  const ref = useRef<HTMLPreElement>(null);
  const size = useResizeObserver(ref);

  return (
    <div style={{ width: '50vw' }}>
      <pre ref={ref} style={{ width: '100%', border: '1px solid black', padding: '1rem' }}>
        {JSON.stringify(size?.toJSON(), null, 2)}
      </pre>
    </div>
  );
};

export default {
  title: 'Hooks/ResizeObserver',
  component: ResizeObserverExample,
} as ComponentMeta<typeof ResizeObserverExample>;

export const Default: ComponentStory<typeof ResizeObserverExample> = () => <ResizeObserverExample />;
