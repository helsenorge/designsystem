import { render, screen } from '@testing-library/react';

import LoaderSpinner from './LoaderSpinner';

const testResources = {
  loadingText: 'TEST_LOADING',
};

describe('Gitt at en LoaderSpinner skal vises', (): void => {
  describe('Når LoaderSpinner rendres', (): void => {
    test('Så vises en loader med rolle progressbar og loading-tekst', (): void => {
      render(<LoaderSpinner testId="loader-spinner" resources={testResources} />);

      const loader = screen.getByTestId('loader-spinner');
      expect(loader).toBeVisible();
      expect(loader).toHaveAttribute('role', 'progressbar');
      expect(screen.getByText(testResources.loadingText)).toBeVisible();
    });
  });

  describe('Når resources-prop overstyrer loadingText', (): void => {
    test('Så vises den overstyrte teksten', (): void => {
      render(<LoaderSpinner resources={{ loadingText: 'Egen loading tekst' }} />);

      expect(screen.getByText('Egen loading tekst')).toBeVisible();
    });
  });
});
