import React, { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import { longLoremText } from '../../utils/loremtext';
import AnchorLink from '../AnchorLink';
import LinkList from '../LinkList';
import PopMenu from '../PopMenu';
import Tabs from '../Tabs';
import { Title } from '../Title';

import {
  ResponsiveTableVariantOld,
  TableOld,
  TableBodyOld,
  TableHeadOld,
  TableHeadCellOld,
  TableCellOld,
  TableRowOld,
  HeaderCategoryOld,
  TableExpandedRowOld,
  TableExpanderCellOld,
  SortDirectionOld,
  TextAlignOld,
  defaultConfigOld,
  simpleConfigOld,
  ModeTypeOld,
} from './';

type TableWithAndCustomArgs = React.ComponentProps<typeof TableOld> & {
  breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant: ResponsiveTableVariantOld;
  fallbackVariant: ResponsiveTableVariantOld;
  headerCategory: HeaderCategoryOld;
};

const meta = {
  title: '@helsenorge/designsystem-react/Components/TableOld',
  component: TableOld,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={TableOld} />,
      description: {
        component: 'Som innbygger vil jeg se og sammenligne tabulære data slik at jeg kan forstå informasjonen jeg trenger.',
      },
    },
  },
  args: {
    breakpoint: 'xl',
    variant: ResponsiveTableVariantOld.none,
    fallbackVariant: ResponsiveTableVariantOld.none,
    headerCategory: HeaderCategoryOld.normal,
    mode: ModeTypeOld.normal,
    scrollAriaLabel: 'Fastleger',
  },
  argTypes: {
    breakpoint: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: Object.values(ResponsiveTableVariantOld),
    },
    fallbackVariant: {
      control: 'select',
      options: Object.values(ResponsiveTableVariantOld),
    },
    headerCategory: {
      control: 'select',
      options: Object.values(HeaderCategoryOld),
    },
    mode: {
      control: 'select',
      options: Object.values(ModeTypeOld),
    },
    scrollAriaLabel: {
      control: 'text',
    },
    scrollAriaLabelledById: {
      control: 'text',
    },
  },
} satisfies Meta<TableWithAndCustomArgs>;

export default meta;

type Story = StoryObj<TableWithAndCustomArgs>;

export const Default: Story = {
  render: args => {
    const data = getFastlegeData(SortDirectionOld.asc, '');

    return (
      <TableOld {...args} breakpointConfig={{ breakpoint: args.breakpoint, variant: args.variant, fallbackVariant: args.fallbackVariant }}>
        <TableHeadOld category={args.headerCategory}>
          <TableRowOld>
            <TableHeadCellOld>{'Fastlege'}</TableHeadCellOld>
            <TableHeadCellOld>{'Alder'}</TableHeadCellOld>
            <TableHeadCellOld>{'Kjønn'}</TableHeadCellOld>
            <TableHeadCellOld>{'Fastlegekontor'}</TableHeadCellOld>
            <TableHeadCellOld>{'Adresse'}</TableHeadCellOld>
            <TableHeadCellOld>{'Ledige plasser'}</TableHeadCellOld>
            <TableHeadCellOld>{'Antall på venteliste'}</TableHeadCellOld>
          </TableRowOld>
        </TableHeadOld>
        <TableBodyOld>
          {data.map((fastlege, i: number) => (
            <TableRowOld key={i}>{getFastlegeDataCells(fastlege)}</TableRowOld>
          ))}
        </TableBodyOld>
      </TableOld>
    );
  },
};

