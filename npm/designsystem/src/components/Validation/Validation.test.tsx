import React from 'react';

import { render, screen, waitFor, fireEvent, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FormExample, FormExampleVariants } from '../FormExample/FormExample';

describe('Gitt at Validation skal vises', () => {
  describe('Når Validation rendres', () => {
    test('Så vises den riktig', () => {
      render(<FormExample exampleType={FormExampleVariants.formgroup} />);

      const validation = screen.getByText('Gruppe tittel').parentElement?.parentElement;
      expect(validation?.className).toBe('validation');
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
      expect(errorSummary.className).toBe('validation__summary validation__summary--visible');
    });
  });

  describe('Når error vises med variant prop satt til large', () => {
    test('Så vises errorSummary med riktig styling', async () => {
      render(<FormExample size={'large'} exampleType={FormExampleVariants.formgroup} />);

      const submit = screen.getByText('Send inn');

      await userEvent.click(submit);

      const errorSummary = screen.getByRole('alert');

      expect(errorSummary.className).toBe('validation__summary validation__summary--visible');
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
      expect(textarea1).toHaveAccessibleDescription('');

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
      expect(errorSummary).toBeEmptyDOMElement();
      expect(errorSummary.className).toBe('validation__summary');
    });
  });
});
