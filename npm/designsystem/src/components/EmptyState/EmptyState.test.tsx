import { render, screen } from '@testing-library/react';

import EmptyState from './EmptyState';

describe('Gitt at EmptyState skal vises', (): void => {
  describe('Når EmptyState har tekst', (): void => {
    test('Så vises teksten som en overskrift', (): void => {
      render(<EmptyState title={'Ingenting'} />);

      const text = screen.getByRole('heading', { name: 'Ingenting', level: 2 });
      expect(text).toBeVisible();
    });
  });
  describe('Når EmptyState har tillegstekst', (): void => {
    test('Så vises teksten i tillegg til tittelen', (): void => {
      render(<EmptyState title={'Tittel'} additionalText={'Ekstra tekst'} />);

      const text = screen.getByRole('heading', { name: 'Tittel', level: 2 });
      const additionalText = screen.getByText('Ekstra tekst');
      expect(text).toBeVisible();
      expect(additionalText).toBeVisible();
    });
  });
});
