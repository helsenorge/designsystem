import React from 'react';
import { screen, render } from '@testing-library/react';
import { SmallViewportVariant, Table, TableBody, TableHead, TableHeadCell, TableCell, TableRow, HeaderCategory } from './';

describe('Gitt at Tabel skal vises', (): void => {
  describe('Når den skal vises', (): void => {
    it('Så vises en tabell', (): void => {
      const { container } = render(
        <Table smallViewportVariant={SmallViewportVariant.horizontalscroll} testId="test01">
          <TableHead category={HeaderCategory.normal}>
            <TableRow key="0">
              <TableHeadCell>Navn</TableHeadCell>
              <TableHeadCell>Beskrivelse</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key="1">
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
