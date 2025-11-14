import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, expect, vi } from 'vitest';

import Toast from './Toast';

describe('Gitt at Toast skal vises', (): void => {
  describe('Når Toast vises med kun tittel', (): void => {
    test('Så rendres Toast uten å feile', (): void => {
      render(<Toast title="toast title" />);
    });

    test('Så vises tittelen', (): void => {
      render(<Toast title="Min toast-tittel" />);
      expect(screen.getByText('Min toast-tittel')).toBeInTheDocument();
    });

    test('Så vises ikke meldingstekst når message ikke er satt', (): void => {
      render(<Toast title="Min toast-tittel" />);
      // prøver å finne noe som ser ut som description, men det skal ikke finnes
      expect(screen.queryByText('Dette er en meldingstekst')).not.toBeInTheDocument();
    });
  });

  describe('Når Toast vises med tittel og melding', (): void => {
    test('Så vises både tittel og melding', (): void => {
      render(<Toast title="Tittel" message="Dette er en meldingstekst" />);

      expect(screen.getByText('Tittel')).toBeInTheDocument();
      expect(screen.getByText('Dette er en meldingstekst')).toBeInTheDocument();
    });
  });

  describe('Når Toast får testId', (): void => {
    test('Så settes testId både på Toast og close-knappen', (): void => {
      render(<Toast title="Tittel" testId="min-toast" />);

      const toast = screen.getByTestId('min-toast');
      const closeButton = screen.getByTestId('min-toast-close');

      expect(toast).toBeInTheDocument();
      expect(closeButton).toBeInTheDocument();
    });
  });

  describe('Når bruker klikker på lukk-ikonet', (): void => {
    test('Så kalles onClose-callbacken', (): void => {
      const onClose = vi.fn();

      render(<Toast title="Tittel" testId="toast-med-close" onClose={onClose} />);

      const closeButton = screen.getByTestId('toast-med-close-close');

      fireEvent.click(closeButton);

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });
});
