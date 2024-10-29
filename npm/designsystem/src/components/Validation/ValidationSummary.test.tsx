import { render, screen, within } from '@testing-library/react';

import ValidationSummary from './ValidationSummary';

describe('Gitt at ValidationSummary skal vises', () => {
  describe('Når ValidationSummary ikke har noen props', () => {
    test('Så vises en tom alert', () => {
      render(<ValidationSummary />);

      const alert = screen.getByRole('alert');

      expect(alert).not.toHaveAccessibleName();
      expect(alert).toBeEmptyDOMElement();
    });
  });

  describe('Når ValidationSummary har title, men ikke errors', () => {
    test('Så vises en tom alert', () => {
      render(<ValidationSummary errorTitle="Feil" />);

      const alert = screen.getByRole('alert');

      expect(alert).not.toHaveAccessibleName();
      expect(alert).toBeEmptyDOMElement();
    });
  });

  describe('Når ValidationSummary har title og errors', () => {
    test('Så vises en tom alert', () => {
      render(<ValidationSummary errorTitle="Feil" errors={{ feil1: { message: 'Feil 1' } }} />);

      const alert = screen.getByRole('alert', { name: 'Feil' });
      within(alert).getByText('Feil 1');
    });
  });

  describe('Når ValidationSummary har children', () => {
    test('Så vises teksten', () => {
      render(<ValidationSummary>{'Feilmelding'}</ValidationSummary>);

      const alert = screen.getByRole('alert');

      within(alert).getByText('Feilmelding');
    });
  });
});
