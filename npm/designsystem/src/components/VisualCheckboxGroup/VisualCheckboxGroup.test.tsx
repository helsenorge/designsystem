import { render, screen } from '@testing-library/react';

import VisualCheckboxGroup from './VisualCheckboxGroup';

describe('Gitt at VisualCheckboxGroup skal vises', (): void => {
  describe('Når komponenten har checkbox-children', () => {
    test('Så rendres alle children', () => {
      render(
        <VisualCheckboxGroup>
          <VisualCheckboxGroup.VisualCheckbox>{'Ett'}</VisualCheckboxGroup.VisualCheckbox>
          <VisualCheckboxGroup.VisualCheckbox>{'To'}</VisualCheckboxGroup.VisualCheckbox>
          <VisualCheckboxGroup.VisualCheckbox>{'Tre'}</VisualCheckboxGroup.VisualCheckbox>
        </VisualCheckboxGroup>
      );

      expect(screen.getAllByRole('checkbox')).toHaveLength(3);
      expect(screen.getByRole('checkbox', { name: 'Ett' })).toBeVisible();
      expect(screen.getByRole('checkbox', { name: 'To' })).toBeVisible();
      expect(screen.getByRole('checkbox', { name: 'Tre' })).toBeVisible();
    });
  });

  describe('Når name er satt på gruppa', () => {
    test('Så får alle children samme name-attributt', () => {
      render(
        <VisualCheckboxGroup name={'kategori'}>
          <VisualCheckboxGroup.VisualCheckbox>{'Ett'}</VisualCheckboxGroup.VisualCheckbox>
          <VisualCheckboxGroup.VisualCheckbox>{'To'}</VisualCheckboxGroup.VisualCheckbox>
        </VisualCheckboxGroup>
      );

      expect(screen.getByRole('checkbox', { name: 'Ett' })).toHaveAttribute('name', 'kategori');
      expect(screen.getByRole('checkbox', { name: 'To' })).toHaveAttribute('name', 'kategori');
    });

    test('Så vinner name på en VisualCheckbox over gruppa sitt name', () => {
      render(
        <VisualCheckboxGroup name={'kategori'}>
          <VisualCheckboxGroup.VisualCheckbox>{'Ett'}</VisualCheckboxGroup.VisualCheckbox>
          <VisualCheckboxGroup.VisualCheckbox name={'overstyrt'}>{'To'}</VisualCheckboxGroup.VisualCheckbox>
        </VisualCheckboxGroup>
      );

      expect(screen.getByRole('checkbox', { name: 'Ett' })).toHaveAttribute('name', 'kategori');
      expect(screen.getByRole('checkbox', { name: 'To' })).toHaveAttribute('name', 'overstyrt');
    });
  });

  describe('Når error er satt på gruppa', () => {
    test('Så vises feilmelding og alle barn markeres som aria-invalid', () => {
      render(
        <VisualCheckboxGroup error={'Du må velge minst ett alternativ'}>
          <VisualCheckboxGroup.VisualCheckbox>{'Ett'}</VisualCheckboxGroup.VisualCheckbox>
          <VisualCheckboxGroup.VisualCheckbox>{'To'}</VisualCheckboxGroup.VisualCheckbox>
        </VisualCheckboxGroup>
      );

      expect(screen.getByText('Du må velge minst ett alternativ')).toBeVisible();
      expect(screen.getByRole('checkbox', { name: 'Ett' })).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByRole('checkbox', { name: 'To' })).toHaveAttribute('aria-invalid', 'true');
    });

    test('Så er feilmeldingen koblet til hver checkbox via aria-describedby', () => {
      render(
        <VisualCheckboxGroup error={'Du må velge minst ett alternativ'}>
          <VisualCheckboxGroup.VisualCheckbox>{'Ett'}</VisualCheckboxGroup.VisualCheckbox>
          <VisualCheckboxGroup.VisualCheckbox>{'To'}</VisualCheckboxGroup.VisualCheckbox>
        </VisualCheckboxGroup>
      );

      expect(screen.getByRole('checkbox', { name: 'Ett' })).toHaveAccessibleDescription('Du må velge minst ett alternativ');
      expect(screen.getByRole('checkbox', { name: 'To' })).toHaveAccessibleDescription('Du må velge minst ett alternativ');
    });
  });

  describe('Når testId og errorWrapperTestId er satt', () => {
    test('Så finnes elementene via data-testid', () => {
      render(
        <VisualCheckboxGroup testId={'min-gruppe'} errorWrapperTestId={'min-error-wrapper'} error={'Feil'}>
          <VisualCheckboxGroup.VisualCheckbox>{'Ett'}</VisualCheckboxGroup.VisualCheckbox>
        </VisualCheckboxGroup>
      );

      expect(screen.getByTestId('min-gruppe')).toBeVisible();
      expect(screen.getByTestId('min-error-wrapper')).toBeVisible();
    });
  });

  describe('Når errorTextId er satt eksplisitt', () => {
    test('Så bruker alle children den id-en i aria-describedby', () => {
      render(
        <VisualCheckboxGroup error={'Du må velge minst ett alternativ'} errorTextId={'min-feil'}>
          <VisualCheckboxGroup.VisualCheckbox>{'Ett'}</VisualCheckboxGroup.VisualCheckbox>
          <VisualCheckboxGroup.VisualCheckbox>{'To'}</VisualCheckboxGroup.VisualCheckbox>
        </VisualCheckboxGroup>
      );

      expect(screen.getByText('Du må velge minst ett alternativ')).toHaveAttribute('id', 'min-feil');
      expect(screen.getByRole('checkbox', { name: 'Ett' })).toHaveAttribute('aria-describedby', expect.stringContaining('min-feil'));
      expect(screen.getByRole('checkbox', { name: 'To' })).toHaveAttribute('aria-describedby', expect.stringContaining('min-feil'));
    });
  });

  describe('Når et child VisualCheckbox har error fra før', () => {
    test('Så er det aria-invalid selv om gruppa ikke har error', () => {
      render(
        <VisualCheckboxGroup>
          <VisualCheckboxGroup.VisualCheckbox error>{'Ett'}</VisualCheckboxGroup.VisualCheckbox>
          <VisualCheckboxGroup.VisualCheckbox>{'To'}</VisualCheckboxGroup.VisualCheckbox>
        </VisualCheckboxGroup>
      );

      expect(screen.getByRole('checkbox', { name: 'Ett' })).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByRole('checkbox', { name: 'To' })).toHaveAttribute('aria-invalid', 'false');
    });
  });

  describe('Når children ikke er VisualCheckbox-elementer', () => {
    test('Så rendres de uendret', () => {
      render(
        <VisualCheckboxGroup>
          <VisualCheckboxGroup.VisualCheckbox>{'Ett'}</VisualCheckboxGroup.VisualCheckbox>
          <div data-testid={'tilfeldig'}>{'Et annet element'}</div>
        </VisualCheckboxGroup>
      );

      expect(screen.getByTestId('tilfeldig')).toBeVisible();
      expect(screen.getByTestId('tilfeldig')).toHaveTextContent('Et annet element');
      expect(screen.getAllByRole('checkbox')).toHaveLength(1);
    });
  });
});
