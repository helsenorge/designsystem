import React from 'react';

import { render, screen } from '@testing-library/react';

import Badge from './Badge';

describe('Gitt at Badge skal vises', (): void => {
  describe('Når Badge har tekst', (): void => {
    test('Så vises teksten', (): void => {
      render(<Badge>{123}</Badge>);

      const badgeNumber = screen.getByText('123');
      expect(badgeNumber).toBeVisible();
    });
  });
  describe('Når Badge er av type notification', (): void => {
    test('Så vises ikke teksten', (): void => {
      render(
        <Badge type="notification" notificationVariant="info">
          {123}
        </Badge>
      );

      const text = screen.queryByText('123');
      expect(text).not.toBeInTheDocument();
    });
  });
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<Badge testId="bare-tester">123</Badge>);

      const component = screen.getByTestId('bare-tester');

      expect(component).toBeVisible();
    });
  });
  describe('Når Badge rendres med ulike farger', (): void => {
    test('Så rendres innholdet riktig', (): void => {
      render(
        <div>
          <Badge testId={'test01'} color="blueberry">
            Badge
          </Badge>
          <Badge testId={'test02'} color="cherry">
            Badge
          </Badge>
          <Badge testId={'test03'} color="neutral">
            Badge
          </Badge>
        </div>
      );

      const testFill = screen.getByTestId('test01');
      expect(testFill.className).toBe('badge badge--blueberry');

      const testOutline = screen.getByTestId('test02');
      expect(testOutline.className).toBe('badge badge--cherry');

      const testBorderless = screen.getByTestId('test03');
      expect(testBorderless.className).toBe('badge badge--neutral');
    });
  });
});
