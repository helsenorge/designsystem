import * as React from 'react';

import { render, screen } from '@testing-library/react';

import Button from '../Button';
import Stepper from '../Stepper';

import Step from '.';

describe('Gitt at Step rendres ', () => {
  describe('Når Step ikke har knapper', () => {
    it('Så vises bare innholdet', () => {
      render(
        <Step>
          <p>{'Hei'}</p>
        </Step>
      );

      const text = screen.getByText('Hei');
      expect(text).toBeVisible();
    });
  });
  describe('Når Step ikke har tilbakeknapp', () => {
    it('Så vises en progressbar, innhold i stegvisning og alle knapper er tilgjengelige', () => {
      render(
        <Step
          stepper={<Stepper ariaLabel={`Steg 1/4`} />}
          forwardButton={<Button>{'Neste'}</Button>}
          cancelButton={<Button>{'Avbryt'}</Button>}
        >
          <p>{'Hei'}</p>
        </Step>
      );
      const progressbar = screen.getByRole('progressbar', { name: 'Steg 1/4' });
      expect(progressbar).toBeVisible();

      const button = screen.getByRole('button', { name: 'Neste' });
      expect(button).toBeVisible();

      const cancelButton = screen.getByRole('button', { name: 'Avbryt' });
      expect(cancelButton).toBeVisible();
    });
  });

  describe('Når Step har tilbakeknapp', () => {
    it('Så vises en progressbar, innhold i stegvisning og alle knapper er tilgjengelige', () => {
      render(
        <Step
          stepper={<Stepper ariaLabel={`Steg 2/4`} />}
          backButton={<Button>{'Tilbake'}</Button>}
          forwardButton={<Button>{'Neste'}</Button>}
          cancelButton={<Button>{'Avbryt'}</Button>}
        >
          <p>{'Hei'}</p>
        </Step>
      );

      const progressbar = screen.getByRole('progressbar', { name: 'Steg 2/4' });
      expect(progressbar).toBeVisible();

      const text = screen.getByText('Hei');
      expect(text).toBeVisible();

      const backButton = screen.getByRole('button', { name: 'Tilbake' });
      expect(backButton).toBeVisible();

      const forwardButton = screen.getByRole('button', { name: 'Neste' });
      expect(forwardButton).toBeVisible();

      const cancelButton = screen.getByRole('button', { name: 'Avbryt' });
      expect(cancelButton).toBeVisible();
    });
  });

  describe('Når Step har ekstra knapp', () => {
    it('Så er knappen tilgjengelig', () => {
      render(
        <Step
          stepper={<Stepper ariaLabel={`Steg 1/4`} />}
          backButton={<Button>{'Tilbake'}</Button>}
          forwardButton={<Button>{'Neste'}</Button>}
          additionalButtons={[
            <Button key={0} variant="outline" concept="destructive">
              {'Fjern'}
            </Button>,
          ]}
          cancelButton={<Button>{'Avbryt'}</Button>}
        >
          <p>{'Hei'}</p>
        </Step>
      );

      const button = screen.getByRole('button', { name: 'Fjern' });
      expect(button).toBeVisible();
    });
  });
});
