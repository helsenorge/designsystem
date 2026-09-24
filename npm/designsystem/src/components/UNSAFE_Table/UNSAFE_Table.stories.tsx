import React, { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Button from '../Button';
import FilterSort from '../Filter/FilterSort';
import Highlighter from '../Highlighter';
import Input from '../Input';
import LinkList from '../LinkList';
import Spacer from '../Spacer';
import { TableColors, TableSizes } from './constants';
import PopMenu from '../PopMenu';
import Title from '../Title';

import UNSAFE_Table, {
  SortDirection,
  UNSAFE_TableBody,
  UNSAFE_TableCell,
  UNSAFE_TableExpandedRow,
  UNSAFE_TableHeadCell,
  UNSAFE_TableRow,
  useTableExpandedRows,
  useTableShowMore,
  useSort,
  type UNSAFE_TableProps,
  UNSAFE_TableHead,
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
    return (
      <UNSAFE_Table {...args}>
        <UNSAFE_TableHead>
          <UNSAFE_TableRow>
            <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
            <UNSAFE_TableHeadCell>{'Alder'}</UNSAFE_TableHeadCell>
            <UNSAFE_TableHeadCell>{'Fastlegekontor'}</UNSAFE_TableHeadCell>
            <UNSAFE_TableHeadCell>{'Ledige plasser'}</UNSAFE_TableHeadCell>
          </UNSAFE_TableRow>
        </UNSAFE_TableHead>
        <UNSAFE_TableBody>
          {fastleger.map(fastlege => (
            <UNSAFE_TableRow key={fastlege.id}>
              <UNSAFE_TableCell dataLabel="Navn">{fastlege.navn}</UNSAFE_TableCell>
              <UNSAFE_TableCell dataLabel="Alder">{fastlege.alder}</UNSAFE_TableCell>
              <UNSAFE_TableCell dataLabel="Fastlegekontor">{fastlege.kontor.navn}</UNSAFE_TableCell>
              <UNSAFE_TableCell dataLabel="Ledige plasser">{fastlege.ledigePlasser}</UNSAFE_TableCell>
            </UNSAFE_TableRow>
          ))}
        </UNSAFE_TableBody>
      </UNSAFE_Table>
    );
  },
};

export const Sizes: Story = {
  render: function DefaultStory(args) {
    return (
      <>
        <Title>{'Normal'}</Title>
        <UNSAFE_Table size={TableSizes.normal} {...args}>
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Alder'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Fastlegekontor'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Ledige plasser'}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            {fastleger.map(fastlege => (
              <UNSAFE_TableRow key={fastlege.id}>
                <UNSAFE_TableCell dataLabel="Navn">{fastlege.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Alder">{fastlege.alder}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Fastlegekontor">{fastlege.kontor.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Ledige plasser">{fastlege.ledigePlasser}</UNSAFE_TableCell>
              </UNSAFE_TableRow>
            ))}
          </UNSAFE_TableBody>
        </UNSAFE_Table>
        <Spacer size={'2xl'} />
        <Title>{'Compact'}</Title>
        <UNSAFE_Table size={TableSizes.compact} {...args}>
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Alder'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Fastlegekontor'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Ledige plasser'}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            {fastleger.map(fastlege => (
              <UNSAFE_TableRow key={fastlege.id}>
                <UNSAFE_TableCell dataLabel="Navn">{fastlege.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Alder">{fastlege.alder}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Fastlegekontor">{fastlege.kontor.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Ledige plasser">{fastlege.ledigePlasser}</UNSAFE_TableCell>
              </UNSAFE_TableRow>
            ))}
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      </>
    );
  },
};

export const Colors: Story = {
  render: function DefaultStory(args) {
    return (
      <>
        <Title>{'Normal'}</Title>
        <UNSAFE_Table color={TableColors.normal} {...args}>
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Alder'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Fastlegekontor'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Ledige plasser'}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            {fastleger.map(fastlege => (
              <UNSAFE_TableRow key={fastlege.id}>
                <UNSAFE_TableCell dataLabel="Navn">{fastlege.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Alder">{fastlege.alder}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Fastlegekontor">{fastlege.kontor.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Ledige plasser">{fastlege.ledigePlasser}</UNSAFE_TableCell>
              </UNSAFE_TableRow>
            ))}
          </UNSAFE_TableBody>
        </UNSAFE_Table>
        <Spacer size={'2xl'} />
        <Title>{'Transparent'}</Title>
        <UNSAFE_Table color={TableColors.transparent} {...args}>
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Alder'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Fastlegekontor'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Ledige plasser'}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            {fastleger.map(fastlege => (
              <UNSAFE_TableRow key={fastlege.id}>
                <UNSAFE_TableCell dataLabel="Navn">{fastlege.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Alder">{fastlege.alder}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Fastlegekontor">{fastlege.kontor.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Ledige plasser">{fastlege.ledigePlasser}</UNSAFE_TableCell>
              </UNSAFE_TableRow>
            ))}
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      </>
    );
  },
};

