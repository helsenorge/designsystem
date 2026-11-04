import React, { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import { LanguageLocales } from '../../constants';
import { useLanguage } from '../../hooks/useLanguage';
import LanguageProvider from '../../utils/language';
import Button from '../Button';
import Dropdown from '../Dropdown';
import { defaultConfig, ResponsiveTableVariant, TableColors, TableSizes } from './constants';
import { getResources } from './resourceHelper';
import FilterSort from '../Filter/FilterSort';
import Highlighter from '../Highlighter';
import Globe from '../Icons/Globe';
import Input from '../Input';
import LinkList from '../LinkList';
import PopMenu from '../PopMenu';
import Select from '../Select';
import Spacer from '../Spacer';
import StatusDot from '../StatusDot';
import Title from '../Title';

import Table, {
  SortDirection,
  TableBody,
  TableCell,
  TableHeadCell,
  TableRow,
  useTableExpandedRows,
  useTableShowMore,
  useSort,
  type TableProps,
  type SortKey,
  TableHead,
} from './';

interface Fastlege {
  id: string;
  navn: string;
  alder: number;
  kontor: { navn: string; adresse: string };
  ledigePlasser: number;
  spraak: string[];
  beskrivelse?: string;
}

const fastleger: Fastlege[] = [
  {
    id: 'lege1',
    navn: 'Line Danser',
    alder: 42,
    kontor: { navn: 'Curato Røntgen', adresse: 'Karl Johans gate 1' },
    ledigePlasser: 3,
    spraak: ['Norsk', 'Engelsk'],
    beskrivelse:
      'Line har lang erfaring med oppfølging av pasienter i alle livsfaser. Hun legger vekt på gode samtaler og tydelige behandlingsplaner.',
  },
  {
    id: 'lege2',
    navn: 'Hans Nilsen',
    alder: 38,
    kontor: { navn: 'Aleris Frogner', adresse: 'Frognerveien 10' },
    ledigePlasser: 0,
    spraak: ['Norsk'],
    beskrivelse:
      'Hans arbeider særlig med forebyggende helse og kroniske plager. Kontoret har for tiden ingen ledige plasser for nye pasienter.',
  },
  {
    id: 'lege3',
    navn: 'Åse Berg',
    alder: 55,
    kontor: { navn: 'Best Helse', adresse: 'Storgata 5' },
    ledigePlasser: 12,
    spraak: ['Norsk', 'Tysk'],
    beskrivelse: 'Åse har bred erfaring fra allmennmedisin og tilbyr oppfølging på norsk og tysk. Hun har god kapasitet for nye pasienter.',
  },
  {
    id: 'lege4',
    navn: 'Bjørn Olsen',
    alder: 61,
    kontor: { navn: 'Volvat Majorstuen', adresse: 'Bogstadveien 20' },
    ledigePlasser: 7,
    spraak: ['Norsk', 'Engelsk', 'Fransk'],
    beskrivelse:
      'Bjørn har jobbet som fastlege i mange år og møter pasienter med ulike behov. Han kan også tilby konsultasjoner på engelsk og fransk.',
  },
  {
    id: 'lege5',
    navn: 'Kari Moen',
    alder: 29,
    kontor: { navn: 'Legevakten', adresse: 'Storgata 40' },
    ledigePlasser: 1,
    spraak: ['Norsk'],
    beskrivelse: 'Kari er opptatt av tilgjengelig og helhetlig helsehjelp. Hun har snart kapasitet til å ta imot én ny pasient.',
  },
];

const meta = {
  title: '@helsenorge/designsystem-react/Components/Table',
  component: Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Table} />,
      description: {
        component:
          'Table er en flat variant hvor state eies av consumer. ' +
          'Hooks (useSort, useTableExpandedRows, useTableShowMore) og hjelpekomponenter gir featursettet fra DataTable, ' +
          'men komponeres fritt sammen med Table-primitivene.',
      },
    },
  },
  args: {
    caption: 'Fastleger i nærheten',
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<TableProps>;

export const Default: Story = {
  render: function DefaultStory(args) {
    return (
      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableHeadCell>{'Navn'}</TableHeadCell>
            <TableHeadCell>{'Alder'}</TableHeadCell>
            <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
            <TableHeadCell>{'Ledige plasser'}</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fastleger.map(fastlege => (
            <TableRow key={fastlege.id}>
              <TableCell>{fastlege.navn}</TableCell>
              <TableCell>{fastlege.alder}</TableCell>
              <TableCell>{fastlege.kontor.navn}</TableCell>
              <TableCell>{fastlege.ledigePlasser}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export const ZebraStripes: Story = {
  args: {
    zebraStripes: true,
  },
  render: function ZebraStripesStory(args) {
    return (
      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableHeadCell>{'Navn'}</TableHeadCell>
            <TableHeadCell>{'Alder'}</TableHeadCell>
            <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
            <TableHeadCell>{'Ledige plasser'}</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fastleger.map(fastlege => (
            <TableRow key={fastlege.id}>
              <TableCell>{fastlege.navn}</TableCell>
              <TableCell>{fastlege.alder}</TableCell>
              <TableCell>{fastlege.kontor.navn}</TableCell>
              <TableCell>{fastlege.ledigePlasser}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export const Sizes: Story = {
  render: function DefaultStory(args) {
    return (
      <>
        <Title appearance={'title3'}>{'Normal'}</Title>
        <Table size={TableSizes.normal} {...args}>
          <TableHead>
            <TableRow>
              <TableHeadCell>{'Navn'}</TableHeadCell>
              <TableHeadCell>{'Alder'}</TableHeadCell>
              <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
              <TableHeadCell>{'Ledige plasser'}</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fastleger.map(fastlege => (
              <TableRow key={fastlege.id}>
                <TableCell>{fastlege.navn}</TableCell>
                <TableCell>{fastlege.alder}</TableCell>
                <TableCell>{fastlege.kontor.navn}</TableCell>
                <TableCell>{fastlege.ledigePlasser}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Spacer size={'2xl'} />
        <Title appearance={'title3'}>{'Compact'}</Title>
        <Table size={TableSizes.compact} {...args}>
          <TableHead>
            <TableRow>
              <TableHeadCell>{'Navn'}</TableHeadCell>
              <TableHeadCell>{'Alder'}</TableHeadCell>
              <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
              <TableHeadCell>{'Ledige plasser'}</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fastleger.map(fastlege => (
              <TableRow key={fastlege.id}>
                <TableCell>{fastlege.navn}</TableCell>
                <TableCell>{fastlege.alder}</TableCell>
                <TableCell>{fastlege.kontor.navn}</TableCell>
                <TableCell>{fastlege.ledigePlasser}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  },
};

export const Colors: Story = {
  render: function DefaultStory(args) {
    return (
      <>
        <Title appearance={'title3'}>{'Normal'}</Title>
        <Table color={TableColors.normal} {...args}>
          <TableHead>
            <TableRow>
              <TableHeadCell>{'Navn'}</TableHeadCell>
              <TableHeadCell>{'Alder'}</TableHeadCell>
              <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
              <TableHeadCell>{'Ledige plasser'}</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fastleger.map(fastlege => (
              <TableRow key={fastlege.id}>
                <TableCell>{fastlege.navn}</TableCell>
                <TableCell>{fastlege.alder}</TableCell>
                <TableCell>{fastlege.kontor.navn}</TableCell>
                <TableCell>{fastlege.ledigePlasser}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Spacer size={'2xl'} />
        <Title appearance={'title3'}>{'Transparent'}</Title>
        <Table color={TableColors.transparent} {...args}>
          <TableHead>
            <TableRow>
              <TableHeadCell>{'Navn'}</TableHeadCell>
              <TableHeadCell>{'Alder'}</TableHeadCell>
              <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
              <TableHeadCell>{'Ledige plasser'}</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fastleger.map(fastlege => (
              <TableRow key={fastlege.id}>
                <TableCell>{fastlege.navn}</TableCell>
                <TableCell>{fastlege.alder}</TableCell>
                <TableCell>{fastlege.kontor.navn}</TableCell>
                <TableCell>{fastlege.ledigePlasser}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  },
};

export const BreakpointConfigs: Story = {
  render: function ConfigStory(args) {
    type ConfigExample = {
      label: string;
      description: string;
      config: React.ComponentProps<typeof Table>['breakpointConfig'];
      wide?: boolean;
    };

    const configuredExamples: ConfigExample[] = [
      {
        label: 'Default config',
        description: 'Standardoppsettet kombinerer centeredoverflow med stack som fallback.',
        config: defaultConfig,
      },
    ];

    const variantExamples: ConfigExample[] = [
      {
        label: 'Normal',
        description: 'Tabellen beholder tabelloppsettet på alle skjermstørrelser.',
        config: { breakpoint: 'xl', variant: ResponsiveTableVariant.normal },
      },
      {
        label: 'Centered overflow',
        description:
          'Tabellen kan gå utenfor innholdsområdet, men forblir sentrert (tar effekt når tabellen er bred nok og det er nok plass på skjermen).',
        config: {
          breakpoint: 'xl',
          variant: ResponsiveTableVariant.centeredoverflow,
        },
        wide: true,
      },
      {
        label: 'Horizontal scroll',
        description: 'Tabellen med tolv kolonner får horisontal scroll når innholdet ikke får plass (fungerer bare på touch-enheter).',
        config: {
          breakpoint: 'xl',
          variant: ResponsiveTableVariant.horizontalscroll,
        },
      },
      {
        label: 'Stack',
        description: 'Stack visning (ment til å brukes på mobile breakpoints).',
        config: { breakpoint: 'xl', variant: ResponsiveTableVariant.stack },
      },
    ];

    const examples = [...configuredExamples, ...variantExamples];
    const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);

    const renderConfig = ({ label, description, config, wide = false }: ConfigExample): React.JSX.Element => (
      <React.Fragment key={label}>
        <Title appearance="title3">{label}</Title>
        <p>{description}</p>
        <Spacer size={'s'} />
        <Table {...args} breakpointConfig={config}>
          <TableHead>
            <TableRow>
              <TableHeadCell>{'Navn'}</TableHeadCell>
              <TableHeadCell>{'Alder'}</TableHeadCell>
              <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
              <TableHeadCell>{'Ledige plasser'}</TableHeadCell>
              {wide && (
                <>
                  <TableHeadCell>{'Språk'}</TableHeadCell>
                  <TableHeadCell>{'Adresse'}</TableHeadCell>
                  <TableHeadCell>{'ID'}</TableHeadCell>
                  <TableHeadCell>{'Status'}</TableHeadCell>
                  <TableHeadCell>{'Kapasitet'}</TableHeadCell>
                  <TableHeadCell>{'Prioritet'}</TableHeadCell>
                  <TableHeadCell>{'Region'}</TableHeadCell>
                  <TableHeadCell>{'Oppdatert'}</TableHeadCell>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {fastleger.map(fastlege => (
              <TableRow key={fastlege.id}>
                <TableCell>{fastlege.navn}</TableCell>
                <TableCell>{fastlege.alder}</TableCell>
                <TableCell>{fastlege.kontor.navn}</TableCell>
                <TableCell>{fastlege.ledigePlasser}</TableCell>
                {wide && (
                  <>
                    <TableCell>{fastlege.spraak.join(', ')}</TableCell>
                    <TableCell>{fastlege.kontor.adresse}</TableCell>
                    <TableCell>{fastlege.id}</TableCell>
                    <TableCell>{fastlege.ledigePlasser > 0 ? 'Ledig' : 'Fullt'}</TableCell>
                    <TableCell>{fastlege.ledigePlasser + 2}</TableCell>
                    <TableCell>{fastlege.ledigePlasser === 0 ? 'Høy' : 'Normal'}</TableCell>
                    <TableCell>{'Oslo'}</TableCell>
                    <TableCell>{'I dag'}</TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Spacer size={'2xl'} />
      </React.Fragment>
    );

    return (
      <>
        <Select
          label="Velg tabellkonfigurasjon"
          value={String(selectedExampleIndex)}
          onChange={event => setSelectedExampleIndex(Number(event.currentTarget.value))}
        >
          {examples.map((example, index) => (
            <option key={example.label} value={index}>
              {example.label}
            </option>
          ))}
        </Select>
        <Spacer size="s" />
        {renderConfig(examples[selectedExampleIndex])}
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
    const { sortedData, sortOptionKey, setSortOption, getSortProps } = useSort({
      data: fastleger,
      initialSortColumnKey: 'navn',
      sortOptions: {
        navnAsc: { columnKey: 'navn' },
        navnDesc: { columnKey: 'navn', direction: SortDirection.desc },
        alderAsc: { columnKey: 'alder' },
        alderDesc: { columnKey: 'alder', direction: SortDirection.desc },
      },
    });

    return (
      <>
        <FilterSort value={sortOptionKey ?? ''} onChange={(e): void => setSortOption(e.target.value)}>
          <option value={'navnAsc'}>{'Navn A-Å'}</option>
          <option value={'navnDesc'}>{'Navn Å-A'}</option>
          <option value={'alderAsc'}>{'Alder stigende'}</option>
          <option value={'alderDesc'}>{'Alder synkende'}</option>
        </FilterSort>
        <Spacer size="2xs" />
        <Table {...args}>
          <TableHead>
            <TableRow>
              <TableHeadCell {...getSortProps('navn')}>{'Navn'}</TableHeadCell>
              <TableHeadCell {...getSortProps('alder')}>{'Alder'}</TableHeadCell>
              <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
              <TableHeadCell>{'Ledige plasser'}</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedData.map(fastlege => (
              <TableRow key={fastlege.id}>
                <TableCell>{fastlege.navn}</TableCell>
                <TableCell>{fastlege.alder}</TableCell>
                <TableCell>{fastlege.kontor.navn}</TableCell>
                <TableCell>{fastlege.ledigePlasser}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  },
};

export const Expandable: Story = {
  render: function ExpandableRowsStory(args) {
    const { isExpanded, toggleExpanded } = useTableExpandedRows();

    return (
      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableHeadCell />
            <TableHeadCell>{'Navn'}</TableHeadCell>
            <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fastleger.map(fastlege => {
            const expanded = isExpanded(fastlege.id);
            const expandedRowId = `detaljer-${fastlege.id}`;

            return (
              <TableRow
                key={fastlege.id}
                expanded={expanded}
                expandableRowId={expandedRowId}
                onClick={(): void => toggleExpanded(fastlege.id)}
                expandedContent={
                  <>
                    <p>{`${fastlege.kontor.navn}, ${fastlege.kontor.adresse}. Språk: ${fastlege.spraak.join(', ')}`}</p>
                  </>
                }
              >
                <TableCell>{fastlege.navn}</TableCell>
                <TableCell>{fastlege.kontor.navn}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  },
};

export const WithPopMenu: Story = {
  render: function ExpandableRowsStory(args) {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>): void => {
      event.preventDefault();
    };

    const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
    const resources = getResources(language);

    return (
      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableHeadCell>{'Navn'}</TableHeadCell>
            <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
            <TableHeadCell>{resources.menuHeadCell}</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fastleger.map(fastlege => {
            return (
              <TableRow
                key={fastlege.id}
                popMenu={
                  <PopMenu labelText={'Flere valg'}>
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
                <TableCell>{fastlege.navn}</TableCell>
                <TableCell>{fastlege.kontor.navn}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  },
};

export const ExpandableWithPopMenu: Story = {
  render: function ExpandableWithPopMenuStory(args) {
    const { isExpanded, toggleExpanded } = useTableExpandedRows();
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>): void => {
      event.preventDefault();
    };

    const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
    const resources = getResources(language);

    return (
      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableHeadCell />
            <TableHeadCell>{'Navn'}</TableHeadCell>
            <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
            <TableHeadCell>{'Beskrivelse'}</TableHeadCell>
            <TableHeadCell>{resources.menuHeadCell}</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fastleger.map(fastlege => {
            const expanded = isExpanded(fastlege.id);
            const expandedRowId = `detaljer-med-meny-${fastlege.id}`;

            return (
              <TableRow
                key={fastlege.id}
                expanded={expanded}
                expandableRowId={expandedRowId}
                onClick={(): void => toggleExpanded(fastlege.id)}
                popMenu={
                  <PopMenu labelText={'Flere valg'}>
                    <LinkList chevron={false}>
                      <LinkList.Link onClick={handleClick} href="#">
                        {'Rediger'}
                      </LinkList.Link>
                      <LinkList.Link onClick={handleClick} href="#">
                        {'Fjern'}
                      </LinkList.Link>
                    </LinkList>
                  </PopMenu>
                }
                expandedContent={<p>{`${fastlege.kontor.navn}, ${fastlege.kontor.adresse}. Språk: ${fastlege.spraak.join(', ')}`}</p>}
              >
                <TableCell>{fastlege.navn}</TableCell>
                <TableCell>{fastlege.kontor.navn}</TableCell>
                <TableCell>{fastlege.beskrivelse}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  },
};

export const ColumnsBehindExpander: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Velg hvilke kolonner som skal skjules bak expander i stack-visning: hideBehindExpander på TableHeadCell skjuler kolonnen og ' +
          'viser ledetekst + innhold i en automatisk rendret utvidet rad. Rader får automatisk en expander som kun ' +
          'finnes i stack-visning, slik at alle kolonnene vises som vanlig tabell på store skjermer.',
      },
    },
  },
  render: function ColumnsBehindExpanderStory(args) {
    const { isExpanded, toggleExpanded } = useTableExpandedRows();

    return (
      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableHeadCell>{'Navn'}</TableHeadCell>
            <TableHeadCell hideBehindExpander>{'Alder'}</TableHeadCell>
            <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
            <TableHeadCell hideBehindExpander>{'Ledige plasser'}</TableHeadCell>
            <TableHeadCell>{'Språk'}</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fastleger.map(fastlege => (
            <TableRow key={fastlege.id} expanded={isExpanded(fastlege.id)} onClick={(): void => toggleExpanded(fastlege.id)}>
              <TableCell>{fastlege.navn}</TableCell>
              <TableCell>{fastlege.alder}</TableCell>
              <TableCell>{fastlege.kontor.navn}</TableCell>
              <TableCell>{fastlege.ledigePlasser}</TableCell>
              <TableCell>{fastlege.spraak.join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export const ColumnsBehindExpanderWithExpandedContent: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Kombinerer hideBehindExpander med expandedContent på raden. Raden har expander i alle visninger. ' +
          'De skjulte kolonnene vises automatisk (kun i stack-visning) sammen med eget innhold i samme utvidede rad.',
      },
    },
  },
  render: function ColumnsBehindExpanderWithExpandedContentStory(args) {
    const { isExpanded, toggleExpanded } = useTableExpandedRows();

    return (
      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableHeadCell />
            <TableHeadCell>{'Navn'}</TableHeadCell>
            <TableHeadCell hideBehindExpander>{'Alder'}</TableHeadCell>
            <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
            <TableHeadCell hideBehindExpander>{'Ledige plasser'}</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fastleger.map(fastlege => {
            const expanded = isExpanded(fastlege.id);

            return (
              <TableRow
                key={fastlege.id}
                expanded={expanded}
                expandableRowId={`detaljer-skjulte-${fastlege.id}`}
                onClick={(): void => toggleExpanded(fastlege.id)}
                expandedContent={
                  <>
                    <p>{`${fastlege.kontor.navn}, ${fastlege.kontor.adresse}. Språk: ${fastlege.spraak.join(', ')}`}</p>
                    <StatusDot
                      variant={fastlege.ledigePlasser > 0 ? 'active' : 'inactive'}
                      text={fastlege.ledigePlasser > 0 ? 'Tar imot nye pasienter' : 'Full liste'}
                    />
                    <Spacer />
                    <Button variant="outline">{'Bytt fastlege'}</Button>
                  </>
                }
              >
                <TableCell>{fastlege.navn}</TableCell>
                <TableCell>{fastlege.alder}</TableCell>
                <TableCell>{fastlege.kontor.navn}</TableCell>
                <TableCell>{fastlege.ledigePlasser}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
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

    const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
    const resources = getResources(language);

    return (
      <>
        <FilterSort value={sortColumnKey ?? ''} onChange={(e): void => requestSort(e.target.value as SortKey<Fastlege>)}>
          <option value="navn">{'Navn'}</option>
          <option value="kontor.navn">{'Fastlegekontor'}</option>
        </FilterSort>
        <Spacer size="2xs" />
        <Table {...args}>
          <TableHead>
            <TableRow>
              <TableHeadCell {...getSortProps('navn')}>{'Navn'}</TableHeadCell>
              <TableHeadCell {...getSortProps('kontor.navn')}>{'Fastlegekontor'}</TableHeadCell>
              <TableHeadCell>{'Handling'}</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleData.map((fastlege, index) => (
              <TableRow key={fastlege.id}>
                <TableCell>{fastlege.navn}</TableCell>
                <TableCell>{fastlege.kontor.navn}</TableCell>
                <TableCell>
                  <Button variant="borderless" ref={index === newRowsStartIndex ? firstNewRowRef : undefined}>
                    {'Bytt fastlege'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {hasMore && (
          <>
            <Spacer size="s" />
            <Button variant="outline" onClick={showMore}>
              {resources.showMoreButton}
            </Button>
          </>
        )}
      </>
    );
  },
};

export const WithLanguageProvider: Story = {
  render: function WithLanguageProviderStory(args) {
    const [language, setLanguage] = useState<LanguageLocales>(LanguageLocales.ENGLISH);
    const { isExpanded, toggleExpanded } = useTableExpandedRows();
    const { visibleData, hasMore, showMore } = useTableShowMore<Fastlege, HTMLButtonElement>({ data: fastleger, pageSize: 2 });
    const resources = getResources(language);

    return (
      <LanguageProvider<LanguageLocales> language={language}>
        <Dropdown svgIcon={Globe} triggerText="Velg språk">
          <Dropdown.SingleSelectItem text={'English'} asChild defaultSelected>
            <button onClick={(): void => setLanguage(LanguageLocales.ENGLISH)} />
          </Dropdown.SingleSelectItem>
          <Dropdown.SingleSelectItem text={'Sámi'} asChild>
            <button onClick={(): void => setLanguage(LanguageLocales.SAMI_NORTHERN)} />
          </Dropdown.SingleSelectItem>
          <Dropdown.SingleSelectItem text={'Nynorsk'} asChild>
            <button onClick={(): void => setLanguage(LanguageLocales.NORWEGIAN_NYNORSK)} />
          </Dropdown.SingleSelectItem>
          <Dropdown.SingleSelectItem text={'Bokmål'} asChild>
            <button onClick={(): void => setLanguage(LanguageLocales.NORWEGIAN)} />
          </Dropdown.SingleSelectItem>
        </Dropdown>
        <Spacer />
        <Table {...args}>
          <TableHead>
            <TableRow>
              <TableHeadCell />
              <TableHeadCell>{'Navn'}</TableHeadCell>
              <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
              <TableHeadCell>{resources.menuHeadCell}</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleData.map(fastlege => (
              <TableRow
                key={fastlege.id}
                expanded={isExpanded(fastlege.id)}
                expandableRowId={`sprak-${fastlege.id}`}
                onClick={(): void => toggleExpanded(fastlege.id)}
                popMenu={
                  <PopMenu labelText={'Flere valg'}>
                    <LinkList chevron={false}>
                      <LinkList.Link href="#">{'Rediger'}</LinkList.Link>
                      <LinkList.Link href="#">{'Fjern'}</LinkList.Link>
                    </LinkList>
                  </PopMenu>
                }
                expandedContent={<p>{`${fastlege.kontor.navn}, ${fastlege.kontor.adresse}`}</p>}
              >
                <TableCell>{fastlege.navn}</TableCell>
                <TableCell>{fastlege.kontor.navn}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {hasMore && (
          <>
            <Spacer size="s" />
            <Button variant="outline" onClick={showMore}>
              {resources.showMoreButton}
            </Button>
          </>
        )}
      </LanguageProvider>
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
        <Highlighter searchText={searchText}>
          <Table {...args}>
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
                    <TableCell>{fastlege.navn}</TableCell>
                    <TableCell>{fastlege.kontor.navn}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </Highlighter>
      </>
    );
  },
};

export const EmptyState: Story = {
  render: function EmptyStateStory(args) {
    return (
      <Table {...args}>
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
      </Table>
    );
  },
};

export const StackHeadWidth: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'stackHeadWidth styrer bredden på overskriftskolonnen i prosent i stack-visning. ' +
          'Uten stackHeadWidth vokser kolonnen naturlig med innholdet, men brytes ved behov og er aldri smalere enn 30%. ' +
          'Kolonner markert med hideBehindExpander (utvid første rad) følger samme bredde.',
      },
    },
  },
  render: function StackHeadWidthStory(args) {
    const stackConfig = { breakpoint: 'xl', variant: ResponsiveTableVariant.stack } as const;
    const { isExpanded, toggleExpanded } = useTableExpandedRows();

    return (
      <>
        {[25, 35, 55].map(width => (
          <React.Fragment key={width}>
            <Title appearance="title3">{`stackHeadWidth: ${width}`}</Title>
            <Table {...args} breakpointConfig={stackConfig} stackHeadWidth={width}>
              <TableHead>
                <TableRow>
                  <TableHeadCell>{'Navn'}</TableHeadCell>
                  <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
                  <TableHeadCell hideBehindExpander>{'Alder'}</TableHeadCell>
                  <TableHeadCell hideBehindExpander>{'Ledige plasser'}</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fastleger.slice(0, 2).map(fastlege => {
                  const rowKey = `${width}-${fastlege.id}`;

                  return (
                    <TableRow key={fastlege.id} expanded={isExpanded(rowKey)} onClick={(): void => toggleExpanded(rowKey)}>
                      <TableCell>{fastlege.navn}</TableCell>
                      <TableCell>{`${fastlege.kontor.navn}, ${fastlege.kontor.adresse}`}</TableCell>
                      <TableCell>{fastlege.alder}</TableCell>
                      <TableCell>{fastlege.ledigePlasser}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <Spacer size="xl" />
          </React.Fragment>
        ))}
      </>
    );
  },
};

export const WithCustomColumnWidth: Story = {
  render: function DefaultStory(args) {
    return (
      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableHeadCell width="15rem">{'Navn'}</TableHeadCell>
            <TableHeadCell width="5rem">{'Alder'}</TableHeadCell>
            <TableHeadCell width="20rem">{'Fastlegekontor'}</TableHeadCell>
            <TableHeadCell width="5rem">{'Ledige plasser'}</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fastleger.map(fastlege => (
            <TableRow key={fastlege.id}>
              <TableCell>{fastlege.navn}</TableCell>
              <TableCell>{fastlege.alder}</TableCell>
              <TableCell>{fastlege.kontor.navn}</TableCell>
              <TableCell>{fastlege.ledigePlasser}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
