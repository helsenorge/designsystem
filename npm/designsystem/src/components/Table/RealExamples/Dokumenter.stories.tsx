import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Table, { SortDirection, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../';

interface DelingsloggRad {
  id: string;
  naar: string;
  hvem: string;
  hva: string;
}

const delingslogg: DelingsloggRad[] = [
  { id: 'd1', naar: '2024-05-01', hvem: 'Fastlegekontoret', hva: 'Henvisning' },
  { id: 'd2', naar: '2024-04-18', hvem: 'NAV', hva: 'Sykmelding' },
  { id: 'd3', naar: '2024-03-22', hvem: 'Fysioterapeut', hva: 'Epikrise' },
];

const meta = {
  title: '@helsenorge/designsystem-react/Components/Table/RealExamples/Dokumenter',
  component: Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Table} />,
      description: {
        component:
          'Basert på delingsloggen for dokumenter i HN-Dokumenter. Sorteringstilstanden eies manuelt av consumer (kolonnenøkkel + retning), ' +
          'tilsvarende customSetSortValue-mønsteret fra den gamle data-table-pakken, men nå gjort eksplisitt.',
      },
    },
  },
  args: {
    caption: 'Delingslogg for dokument',
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const DokumentDelingLogg: Story = {
  render: function DokumentDelingLoggStory(args) {
    const [sortColumn, setSortColumn] = useState<keyof DelingsloggRad>('naar');
    const [isAsc, setIsAsc] = useState(false);

    const onSort = (column: keyof DelingsloggRad): void => {
      if (column === sortColumn) {
        setIsAsc(!isAsc);
      } else {
        setSortColumn(column);
        setIsAsc(true);
      }
    };

    const sortertData = [...delingslogg].sort((a, b) => {
      const result = String(a[sortColumn]).localeCompare(String(b[sortColumn]), 'nb', { numeric: true });
      return isAsc ? result : -result;
    });

    const sortDir = (column: keyof DelingsloggRad): SortDirection | undefined =>
      column === sortColumn ? (isAsc ? SortDirection.asc : SortDirection.desc) : undefined;

    return (
      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableHeadCell sortDir={sortDir('naar')} onClick={(): void => onSort('naar')}>
              {'Når'}
            </TableHeadCell>
            <TableHeadCell sortDir={sortDir('hvem')} onClick={(): void => onSort('hvem')}>
              {'Hvem'}
            </TableHeadCell>
            <TableHeadCell sortDir={sortDir('hva')} onClick={(): void => onSort('hva')}>
              {'Hva'}
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortertData.map(rad => (
            <TableRow key={rad.id}>
              <TableCell>{rad.naar}</TableCell>
              <TableCell>{rad.hvem}</TableCell>
              <TableCell>{rad.hva}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
