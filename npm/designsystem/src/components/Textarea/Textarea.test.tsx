import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Textarea from './Textarea';
import { FormMode } from '../../constants';

import * as uuidUtils from '../../utils/uuid';
jest.spyOn(uuidUtils, 'uuid').mockReturnValue(`-unik-id`);

describe('Gitt at Checkbox skal vises', (): void => {
  describe('Når Textarea rendres', (): void => {
    test('Så vises Textarea', (): void => {
      const { container } = render(<Textarea label={'Skriv din historie'} />);

      expect(container).toMatchSnapshot();

      const label = screen.getByText('Skriv din historie');
      expect(label).toBeVisible();

      const input = screen.getByRole('textbox');
      expect(input).toBeVisible();
      expect(input.className).toBe('textarea__input');
    });
  });

  describe('Når disabled er true', (): void => {
    test('Så vises Checkbox som disabled', (): void => {
      render(<Textarea label={'Check me out!'} disabled />);

      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('disabled');
    });
  });

  describe('Når FormMode er onBlueberry', (): void => {
    test('Så vises Textarea med onBlueberry styling', (): void => {
      render(<Textarea label={'Check me out!'} mode={FormMode.onBlueberry} />);

      const input = screen.getByRole('textbox');
      expect(input.className).toBe('textarea__input textarea__input--onBlueberry');
    });
  });
  describe('Når mode er onDark', (): void => {
    test('Så vises Textarea med onDark styling', (): void => {
      render(<Textarea label={'Check me out!'} mode={FormMode.onDark} />);

      const input = screen.getByRole('textbox');
      expect(input.className).toBe('textarea__input textarea__input--onDark');
    });
  });

  describe('Når textarea endres med ny tekst og antall tegn skal vises', (): void => {
    test('Så endres teksten og antall tegn', (): void => {
      render(<Textarea label={'Skriv din historie her'} max={50} />);

      const textarea1 = screen.getByLabelText('Skriv din historie her');

      expect(screen.getByText('0/50 tegn')).toBeVisible();

      fireEvent.change(textarea1, {target: {value: 'Jeg tester teksten her.'}})

      const input = screen.getByRole('textbox');

      expect(input).toHaveValue('Jeg tester teksten her.');
      expect(screen.getByText('23/50 tegn')).toBeVisible();
    });
  });

  describe('Når textarea har en default value', (): void => {
    test('Så skal default verdien vises', (): void => {
      render(<Textarea label={'Skriv din historie her'} defaultValue='Min historie' />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveValue('Min historie');
    });
  });

  describe('Når textarea har en placeholder value', (): void => {
    test('Så skal placeholder verdien vises', (): void => {
      render(<Textarea label={'Skriv din historie her'} placeholder='Fin placeholder' />);
      const input = screen.getByPlaceholderText('Fin placeholder');
      expect(input).toBeVisible();
    });
  });

  describe('Når textarea har en gått over maksgrensen', (): void => {
    test('Så skal textarea vise at input er ugyldig', (): void => {
      render(<Textarea label={'Skriv din historie her'} grow max={10} />);

      const textarea1 = screen.getByLabelText('Skriv din historie her');

      expect(screen.getByText('0/10 tegn')).toBeVisible();

      fireEvent.change(textarea1, {target: {value: 'Jeg tester teksten her.'}})

      expect(screen.getByText('23/10 tegn')).toBeVisible();
      
      const input = screen.getByRole('textbox');

      expect(input.className).toEqual('textarea__input textarea__input--invalid');
    });
  });
});
