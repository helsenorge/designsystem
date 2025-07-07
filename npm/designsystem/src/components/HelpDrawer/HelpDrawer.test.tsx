import React from 'react';

import { render, screen } from '@testing-library/react';

import HelpDrawer from './HelpDrawer';

describe('Gitt at Drawer skal vises', () => {
  describe('Når Drawer vises', () => {
    test('Så vises Drawer', () => {
      render(<HelpDrawer onRequestClose={() => {}} title="Min tittel" isOpen={true} />);
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
    });
  });

  describe('Gitt at default brukes', (): void => {
    test('Så får vi riktig tekst', async (): Promise<void> => {
      render(<HelpDrawer onRequestClose={() => {}} title="Min tittel" isOpen={true} />);

      const helpdrawer = screen.getByLabelText('Hjelpetekst');
      expect(helpdrawer).toBeVisible;
    });
  });
});
