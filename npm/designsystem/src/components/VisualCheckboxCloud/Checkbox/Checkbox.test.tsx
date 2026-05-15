import { createRef } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import Checkbox from './Checkbox';

describe('Gitt at VisualCheckboxCloud.Checkbox vises', () => {
  describe('Når komponenten rendres uten props', () => {
    test('Så vises label og checkboksen er ikke checked', () => {
      render(<Checkbox>{'Et valg'}</Checkbox>);

      const checkbox = screen.getByRole('checkbox', { name: 'Et valg' });
      expect(checkbox).toBeVisible();
      expect(checkbox).not.toBeChecked();
    });
  });

  describe('Når defaultChecked er satt', () => {
    test('Så er checkboksen checked', () => {
      render(<Checkbox defaultChecked>{'Et valg'}</Checkbox>);

      expect(screen.getByRole('checkbox', { name: 'Et valg' })).toBeChecked();
    });
  });

  describe('Når brukeren klikker på pillen', () => {
    test('Så toggles checkboksen og onChange kalles', async () => {
      const onChange = vi.fn();
      render(<Checkbox onChange={onChange}>{'Et valg'}</Checkbox>);

      await userEvent.click(screen.getByText('Et valg'));

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(screen.getByRole('checkbox', { name: 'Et valg' })).toBeChecked();

      await userEvent.click(screen.getByText('Et valg'));

      expect(onChange).toHaveBeenCalledTimes(2);
      expect(screen.getByRole('checkbox', { name: 'Et valg' })).not.toBeChecked();
    });
  });

  describe('Når brukeren trykker på space', () => {
    test('Så toggles checkboksen', async () => {
      render(<Checkbox>{'Et valg'}</Checkbox>);

      const checkbox = screen.getByRole('checkbox', { name: 'Et valg' });
      checkbox.focus();
      await userEvent.keyboard(' ');

      expect(checkbox).toBeChecked();
    });
  });

  describe('Når komponenten er kontrollert', () => {
    test('Så følger komponenten checked propen på første render', () => {
      render(<Checkbox checked>{'Et valg'}</Checkbox>);

      expect(screen.getByRole('checkbox', { name: 'Et valg' })).toBeChecked();
    });

    test('Så oppdateres komponenten når checked propen endres', () => {
      const { rerender } = render(<Checkbox checked={false}>{'Et valg'}</Checkbox>);

      expect(screen.getByRole('checkbox', { name: 'Et valg' })).not.toBeChecked();

      rerender(<Checkbox checked>{'Et valg'}</Checkbox>);

      expect(screen.getByRole('checkbox', { name: 'Et valg' })).toBeChecked();
    });

    test('Så kan bruker fortsatt styre checked state ved å trykke', async () => {
      render(<Checkbox checked>{'Et valg'}</Checkbox>);

      const checkbox = screen.getByRole('checkbox', { name: 'Et valg' });
      expect(checkbox).toBeChecked();

      await userEvent.click(checkbox);

      expect(checkbox).not.toBeChecked();
    });
  });

  describe('Når disabled er satt', () => {
    test('Så kan ikke checkboksen toggles', async () => {
      const onChange = vi.fn();
      render(
        <Checkbox disabled onChange={onChange}>
          {'Et valg'}
        </Checkbox>
      );

      const checkbox = screen.getByRole('checkbox', { name: 'Et valg' });
      expect(checkbox).toBeDisabled();

      await userEvent.click(checkbox);

      expect(onChange).not.toHaveBeenCalled();
      expect(checkbox).not.toBeChecked();
    });
  });

  describe('Når name, value og required sendes inn', () => {
    test('Så videresendes de til input', () => {
      render(
        <Checkbox name={'kategori'} value={'allergi'} required>
          {'Allergi'}
        </Checkbox>
      );

      const checkbox = screen.getByRole('checkbox', { name: 'Allergi' });
      expect(checkbox).toHaveAttribute('name', 'kategori');
      expect(checkbox).toHaveAttribute('value', 'allergi');
      expect(checkbox).toBeRequired();
    });
  });

  describe('Når inputId er satt', () => {
    test('Så får input riktig id og label kobles via htmlFor', () => {
      render(<Checkbox inputId={'min-checkbox'}>{'Et valg'}</Checkbox>);

      const checkbox = screen.getByRole('checkbox', { name: 'Et valg' });
      expect(checkbox).toHaveAttribute('id', 'min-checkbox');
    });
  });

  describe('Når ref sendes inn', () => {
    test('Så peker den til input', () => {
      const ref = createRef<HTMLInputElement>();
      render(<Checkbox ref={ref}>{'Et valg'}</Checkbox>);

      expect(ref.current).toBe(screen.getByRole('checkbox', { name: 'Et valg' }));
    });
  });

  describe('Når onFocus og onBlur er satt', () => {
    test('Så kalles de når input får og mister fokus', async () => {
      const onFocus = vi.fn();
      const onBlur = vi.fn();
      render(
        <Checkbox onFocus={onFocus} onBlur={onBlur}>
          {'Et valg'}
        </Checkbox>
      );

      const checkbox = screen.getByRole('checkbox', { name: 'Et valg' });
      checkbox.focus();
      expect(onFocus).toHaveBeenCalledTimes(1);

      checkbox.blur();
      expect(onBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når aria-label er satt', () => {
    test('Så overstyrer den den synlige labelen som name', () => {
      render(<Checkbox aria-label={'Tilgjengelig navn'}>{'Synlig tekst'}</Checkbox>);

      expect(screen.getByRole('checkbox', { name: 'Tilgjengelig navn' })).toBeVisible();
    });
  });

  describe('Når errorText er satt', () => {
    test('Så vises feilmeldingen og input markeres som aria-invalid', () => {
      render(<Checkbox errorText={'Feilmelding her'}>{'Et valg'}</Checkbox>);

      expect(screen.getByText('Feilmelding her')).toBeVisible();
      const checkbox = screen.getByRole('checkbox', { name: 'Et valg' });
      expect(checkbox).toHaveAttribute('aria-invalid', 'true');
      expect(checkbox).toHaveAccessibleDescription('Feilmelding her');
    });
  });

  describe('Når errorTextId sendes inn', () => {
    test('Så bruker input den i aria-describedby', () => {
      render(
        <>
          <div id={'ekstern-error'}>{'Du må velge minst ett alternativ'}</div>
          <Checkbox error errorTextId={'ekstern-error'}>
            {'Et valg'}
          </Checkbox>
        </>
      );

      const checkbox = screen.getByRole('checkbox', { name: 'Et valg' });
      expect(checkbox).toHaveAccessibleDescription('Du må velge minst ett alternativ');
    });
  });

  describe('Når testId er satt', () => {
    test('Så finnes elementet via data-testid', () => {
      render(<Checkbox testId={'min-pill'}>{'Et valg'}</Checkbox>);

      expect(screen.getByTestId('min-pill')).toBeVisible();
    });
  });
});
