import { createRef } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import VisualRadio from './VisualRadio';

describe('Gitt at VisualRadioGroup.VisualRadio vises', () => {
  describe('Når komponenten rendres uten props', () => {
    test('Så vises label og radioen er ikke checked', () => {
      render(<VisualRadio>{'Et valg'}</VisualRadio>);

      const radio = screen.getByRole('radio', { name: 'Et valg' });
      expect(radio).toBeVisible();
      expect(radio).not.toBeChecked();
    });
  });

  describe('Når defaultChecked er satt', () => {
    test('Så er radioen checked', () => {
      render(<VisualRadio defaultChecked>{'Et valg'}</VisualRadio>);

      expect(screen.getByRole('radio', { name: 'Et valg' })).toBeChecked();
    });
  });

  describe('Når brukeren klikker på rammen', () => {
    test('Så blir radioen checked og onChange kalles', async () => {
      const onChange = vi.fn();
      render(<VisualRadio onChange={onChange}>{'Et valg'}</VisualRadio>);

      await userEvent.click(screen.getByText('Et valg'));

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(screen.getByRole('radio', { name: 'Et valg' })).toBeChecked();
    });
  });

  describe('Når brukeren trykker på space', () => {
    test('Så blir radioen checked', async () => {
      render(<VisualRadio>{'Et valg'}</VisualRadio>);

      const radio = screen.getByRole('radio', { name: 'Et valg' });
      radio.focus();
      await userEvent.keyboard(' ');

      expect(radio).toBeChecked();
    });
  });

  describe('Når komponenten er kontrollert', () => {
    test('Så følger komponenten checked propen på første render', () => {
      render(
        <VisualRadio checked onChange={(): void => undefined}>
          {'Et valg'}
        </VisualRadio>
      );

      expect(screen.getByRole('radio', { name: 'Et valg' })).toBeChecked();
    });

    test('Så oppdateres komponenten når checked propen endres', () => {
      const { rerender } = render(
        <VisualRadio checked={false} onChange={(): void => undefined}>
          {'Et valg'}
        </VisualRadio>
      );

      expect(screen.getByRole('radio', { name: 'Et valg' })).not.toBeChecked();

      rerender(
        <VisualRadio checked onChange={(): void => undefined}>
          {'Et valg'}
        </VisualRadio>
      );

      expect(screen.getByRole('radio', { name: 'Et valg' })).toBeChecked();
    });
  });

  describe('Når disabled er satt', () => {
    test('Så kan ikke radioen velges', async () => {
      const onChange = vi.fn();
      render(
        <VisualRadio disabled onChange={onChange}>
          {'Et valg'}
        </VisualRadio>
      );

      const radio = screen.getByRole('radio', { name: 'Et valg' });
      expect(radio).toBeDisabled();

      await userEvent.click(radio);

      expect(onChange).not.toHaveBeenCalled();
      expect(radio).not.toBeChecked();
    });
  });

  describe('Når name, value og required sendes inn', () => {
    test('Så videresendes de til input', () => {
      render(
        <VisualRadio name={'kategori'} value={'allergi'} required>
          {'Allergi'}
        </VisualRadio>
      );

      const radio = screen.getByRole('radio', { name: 'Allergi' });
      expect(radio).toHaveAttribute('name', 'kategori');
      expect(radio).toHaveAttribute('value', 'allergi');
      expect(radio).toBeRequired();
    });
  });

  describe('Når inputId er satt', () => {
    test('Så får input riktig id og label kobles via htmlFor', () => {
      render(<VisualRadio inputId={'min-radio'}>{'Et valg'}</VisualRadio>);

      const radio = screen.getByRole('radio', { name: 'Et valg' });
      expect(radio).toHaveAttribute('id', 'min-radio');
    });
  });

  describe('Når ref sendes inn', () => {
    test('Så peker den til input', () => {
      const ref = createRef<HTMLInputElement>();
      render(<VisualRadio ref={ref}>{'Et valg'}</VisualRadio>);

      expect(ref.current).toBe(screen.getByRole('radio', { name: 'Et valg' }));
    });
  });

  describe('Når onFocus og onBlur er satt', () => {
    test('Så kalles de når input får og mister fokus', () => {
      const onFocus = vi.fn();
      const onBlur = vi.fn();
      render(
        <VisualRadio onFocus={onFocus} onBlur={onBlur}>
          {'Et valg'}
        </VisualRadio>
      );

      const radio = screen.getByRole('radio', { name: 'Et valg' });
      radio.focus();
      expect(onFocus).toHaveBeenCalledTimes(1);

      radio.blur();
      expect(onBlur).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når aria-label er satt', () => {
    test('Så overstyrer den den synlige labelen som name', () => {
      render(<VisualRadio aria-label={'Tilgjengelig navn'}>{'Synlig tekst'}</VisualRadio>);

      expect(screen.getByRole('radio', { name: 'Tilgjengelig navn' })).toBeVisible();
    });
  });

  describe('Når errorText er satt', () => {
    test('Så vises feilmeldingen og input markeres som aria-invalid', () => {
      render(<VisualRadio errorText={'Feilmelding her'}>{'Et valg'}</VisualRadio>);

      expect(screen.getByText('Feilmelding her')).toBeVisible();
      const radio = screen.getByRole('radio', { name: 'Et valg' });
      expect(radio).toHaveAttribute('aria-invalid', 'true');
      expect(radio).toHaveAccessibleDescription('Feilmelding her');
    });
  });

  describe('Når errorTextId sendes inn', () => {
    test('Så bruker input den i aria-describedby', () => {
      render(
        <>
          <div id={'ekstern-error'}>{'Du må velge ett alternativ'}</div>
          <VisualRadio error errorTextId={'ekstern-error'}>
            {'Et valg'}
          </VisualRadio>
        </>
      );

      const radio = screen.getByRole('radio', { name: 'Et valg' });
      expect(radio).toHaveAccessibleDescription('Du må velge ett alternativ');
    });
  });

  describe('Når testId er satt', () => {
    test('Så finnes elementet via data-testid', () => {
      render(<VisualRadio testId={'min-frame'}>{'Et valg'}</VisualRadio>);

      expect(screen.getByTestId('min-frame')).toBeVisible();
    });
  });

  describe('Når error er satt uten errorText', () => {
    test('Så markeres input som aria-invalid uten at det rendres feilmelding', () => {
      render(<VisualRadio error>{'Et valg'}</VisualRadio>);

      const radio = screen.getByRole('radio', { name: 'Et valg' });
      expect(radio).toHaveAttribute('aria-invalid', 'true');
      expect(screen.queryByText('Feilmelding her')).not.toBeInTheDocument();
    });
  });

  describe('Når både checked og defaultChecked er satt', () => {
    test('Så vinner checked-propen på første render', () => {
      render(
        <VisualRadio checked={false} defaultChecked onChange={(): void => undefined}>
          {'Et valg'}
        </VisualRadio>
      );

      expect(screen.getByRole('radio', { name: 'Et valg' })).not.toBeChecked();
    });
  });

  describe('Når visualContent er satt', () => {
    test('Så rendres innholdet inne i radioen', () => {
      render(<VisualRadio visualContent={<span data-testid={'mitt-visuelle-innhold'}>{'Ikon'}</span>}>{'Et valg'}</VisualRadio>);

      expect(screen.getByTestId('mitt-visuelle-innhold')).toBeVisible();
      expect(screen.getByTestId('mitt-visuelle-innhold')).toHaveTextContent('Ikon');
    });
  });
});
