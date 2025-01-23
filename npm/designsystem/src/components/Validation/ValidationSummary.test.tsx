import { render, screen, within } from '@testing-library/react';

import ValidationSummary from './ValidationSummary';

describe('Gitt at ValidationSummary skal vises', () => {
  describe('Når ValidationSummary ikke har noen props', () => {
    test('Så vises en tom status', () => {
      render(<ValidationSummary />);

      const status = screen.getByRole('status');

      expect(status).not.toHaveAccessibleName();
      expect(status).toBeEmptyDOMElement();
    });
  });

  describe('Når ValidationSummary har title, men ikke errors', () => {
    test('Så vises en tom status', () => {
      render(<ValidationSummary errorTitle="Feil" />);

      const status = screen.getByRole('status');

      expect(status).not.toHaveAccessibleName();
      expect(status).toBeEmptyDOMElement();
    });
  });

  describe('Når ValidationSummary har title og errors', () => {
    test('Så vises en tom status', () => {
      render(<ValidationSummary errorTitle="Feil" errors={{ feil1: { message: 'Feil 1' } }} />);

      const status = screen.getByRole('status', { name: 'Feil' });
      within(status).getByText('Feil 1');
    });
  });

  describe('Når ValidationSummary har children', () => {
    test('Så vises teksten', () => {
      render(<ValidationSummary>{'Feilmelding'}</ValidationSummary>);

      const status = screen.getByRole('status');

      within(status).getByText('Feilmelding');
    });
  });
});
