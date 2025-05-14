import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import InfoTeaser from './InfoTeaser';

describe('Gitt at InfoTeaser skal vises', (): void => {
  describe('Når InfoTeaser vises', (): void => {
    test('Så vises InfoTeaser', (): void => {
      render(<InfoTeaser title="Tittel">{'Tekst'}</InfoTeaser>);
      const infoteaserElement = screen.getByText('Tekst');
      expect(infoteaserElement).toBeInTheDocument();
    });

    test('Så vises InfoTeaser med gitt html tag', (): void => {
      render(
        <InfoTeaser title="Tittel" htmlMarkup="section" testId="infoteaser">
          {'Tekst'}
        </InfoTeaser>
      );
      const infoteaserElement = screen.getByTestId('infoteaser');
      expect(infoteaserElement.tagName.toLowerCase()).toBe('section');
    });
  });

  describe('Når InfoTeaser er lukket', (): void => {
    test('Så er teksten skjult for skjermlesere', (): void => {
      render(<InfoTeaser title="Tittel">{'Tekst'}</InfoTeaser>);
      const infoteaserText = screen.getByText('Tekst');
      expect(infoteaserText).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Når InfoTeaser er åpen', (): void => {
    test('Så er teksten tilgjengelig for skjermlesere', async () => {
      render(<InfoTeaser title="Tittel">{'Tekst'}</InfoTeaser>);

      const infoteaserButton = screen.getByRole('button');
      await userEvent.click(infoteaserButton);

      const infoteaserText = screen.getByText('Tekst');
      expect(infoteaserText).toHaveAttribute('aria-hidden', 'false');
    });
  });
});
