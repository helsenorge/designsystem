import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import VisualRadioGroup from './VisualRadioGroup';

describe('Gitt at VisualRadioGroup skal vises', (): void => {
  describe('Når komponenten har radio-children', () => {
    test('Så rendres alle children', () => {
      render(
        <VisualRadioGroup>
          <VisualRadioGroup.VisualRadio>{'Ett'}</VisualRadioGroup.VisualRadio>
          <VisualRadioGroup.VisualRadio>{'To'}</VisualRadioGroup.VisualRadio>
          <VisualRadioGroup.VisualRadio>{'Tre'}</VisualRadioGroup.VisualRadio>
        </VisualRadioGroup>
      );

      expect(screen.getAllByRole('radio')).toHaveLength(3);
      expect(screen.getByRole('radio', { name: 'Ett' })).toBeVisible();
      expect(screen.getByRole('radio', { name: 'To' })).toBeVisible();
      expect(screen.getByRole('radio', { name: 'Tre' })).toBeVisible();
    });

    test('Så har gruppa role radiogroup', () => {
      render(
        <VisualRadioGroup testId={'gruppe'}>
          <VisualRadioGroup.VisualRadio>{'Ett'}</VisualRadioGroup.VisualRadio>
        </VisualRadioGroup>
      );

      expect(screen.getByRole('radiogroup')).toBe(screen.getByTestId('gruppe'));
    });
  });

  describe('Når name er satt på gruppa', () => {
    test('Så får alle children samme name-attributt', () => {
      render(
        <VisualRadioGroup name={'kategori'}>
          <VisualRadioGroup.VisualRadio>{'Ett'}</VisualRadioGroup.VisualRadio>
          <VisualRadioGroup.VisualRadio>{'To'}</VisualRadioGroup.VisualRadio>
        </VisualRadioGroup>
      );

      expect(screen.getByRole('radio', { name: 'Ett' })).toHaveAttribute('name', 'kategori');
      expect(screen.getByRole('radio', { name: 'To' })).toHaveAttribute('name', 'kategori');
    });

    test('Så vinner name på en VisualRadio over gruppa sitt name', () => {
      render(
        <VisualRadioGroup name={'kategori'}>
          <VisualRadioGroup.VisualRadio>{'Ett'}</VisualRadioGroup.VisualRadio>
          <VisualRadioGroup.VisualRadio name={'overstyrt'}>{'To'}</VisualRadioGroup.VisualRadio>
        </VisualRadioGroup>
      );

      expect(screen.getByRole('radio', { name: 'Ett' })).toHaveAttribute('name', 'kategori');
      expect(screen.getByRole('radio', { name: 'To' })).toHaveAttribute('name', 'overstyrt');
    });
  });

  describe('Når name ikke er satt på gruppa', () => {
    test('Så får alle children samme auto-genererte name-attributt', () => {
      render(
        <VisualRadioGroup>
          <VisualRadioGroup.VisualRadio>{'Ett'}</VisualRadioGroup.VisualRadio>
          <VisualRadioGroup.VisualRadio>{'To'}</VisualRadioGroup.VisualRadio>
        </VisualRadioGroup>
      );

      const ett = screen.getByRole('radio', { name: 'Ett' });
      const to = screen.getByRole('radio', { name: 'To' });
      const ettName = ett.getAttribute('name');
      expect(ettName).toBeTruthy();
      expect(to).toHaveAttribute('name', ettName);
    });
  });

  describe('Når brukeren velger en radio', () => {
    test('Så blir kun den valgte radioen checked', async () => {
      render(
        <VisualRadioGroup name={'kategori'}>
          <VisualRadioGroup.VisualRadio value={'ett'}>{'Ett'}</VisualRadioGroup.VisualRadio>
          <VisualRadioGroup.VisualRadio value={'to'}>{'To'}</VisualRadioGroup.VisualRadio>
        </VisualRadioGroup>
      );

      await userEvent.click(screen.getByText('Ett'));

      expect(screen.getByRole('radio', { name: 'Ett' })).toBeChecked();
      expect(screen.getByRole('radio', { name: 'To' })).not.toBeChecked();

      await userEvent.click(screen.getByText('To'));

      expect(screen.getByRole('radio', { name: 'Ett' })).not.toBeChecked();
      expect(screen.getByRole('radio', { name: 'To' })).toBeChecked();
    });

    test('Så kalles onChange med event og selected value', async () => {
      const handleChange = vi.fn();
      render(
        <VisualRadioGroup name={'kategori'} onChange={handleChange}>
          <VisualRadioGroup.VisualRadio value={'ett'}>{'Ett'}</VisualRadioGroup.VisualRadio>
          <VisualRadioGroup.VisualRadio value={'to'}>{'To'}</VisualRadioGroup.VisualRadio>
        </VisualRadioGroup>
      );

      await userEvent.click(screen.getByText('To'));

      expect(handleChange).toHaveBeenCalledTimes(1);
      expect(handleChange).toHaveBeenCalledWith(expect.anything(), 'to');
    });
  });

  describe('Når defaultValue er satt på gruppa', () => {
    test('Så er den radioen checked ved første render', () => {
      render(
        <VisualRadioGroup defaultValue={'to'}>
          <VisualRadioGroup.VisualRadio value={'ett'}>{'Ett'}</VisualRadioGroup.VisualRadio>
          <VisualRadioGroup.VisualRadio value={'to'}>{'To'}</VisualRadioGroup.VisualRadio>
        </VisualRadioGroup>
      );

      expect(screen.getByRole('radio', { name: 'Ett' })).not.toBeChecked();
      expect(screen.getByRole('radio', { name: 'To' })).toBeChecked();
    });
  });

  describe('Når value er satt på gruppa (controlled)', () => {
    test('Så styrer gruppa hvilken radio som er checked', () => {
      const { rerender } = render(
        <VisualRadioGroup value={'ett'}>
          <VisualRadioGroup.VisualRadio value={'ett'}>{'Ett'}</VisualRadioGroup.VisualRadio>
          <VisualRadioGroup.VisualRadio value={'to'}>{'To'}</VisualRadioGroup.VisualRadio>
        </VisualRadioGroup>
      );

      expect(screen.getByRole('radio', { name: 'Ett' })).toBeChecked();

      rerender(
        <VisualRadioGroup value={'to'}>
          <VisualRadioGroup.VisualRadio value={'ett'}>{'Ett'}</VisualRadioGroup.VisualRadio>
          <VisualRadioGroup.VisualRadio value={'to'}>{'To'}</VisualRadioGroup.VisualRadio>
        </VisualRadioGroup>
      );

      expect(screen.getByRole('radio', { name: 'Ett' })).not.toBeChecked();
      expect(screen.getByRole('radio', { name: 'To' })).toBeChecked();
    });
  });

  describe('Når error er satt på gruppa', () => {
    test('Så vises feilmelding og alle barn markeres som aria-invalid', () => {
      render(
        <VisualRadioGroup error={'Du må velge ett alternativ'}>
          <VisualRadioGroup.VisualRadio>{'Ett'}</VisualRadioGroup.VisualRadio>
          <VisualRadioGroup.VisualRadio>{'To'}</VisualRadioGroup.VisualRadio>
        </VisualRadioGroup>
      );

      expect(screen.getByText('Du må velge ett alternativ')).toBeVisible();
      expect(screen.getByRole('radio', { name: 'Ett' })).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByRole('radio', { name: 'To' })).toHaveAttribute('aria-invalid', 'true');
    });

    test('Så er feilmeldingen koblet til hver radio via aria-describedby', () => {
      render(
        <VisualRadioGroup error={'Du må velge ett alternativ'}>
          <VisualRadioGroup.VisualRadio>{'Ett'}</VisualRadioGroup.VisualRadio>
          <VisualRadioGroup.VisualRadio>{'To'}</VisualRadioGroup.VisualRadio>
        </VisualRadioGroup>
      );

      expect(screen.getByRole('radio', { name: 'Ett' })).toHaveAccessibleDescription('Du må velge ett alternativ');
      expect(screen.getByRole('radio', { name: 'To' })).toHaveAccessibleDescription('Du må velge ett alternativ');
    });
  });

  describe('Når testId og errorWrapperTestId er satt', () => {
    test('Så finnes elementene via data-testid', () => {
      render(
        <VisualRadioGroup testId={'min-gruppe'} errorWrapperTestId={'min-error-wrapper'} error={'Feil'}>
          <VisualRadioGroup.VisualRadio>{'Ett'}</VisualRadioGroup.VisualRadio>
        </VisualRadioGroup>
      );

      expect(screen.getByTestId('min-gruppe')).toBeVisible();
      expect(screen.getByTestId('min-error-wrapper')).toBeVisible();
    });
  });

  describe('Når errorTextId er satt eksplisitt', () => {
    test('Så bruker alle children den id-en i aria-describedby', () => {
      render(
        <VisualRadioGroup error={'Du må velge ett alternativ'} errorTextId={'min-feil'}>
          <VisualRadioGroup.VisualRadio>{'Ett'}</VisualRadioGroup.VisualRadio>
          <VisualRadioGroup.VisualRadio>{'To'}</VisualRadioGroup.VisualRadio>
        </VisualRadioGroup>
      );

      expect(screen.getByText('Du må velge ett alternativ')).toHaveAttribute('id', 'min-feil');
      expect(screen.getByRole('radio', { name: 'Ett' })).toHaveAttribute('aria-describedby', expect.stringContaining('min-feil'));
      expect(screen.getByRole('radio', { name: 'To' })).toHaveAttribute('aria-describedby', expect.stringContaining('min-feil'));
    });
  });

  describe('Når et child VisualRadio har error fra før', () => {
    test('Så er det aria-invalid selv om gruppa ikke har error', () => {
      render(
        <VisualRadioGroup>
          <VisualRadioGroup.VisualRadio error>{'Ett'}</VisualRadioGroup.VisualRadio>
          <VisualRadioGroup.VisualRadio>{'To'}</VisualRadioGroup.VisualRadio>
        </VisualRadioGroup>
      );

      expect(screen.getByRole('radio', { name: 'Ett' })).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByRole('radio', { name: 'To' })).toHaveAttribute('aria-invalid', 'false');
    });
  });

  describe('Når children ikke er VisualRadio-elementer', () => {
    test('Så rendres de uendret', () => {
      render(
        <VisualRadioGroup>
          <VisualRadioGroup.VisualRadio>{'Ett'}</VisualRadioGroup.VisualRadio>
          <div data-testid={'tilfeldig'}>{'Et annet element'}</div>
        </VisualRadioGroup>
      );

      expect(screen.getByTestId('tilfeldig')).toBeVisible();
      expect(screen.getByTestId('tilfeldig')).toHaveTextContent('Et annet element');
      expect(screen.getAllByRole('radio')).toHaveLength(1);
    });
  });
});