export const WithTextAbove: Story = {
  render: args => {
    const data = getFastlegeData(SortDirectionOld.asc, '');

    return (
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <p>{longLoremText}</p>
            <TableOld
              {...args}
              breakpointConfig={{ breakpoint: args.breakpoint, variant: args.variant, fallbackVariant: args.fallbackVariant }}
            >
              <TableHeadOld category={args.headerCategory}>
                <TableRowOld>
                  <TableHeadCellOld>{'Fastlege'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Alder'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Kjønn'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Fastlegekontor'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Adresse'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Ledige plasser'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Antall på venteliste'}</TableHeadCellOld>
                </TableRowOld>
              </TableHeadOld>
              <TableBodyOld>
                {data.map((fastlege, i: number) => (
                  <TableRowOld key={i}>{getFastlegeDataCells(fastlege)}</TableRowOld>
                ))}
              </TableBodyOld>
            </TableOld>
          </div>
        </div>
      </div>
    );
  },
};
export const Compact: Story = {
  render: args => {
    const data = getFastlegeData(SortDirectionOld.asc, '');

    return (
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <TableOld
              {...args}
              mode={ModeTypeOld.compact}
              breakpointConfig={{ breakpoint: args.breakpoint, variant: args.variant, fallbackVariant: args.fallbackVariant }}
            >
              <TableHeadOld category={args.headerCategory}>
                <TableRowOld>
                  <TableHeadCellOld>{'Fastlege'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Alder'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Kjønn'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Fastlegekontor'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Adresse'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Ledig'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Antall'}</TableHeadCellOld>
                </TableRowOld>
              </TableHeadOld>
              <TableBodyOld>
                {data.map((fastlege, i: number) => (
                  <TableRowOld key={i}>
                    <TableCellOld dataLabel="Fastlege">{fastlege.Fastlege.Etternavn + ', ' + fastlege.Fastlege.Fornavn}</TableCellOld>
                    <TableCellOld dataLabel="Alder">{`${fastlege.Fastlege.Alder} år`}</TableCellOld>
                    <TableCellOld dataLabel="Kjønn">{fastlege.Fastlege.Kjonn}</TableCellOld>
                    <TableCellOld dataLabel="Fastlegekontor">{fastlege.Legekontor.Navn}</TableCellOld>
                    <TableCellOld dataLabel="Adresse">{fastlege.Legekontor.Adresse}</TableCellOld>
                    <TableCellOld dataLabel="Ledige plasser">{fastlege.LedigePlasser + ' av ' + fastlege.AntallPlasser}</TableCellOld>
                    <TableCellOld dataLabel="Antall på venteliste">
                      {fastlege.AntallPaVenteliste > 0 ? fastlege.AntallPaVenteliste : 'Har ikke venteliste'}
                    </TableCellOld>
                  </TableRowOld>
                ))}
              </TableBodyOld>
            </TableOld>
          </div>
        </div>
      </div>
    );
  },
};
export const DefaultResponsiveConfig: Story = {
  render: args => {
    const data = getFastlegeData(SortDirectionOld.asc, '');

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <Title appearance="title3">
              {
                'Config for standard og komplekse tabeller, og tabeller hvor det er er i brukerens interesse å kryss-indeksere eller sammenligne verdier fremfor å bare finne riktig rad.'
              }
            </Title>
            <p>{longLoremText}</p>
            <TableOld {...args} breakpointConfig={defaultConfigOld}>
              <TableHeadOld category={args.headerCategory}>
                <TableRowOld>
                  <TableHeadCellOld>{'Fastlege'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Alder'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Kjønn'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Fastlegekontor'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Adresse'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Ledige plasser'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Antall på venteliste'}</TableHeadCellOld>
                </TableRowOld>
              </TableHeadOld>
              <TableBodyOld>
                {data.map((fastlege, i: number) => (
                  <TableRowOld key={i}>{getFastlegeDataCells(fastlege)}</TableRowOld>
                ))}
              </TableBodyOld>
            </TableOld>
            <p>{longLoremText}</p>
          </div>
        </div>
      </div>
    );
  },
};

