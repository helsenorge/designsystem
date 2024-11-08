import React, { useState, useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useRovingFocus } from './useRovingFocus';

const UseRovingFocusExample: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const refArray = useRef<Array<React.RefObject<HTMLButtonElement>>>([
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
    useRef<HTMLButtonElement>(null),
  ]);
  const containerRef = useRef<HTMLDivElement>(null);

  useRovingFocus(setActiveIndex, refArray, containerRef);

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
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseRovingFocusExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseRovingFocusExample /> };

export const WithLeftRightNavigation: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const refArray = useRef<Array<React.RefObject<HTMLButtonElement>>>([
      useRef<HTMLButtonElement>(null),
      useRef<HTMLButtonElement>(null),
      useRef<HTMLButtonElement>(null),
    ]);
    const containerRef = useRef<HTMLDivElement>(null);

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
  },
};
