import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import UNSAFE_Table, {
  SortDirection,
  UNSAFE_TableBody,
  UNSAFE_TableCell,
  UNSAFE_TableHead,
  UNSAFE_TableHeadCell,
  UNSAFE_TableRow,
} from '../';

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
  title: '@helsenorge/designsystem-react/Components/UNSAFE_Table/RealExamples/Dokumenter',
  component: UNSAFE_Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={UNSAFE_Table} />,
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
} satisfies Meta<typeof UNSAFE_Table>;

export default meta;

type Story = StoryObj<typeof UNSAFE_Table>;

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
      <UNSAFE_Table {...args}>
        <UNSAFE_TableHead>
          <UNSAFE_TableRow>
            <UNSAFE_TableHeadCell sortDir={sortDir('naar')} onClick={(): void => onSort('naar')}>
              {'Når'}
            </UNSAFE_TableHeadCell>
            <UNSAFE_TableHeadCell sortDir={sortDir('hvem')} onClick={(): void => onSort('hvem')}>
              {'Hvem'}
            </UNSAFE_TableHeadCell>
            <UNSAFE_TableHeadCell sortDir={sortDir('hva')} onClick={(): void => onSort('hva')}>
              {'Hva'}
            </UNSAFE_TableHeadCell>
          </UNSAFE_TableRow>
        </UNSAFE_TableHead>
        <UNSAFE_TableBody>
          {sortertData.map(rad => (
            <UNSAFE_TableRow key={rad.id}>
              <UNSAFE_TableCell dataLabel="Når">{rad.naar}</UNSAFE_TableCell>
              <UNSAFE_TableCell dataLabel="Hvem">{rad.hvem}</UNSAFE_TableCell>
              <UNSAFE_TableCell dataLabel="Hva">{rad.hva}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          ))}
        </UNSAFE_TableBody>
      </UNSAFE_Table>
    );
  },
};
