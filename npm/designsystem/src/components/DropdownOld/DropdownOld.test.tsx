import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Label from '../Label';
import RadioButton from '../RadioButton';

import DropdownOld from '.';

import '../../__mocks__/uuid';

describe('Gitt at DropdownOld skal vises vanlig', (): void => {
  describe('Når DropdownOlden har vanlig innhold', (): void => {
    test('Så kan man klikke og se innholdet', async (): Promise<void> => {
      render(
        <DropdownOld label="Ta et valg" placeholder="Knapp">
          <button>{'Innhold i DropdownOld'}</button>
        </DropdownOld>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });

      await userEvent.click(button);

      const options = screen.getByLabelText('Ta et valg');
      const contents = within(options).getByRole('button', { name: 'Innhold i DropdownOld' });
      expect(contents).toBeVisible();
      expect(contents).not.toHaveFocus();
    });
  });

  describe('Når DropdownOlden åpnes via tastatur', (): void => {
    test('Så fokuseres første element i dropdownen', async (): Promise<void> => {
      render(
        <DropdownOld label="Ta et valg" placeholder="Knapp">
          <button>{'Første element'}</button>
          <button>{'Andre element'}</button>
        </DropdownOld>
      );
      const button = screen.getByRole('button', { name: 'Knapp' });
      button.focus();
      await userEvent.keyboard('{enter}');

      const firstElement = screen.getByRole('button', { name: 'Første element' });
      expect(firstElement).toHaveFocus();
    });
  });

  describe('Når DropdownOlden har lukkeknapp', (): void => {
    test('Så kan man lukke dropdownen med knappen', async (): Promise<void> => {
      render(
        <DropdownOld label="Ta et valg" placeholder="Knapp" closeText="Lukk">
          <h2>{'Innhold i DropdownOld'}</h2>
        </DropdownOld>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });
      expect(button).toHaveAttribute('aria-expanded', 'false');
      await userEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Når DropdownOlden har open prop', (): void => {
    test('Så er den åpen', (): void => {
      render(
        <DropdownOld label="Ta et valg" placeholder="Knapp" open>
          <h2>{'Innhold i DropdownOld'}</h2>
        </DropdownOld>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Når DropdownOlden har disabled prop', (): void => {
    test('Så er den disabled', (): void => {
      render(
        <DropdownOld label="Ta et valg" placeholder="Knapp" disabled>
          <h2>{'Innhold i DropdownOld'}</h2>
        </DropdownOld>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });
      expect(button).toBeDisabled();
    });
  });

  describe('Når DropdownOlden har noCloseButton prop', (): void => {
    test('Så er det ingen lukkeknapp', async (): Promise<void> => {
      render(
        <DropdownOld label="Ta et valg" placeholder="Knapp" closeText="Lukk" noCloseButton>
          <h2>{'Innhold i DropdownOld'}</h2>
        </DropdownOld>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });
      await userEvent.click(button);

      const close = screen.queryByRole('button', { name: 'Lukk' });
      expect(close).not.toBeInTheDocument();
    });
  });

  describe('Når man klikker utenfor dropdownen mens den er åpen', (): void => {
    test('Så lukkes DropdownOlden', async (): Promise<void> => {
      render(
        <>
          <button>{'Knapp utenfor dropdown'}</button>
          <DropdownOld label="Ta et valg" placeholder="Knapp" open>
            <h2>{'Innhold i DropdownOld'}</h2>
          </DropdownOld>
        </>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });
      expect(button).toHaveAttribute('aria-expanded', 'true');

      const outsideButton = screen.getByRole('button', { name: 'Knapp utenfor dropdown' });
      await userEvent.click(outsideButton);

      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Når man klikker på Escape mens DropdownOld er åpen', (): void => {
    test('Så lukkes DropdownOlden', async (): Promise<void> => {
      render(
        <DropdownOld label="Ta et valg" placeholder="Knapp">
          <h2>{'Innhold i DropdownOld'}</h2>
        </DropdownOld>
      );
      const button = screen.getByRole('button', { name: 'Knapp' });
      await userEvent.click(button);
      await userEvent.keyboard('{Escape}');

      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Når man klikker på Enter mens DropdownOld er lukket', (): void => {
    test('Så åpnes DropdownOlden', async (): Promise<void> => {
      render(
        <DropdownOld label="Ta et valg" placeholder="Knapp">
          <h2>{'Innhold i DropdownOld'}</h2>
        </DropdownOld>
      );
      const button = screen.getByRole('button', { name: 'Knapp' });
      // Åpne og lukke dropdownen slik at fokus er på knappen før vi klikker på tastaturet
      await userEvent.click(button);
      await userEvent.click(button);
      await userEvent.keyboard('{enter}');

      expect(button).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Når man klikker på Home mens DropdownOld er åpen', (): void => {
    test('Så flyttes fokus til første radioknapp, og man kan bruke tastaturet for å gå nedover, men ikke oppover', async (): Promise<void> => {
      render(
        <DropdownOld label="Ta et valg" placeholder="Knapp">
          <RadioButton label={<Label labelTexts={[{ text: 'Førstevalg' }]} />} inputId="radio-1" value="radio-1" />
          <RadioButton label={<Label labelTexts={[{ text: 'Andrevalg' }]} />} inputId="radio-2" value="radio-2" />
          <RadioButton label={<Label labelTexts={[{ text: 'Tredjevalg' }]} />} inputId="radio-3" value="radio-3" />
        </DropdownOld>
      );
      const button = screen.getByRole('button', { name: 'Knapp' });
      await userEvent.click(button);
      await userEvent.keyboard('{home}');

      const radio1 = screen.getByLabelText('Førstevalg');
      expect(radio1).toHaveFocus();

      await userEvent.keyboard('{arrowup}');
      expect(radio1).toHaveFocus();

      await userEvent.keyboard('{arrowdown}');
      const radio2 = screen.getByLabelText('Andrevalg');
      expect(radio2).toHaveFocus();
    });
  });

  describe('Når man klikker på End mens DropdownOld er åpen', (): void => {
    test('Så flyttes fokus til sist radioknapp, og man kan bruke tastaturet for å gå oppover, men ikke nedover', async (): Promise<void> => {
      render(
        <DropdownOld label="Ta et valg" placeholder="Knapp">
          <RadioButton label={<Label labelTexts={[{ text: 'Førstevalg' }]} />} inputId="radio-1" value="radio-1" />
          <RadioButton label={<Label labelTexts={[{ text: 'Andrevalg' }]} />} inputId="radio-2" value="radio-2" />
          <RadioButton label={<Label labelTexts={[{ text: 'Tredjevalg' }]} />} inputId="radio-3" value="radio-3" />
        </DropdownOld>
      );
      const button = screen.getByRole('button', { name: 'Knapp' });
      await userEvent.click(button);
      await userEvent.keyboard('{end}');

      const radio3 = screen.getByLabelText('Tredjevalg');
      expect(radio3).toHaveFocus();

      await userEvent.keyboard('{arrowdown}');
      expect(radio3).toHaveFocus();

      await userEvent.keyboard('{arrowup}');

      const radio2 = screen.getByLabelText('Andrevalg');
      expect(radio2).toHaveFocus();
    });
  });

  describe('Når man klikker på dropdown-knappen mens den er åpen', (): void => {
    test('Så lukkes DropdownOlden når man klikker knappen på nytt', async (): Promise<void> => {
      render(
        <DropdownOld label="Ta et valg" placeholder="Knapp">
          <h2>{'Innhold i DropdownOld'}</h2>
        </DropdownOld>
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
