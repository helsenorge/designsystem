import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { longLoremText } from '../../utils/loremtext';
import Button from '../Button';
import GridExample from '../GridExample';
import Icon from '../Icons';
import VerticalDots from '../Icons/VerticalDots';
import { Title } from '../Title';

import {
  ResponsiveTableVariant,
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  TableCell,
  TableRow,
  HeaderCategory,
  TableExpandedRow,
  TableExpanderCell,
  SortDirection,
  TextAlign,
  defaultConfig,
  simpleConfig,
  ModeType,
} from './';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    docs: {
      description: {
        component: 'Som innbygger vil jeg se og sammenligne tabulære data slik at jeg kan forstå informasjonen jeg trenger.',
      },
    },
  },
  argTypes: {
    breakpoint: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      defaultValue: 'xl',
    },
    variant: {
      control: 'select',
      options: ResponsiveTableVariant,
      defaultValue: ResponsiveTableVariant.none,
    },
    fallbackVariant: {
      control: 'select',
      options: ResponsiveTableVariant,
      defaultValue: ResponsiveTableVariant.none,
    },
    headerCategory: {
      control: 'select',
      options: HeaderCategory,
      defaultValue: HeaderCategory.normal,
    },
    mode: {
      control: 'select',
      options: ModeType,
      defaultValue: ModeType.normal,
    },
  },
} as ComponentMeta<typeof Table>;

