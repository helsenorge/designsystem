import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilterDrawer from './FilterDrawer';
import { useFilterDrawer } from '../useFilterDrawer';

const testResources = {
  resetButtonText: 'TEST_RESET',
  showButtonText: 'TEST_SHOW',
  resultsText: '{0} TEST_RESULTS',
  loadingText: 'TEST_LOADING',
};

const formatResultsText = (count: number): string => testResources.resultsText.replace('{0}', String(count));

const TestWrapper: React.FC<{
  onClose?: () => void;
  onReset?: () => void;
  resultCount?: number;
  footer?: React.ReactNode;
  defaultOpen?: boolean;
  isLoading?: boolean;
}> = ({ onClose, onReset, resultCount, footer, defaultOpen = true, isLoading }) => {
  const drawer = useFilterDrawer();

  if (defaultOpen && !drawer.isOpen) {
    drawer.open();
  }

  return (
    <>
      <button onClick={() => drawer.open()}>{'Åpne filter'}</button>
      <FilterDrawer
        drawer={drawer}
        onClose={onClose}
        onReset={onReset}
        resultCount={resultCount}
        footer={footer}
        isLoading={isLoading}
        resources={testResources}
      >
        <FilterDrawer.Overview title="Overview">
          <p>{'Overview content'}</p>
        </FilterDrawer.Overview>
        <FilterDrawer.View id="kategori" title="Kategori">
          <p>{'Kategoriinnhold'}</p>
        </FilterDrawer.View>
      </FilterDrawer>
    </>
  );
};

describe('Gitt at FilterDrawer skal vises', (): void => {
  describe('Når FilterDrawer åpnes', (): void => {
    test('Så vises oversiktinnholdet', (): void => {
      render(<TestWrapper />);

      expect(screen.getByText('Overview content')).toBeVisible();
    });

    test('Så vises tittelen', (): void => {
      render(<TestWrapper />);

      expect(screen.getByText('Overview')).toBeVisible();
    });
  });

  describe('Når onReset er satt', (): void => {
    test('Så vises nullstill-knappen', (): void => {
      render(<TestWrapper onReset={vi.fn()} />);

      expect(screen.getByRole('button', { name: testResources.resetButtonText })).toBeVisible();
    });

    test('Så kalles onReset ved klikk', async (): Promise<void> => {
      const handleReset = vi.fn();
      render(<TestWrapper onReset={handleReset} />);

      await userEvent.click(screen.getByRole('button', { name: testResources.resetButtonText }));

      expect(handleReset).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når resultCount er satt', (): void => {
    test('Så vises treff teksten med riktig antall', (): void => {
      render(<TestWrapper resultCount={42} />);

      expect(screen.getByText(formatResultsText(42))).toBeVisible();
    });
  });

  describe('Når footer er satt', (): void => {
    test('Så vises custom footer i stedet for standard', (): void => {
      render(<TestWrapper footer={<span>{'Egendefinert footer'}</span>} />);

      expect(screen.getByText('Egendefinert footer')).toBeVisible();
    });
  });

  describe('Når isLoading er satt til true', (): void => {
    test('Så vises LoaderSpinner i stedet for treff teksten', (): void => {
      render(<TestWrapper resultCount={42} isLoading />);

      expect(screen.getByRole('progressbar')).toBeVisible();
      expect(screen.queryByText(formatResultsText(42))).not.toBeInTheDocument();
    });
  });

  describe('Når isLoading går fra true til false', (): void => {
    test('Så erstattes LoaderSpinner med treff teksten', (): void => {
      const { rerender } = render(<TestWrapper resultCount={42} isLoading />);

      expect(screen.getByRole('progressbar')).toBeVisible();
      expect(screen.queryByText(formatResultsText(42))).not.toBeInTheDocument();

      rerender(<TestWrapper resultCount={42} isLoading={false} />);

      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
      expect(screen.getByText(formatResultsText(42))).toBeVisible();
    });
  });
});
