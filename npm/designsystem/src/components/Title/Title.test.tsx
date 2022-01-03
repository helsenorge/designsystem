import React from 'react';
import { render, screen } from '@testing-library/react';
import Title from './Title';

describe('Gitt at Title skal rendres', (): void => {
  describe('Gitt at Title skal vises vanlig', (): void => {
    test('Så rendres Title riktig', (): void => {
      const { container } = render(<Title>Title</Title>);

      expect(container).toMatchSnapshot();

      const titleElement = screen.getByText('Title');

      expect(titleElement).toBeTruthy();
      expect(titleElement.tagName).toBe('H1');
    });
  });

  describe('Gitt at Title skal vises som h2', (): void => {
    test('Så rendres Title med riktig tag', (): void => {
      render(<Title htmlMarkup={'h2'}>Title</Title>);

      const titleElement = screen.getByText('Title');

      expect(titleElement.tagName).toBe('H2');
    });
  });

  describe('Når testId-prop er satt', (): void => {
    test('Så kan komponenten finnes ved hjelp av testId', (): void => {
      render(<Title testId="bare-tester">Title</Title>);

      const component = screen.getByTestId('bare-tester');
      expect(component).toBeVisible();
    });
  });
});
