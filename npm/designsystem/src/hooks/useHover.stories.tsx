import React, { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useHover } from './useHover';
import Button from '../components/Button';

const UseHoverExample: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const { isHovered } = useHover(ref);

  return (
    <>
      <Button ref={ref}>{'Knapp'}</Button>
      <p>{`Knappen har hover/fokus: ${isHovered ? 'ja' : 'nei'}`}</p>
    </>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useHover',
  component: UseHoverExample,
  parameters: {
    docs: {
      description: {
        component: 'Få vite når et element hovres over eller mottar fokus.',
      },
      source: {
        language: 'tsx',
        code: `
import { useHover } from '@helsenorge/designsystem-react/hooks/useHover';
import Button from '@helsenorge/designsystem-react/components/Button';

const UseHoverExample: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const { isHovered } = useHover(ref);

  return (
    <>
      <Button ref={ref}>{'Knapp'}</Button>
      <p>{\`Knappen har hover/fokus: \${isHovered ? 'ja' : 'nei'}\`}</p>
    </>
  );
};
        `,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseHoverExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseHoverExample /> };
