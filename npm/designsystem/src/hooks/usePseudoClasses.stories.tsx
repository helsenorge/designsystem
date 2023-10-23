import React, { useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { usePseudoClasses } from './usePseudoClasses';
import Button from '../components/Button';
import GridExample from '../components/GridExample';

const UsePseudoClassesExample: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const { isHovered, isFocused } = usePseudoClasses(ref);

  return (
    <GridExample>
      <Button ref={ref}>{'Knapp'}</Button>
      <p>
        {'Knappen har hover/fokus: '}
        {isHovered ? 'hover' : isFocused ? 'fokus' : 'nei'}
      </p>
    </GridExample>
  );
};

export default {
  title: '@helsenorge∕designsystem-react/Hooks/usePseudoClasses',
  component: UsePseudoClassesExample,
  parameters: {
    docs: {
      description: {
        component: 'Få vite når et element hovres over eller mottar fokus.',
      },
    },
  },
} as ComponentMeta<typeof UsePseudoClassesExample>;

export const Default: ComponentStory<typeof UsePseudoClassesExample> = () => <UsePseudoClassesExample />;
