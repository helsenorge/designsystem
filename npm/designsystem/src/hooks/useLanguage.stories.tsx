import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { useLanguage } from './useLanguage';
import Button from '../components/Button';
import FormFieldTag from '../components/FormFieldTag';
import { LanguageLocales } from '../constants';
import LanguageProvider from '../utils/language';

const LanguageConsumer: React.FC = () => {
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  return (
    <>
      <span>{`Valgt språk: ${language}`}</span>
      <br />
      {/* Demonstrate a component reacting to current language */}
      <FormFieldTag level="required-field" />
    </>
  );
};

const UseLanguageExample: React.FC = () => {
  const [language, setLanguage] = useState<LanguageLocales>(LanguageLocales.ENGLISH);

  return (
    <LanguageProvider<LanguageLocales> language={language}>
      <Button onClick={() => setLanguage(LanguageLocales.NORWEGIAN)}>{'Bokmål'}</Button>
      <Button onClick={() => setLanguage(LanguageLocales.NORWEGIAN_NYNORSK)}>{'Nynorsk'}</Button>
      <Button onClick={() => setLanguage(LanguageLocales.ENGLISH)}>{'English'}</Button>
      <Button onClick={() => setLanguage(LanguageLocales.SAMI_NORTHERN)}>{'Nordsamisk'}</Button>
      <br />
      <LanguageConsumer />
    </LanguageProvider>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Hooks/useLanguage',
  component: UseLanguageExample,
  parameters: {
    docs: {
      description: {
        component:
          'Bruk useLanguage til å lese valgt språk fra LanguageProvider. Komponenten under viser valgt språk og en tag påvirket av språket.',
      },
      source: {
        language: 'tsx',
        code: `
import { useState } from 'react';
import { LanguageLocales } from '@helsenorge/designsystem-react/constants';
import LanguageProvider from '@helsenorge/designsystem-react/utils/language';
import { useLanguage } from '@helsenorge/designsystem-react/hooks/useLanguage';

const LanguageConsumer: React.FC = () => {
  const { language } = useLanguage<LanguageLocales>{'(LanguageLocales.NORWEGIAN);
  return'}<span>{\`Valgt språk: \${language}\`}</span>;
};

const UseLanguageExample: React.FC = () => {
  const [language, setLanguage] = useState<LanguageLocales>{'(LanguageLocales.ENGLISH);
  return ('}<LanguageProvider<LanguageLocales> language={language}>
      <button onClick={() => setLanguage(LanguageLocales.NORWEGIAN)}>Bokmål</button>
      <button onClick={() => setLanguage(LanguageLocales.NORWEGIAN_NYNORSK)}>Nynorsk</button>
      <button onClick={() => setLanguage(LanguageLocales.ENGLISH)}>English</button>
      <button onClick={() => setLanguage(LanguageLocales.SAMI_NORTHERN)}>Nordsamisk</button>
      <LanguageConsumer />
    </LanguageProvider>
  );
};
        `,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof UseLanguageExample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = { render: () => <UseLanguageExample /> };
