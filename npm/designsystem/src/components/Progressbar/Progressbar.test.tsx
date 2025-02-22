import { render, screen } from '@testing-library/react';

import Progressbar, { ProgressbarSize } from './Progressbar';

describe('Gitt at Progressbar skal vises', (): void => {
  describe('Når default props brukes', () => {
    test('Så vises Progressbar', (): void => {
      render(<Progressbar value={10} />);
      expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    test('Så viser den riktig progresjon', (): void => {
      render(<Progressbar value={50} />);
      const progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '50');

      const progressText = screen.queryAllByText('50%');
      expect(progressText.length).toBe(2);
    });

    test('Så oppdaterer den når value endrer seg', () => {
      const { rerender } = render(<Progressbar value={50} />);
      const progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '50');

      rerender(<Progressbar value={75} />);
      expect(progressbar).toHaveAttribute('aria-valuenow', '75');
    });

    test('Så har den en minimumsverdi på 0', () => {
      render(<Progressbar value={-10} />);
      const progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '0');

      const progress = screen.getAllByText('0%');
      expect(progress.length).toBe(2);
    });

    test('Så har den en maksimumsverdi på 100', () => {
      render(<Progressbar value={110} />);
      const progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '100');
    });

    test('Så har den en maksimumsverdi på 100', () => {
      render(<Progressbar value={110} />);
      const progressbar = screen.getByRole('progressbar');
      expect(progressbar).toHaveAttribute('aria-valuenow', '100');
    });
  });

  describe('Når size er small', () => {
    test('Så finnes bare sr-only ikke tekst i ProgressBar', () => {
      render(<Progressbar value={10} size={ProgressbarSize.small} />);
      const progress = screen.queryByText('10%');
      expect(progress).toHaveClass('progressbar__sr-only-text');
    });
  });

  describe('Når size er medium', () => {
    test('Så finnes bare sr-only teksten i ProgressBar', () => {
      render(<Progressbar value={10} size={ProgressbarSize.medium} />);
      const progress = screen.queryByText('10%');
      expect(progress).toHaveClass('progressbar__sr-only-text');
    });
  });
});
