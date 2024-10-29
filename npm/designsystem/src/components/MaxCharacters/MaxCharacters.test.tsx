import { render, screen } from '@testing-library/react';

import MaxCharacters from './MaxCharacters';

describe('Gitt at MaxCharacters skal vises', (): void => {
  describe('Når antall tegn er under grensen', (): void => {
    test('Så vises en teller', (): void => {
      render(<MaxCharacters length={95} maxCharacters={100} maxText={'characters'} />);

      const text = screen.getByText('95/100 characters');
      expect(text).toBeVisible();
      expect(text).toHaveAttribute('aria-atomic', 'true');
      expect(text).toHaveAttribute('aria-live', 'off');
    });
  });
  describe('Når antall tegn er over 95%', (): void => {
    test('Så vises en teller', (): void => {
      render(<MaxCharacters length={96} maxCharacters={100} maxText={'characters'} />);

      const text = screen.getByText('96/100 characters');
      expect(text).toBeVisible();
      expect(text).toHaveAttribute('aria-atomic', 'true');
      expect(text).toHaveAttribute('aria-live', 'polite');
    });
  });
  describe('Når antall tegn er over 100%', (): void => {
    test('Så vises en teller', (): void => {
      render(<MaxCharacters length={101} maxCharacters={100} maxText={'characters'} />);

      const text = screen.getByText('101/100 characters');
      expect(text).toBeVisible();
      expect(text).toHaveAttribute('aria-atomic', 'true');
      expect(text).toHaveAttribute('aria-live', 'polite');
    });
  });
});
