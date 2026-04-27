import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilterSort from './FilterSort';

describe('Gitt at FilterSort skal vises', (): void => {
  describe('Når FilterSort rendres med alternativer', (): void => {
    test('Så vises select-elementet med alternativene', (): void => {
      render(
        <FilterSort>
          <option value="dato">{'Dato'}</option>
          <option value="navn">{'Navn'}</option>
        </FilterSort>
      );

      const select = screen.getByRole('combobox');
      expect(select).toBeVisible();

      const options = screen.getAllByRole('option');
      expect(options).toHaveLength(2);
      expect(options[0]).toHaveTextContent('Dato');
      expect(options[1]).toHaveTextContent('Navn');
    });

    test('Så vises standard sorteringslabel', (): void => {
      render(
        <FilterSort>
          <option value="dato">{'Dato'}</option>
        </FilterSort>
      );

      expect(screen.getByText('Sortering:')).toBeVisible();
    });
  });

  describe('Når resources overstyrer labelteksten', (): void => {
    test('Så vises den overstyrte teksten', (): void => {
      render(
        <FilterSort resources={{ sortLabel: 'Rekkefølge' }}>
          <option value="dato">{'Dato'}</option>
        </FilterSort>
      );

      expect(screen.getByText('Rekkefølge:')).toBeVisible();
    });
  });

  describe('Når brukeren endrer valg', (): void => {
    test('Så kalles onChange', async (): Promise<void> => {
      const handleChange = vi.fn();
      render(
        <FilterSort onChange={handleChange}>
          <option value="dato">{'Dato'}</option>
          <option value="navn">{'Navn'}</option>
        </FilterSort>
      );

      await userEvent.selectOptions(screen.getByRole('combobox'), 'navn');

      expect(handleChange).toHaveBeenCalled();
    });
  });
});
