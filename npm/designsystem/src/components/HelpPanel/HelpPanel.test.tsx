import React from 'react';

import { toBeVisible } from '@testing-library/jest-dom/matchers';
import { render, screen } from '@testing-library/react';

import HelpPanel from './HelpPanel';
import HandWaving from '../Icons/HandWaving';

describe('Gitt at HelpPanel skal rendres', (): void => {
  describe('Når HelpPanel skal vises vanlig', (): void => {
    test('Så rendres HelpPanel riktig', (): void => {
      render(
        <HelpPanel testId="helppanel" title="Tittel" svgIcon={HandWaving}>
          {'Melding'}
        </HelpPanel>
      );

      const panel = screen.getByTestId('helppanel');
      expect(panel).toBeVisible();

      const icon = screen.getByRole('presentation', { hidden: true });
      expect(icon).toBeVisible();

      const title = screen.getAllByText('Tittel');
      expect(title.length).toEqual(2);
      expect(title[0]).not.toBeVisible();
      expect(title[1]).toBeVisible();

      const text = screen.getByText('Melding');
      expect(text).toBeVisible();
    });
  });
  describe('Når HelpPanel skal vises uten tittel', (): void => {
    test('Så rendres HelpPanel riktig', (): void => {
      render(
        <HelpPanel testId="helppanel" svgIcon={HandWaving}>
          {'Melding'}
        </HelpPanel>
      );

      const panel = screen.getByTestId('helppanel');
      expect(panel).toBeVisible();

      const icon = screen.getByRole('presentation', { hidden: true });
      expect(icon).toBeVisible();

      const title = screen.queryAllByTestId('testId');
      expect(title.length).toEqual(0);

      const text = screen.getByText('Melding');
      expect(text).toBeVisible();
    });
  });
});
