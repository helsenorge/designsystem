import '@testing-library/jest-dom';
import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Modal, { ModalVariants } from './Modal';
import userEvent from '@testing-library/user-event';

describe('Gitt at en modal skal vises ', (): void => {
  describe('Når en modal skal vise kun tittel og lukkeknapp', (): void => {
    it('Så skal den kun vise sist nevnte', (): void => {
      const onClose = jest.fn();

      render(<Modal title="Hei der" onClose={onClose} />);
      const title = screen.getByText('Hei der');
      expect(title).toBeVisible();

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(1);
    });
  });
  describe('Når en bruker trykker på lukkeknappen', (): void => {
    it('Så skal onClose kalles en gang', (): void => {
      const onClose = jest.fn();

      render(<Modal title="Hei der" onClose={onClose} />);

      const lukk = screen.getByRole('button');
      fireEvent.click(lukk);

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når en bruker trykker på OK knappen', (): void => {
    it('Så skal onSuccess kalles en gang', (): void => {
      const onClose = jest.fn();
      const onSuccess = jest.fn();

      render(<Modal title="Hei der" onClose={onClose} onSuccess={onSuccess} />);

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(2);

      const okKnapp = screen.getByText('OK');
      fireEvent.click(okKnapp);

      expect(onClose).toHaveBeenCalledTimes(0);
      expect(onSuccess).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når en bruker trykker på Avbryt knappen', (): void => {
    it('Så skal onSuccess kalles en gang', (): void => {
      const onClose = jest.fn();
      const onSuccess = jest.fn();

      render(<Modal title="Hei der" onClose={onClose} onSuccess={onSuccess} secondaryButtonText="Avbryt" />);

      const buttons = screen.getAllByRole('button');
      expect(buttons).toHaveLength(3);

      const cancel = screen.getByText('Avbryt');
      fireEvent.click(cancel);

      expect(onClose).toHaveBeenCalledTimes(1);
      expect(onSuccess).toHaveBeenCalledTimes(0);
    });
  });

  describe(`Når en modal har variant ${ModalVariants.warning}`, (): void => {
    it('Så skal bakgrunnen endre seg til riktig farge og det vises et ikon', (): void => {
      const onClose = jest.fn();
      const onSuccess = jest.fn();

      const { container } = render(
        <Modal title="Hei der" onClose={onClose} onSuccess={onSuccess} secondaryButtonText="Avbryt" variant={ModalVariants.warning} />
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toBe('modal warning');

      expect(container).toMatchSnapshot();
    });
  });

  describe(`Når en modal har variant ${ModalVariants.error}`, (): void => {
    it('Så skal bakgrunnen endre seg til riktig farge og det vises et ikon', (): void => {
      const onClose = jest.fn();
      const onSuccess = jest.fn();

      const { container } = render(
        <Modal title="Hei der" onClose={onClose} onSuccess={onSuccess} secondaryButtonText="Avbryt" variant={ModalVariants.error} />
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toBe(`modal ${ModalVariants.error}`);

      expect(container).toMatchSnapshot();
    });
  });

  describe(`Når en modal har satt attributt large`, (): void => {
    it('så skal dialogen ha klassen large', (): void => {
      const onClose = jest.fn();
      const onSuccess = jest.fn();

      render(<Modal title="Hei der" onClose={onClose} onSuccess={onSuccess} secondaryButtonText="Avbryt" large />);

      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toBe('modal normal large');
    });
  });

  describe(`Når en bruker tabber flere ganger inne i en Modal`, (): void => {
    it('Så skal man fanges inne i modalen når man tabber', (): void => {
      const onClose = jest.fn();
      const onSuccess = jest.fn();

      render(
        <>
          <div>
            stuff
            <button>Morn</button>
          </div>
          <Modal
            title="Hei der"
            onClose={onClose}
            onSuccess={onSuccess}
            secondaryButtonText="Avbryt"
            variant={ModalVariants.error}
            testId="testid"
          />
        </>
      );

      const buttons = screen.getAllByRole('button');
      userEvent.tab();
      expect(buttons[2]).toHaveFocus();
      userEvent.tab();
      expect(buttons[3]).toHaveFocus();
      userEvent.tab();
      expect(buttons[1]).toHaveFocus();
    });
  });

  describe(`Når en bruker trykker på overlay`, (): void => {
    it('Så skal modalen lukkes', (): void => {
      const onClose = jest.fn();
      const onSuccess = jest.fn();

      render(
        <Modal
          title="Hei der"
          onClose={onClose}
          onSuccess={onSuccess}
          secondaryButtonText="Avbryt"
          variant={ModalVariants.error}
          testId="testid"
        />
      );

      const dialog = screen.getByTestId('testid');

      userEvent.click(dialog);

      expect(onClose).toBeCalled();
    });
  });

  describe(`Når en bruker trykker Escape`, (): void => {
    it('Så skal modalen lukkes', (): void => {
      const onClose = jest.fn();
      const onSuccess = jest.fn();

      render(
        <Modal
          title="Hei der"
          onClose={onClose}
          onSuccess={onSuccess}
          secondaryButtonText="Avbryt"
          variant={ModalVariants.error}
          testId="testid"
        />
      );

      const dialog = screen.getByTestId('dialog-container');

      fireEvent.keyDown(dialog, { key: 'Escape' });

      expect(onClose).toBeCalled();
    });
  });
});
