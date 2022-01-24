import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FormExample, FormExampleVariants } from '../FormExample/FormExample';

describe('Gitt at Validation skal vises', () => {
  describe('Når Validation rendres', () => {
    test('Så vises den riktig', () => {
      render(<FormExample exampleType={FormExampleVariants.formgroup} />);

      const validation = screen.getByText('One amazing title').parentElement.parentElement;
      expect(validation.className).toBe('validation');
    });
  });

  describe('Når Validation rendres med children', () => {
    test('Så vises children', () => {
      render(<FormExample exampleType={FormExampleVariants.formgroup} />);

      const formGroup = screen.getByText('One amazing title').parentElement;
      expect(formGroup).toBeVisible();
    });
  });

  describe('Når Submit knapp trykkes på', () => {
    test('Så vises error', async () => {
      render(<FormExample exampleType={FormExampleVariants.formgroup} />);

      const submit = screen.getByText('Submit');

      userEvent.click(submit);

      const error = await screen.findAllByText('Du må velge et alternativ');
      const error2 = await screen.findByText('Du må velge to alternativ');
      const errorSummary = screen.getByText('Sjekk at alt er riktig utfylt');

      expect(error.length).toBe(2);
      expect(error[0].className).toBe('form-group-wrapper__errors');
      expect(error2).toBeVisible();
      expect(error2.className).toBe('form-group-wrapper__errors');
      expect(errorSummary).toBeVisible();
      expect(errorSummary.className).toBe('validation__errors');
    });
  });

  describe('Når error vises med variant prop satt til bigform', () => {
    test('Så vises errorSummary med riktig styling', async () => {
      render(<FormExample variant={'bigform'} exampleType={FormExampleVariants.formgroup} />);

      const submit = screen.getByText('Submit');

      userEvent.click(submit);

      const errorSummary = await screen.findByText('Sjekk at alt er riktig utfylt');

      expect(errorSummary.className).toBe('validation__errors');
    });
  });

  describe('Når validation krav blir møtt', () => {
    test('Så fjernes error', async () => {
      render(<FormExample exampleType={FormExampleVariants.formgroup} />);

      const submit = screen.getByText('Submit');

      userEvent.click(submit);

      const error = await screen.findAllByText('Du må velge et alternativ');
      const error2 = await screen.findByText('Du må velge to alternativ');
      const error3 = await screen.findByText('Det kan ikke legges inn mer enn 40 tegn');
      const error4 = await screen.findByText('Du må skrive noe her');
      const errorSummary = screen.getByText('Sjekk at alt er riktig utfylt');

      expect(error.length).toBe(2);
      expect(error2).toBeVisible();
      expect(error3).toBeVisible();
      expect(error4).toBeVisible();
      expect(errorSummary).toBeVisible();

      const checkbox1 = screen.getByLabelText('Checkbox 1');
      const checkbox4 = screen.getByLabelText('Checkbox 4');
      const checkbox5 = screen.getByLabelText('Checkbox 5');
      const radiobutton1 = screen.getByLabelText('Radiobutton 1');
      const textarea1 = screen.getByLabelText('Skriv din historie her');
      const input1 = screen.getByLabelText('Skriv inn din tekst');
      userEvent.click(checkbox1);
      userEvent.click(checkbox4);
      userEvent.click(checkbox5);
      userEvent.click(radiobutton1);
      fireEvent.change(textarea1, { target: { value: 'Endring.' } });
      fireEvent.change(input1, { target: { value: 'Ny tekst' } });

      userEvent.click(submit);

      await waitFor(() => {
        expect(error[0]).not.toBeInTheDocument();
        expect(error2).not.toBeInTheDocument();
        expect(error3).not.toBeInTheDocument();
        expect(error4).not.toBeInTheDocument();
        expect(errorSummary).not.toBeInTheDocument();
      });
    });
  });
});
