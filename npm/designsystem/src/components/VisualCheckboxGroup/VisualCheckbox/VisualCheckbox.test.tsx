import { createRef } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import VisualCheckbox from './VisualCheckbox';

describe('Gitt at VisualCheckboxGroup.VisualCheckbox vises', () => {
  describe('Når komponenten rendres uten props', () => {
    test('Så vises label og checkboksen er ikke checked', () => {
      render(<VisualCheckbox>{'Et valg'}</VisualCheckbox>);

      const checkbox = screen.getByRole('checkbox', { name: 'Et valg' });
      expect(checkbox).toBeVisible();
      expect(checkbox).not.toBeChecked();
    });
  });

  describe('Når defaultChecked er satt', () => {
    test('Så er checkboksen checked', () => {
      render(<VisualCheckbox defaultChecked>{'Et valg'}</VisualCheckbox>);

      expect(screen.getByRole('checkbox', { name: 'Et valg' })).toBeChecked();
    });
  });

  describe('Når brukeren klikker på rammen', () => {
    test('Så toggles checkboksen og onChange kalles', async () => {
      const onChange = vi.fn();
      render(<VisualCheckbox onChange={onChange}>{'Et valg'}</VisualCheckbox>);

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
      render(<VisualCheckbox>{'Et valg'}</VisualCheckbox>);

      const checkbox = screen.getByRole('checkbox', { name: 'Et valg' });
      checkbox.focus();
      await userEvent.keyboard(' ');

      expect(checkbox).toBeChecked();
    });
  });

  describe('Når komponenten er kontrollert', () => {
    test('Så følger komponenten checked propen på første render', () => {
      render(<VisualCheckbox checked>{'Et valg'}</VisualCheckbox>);

      expect(screen.getByRole('checkbox', { name: 'Et valg' })).toBeChecked();
    });

    test('Så oppdateres komponenten når checked propen endres', () => {
      const { rerender } = render(<VisualCheckbox checked={false}>{'Et valg'}</VisualCheckbox>);

      expect(screen.getByRole('checkbox', { name: 'Et valg' })).not.toBeChecked();

      rerender(<VisualCheckbox checked>{'Et valg'}</VisualCheckbox>);

      expect(screen.getByRole('checkbox', { name: 'Et valg' })).toBeChecked();
    });

    test('Så kan bruker fortsatt styre checked state ved å trykke', async () => {
      render(<VisualCheckbox checked>{'Et valg'}</VisualCheckbox>);

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
        <VisualCheckbox disabled onChange={onChange}>
          {'Et valg'}
        </VisualCheckbox>
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
        <VisualCheckbox name={'kategori'} value={'allergi'} required>
          {'Allergi'}
        </VisualCheckbox>
      );

      const checkbox = screen.getByRole('checkbox', { name: 'Allergi' });
      expect(checkbox).toHaveAttribute('name', 'kategori');
      expect(checkbox).toHaveAttribute('value', 'allergi');
      expect(checkbox).toBeRequired();
    });
  });

  describe('Når inputId er satt', () => {
    test('Så får input riktig id og label kobles via htmlFor', () => {
      render(<VisualCheckbox inputId={'min-checkbox'}>{'Et valg'}</VisualCheckbox>);

      const checkbox = screen.getByRole('checkbox', { name: 'Et valg' });
      expect(checkbox).toHaveAttribute('id', 'min-checkbox');
    });
  });

  describe('Når ref sendes inn', () => {
    test('Så peker den til input', () => {
      const ref = createRef<HTMLInputElement>();
      render(<VisualCheckbox ref={ref}>{'Et valg'}</VisualCheckbox>);

      expect(ref.current).toBe(screen.getByRole('checkbox', { name: 'Et valg' }));
    });
  });

  describe('Når onFocus og onBlur er satt', () => {
    test('Så kalles de når input får og mister fokus', async () => {
      const onFocus = vi.fn();
      const onBlur = vi.fn();
      render(
        <VisualCheckbox onFocus={onFocus} onBlur={onBlur}>
          {'Et valg'}
        </VisualCheckbox>
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
      render(<VisualCheckbox aria-label={'Tilgjengelig navn'}>{'Synlig tekst'}</VisualCheckbox>);

      expect(screen.getByRole('checkbox', { name: 'Tilgjengelig navn' })).toBeVisible();
    });
  });

  describe('Når errorText er satt', () => {
    test('Så vises feilmeldingen og input markeres som aria-invalid', () => {
      render(<VisualCheckbox errorText={'Feilmelding her'}>{'Et valg'}</VisualCheckbox>);

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
          <VisualCheckbox error errorTextId={'ekstern-error'}>
            {'Et valg'}
          </VisualCheckbox>
        </>
      );

      const checkbox = screen.getByRole('checkbox', { name: 'Et valg' });
      expect(checkbox).toHaveAccessibleDescription('Du må velge minst ett alternativ');
    });
  });

  describe('Når testId er satt', () => {
    test('Så finnes elementet via data-testid', () => {
      render(<VisualCheckbox testId={'min-frame'}>{'Et valg'}</VisualCheckbox>);

      expect(screen.getByTestId('min-frame')).toBeVisible();
    });
  });

  describe('Når error er satt uten errorText', () => {
    test('Så markeres input som aria-invalid uten at det rendres feilmelding', () => {
      render(<VisualCheckbox error>{'Et valg'}</VisualCheckbox>);

      const checkbox = screen.getByRole('checkbox', { name: 'Et valg' });
      expect(checkbox).toHaveAttribute('aria-invalid', 'true');
      expect(screen.queryByText('Feilmelding her')).not.toBeInTheDocument();
    });
  });

  describe('Når både checked og defaultChecked er satt', () => {
    test('Så vinner checked-propen på første render', () => {
      render(
        <VisualCheckbox checked={false} defaultChecked>
          {'Et valg'}
        </VisualCheckbox>
      );

      expect(screen.getByRole('checkbox', { name: 'Et valg' })).not.toBeChecked();
    });
  });

  describe('Når visualContent er satt', () => {
    test('Så rendres innholdet inne i checkboksen', () => {
      render(<VisualCheckbox visualContent={<span data-testid={'mitt-visuelle-innhold'}>{'Ikon'}</span>}>{'Et valg'}</VisualCheckbox>);

      expect(screen.getByTestId('mitt-visuelle-innhold')).toBeVisible();
      expect(screen.getByTestId('mitt-visuelle-innhold')).toHaveTextContent('Ikon');
    });
  });
});
