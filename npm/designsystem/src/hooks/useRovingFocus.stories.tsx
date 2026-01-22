import React, { useState, useRef } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { useRovingFocus } from './useRovingFocus';

const UseRovingFocusExample: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const refArray = useRef<Array<React.RefObject<HTMLButtonElement>>>([
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
  ]);
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRightNavigation = false;

  useRovingFocus(setActiveIndex, refArray, containerRef, leftRightNavigation);

  return (
    <div ref={containerRef}>
      <div>{'Focused button:' + activeIndex}</div>
      {refArray.current.map((ref, index) => (
        <button key={index} ref={ref}>
          {'Button ' + index}
        </button>
      ))}
    </div>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useRovingFocus',
  component: UseRovingFocusExample,
  parameters: {
    docs: {
      description: {
        component: 'Setter keyboard navigation mønsteret "Roving focus" (også kalt "Roving tabindex") på elementene i listen.',
      },
      source: {
        language: 'tsx',
        code: `
import { useRovingFocus } from '@helsenorge/designsystem-react/hooks/useRovingFocus';

const UseRovingFocusExample: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const refArray = useRef<Array<React.RefObject<HTMLButtonElement>{'>>([
    useRef'}<HTMLButtonElement>{'(null),
    useRef'}<HTMLButtonElement>{'(null),
    useRef'}<HTMLButtonElement>{'(null),
  ]);
  const containerRef = useRef'}<HTMLDivElement>{'(null);
  const leftRightNavigation = false;

  useRovingFocus(setActiveIndex, refArray, containerRef, leftRightNavigation);

  return ('}<div ref={containerRef}>
      <div>{'Focused button:' + activeIndex}</div>
      {refArray.current.map((ref, index) => (
        <button key={index} ref={ref}>
          {'Button ' + index}
        </button>
      ))}
    </div>
  );
};
        `,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseRovingFocusExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseRovingFocusExample /> };

const WithLeftRightNavigationRender: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const buttonRefs = React.useMemo(() => Array.from({ length: 3 }, () => React.createRef<HTMLButtonElement>()), []);
  const refArray = React.useRef<React.RefObject<HTMLButtonElement>[]>(buttonRefs);
  const containerRef = React.useRef<HTMLDivElement>(null);

  useRovingFocus(setActiveIndex, refArray, containerRef, true);

  return (
    <div ref={containerRef}>
      <div>{'Focused button:' + activeIndex}</div>
      {refArray.current.map((ref, index) => (
        <button key={index} ref={ref}>
          {'Button ' + index}
        </button>
      ))}
    </div>
  );
};

export const WithLeftRightNavigation: Story = {
  render: () => <WithLeftRightNavigationRender />,
};
