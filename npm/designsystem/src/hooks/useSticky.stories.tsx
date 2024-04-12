import React, { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { useSticky } from './useSticky';
import Button from '../components/Button';
import { longLoremText, shortLoremText } from '../utils/loremtext';

const UseStickyExample: React.FC = () => {
  const contentRef = useRef<HTMLButtonElement>(null);
  const stickyRef = useRef<HTMLParagraphElement>(null);
  const { isOutsideWindow } = useSticky(contentRef, stickyRef);

  return (
    <>
      <p>{shortLoremText}</p>
      <p ref={stickyRef} style={{ position: isOutsideWindow ? 'sticky' : 'relative', top: 0, background: 'white' }}>
        {isOutsideWindow ? 'Sticky posisjon' : 'Vanlig posisjon'}
      </p>
      <Button ref={contentRef}>{'Knapp'}</Button>
      <p>{longLoremText}</p>
      <p>{longLoremText}</p>
    </>
  );
};

const meta = {
  title: '@helsenorge∕designsystem-react/Hooks/useSticky',
  component: UseStickyExample,
  parameters: {
    docs: {
      description: {
        component: 'Sett et element til sticky hvis et annet element er delvis utenfor vinduet.',
      },
    },
  },
} satisfies Meta<typeof UseStickyExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseStickyExample /> };
