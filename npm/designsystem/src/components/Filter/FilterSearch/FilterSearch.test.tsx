import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilterSearch from './FilterSearch';

describe('Gitt at FilterSearch skal vises', (): void => {
  describe('Når FilterSearch rendres uten verdi', (): void => {
    test('Så vises inputfeltet med placeholder', (): void => {
      render(<FilterSearch value={undefined} />);

      const input = screen.getByPlaceholderText('Søk i listen');
      expect(input).toBeVisible();
    });

    test('Så vises søkeknappen', (): void => {
      render(<FilterSearch value={undefined} />);

      expect(screen.getByRole('button', { name: /Søk/i })).toBeVisible();
    });

    test('Så vises ikke nullstill-knappen', (): void => {
      render(<FilterSearch value={undefined} />);

      expect(screen.queryByRole('button', { name: /Nullstill/i })).not.toBeInTheDocument();
    });
  });

  describe('Når inputfeltet har en verdi', (): void => {
    test('Så vises nullstill-knappen', (): void => {
      render(<FilterSearch value="test" />);

      expect(screen.getByRole('button', { name: /Nullstill/i })).toBeVisible();
    });
  });

  describe('Når brukeren skriver i inputfeltet', (): void => {
    test('Så kalles onChange-handleren', async (): Promise<void> => {
      const handleChange = vi.fn();
      render(<FilterSearch value="" onChange={handleChange} />);

      const input = screen.getByPlaceholderText('Søk i listen');
      await userEvent.type(input, 'a');

      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('Når brukeren klikker på nullstill-knappen', (): void => {
    test('Så kalles clearButtonProps.onClick', async (): Promise<void> => {
      const handleClear = vi.fn();
      render(<FilterSearch value="test" clearButtonProps={{ onClick: handleClear }} />);

      const clearButton = screen.getByRole('button', { name: /Nullstill/i });
      await userEvent.click(clearButton);

      expect(handleClear).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når brukeren klikker på søkeknappen', (): void => {
    test('Så kalles buttonProps.onClick', async (): Promise<void> => {
      const handleSearch = vi.fn();
      render(<FilterSearch value="" buttonProps={{ onClick: handleSearch }} />);

      const searchButton = screen.getByRole('button', { name: /Søk/i });
      await userEvent.click(searchButton);

      expect(handleSearch).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når resources overstyrer tekster', (): void => {
    test('Så brukes de overstyrte tekstene', (): void => {
      render(
        <FilterSearch
          value="test"
          resources={{
            searchPlaceholder: 'Egendefinert placeholder',
            searchButtonAriaLabel: 'Egendefinert søk',
            searchClearButtonAriaLabel: 'Egendefinert nullstill',
          }}
        />
      );

      expect(screen.getByPlaceholderText('Egendefinert placeholder')).toBeVisible();
      expect(screen.getByRole('button', { name: /Egendefinert søk/i })).toBeVisible();
      expect(screen.getByRole('button', { name: /Egendefinert nullstill/i })).toBeVisible();
    });
  });

  describe('Når native input-attributter sendes inn', (): void => {
    test('Så videresendes de til input-elementet', (): void => {
      render(<FilterSearch value="" aria-label="Søk etter noe" id="mitt-søk" />);

      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('id', 'mitt-søk');
    });
  });
});
