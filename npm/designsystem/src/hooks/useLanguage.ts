import { createContext, useContext } from 'react';

import type { LanguageContextType } from '../utils/language';

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
