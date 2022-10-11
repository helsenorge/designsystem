import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Textarea from './Textarea';
import { FormMode } from '../../constants';

describe('Gitt at Textarea skal vises', (): void => {
  describe('Når Textarea rendres', (): void => {
    test('Så vises Textarea', (): void => {
      const { container } = render(<Textarea label={'Skriv din historie'} />);

      expect(container).toMatchSnapshot();

      const label = screen.getByText('Skriv din historie');
      expect(label).toBeVisible();

      const input = screen.getByRole('textbox');
      expect(input).toBeVisible();
      expect(input.className).toBe('content-wrapper__input');
    });
  });

  describe('Når disabled er true', (): void => {
    test('Så vises Checkbox som disabled', (): void => {
      render(<Textarea label={'Check me out!'} disabled />);

      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
    });
  });

  describe('Når FormMode er onblueberry', (): void => {
    test('Så vises Textarea med onblueberry styling', (): void => {
      render(<Textarea label={'Check me out!'} mode={FormMode.onblueberry} />);

      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper.className).toBe('content-wrapper content-wrapper--on-blueberry');
    });
  });
  describe('Når mode er ondark', (): void => {
    test('Så vises Textarea med ondark styling', (): void => {
      render(<Textarea label={'Check me out!'} mode={FormMode.ondark} />);

      const contentWrapper = screen.getByRole('textbox').parentElement;
      expect(contentWrapper.className).toBe('content-wrapper content-wrapper--on-dark');
    });
  });

  describe('Når textarea endres med ny tekst og antall tegn skal vises', (): void => {
    test('Så endres teksten og antall tegn', (): void => {
      render(<Textarea label={'Skriv din historie her'} maxCharacters={50} />);

      const textarea1 = screen.getByLabelText('Skriv din historie her');

      expect(screen.getByText('0/50 tegn')).toBeVisible();

      fireEvent.change(textarea1, { target: { value: 'Jeg tester teksten her.' } });

      const input = screen.getByRole('textbox');

      expect(input).toHaveValue('Jeg tester teksten her.');
      expect(screen.getByText('23/50 tegn')).toBeVisible();
    });
  });

  describe('Når textarea har en default value', (): void => {
    test('Så skal default verdien vises', (): void => {
      render(<Textarea label={'Skriv din historie her'} defaultValue="Min historie" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveValue('Min historie');
    });
  });

  describe('Når textarea har en placeholder value', (): void => {
    test('Så skal placeholder verdien vises', (): void => {
      render(<Textarea label={'Skriv din historie her'} placeholder="Fin placeholder" />);
      const input = screen.getByPlaceholderText('Fin placeholder');
      expect(input).toBeVisible();
    });
  });

  describe('Når textarea har en gått over maksgrensen', (): void => {
    test('Så skal textarea vise at input er ugyldig', (): void => {
      render(<Textarea label={'Skriv din historie her'} grow maxCharacters={10} />);

      const textarea1 = screen.getByLabelText('Skriv din historie her');

      expect(screen.getByText('0/10 tegn')).toBeVisible();

      fireEvent.change(textarea1, { target: { value: 'Jeg tester teksten her.' } });

      expect(screen.getByText('23/10 tegn')).toBeVisible();

      const contentWrapper = screen.getByRole('textbox').parentElement;

      expect(contentWrapper.className).toEqual('content-wrapper content-wrapper--invalid');
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
      render(<Textarea label="En fin label" autoFocus />);

      const textarea = screen.getByLabelText('En fin label');
      expect(textarea).toHaveFocus();
    });
  });

  describe('Når disabled er satt', (): void => {
    test('Så er textarea disabled', (): void => {
      render(<Textarea label="En fin label" disabled />);

      const textarea = screen.getByLabelText('En fin label');
      expect(textarea).toBeDisabled();
    });
  });

  describe('Når readOnly er satt', (): void => {
    test('Så er textarea readOnly', (): void => {
      render(<Textarea label="En fin label" readOnly />);

      const textarea = screen.getByLabelText('En fin label');
      expect(textarea).toHaveAttribute('readonly', '');
    });
  });

  describe('Når autoComplete er satt til on', (): void => {
    test('Så har textarea autoComplete=on', (): void => {
      render(<Textarea label="En fin label" autoComplete="on" />);

      const textarea = screen.getByLabelText('En fin label');
      expect(textarea).toHaveAttribute('autoComplete', 'on');
    });
  });

  describe('Når name-prop er satt', (): void => {
    test('Så har textarea riktig name', (): void => {
      render(<Textarea label="En fin label" name="custom-name" />);

      const textarea = screen.getByLabelText('En fin label');
      expect(textarea).toHaveAttribute('name', 'custom-name');
    });
  });

  describe('Når placeholder-prop er satt', (): void => {
    test('Så har textarea riktig placeholder', (): void => {
      render(<Textarea label="En fin label" placeholder="custom-placeholder" />);

      const textarea = screen.getByPlaceholderText('custom-placeholder');
      expect(textarea).toBeVisible();
    });
  });

  describe('Når defaultValue-prop er satt', (): void => {
    test('Så har textarea riktig value', (): void => {
      render(<Textarea label="En fin label" defaultValue="custom-value" />);

      const textarea = screen.getByLabelText('En fin label');
      expect(textarea).toHaveValue('custom-value');
    });
  });

  describe('Når required er satt', (): void => {
    test('Så er textarea required', (): void => {
      render(<Textarea label="En fin label" required />);

      const textarea = screen.getByLabelText('En fin label');
      expect(textarea).toBeRequired();
    });
  });
});
