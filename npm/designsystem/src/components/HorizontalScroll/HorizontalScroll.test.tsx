import React from 'react';

import { render, screen } from '@testing-library/react';

import HorizontalScroll from './HorizontalScroll';

describe('Gitt at HorizontalScroll skal rendres', (): void => {
  describe('Når HorizontalScroll skal vises vanlig', (): void => {
    test('Så rendres HorizontalScroll riktig', (): void => {
      const { container } = render(<HorizontalScroll childWidth={800}>{'Teksten sin'}</HorizontalScroll>);

      const text = screen.getByText('Teksten sin');
      expect(text).toBeVisible();

      expect(container).toMatchSnapshot();
    });
  });
  describe('Når aria-label er satt', (): void => {
    test('Så har HorizontalScroll rolle og label', (): void => {
      render(
        <HorizontalScroll childWidth={800} aria-label="Beskriver innholdet">
          {'Teksten sin'}
        </HorizontalScroll>
      );

      const region = screen.getByRole('region', { name: 'Beskriver innholdet' });
      expect(region).toBeVisible();
    });
  });
  describe('Når aria-labelledby er satt', (): void => {
    test('Så har HorizontalScroll rolle og label fra id', (): void => {
      render(
        <>
          <p id="custom-id">{'Beskriver innholdet med custom element'}</p>
          <HorizontalScroll childWidth={800} aria-labelledby="custom-id">
            {'Teksten sin'}
          </HorizontalScroll>
        </>
      );

      const region = screen.getByRole('region', { name: 'Beskriver innholdet med custom element' });
      expect(region).toBeVisible();
    });
  });
  describe('Når aria-label og aria-labelledby er satt', (): void => {
    test('Så har HorizontalScroll rolle og label fra id', (): void => {
      render(
        <>
          <p id="custom-id">{'Beskriver innholdet med custom element'}</p>
          <HorizontalScroll childWidth={800} aria-label="Beskriver innholdet" aria-labelledby="custom-id">
            {'Teksten sin'}
          </HorizontalScroll>
        </>
      );

      const region = screen.getByRole('region', { name: 'Beskriver innholdet med custom element' });
      expect(region).toBeVisible();
    });
  });
});
