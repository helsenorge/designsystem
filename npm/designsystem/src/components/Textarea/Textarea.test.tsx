import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Textarea from './Textarea';
import { FormOnColor } from '../../constants';
import Label from '../Label';

describe('Gitt at Textarea skal vises', (): void => {
  describe('Når Textarea rendres', (): void => {
    test('Så vises Textarea', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'Skriv din historie' }]} />} />);

      const label = screen.getByText('Skriv din historie');
      expect(label).toBeVisible();

      const input = screen.getByRole('textbox');
      expect(input).toBeVisible();
      expect(input.className).toBe('input-container__input');
    });
  });

  describe('Når disabled er true', (): void => {
    test('Så vises Textarea som disabled', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'Skriv din historie' }]} />} disabled />);

      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
    });
  });

  describe('Når onColor er onblueberry', (): void => {
    test('Så vises Textarea med onblueberry styling', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'Skriv din historie' }]} />} onColor={FormOnColor.onblueberry} />);

      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper?.className).toBe('input-container input-container--on-blueberry');
    });
  });
  describe('Når onColor er ondark', (): void => {
    test('Så vises Textarea med ondark styling', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'Skriv din historie' }]} />} onColor={FormOnColor.ondark} />);

      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper?.className).toBe('input-container input-container--on-dark');
    });
  });

  describe('Når textarea har en default value', (): void => {
    test('Så skal default verdien vises', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'Skriv din historie' }]} />} defaultValue="Min historie" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveValue('Min historie');
    });
  });

  describe('Når textarea har en placeholder value', (): void => {
    test('Så skal placeholder verdien vises', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'Skriv din historie' }]} />} placeholder="Fin placeholder" />);
      const input = screen.getByPlaceholderText('Fin placeholder');
      expect(input).toBeVisible();
    });
  });

  describe('Når textarea skal vises med custom textareaId', (): void => {
    test('Så har textarea id-en', (): void => {
      render(<Textarea textareaId="testing" />);

      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('id', 'testing');
    });
  });

  describe('Når autoFocus er satt', (): void => {
    test('Så er textarea focus', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'En fin label' }]} />} autoFocus />);

      const textarea = screen.getByLabelText('En fin label');
      expect(textarea).toHaveFocus();
    });
  });

  describe('Når disabled er satt', (): void => {
    test('Så er textarea disabled', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'En fin label' }]} />} disabled />);

      const textarea = screen.getByLabelText('En fin label');
      expect(textarea).toBeDisabled();
    });
  });

  describe('Når readOnly er satt', (): void => {
    test('Så er textarea readOnly', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'En fin label' }]} />} readOnly />);

      const textarea = screen.getByLabelText('En fin label');
      expect(textarea).toHaveAttribute('readonly', '');
    });
  });
  describe('Når autocomplete ikke er satt', (): void => {
    test('Så er autocomplete=off', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'En fin label' }]} />} />);

      const textarea = screen.getByLabelText('En fin label');

      expect(textarea).toHaveAttribute('autocomplete', 'off');
    });
  });

  describe('Når autocomplete er satt', (): void => {
    test('Så er autocomplete riktig verdi', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'En fin label' }]} />} autoComplete="name" />);

      const textarea = screen.getByLabelText('En fin label');

      expect(textarea).toHaveAttribute('autocomplete', 'name');
    });
  });

  describe('Når name-prop er satt', (): void => {
    test('Så har textarea riktig name', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'En fin label' }]} />} name="custom-name" />);

      const textarea = screen.getByLabelText('En fin label');
      expect(textarea).toHaveAttribute('name', 'custom-name');
    });
  });

  describe('Når placeholder-prop er satt', (): void => {
    test('Så har textarea riktig placeholder', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'En fin label' }]} />} placeholder="custom-placeholder" />);

      const textarea = screen.getByPlaceholderText('custom-placeholder');
      expect(textarea).toBeVisible();
    });
  });

  describe('Når defaultValue-prop er satt', (): void => {
    test('Så har textarea riktig value', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'En fin label' }]} />} defaultValue="custom-value" />);

      const textarea = screen.getByLabelText('En fin label');
      expect(textarea).toHaveValue('custom-value');
    });
  });

  describe('Når required er satt', (): void => {
    test('Så er textarea required', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'En fin label' }]} />} required />);

      const textarea = screen.getByLabelText('En fin label');
      expect(textarea).toBeRequired();
    });
  });

  describe('Når antall tegn skal vises', (): void => {
    describe('Når man skriver', (): void => {
      test('Så endres teksten og antall tegn', async (): Promise<void> => {
        render(<Textarea label={<Label labelTexts={[{ text: 'Skriv din historie her' }]} />} maxCharacters={50} />);

        const input = screen.getByLabelText('Skriv din historie her');

        expect(screen.getByText('0/50 tegn')).toBeVisible();

        await userEvent.type(input, 'Jeg tester teksten her.');

        expect(input).toHaveValue('Jeg tester teksten her.');
        expect(screen.getByText('23/50 tegn')).toBeVisible();
      });
    });

    describe('Når man skriver for mange tegn', (): void => {
      test('Så indikeres det at input er ugyldig', async (): Promise<void> => {
        render(<Textarea label={<Label labelTexts={[{ text: 'Skriv din historie her' }]} />} maxCharacters={10} />);

        const input = screen.getByLabelText('Skriv din historie her');

        expect(screen.getByText('0/10 tegn')).toBeVisible();

        await userEvent.type(input, 'Jeg tester teksten her.');

        expect(input).toHaveValue('Jeg tester teksten her.');
        expect(screen.getByText('23/10 tegn')).toBeVisible();
        expect(input).toHaveAttribute('aria-invalid', 'true');
      });
    });

    describe('Når defaultValue endres', (): void => {
      test('Så oppdateres antall tegn', (): void => {
        const { rerender } = render(<Textarea label={'Skriv din historie her'} maxCharacters={10} />);

        expect(screen.getByText('0/10 tegn')).toBeVisible();

        rerender(<Textarea label={'Skriv din historie her'} maxCharacters={10} defaultValue={'foo'} />);

        expect(screen.getByText('3/10 tegn')).toBeVisible();

        const input = screen.getByLabelText('Skriv din historie her');
        expect(input).toHaveValue('foo');
      });
    });
  });

  describe('Når Textarea har en error', (): void => {
    test('Så skal invalid styling brukes', (): void => {
      render(<Textarea label={'Skriv noe'} error />);
      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper).toHaveClass('input-container input-container--invalid');
    });
  });

  describe('Når Textarea har en feilmelding', (): void => {
    test('Så er feilmelding knyttet sammen med inputfeltet', (): void => {
      render(<Textarea label={'Navn'} textareaId="navn" errorText="Navn må fylles ut" />);

      const input = screen.getByLabelText('Navn');

      expect(input).toHaveAccessibleDescription('Navn må fylles ut');
    });
  });
});
