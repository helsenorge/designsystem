import React from 'react';

import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';

import LazyIcon from '../LazyIcon';

describe('Gitt at LazyIcon skal vises', (): void => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {
      // Unngå at feil logges til console
    });
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  describe('Når ikonet finnes', (): void => {
    test('Så vises ikonet', async (): Promise<void> => {
      render(<LazyIcon iconName={'ShakingHand'} />);

      const icon = await screen.findByTestId('shaking-hand');
      expect(icon).toBeInTheDocument();
    });
  });

  describe('Når ikonet lastes', (): void => {
    test('Så vises fallback før ikonet blir synlig', async (): Promise<void> => {
      render(<LazyIcon iconName={'ShakingHand'} />);

      const fallback = screen.getByTestId('fallback');
      expect(fallback).toBeInTheDocument();

      await waitForElementToBeRemoved(fallback);

      const icon = screen.getByTestId('shaking-hand');
      expect(icon).toBeInTheDocument();
    });
  });
});
