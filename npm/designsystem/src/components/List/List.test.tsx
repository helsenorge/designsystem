import { render, screen } from '@testing-library/react';

import List from './List';

describe('Gitt at List skal vises', (): void => {
  describe('Når komponenten har fire elementer', (): void => {
    it('Så vises fire liste-elementer', (): void => {
      render(
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
  describe('Når nummerert liste har start, reversed og value', (): void => {
    it('Så sendes start og reversed til <ol> og value til <li>', (): void => {
      render(
        <List variant="numbered" start={3} reversed>
          <List.Item value={7}>{'sju'}</List.Item>
          <List.Item>{'seks'}</List.Item>
        </List>
      );

      const list = screen.getByRole('list');
      expect(list.tagName).toBe('OL');
      expect(list).toHaveAttribute('start', '3');
      expect(list).toHaveAttribute('reversed');
      expect(screen.getAllByRole('listitem')[0]).toHaveAttribute('value', '7');
    });
  });
  describe('Når punktliste har start og reversed', (): void => {
    it('Så settes ikke start og reversed på <ul>', (): void => {
      render(
        <List variant="bullet" start={3} reversed>
          <List.Item>{'tre'}</List.Item>
        </List>
      );

      const list = screen.getByRole('list');
      expect(list.tagName).toBe('UL');
      expect(list).not.toHaveAttribute('start');
      expect(list).not.toHaveAttribute('reversed');
    });
  });
});