export const Default: ComponentStory<typeof Table> = (args: any) => {
  const data = getFastlegeData(SortDirection.asc, '');

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <p>{longLoremText}</p>
          <Table {...args} breakpointConfig={{ breakpoint: args.breakpoint, variant: args.variant, fallbackVariant: args.fallbackVariant }}>
            <TableHead category={args.headerCategory}>
              <TableRow>
                <TableHeadCell>Fastlege</TableHeadCell>
                <TableHeadCell>Alder</TableHeadCell>
                <TableHeadCell>Kjønn</TableHeadCell>
                <TableHeadCell>Fastlegekontor</TableHeadCell>
                <TableHeadCell>Adresse</TableHeadCell>
                <TableHeadCell>Ledige plasser</TableHeadCell>
                <TableHeadCell>Antall på venteliste</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((fastlege, i: number) => (
                <TableRow key={i}>{getFastlegeDataCells(fastlege)}</TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export const Compact: ComponentStory<typeof Table> = (args: any) => {
  const data = getFastlegeData(SortDirection.asc, '');

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <Table
            {...args}
            mode={ModeType.compact}
            breakpointConfig={{ breakpoint: args.breakpoint, variant: args.variant, fallbackVariant: args.fallbackVariant }}
          >
            <TableHead category={args.headerCategory}>
              <TableRow>
                <TableHeadCell>Fastlege</TableHeadCell>
                <TableHeadCell>Alder</TableHeadCell>
                <TableHeadCell>Kjønn</TableHeadCell>
                <TableHeadCell>Fastlegekontor</TableHeadCell>
                <TableHeadCell>Adresse</TableHeadCell>
                <TableHeadCell>Ledig</TableHeadCell>
                <TableHeadCell>Antall</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((fastlege, i: number) => (
                <TableRow key={i}>
                  <TableCell dataLabel="Fastlege">{fastlege.Fastlege.Etternavn + ', ' + fastlege.Fastlege.Fornavn}</TableCell>
                  <TableCell dataLabel="Alder">{`${fastlege.Fastlege.Alder} år`}</TableCell>
                  <TableCell dataLabel="Kjønn">{fastlege.Fastlege.Kjonn}</TableCell>
                  <TableCell dataLabel="Fastlegekontor">{fastlege.Legekontor.Navn}</TableCell>
                  <TableCell dataLabel="Adresse">{fastlege.Legekontor.Adresse}</TableCell>
                  <TableCell dataLabel="Ledige plasser">{fastlege.LedigePlasser + ' av ' + fastlege.AntallPlasser}</TableCell>
                  <TableCell dataLabel="Antall på venteliste">
                    {fastlege.AntallPaVenteliste > 0 ? fastlege.AntallPaVenteliste : 'Har ikke venteliste'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
export const DefaultResponsiveConfig: ComponentStory<typeof Table> = (args: any) => {
  const data = getFastlegeData(SortDirection.asc, '');

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
          <Table {...args} breakpointConfig={defaultConfig}>
            <TableHead category={args.headerCategory}>
              <TableRow>
                <TableHeadCell>Fastlege</TableHeadCell>
                <TableHeadCell>Alder</TableHeadCell>
                <TableHeadCell>Kjønn</TableHeadCell>
                <TableHeadCell>Fastlegekontor</TableHeadCell>
                <TableHeadCell>Adresse</TableHeadCell>
                <TableHeadCell>Ledige plasser</TableHeadCell>
                <TableHeadCell>Antall på venteliste</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((fastlege, i: number) => (
                <TableRow key={i}>{getFastlegeDataCells(fastlege)}</TableRow>
              ))}
            </TableBody>
          </Table>
          <p>{longLoremText}</p>
        </div>
      </div>
    </div>
  );
};

export const SimpleResponsiveConfig: ComponentStory<typeof Table> = (args: any) => {
  const data = getFastlegeData(SortDirection.asc, '');

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <Title appearance="title3">{'Config for enkle tabeller (< 5 kolonner og < 10 rader og lite innhold i hver kolonne)'}</Title>
          <p>{longLoremText}</p>
          <Table {...args} breakpointConfig={simpleConfig}>
            <TableHead category={args.headerCategory}>
              <TableRow>
                <TableHeadCell>Fastlege</TableHeadCell>
                <TableHeadCell>Alder</TableHeadCell>
                <TableHeadCell>Kjønn</TableHeadCell>
                <TableHeadCell>Fastlegekontor</TableHeadCell>
                <TableHeadCell>Adresse</TableHeadCell>
                <TableHeadCell>Ledige plasser</TableHeadCell>
                <TableHeadCell>Antall på venteliste</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((fastlege, i: number) => (
                <TableRow key={i}>{getFastlegeDataCells(fastlege)}</TableRow>
              ))}
            </TableBody>
          </Table>
          <p>{longLoremText}</p>
        </div>
      </div>
    </div>
  );
};

export const SortableAndExpandable: ComponentStory<typeof Table> = (args: any) => {
  const [expanded, setExpanded] = useState(new Array(5).fill(false));
  const [sortDirection, setSortDirection] = useState(SortDirection.asc);
  const [sortColumn, setSortColumn] = useState('');

  const data = getFastlegeData(sortDirection, sortColumn);

  const clickSort = (column: string) => {
    if (column == sortColumn) {
      setSortDirection(sortDirection === SortDirection.asc ? SortDirection.desc : SortDirection.asc);
    } else {
      setSortColumn(column);
      setSortDirection(SortDirection.asc);
    }
  };

  const toggleExpand = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !expanded[index];
    setExpanded(newExpanded);
  };

  return (
    <GridExample>
      <Table {...args} breakpointConfig={{ breakpoint: args.breakpoint, variant: args.variant, fallbackVariant: args.fallbackVariant }}>
        <TableHead category={HeaderCategory.sortable}>
          <TableRow>
            <TableHeadCell />
            <TableHeadCell sortable sortDir={sortColumn === 'Fastlege' ? sortDirection : undefined} onClick={() => clickSort('Fastlege')}>
              {'Navn'}
            </TableHeadCell>
            <TableHeadCell sortable sortDir={sortColumn === 'Alder' ? sortDirection : undefined} onClick={() => clickSort('Alder')}>
              {'Alder'}
            </TableHeadCell>
            <TableHeadCell>{'Kjønn'}</TableHeadCell>
            <TableHeadCell
              sortable
              sortDir={sortColumn === 'Fastlegekontor' ? sortDirection : undefined}
              onClick={() => clickSort('Fastlegekontor')}
            >
              {'Fastlegekontor'}
            </TableHeadCell>
            <TableHeadCell sortable sortDir={sortColumn === 'Adresse' ? sortDirection : undefined} onClick={() => clickSort('Adresse')}>
              {'Adresse'}
            </TableHeadCell>
            <TableHeadCell
              sortable
              sortDir={sortColumn === 'LedigePlasser' ? sortDirection : undefined}
              onClick={() => clickSort('LedigePlasser')}
            >
              {'Ledige plasser'}
            </TableHeadCell>
            <TableHeadCell
              sortable
              sortDir={sortColumn === 'AntallPaVenteliste' ? sortDirection : undefined}
              onClick={() => clickSort('AntallPaVenteliste')}
            >
              {'Antall på venteliste'}
            </TableHeadCell>
            <TableHeadCell>{'Handling'}</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="test1">
          {data.map((fastlege, i: number) => (
            <React.Fragment key={i}>
              <TableRow
                onClick={() => {
                  toggleExpand(i);
                }}
                expandable
                expanded={expanded[i]}
                hideDetailsText="Skjul detaljer"
                showDetailsText="Vis detaljer"
              >
                <TableExpanderCell
                  expanded={expanded[i]}
                  expandableRowId={i.toString()}
                  hideDetailsText="Skjul detaljer"
                  showDetailsText="Vis detaljer"
                ></TableExpanderCell>
                {getFastlegeDataCells(fastlege)}
                {
                  <TableCell dataLabel="Handling" textAlign={TextAlign.center}>
                    <Button
                      variant="borderless"
                      onClick={e => {
                        e && e.stopPropagation();
                        console.log('show detail bubble');
                      }}
                      ariaLabel={'eksempel aria'}
                    >
                      <Icon svgIcon={VerticalDots}></Icon>
                    </Button>
                  </TableCell>
                }
              </TableRow>

              <TableExpandedRow
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
                <p>Godkjent som lege i {fastlege.Fastlege.Autorisert}</p>
                <p>Spesialist i allmennnmedisin</p>
                <p>Startet som fastlege i {fastlege.Avtaledato.substring(0, 4)}.</p>
              </TableExpandedRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </GridExample>
  );
};

export const ExtraData: ComponentStory<typeof Table> = (args: any) => {
  return (
    <GridExample>
      <Table {...args} breakpointConfig={defaultConfig}>
        <TableHead category={HeaderCategory.normal}>
          <TableRow>
            <TableHeadCell>Navn</TableHeadCell>
            <TableHeadCell>Beskrivelse</TableHeadCell>
            <TableHeadCell>Mer info</TableHeadCell>
            <TableHeadCell>Lenke</TableHeadCell>
            <TableHeadCell>Antall</TableHeadCell>
            <TableHeadCell>Dato</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell dataLabel="Navn">Hans Sebastian Nilsen</TableCell>
            <TableCell dataLabel="Beskrivelse">En ganske lang beskrivelse...</TableCell>
            <TableCell dataLabel="Mer info">asfdasdfadsfasfdsafdasfsa</TableCell>
            <TableCell dataLabel="Lenke">
              <a href="#test">Lenke til test</a>
            </TableCell>
            <TableCell dataLabel="Antall" textAlign={TextAlign.right} nowrap>
              11 234.12
            </TableCell>
            <TableCell dataLabel="Dato" textAlign={TextAlign.center}>
              12.12.2020
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell dataLabel="Navn">Nils Hansen-Olsen</TableCell>
            <TableCell dataLabel="Beskrivelse">Enda en ganske lang beskrivelse...</TableCell>
            <TableCell dataLabel="Mer info">asfdasdfadsfasfdsafdasfsa</TableCell>
            <TableCell dataLabel="Lenke">
              <a href="#test">Lenke til test</a>
            </TableCell>
            <TableCell dataLabel="Antall" textAlign={TextAlign.right} nowrap>
              1 234.12
            </TableCell>
            <TableCell dataLabel="Dato" textAlign={TextAlign.center}>
              12.12.2020
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell dataLabel="Navn">Ole Nilsen</TableCell>
            <TableCell dataLabel="Beskrivelse" nowrap>
              En-ganske-lang-tekst-uten-noen-mellomrom
            </TableCell>
            <TableCell dataLabel="Mer info">asfdasdfadsfasfdsafdasfsa</TableCell>
            <TableCell dataLabel="Lenke">
              <a href="#test">Lenke til test</a>
            </TableCell>
            <TableCell dataLabel="Antall" textAlign={TextAlign.right} nowrap>
              124.12
            </TableCell>
            <TableCell dataLabel="Dato" textAlign={TextAlign.center}>
              12.12.2020
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </GridExample>
  );
};

export interface Legekontor {
  Navn: string;
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
      <TableCell dataLabel="Fastlege">{fastlege.Fastlege.Etternavn + ', ' + fastlege.Fastlege.Fornavn}</TableCell>
      <TableCell dataLabel="Alder">{`${fastlege.Fastlege.Alder} år`}</TableCell>
      <TableCell dataLabel="Kjønn">{fastlege.Fastlege.Kjonn}</TableCell>
      <TableCell dataLabel="Fastlegekontor">{fastlege.Legekontor.Navn}</TableCell>
      <TableCell dataLabel="Adresse">{fastlege.Legekontor.Adresse}</TableCell>
      <TableCell dataLabel="Ledige plasser">{fastlege.LedigePlasser + ' av ' + fastlege.AntallPlasser}</TableCell>
      <TableCell dataLabel="Antall på venteliste">
        {fastlege.AntallPaVenteliste > 0 ? fastlege.AntallPaVenteliste : 'Har ikke venteliste'}
      </TableCell>
    </>
  );
};

function getFastlegeData(sortDirection: SortDirection, sortColumn: string): Array<FastlegeAvtale> {
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
        Navn: 'Heiaklinikken',
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
    const first = sortDirection === SortDirection.asc ? a : b;
    const next = sortDirection === SortDirection.asc ? b : a;

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
