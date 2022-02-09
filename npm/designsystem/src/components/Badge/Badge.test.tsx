import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from './Badge';

const badgeNumber = 123;

test('displays text', (): void => {
  const { container, getByText } = render(<Badge>{badgeNumber}</Badge>);
  expect(getByText(badgeNumber.toString())).toBeInTheDocument();
  expect(container).toMatchSnapshot();
});

/* 
  TODO: Waiting for issues regarding babel and types for this to be implemented
  Seems to be version issues because of v5 release.
*/
// test('has the right color', (): void => {
//   const {container} = render(<Badge color="blood200">{badgeNumber}</Badge>);
//   expect(container).toMatchSnapshot();
// });

describe('Gitt at Badge skal vises', (): void => {
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<Badge testId="bare-tester">123</Badge>);

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });
});
