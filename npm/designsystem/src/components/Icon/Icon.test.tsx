import { render, screen, within } from '@testing-library/react';

import { Icon } from '../Icon';
import Undo from '../Icons/Undo';

describe('Gitt at icon skal vises', (): void => {
  describe('Når icon rendres', (): void => {
    test('Så settes størrelse riktig', (): void => {
      const iconSize = 38;

      render(<Icon testId={'test01'} size={iconSize} svgIcon={Undo} />);

      const testIcon = screen.getByTestId('test01');
      expect(testIcon).toHaveStyle(`min-width: ${iconSize}px;`);
      expect(testIcon).toHaveStyle(`min-height: ${iconSize}px;`);
    });
  });

  // https://css-tricks.com/accessible-svgs/#aa-example-1-standalone-icon-meaningful
  describe('Når ariaLabel er satt', (): void => {
    test('Så er ikonet synlig for skjermlesere og har tekst som kan leses', (): void => {
      render(<Icon ariaLabel="Angre" svgIcon={Undo} />);

      const testIcon = screen.getByRole('img', { name: 'Angre' });

      expect(testIcon).toBeVisible();
      expect(testIcon).toHaveAttribute('focusable', 'false');
      expect(testIcon).not.toHaveAttribute('aria-hidden');
      expect(testIcon).toHaveAttribute('aria-labelledby');

      const title = within(testIcon).getByTitle('Angre');
      expect(title).toBeInTheDocument();

      expect(testIcon.getAttribute('aria-labelledby')).toEqual(title.id);
    });
  });

  describe('Når ariaLabel ikke er satt', (): void => {
    test('Så er ikonet skjult for skjermlesere', (): void => {
      render(<Icon svgIcon={Undo} />);

      const testIcon = screen.getByRole('presentation', { hidden: true });

      expect(testIcon).toBeInTheDocument();
      expect(testIcon).toHaveAttribute('focusable', 'false');
      expect(testIcon).toHaveAttribute('aria-hidden', 'true');
    });
  });
});
