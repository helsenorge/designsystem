import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, test, it, expect, vi } from 'vitest';

import Drawer from './Drawer';
import Button from '../Button';

describe('Gitt at Drawer skal vises', () => {
  describe('Når Drawer vises', () => {
    test('Så vises Drawer', () => {
      render(<Drawer onRequestClose={() => {}} title="Min tittel" isOpen={true} />);
      const dialog = screen.getByRole('dialog');
      expect(dialog).toBeInTheDocument();
    });

    test('Så vises tittelen når en tittel er gitt', () => {
      const testTitle = 'Test Tittel';
      render(<Drawer onRequestClose={() => {}} title={testTitle} isOpen={true} />);
      expect(screen.getByText(testTitle)).toBeInTheDocument();
    });

    test('Så vises close-knappen', () => {
      render(<Drawer onRequestClose={() => {}} title="Tittel" isOpen={true} resources={{ ariaLabelCloseBtn: 'close drawer' }} />);
      const closeButton = screen.getByRole('button', { name: /close drawer/i });
      expect(closeButton).toBeInTheDocument();
    });

    test('Så vises default CTA-knapper når onPrimaryAction/onSecondaryAction er gitt', () => {
      const primaryText = 'Fortsett';
      const secondaryText = 'Avbryt';

      render(
        <Drawer
          onRequestClose={() => {}}
          title="Tittel"
          primaryActionText={primaryText}
          secondaryActionText={secondaryText}
          onPrimaryAction={() => {}}
          onSecondaryAction={() => {}}
          isOpen={true}
        />
      );

      expect(screen.getByText(primaryText)).toBeInTheDocument();
      expect(screen.getByText(secondaryText)).toBeInTheDocument();
    });

    test('Så vises custom footerContent når det er gitt', () => {
      const footerContent = <Button>{'Custom knapp'}</Button>;
      render(<Drawer onRequestClose={() => {}} title="Tittel" footerContent={footerContent} isOpen={true} />);
      expect(screen.getByRole('button', { name: /Custom knapp/i })).toBeInTheDocument();
    });
  });

  describe('Når brukeren klikker på lukkeknappen', () => {
    it('Så kalles onRequestClose', async () => {
      const onCloseMock = vi.fn();
      render(<Drawer onRequestClose={onCloseMock} title="Tittel" resources={{ ariaLabelCloseBtn: 'close' }} isOpen={true} />);

      const closeButton = screen.getByRole('button', { name: /close/i });
      await userEvent.click(closeButton);

      await waitFor(() => expect(onCloseMock).toHaveBeenCalledTimes(1));
    });
  });

  describe('Når brukeren klikker på primary CTA-knappen', () => {
    it('Så kalles onPrimaryAction', async () => {
      const onCloseMock = vi.fn();
      const onPrimaryActionMock = vi.fn();

      render(
        <Drawer
          onRequestClose={onCloseMock}
          title="Tittel"
          primaryActionText="Send inn"
          onPrimaryAction={onPrimaryActionMock}
          isOpen={true}
        />
      );

      const primaryButton = screen.getByRole('button', { name: /send inn/i });
      await userEvent.click(primaryButton);

      expect(onPrimaryActionMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når brukeren klikker på secondary CTA-knappen', () => {
    it('Så kalles onSecondaryAction', async () => {
      const onCloseMock = vi.fn();
      const onSecondaryActionMock = vi.fn();

      render(
        <Drawer
          onRequestClose={onCloseMock}
          title="Tittel"
          primaryActionText="Send inn"
          secondaryActionText="Avbryt"
          onSecondaryAction={onSecondaryActionMock}
          isOpen={true}
        />
      );

      const secondaryButton = screen.getByRole('button', { name: /avbryt/i });
      await userEvent.click(secondaryButton);

      expect(onSecondaryActionMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når brukeren klikker på overlayet', () => {
    it('Så kalles onRequestClose', async () => {
      const onCloseMock = vi.fn();
      const { container } = render(<Drawer onRequestClose={onCloseMock} title="Tittel" primaryActionText="Testknapp" isOpen={true} />);

      const overlay = container.querySelector('.drawer__overlay');
      expect(overlay).toBeInTheDocument();

      await userEvent.click(overlay!);
      await waitFor(() => expect(onCloseMock).toHaveBeenCalledTimes(1));
    });
  });

  describe('Når isOpen settes til false', () => {
    it('Så fjernes ikke Drawer fra domen med en gang for å la exit animasjonen fullføre', async () => {
      vi.useFakeTimers();

      const { rerender } = render(<Drawer onRequestClose={() => {}} title="Test Drawer" isOpen={true} />);

      expect(screen.getByRole('dialog')).toBeInTheDocument();

      // Trigger exit animation.
      rerender(<Drawer onRequestClose={() => {}} title="Test Drawer" isOpen={false} />);
      expect(screen.getByRole('dialog')).toBeInTheDocument();

      vi.useRealTimers();
    });
  });
});
