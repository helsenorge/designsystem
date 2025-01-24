import React, { useEffect, useRef, useState } from 'react';

import { render, screen, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ValidationErrors } from './types';
import Validation from './Validation';
import { FormExample, FormExampleVariants } from '../../docs/FormExample';
import Input from '../Input';

describe('Gitt at Validation skal vises', () => {
  describe('Når Validation rendres', () => {
    test('Så vises tomt felt for oppsummering av feil', () => {
      render(<Validation />);

      const status = screen.getByRole('status');
      expect(status).toBeVisible();
      expect(status).toBeEmptyDOMElement();
    });
  });

  describe('Når Validation har errorTitle og errors', () => {
    test('Så vises oppsummering av feil i en status', () => {
      render(<Validation errorTitle="Du må fikse dette:" errors={{ feil1: { message: 'For lang tekst' } }} />);

      const status = screen.getByRole('status', { name: 'Du må fikse dette:' });
      expect(status).toBeVisible();

      const errorMessage = within(status).getByText('For lang tekst');
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

      const status = screen.getByRole('status', { name: 'Du må fikse dette:' });
      expect(status).toBeVisible();

      const errorMessage = await within(status).findByRole('link', { name: 'For lang tekst' });
      expect(errorMessage).toBeVisible();
      expect(errorMessage).toHaveAttribute('href', '#feil1');
    });
  });

  describe('Når Validation har errorTitle og errors der message er JSX', () => {
    test('Så vises oppsummering av feil i en status med JSX children', async () => {
      render(<Validation errorTitle="Du må fikse dette:" errors={{ feil1: { message: <a href="/feilmelding">{'Feilmelding'}</a> } }} />);

      const status = screen.getByRole('status', { name: 'Du må fikse dette:' });
      expect(status).toBeVisible();

      const errorMessage = await within(status).findByRole('link', { name: 'Feilmelding' });
      expect(errorMessage).toBeVisible();
      expect(errorMessage).toHaveAttribute('href', '/feilmelding');
    });
  });

  describe('Når Validation har errorTitle og errors', () => {
    test('Så vises all teksten i en status', () => {
      render(<Validation errorTitle="Du må fikse dette:" errors={{ feil1: { message: 'For lang tekst' } }} />);

      const status = screen.getByRole('status', { name: 'Du må fikse dette:' });
      expect(status).toBeVisible();

      const errorMessage = within(status).getByText('For lang tekst');
      expect(errorMessage).toBeVisible();
    });
  });

  describe('Når Validation har errorTitle, men ingen errors', () => {
    test('Så vises tomt felt for oppsummering av feil', () => {
      render(<Validation errorTitle="Du må fikse dette:" />);

      const status = screen.getByRole('status');
      expect(status).toBeVisible();
      expect(status).toBeEmptyDOMElement();
    });
  });

  describe('Når Validation inneholder skjema', () => {
    describe('Når Validation rendres', () => {
      test('Så vises den riktig', () => {
        render(<FormExample exampleType={FormExampleVariants.formgroup} />);

        const validation = screen.getByText('FormGroup-tittel').parentElement?.parentElement;
        expect(validation?.className).toBe('');
      });
    });

    describe('Når Validation rendres med children', () => {
      test('Så vises children', () => {
        render(<FormExample exampleType={FormExampleVariants.formgroup} />);

        const formGroup = screen.getByText('FormGroup-tittel').parentElement;
        expect(formGroup).toBeVisible();
      });
    });

    describe('Når Submit knapp trykkes på', () => {
      test('Så vises error', async () => {
        render(<FormExample exampleType={FormExampleVariants.formgroup} />);

        const submit = screen.getByText('Send inn');

        await userEvent.click(submit);

        const checkbox1 = screen.getByLabelText('Blueberry');
        expect(checkbox1).toHaveAccessibleDescription('Du må velge minst én farge');
        const checkbox4 = screen.getByLabelText('Small');
        expect(checkbox4).toHaveAccessibleDescription('Du må velge minst to størrelser');

        const errorSummary = screen.getByRole('status');
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

        const errorSummary = screen.getByRole('status');

        expect(errorSummary.className).toBe('validation__summary validation__summary--visible');
      });
    });

    describe('Når validation krav blir møtt', () => {
      test('Så fjernes error', async () => {
        render(<FormExample exampleType={FormExampleVariants.formgroup} />);

        const submit = screen.getByText('Send inn');

        await userEvent.click(submit);

        const blueberry = screen.getByLabelText('Blueberry');
        expect(blueberry).toHaveAccessibleDescription('Du må velge minst én farge');
        const cherry = screen.getByLabelText('Cherry');
        expect(cherry).toHaveAccessibleDescription('Du må velge minst én farge');
        const neutral = screen.getByLabelText('Neutral');
        expect(neutral).toHaveAccessibleDescription('Du må velge minst én farge');

        const small = screen.getByLabelText('Small');
        expect(small).toHaveAccessibleDescription('Du må velge minst to størrelser');
        const medium = screen.getByLabelText('Medium');
        expect(medium).toHaveAccessibleDescription('Du må velge minst to størrelser');
        const large = screen.getByLabelText('Large');
        expect(large).toHaveAccessibleDescription('Du må velge minst to størrelser');

        const left = screen.getByLabelText('Venstre');
        expect(left).toHaveAccessibleDescription('Du må velge minst én plassering');
        const right = screen.getByLabelText('Høyre');
        expect(right).toHaveAccessibleDescription('Du må velge minst én plassering');
        const center = screen.getByLabelText('Midten');
        expect(center).toHaveAccessibleDescription('Du må velge minst én plassering');

        const story = screen.getByLabelText('Historie');
        expect(story).toHaveAccessibleDescription('Historien må være på maks 40 tegn');

        const name = screen.getByLabelText('Navn');
        expect(name).toHaveAccessibleDescription('Navn må fylles ut');

        const monster = screen.getByLabelText('Velg et monster');
        expect(monster).toHaveAccessibleDescription('Du må velge "Frankenstein"');

        const errorSummary = screen.getByRole('status');
        expect(errorSummary).toBeVisible();
        expect(errorSummary).toHaveTextContent('Sjekk at alt er riktig utfylt');

        await userEvent.click(blueberry);
        await userEvent.click(small);
        await userEvent.click(medium);
        await userEvent.click(left);
        fireEvent.change(story, { target: { value: 'Endring.' } });
        fireEvent.change(name, { target: { value: 'Ny tekst' } });
        await userEvent.selectOptions(monster, 'Frankenstein');

        await userEvent.click(submit);

        expect(blueberry).toHaveAccessibleDescription('');
        expect(cherry).toHaveAccessibleDescription('');
        expect(neutral).toHaveAccessibleDescription('');
        expect(small).toHaveAccessibleDescription('');
        expect(medium).toHaveAccessibleDescription('');
        expect(large).toHaveAccessibleDescription('');
        expect(left).toHaveAccessibleDescription('');
        expect(right).toHaveAccessibleDescription('');
        expect(center).toHaveAccessibleDescription('');
        expect(story).toHaveAccessibleDescription('');
        expect(name).toHaveAccessibleDescription('');
        expect(monster).toHaveAccessibleDescription('');
        expect(errorSummary).toBeEmptyDOMElement();
        expect(errorSummary.className).toBe('validation__summary');
      });
    });
  });
});
