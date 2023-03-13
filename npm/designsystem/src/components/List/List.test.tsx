import React from 'react';

import { render, screen } from '@testing-library/react';

import List from './List';

test('displays a list of 4 elements', (): void => {
  const { container, getAllByRole } = render(
    <List>
      <h1>Tjeneste 1</h1>
      <h1>Tjeneste 2</h1>
      <h1>Tjeneste 3</h1>
      <h1>Tjeneste 4</h1>
    </List>
  );
  expect(getAllByRole('heading').length).toEqual(4);
  expect(container).toMatchSnapshot();
});

describe('Gitt at List skal vises', (): void => {
  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(
        <List testId="bare-tester">
          <h1>Tjeneste 1</h1>
          <h1>Tjeneste 2</h1>
          <h1>Tjeneste 3</h1>
          <h1>Tjeneste 4</h1>
        </List>
      );

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });
});