export const Sortable: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'useSort kombinert med FilterSort: en nedtrekksmeny lar bruker velge sorteringsvalg, i tillegg til sortering via kolonneoverskrifter.',
      },
    },
  },
  render: function SortStory(args) {
    const [sortValg, setSortValg] = useState('navnAsc');

    const sortAlternativer: Record<string, { columnKey: string; direction?: SortDirection }> = {
      navnAsc: { columnKey: 'navn' },
      navnDesc: { columnKey: 'navn', direction: SortDirection.desc },
      alderAsc: { columnKey: 'alder' },
      alderDesc: { columnKey: 'alder', direction: SortDirection.desc },
    };

    const { sortedData, getSortProps } = useSort({
      data: fastleger,
      sortColumnKey: sortAlternativer[sortValg]?.columnKey,
      sortDirection: sortAlternativer[sortValg]?.direction,
      onSortChange: (columnKey, direction): void => {
        // Synkroniser FilterSort-valget med sortering utført via kolonneoverskrift
        const match = Object.entries(sortAlternativer).find(
          ([, valg]) => valg.columnKey === columnKey && (valg.direction ?? SortDirection.asc) === direction
        )?.[0];
        if (match) {
          setSortValg(match);
        }
      },
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FilterSort value={sortValg} onChange={(e): void => setSortValg(e.target.value)}>
          <option value={'navnAsc'}>{'Navn A-Å'}</option>
          <option value={'navnDesc'}>{'Navn Å-A'}</option>
          <option value={'alderAsc'}>{'Alder stigende'}</option>
          <option value={'alderDesc'}>{'Alder synkende'}</option>
        </FilterSort>
        <UNSAFE_Table {...args}>
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell {...getSortProps('navn')}>{'Navn'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell {...getSortProps('alder')}>{'Alder'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Fastlegekontor'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Ledige plasser'}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            {sortedData.map(fastlege => (
              <UNSAFE_TableRow key={fastlege.id}>
                <UNSAFE_TableCell dataLabel="Navn">{fastlege.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Alder">{fastlege.alder}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Fastlegekontor">{fastlege.kontor.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Ledige plasser">{fastlege.ledigePlasser}</UNSAFE_TableCell>
              </UNSAFE_TableRow>
            ))}
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      </div>
    );
  },
};

export const Expandable: Story = {
  render: function ExpandableRowsStory(args) {
    const { isExpanded, toggleExpanded } = useTableExpandedRows();

    const numberOfColumns = 3;

    return (
      <UNSAFE_Table {...args}>
        <UNSAFE_TableHead>
          <UNSAFE_TableRow>
            <UNSAFE_TableHeadCell />
            <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
            <UNSAFE_TableHeadCell>{'Fastlegekontor'}</UNSAFE_TableHeadCell>
          </UNSAFE_TableRow>
        </UNSAFE_TableHead>
        <UNSAFE_TableBody>
          {fastleger.map(fastlege => {
            const expanded = isExpanded(fastlege.id);
            const expandedRowId = `detaljer-${fastlege.id}`;

            return (
              <React.Fragment key={fastlege.id}>
                <UNSAFE_TableRow
                  expandable
                  expanded={expanded}
                  expandableRowId={expandedRowId}
                  onClick={(): void => toggleExpanded(fastlege.id)}
                  hideDetailsText="Skjul detaljer"
                  showDetailsText="Vis detaljer"
                >
                  <UNSAFE_TableCell dataLabel="Navn">{fastlege.navn}</UNSAFE_TableCell>
                  <UNSAFE_TableCell dataLabel="Fastlegekontor">{fastlege.kontor.navn}</UNSAFE_TableCell>
                </UNSAFE_TableRow>
                <UNSAFE_TableExpandedRow
                  id={expandedRowId}
                  expanded={expanded}
                  numberOfColumns={numberOfColumns}
                  hideDetailsText="Skjul detaljer"
                  toggleClick={(): void => toggleExpanded(fastlege.id)}
                >
                  <p>{`${fastlege.kontor.navn}, ${fastlege.kontor.adresse}. Språk: ${fastlege.spraak.join(', ')}`}</p>
                </UNSAFE_TableExpandedRow>
              </React.Fragment>
            );
          })}
        </UNSAFE_TableBody>
      </UNSAFE_Table>
    );
  },
};

export const WithPopMenu: Story = {
  render: function ExpandableRowsStory(args) {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>): void => {
      event.preventDefault();
    };

    return (
      <UNSAFE_Table {...args}>
        <UNSAFE_TableHead>
          <UNSAFE_TableRow>
            <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
            <UNSAFE_TableHeadCell>{'Fastlegekontor'}</UNSAFE_TableHeadCell>
            <UNSAFE_TableHeadCell />
          </UNSAFE_TableRow>
        </UNSAFE_TableHead>
        <UNSAFE_TableBody>
          {fastleger.map(fastlege => {
            return (
              <React.Fragment key={fastlege.id}>
                <UNSAFE_TableRow
                  hideDetailsText="Skjul detaljer"
                  showDetailsText="Vis detaljer"
                  popMenu={
                    <PopMenu>
                      <LinkList chevron={false}>
                        <LinkList.Link onClick={handleClick} href="#">
                          {'Link 1'}
                        </LinkList.Link>
                        <LinkList.Link onClick={handleClick} href="#">
                          {'Link 2'}
                        </LinkList.Link>
                      </LinkList>
                    </PopMenu>
                  }
                >
                  <UNSAFE_TableCell dataLabel="Navn">{fastlege.navn}</UNSAFE_TableCell>
                  <UNSAFE_TableCell dataLabel="Fastlegekontor">{fastlege.kontor.navn}</UNSAFE_TableCell>
                </UNSAFE_TableRow>
              </React.Fragment>
            );
          })}
        </UNSAFE_TableBody>
      </UNSAFE_Table>
    );
  },
};

export const ShowMore: Story = {
  render: function ShowMoreStory(args) {
    const { sortedData, sortColumnKey, requestSort, getSortProps } = useSort({ data: fastleger });
    const { visibleData, hasMore, showMore, newRowsStartIndex, firstNewRowRef } = useTableShowMore<Fastlege, HTMLButtonElement>({
      data: sortedData,
      pageSize: 2,
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FilterSort value={sortColumnKey ?? ''} onChange={(e): void => requestSort(e.target.value)}>
          <option value="navn">{'Navn'}</option>
          <option value="kontor.navn">{'Fastlegekontor'}</option>
        </FilterSort>
        <Spacer size="s" />
        <UNSAFE_Table {...args}>
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell {...getSortProps('navn')}>{'Navn'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell {...getSortProps('kontor.navn')}>{'Fastlegekontor'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Handling'}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            {visibleData.map((fastlege, index) => (
              <UNSAFE_TableRow key={fastlege.id}>
                <UNSAFE_TableCell dataLabel="Navn">{fastlege.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Fastlegekontor">{fastlege.kontor.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Handling">
                  <Button variant="borderless" ref={index === newRowsStartIndex ? firstNewRowRef : undefined}>
                    {'Bytt fastlege'}
                  </Button>
                </UNSAFE_TableCell>
              </UNSAFE_TableRow>
            ))}
          </UNSAFE_TableBody>
        </UNSAFE_Table>
        {hasMore && (
          <>
            <Spacer size="s" />
            <Button variant="outline" onClick={showMore}>
              {'Vis mer'}
            </Button>
          </>
        )}
      </div>
    );
  },
};

export const ServerSideSorting: Story = {
  render: function ServerSideSortingStory(args) {
    // Simulerer server-side sortering: consumer eier både sortering og data
    const [serverData, setServerData] = useState(fastleger);
    const { sortedData, sortColumnKey, requestSort, getSortProps } = useSort({
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
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FilterSort value={sortColumnKey ?? ''} onChange={(e): void => requestSort(e.target.value)}>
          <option value="navn">{'Navn'}</option>
          <option value="alder">{'Alder'}</option>
        </FilterSort>
        <Spacer size="s" />
        <UNSAFE_Table {...args}>
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell {...getSortProps('navn')}>{'Navn'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell {...getSortProps('alder')}>{'Alder'}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            {sortedData.map(fastlege => (
              <UNSAFE_TableRow key={fastlege.id}>
                <UNSAFE_TableCell dataLabel="Navn">{fastlege.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Alder">{fastlege.alder}</UNSAFE_TableCell>
              </UNSAFE_TableRow>
            ))}
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      </div>
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
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Fastlegekontor'}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            {visibleData.length === 0 ? (
              <UNSAFE_TableRow>
                <UNSAFE_TableCell colSpan={2}>{'Ingen fastleger samsvarer med søket.'}</UNSAFE_TableCell>
              </UNSAFE_TableRow>
            ) : (
              visibleData.map(fastlege => (
                <UNSAFE_TableRow key={fastlege.id}>
                  <UNSAFE_TableCell dataLabel="Navn">
                    <Highlighter searchText={searchText}>{fastlege.navn}</Highlighter>
                  </UNSAFE_TableCell>
                  <UNSAFE_TableCell dataLabel="Fastlegekontor">
                    <Highlighter searchText={searchText}>{fastlege.kontor.navn}</Highlighter>
                  </UNSAFE_TableCell>
                </UNSAFE_TableRow>
              ))
            )}
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      </>
    );
  },
};

export const EmptyState: Story = {
  render: function EmptyStateStory(args) {
    return (
      <UNSAFE_Table {...args}>
        <UNSAFE_TableHead>
          <UNSAFE_TableRow>
            <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
            <UNSAFE_TableHeadCell>{'Fastlegekontor'}</UNSAFE_TableHeadCell>
          </UNSAFE_TableRow>
        </UNSAFE_TableHead>
        <UNSAFE_TableBody>
          <UNSAFE_TableRow>
            <UNSAFE_TableCell colSpan={2}>{'Du har ingen fastleger.'}</UNSAFE_TableCell>
          </UNSAFE_TableRow>
        </UNSAFE_TableBody>
      </UNSAFE_Table>
    );
  },
};

export const TwoDimensionalRows: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Todimensjonale tabeller (nivå 2-rader) komponeres av consumer: for hvert element i en liste rendres en ekstra rad ' +
          'som flatt søsken av hovedraden, med egen key per element.',
      },
    },
  },
  render: function TwoDimensionalRowsStory(args) {
    return (
      <UNSAFE_Table {...args}>
        <UNSAFE_TableHead>
          <UNSAFE_TableRow>
            <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
            <UNSAFE_TableHeadCell>{'Fastlegekontor'}</UNSAFE_TableHeadCell>
            <UNSAFE_TableHeadCell>{'Språk'}</UNSAFE_TableHeadCell>
          </UNSAFE_TableRow>
        </UNSAFE_TableHead>
        <UNSAFE_TableBody>
          {fastleger.map(fastlege => (
            <React.Fragment key={fastlege.id}>
              <UNSAFE_TableRow>
                <UNSAFE_TableCell dataLabel="Navn">{fastlege.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Fastlegekontor">{fastlege.kontor.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Språk">{`${fastlege.spraak.length} språk`}</UNSAFE_TableCell>
              </UNSAFE_TableRow>
              {fastlege.spraak.map((spraak, index) => (
                <UNSAFE_TableRow key={`${fastlege.id}-spraak-${index}`}>
                  <UNSAFE_TableCell dataLabel="Navn" />
                  <UNSAFE_TableCell dataLabel="Fastlegekontor" />
                  <UNSAFE_TableCell dataLabel="Språk">{`${index + 1} av ${fastlege.spraak.length}: ${spraak}`}</UNSAFE_TableCell>
                </UNSAFE_TableRow>
              ))}
            </React.Fragment>
          ))}
        </UNSAFE_TableBody>
      </UNSAFE_Table>
    );
  },
};

export const CustomSortValue: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Egendefinert sorteringsverdi per kolonne: getSortValue transformerer verdien det sorteres på ' +
          '(her antall språk og antall ledige plasser gruppert som ledig/fullt), tilsvarende customSetSortValue i gamle Table.',
      },
    },
  },
  render: function CustomSortValueStory(args) {
    const { sortedData, sortColumnKey, requestSort, getSortProps } = useSort({
      data: fastleger,
      getSortValue: (fastlege, sortKey) => {
        if (sortKey === 'spraak') {
          return fastlege.spraak.length;
        }
        if (sortKey === 'ledigePlasser') {
          // Sorter først på ledig/fullt, deretter på antall
          return fastlege.ledigePlasser === 0 ? -1000 : fastlege.ledigePlasser;
        }
        return fastlege[sortKey as keyof Fastlege] as string | number;
      },
    });

    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <FilterSort value={sortColumnKey ?? ''} onChange={(e): void => requestSort(e.target.value)}>
          <option value="navn">{'Navn'}</option>
          <option value="spraak">{'Språk'}</option>
          <option value="ledigePlasser">{'Ledige plasser'}</option>
        </FilterSort>
        <Spacer size="s" />
        <UNSAFE_Table {...args}>
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell {...getSortProps('navn')}>{'Navn'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell {...getSortProps('spraak')}>{'Språk'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell {...getSortProps('ledigePlasser')}>{'Ledige plasser'}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            {sortedData.map(fastlege => (
              <UNSAFE_TableRow key={fastlege.id}>
                <UNSAFE_TableCell dataLabel="Navn">{fastlege.navn}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Språk">{fastlege.spraak.join(', ')}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Ledige plasser">
                  {fastlege.ledigePlasser === 0 ? 'Fullt' : fastlege.ledigePlasser}
                </UNSAFE_TableCell>
              </UNSAFE_TableRow>
            ))}
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      </div>
    );
  },
};
