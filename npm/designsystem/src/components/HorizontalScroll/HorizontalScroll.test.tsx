import { fireEvent, render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import HorizontalScroll from './HorizontalScroll';
import * as useIsVisibleModule from '../../hooks/useIsVisible';

const useIsVisibleSpy = vi.spyOn(useIsVisibleModule, 'useIsVisible');

describe('Gitt at HorizontalScroll skal rendres', (): void => {
  describe('Når HorizontalScroll skal vises vanlig', (): void => {
    test('Så rendres HorizontalScroll riktig', (): void => {
      render(<HorizontalScroll>{'Teksten sin'}</HorizontalScroll>);

      const text = screen.getByText('Teksten sin');
      expect(text).toBeVisible();
    });
  });
  describe('Når aria-label er satt', (): void => {
    test('Så har HorizontalScroll rolle og label', (): void => {
      render(<HorizontalScroll aria-label="Beskriver innholdet">{'Teksten sin'}</HorizontalScroll>);

      const region = screen.getByRole('region', { name: 'Beskriver innholdet' });
      expect(region).toBeVisible();
    });
  });
  describe('Når aria-labelledby er satt', (): void => {
    test('Så har HorizontalScroll rolle og label fra id', (): void => {
      render(
        <>
          <p id="custom-id">{'Beskriver innholdet med custom element'}</p>
          <HorizontalScroll aria-labelledby="custom-id">{'Teksten sin'}</HorizontalScroll>
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
          <HorizontalScroll aria-label="Beskriver innholdet" aria-labelledby="custom-id">
            {'Teksten sin'}
          </HorizontalScroll>
        </>
      );

      const region = screen.getByRole('region', { name: 'Beskriver innholdet med custom element' });
      expect(region).toBeVisible();
    });
  });

  describe('Når synlighet observeres', (): void => {
    test('Så brukes scroll-containeren som root', (): void => {
      useIsVisibleSpy.mockClear();
      render(<HorizontalScroll aria-label="Område">{'Teksten sin'}</HorizontalScroll>);

      const viewport = screen.getByRole('region', { name: 'Område' });

      const lastCallOptions = useIsVisibleSpy.mock.calls.at(-1)?.[2];
      expect(lastCallOptions?.root).toBe(viewport);
    });
  });

  describe('Når bruker berører scroll-området', (): void => {
    test('Så propageres ikke touch-events til foreldre', (): void => {
      const parentHandler = vi.fn();
      render(
        <div onTouchMove={parentHandler} onTouchStart={parentHandler}>
          <HorizontalScroll aria-label="Område">{'Teksten sin'}</HorizontalScroll>
        </div>
      );

      const viewport = screen.getByRole('region', { name: 'Område' });
      fireEvent.touchStart(viewport);
      fireEvent.touchMove(viewport);
      expect(parentHandler).not.toHaveBeenCalled();
    });
  });
});
