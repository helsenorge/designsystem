import React, { useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useIsVisible } from './useIsVisible';
import { longLoremText } from '../utils/loremtext';
import GridExample from '../components/GridExample';

const IsVisibleExample: React.FC = (args: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref, args.threshold);

  return (
    <GridExample>
      <div style={{ width: '20rem', height: '20rem', border: '1px solid black', padding: '1rem', overflow: 'scroll' }}>
        <p>{longLoremText}</p>
        <div ref={ref} style={{ width: '10rem', height: '10rem', border: '1px solid red', padding: '1rem' }}>
          isVisible: {isVisible.toString()}
        </div>
        <p>{longLoremText}</p>
      </div>
    </GridExample>
  );
};

export default {
  title: 'Hooks/IsVisible',
  component: IsVisibleExample,
  argTypes: {
    threshold: {
      control: 'number',
      defaultValue: 1,
    },
  },
} as ComponentMeta<typeof IsVisibleExample>;

export const Default: ComponentStory<typeof IsVisibleExample> = (args: any) => <IsVisibleExample {...args} />;
