import React, { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';

import { usePseudoClasses } from './usePseudoClasses';
import Button from '../components/Button';

const UsePseudoClassesExample: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const { isHovered, isFocused } = usePseudoClasses(ref);

  return (
    <>
      <Button ref={ref}>{'Knapp'}</Button>
      <p>
        {'Knappen har hover/fokus: '}
        {isHovered ? 'hover' : isFocused ? 'fokus' : 'nei'}
      </p>
    </>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/usePseudoClasses',
  component: UsePseudoClassesExample,
  parameters: {
    docs: {
      description: {
        component: 'Få vite når et element hovres over eller mottar fokus.',
      },
      source: {
        language: 'tsx',
        code: `
import { usePseudoClasses } from '@helsenorge/designsystem-react/hooks/usePseudoClasses';
import Button from '@helsenorge/designsystem-react/components/Button';
        
const UsePseudoClassesExample: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const { isHovered, isFocused } = usePseudoClasses(ref);

  return (
    <>
      <Button ref={ref}>{'Knapp'}</Button>
      <p>
        {'Knappen har hover/fokus: '}
        {isHovered ? 'hover' : isFocused ? 'fokus' : 'nei'}
      </p>
    </>
  );
};
        `,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UsePseudoClassesExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UsePseudoClassesExample /> };