export const TableInTabs: Story = {
  render: args => {
    const data = getFastlegeData(SortDirectionOld.asc, '');

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <Title appearance="title3">
              {
                'Config for standard og komplekse tabeller, og tabeller hvor det er er i brukerens interesse å kryss-indeksere eller sammenligne verdier fremfor å bare finne riktig rad.'
              }
            </Title>
            <p>{longLoremText}</p>
            <Tabs>
              <Tabs.Tab title="Fastleger" icon={'Calendar'}>
                <TableOld {...args} breakpointConfig={defaultConfigOld}>
                  <TableHeadOld category={args.headerCategory}>
                    <TableRowOld>
                      <TableHeadCellOld>{'Fastlege'}</TableHeadCellOld>
                      <TableHeadCellOld>{'Alder'}</TableHeadCellOld>
                      <TableHeadCellOld>{'Kjønn'}</TableHeadCellOld>
                      <TableHeadCellOld>{'Fastlegekontor'}</TableHeadCellOld>
                      <TableHeadCellOld>{'Adresse'}</TableHeadCellOld>
                      <TableHeadCellOld>{'Ledige plasser'}</TableHeadCellOld>
                      <TableHeadCellOld>{'Antall på venteliste'}</TableHeadCellOld>
                    </TableRowOld>
                  </TableHeadOld>
                  <TableBodyOld>
                    {data.map((fastlege, i: number) => (
                      <TableRowOld key={i}>{getFastlegeDataCells(fastlege)}</TableRowOld>
                    ))}
                  </TableBodyOld>
                </TableOld>
              </Tabs.Tab>
              <Tabs.Tab title="Hjelp">{longLoremText}</Tabs.Tab>
            </Tabs>
            <p>{longLoremText}</p>
          </div>
        </div>
      </div>
    );
  },
};

export const SimpleResponsiveConfig: Story = {
  render: args => {
    const data = getFastlegeData(SortDirectionOld.asc, '');

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <Title appearance="title3">{'Config for enkle tabeller (< 5 kolonner og < 10 rader og lite innhold i hver kolonne)'}</Title>
            <p>{longLoremText}</p>
            <TableOld {...args} breakpointConfig={simpleConfigOld}>
              <TableHeadOld category={args.headerCategory}>
                <TableRowOld>
                  <TableHeadCellOld>{'Fastlege'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Alder'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Kjønn'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Fastlegekontor'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Adresse'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Ledige plasser'}</TableHeadCellOld>
                  <TableHeadCellOld>{'Antall på venteliste'}</TableHeadCellOld>
                </TableRowOld>
              </TableHeadOld>
              <TableBodyOld>
                {data.map((fastlege, i: number) => (
                  <TableRowOld key={i}>{getFastlegeDataCells(fastlege)}</TableRowOld>
                ))}
              </TableBodyOld>
            </TableOld>
            <p>{longLoremText}</p>
          </div>
        </div>
      </div>
    );
  },
};

