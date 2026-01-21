import type React from 'react';
import { useMemo } from 'react';

import { LanguageContext } from '../hooks/useLanguage';

export interface LanguageContextType<T extends string = string> {
  language: T;
}

interface LanguageProviderProps<T extends string> {
  children: React.ReactNode;
  language: T;
}

const LanguageProvider = <T extends string>({ children, language }: LanguageProviderProps<T>): React.JSX.Element => {
  const value = useMemo<LanguageContextType<T>>(
    () => ({
      language,
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
