import React, { useState } from 'react';

import { Meta, StoryObj } from '@storybook/react';

import LanguageProvider, { useLanguage } from './language';
import Button from '../components/Button';
import Spacer from '../components/Spacer';
import Title from '../components/Title';

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

const getResources = (language: string): Resources => {
  switch (language) {
    case 'en-GB':
      return english;
    case 'nb-NO':
    default:
      return norwegian;
  }
};

interface ComponentWithTranslationsProps {
  resources?: Partial<Resources>;
}

type Languages = 'en-GB' | 'nb-NO';

const ComponentWithTranslations: React.FC<ComponentWithTranslationsProps> = ({ resources }) => {
  const { language } = useLanguage<Languages>('nb-NO');
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
  const [language, setLanguage] = useState<Languages>('nb-NO');

  return (
    <LanguageProvider<Languages> language={language}>
      <Button onClick={() => setLanguage(language === 'en-GB' ? 'nb-NO' : 'en-GB')} variant="outline">
        {language === 'en-GB' ? 'Bytt til bokmål' : 'Switch to English'}
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

const getResources = (language: string): Resources => {
  switch (language) {
    case 'en-GB':
      return english;
    case 'nb-NO':
    default:
      return norwegian;
  }
};

interface ComponentWithTranslationsProps {
  resources?: Partial<Resources>;
}

type Languages = 'en-GB' | 'nb-NO';

const ComponentWithTranslations: React.FC<ComponentWithTranslationsProps> = ({ resources }) => {
  const { language } = useLanguage<Languages>('nb-NO');
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
  const [language, setLanguage] = useState<Languages>('nb-NO');

  return (
    <LanguageProvider<Languages> language={language}>
      <Button onClick={() => setLanguage(language === 'en-GB' ? 'nb-NO' : 'en-GB')} variant="outline">
        {language === 'en-GB' ? 'Bytt til bokmål' : 'Switch to English'}
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