export const SortableAndExpandable: Story = {
  render: args => {
    const [expanded, setExpanded] = useState(new Array(5).fill(false));
    const [sortDirection, setSortDirection] = useState(SortDirectionOld.asc);
    const [sortColumn, setSortColumn] = useState('');

    const data = getFastlegeData(sortDirection, sortColumn);

    const clickSort = (column: string): void => {
      if (column == sortColumn) {
        setSortDirection(sortDirection === SortDirectionOld.asc ? SortDirectionOld.desc : SortDirectionOld.asc);
      } else {
        setSortColumn(column);
        setSortDirection(SortDirectionOld.asc);
      }
    };

    const toggleExpand = (index: number): void => {
      const newExpanded = [...expanded];
      newExpanded[index] = !expanded[index];
      setExpanded(newExpanded);
    };

    return (
      <TableOld {...args} breakpointConfig={{ breakpoint: args.breakpoint, variant: args.variant, fallbackVariant: args.fallbackVariant }}>
        <TableHeadOld category={HeaderCategoryOld.sortable}>
          <TableRowOld>
            <TableHeadCellOld />
            <TableHeadCellOld
              sortable
              sortDir={sortColumn === 'Fastlege' ? sortDirection : undefined}
              onClick={() => clickSort('Fastlege')}
            >
              {'Navn'}
            </TableHeadCellOld>
            <TableHeadCellOld sortable sortDir={sortColumn === 'Alder' ? sortDirection : undefined} onClick={() => clickSort('Alder')}>
              {'Alder'}
            </TableHeadCellOld>
            <TableHeadCellOld>{'Kjønn'}</TableHeadCellOld>
            <TableHeadCellOld
              sortable
              sortDir={sortColumn === 'Fastlegekontor' ? sortDirection : undefined}
              onClick={() => clickSort('Fastlegekontor')}
            >
              {'Fastlegekontor'}
            </TableHeadCellOld>
            <TableHeadCellOld sortable sortDir={sortColumn === 'Adresse' ? sortDirection : undefined} onClick={() => clickSort('Adresse')}>
              {'Adresse'}
            </TableHeadCellOld>
            <TableHeadCellOld
              sortable
              sortDir={sortColumn === 'LedigePlasser' ? sortDirection : undefined}
              onClick={() => clickSort('LedigePlasser')}
            >
              {'Ledige plasser'}
            </TableHeadCellOld>
            <TableHeadCellOld
              sortable
              sortDir={sortColumn === 'AntallPaVenteliste' ? sortDirection : undefined}
              onClick={() => clickSort('AntallPaVenteliste')}
            >
              {'Antall på venteliste'}
            </TableHeadCellOld>
            <TableHeadCellOld>{'Handling'}</TableHeadCellOld>
          </TableRowOld>
        </TableHeadOld>
        <TableBodyOld className="test1">
          {data.map((fastlege, i: number) => (
            <React.Fragment key={i}>
              <TableRowOld
                onClick={() => {
                  toggleExpand(i);
                }}
                expandable
                expanded={expanded[i]}
                hideDetailsText="Skjul detaljer"
                showDetailsText="Vis detaljer"
              >
                <TableExpanderCellOld
                  expanded={expanded[i]}
                  expandableRowId={`SortableAndExpandable-${i}`}
                  hideDetailsText="Skjul detaljer"
                  showDetailsText="Vis detaljer"
                ></TableExpanderCellOld>
                {getFastlegeDataCells(fastlege)}
                {
                  <TableCellOld dataLabel="Handling" textAlign={TextAlignOld.center}>
                    <PopMenu openButtonAriaLabel="Handlinger">
                      <LinkList chevron={false}>
                        <LinkList.Link>{'Åpne'}</LinkList.Link>
                        <LinkList.Link>{'Lagre'}</LinkList.Link>
                      </LinkList>
                    </PopMenu>
                  </TableCellOld>
                }
              </TableRowOld>

              <TableExpandedRowOld
                id={`SortableAndExpandable-${i}`}
                numberOfColumns={9}
                expanded={expanded[i]}
                toggleClick={() => {
                  toggleExpand(i);
                }}
                hideDetailsText={'Skjul ' + fastlege.Fastlege.Fornavn + ' ' + fastlege.Fastlege.Etternavn}
              >
                <Title htmlMarkup="h4" appearance="title4">
                  {fastlege.Fastlege.Fornavn + ' ' + fastlege.Fastlege.Etternavn}
                </Title>
                <p>
                  {'Godkjent som lege i'} {fastlege.Fastlege.Autorisert}
                </p>
                <p>{'Spesialist i allmennnmedisin'}</p>
                <p>
                  {'Startet som fastlege i'} {fastlege.Avtaledato.substring(0, 4)}
                  {'.'}
                </p>
              </TableExpandedRowOld>
            </React.Fragment>
          ))}
        </TableBodyOld>
      </TableOld>
    );
  },
};

