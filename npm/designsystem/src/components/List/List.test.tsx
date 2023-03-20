import React from 'react';

import { render, screen } from '@testing-library/react';

import List from './List';

describe('Gitt at List skal vises', (): void => {
  describe('Når komponenten har fire elementer', (): void => {
    it('Så vises fire liste-elementer', (): void => {
      const { container } = render(
        <List>
          <List.Item>{'Tjeneste 1'}</List.Item>
          <List.Item>{'Tjeneste 2'}</List.Item>
          <List.Item>{'Tjeneste 3'}</List.Item>
          <List.Item>{'Tjeneste 4'}</List.Item>
        </List>
      );

      const list = screen.getByRole('list');
      expect(list).toBeVisible();
      const items = screen.getAllByRole('listitem');

      expect(items).toHaveLength(4);
      expect(container).toMatchSnapshot();
    });
  });
  describe('Når testId-prop er satt', (): void => {
    it('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(
        <List testId="bare-tester">
          <List.Item>{'Tjeneste 1'}</List.Item>
          <List.Item>{'Tjeneste 2'}</List.Item>
          <List.Item>{'Tjeneste 3'}</List.Item>
          <List.Item>{'Tjeneste 4'}</List.Item>
        </List>
      );

      const list = screen.getByTestId('bare-tester');
      expect(list).toBeVisible();
    });
  });
});
