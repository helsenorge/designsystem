import type React from 'react';
import { useRef } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { useOutsideEvent } from './useOutsideEvent';
import Button from '../components/Button';

const UseOutsideEventExample: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);
  useOutsideEvent(ref, event =>
    console.log(`Du klikket på ${(event.target as HTMLElement).tagName} ${(event.target as HTMLElement).tagName}`)
  );

  return (
    <>
      <Button ref={ref}>{'Knapp'}</Button>
      <p>{'Klikk her og sjekk console'}</p>
    </>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useOutsideEvent',
  component: UseOutsideEventExample,
  parameters: {
    docs: {
      description: {
        component: 'Custom hook for klikk eller fokus utenfor et gitt element.',
      },
      source: {
        language: 'tsx',
        code: `
import { useOutsideEvent } from '@helsenorge/designsystem-react/hooks/useOutsideEvent';
import Button from '@helsenorge/designsystem-react/components/Button';
        
const UseOutsideEventExample: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);
  useOutsideEvent(ref, event =>
    console.log(\`Du klikket på \${(event.target as HTMLElement).tagName} \${(event.target as HTMLElement).tagName}\`)
  );

  return (
    <>
      <Button ref={ref}>{'Knapp'}</Button>
      <p>{'Klikk her og sjekk console'}</p>
    </>
  );
};
        `,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseOutsideEventExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseOutsideEventExample /> };