export const NestedExpandableBlockTables: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(new Array(5).fill(false));
    const [sortDirection, setSortDirection] = useState(SortDirectionOld.asc);
    const [sortColumn, setSortColumn] = useState('');

    const data = getFastlegeData(sortDirection, sortColumn);

    const clickSort = (column: string): void => {
      if (column == sortColumn) {
        setSortDirection(sortDirection === SortDirectionOld.asc ? SortDirectionOld.desc : SortDirectionOld.asc);
      } else {
        setSortColumn(column);
        setSortDirection(SortDirectionOld.asc);
      }
    };

    const toggleExpand = (index: number): void => {
      const newExpanded = [...expanded];
      newExpanded[index] = !expanded[index];
      setExpanded(newExpanded);
    };

    return (
      <TableOld breakpointConfig={{ breakpoint: 'xs', variant: 'block' }}>
        <TableHeadOld category={HeaderCategoryOld.sortable}>
          <TableRowOld>
            <TableHeadCellOld />
            <TableHeadCellOld
              sortable
              sortDir={sortColumn === 'Fastlege' ? sortDirection : undefined}
              onClick={() => clickSort('Fastlege')}
            >
              {'Navn'}
            </TableHeadCellOld>
            <TableHeadCellOld sortable sortDir={sortColumn === 'Alder' ? sortDirection : undefined} onClick={() => clickSort('Alder')}>
              {'Alder'}
            </TableHeadCellOld>
            <TableHeadCellOld>{'Kjønn'}</TableHeadCellOld>
            <TableHeadCellOld
              sortable
              sortDir={sortColumn === 'Fastlegekontor' ? sortDirection : undefined}
              onClick={() => clickSort('Fastlegekontor')}
            >
              {'Fastlegekontor'}
            </TableHeadCellOld>
            <TableHeadCellOld sortable sortDir={sortColumn === 'Adresse' ? sortDirection : undefined} onClick={() => clickSort('Adresse')}>
              {'Adresse'}
            </TableHeadCellOld>
            <TableHeadCellOld
              sortable
              sortDir={sortColumn === 'LedigePlasser' ? sortDirection : undefined}
              onClick={() => clickSort('LedigePlasser')}
            >
              {'Ledige plasser'}
            </TableHeadCellOld>
            <TableHeadCellOld
              sortable
              sortDir={sortColumn === 'AntallPaVenteliste' ? sortDirection : undefined}
              onClick={() => clickSort('AntallPaVenteliste')}
            >
              {'Antall på venteliste'}
            </TableHeadCellOld>
            <TableHeadCellOld>{'Handling'}</TableHeadCellOld>
          </TableRowOld>
        </TableHeadOld>
        <TableBodyOld className="test1">
          {data.map((fastlege, i: number) => (
            <React.Fragment key={i}>
              <TableRowOld
                onClick={() => {
                  toggleExpand(i);
                }}
                expandable
                expanded={expanded[i]}
                hideDetailsText="Skjul detaljer"
                showDetailsText="Vis detaljer"
              >
                <TableExpanderCellOld
                  expanded={expanded[i]}
                  expandableRowId={`NestedExpandableBlockTables-${i}`}
                  hideDetailsText="Skjul detaljer"
                  showDetailsText="Vis detaljer"
                ></TableExpanderCellOld>
                {getFastlegeDataCells(fastlege)}
                {
                  <TableCellOld dataLabel="Handling" textAlign={TextAlignOld.center}>
                    <PopMenu openButtonAriaLabel="Handlinger">
                      <LinkList chevron={false}>
                        <LinkList.Link>{'Åpne'}</LinkList.Link>
                        <LinkList.Link>{'Lagre'}</LinkList.Link>
                      </LinkList>
                    </PopMenu>
                  </TableCellOld>
                }
              </TableRowOld>

              <TableExpandedRowOld
                id={`NestedExpandableBlockTables-${i}`}
                numberOfColumns={9}
                expanded={expanded[i]}
                toggleClick={() => {
                  toggleExpand(i);
                }}
                hideDetailsText={'Skjul ' + fastlege.Fastlege.Fornavn + ' ' + fastlege.Fastlege.Etternavn}
              >
                <TableOld breakpointConfig={{ breakpoint: 'xs', variant: 'block' }}>
                  <TableHeadOld category={HeaderCategoryOld.normal}>
                    <TableRowOld>
                      <TableHeadCellOld>{'Navn'}</TableHeadCellOld>
                      <TableHeadCellOld>{'Alder'}</TableHeadCellOld>
                      <TableHeadCellOld>{'Fastlegekontor'}</TableHeadCellOld>
                      <TableHeadCellOld>{'Adresse'}</TableHeadCellOld>
                      <TableHeadCellOld>{'Ledige plasser'}</TableHeadCellOld>
                      <TableHeadCellOld>{'Antall på venteliste'}</TableHeadCellOld>
                    </TableRowOld>
                  </TableHeadOld>
                  <TableBodyOld>
                    <TableRowOld>{getFastlegeDataCells(fastlege)}</TableRowOld>
                  </TableBodyOld>
                </TableOld>
              </TableExpandedRowOld>
            </React.Fragment>
          ))}
        </TableBodyOld>
      </TableOld>
    );
  },
};

