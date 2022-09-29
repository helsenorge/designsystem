import React, { useState } from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SmallViewportVariant, Table, TableBody, TableHead, TableHeadCell, TableCell, TableRow, HeaderCategory, SortDirection } from './';

describe('Gitt at Table skal vises', (): void => {
  describe('Når den skal vises', (): void => {
    it('Så vises en tabell', (): void => {
      const { container } = render(
        <Table smallViewportVariant={SmallViewportVariant.horizontalscroll} testId="test01">
          <TableHead category={HeaderCategory.normal}>
            <TableRow rowKey="0">
              <TableHeadCell>Navn</TableHeadCell>
              <TableHeadCell>Beskrivelse</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow rowKey="1">
              <TableCell dataLabel="Navn">Hans Nilsen</TableCell>
              <TableCell dataLabel="Beskrivelse">En ganske lang beskrivelse...</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );

      const table = screen.getByTestId('test01');
      const child = screen.getByText('Hans Nilsen');

      expect(table).toHaveClass('table');
      expect(child).toHaveClass('table__cell');

      expect(container).toMatchSnapshot();
    });
  });
});
describe('Gitt at Table kan sorteres', (): void => {
  describe('Når klikker for å sortere', (): void => {
    it('Så har tabellheader og knapper for å sortere riktige aria-egenskaper', (): void => {
      const SortableTable: React.FC = () => {
        const [sortDirection, setSortDirection] = useState(SortDirection.asc);
        const [sortColumn, setSortColumn] = useState('');

        const clickSort = (column: string) => {
          if (column == sortColumn) {
            setSortDirection(sortDirection === SortDirection.asc ? SortDirection.desc : SortDirection.asc);
          } else {
            setSortColumn(column);
            setSortDirection(SortDirection.asc);
          }
        };

        return (
          <Table>
            <TableHead category={HeaderCategory.sortable}>
              <TableRow rowKey="head">
                <TableHeadCell
                  sortable
                  sortDir={sortColumn === 'Fastlegekontor' ? sortDirection : undefined}
                  onClick={() => clickSort('Fastlegekontor')}
                >
                  Fastlegekontor
                </TableHeadCell>
                <TableHeadCell
                  sortable
                  sortDir={sortColumn === 'LedigePlasser' ? sortDirection : undefined}
                  onClick={() => clickSort('LedigePlasser')}
                >
                  Ledige plasser
                </TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow rowKey="1">
                <TableCell dataLabel="Fastlegekontor">Rodeløkka</TableCell>
                <TableCell dataLabel="LedigePlasser">10</TableCell>
              </TableRow>
              <TableRow rowKey="2">
                <TableCell dataLabel="Fastlegekontor">Stovner</TableCell>
                <TableCell dataLabel="LedigePlasser">5</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        );
      };

      render(<SortableTable />);

      const sortButton1 = screen.getByRole('button', { name: 'Fastlegekontor' });
      const columnHeader1 = screen.getByRole('columnheader', { name: 'Fastlegekontor' });
      expect(sortButton1).toBeVisible();
      expect(columnHeader1).toBeVisible();
      expect(sortButton1).not.toHaveAttribute('aria-pressed');
      expect(columnHeader1).not.toHaveAttribute('aria-sort');

      const sortButton2 = screen.getByRole('button', { name: 'Ledige plasser' });
      const columnHeader2 = screen.getByRole('columnheader', { name: 'Ledige plasser' });
      expect(sortButton2).toBeVisible();
      expect(columnHeader2).toBeVisible();
      expect(sortButton2).not.toHaveAttribute('aria-pressed');
      expect(columnHeader2).not.toHaveAttribute('aria-sort');

      userEvent.click(sortButton1);
      expect(sortButton1).toHaveAttribute('aria-pressed', 'true');
      expect(columnHeader1).toHaveAttribute('aria-sort', 'ascending');
      expect(sortButton2).not.toHaveAttribute('aria-pressed');
      expect(columnHeader2).not.toHaveAttribute('aria-sort');

      userEvent.click(sortButton1);
      expect(sortButton1).toHaveAttribute('aria-pressed', 'true');
      expect(columnHeader1).toHaveAttribute('aria-sort', 'descending');
      expect(sortButton2).not.toHaveAttribute('aria-pressed');
      expect(columnHeader2).not.toHaveAttribute('aria-sort');

      userEvent.click(sortButton2);
      expect(sortButton1).not.toHaveAttribute('aria-pressed');
      expect(columnHeader1).not.toHaveAttribute('aria-sort');
      expect(sortButton2).toHaveAttribute('aria-pressed', 'true');
      expect(columnHeader2).toHaveAttribute('aria-sort', 'ascending');

      userEvent.click(sortButton2);
      expect(sortButton1).not.toHaveAttribute('aria-pressed');
      expect(columnHeader1).not.toHaveAttribute('aria-sort');
      expect(sortButton2).toHaveAttribute('aria-pressed', 'true');
      expect(columnHeader2).toHaveAttribute('aria-sort', 'descending');
    });
  });
});
