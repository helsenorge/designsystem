import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Dropdown from './';
import RadioButton from '../RadioButton';

import '../../__mocks__/uuid';

describe('Gitt at Dropdown skal vises vanlig', (): void => {
  describe('Når Dropdownen har vanlig innhold', (): void => {
    test('Så kan man klikke og se innholdet', (): void => {
      render(
        <Dropdown label="Ta et valg" toggleLabel="Knapp">
          <h2>Innhold i Dropdown</h2>
        </Dropdown>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });

      userEvent.click(button);

      const options = screen.getByLabelText('Ta et valg');
      expect(options).toHaveFocus();

      const contents = within(options).getByRole('heading', { name: 'Innhold i Dropdown' });
      expect(contents).toBeVisible();
    });

    test('Så ser Dropdown ut slik den skal', (): void => {
      const { container } = render(
        <Dropdown label="Ta et valg" toggleLabel="Knapp">
          <h2>Innhold i Dropdown</h2>
        </Dropdown>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('Når Dropdownen har lukkeknapp', (): void => {
    test('Så kan man lukke dropdownen med knappen', (): void => {
      render(
        <Dropdown label="Ta et valg" toggleLabel="Knapp" closeText="Lukk">
          <h2>Innhold i Dropdown</h2>
        </Dropdown>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });
      expect(button).toHaveAttribute('aria-expanded', 'false');
      userEvent.click(button);
      expect(button).toHaveAttribute('aria-expanded', 'true');
      const close = screen.getByRole('button', { name: 'Lukk' });
      userEvent.click(close);
      expect(close).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Når Dropdownen har open prop', (): void => {
    test('Så er den åpen', (): void => {
      render(
        <Dropdown label="Ta et valg" toggleLabel="Knapp" open>
          <h2>Innhold i Dropdown</h2>
        </Dropdown>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });
      expect(button).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Når Dropdownen har disabled prop', (): void => {
    test('Så er den disabled', (): void => {
      render(
        <Dropdown label="Ta et valg" toggleLabel="Knapp" disabled>
          <h2>Innhold i Dropdown</h2>
        </Dropdown>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });
      expect(button).toBeDisabled();
    });
  });

  describe('Når Dropdownen har noCloseButton prop', (): void => {
    test('Så er det ingen lukkeknapp', (): void => {
      render(
        <Dropdown label="Ta et valg" toggleLabel="Knapp" closeText="Lukk" noCloseButton>
          <h2>Innhold i Dropdown</h2>
        </Dropdown>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });
      userEvent.click(button);

      const close = screen.queryByRole('button', { name: 'Lukk' });
      expect(close).not.toBeInTheDocument();
    });
  });

  describe('Når man klikker utenfor dropdownen mens den er åpen', (): void => {
    test('Så lukkes Dropdownen', (): void => {
      render(
        <>
          <button>Knapp utenfor dropdown</button>
          <Dropdown label="Ta et valg" toggleLabel="Knapp" open>
            <h2>Innhold i Dropdown</h2>
          </Dropdown>
        </>
      );

      const button = screen.getByRole('button', { name: 'Knapp' });
      expect(button).toHaveAttribute('aria-expanded', 'true');

      const outsideButton = screen.getByRole('button', { name: 'Knapp utenfor dropdown' });
      userEvent.click(outsideButton);

      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Når man klikker på Escape mens Dropdown er åpen', (): void => {
    test('Så lukkes Dropdownen', (): void => {
      render(
        <Dropdown label="Ta et valg" toggleLabel="Knapp">
          <h2>Innhold i Dropdown</h2>
        </Dropdown>
      );
      const button = screen.getByRole('button', { name: 'Knapp' });
      userEvent.click(button);
      userEvent.keyboard('{esc}');

      expect(button).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Når man klikker på Enter mens Dropdown er lukket', (): void => {
    test('Så åpnes Dropdownen', (): void => {
      render(
        <Dropdown label="Ta et valg" toggleLabel="Knapp">
          <h2>Innhold i Dropdown</h2>
        </Dropdown>
      );
      const button = screen.getByRole('button', { name: 'Knapp' });
      // Åpne og lukke dropdownen slik at fokus er på knappen før vi klikker på tastaturet
      userEvent.click(button);
      userEvent.click(button);
      userEvent.keyboard('{enter}');

      expect(button).toHaveAttribute('aria-expanded', 'true');
    });
  });

  describe('Når man klikker på Home mens Dropdown er åpen', (): void => {
    test('Så flyttes fokus til første radioknapp, og man kan bruke tastaturet for å gå nedover, men ikke oppover', (): void => {
      render(
        <Dropdown label="Ta et valg" toggleLabel="Knapp">
          <RadioButton label="Førstevalg" inputId="radio-1" value="radio-1" />
          <RadioButton label="Andrevalg" inputId="radio-2" value="radio-2" />
          <RadioButton label="Tredjevalg" inputId="radio-3" value="radio-3" />
        </Dropdown>
      );
      const button = screen.getByRole('button', { name: 'Knapp' });
      userEvent.click(button);
      userEvent.keyboard('{home}');

      const radio1 = screen.getByLabelText('Førstevalg');
      expect(radio1).toHaveFocus();

      userEvent.keyboard('{arrowup}');
      expect(radio1).toHaveFocus();

      userEvent.keyboard('{arrowdown}');
      const radio2 = screen.getByLabelText('Andrevalg');
      expect(radio2).toHaveFocus();
    });
  });

  describe('Når man klikker på End mens Dropdown er åpen', (): void => {
    test('Så flyttes fokus til sist radioknapp, og man kan bruke tastaturet for å gå oppover, men ikke nedover', (): void => {
      render(
        <Dropdown label="Ta et valg" toggleLabel="Knapp">
          <RadioButton label="Førstevalg" inputId="radio-1" value="radio-1" />
          <RadioButton label="Andrevalg" inputId="radio-2" value="radio-2" />
          <RadioButton label="Tredjevalg" inputId="radio-3" value="radio-3" />
        </Dropdown>
      );
      const button = screen.getByRole('button', { name: 'Knapp' });
      userEvent.click(button);
      userEvent.keyboard('{end}');

      const radio3 = screen.getByLabelText('Tredjevalg');
      expect(radio3).toHaveFocus();

      userEvent.keyboard('{arrowdown}');
      expect(radio3).toHaveFocus();

      userEvent.keyboard('{arrowup}');

      const radio2 = screen.getByLabelText('Andrevalg');
      expect(radio2).toHaveFocus();
    });
  });
});
