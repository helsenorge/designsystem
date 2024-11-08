import React, { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

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
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseOutsideEventExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseOutsideEventExample /> };
