import React, { useRef } from 'react';

import { StoryObj, Meta } from '@storybook/react';

import { useIntersectionObserver } from './useIntersectionObserver';
import Button from '../components/Button';
import { longLoremText } from '../utils/loremtext';

const UseIntersectionObserverExample: React.FC = () => {
  const ref = useRef<HTMLButtonElement>(null);
  useIntersectionObserver(ref, entries => console.log(entries));

  return (
    <>
      <p>{longLoremText}</p>
      <p>{longLoremText}</p>
      <Button ref={ref}>Sjekk console</Button>
      <p>{longLoremText}</p>
      <p>{longLoremText}</p>
    </>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useIntersectionObserver',
  component: UseIntersectionObserverExample,
  parameters: {
    docs: {
      description: {
        component: 'Sjekk om et HTML-element er synlig i vinduet, eller ikke.',
      },
    },
  },
} satisfies Meta<typeof UseIntersectionObserverExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseIntersectionObserverExample /> };
