import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import type { UseFilterReturn } from '../useFilter';

import getFilterChips from './getFilterChips';

const lagMockFilter = (filters: Record<string, unknown>): UseFilterReturn<Record<string, unknown>> => ({
  filters,
  setFilter: vi.fn(),
  setFilters: vi.fn(),
  removeFilter: vi.fn(),
  resetFilters: vi.fn(),
  resetFiltersToEmpty: vi.fn(),
});

describe('Gitt at getFilterChips brukes', (): void => {
  describe('Når filter har verdier', (): void => {
    test('Så returneres chips med riktig label', (): void => {
      const filter = lagMockFilter({ kategori: ['a', 'b'] });

      const chips = getFilterChips({
        filter,
        getLabel: (_key, value) => `Label ${value}`,
        onChipClick: vi.fn(),
        onOverflowChipClick: vi.fn(),
      });

      render(<>{chips}</>);
      expect(screen.getByText('Label a')).toBeVisible();
      expect(screen.getByText('Label b')).toBeVisible();
    });
  });

  describe('Når en chip klikkes', (): void => {
    test('Så kalles onChipClick med riktig nøkkel og verdi', async (): Promise<void> => {
      const handleChipClick = vi.fn();
      const filter = lagMockFilter({ status: ['aktiv'] });

      const chips = getFilterChips({
        filter,
        getLabel: (_key, value) => String(value),
        onChipClick: handleChipClick,
        onOverflowChipClick: vi.fn(),
      });

      render(<>{chips}</>);
      await userEvent.click(screen.getByText('aktiv'));

      expect(handleChipClick).toHaveBeenCalledWith('status', 'aktiv');
    });
  });

  describe('Når en chips lukkeknapp klikkes', (): void => {
    test('Så kalles filter.removeFilter som standard', async (): Promise<void> => {
      const filter = lagMockFilter({ status: ['aktiv'] });

      const chips = getFilterChips({
        filter,
        getLabel: (_key, value) => String(value),
        onChipClick: vi.fn(),
        onOverflowChipClick: vi.fn(),
      });

      render(<>{chips}</>);

      const closeButton = screen.getByRole('button', { name: /fjern aktiv/i });
      await userEvent.click(closeButton);

      expect(filter.removeFilter).toHaveBeenCalledWith('status', 'aktiv');
    });

    test('Så kalles onChipRemove hvis den er satt', async (): Promise<void> => {
      const handleRemove = vi.fn();
      const filter = lagMockFilter({ status: ['aktiv'] });

      const chips = getFilterChips({
        filter,
        getLabel: (_key, value) => String(value),
        onChipClick: vi.fn(),
        onChipRemove: handleRemove,
        onOverflowChipClick: vi.fn(),
      });

      render(<>{chips}</>);

      const closeButton = screen.getByRole('button', { name: /fjern aktiv/i });
      await userEvent.click(closeButton);

      expect(handleRemove).toHaveBeenCalledWith('status', 'aktiv');
      expect(filter.removeFilter).not.toHaveBeenCalled();
    });
  });

  describe('Når det er mer enn 5 chips', (): void => {
    test('Så vises en overflow-chip med riktig antall', (): void => {
      const filter = lagMockFilter({
        kategori: ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
      });

      const chips = getFilterChips({
        filter,
        getLabel: (_key, value) => `Chip ${value}`,
        onChipClick: vi.fn(),
        onOverflowChipClick: vi.fn(),
      });

      render(<>{chips}</>);

      expect(screen.getByText('+2')).toBeVisible();
    });

    test('Så kalles onOverflowChipClick når overflow-chipen klikkes', async (): Promise<void> => {
      const handleOverflow = vi.fn();
      const filter = lagMockFilter({
        kategori: ['a', 'b', 'c', 'd', 'e', 'f'],
      });

      const chips = getFilterChips({
        filter,
        getLabel: (_key, value) => `Chip ${value}`,
        onChipClick: vi.fn(),
        onOverflowChipClick: handleOverflow,
      });

      render(<>{chips}</>);
      await userEvent.click(screen.getByText('+1'));

      expect(handleOverflow).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når willShowCloseButton er satt', (): void => {
    test('Så styrer den om lukkeknappen vises på chipsen', (): void => {
      const filter = lagMockFilter({ status: ['synlig', 'skjult'] });

      const chips = getFilterChips({
        filter,
        getLabel: (_key, value) => String(value),
        onChipClick: vi.fn(),
        onOverflowChipClick: vi.fn(),
        willShowCloseButton: (_key, value) => value === 'synlig',
      });

      render(<>{chips}</>);

      const closeButtons = screen.getAllByRole('button', { name: /fjern/i });
      // Bare chipen med 'synlig' skal ha lukkeknapp
      expect(closeButtons).toHaveLength(1);
    });
  });

  describe('Når filter er tomt', (): void => {
    test('Så returneres ingen chips', (): void => {
      const filter = lagMockFilter({});

      const chips = getFilterChips({
        filter,
        getLabel: (_key, value) => String(value),
        onChipClick: vi.fn(),
        onOverflowChipClick: vi.fn(),
      });

      const { container } = render(<>{chips}</>);
      expect(container).toBeEmptyDOMElement();
    });
  });
});
