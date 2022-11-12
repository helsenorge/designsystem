import React, { useRef } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { useKeyboardEvent } from './useKeyboardEvent';
import GridExample from '../components/GridExample';
import Textarea from '../components/Textarea';
import { KeyboardEventKey } from '../constants';

const UseKeyboardEventExample: React.FC = (args: any) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  useKeyboardEvent(
    'keydown',
    ref,
    [
      KeyboardEventKey.ArrowDown,
      KeyboardEventKey.ArrowUp,
      KeyboardEventKey.End,
      KeyboardEventKey.Enter,
      KeyboardEventKey.Escape,
      KeyboardEventKey.Home,
    ],
    e => console.log(`Du trykker på ${e.key}`)
  );

  return (
    <GridExample>
      <Textarea ref={ref} defaultValue="Trykk på enter og sjekk console" />
    </GridExample>
  );
};

export default {
  title: 'Hooks/useKeyboardEvent',
  component: UseKeyboardEventExample,
  parameters: {
    docs: {
      description: {
        component: 'Lytt på keyboard-events og kjør en callback.',
      },
    },
  },
} as ComponentMeta<typeof UseKeyboardEventExample>;

export const Default: ComponentStory<typeof UseKeyboardEventExample> = () => <UseKeyboardEventExample />;
