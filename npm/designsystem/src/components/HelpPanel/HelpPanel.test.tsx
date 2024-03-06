import React from 'react';

import { render, screen } from '@testing-library/react';
import { vi as jest } from 'vitest';

import HelpPanel from './HelpPanel';
import * as BreakpointUtils from '../../hooks/useBreakpoint';

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
