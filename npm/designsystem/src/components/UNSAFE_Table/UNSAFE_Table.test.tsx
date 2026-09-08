import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import UNSAFE_Table, { TableBody, TableCell, TableHead, TableHeadCell, TableRow, useSort } from './';

interface Fastlege {
  navn: string;
  alder: number;
}

const data: Fastlege[] = [
  { navn: 'Line Danser', alder: 42 },
  { navn: 'Hans Nilsen', alder: 38 },
];

const SortableExample: React.FC = () => {
  const { sortedData, getSortProps } = useSort({ data });

  return (
    <UNSAFE_Table caption="Fastleger i nærheten">
      <TableHead>
        <TableRow>
          <TableHeadCell {...getSortProps('navn')}>{'Navn'}</TableHeadCell>
          <TableHeadCell {...getSortProps('alder')}>{'Alder'}</TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedData.map(fastlege => (
          <TableRow key={fastlege.navn}>
            <TableCell dataLabel="Navn">{fastlege.navn}</TableCell>
            <TableCell dataLabel="Alder">{fastlege.alder}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </UNSAFE_Table>
  );
};

describe('Gitt at UNSAFE_Table skal vises', (): void => {
  describe('Når tabellen rendres', (): void => {
    test('Så vises en tabell med caption', (): void => {
      render(
        <UNSAFE_Table caption="Fastleger i nærheten" testId="tabell">
          <TableBody>
            <TableRow>
              <TableCell>{'Hans Nilsen'}</TableCell>
            </TableRow>
          </TableBody>
        </UNSAFE_Table>
      );

      const table = screen.getByRole('table', { name: 'Fastleger i nærheten' });
      expect(table).toBeVisible();
    });

    test('Så har caption en id som kan brukes med aria-labelledby', (): void => {
      render(
        <UNSAFE_Table caption="Fastleger i nærheten" captionId="min-caption">
          <TableBody>
            <TableRow>
              <TableCell>{'Hans Nilsen'}</TableCell>
            </TableRow>
          </TableBody>
        </UNSAFE_Table>
      );

      expect(screen.getByText('Fastleger i nærheten')).toHaveAttribute('id', 'min-caption');
    });
  });

  describe('Når tabellen brukes sammen med useSort', (): void => {
    test('Så sorteres radene når man klikker på en kolonneoverskrift', async (): Promise<void> => {
      render(<SortableExample />);

      await userEvent.click(screen.getByRole('button', { name: 'Navn' }));

      const rows = screen.getAllByRole('row');
      // Første rad er header
      expect(rows[1]).toHaveTextContent('Hans Nilsen');
      expect(rows[2]).toHaveTextContent('Line Danser');

      await userEvent.click(screen.getByRole('button', { name: 'Navn' }));

      const rowsDesc = screen.getAllByRole('row');
      expect(rowsDesc[1]).toHaveTextContent('Line Danser');
      expect(rowsDesc[2]).toHaveTextContent('Hans Nilsen');
    });

    test('Så vises sorteringsretningen på kolonnen', async (): Promise<void> => {
      render(<SortableExample />);

      await userEvent.click(screen.getByRole('button', { name: 'Alder' }));

      expect(screen.getByRole('columnheader', { name: 'Alder' })).toHaveAttribute('aria-sort', 'ascending');

      await userEvent.click(screen.getByRole('button', { name: 'Alder' }));

      expect(screen.getByRole('columnheader', { name: 'Alder' })).toHaveAttribute('aria-sort', 'descending');
    });
  });
});
