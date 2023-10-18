import React from 'react';

import { render, screen, within } from '@testing-library/react';

import { IconSize } from '../../constants';
import { Icon } from '../Icon';
import Undo from '../Icons/Undo';

/* Should test all icons */

describe('Gitt at icon skal vises', (): void => {
  describe('Når icon rendres med default størrelse', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon svgIcon={Undo} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med default størrelse og isHovered', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon svgIcon={Undo} isHovered />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med mindre enn XXSmall størrelse', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon size={IconSize.XXSmall - 1} svgIcon={Undo} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med mindre enn XXSmall størrelse og isHovered', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon size={IconSize.XXSmall - 1} svgIcon={Undo} isHovered />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med XXSmall størrelse', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon size={IconSize.XXSmall} svgIcon={Undo} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med XXSmall størrelse og isHovered', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon size={IconSize.XXSmall} svgIcon={Undo} isHovered />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med mindre enn XSmall størrelse', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon size={IconSize.XSmall - 1} svgIcon={Undo} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med mindre enn XSmall størrelse og isHovered', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon size={IconSize.XSmall - 1} svgIcon={Undo} isHovered />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med XSmall størrelse', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon size={IconSize.XSmall} svgIcon={Undo} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med XSmall størrelse og isHovered', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon size={IconSize.XSmall} svgIcon={Undo} isHovered />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med Small størrelse', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon size={IconSize.Small} svgIcon={Undo} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med Small størrelse og isHovered', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon size={IconSize.Small} svgIcon={Undo} isHovered />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med Medium størrelse', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon size={IconSize.Medium} svgIcon={Undo} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med Medium størrelse og isHovered', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon size={IconSize.Medium} svgIcon={Undo} isHovered />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med Large størrelse', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon size={IconSize.Large} svgIcon={Undo} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med Large størrelse og isHovered', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon size={IconSize.Large} svgIcon={Undo} isHovered />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med XLarge størrelse', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon size={IconSize.XLarge} svgIcon={Undo} />);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når icon rendres med XLarge størrelse og isHovered', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon size={IconSize.XLarge} svgIcon={Undo} isHovered />);
      expect(container).toMatchSnapshot();
    });
  });

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
