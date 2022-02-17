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

  describe('Når modal ikke skal ha lukkeknapp', (): void => {
    it('Så vises ikke lukkeknappen', (): void => {
      render(<Modal title="Hei der" noCloseButton />);

      const lukk = screen.queryByRole('button');
      expect(lukk).not.toBeInTheDocument();
    });
  });

  describe('Når modal skal ha en komponent etter tittelen', (): void => {
    it('Så vises komponenten', (): void => {
      render(<Modal title="Hei der" afterTitleChildren={<h2>{'Hei til deg også'}</h2>} />);

      const title = screen.queryByRole('heading', { name: 'Hei til deg også' });
      expect(title).toBeVisible();
    });
  });

  describe('Når modal har custom z-index', (): void => {
    it('Så er z-index satt med inline styling', (): void => {
      render(<Modal title="Hei der" zIndex={123} testId="modal-med-custom-z-index" />);

      const modal = screen.getByTestId('modal-med-custom-z-index');
      expect(modal).toHaveAttribute('style', 'z-index: 123;');
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
        <Modal
          title="Hei der"
          titleId={'titleid01'}
          onClose={onClose}
          onSuccess={onSuccess}
          secondaryButtonText="Avbryt"
          variant={ModalVariants.warning}
        />
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toBe(`modal modal--${ModalVariants.warning} modal--large`);

      expect(container).toMatchSnapshot();
    });
  });

  describe(`Når en modal har variant ${ModalVariants.error}`, (): void => {
    it('Så skal bakgrunnen endre seg til riktig farge og det vises et ikon', (): void => {
      const onClose = jest.fn();
      const onSuccess = jest.fn();

      const { container } = render(
        <Modal
          title="Hei der"
          titleId={'titleid02'}
          onClose={onClose}
          onSuccess={onSuccess}
          secondaryButtonText="Avbryt"
          variant={ModalVariants.error}
        />
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toBe(`modal modal--${ModalVariants.error} modal--large`);

      expect(container).toMatchSnapshot();
    });
  });

  describe(`Når en modal har satt attributt large`, (): void => {
    it('så skal dialogen ha klassen large', (): void => {
      const onClose = jest.fn();
      const onSuccess = jest.fn();

      render(<Modal title="Hei der" onClose={onClose} onSuccess={onSuccess} secondaryButtonText="Avbryt" large />);

      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toBe('modal modal--normal modal--large');
    });
  });

  describe(`Når en modal har satt attributt imageView`, (): void => {
    it('så skal dialogen ha klassen imageView', (): void => {
      const onClose = jest.fn();
      const onSuccess = jest.fn();

      render(<Modal variant={ModalVariants.image} title="Hei der" onClose={onClose} onSuccess={onSuccess} secondaryButtonText="Avbryt" />);

      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toBe('modal modal--image modal--large');
    });
  });

  describe(`Når en modal har satt attributt imageView og large`, (): void => {
    it('så skal dialogen ha klassen imageView', (): void => {
      const onClose = jest.fn();
      const onSuccess = jest.fn();

      render(
        <Modal variant={ModalVariants.image} title="Hei der" onClose={onClose} onSuccess={onSuccess} secondaryButtonText="Avbryt" large />
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog.className).toBe('modal modal--image modal--large');
    });
  });

  describe(`Når en bruker tabber flere ganger inne i en Modal`, (): void => {
    it('Så skal man fanges inne i modalen når man tabber', (): void => {
      const onClose = jest.fn();
      const onSuccess = jest.fn();

      render(
        <>
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
      expect(buttons[0]).toHaveFocus();
      userEvent.tab();
      expect(buttons[1]).toHaveFocus();
      userEvent.tab();
      expect(buttons[2]).toHaveFocus();
      userEvent.tab();
      expect(buttons[0]).toHaveFocus();
    });
  });

  describe(`Når en modal har knapperad nederst (CTA), og en bruker trykker utenfor modalen`, (): void => {
    it('Så skal modalen ikke lukkes', (): void => {
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

      expect(onClose).not.toHaveBeenCalled();
    });
  });

  describe(`Når en modal ikke har knapperad nederst (CTA), og en bruker trykker utenfor modalen`, (): void => {
    it('Så skal modalen lukkes', (): void => {
      const onClose = jest.fn();

      render(<Modal title="Hei der" onClose={onClose} variant={ModalVariants.error} testId="testid" />);

      const dialog = screen.getByTestId('testid');

      userEvent.click(dialog);

      expect(onClose).toHaveBeenCalled();
    });
  });

  describe(`Når en modal har knapperad nederst (CTA), og en bruker trykker Escape`, (): void => {
    it('Så skal modalen ikke lukkes', (): void => {
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

      expect(onClose).not.toBeCalled();
    });
  });

  describe(`Når en modal ikke har en knapperad (CTA) nederst og en bruker trykker Escape`, (): void => {
    it('Så skal modalen lukkes', (): void => {
      const onClose = jest.fn();

      render(<Modal title="Hei der" onClose={onClose} variant={ModalVariants.error} testId="testid" />);

      const dialog = screen.getByTestId('testid');

      fireEvent.keyDown(dialog, { key: 'Escape' });

      expect(onClose).toBeCalled();
    });
  });

  describe(`Når en modal ikke har en knapperad (CTA) nederst, og har disableCloseEvents til true`, (): void => {
    it('Så skal Escape ikke få modalen til å lukkes', (): void => {
      const onClose = jest.fn();

      render(<Modal title="Hei der" onClose={onClose} variant={ModalVariants.error} disableCloseEvents testId="testid" />);

      const dialog = screen.getByTestId('testid');

      fireEvent.keyDown(dialog, { key: 'Escape' });

      expect(onClose).not.toBeCalled();
    });
  });

  describe(`Når en modal rendres med titleId`, (): void => {
    it('Så skal titleId settes', (): void => {
      const onClose = jest.fn();
      const onSuccess = jest.fn();

      render(
        <Modal
          title="Hei der"
          titleId="titleIdTest"
          onClose={onClose}
          onSuccess={onSuccess}
          secondaryButtonText="Avbryt"
          variant={ModalVariants.error}
          testId="testid"
        />
      );

      const title = screen.getByText('Hei der');

      expect(title.id).toBe('titleIdTest');
    });
  });

  describe(`Når en modal rendres med ariaLabel satt`, (): void => {
    it('Så skal ariaLabel settes', (): void => {
      const onClose = jest.fn();
      const onSuccess = jest.fn();

      render(
        <Modal
          title="Hei der"
          ariaLabel={'aria label test'}
          onClose={onClose}
          onSuccess={onSuccess}
          secondaryButtonText="Avbryt"
          variant={ModalVariants.error}
          testId="testid"
        />
      );

      const dialog = screen.getByLabelText('aria label test');

      expect(dialog).toBeVisible();
    });
  });

  describe(`Når en modal rendres med ariaLabelledBy satt`, (): void => {
    it('Så skal ariaLabel settes etter ariaLabbeledBy og ikke ariaLabel', (): void => {
      const onClose = jest.fn();
      const onSuccess = jest.fn();

      render(
        <Modal
          title="Hei der"
          titleId="titleId"
          ariaLabel={'aria label test'}
          ariaLabelledBy={'titleId'}
          onClose={onClose}
          onSuccess={onSuccess}
          secondaryButtonText="Avbryt"
          variant={ModalVariants.error}
          testId="testid"
        />
      );

      const dialog = screen.getByLabelText('Hei der');

      expect(dialog).toBeVisible();
    });
  });

  describe('Når modal skal vises med custom titleId', (): void => {
    test('Så har tittelen id-en', (): void => {
      render(<Modal title="Dette er tittelen" titleId="testing" />);

      const label = screen.getByText('Dette er tittelen');
      expect(label).toHaveAttribute('id', 'testing');
    });
  });
});

describe('Gitt at en modal skal vises som printable ', (): void => {
  it('Så skal modalen wrappes med Portal', (): void => {
    const onClose = jest.fn();
    const onSuccess = jest.fn();

    render(
      <Modal
        title="Hei der"
        description="Dette er innhold"
        onClose={onClose}
        onSuccess={onSuccess}
        secondaryButtonText="Avbryt"
        variant={ModalVariants.error}
        testId="testid"
        titleId="test"
        printable
      />
    );
    const portal = screen.getByTestId('print-modal');
    expect(portal).toBeVisible();
    expect(portal.innerHTML).toMatchSnapshot();

    const dialog = screen.getByLabelText('Hei der');
    expect(dialog).toBeVisible();
  });
});
