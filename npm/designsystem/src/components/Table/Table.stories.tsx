import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button';
import { Title } from '../Title';
import {
  SmallViewportVariant,
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
} from './';
import Icon from '../Icons';
import VerticalDots from '../Icons/VerticalDots';
import { longLoremText } from '../../utils/loremtext';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    smallViewportVariant: {
      control: 'select',
      options: SmallViewportVariant,
      defaultValue: SmallViewportVariant.block,
    },
    headerCategory: {
      control: 'select',
      options: HeaderCategory,
      defaultValue: HeaderCategory.normal,
    },
  },
} as ComponentMeta<typeof Table>;

export const Default: ComponentStory<typeof Table> = (args: any) => {
  const data = getFastlegeData(SortDirection.asc, '');

  return (
    <div className="container" style={{ backgroundColor: 'white' }}>
      <Table smallViewportVariant={args.viewportVariant}>
        <TableHead category={args.headerCategory}>
          <TableRow rowKey="head">
            <TableHeadCell>Fastlege</TableHeadCell>
            <TableHeadCell>Fastlegekontor</TableHeadCell>
            <TableHeadCell>Ledige plasser</TableHeadCell>
            <TableHeadCell>Antall på venteliste</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((fastlege, i: number) => (
            <>
              <TableRow rowKey={'row' + i}>{getFastlegeDataCells(fastlege)}</TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export const HorizontalScroll: ComponentStory<typeof Table> = (args: any) => {
  const data = getFastlegeData(SortDirection.asc, '');

  return (
    <div style={{ width: '20rem' }}>
      <p>{longLoremText}</p>
      <Table smallViewportVariant={SmallViewportVariant.horizontalscroll}>
        <TableHead category={args.headerCategory}>
          <TableRow key="head">
            <TableHeadCell>Fastlege</TableHeadCell>
            <TableHeadCell>Fastlegekontor</TableHeadCell>
            <TableHeadCell>Ledige plasser</TableHeadCell>
            <TableHeadCell>Antall på venteliste</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((fastlege, i: number) => (
            <>
              <TableRow key={'row' + i}>{getFastlegeDataCells(fastlege)}</TableRow>
            </>
          ))}
        </TableBody>
      </Table>
      <p>{longLoremText}</p>
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
    <div className="container" style={{ backgroundColor: 'white' }}>
      <Table smallViewportVariant={SmallViewportVariant.block}>
        <TableHead category={HeaderCategory.sortable}>
          <TableRow rowKey="head">
            <TableHeadCell />
            <TableHeadCell sortable sortDir={sortColumn === 'Fastlege' ? sortDirection : undefined} onClick={() => clickSort('Fastlege')}>
              Navn, alder og kjønn på fastlegenfastlegenfastlegenfastlegenfastlegenfastlegenfastlegenfastlegen
            </TableHeadCell>
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
            <TableHeadCell
              sortable
              sortDir={sortColumn === 'AntallPaVenteliste' ? sortDirection : undefined}
              onClick={() => clickSort('AntallPaVenteliste')}
            >
              Antall på venteliste
            </TableHeadCell>
            <TableHeadCell>Handling</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="test1">
          {data.map((fastlege, i: number) => (
            <>
              <TableRow
                onClick={() => {
                  toggleExpand(i);
                }}
                expandable
                expanded={expanded[i]}
                hideDetailsText="Skjul detaljer"
                showDetailsText="Vis detaljer"
                rowKey={'row' + i}
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
                    >
                      <Icon svgIcon={VerticalDots}></Icon>
                    </Button>
                  </TableCell>
                }
              </TableRow>

              <TableExpandedRow
                numberOfColumns={6}
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
            </>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export const ExtraData: ComponentStory<typeof Table> = (args: any) => {
  return (
    <div className="container" style={{ backgroundColor: 'white' }}>
      <Table smallViewportVariant={SmallViewportVariant.horizontalscroll}>
        <TableHead category={HeaderCategory.normal}>
          <TableRow rowKey="0">
            <TableHeadCell>Navn</TableHeadCell>
            <TableHeadCell>Beskrivelse</TableHeadCell>
            <TableHeadCell>Mer info</TableHeadCell>
            <TableHeadCell>Lenke</TableHeadCell>
            <TableHeadCell>Antall</TableHeadCell>
            <TableHeadCell>Dato</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow rowKey="1">
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
          <TableRow rowKey="2">
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
          <TableRow rowKey="3">
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
    </div>
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

function getFastlegeDataCells(fastlege: FastlegeAvtale): React.ReactNode {
  return (
    <>
      <TableCell dataLabel="Fastlege">
        {fastlege.Fastlege.Etternavn + ', ' + fastlege.Fastlege.Fornavn}
        <br />
        {fastlege.Fastlege.Alder + ' år, ' + fastlege.Fastlege.Kjonn}{' '}
      </TableCell>
      <TableCell dataLabel="Fastlegekontor">
        {fastlege.Legekontor.Navn + ', ' + fastlege.Legekontor.Adresse}fastlegenfastlegenfastlegenfastlegenfastlegenfastlegenfastlegen
      </TableCell>
      <TableCell dataLabel="Ledige plasser">{fastlege.LedigePlasser + ' av ' + fastlege.AntallPlasser}</TableCell>
      <TableCell dataLabel="Antall på venteliste">
        {fastlege.AntallPaVenteliste > 0 ? fastlege.AntallPaVenteliste : 'Har ikke venteliste'}
      </TableCell>
    </>
  );
}

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
        Navn: 'Regnbuen Legekontor',
        Adresse: 'Vestre Kjennervei 2B',
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
        Navn: 'Sylling Helsesenter DA',
        Adresse: 'Meieribakken 1',
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
        Adresse: 'Gamle drammensvei 98',
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
        Navn: 'Lierbyen Legesenter',
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
        Navn: 'Lierbyen Legesenter',
        Adresse: 'Bruveien 2',
      },
      Avtaledato: '2012-07-01T00:00:00',
      Valgbar: false,
      Fellesliste: false,
      Oppstartsarsak: null,
      VentelisteTilgjengelig: true,
      AntallPaVenteliste: 57,
    },
  ].sort((a, b) => {
    let first = sortDirection === SortDirection.asc ? a : b;
    let next = sortDirection === SortDirection.asc ? b : a;

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
