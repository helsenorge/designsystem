import React, { useEffect, useRef, useState } from 'react';

import { render, screen, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ValidationErrors } from './types';
import Validation from './Validation';
import { FormExample, FormExampleVariants } from '../FormExample/FormExample';
import Input from '../Input';

describe('Gitt at Validation skal vises', () => {
  describe('Når Validation rendres', () => {
    test('Så vises tomt felt for oppsummering av feil', () => {
      render(<Validation />);

      const alert = screen.getByRole('alert');
      expect(alert).toBeVisible();
      expect(alert).toHaveTextContent('');
    });
  });

  describe('Når Validation har errorTitle og errors', () => {
    test('Så vises oppsummering av feil i en alert', () => {
      render(<Validation errorTitle="Du må fikse dette:" errors={{ feil1: { message: 'For lang tekst' } }} />);

      const alert = screen.getByRole('alert', { name: 'Du må fikse dette:' });
      expect(alert).toBeVisible();

      const errorMessage = within(alert).getByText('For lang tekst');
      expect(errorMessage).toBeVisible();
    });
  });

  describe('Når Validation har errorTitle og errors med referanse til et element', () => {
    test('Så vises oppsummering av feil i en alert med lenke til feilen', async () => {
      const Example: React.FC = () => {
        const inputRef = useRef<HTMLInputElement>(null);
        const [errors, setErrors] = useState<ValidationErrors>();

        useEffect(() => {
          inputRef.current && setErrors({ feil1: { message: 'For lang tekst', ref: inputRef.current } });
        }, [inputRef.current]);

        return (
          <Validation errorTitle="Du må fikse dette:" errors={errors}>
            <Input ref={inputRef} errorTextId="error1" inputId="input1" />
          </Validation>
        );
      };

      render(<Example />);

      const alert = screen.getByRole('alert', { name: 'Du må fikse dette:' });
      expect(alert).toBeVisible();

      const errorMessage = await within(alert).findByRole('link', { name: 'For lang tekst' });
      expect(errorMessage).toBeVisible();
      expect(errorMessage).toHaveAttribute('href', '#feil1');
    });
  });

  describe('Når Validation har errorTitle, errors og errorSummary', () => {
    test('Så vises all teksten i en alert', () => {
      render(<Validation errorTitle="Du må fikse dette:" errors={{ feil1: { message: 'For lang tekst' } }} errorSummary="feilmelding" />);

      const alert = screen.getByRole('alert', { name: 'Du må fikse dette:' });
      expect(alert).toBeVisible();

      const errorMessage = within(alert).getByText('For lang tekst');
      expect(errorMessage).toBeVisible();
      const errorSummary = within(alert).getByText('feilmelding');
      expect(errorSummary).toBeVisible();
    });
  });

  describe('Når Validation har errorSummary', () => {
    test('Så vises oppsummering av feil i en alert', () => {
      render(<Validation errorSummary="feilmelding" />);

      const alert = screen.getByRole('alert');
      expect(alert).toBeVisible();
      expect(alert).toHaveTextContent('feilmelding');
    });
  });

  describe('Når Validation har errorTitle, men ingen errors', () => {
    test('Så vises tomt felt for oppsummering av feil', () => {
      render(<Validation errorTitle="Du må fikse dette:" />);

      const alert = screen.getByRole('alert');
      expect(alert).toBeVisible();
      expect(alert).toHaveTextContent('');
    });
  });

  describe('Når Validation inneholder skjema', () => {
    describe('Når Validation rendres', () => {
      test('Så vises den riktig', () => {
        render(<FormExample exampleType={FormExampleVariants.formgroup} />);

        const validation = screen.getByText('Gruppe tittel').parentElement?.parentElement;
        expect(validation?.className).toBe('');
      });
    });

    describe('Når Validation rendres med children', () => {
      test('Så vises children', () => {
        render(<FormExample exampleType={FormExampleVariants.formgroup} />);

        const formGroup = screen.getByText('Gruppe tittel').parentElement;
        expect(formGroup).toBeVisible();
      });
    });

    describe('Når Submit knapp trykkes på', () => {
      test('Så vises error', async () => {
        render(<FormExample exampleType={FormExampleVariants.formgroup} />);

        const submit = screen.getByText('Send inn');

        await userEvent.click(submit);

        const checkbox1 = screen.getByLabelText('Checkbox 1');
        expect(checkbox1).toHaveAccessibleDescription('Du må velge et alternativ');
        const checkbox4 = screen.getByLabelText('Checkbox 4');
        expect(checkbox4).toHaveAccessibleDescription('Du må velge to alternativ');

        const errorSummary = screen.getByRole('alert');
        expect(errorSummary).toBeVisible();
        expect(errorSummary).toHaveTextContent('Sjekk at alt er riktig utfylt');
        expect(errorSummary.className).toBe('validation-summary validation-summary--visible');
      });
    });

    describe('Når error vises med variant prop satt til large', () => {
      test('Så vises errorSummary med riktig styling', async () => {
        render(<FormExample size={'large'} exampleType={FormExampleVariants.formgroup} />);

        const submit = screen.getByText('Send inn');

        await userEvent.click(submit);

        const errorSummary = screen.getByRole('alert');

        expect(errorSummary.className).toBe('validation-summary validation-summary--visible');
      });
    });

    describe('Når validation krav blir møtt', () => {
      test('Så fjernes error', async () => {
        render(<FormExample exampleType={FormExampleVariants.formgroup} />);

        const submit = screen.getByText('Send inn');

        await userEvent.click(submit);

        const checkbox1 = screen.getByLabelText('Checkbox 1');
        expect(checkbox1).toHaveAccessibleDescription('Du må velge et alternativ');
        const checkbox2 = screen.getByLabelText('Checkbox 2');
        expect(checkbox2).toHaveAccessibleDescription('Du må velge et alternativ');
        const checkbox3 = screen.getByLabelText('Checkbox 3');
        expect(checkbox3).toHaveAccessibleDescription('Du må velge et alternativ');

        const checkbox4 = screen.getByLabelText('Checkbox 4');
        expect(checkbox4).toHaveAccessibleDescription('Du må velge to alternativ');
        const checkbox5 = screen.getByLabelText('Checkbox 5');
        expect(checkbox5).toHaveAccessibleDescription('Du må velge to alternativ');
        const checkbox6 = screen.getByLabelText('Checkbox 6');
        expect(checkbox6).toHaveAccessibleDescription('Du må velge to alternativ');

        const radiobutton1 = screen.getByLabelText('Radiobutton 1');
        expect(radiobutton1).toHaveAccessibleDescription('Du må velge et alternativ');
        const radiobutton2 = screen.getByLabelText('Radiobutton 2');
        expect(radiobutton2).toHaveAccessibleDescription('Du må velge et alternativ');
        const radiobutton3 = screen.getByLabelText('Radiobutton 3');
        expect(radiobutton3).toHaveAccessibleDescription('Du må velge et alternativ');

        const textarea1 = screen.getByLabelText('Skriv din historie her');
        expect(textarea1).toHaveAccessibleDescription('Det kan ikke legges inn mer enn 40 tegn');

        const input1 = screen.getByLabelText('Skriv inn din tekst');
        expect(input1).toHaveAccessibleDescription('Du må skrive noe her');

        const select1 = screen.getByLabelText('Velg et alternativ');
        expect(select1).toHaveAccessibleDescription('Du må velge "Option 2"');

        const errorSummary = screen.getByRole('alert');
        expect(errorSummary).toBeVisible();
        expect(errorSummary).toHaveTextContent('Sjekk at alt er riktig utfylt');

        await userEvent.click(checkbox1);
        await userEvent.click(checkbox4);
        await userEvent.click(checkbox5);
        await userEvent.click(radiobutton1);
        fireEvent.change(textarea1, { target: { value: 'Endring.' } });
        fireEvent.change(input1, { target: { value: 'Ny tekst' } });
        fireEvent.change(select1, { target: { value: 'Option 2' } });

        await userEvent.click(submit);

        expect(checkbox1).toHaveAccessibleDescription('');
        expect(checkbox2).toHaveAccessibleDescription('');
        expect(checkbox3).toHaveAccessibleDescription('');
        expect(checkbox4).toHaveAccessibleDescription('');
        expect(checkbox5).toHaveAccessibleDescription('');
        expect(checkbox6).toHaveAccessibleDescription('');
        expect(radiobutton1).toHaveAccessibleDescription('');
        expect(radiobutton2).toHaveAccessibleDescription('');
        expect(radiobutton3).toHaveAccessibleDescription('');
        expect(textarea1).toHaveAccessibleDescription('');
        expect(input1).toHaveAccessibleDescription('');
        expect(select1).toHaveAccessibleDescription('');
        expect(errorSummary).toHaveTextContent('');
        expect(errorSummary.className).toBe('validation-summary');
      });
    });
  });
});
