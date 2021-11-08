import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { Icon } from './Icon';
import AlarmClock from './AlarmClock';
import { execPath } from 'process';
import { isExportDeclaration } from 'typescript';

/* Should test all icons */

describe('Gitt at icon skal vises', (): void => {
  describe('Når icon rendres', (): void => {
    test('Så vises riktig icon', (): void => {
      const { container } = render(<Icon svgIcon={AlarmClock} />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Når icon rendres', (): void => {
    test('Så settes størrelse riktig', (): void => {
      const iconSize = 38;

      render(<Icon testId={'test01'} size={iconSize} svgIcon={AlarmClock} />);

      const testIcon = screen.getByTestId('test01');
      expect(testIcon).toHaveStyle(`min-width: ${iconSize}px;`);
      expect(testIcon).toHaveStyle(`min-height: ${iconSize}px;`);
    });
  });

  describe('Når ariaLabel er satt', (): void => {
    test('Så brukes ariaLabel som aria-label i SVGen', (): void => {
      render(<Icon ariaLabel="Søkeknapp" svgIcon={AlarmClock} />);

      const testIcon = screen.getByRole('img', { hidden: true });

      expect(testIcon).toHaveAttribute('aria-label', 'Søkeknapp');

      const title = within(testIcon).queryByTitle('Søkeknapp');
      expect(title).not.toBeInTheDocument();
    });
  });

  describe('Når ariaLabel og id er satt', (): void => {
    test('Så brukes ariaLabel som title i SVGen', (): void => {
      render(<Icon ariaLabel="Søkeknapp" id="search-button" svgIcon={AlarmClock} />);

      const testIcon = screen.getByRole('img', { hidden: true });

      expect(testIcon).not.toHaveAttribute('aria-label');
      expect(testIcon).toHaveAttribute('aria-labelledby', 'title-search-button');

      const title = within(testIcon).getByTitle('Søkeknapp');
      expect(title).toBeInTheDocument();
      expect(title).toHaveAttribute('id', 'title-search-button');
    });
  });
});
