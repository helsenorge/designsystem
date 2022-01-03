import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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

      const error = await screen.findByText('Du må velge et alternativ');
      const error2 = await screen.findByText('Du må velge to alternativ');
      const errorSummary = screen.getByText('Sjekk at alt er riktig utfylt');

      expect(error).toBeVisible();
      expect(error.className).toBe('form-group-wrapper__errors');
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

      const error = await screen.findByText('Du må velge et alternativ');
      const error2 = await screen.findByText('Du må velge to alternativ');
      const errorSummary = screen.getByText('Sjekk at alt er riktig utfylt');

      expect(error).toBeVisible();
      expect(error2).toBeVisible();
      expect(errorSummary).toBeVisible();

      const checkbox1 = screen.getByLabelText('Checkbox 1');
      const checkbox4 = screen.getByLabelText('Checkbox 4');
      const checkbox5 = screen.getByLabelText('Checkbox 5');
      userEvent.click(checkbox1);
      userEvent.click(checkbox4);
      userEvent.click(checkbox5);

      userEvent.click(submit);

      await waitFor(() => {
        expect(error).not.toBeInTheDocument();
        expect(error2).not.toBeInTheDocument();
        expect(errorSummary).not.toBeInTheDocument();
      });
    });
  });
});