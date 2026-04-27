import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilterDrawer from './FilterDrawer';
import { useFilterDrawer } from '../useFilterDrawer';

const TestWrapper: React.FC<{
  onClose?: () => void;
  onReset?: () => void;
  resultCount?: number;
  footer?: React.ReactNode;
  defaultOpen?: boolean;
}> = ({ onClose, onReset, resultCount, footer, defaultOpen = true }) => {
  const drawer = useFilterDrawer();

  if (defaultOpen && !drawer.isOpen) {
    drawer.open();
  }

  return (
    <>
      <button onClick={() => drawer.open()}>{'Åpne filter'}</button>
      <FilterDrawer drawer={drawer} onClose={onClose} onReset={onReset} resultCount={resultCount} footer={footer}>
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

      expect(screen.getByRole('button', { name: /Nullstill/i })).toBeVisible();
    });

    test('Så kalles onReset ved klikk', async (): Promise<void> => {
      const handleReset = vi.fn();
      render(<TestWrapper onReset={handleReset} />);

      await userEvent.click(screen.getByRole('button', { name: /Nullstill/i }));

      expect(handleReset).toHaveBeenCalledTimes(1);
    });
  });

  describe('Når resultCount er satt', (): void => {
    test('Så vises vis-treff-knappen med riktig antall', (): void => {
      render(<TestWrapper resultCount={42} />);

      expect(screen.getByRole('button', { name: /Vis 42 treff/i })).toBeVisible();
    });
  });

  describe('Når footer er satt', (): void => {
    test('Så vises custom footer i stedet for standard', (): void => {
      render(<TestWrapper footer={<span>{'Egendefinert footer'}</span>} />);

      expect(screen.getByText('Egendefinert footer')).toBeVisible();
    });
  });
});
