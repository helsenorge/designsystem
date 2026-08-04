import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilterSearch from './FilterSearch';

const testResources = {
  searchPlaceholder: 'TEST_PLACEHOLDER',
  searchButtonAriaLabel: 'TEST_SEARCH',
  searchClearButtonAriaLabel: 'TEST_CLEAR',
};

describe('Gitt at FilterSearch skal vises', (): void => {
  describe('Når FilterSearch rendres uten verdi', (): void => {
    test('Så vises inputfeltet', (): void => {
      render(<FilterSearch value={undefined} resources={testResources} />);

      const input = screen.getByPlaceholderText(testResources.searchPlaceholder);
      expect(input).toBeVisible();
    });

    test('Så vises ikke søkeknappen som standard', (): void => {
      render(<FilterSearch value={undefined} resources={testResources} />);

      expect(screen.queryByRole('button', { name: testResources.searchButtonAriaLabel })).not.toBeInTheDocument();
    });

    test('Så vises ikke nullstill-knappen', (): void => {
      render(<FilterSearch value={undefined} resources={testResources} />);

      expect(screen.queryByRole('button', { name: testResources.searchClearButtonAriaLabel })).not.toBeInTheDocument();
    });
  });

  describe('Når FilterSearch rendres med withSearchButton', (): void => {
    test('Så vises søkeknappen', (): void => {
      render(<FilterSearch value={undefined} resources={testResources} withSearchButton />);

      expect(screen.getByRole('button', { name: testResources.searchButtonAriaLabel })).toBeVisible();
    });

    test('Så vises ikke søkeikonet i inputfeltet', (): void => {
      render(<FilterSearch value={undefined} resources={testResources} withSearchButton />);

      const input = screen.getByPlaceholderText(testResources.searchPlaceholder);
      expect(input).toHaveClass('filter-search__input--with-search-button');
    });
  });

  describe('Når FilterSearch rendres uten withSearchButton', (): void => {
    test('Så vises søkeikonet i inputfeltet', (): void => {
      render(<FilterSearch value={undefined} resources={testResources} />);

      const input = screen.getByPlaceholderText(testResources.searchPlaceholder);
      expect(input).not.toHaveClass('filter-search__input--with-search-button');
    });
  });

  describe('Når inputfeltet har en verdi', (): void => {
    test('Så vises nullstill-knappen', (): void => {
      render(<FilterSearch value="test" readOnly resources={testResources} />);

      expect(screen.getByRole('button', { name: testResources.searchClearButtonAriaLabel })).toBeVisible();
    });
  });

  describe('Når brukeren skriver i inputfeltet', (): void => {
    test('Så kalles onChange-handleren', async (): Promise<void> => {
      const handleChange = vi.fn();
      render(<FilterSearch value="" onChange={handleChange} resources={testResources} />);

      const input = screen.getByPlaceholderText(testResources.searchPlaceholder);
      await userEvent.type(input, 'a');

      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('Når brukeren klikker på nullstill-knappen', (): void => {
    test('Så kalles clearButtonProps.onClick', async (): Promise<void> => {
      const handleClear = vi.fn();
      render(<FilterSearch value="test" readOnly resources={testResources} clearButtonProps={{ onClick: handleClear }} />);

      const clearButton = screen.getByRole('button', { name: testResources.searchClearButtonAriaLabel });
      await userEvent.click(clearButton);

      expect(handleClear).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når brukeren klikker på søkeknappen', (): void => {
    test('Så kalles buttonProps.onClick', async (): Promise<void> => {
      const handleSearch = vi.fn();
      render(<FilterSearch value="" readOnly resources={testResources} withSearchButton buttonProps={{ onClick: handleSearch }} />);

      const searchButton = screen.getByRole('button', { name: testResources.searchButtonAriaLabel });
      await userEvent.click(searchButton);

      expect(handleSearch).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når resources overstyrer tekster', (): void => {
    test('Så brukes de overstyrte tekstene', (): void => {
      render(
        <FilterSearch
          value="test"
          readOnly
          withSearchButton
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
      render(<FilterSearch value="" readOnly aria-label="Søk etter noe" id="mitt-søk" />);

      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('id', 'mitt-søk');
    });
  });
});
