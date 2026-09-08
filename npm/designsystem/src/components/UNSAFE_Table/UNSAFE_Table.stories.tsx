import React, { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Button from '../Button';
import Highlighter from '../Highlighter';
import Input from '../Input';
import Spacer from '../Spacer';

import UNSAFE_Table, {
  HeaderCategory,
  SortDirection,
  TableBody,
  TableCell,
  TableExpandedRow,
  TableExpanderCell,
  TableHead,
  TableHeadCell,
  TableRow,
  useTableExpandedRows,
  useTableShowMore,
  useSort,
  type UNSAFE_TableProps,
} from './';

interface Fastlege {
  id: string;
  navn: string;
  alder: number;
  kontor: { navn: string; adresse: string };
  ledigePlasser: number;
  spraak: string[];
}

const fastleger: Fastlege[] = [
  {
    id: 'lege1',
    navn: 'Line Danser',
    alder: 42,
    kontor: { navn: 'Curato Røntgen', adresse: 'Karl Johans gate 1' },
    ledigePlasser: 3,
    spraak: ['Norsk', 'Engelsk'],
  },
  {
    id: 'lege2',
    navn: 'Hans Nilsen',
    alder: 38,
    kontor: { navn: 'Aleris Frogner', adresse: 'Frognerveien 10' },
    ledigePlasser: 0,
    spraak: ['Norsk'],
  },
  {
    id: 'lege3',
    navn: 'Åse Berg',
    alder: 55,
    kontor: { navn: 'Best Helse', adresse: 'Storgata 5' },
    ledigePlasser: 12,
    spraak: ['Norsk', 'Tysk'],
  },
  {
    id: 'lege4',
    navn: 'Bjørn Olsen',
    alder: 61,
    kontor: { navn: 'Volvat Majorstuen', adresse: 'Bogstadveien 20' },
    ledigePlasser: 7,
    spraak: ['Norsk', 'Engelsk', 'Fransk'],
  },
  {
    id: 'lege5',
    navn: 'Kari Moen',
    alder: 29,
    kontor: { navn: 'Legevakten', adresse: 'Storgata 40' },
    ledigePlasser: 1,
    spraak: ['Norsk'],
  },
];

const meta = {
  title: '@helsenorge/designsystem-react/Components/UNSAFE_Table',
  component: UNSAFE_Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={UNSAFE_Table} />,
      description: {
        component:
          'UNSAFE_Table er en flat variant av Table hvor state eies av consumer. ' +
          'Hooks (useSort, useTableExpandedRows, useTableShowMore) og hjelpekomponenter gir featursettet fra DataTable, ' +
          'men komponeres fritt sammen med Table-primitivene.',
      },
    },
  },
  args: {
    caption: 'Fastleger i nærheten',
  },
} satisfies Meta<typeof UNSAFE_Table>;

export default meta;

type Story = StoryObj<UNSAFE_TableProps>;