export const ExtraData: Story = {
  render: args => {
    return (
      <TableOld {...args} breakpointConfig={defaultConfigOld}>
        <TableHeadOld category={HeaderCategoryOld.normal}>
          <TableRowOld>
            <TableHeadCellOld>{'Navn'}</TableHeadCellOld>
            <TableHeadCellOld>{'Beskrivelse'}</TableHeadCellOld>
            <TableHeadCellOld>{'Mer info'}</TableHeadCellOld>
            <TableHeadCellOld>{'Lenke'}</TableHeadCellOld>
            <TableHeadCellOld>{'Antall'}</TableHeadCellOld>
            <TableHeadCellOld>{'Dato'}</TableHeadCellOld>
          </TableRowOld>
        </TableHeadOld>
        <TableBodyOld>
          <TableRowOld>
            <TableCellOld dataLabel="Navn">{'Hans Sebastian Nilsen'}</TableCellOld>
            <TableCellOld dataLabel="Beskrivelse">{'En ganske lang beskrivelse...'}</TableCellOld>
            <TableCellOld dataLabel="Mer info">{'asfdasdfadsfasfdsafdasfsa'}</TableCellOld>
            <TableCellOld dataLabel="Lenke">
              <a href="#test">{'Lenke til test'}</a>
            </TableCellOld>
            <TableCellOld dataLabel="Antall" textAlign={TextAlignOld.right} nowrap>
              {'11 234.12'}
            </TableCellOld>
            <TableCellOld dataLabel="Dato" textAlign={TextAlignOld.center}>
              {'12.12.2020'}
            </TableCellOld>
          </TableRowOld>
          <TableRowOld>
            <TableCellOld dataLabel="Navn">{'Nils Hansen-Olsen'}</TableCellOld>
            <TableCellOld dataLabel="Beskrivelse">{'Enda en ganske lang beskrivelse...'}</TableCellOld>
            <TableCellOld dataLabel="Mer info">{'asfdasdfadsfasfdsafdasfsa'}</TableCellOld>
            <TableCellOld dataLabel="Lenke">
              <a href="#test">{'Lenke til test'}</a>
            </TableCellOld>
            <TableCellOld dataLabel="Antall" textAlign={TextAlignOld.right} nowrap>
              {'1 234.12'}
            </TableCellOld>
            <TableCellOld dataLabel="Dato" textAlign={TextAlignOld.center}>
              {'12.12.2020'}
            </TableCellOld>
          </TableRowOld>
          <TableRowOld>
            <TableCellOld dataLabel="Navn">{'Ole Nilsen'}</TableCellOld>
            <TableCellOld dataLabel="Beskrivelse" nowrap>
              {'En-ganske-lang-tekst-uten-noen-mellomrom'}
            </TableCellOld>
            <TableCellOld dataLabel="Mer info">{'asfdasdfadsfasfdsafdasfsa'}</TableCellOld>
            <TableCellOld dataLabel="Lenke">
              <a href="#test">{'Lenke til test'}</a>
            </TableCellOld>
            <TableCellOld dataLabel="Antall" textAlign={TextAlignOld.right} nowrap>
              {'124.12'}
            </TableCellOld>
            <TableCellOld dataLabel="Dato" textAlign={TextAlignOld.center}>
              {'12.12.2020'}
            </TableCellOld>
          </TableRowOld>
        </TableBodyOld>
      </TableOld>
    );
  },
};

