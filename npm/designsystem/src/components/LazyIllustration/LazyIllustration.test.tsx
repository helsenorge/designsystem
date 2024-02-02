import React from 'react';

import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';

import LazyIllustration from './';

describe('Gitt at LazyIllustration skal vises', (): void => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {
      // Unngå at feil logges til console
    });
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  describe('Når illustrasjonen finnes', (): void => {
    test('Så vises illustrasjonen', async (): Promise<void> => {
      render(<LazyIllustration illustrationName={'Doctor'} />);

      const illustration = await screen.findByTestId('doctor-medium');
      expect(illustration).toBeInTheDocument();
    });
  });

  describe('Når illustrasjonen lastes', (): void => {
    test('Så vises fallback før illustrasjonen blir synlig', async (): Promise<void> => {
      render(<LazyIllustration illustrationName={'Doctor'} />);

      const fallback = screen.getByTestId('fallback');
      expect(fallback).toBeInTheDocument();

      await waitForElementToBeRemoved(fallback);

      const illustration = screen.getByTestId('doctor-medium');
      expect(illustration).toBeInTheDocument();
    });
  });
});
