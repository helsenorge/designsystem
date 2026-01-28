import { render, screen } from '@testing-library/react';

import { useLanguage } from '../../hooks/useLanguage';
import LanguageProvider from '../language';

describe('Gitt at useLanguage kalles', () => {
  describe('Når hooken kalles utenfor context', () => {
    test('Så returneres fallback-språk', (): void => {
      const UseLanguageTest: React.FC = () => {
        const { language } = useLanguage('en-GB');

        return language;
      };

      render(<UseLanguageTest />);

      const language = screen.getByText('en-GB');

      expect(language).toBeVisible();
    });
  });
  describe('Når hooken kalles innenfor context', () => {
    test('Så returneres språk fra context', (): void => {
      const UseLanguageTest: React.FC = () => {
        const { language } = useLanguage('en-GB');

        return language;
      };

      render(
        <LanguageProvider language={'nb-NO'}>
          <UseLanguageTest />
        </LanguageProvider>
      );

      const language = screen.getByText('nb-NO');

      expect(language).toBeVisible();
    });
  });
});