export const Irregular: Story = {
  render: () => {
    return (
      <TableOld breakpointConfig={defaultConfigOld}>
        <colgroup>
          <col />
          <col span={2}></col>
          <col span={2}></col>
        </colgroup>
        <TableHeadOld>
          <TableRowOld>
            <TableCellOld rowSpan={2}></TableCellOld>
            <TableHeadCellOld colSpan={2} scope="colgroup">
              {'Mars'}
            </TableHeadCellOld>
            <TableHeadCellOld colSpan={2} scope="colgroup">
              {'Venus'}
            </TableHeadCellOld>
          </TableRowOld>
          <TableRowOld>
            <TableHeadCellOld scope="col">{'Produced'}</TableHeadCellOld>
            <TableHeadCellOld scope="col">{'Sold'}</TableHeadCellOld>
            <TableHeadCellOld scope="col">{'Produced'}</TableHeadCellOld>
            <TableHeadCellOld scope="col">{'Sold'}</TableHeadCellOld>
          </TableRowOld>
        </TableHeadOld>
        <TableBodyOld>
          <TableRowOld>
            <TableHeadCellOld scope="row">{'Teddy Bears'}</TableHeadCellOld>
            <TableCellOld>{'50,000'}</TableCellOld>
            <TableCellOld>{'30,000'}</TableCellOld>
            <TableCellOld>{'100,000'}</TableCellOld>
            <TableCellOld>{'80,000'}</TableCellOld>
          </TableRowOld>
          <TableRowOld>
            <TableHeadCellOld scope="row">{'Board Games'}</TableHeadCellOld>
            <TableCellOld>{'10,000'}</TableCellOld>
            <TableCellOld>{'5,000'}</TableCellOld>
            <TableCellOld>{'12,000'}</TableCellOld>
            <TableCellOld>{'9,000'}</TableCellOld>
          </TableRowOld>
        </TableBodyOld>
      </TableOld>
    );
  },
};

export interface Legekontor {
  Navn: string | React.JSX.Element;
  Adresse: string;
}

export interface FastlegeAvtale {
  AntallPlasser: number;
  LedigePlasser: number;
  Fastlege: Fastlege;
  Legekontor: Legekontor;
  Avtaledato: string;
  Valgbar: boolean;
  Fellesliste: boolean;
  VentelisteTilgjengelig: boolean;
  AntallPaVenteliste: number;
}

export interface Fastlege {
  Stillingsprosent: string | null;
  Autorisert: string | null;
  Fornavn: string;
  Etternavn: string;
  Alder: string;
  Kjonn: string;
}

const getFastlegeDataCells = (fastlege: FastlegeAvtale): React.ReactNode => {
  return (
    <>
      <TableCellOld dataLabel="Fastlege">{fastlege.Fastlege.Etternavn + ', ' + fastlege.Fastlege.Fornavn}</TableCellOld>
      <TableCellOld dataLabel="Alder">{`${fastlege.Fastlege.Alder} år`}</TableCellOld>
      <TableCellOld dataLabel="Kjønn">{fastlege.Fastlege.Kjonn}</TableCellOld>
      <TableCellOld dataLabel="Fastlegekontor">{fastlege.Legekontor.Navn}</TableCellOld>
      <TableCellOld dataLabel="Adresse">{fastlege.Legekontor.Adresse}</TableCellOld>
      <TableCellOld dataLabel="Ledige plasser">{fastlege.LedigePlasser + ' av ' + fastlege.AntallPlasser}</TableCellOld>
      <TableCellOld dataLabel="Antall på venteliste">
        {fastlege.AntallPaVenteliste > 0 ? fastlege.AntallPaVenteliste : 'Har ikke venteliste'}
      </TableCellOld>
    </>
  );
};

