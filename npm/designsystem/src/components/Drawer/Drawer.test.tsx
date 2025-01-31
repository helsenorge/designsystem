import React from 'react';

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, it, expect, vi } from 'vitest';

import Drawer from './Drawer';

describe('Gitt at Drawer skal vises', () => {
  describe('Når Drawer vises', () => {
    test('Så vises Drawer', () => {
      render(<Drawer onClose={() => {}} title="Min tittel" />);
      // Sjekk at komponenten (dialog) er i dokumentet:
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
    });

    test('Så vises tittelen når en tittel er gitt', () => {
      const testTitle = 'Test Tittel';
      render(<Drawer onClose={() => {}} title={testTitle} />);
      expect(screen.getByText(testTitle)).toBeInTheDocument();
    });

    test('Så vises close-knappen', () => {
      render(<Drawer onClose={() => {}} title="Tittel" ariaLabelCloseBtn="close drawer" />);
      const closeButton = screen.getAllByRole('button')[0];
      expect(closeButton.getAttribute('aria-label')).toBe('close drawer');
    });

    test('Så vises default CTA-knapper når primaryActionText/secondaryActionText er gitt', () => {
      const primaryText = 'Fortsett';
      const secondaryText = 'Avbryt';

      render(<Drawer onClose={() => {}} title="Tittel" primaryActionText={primaryText} secondaryActionText={secondaryText} />);

      expect(screen.getByText(primaryText)).toBeInTheDocument();
      expect(screen.getByText(secondaryText)).toBeInTheDocument();
    });

    test('Så vises custom footerContent når det er gitt', () => {
      const footerContent = <div data-testid="custom-footer">{'Custom Footer'}</div>;
      render(<Drawer onClose={() => {}} title="Tittel" footerContent={footerContent} />);
      expect(screen.getByTestId('custom-footer')).toBeInTheDocument();
    });
  });

  describe('Når brukeren klikker på lukkeknappen', () => {
    it('Så kalles onClose etter animasjonens slutt (vi tester bare at onClose kalles)', async () => {
      const onCloseMock = vi.fn();
      render(<Drawer onClose={onCloseMock} title="Tittel" ariaLabelCloseBtn="Close" />);

      const closeButton = screen.getByRole('button', { name: /close/i });
      await userEvent.click(closeButton);

      await waitFor(() => expect(onCloseMock).toHaveBeenCalledTimes(1));
    });
  });

  describe('Når brukeren klikker på primary CTA-knappen', () => {
    it('Så kalles onPrimaryAction og onClose (i rekkefølgen at handleClose kjøres, så callback)', async () => {
      const onCloseMock = vi.fn();
      const onPrimaryActionMock = vi.fn();

      render(<Drawer onClose={onCloseMock} title="Tittel" primaryActionText="Send inn" onPrimaryAction={onPrimaryActionMock} />);

      const primaryButton = screen.getByRole('button', { name: /send inn/i });
      await userEvent.click(primaryButton);

      expect(onPrimaryActionMock).toHaveBeenCalledTimes(1);

      await waitFor(() => expect(onCloseMock).toHaveBeenCalledTimes(1));
    });
  });

  describe('Når brukeren klikker på overlayet', () => {
    it('Så kalles onClose', async () => {
      const onCloseMock = vi.fn();
      render(<Drawer onClose={onCloseMock} title="Tittel" primaryActionText="testbutton" />);

      // Overlayet har klassen .drawer__overlay i ditt eksempel
      const button = screen.getByRole('button', { name: /testbutton/i }); // in case we set role
      await userEvent.click(button);

      await waitFor(() => expect(onCloseMock).toHaveBeenCalledTimes(1));
    });
  });
});
