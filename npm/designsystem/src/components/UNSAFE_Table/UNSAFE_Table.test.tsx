import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FilterSort from '../Filter/FilterSort';

import UNSAFE_Table, { UNSAFE_TableBody, UNSAFE_TableCell, UNSAFE_TableHead, UNSAFE_TableHeadCell, UNSAFE_TableRow, useSort } from './';

interface Fastlege {
  navn: string;
  alder: number;
}

const data: Fastlege[] = [
  { navn: 'Line Danser', alder: 42 },
  { navn: 'Hans Nilsen', alder: 38 },
];

const SortableExample: React.FC = () => {
  const { sortedData, getSortProps, requestSort } = useSort({ data });

  return (
    <>
      <FilterSort value="" onChange={(e): void => requestSort(e.target.value)}>
        <option value="navn">{'Navn'}</option>
        <option value="alder">{'Alder'}</option>
      </FilterSort>
      <UNSAFE_Table caption="Fastleger i nærheten">
        <UNSAFE_TableHead>
          <UNSAFE_TableRow>
            <UNSAFE_TableHeadCell {...getSortProps('navn')}>{'Navn'}</UNSAFE_TableHeadCell>
            <UNSAFE_TableHeadCell {...getSortProps('alder')}>{'Alder'}</UNSAFE_TableHeadCell>
          </UNSAFE_TableRow>
        </UNSAFE_TableHead>
        <UNSAFE_TableBody>
          {sortedData.map(fastlege => (
            <UNSAFE_TableRow key={fastlege.navn}>
              <UNSAFE_TableCell dataLabel="Navn">{fastlege.navn}</UNSAFE_TableCell>
              <UNSAFE_TableCell dataLabel="Alder">{fastlege.alder}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          ))}
        </UNSAFE_TableBody>
      </UNSAFE_Table>
    </>
  );
};

describe('Gitt at UNSAFE_Table skal vises', (): void => {
  describe('Når tabellen rendres', (): void => {
    test('Så vises en tabell med caption', (): void => {
      render(
        <UNSAFE_Table caption="Fastleger i nærheten" testId="tabell">
          <UNSAFE_TableBody>
            <UNSAFE_TableRow>
              <UNSAFE_TableCell>{'Hans Nilsen'}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );

      const table = screen.getByRole('table', { name: 'Fastleger i nærheten' });
      expect(table).toBeVisible();
    });

    test('Så vises zebra-striper på annenhver rad når det er aktivert', (): void => {
      render(
        <UNSAFE_Table caption="Fastleger i nærheten" zebraStripes>
          <UNSAFE_TableBody>
            <UNSAFE_TableRow>
              <UNSAFE_TableCell>{'Rad 1'}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
            <UNSAFE_TableRow>
              <UNSAFE_TableCell>{'Rad 2'}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      );

      expect(screen.getByRole('rowgroup')).toHaveClass('table-body--zebra');
    });
  });

  describe('Når tabellen brukes sammen med useSort', (): void => {
    test('Så reagerer ikke kolonneoverskriften på klikk', async (): Promise<void> => {
      render(<SortableExample />);

      await userEvent.click(screen.getByRole('columnheader', { name: 'Navn' }));

      const rows = screen.getAllByRole('row');
      // Rekkefølgen er uendret siden klikk på header ikke lenger sorterer
      expect(rows[1]).toHaveTextContent('Line Danser');
      expect(rows[2]).toHaveTextContent('Hans Nilsen');
    });

    test('Så sorteres radene og vises sorteringsretning når man velger i FilterSort', async (): Promise<void> => {
      render(<SortableExample />);

      await userEvent.selectOptions(screen.getByRole('combobox'), 'alder');

      const rows = screen.getAllByRole('row');
      expect(rows[1]).toHaveTextContent('Hans Nilsen');
      expect(rows[2]).toHaveTextContent('Line Danser');
      expect(screen.getByRole('columnheader', { name: 'Alder' })).toHaveAttribute('aria-sort', 'ascending');
    });
  });
});