function getFastlegeData(sortDirection: SortDirectionOld, sortColumn: string): Array<FastlegeAvtale> {
  return [
    {
      AntallPlasser: 1000,
      LedigePlasser: 0,
      Fastlege: {
        Stillingsprosent: '',
        Autorisert: '2016',
        Fornavn: 'Gard',
        Etternavn: 'Bruset',
        Alder: '35',
        Kjonn: 'Mann',
      },
      Delelistelege: null,
      Legekontor: {
        Navn: 'Regnbuen Legekontor',
        Adresse: 'Vestre Kjennervei 2B',
      },
      Avtaledato: '2017-01-01T00:00:00',
      Valgbar: false,
      Fellesliste: false,
      Oppstartsarsak: null,
      VentelisteTilgjengelig: true,
      AntallPaVenteliste: 53,
    },
    {
      AntallPlasser: 1000,
      LedigePlasser: 132,
      Fastlege: {
        Stillingsprosent: '',
        Autorisert: '2013',
        Fornavn: 'Magnar',
        Etternavn: 'Eek',
        Alder: '38',
        Kjonn: 'Mann',
      },
      Delelistelege: null,
      Legekontor: {
        Navn: 'Sylling Helsesenter DA',
        Adresse: 'Meieribakken 1',
      },
      Avtaledato: '2022-04-19T00:00:00',
      Valgbar: true,
      Fellesliste: false,
      Oppstartsarsak: null,
      VentelisteTilgjengelig: false,
      AntallPaVenteliste: 0,
    },
    {
      AntallPlasser: 1150,
      LedigePlasser: 0,
      Fastlege: {
        HprNummer: 7552130,
        Stillingsprosent: '',
        Autorisert: '2014',
        Fornavn: 'Anita',
        Etternavn: 'Fransplass',
        Alder: '50',
        Kjonn: 'Kvinne',
      },
      Delelistelege: null,
      Legekontor: {
        Navn: (
          <AnchorLink href={'https://www.helsenorge.no'} target={'_blank'}>
            {'Heiaklinikken'}
          </AnchorLink>
        ),
        Adresse: 'Gamle drammensvei 98',
      },
      Avtaledato: '2015-08-01T00:00:00',
      Valgbar: false,
      Fellesliste: false,
      Oppstartsarsak: null,
      VentelisteTilgjengelig: false,
      AntallPaVenteliste: 98,
    },
    {
      AntallPlasser: 1600,
      LedigePlasser: 0,
      Fastlege: {
        HprNummer: 2107090,
        Stillingsprosent: '',
        Autorisert: '1981',
        Fornavn: 'Svein',
        Etternavn: 'Helgeland',
        Alder: '69',
        Kjonn: 'Mann',
      },
      Delelistelege: null,
      Legekontor: {
        Navn: 'Lierbyen Legesenter',
        Adresse: 'Bruveien 2',
      },
      Avtaledato: '2001-06-01T00:00:00',
      Valgbar: false,
      Fellesliste: false,
      Oppstartsarsak: null,
      VentelisteTilgjengelig: true,
      AntallPaVenteliste: 29,
    },
    {
      AntallPlasser: 1500,
      LedigePlasser: 0,
      Fastlege: {
        HprNummer: 9769986,
        Stillingsprosent: '',
        Autorisert: '2009',
        Fornavn: 'Erik',
        Etternavn: 'Øhren',
        Alder: '41',
        Kjonn: 'Mann',
      },
      Delelistelege: null,
      Legekontor: {
        Navn: 'Lierbyen Legesenter',
        Adresse: 'Bruveien 2',
      },
      Avtaledato: '2012-07-01T00:00:00',
      Valgbar: false,
      Fellesliste: false,
      Oppstartsarsak: null,
      VentelisteTilgjengelig: true,
      AntallPaVenteliste: 57,
    },
  ].sort((a, b) => {
    const first = sortDirection === SortDirectionOld.asc ? a : b;
    const next = sortDirection === SortDirectionOld.asc ? b : a;

    if (sortColumn === 'Fastlegekontor') {
      return first.Legekontor.Navn > next.Legekontor.Navn ? 1 : -1;
    }

    if (sortColumn === 'LedigePlasser') {
      return first.LedigePlasser > next.LedigePlasser ? 1 : -1;
    }

    if (sortColumn === 'AntallPaVenteliste') {
      return first.AntallPaVenteliste > next.AntallPaVenteliste ? 1 : -1;
    }

    return first.Fastlege.Etternavn > next.Fastlege.Etternavn ? 1 : -1;
  });
}
