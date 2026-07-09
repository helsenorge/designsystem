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

  describe('Når expanded prop er satt', (): void => {
    test('Så er InfoTeaser åpen ved første visning', (): void => {
      render(
        <InfoTeaser title="Tittel" expanded>
          {'Tekst'}
        </InfoTeaser>
      );

      const infoteaserButton = screen.getByRole('button');
      expect(infoteaserButton).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByText('Tekst')).toHaveAttribute('aria-hidden', 'false');
    });

    test('Så er InfoTeaser lukket når expanded er false', (): void => {
      render(
        <InfoTeaser title="Tittel" expanded={false}>
          {'Tekst'}
        </InfoTeaser>
      );

      const infoteaserButton = screen.getByRole('button');
      expect(infoteaserButton).toHaveAttribute('aria-expanded', 'false');
      expect(screen.getByText('Tekst')).toHaveAttribute('aria-hidden', 'true');
    });

    test('Så oppdateres tilstanden når expanded prop endres', (): void => {
      const { rerender } = render(
        <InfoTeaser title="Tittel" expanded={false}>
          {'Tekst'}
        </InfoTeaser>
      );

      expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'false');

      rerender(
        <InfoTeaser title="Tittel" expanded>
          {'Tekst'}
        </InfoTeaser>
      );

      expect(screen.getByRole('button')).toHaveAttribute('aria-expanded', 'true');
    });

    test('Så kan InfoTeaser fortsatt lukkes manuelt selv om expanded er true', async () => {
      render(
        <InfoTeaser title="Tittel" expanded>
          {'Tekst'}
        </InfoTeaser>
      );

      const infoteaserButton = screen.getByRole('button');
      expect(infoteaserButton).toHaveAttribute('aria-expanded', 'true');

      await userEvent.click(infoteaserButton);

      expect(infoteaserButton).toHaveAttribute('aria-expanded', 'false');
      expect(screen.getByText('Tekst')).toHaveAttribute('aria-hidden', 'true');
    });
  });

  describe('Når onExpand er satt', (): void => {
    test('Så kalles onExpand med true når InfoTeaser åpnes', async () => {
      const onExpand = vi.fn();
      render(
        <InfoTeaser title="Tittel" onExpand={onExpand}>
          {'Tekst'}
        </InfoTeaser>
      );

      await userEvent.click(screen.getByRole('button'));

      expect(onExpand).toHaveBeenCalledWith(true);
    });

    test('Så kalles onExpand med false når InfoTeaser lukkes', async () => {
      const onExpand = vi.fn();
      render(
        <InfoTeaser title="Tittel" expanded onExpand={onExpand}>
          {'Tekst'}
        </InfoTeaser>
      );

      await userEvent.click(screen.getByRole('button'));

      expect(onExpand).toHaveBeenCalledWith(false);
    });
  });
});
