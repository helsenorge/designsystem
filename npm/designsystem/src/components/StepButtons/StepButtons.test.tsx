import { render, screen } from '@testing-library/react';

import StepButtons from './StepButtons';
import Button from '../Button';

describe('Gitt at StepButtons skal vises', (): void => {
  describe('Når StepButtons ikke har knapper', () => {
    it('Så vises ingen knapper', () => {
      render(<StepButtons />);

      const text = screen.queryByRole('button');
      expect(text).not.toBeInTheDocument();
    });
  });
  describe('Når StepButtons har testId', () => {
    it('Så kan komponenten hentes med testId', () => {
      render(<StepButtons testId="step-buttons" forwardButton={<Button>{'Neste'}</Button>} />);

      const text = screen.getByTestId('step-buttons');
      expect(text).toBeVisible();
    });
  });
  describe('Når Step ikke har tilbakeknapp', () => {
    it('Så vises en progressbar, innhold i stegvisning og alle knapper er tilgjengelige', () => {
      render(<StepButtons forwardButton={<Button>{'Neste'}</Button>} cancelButton={<Button>{'Avbryt'}</Button>} />);

      const button = screen.getByRole('button', { name: 'Neste' });
      expect(button).toBeVisible();

      const cancelButton = screen.getByRole('button', { name: 'Avbryt' });
      expect(cancelButton).toBeVisible();
    });
  });

  describe('Når StepButtons har tilbakeknapp', () => {
    it('Så vises en progressbar, innhold i stegvisning og alle knapper er tilgjengelige', () => {
      render(
        <StepButtons
          backButton={<Button>{'Tilbake'}</Button>}
          forwardButton={<Button>{'Neste'}</Button>}
          cancelButton={<Button>{'Avbryt'}</Button>}
        />
      );

      const backButton = screen.getByRole('button', { name: 'Tilbake' });
      expect(backButton).toBeVisible();

      const forwardButton = screen.getByRole('button', { name: 'Neste' });
      expect(forwardButton).toBeVisible();

      const cancelButton = screen.getByRole('button', { name: 'Avbryt' });
      expect(cancelButton).toBeVisible();
    });
  });

  describe('Når StepButtons har ekstra knapp', () => {
    it('Så er knappen tilgjengelig', () => {
      render(
        <StepButtons
          backButton={<Button>{'Tilbake'}</Button>}
          forwardButton={<Button>{'Neste'}</Button>}
          additionalButtons={[
            <Button key={0} variant="outline" concept="destructive">
              {'Fjern'}
            </Button>,
          ]}
          cancelButton={<Button>{'Avbryt'}</Button>}
        />
      );

      const button = screen.getByRole('button', { name: 'Fjern' });
      expect(button).toBeVisible();
    });
  });
});
