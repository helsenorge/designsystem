import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilterButton from './FilterButton';

const testResources = {
  filterButtonText: 'FILTER_BUTTON_TEXT',
};

describe('Gitt at FilterButton skal vises', (): void => {
  describe('Når FilterButton rendres', (): void => {
    test('Så vises knappen', (): void => {
      render(<FilterButton resources={testResources} />);

      const button = screen.getByRole('button');
      expect(button).toBeVisible();
      expect(button).toHaveTextContent(testResources.filterButtonText);
    });
  });

  describe('Når resources prop overstyrer teksten', (): void => {
    test('Så vises den overstyrte teksten', (): void => {
      render(<FilterButton resources={{ filterButtonText: 'Filtrer resultater' }} />);

      expect(screen.getByRole('button')).toHaveTextContent('Filtrer resultater');
    });
  });

  describe('Når onClick er satt', (): void => {
    test('Så kalles onClick ved klikk', async (): Promise<void> => {
      const handleClick = vi.fn();
      render(<FilterButton onClick={handleClick} />);

      await userEvent.click(screen.getByRole('button'));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når HTML-attributter sendes inn', (): void => {
    test('Så videresendes de til button', (): void => {
      render(<FilterButton aria-label="Åpne filter" data-testid="filter-btn" />);

      const button = screen.getByTestId('filter-btn');
      expect(button).toHaveAttribute('aria-label', 'Åpne filter');
    });
  });
});
