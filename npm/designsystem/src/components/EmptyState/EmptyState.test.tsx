import { render, screen } from '@testing-library/react';

import EmptyState from './EmptyState';

describe('Gitt at EmptyState skal vises', (): void => {
  describe('Når EmptyState har tekst', (): void => {
    test('Så vises teksten som en overskrift', (): void => {
      render(<EmptyState>{'Ingenting'}</EmptyState>);

      const text = screen.getByRole('heading', { name: 'Ingenting', level: 2 });
      expect(text).toBeVisible();
    });
  });
});
