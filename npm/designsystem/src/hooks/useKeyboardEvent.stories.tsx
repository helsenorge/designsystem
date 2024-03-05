import React, { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useKeyboardEvent } from './useKeyboardEvent';
import GridExample from '../components/GridExample';
import Textarea from '../components/Textarea';
import { KeyboardEventKey } from '../constants';

const UseKeyboardEventExample: React.FC = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  useKeyboardEvent(ref, e => console.log(`Du trykker på ${e.key}`), [
    KeyboardEventKey.ArrowDown,
    KeyboardEventKey.ArrowUp,
    KeyboardEventKey.End,
    KeyboardEventKey.Enter,
    KeyboardEventKey.Escape,
    KeyboardEventKey.Home,
  ]);

  return (
    <GridExample>
      <Textarea ref={ref} defaultValue="Trykk på enter og sjekk console" />
    </GridExample>
  );
};

const meta = {
  title: '@helsenorge∕designsystem-react/Hooks/useKeyboardEvent',
  component: UseKeyboardEventExample,
  parameters: {
    docs: {
      description: {
        component: 'Lytt på keyboard-events og kjør en callback.',
      },
    },
  },
} satisfies Meta<typeof UseKeyboardEventExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseKeyboardEventExample /> };
