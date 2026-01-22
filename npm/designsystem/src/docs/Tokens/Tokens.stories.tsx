import type React from 'react';
import { useEffect, useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { Meta, StoryObj } from '@storybook/react-vite';

import TokensExample from './TokensExample';

const meta = {
  title: '@helsenorge/designsystem-react/scss/Tokens',
  component: TokensExample,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={TokensExample} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/badge/bruk-TCKiSYLz" />
      ),
      description: {
        component: '',
      },
    },
  },
  args: {
    children: 'Tekst',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['blueberry', 'cherry', 'neutral'],
    },
    type: {
      control: 'select',
      options: ['string', 'notification'],
    },
    notificationVariant: {
      control: 'select',
      options: ['success', 'warn', 'error', 'info'],
    },
  },
} satisfies Meta<typeof TokensExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [vars, setVars] = useState<Record<string, string>>({});
    const [sortedKeysGlobal, setSortedKeysGlobal] = useState({});

    useEffect(() => {
      const styles = getComputedStyle(document.documentElement);
      const rootVars: Record<string, string> = {};
      for (let i = 0; i < styles.length; i++) {
        const propName = styles[i];
        if (propName.startsWith('--')) {
          if (!propName.startsWith('--core-space')) rootVars[propName] = styles.getPropertyValue(propName).trim();
        }
      }
      const sortedKeys = Object.keys(rootVars).sort();
      setVars(rootVars);
      setSortedKeysGlobal(sortedKeys);
    }, []);

    return (
      <div>
        {Object.entries(sortedKeysGlobal).map(([key, name]) => (
          <TokensExample key={key} colorName={name as string} color={vars[name as string]} />
        ))}
      </div>
    );
  },
};
