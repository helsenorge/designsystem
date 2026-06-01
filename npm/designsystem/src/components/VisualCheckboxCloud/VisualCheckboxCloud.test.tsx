import { render, screen } from '@testing-library/react';

import VisualCheckboxCloud from './VisualCheckboxCloud';

describe('Gitt at VisualCheckboxCloud skal vises', (): void => {
  describe('Når komponenten har checkbox-children', () => {
    test('Så rendres alle children', () => {
      render(
        <VisualCheckboxCloud>
          <VisualCheckboxCloud.Checkbox>{'Ett'}</VisualCheckboxCloud.Checkbox>
          <VisualCheckboxCloud.Checkbox>{'To'}</VisualCheckboxCloud.Checkbox>
          <VisualCheckboxCloud.Checkbox>{'Tre'}</VisualCheckboxCloud.Checkbox>
        </VisualCheckboxCloud>
      );

      expect(screen.getAllByRole('checkbox')).toHaveLength(3);
      expect(screen.getByRole('checkbox', { name: 'Ett' })).toBeVisible();
      expect(screen.getByRole('checkbox', { name: 'To' })).toBeVisible();
      expect(screen.getByRole('checkbox', { name: 'Tre' })).toBeVisible();
    });
  });

  describe('Når name er satt på cloud', () => {
    test('Så får alle children samme name-attributt', () => {
      render(
        <VisualCheckboxCloud name={'kategori'}>
          <VisualCheckboxCloud.Checkbox>{'Ett'}</VisualCheckboxCloud.Checkbox>
          <VisualCheckboxCloud.Checkbox>{'To'}</VisualCheckboxCloud.Checkbox>
        </VisualCheckboxCloud>
      );

      expect(screen.getByRole('checkbox', { name: 'Ett' })).toHaveAttribute('name', 'kategori');
      expect(screen.getByRole('checkbox', { name: 'To' })).toHaveAttribute('name', 'kategori');
    });

    test('Så vinner name på en Checkbox over cloud sitt name', () => {
      render(
        <VisualCheckboxCloud name={'kategori'}>
          <VisualCheckboxCloud.Checkbox>{'Ett'}</VisualCheckboxCloud.Checkbox>
          <VisualCheckboxCloud.Checkbox name={'overstyrt'}>{'To'}</VisualCheckboxCloud.Checkbox>
        </VisualCheckboxCloud>
      );

      expect(screen.getByRole('checkbox', { name: 'Ett' })).toHaveAttribute('name', 'kategori');
      expect(screen.getByRole('checkbox', { name: 'To' })).toHaveAttribute('name', 'overstyrt');
    });
  });

  describe('Når error er satt på cloud', () => {
    test('Så vises feilmelding og alle barn markeres som aria-invalid', () => {
      render(
        <VisualCheckboxCloud error={'Du må velge minst ett alternativ'}>
          <VisualCheckboxCloud.Checkbox>{'Ett'}</VisualCheckboxCloud.Checkbox>
          <VisualCheckboxCloud.Checkbox>{'To'}</VisualCheckboxCloud.Checkbox>
        </VisualCheckboxCloud>
      );

      expect(screen.getByText('Du må velge minst ett alternativ')).toBeVisible();
      expect(screen.getByRole('checkbox', { name: 'Ett' })).toHaveAttribute('aria-invalid', 'true');
      expect(screen.getByRole('checkbox', { name: 'To' })).toHaveAttribute('aria-invalid', 'true');
    });

    test('Så er feilmeldingen koblet til hver checkbox via aria-describedby', () => {
      render(
        <VisualCheckboxCloud error={'Du må velge minst ett alternativ'}>
          <VisualCheckboxCloud.Checkbox>{'Ett'}</VisualCheckboxCloud.Checkbox>
          <VisualCheckboxCloud.Checkbox>{'To'}</VisualCheckboxCloud.Checkbox>
        </VisualCheckboxCloud>
      );

      expect(screen.getByRole('checkbox', { name: 'Ett' })).toHaveAccessibleDescription('Du må velge minst ett alternativ');
      expect(screen.getByRole('checkbox', { name: 'To' })).toHaveAccessibleDescription('Du må velge minst ett alternativ');
    });
  });

  describe('Når testId og errorWrapperTestId er satt', () => {
    test('Så finnes elementene via data-testid', () => {
      render(
        <VisualCheckboxCloud testId={'min-cloud'} errorWrapperTestId={'min-error-wrapper'} error={'Feil'}>
          <VisualCheckboxCloud.Checkbox>{'Ett'}</VisualCheckboxCloud.Checkbox>
        </VisualCheckboxCloud>
      );

      expect(screen.getByTestId('min-cloud')).toBeVisible();
      expect(screen.getByTestId('min-error-wrapper')).toBeVisible();
    });
  });
});
