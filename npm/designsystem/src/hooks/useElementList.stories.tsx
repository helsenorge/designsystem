import type React from 'react';
import { useState, useRef } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { useElementList } from './useElementList';
import Button from '../components/Button';
import Spacer from '../components/Spacer';

const UseElementListExample: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasClass, setHasClass] = useState(true);
  const elements = useElementList(ref, '.custom-button');

  const toggleClass = (): void => {
    setHasClass(!hasClass);
  };

  return (
    <>
      <p>{'Knapper med klassen "custom-button":'}</p>
      <ul>
        {elements &&
          [...elements].map((element, index) => (
            <li key={index}>
              {element.tagName} {element.textContent}
            </li>
          ))}
      </ul>
      <Button onClick={toggleClass}>{'Slå av/på klassen "custom-button" på knapp nr 1'}</Button>
      <Spacer />
      <div ref={ref}>
        <div>
          <Button className={hasClass ? 'custom-button' : ''}>{'Knapp 1'}</Button>
        </div>
        <Spacer />
        <div>
          <Button className="custom-button">{'Knapp 2'}</Button>
        </div>
        <Spacer />
        <div>
          <Button className="custom-button">{'Knapp 3'}</Button>
        </div>
      </div>
    </>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useElementList',
  component: UseElementListExample,
  parameters: {
    docs: {
      description: {
        component: 'Hent ut en liste med HTML-elementer. Bruker MutationObserver-APIet.',
      },
      source: {
        language: 'tsx',
        code: `
import { useElementList } from '@helsenorge/designsystem-react/hooks/useElementList';
import Button from '@helsenorge/designsystem-react/components/Button';
import Spacer from '@helsenorge/designsystem-react/components/Spacer';

const UseElementListExample: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [hasClass, setHasClass] = useState(true);
  const elements = useElementList(ref, '.custom-button');

  const toggleClass = (): void => {
    setHasClass(!hasClass);
  };

  return (
    <>
      <p>{'Knapper med klassen "custom-button":'}</p>
      <ul>
        {elements &&
          [...elements].map((element, index) => (
            <li key={index}>
              {element.tagName} {element.textContent}
            </li>
          ))}
      </ul>
      <Button onClick={toggleClass}>{'Slå av/på klassen "custom-button" på knapp nr 1'}</Button>
      <Spacer />
      <div ref={ref}>
        <div>
          <Button className={hasClass ? 'custom-button' : ''}>{'Knapp 1'}</Button>
        </div>
        <Spacer />
        <div>
          <Button className="custom-button">{'Knapp 2'}</Button>
        </div>
        <Spacer />
        <div>
          <Button className="custom-button">{'Knapp 3'}</Button>
        </div>
      </div>
    </>
  );
};
        `,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseElementListExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseElementListExample /> };
