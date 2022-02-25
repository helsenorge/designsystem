import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { Icon } from './Icon';
import Undo from './Undo';
import { IconSize } from '../../constants';

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

  describe('Når ariaLabel er satt', (): void => {
    test('Så brukes ariaLabel som aria-label i SVGen', (): void => {
      render(<Icon ariaLabel="Søkeknapp" svgIcon={Undo} />);

      const testIcon = screen.getByRole('img', { hidden: true });

      expect(testIcon).toHaveAttribute('aria-label', 'Søkeknapp');

      const title = within(testIcon).queryByTitle('Søkeknapp');
      expect(title).not.toBeInTheDocument();
    });
  });

  describe('Når ariaLabel og id er satt', (): void => {
    test('Så brukes ariaLabel som title i SVGen', (): void => {
      render(<Icon ariaLabel="Søkeknapp" id="search-button" svgIcon={Undo} />);

      const testIcon = screen.getByRole('img', { hidden: true });

      expect(testIcon).not.toHaveAttribute('aria-label');
      expect(testIcon).toHaveAttribute('aria-labelledby', 'title-search-button');

      const title = within(testIcon).getByTitle('Søkeknapp');
      expect(title).toBeInTheDocument();
      expect(title).toHaveAttribute('id', 'title-search-button');
    });
  });
});
