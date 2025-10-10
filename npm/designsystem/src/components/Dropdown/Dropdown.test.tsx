import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from '../Checkbox';

import Dropdown from '.';

describe('Gitt at Dropdown skal vises vanlig', (): void => {
  describe('Når Dropdownen har vanlig innhold', (): void => {
    test('Så kan man klikke og se innholdet', async (): Promise<void> => {
      render(
        <Dropdown triggerText="Knapp">
          <Dropdown.SingleSelectItem text="Valg 1" value="v1" />
        </Dropdown>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });

      await userEvent.click(button);

      // ul har role="group" og navn satt via aria-labelledby => triggerText
      const options = screen.getByRole('group', { name: 'Knapp' });
      const itemBtn = within(options).getByRole('button', { name: 'Valg 1' });
      expect(itemBtn).toBeVisible();
      expect(itemBtn).not.toHaveFocus();
    });
  });

  test('Så kan man lukke dropdownen med knappen', async (): Promise<void> => {
    render(
      <Dropdown triggerText="Knapp" resources={{ closeText: 'Lukk' }}>
        {/* Bruk Checkbox-barn for å sikre at dette IKKE er single-select -> close-knapp vises */}
        <Checkbox inputId="cb-1" label="Valg A" />
        <Checkbox inputId="cb-2" label="Valg B" />
      </Dropdown>
    );

    const button = screen.getByRole('button', { name: 'Knapp' });
    expect(button).toHaveAttribute('aria-expanded', 'false');

    await userEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');

    // Close-knappen ligger i panelet (søster til <ul role="group">)
    const closeBtn = screen.getByRole('button', { name: 'Lukk' });
    await userEvent.click(closeBtn);

    expect(button).toHaveAttribute('aria-expanded', 'false');
  });

  describe('Når Dropdownen har open prop', (): void => {
    test('Så er den åpen', (): void => {
      render(
        <Dropdown triggerText="Knapp" open>
          <Dropdown.SingleSelectItem text="Valg" value="v1" />
        </Dropdown>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Når Dropdownen har disabled prop', (): void => {
    test('Så er den disabled', (): void => {
      render(
        <Dropdown triggerText="Knapp" disabled>
          <Dropdown.SingleSelectItem text="Valg" value="v1" />
        </Dropdown>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });
      expect(button).toBeDisabled();
    });
  });

  describe('Når Dropdownen har noCloseButton prop', (): void => {
    test('Så er det ingen lukkeknapp', async (): Promise<void> => {
      render(
        <Dropdown triggerText="Knapp" resources={{ closeText: 'Lukk' }} noCloseButton>
          <Checkbox inputId="cb-1" label="Valg A" />
        </Dropdown>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });
      await userEvent.click(button);

      const close = screen.queryByRole('button', { name: 'Lukk' });
      expect(close).not.toBeInTheDocument();
    });
  });

  describe('Når man klikker utenfor dropdownen mens den er åpen', (): void => {
    test('Så lukkes Dropdownen', async (): Promise<void> => {
      render(
        <>
          <button>{'Knapp utenfor dropdown'}</button>
          <Dropdown triggerText="Knapp" open>
            <Dropdown.SingleSelectItem text="Valg" value="v1" />
          </Dropdown>
        </>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });
      expect(button).toHaveAttribute('aria-expanded', 'true');

      const outsideButton = screen.getByRole('button', { name: 'Knapp utenfor dropdown' });
      await userEvent.click(outsideButton);

      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Når man klikker på Escape mens Dropdown er åpen', (): void => {
    test('Så lukkes Dropdownen', async (): Promise<void> => {
      render(
        <Dropdown triggerText="Knapp">
          <Dropdown.SingleSelectItem text="Valg" value="v1" />
        </Dropdown>
      );
      const button = screen.getByRole('button', { name: 'Knapp' });
      await userEvent.click(button);
      await userEvent.keyboard('{Escape}');

      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Når man klikker på Enter mens Dropdown er lukket', (): void => {
    test('Så åpnes Dropdownen', async (): Promise<void> => {
      render(
        <Dropdown triggerText="Knapp">
          <Dropdown.SingleSelectItem text="Valg" value="v1" />
        </Dropdown>
      );
      const button = screen.getByRole('button', { name: 'Knapp' });
      // Åpne og lukke slik at fokus er på knappen før tastetrykk
      await userEvent.click(button);
      await userEvent.click(button);
      await userEvent.keyboard('{enter}');

      expect(button).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Når man klikker på Home mens Dropdown er åpen', (): void => {
    test('Så flyttes fokus til første valg, og man kan bruke tastaturet for å gå nedover, men ikke oppover', async (): Promise<void> => {
      render(
        <Dropdown triggerText="Knapp">
          <Dropdown.SingleSelectItem text="Førstevalg" value="radio-1" />
          <Dropdown.SingleSelectItem text="Andrevalg" value="radio-2" />
          <Dropdown.SingleSelectItem text="Tredjevalg" value="radio-3" />
        </Dropdown>
      );
      const button = screen.getByRole('button', { name: 'Knapp' });
      await userEvent.click(button);
      await userEvent.keyboard('{home}');

      const first = screen.getByRole('button', { name: 'Førstevalg' });
      expect(first).toHaveFocus();

      await userEvent.keyboard('{arrowup}');
      expect(first).toHaveFocus();

      await userEvent.keyboard('{arrowdown}');
      const second = screen.getByRole('button', { name: 'Andrevalg' });
      expect(second).toHaveFocus();
    });
  });

  describe('Når man klikker på End mens Dropdown er åpen', (): void => {
    test('Så flyttes fokus til siste valg, og man kan bruke tastaturet for å gå oppover, men ikke nedover', async (): Promise<void> => {
      render(
        <Dropdown triggerText="Knapp">
          <Dropdown.SingleSelectItem text="Førstevalg" value="radio-1" />
          <Dropdown.SingleSelectItem text="Andrevalg" value="radio-2" />
          <Dropdown.SingleSelectItem text="Tredjevalg" value="radio-3" />
        </Dropdown>
      );
      const button = screen.getByRole('button', { name: 'Knapp' });
      await userEvent.click(button);
      await userEvent.keyboard('{end}');

      const last = screen.getByRole('button', { name: 'Tredjevalg' });
      expect(last).toHaveFocus();

      await userEvent.keyboard('{arrowdown}');
      expect(last).toHaveFocus();

      await userEvent.keyboard('{arrowup}');
      const second = screen.getByRole('button', { name: 'Andrevalg' });
      expect(second).toHaveFocus();
    });
  });

  describe('Når man klikker på dropdown-knappen mens den er åpen', (): void => {
    test('Så lukkes Dropdownen når man klikker knappen på nytt', async (): Promise<void> => {
      render(
        <Dropdown triggerText="Knapp">
          <Dropdown.SingleSelectItem text="Valg" value="v1" />
        </Dropdown>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });

      // Åpne dropdownen
      await userEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');

      // Klikk på knappen igjen for å lukke
      await userEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });
});
