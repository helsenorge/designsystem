import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Textarea from './Textarea';
import { FormMode } from '../../constants';
import Label from '../Label';

describe('Gitt at Textarea skal vises', (): void => {
  describe('Når Textarea rendres', (): void => {
    test('Så vises Textarea', (): void => {
      const { container } = render(<Textarea label={<Label labelTexts={[{ text: 'Skriv din historie' }]} />} />);

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

  describe('Når FormMode er onblueberry', (): void => {
    test('Så vises Textarea med onblueberry styling', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'Skriv din historie' }]} />} mode={FormMode.onblueberry} />);

      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper?.className).toBe('input-container input-container--on-blueberry');
    });
  });
  describe('Når mode er ondark', (): void => {
    test('Så vises Textarea med ondark styling', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'Skriv din historie' }]} />} mode={FormMode.ondark} />);

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

  describe('Når autoComplete er satt til on', (): void => {
    test('Så har textarea autoComplete=on', (): void => {
      render(<Textarea label={<Label labelTexts={[{ text: 'En fin label' }]} />} autoComplete="on" />);

      const textarea = screen.getByLabelText('En fin label');
      expect(textarea).toHaveAttribute('autoComplete', 'on');
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
  });
});
