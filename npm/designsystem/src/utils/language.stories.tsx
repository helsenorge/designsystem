import type React from 'react';
import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import LanguageProvider from './language';
import Button from '../components/Button';
import Spacer from '../components/Spacer';
import Title from '../components/Title';
import { LanguageLocales } from '../constants';
import { useLanguage } from '../hooks/useLanguage';

// Eksempel på bruk av context:

interface Resources {
  title: string;
  description: string;
}

const norwegian: Resources = {
  title: 'Eksempeltekst på norsk',
  description: 'Beskrivelse',
};

const english: Resources = {
  title: 'Example text in English',
  description: 'Description',
};

const getResources = (language: LanguageLocales): Resources => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return english;
    case LanguageLocales.NORWEGIAN:
    default:
      return norwegian;
  }
};

interface ComponentWithTranslationsProps {
  resources?: Partial<Resources>;
}

const ComponentWithTranslations: React.FC<ComponentWithTranslationsProps> = ({ resources }) => {
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources: Resources = {
    ...defaultResources,
    ...resources,
  };

  return (
    <div>
      <Title>{mergedResources.title}</Title>
      <p>{mergedResources.description}</p>
    </div>
  );
};

// Eksempel på bruk av provider:

const LanguageProviderExample = (): React.JSX.Element => {
  const [language, setLanguage] = useState<LanguageLocales>(LanguageLocales.NORWEGIAN);

  return (
    <LanguageProvider<LanguageLocales> language={language}>
      <Button
        onClick={() => setLanguage(language === LanguageLocales.ENGLISH ? LanguageLocales.NORWEGIAN : LanguageLocales.ENGLISH)}
        variant="outline"
      >
        {language === LanguageLocales.ENGLISH ? 'Bytt til bokmål' : 'Switch to English'}
      </Button>
      <Spacer />
      <ComponentWithTranslations />
    </LanguageProvider>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Utilities/LanguageProvider',
  component: LanguageProvider,
  parameters: {
    docs: {
      description: {
        component: 'React Context for å sørge for at ulike komponenter bruker samme språk.',
      },
      source: {
        language: 'tsx',
        code: `
// Eksempel på bruk av context:

interface Resources {
  title: string;
  description: string;
}

const norwegian: Resources = {
  title: 'Eksempeltekst på norsk',
  description: 'Beskrivelse',
};

const english: Resources = {
  title: 'Example text in English',
  description: 'Description',
};

const getResources = (language: LanguageLocales): Resources => {
  switch (language) {
    case LanguageLocales.ENGLISH:
      return english;
    case LanguageLocales.NORWEGIAN:
    default:
      return norwegian;
  }
};

interface ComponentWithTranslationsProps {
  resources?: Partial<Resources>;
}

const ComponentWithTranslations: React.FC<ComponentWithTranslationsProps> = ({ resources }) => {
  const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
  const defaultResources = getResources(language);

  const mergedResources: Resources = {
    ...defaultResources,
    ...resources,
  };

  return (
    <div>
      <Title>{mergedResources.title}</Title>
      <p>{mergedResources.description}</p>
    </div>
  );
};

// Eksempel på bruk av provider:

const LanguageProviderExample = (): React.JSX.Element => {
  const [language, setLanguage] = useState<LanguageLocales>{'(LanguageLocales.NORWEGIAN);

  return ('}<LanguageProvider<LanguageLocales> language={language}>
      <Button
        onClick={() => setLanguage(language === LanguageLocales.ENGLISH ? LanguageLocales.NORWEGIAN : LanguageLocales.ENGLISH)}
        variant="outline"
      >
        {language === LanguageLocales.ENGLISH ? 'Bytt til bokmål' : 'Switch to English'}
      </Button>
      <Spacer />
      <ComponentWithTranslations />
    </LanguageProvider>
  );
};
        `,
      },
    },
    chromatic: { disableSnapshot: true },
  },
} satisfies Meta<typeof LanguageProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <LanguageProviderExample />,
};
