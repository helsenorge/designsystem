import type React from 'react';
import { useRef } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { useKeyboardEvent } from './useKeyboardEvent';
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

  return <Textarea ref={ref} defaultValue="Trykk på enter og sjekk console" />;
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useKeyboardEvent',
  component: UseKeyboardEventExample,
  parameters: {
    docs: {
      description: {
        component: 'Lytt på keyboard-events og kjør en callback.',
      },
      source: {
        language: 'tsx',
        code: `
import { useKeyboardEvent } from '@helsenorge/designsystem-react/hooks/useKeyboardEvent';
import Textarea from '@helsenorge/designsystem-react/components/Textarea';
import { KeyboardEventKey } from '@helsenorge/designsystem-react/constants/KeyboardEventKey';

const UseKeyboardEventExample: React.FC = () => {
  const ref = useRef<HTMLTextAreaElement>(null);
  
  useKeyboardEvent(ref, e => console.log(\`Du trykker på \${e.key}\`), [
    KeyboardEventKey.ArrowDown,
    KeyboardEventKey.ArrowUp,
    KeyboardEventKey.End,
    KeyboardEventKey.Enter,
    KeyboardEventKey.Escape,
    KeyboardEventKey.Home,
  ]);

  return <Textarea ref={ref} defaultValue="Trykk på enter og sjekk console" />;
};
        `,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseKeyboardEventExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseKeyboardEventExample /> };
