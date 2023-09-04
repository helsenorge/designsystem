import React from 'react';

import { toBeVisible } from '@testing-library/jest-dom/matchers';
import { getByDisplayValue, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';

import HelpPanel from './HelpPanel';
import * as BreakpointUtils from '../../hooks/useBreakpoint';
import HandWaving from '../Icons/HandWaving';

const mockUseBreakpoint = jest.fn();
jest.spyOn(BreakpointUtils, 'useBreakpoint').mockImplementation(mockUseBreakpoint);

describe('Gitt at HelpPanel skal rendres', (): void => {
  describe('Når HelpPanel skal vises vanlig', (): void => {
    test('Så rendres HelpPanel riktig', async (): Promise<void> => {
      render(
        <HelpPanel testId="helppanel" title="Tittel">
          {'Melding'}
        </HelpPanel>
      );

      const icon = screen.getByRole('presentation', { hidden: true });
      expect(icon).toBeVisible();

      const text = screen.getByText('Melding');
      expect(text).toBeVisible();
    });
  });
  describe('Når HelpPanel skal vises uten tittel', (): void => {
    test('Så rendres HelpPanel riktig', (): void => {
      render(<HelpPanel testId="helppanel">{'Melding'}</HelpPanel>);

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
