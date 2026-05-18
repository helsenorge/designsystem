import { createRef } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import RadioButton from './RadioButton';

describe('Gitt at VisualRadioButtonCloud.RadioButton vises', () => {
  describe('Når komponenten rendres uten props', () => {
    test('Så vises label-teksten og radioknappen er ikke valgt', () => {
      render(
        <RadioButton value={'a'} name={'g'}>
          {'Et valg'}
        </RadioButton>
      );

      const radio = screen.getByRole('radio', { name: 'Et valg' });
      expect(radio).toBeVisible();
      expect(radio).not.toBeChecked();
    });
  });

  describe('Når defaultChecked er satt', () => {
    test('Så er radioknappen valgt ved første render', () => {
      render(
        <RadioButton value={'a'} name={'g'} defaultChecked>
          {'Et valg'}
        </RadioButton>
      );

      expect(screen.getByRole('radio', { name: 'Et valg' })).toBeChecked();
    });
  });

  describe('Når brukeren klikker på pillen', () => {
    test('Så velges radioknappen og onChange kalles', async () => {
      const onChange = vi.fn();
      render(
        <RadioButton value={'a'} name={'g'} onChange={onChange}>
          {'Et valg'}
        </RadioButton>
      );

      await userEvent.click(screen.getByText('Et valg'));

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(screen.getByRole('radio', { name: 'Et valg' })).toBeChecked();
    });
  });

  describe('Når brukeren bruker mellomromstasten', () => {
    test('Så velges radioknappen', async () => {
      render(
        <RadioButton value={'a'} name={'g'}>
          {'Et valg'}
        </RadioButton>
      );

      const radio = screen.getByRole('radio', { name: 'Et valg' });
      radio.focus();
      await userEvent.keyboard(' ');

      expect(radio).toBeChecked();
    });
  });

  describe('Når komponenten er kontrollert', () => {
    test('Så følger komponenten checked propen på første render', () => {
      render(
        <RadioButton value={'a'} name={'g'} checked>
          {'Et valg'}
        </RadioButton>
      );

      expect(screen.getByRole('radio', { name: 'Et valg' })).toBeChecked();
    });

    test('Så oppdateres komponenten når checked propen endres', () => {
      const { rerender } = render(
        <RadioButton value={'a'} name={'g'} checked={false}>
          {'Et valg'}
        </RadioButton>
      );

      expect(screen.getByRole('radio', { name: 'Et valg' })).not.toBeChecked();

      rerender(
        <RadioButton value={'a'} name={'g'} checked>
          {'Et valg'}
        </RadioButton>
      );

      expect(screen.getByRole('radio', { name: 'Et valg' })).toBeChecked();
    });
  });

  describe('Når disabled er satt', () => {
    test('Så kan ikke radioknappen velges', async () => {
      const onChange = vi.fn();
      render(
        <RadioButton value={'a'} name={'g'} disabled onChange={onChange}>
          {'Et valg'}
        </RadioButton>
      );

      const radio = screen.getByRole('radio', { name: 'Et valg' });
      expect(radio).toBeDisabled();

      await userEvent.click(radio);

      expect(onChange).not.toHaveBeenCalled();
      expect(radio).not.toBeChecked();
    });
  });

  describe('Når name, value og required sendes inn', () => {
    test('Så videresendes de til input-elementet', () => {
      render(
        <RadioButton value={'allergi'} name={'kategori'} required>
          {'Allergi'}
        </RadioButton>
      );

      const radio = screen.getByRole('radio', { name: 'Allergi' });
      expect(radio).toHaveAttribute('name', 'kategori');
      expect(radio).toHaveAttribute('value', 'allergi');
      expect(radio).toBeRequired();
    });
  });

  describe('Når inputId er satt', () => {
    test('Så får input riktig id', () => {
      render(
        <RadioButton value={'a'} name={'g'} inputId={'min-radio'}>
          {'Et valg'}
        </RadioButton>
      );

      expect(screen.getByRole('radio', { name: 'Et valg' })).toHaveAttribute('id', 'min-radio');
    });
  });

  describe('Når ref sendes inn', () => {
    test('Så peker den til input-elementet', () => {
      const ref = createRef<HTMLInputElement>();
      render(
        <RadioButton value={'a'} name={'g'} ref={ref}>
          {'Et valg'}
        </RadioButton>
      );

      expect(ref.current).toBe(screen.getByRole('radio', { name: 'Et valg' }));
    });
  });

  describe('Når onFocus og onBlur er satt', () => {
    test('Så kalles de når input får og mister fokus', () => {
      const onFocus = vi.fn();
      const onBlur = vi.fn();
      render(
        <RadioButton value={'a'} name={'g'} onFocus={onFocus} onBlur={onBlur}>
          {'Et valg'}
        </RadioButton>
      );

      const radio = screen.getByRole('radio', { name: 'Et valg' });
      radio.focus();
      expect(onFocus).toHaveBeenCalledTimes(1);

      radio.blur();
      expect(onBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når aria-label er satt', () => {
    test('Så overstyrer den den synlige labelen som tilgjengelig navn', () => {
      render(
        <RadioButton value={'a'} name={'g'} aria-label={'Tilgjengelig navn'}>
          {'Synlig tekst'}
        </RadioButton>
      );

      expect(screen.getByRole('radio', { name: 'Tilgjengelig navn' })).toBeVisible();
    });
  });

  describe('Når errorText er satt', () => {
    test('Så vises feilmeldingen og er koblet til input via aria-describedby', () => {
      render(
        <RadioButton value={'a'} name={'g'} errorText={'Feilmelding her'}>
          {'Et valg'}
        </RadioButton>
      );

      expect(screen.getByText('Feilmelding her')).toBeVisible();
      expect(screen.getByRole('radio', { name: 'Et valg' })).toHaveAccessibleDescription('Feilmelding her');
    });
  });

  describe('Når error=true uten errorText', () => {
    test('Så vises ingen feilmelding men feil-styling aktiveres uten å sette aria-invalid', () => {
      render(
        <RadioButton value={'a'} name={'g'} error>
          {'Et valg'}
        </RadioButton>
      );

      expect(screen.getByRole('radio', { name: 'Et valg' })).not.toHaveAttribute('aria-invalid');
    });
  });

  describe('Når errorTextId sendes inn fra parent', () => {
    test('Så bruker input den i aria-describedby', () => {
      render(
        <>
          <div id={'ekstern-error'}>{'Du må velge et alternativ'}</div>
          <RadioButton value={'a'} name={'g'} error errorTextId={'ekstern-error'}>
            {'Et valg'}
          </RadioButton>
        </>
      );

      expect(screen.getByRole('radio', { name: 'Et valg' })).toHaveAccessibleDescription('Du må velge et alternativ');
    });
  });

  describe('Når testId er satt', () => {
    test('Så finnes elementet via data-testid', () => {
      render(
        <RadioButton value={'a'} name={'g'} testId={'min-pill'}>
          {'Et valg'}
        </RadioButton>
      );

      expect(screen.getByTestId('min-pill')).toBeVisible();
    });
  });
});
