import React from 'react';
import {render, screen} from '@testing-library/react';
import {Icon} from './Icon';
import AlarmClock from './AlarmClock';
import {execPath} from 'process';

/* Should test all icons */

describe('Gitt at icon skal vises', (): void => {
  describe('Når icon rendres', (): void => {
    test('Så vises riktig icon', (): void => {
      const {container} = render(<Icon svgIcon={AlarmClock} />);
      expect(container).toMatchSnapshot();
    });
  });

  describe('Når icon rendres', (): void => {
    test('Så settes størrelse riktig', (): void => {
      const iconSize = 38;

      render(<Icon testId={'test01'} size={iconSize} svgIcon={AlarmClock} />);

      const testIcon = screen.getByTestId('test01');
      expect(testIcon).toHaveStyle(`min-width: ${iconSize};`);
      expect(testIcon).toHaveStyle(`min-height: ${iconSize};`);
    });
  });
});