export const Default: Story = {
  render: function DefaultStory(args) {
    const { sortedData, getSortProps } = useSort({
      data: fastleger,
      initialSortColumnKey: 'navn',
    });

    return (
      <UNSAFE_Table {...args}>
        <TableHead category={HeaderCategory.sortable}>
          <TableRow>
            <TableHeadCell {...getSortProps('navn')}>{'Navn'}</TableHeadCell>
            <TableHeadCell {...getSortProps('alder')}>{'Alder'}</TableHeadCell>
            <TableHeadCell {...getSortProps('kontor.navn')}>{'Fastlegekontor'}</TableHeadCell>
            <TableHeadCell {...getSortProps('ledigePlasser')}>{'Ledige plasser'}</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map(fastlege => (
            <TableRow key={fastlege.id}>
              <TableCell dataLabel="Navn">{fastlege.navn}</TableCell>
              <TableCell dataLabel="Alder">{fastlege.alder}</TableCell>
              <TableCell dataLabel="Fastlegekontor">{fastlege.kontor.navn}</TableCell>
              <TableCell dataLabel="Ledige plasser">{fastlege.ledigePlasser}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </UNSAFE_Table>
    );
  },
};

export const ExpandableRows: Story = {
  render: function ExpandableRowsStory(args) {
    const { isExpanded, toggleExpanded, collapseAll } = useTableExpandedRows();
    const { sortedData, getSortProps } = useSort({
      data: fastleger,
      // Sortering lukker alle ekspanderte rader
      onSortChange: collapseAll,
    });

    const numberOfColumns = 3;

    return (
      <UNSAFE_Table {...args}>
        <TableHead category={HeaderCategory.sortable}>
          <TableRow>
            <TableHeadCell {...getSortProps('navn')}>{'Navn'}</TableHeadCell>
            <TableHeadCell {...getSortProps('kontor.navn')}>{'Fastlegekontor'}</TableHeadCell>
            <TableHeadCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map(fastlege => {
            const expanded = isExpanded(fastlege.id);
            const expandedRowId = `detaljer-${fastlege.id}`;

            return (
              <React.Fragment key={fastlege.id}>
                <TableRow
                  expandable
                  expanded={expanded}
                  onClick={(): void => toggleExpanded(fastlege.id)}
                  hideDetailsText="Skjul detaljer"
                  showDetailsText="Vis detaljer"
                >
                  <TableCell dataLabel="Navn">{fastlege.navn}</TableCell>
                  <TableCell dataLabel="Fastlegekontor">{fastlege.kontor.navn}</TableCell>
                  <TableExpanderCell
                    expanded={expanded}
                    expandableRowId={expandedRowId}
                    hideDetailsText="Skjul detaljer"
                    showDetailsText="Vis detaljer"
                  />
                </TableRow>
                <TableExpandedRow
                  id={expandedRowId}
                  expanded={expanded}
                  numberOfColumns={numberOfColumns}
                  hideDetailsText="Skjul detaljer"
                  toggleClick={(): void => toggleExpanded(fastlege.id)}
                >
                  <p>{`${fastlege.kontor.navn}, ${fastlege.kontor.adresse}. Språk: ${fastlege.spraak.join(', ')}`}</p>
                </TableExpandedRow>
              </React.Fragment>
            );
          })}
        </TableBody>
      </UNSAFE_Table>
    );
  },
};

export const ShowMore: Story = {
  render: function ShowMoreStory(args) {
    const { sortedData, getSortProps } = useSort({ data: fastleger });
    const { visibleData, hasMore, showMore, newRowsStartIndex, firstNewRowRef } = useTableShowMore<Fastlege, HTMLButtonElement>({
      data: sortedData,
      pageSize: 2,
    });

    return (
      <>
        <UNSAFE_Table {...args}>
          <TableHead category={HeaderCategory.sortable}>
            <TableRow>
              <TableHeadCell {...getSortProps('navn')}>{'Navn'}</TableHeadCell>
              <TableHeadCell {...getSortProps('kontor.navn')}>{'Fastlegekontor'}</TableHeadCell>
              <TableHeadCell>{'Handling'}</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleData.map((fastlege, index) => (
              <TableRow key={fastlege.id}>
                <TableCell dataLabel="Navn">{fastlege.navn}</TableCell>
                <TableCell dataLabel="Fastlegekontor">{fastlege.kontor.navn}</TableCell>
                <TableCell dataLabel="Handling">
                  <Button variant="borderless" ref={index === newRowsStartIndex ? firstNewRowRef : undefined}>
                    {'Bytt fastlege'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </UNSAFE_Table>
        {hasMore && (
          <>
            <Spacer size="s" />
            <Button variant="outline" onClick={showMore}>
              {'Vis mer'}
            </Button>
          </>
        )}
      </>
    );
  },
};

export const ServerSideSorting: Story = {
  render: function ServerSideSortingStory(args) {
    // Simulerer server-side sortering: consumer eier både sortering og data
    const [serverData, setServerData] = useState(fastleger);
    const { sortedData, getSortProps } = useSort({
      data: serverData,
      disableInternalSort: true,
      onSortChange: (columnKey, sortDirection): void => {
        const sorted = [...fastleger].sort((a, b) => {
          const result = String(a[columnKey as keyof Fastlege]).localeCompare(String(b[columnKey as keyof Fastlege]), 'nb', {
            numeric: true,
          });
          return sortDirection === SortDirection.desc ? -result : result;
        });
        setServerData(sorted);
      },
    });

    return (
      <UNSAFE_Table {...args}>
        <TableHead category={HeaderCategory.sortable}>
          <TableRow>
            <TableHeadCell {...getSortProps('navn')}>{'Navn'}</TableHeadCell>
            <TableHeadCell {...getSortProps('alder')}>{'Alder'}</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map(fastlege => (
            <TableRow key={fastlege.id}>
              <TableCell dataLabel="Navn">{fastlege.navn}</TableCell>
              <TableCell dataLabel="Alder">{fastlege.alder}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </UNSAFE_Table>
    );
  },
};

export const HighlightSearch: Story = {
  render: function HighlightSearchStory(args) {
    const [searchText, setSearchText] = useState('');

    const visibleData = fastleger.filter(
      fastlege => !searchText || `${fastlege.navn} ${fastlege.kontor.navn}`.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
      <>
        <Input label="Søk etter fastlege" value={searchText} onChange={(e): void => setSearchText(e.target.value)} />
        <Spacer size="s" />
        <UNSAFE_Table {...args}>
          <TableHead>
            <TableRow>
              <TableHeadCell>{'Navn'}</TableHeadCell>
              <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={2}>{'Ingen fastleger samsvarer med søket.'}</TableCell>
              </TableRow>
            ) : (
              visibleData.map(fastlege => (
                <TableRow key={fastlege.id}>
                  <TableCell dataLabel="Navn">
                    <Highlighter searchText={searchText}>{fastlege.navn}</Highlighter>
                  </TableCell>
                  <TableCell dataLabel="Fastlegekontor">
                    <Highlighter searchText={searchText}>{fastlege.kontor.navn}</Highlighter>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </UNSAFE_Table>
      </>
    );
  },
};

export const EmptyState: Story = {
  render: function EmptyStateStory(args) {
    return (
      <UNSAFE_Table {...args}>
        <TableHead>
          <TableRow>
            <TableHeadCell>{'Navn'}</TableHeadCell>
            <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell colSpan={2}>{'Du har ingen fastleger.'}</TableCell>
          </TableRow>
        </TableBody>
      </UNSAFE_Table>
    );
  },
};
