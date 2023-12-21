import React from 'react';

import { render, screen } from '@testing-library/react';

import Badge from './Badge';

describe('Gitt at Badge skal vises', (): void => {
  describe('Når Badge har tekst', (): void => {
    test('Så vises teksten', (): void => {
      const { container } = render(<Badge>{123}</Badge>);

      const badgeNumber = screen.getByText('123');

      expect(badgeNumber).toBeVisible();
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<Badge testId="bare-tester">123</Badge>);

      const component = screen.getByTestId('bare-tester');

      expect(component).toBeVisible();
    });
  });
});
