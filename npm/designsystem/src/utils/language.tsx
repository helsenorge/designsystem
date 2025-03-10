import React, { createContext, useContext, useMemo } from 'react';

export interface LanguageContextType<T extends string = string> {
  language: T;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Hent nåværende språk fra context
 * @param fallbackLanguage Språk som brukes som fallback dersom hooken brukes utenfor contexten
 * @returns LanguageContext
 */
export const useLanguage = <T extends string>(fallbackLanguage: T): LanguageContextType<T> => {
  const context = useContext(LanguageContext as unknown as React.Context<LanguageContextType<T>>);

  if (!context) {
    return { language: fallbackLanguage };
  }

  return context;
};

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
