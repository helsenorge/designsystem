import React, { useState } from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../Button';
import Title from '../Title';
import Table from './Table';
import TableBody from './TableBody';
import TableCell from './TableCell';
import TableExpanderCell from './TableExpanderCell';
import TableExpandedRow from './TableExpandedRow';
import TableHead from './TableHead';
import TableHeadCell from './TableHeadCell';
import TableRow from './TableRow';
import Icon from '../Icons';
import VerticalDots from '../Icons/VerticalDots';
import ChevronUp from '../Icons/ChevronUp';

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {},
} as ComponentMeta<typeof Table>;

export const Default: ComponentStory<typeof Table> = (args: any) => {
  const [expanded, setExpanded] = useState([false, true, false, false, false]);
  const [sortAsc, setSortAsc] = useState(true);

  const data = [
    {
      Id: '100000272',
      AntallPlasser: 1000,
      LedigePlasser: 0,
      Fastlege: {
        HprNummer: 7952791,
        Stillingsprosent: '',
        Autorisert: '2016',
        Samisk: false,
        Id: '100000527',
        Fornavn: 'Gard',
        Etternavn: 'Bruset',
        Alder: '35',
        Kjonn: 'Mann',
      },
      Delelistelege: null,
      Legekontor: {
        Id: 813,
        Navn: 'Regnbuen Legekontor',
        Adresse: 'Vestre Kjennervei 2B',
        Postnr: '3420',
        Poststed: 'LIERSKOGEN',
        Telefon: '32 24 04 42',
        Apningstider: '',
        Url: '',
        UniverseltUtformet: true,
        Gruppepraksis: true,
      },
      Avtaledato: '2017-01-01T00:00:00',
      Fradato: '0001-01-01T00:00:00',
      ErSio: false,
      Vikarer: [],
      Valgbar: false,
      Fellesliste: false,
      Oppstartsarsak: null,
      VentelisteTilgjengelig: true,
      AntallPaVenteliste: 26,
      PrimarHelseTeamId: null,
    },
    {
      Id: '4277',
      AntallPlasser: 1500,
      LedigePlasser: 0,
      Fastlege: {
        HprNummer: 2144107,
        Stillingsprosent: '',
        Autorisert: '1987',
        Samisk: false,
        Id: '2998',
        Fornavn: 'Stig Ando',
        Etternavn: 'Bruset',
        Alder: '66',
        Kjonn: 'Mann',
      },
      Delelistelege: null,
      Legekontor: {
        Id: 813,
        Navn: 'Regnbuen Legekontor',
        Adresse: 'Vestre Kjennervei 2B',
        Postnr: '3420',
        Poststed: 'LIERSKOGEN',
        Telefon: '32 24 04 42',
        Apningstider: '',
        Url: '',
        UniverseltUtformet: true,
        Gruppepraksis: true,
      },
      Avtaledato: '2001-05-01T00:00:00',
      Fradato: '0001-01-01T00:00:00',
      ErSio: false,
      Vikarer: [],
      Valgbar: false,
      Fellesliste: false,
      Oppstartsarsak: null,
      VentelisteTilgjengelig: false,
      AntallPaVenteliste: 0,
      PrimarHelseTeamId: null,
    },
    {
      Id: '100003524',
      AntallPlasser: 1000,
      LedigePlasser: 242,
      Fastlege: {
        HprNummer: 7484844,
        Stillingsprosent: '',
        Autorisert: '2013',
        Samisk: false,
        Id: '100000588',
        Fornavn: 'Magnar',
        Etternavn: 'Eek',
        Alder: '38',
        Kjonn: 'Mann',
      },
      Delelistelege: null,
      Legekontor: {
        Id: 100000195,
        Navn: 'Sylling Helsesenter DA',
        Adresse: 'Meieribakken 1',
        Postnr: '3410',
        Poststed: 'SYLLING',
        Telefon: '32 85 60 77',
        Apningstider: '',
        Url: '',
        UniverseltUtformet: true,
        Gruppepraksis: true,
      },
      Avtaledato: '2022-04-19T00:00:00',
      Fradato: '0001-01-01T00:00:00',
      ErSio: false,
      Vikarer: [],
      Valgbar: true,
      Fellesliste: false,
      Oppstartsarsak: null,
      VentelisteTilgjengelig: false,
      AntallPaVenteliste: 0,
      PrimarHelseTeamId: null,
    },
    {
      Id: '4296',
      AntallPlasser: 1150,
      LedigePlasser: 0,
      Fastlege: {
        HprNummer: 7552130,
        Stillingsprosent: '',
        Autorisert: '2014',
        Samisk: false,
        Id: '9476',
        Fornavn: 'Anita',
        Etternavn: 'Fransplass',
        Alder: '50',
        Kjonn: 'Kvinne',
      },
      Delelistelege: null,
      Legekontor: {
        Id: 809,
        Navn: 'Heiaklinikken',
        Adresse: 'Gamle drammensvei 98',
        Postnr: '3420',
        Poststed: 'Lierskogen',
        Telefon: '32 84 48 34',
        Apningstider: '',
        Url: '',
        UniverseltUtformet: true,
        Gruppepraksis: true,
      },
      Avtaledato: '2015-08-01T00:00:00',
      Fradato: '0001-01-01T00:00:00',
      ErSio: false,
      Vikarer: [],
      Valgbar: false,
      Fellesliste: false,
      Oppstartsarsak: null,
      VentelisteTilgjengelig: false,
      AntallPaVenteliste: 102,
      PrimarHelseTeamId: null,
    },
    {
      Id: '4291',
      AntallPlasser: 1000,
      LedigePlasser: 0,
      Fastlege: {
        HprNummer: 9040773,
        Stillingsprosent: '',
        Autorisert: '2008',
        Samisk: false,
        Id: '6813',
        Fornavn: 'Marte Øien',
        Etternavn: 'Fretland',
        Alder: '44',
        Kjonn: 'Kvinne',
      },
      Delelistelege: null,
      Legekontor: {
        Id: 810,
        Navn: 'Tranby Legesenter DA',
        Adresse: 'Dølasletta 7',
        Postnr: '3408',
        Poststed: 'Tranby',
        Telefon: '32 85 87 10',
        Apningstider: '',
        Url: 'https://www.tranbylegesenter.no',
        UniverseltUtformet: true,
        Gruppepraksis: true,
      },
      Avtaledato: '2010-10-01T00:00:00',
      Fradato: '0001-01-01T00:00:00',
      ErSio: false,
      Vikarer: [
        {
          TilDato: '2022-12-31T00:00:00',
          FraDato: '2021-01-01T00:00:00',
          Prosentandel: 10,
          VikarFor: '6813',
          Id: null,
          Fornavn: 'Sarah Kristine',
          Etternavn: 'Kaldestad',
          Alder: '40',
          Kjonn: 'Kvinne',
        },
        {
          TilDato: '2022-06-10T00:00:00',
          FraDato: '2022-05-02T00:00:00',
          Prosentandel: 10,
          VikarFor: '6813',
          Id: null,
          Fornavn: 'Alf-Andre',
          Etternavn: 'Finnseth',
          Alder: '52',
          Kjonn: 'Mann',
        },
      ],
      Valgbar: false,
      Fellesliste: false,
      Oppstartsarsak: null,
      VentelisteTilgjengelig: true,
      AntallPaVenteliste: 153,
      PrimarHelseTeamId: null,
    },
  ].sort((a, b) => {
    let first, next;
    first = sortAsc ? a : b;
    next = sortAsc ? b : a;
    return first.Fastlege.Etternavn > next.Fastlege.Etternavn ? 1 : -1;
  });
  console.log(sortAsc);

  return (
    <div className="container" style={{ backgroundColor: 'white' }}>
      <Table smallViewportVariant="block">
        <TableHead sortable>
          <TableRow key="head">
            <TableHeadCell />
            <TableHeadCell sortDir={sortAsc ? 'asc' : 'desc'} sortable onClick={() => setSortAsc(!sortAsc)}>
              Fastlege
            </TableHeadCell>
            <TableHeadCell sortable>Fastlegekontor</TableHeadCell>
            <TableHeadCell sortable>Ledige plasser</TableHeadCell>
            <TableHeadCell sortable>Antall på venteliste</TableHeadCell>
            <TableHeadCell sortable>Handling</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((fastlege, i: number) => (
            <>
              <TableRow
                onClick={() => {
                  const newExpanded = [...expanded];
                  newExpanded[i] = !expanded[i];
                  setExpanded(newExpanded);
                }}
                expandable
                expanded={expanded[i]}
                hideDetailsText="Skjul detaljer"
                showDetailsText="Vis detaljer"
                key={'row' + i}
              >
                <TableExpanderCell
                  expanded={expanded[i]}
                  expandableRowId={i.toString()}
                  hideDetailsText="Skjul detaljer"
                  showDetailsText="Vis detaljer"
                ></TableExpanderCell>
                <TableCell dataLabel="Fastlege">
                  {fastlege.Fastlege.Etternavn + ', ' + fastlege.Fastlege.Fornavn}
                  <br />
                  {fastlege.Fastlege.Alder + ' år, ' + fastlege.Fastlege.Kjonn}{' '}
                </TableCell>
                <TableCell dataLabel="Fastlegekontor">{fastlege.Legekontor.Navn + ', ' + fastlege.Legekontor.Adresse}</TableCell>
                <TableCell dataLabel="Ledige plasser">{fastlege.LedigePlasser + ' av ' + fastlege.AntallPlasser}</TableCell>
                <TableCell dataLabel="Antall på venteliste">
                  {fastlege.AntallPaVenteliste > 0 ? fastlege.AntallPaVenteliste : 'Har ikke venteliste'}
                </TableCell>
                {true && (
                  <TableCell dataLabel="Handling" textAlign="center">
                    <Button
                      variant="borderless"
                      hoverEffect={'never'}
                      onClick={e => {
                        e && e.stopPropagation();
                        console.log('show detail bubble');
                      }}
                    >
                      <Icon svgIcon={VerticalDots}></Icon>
                    </Button>
                  </TableCell>
                )}
              </TableRow>

              <TableExpandedRow numberOfColumns={6} expanded={expanded[i]}>
                <Title htmlMarkup="h4" appearance="title4">
                  {fastlege.Fastlege.Fornavn + ' ' + fastlege.Fastlege.Etternavn}
                </Title>
                <p>Godkjent som lege i 2008</p>
                <p>Spesialist i allmennnmedisin</p>
                <p>Startet som fastlege i 2011.</p>
                <div style={{ display: 'none' }}>
                  <Button
                    aria-expanded={expanded}
                    hoverEffect={'never'}
                    variant="borderless"
                    onClick={() => {
                      const newExpanded = [...expanded];
                      newExpanded[i] = !expanded[i];
                      setExpanded(newExpanded);
                    }}
                  >
                    Skjul {fastlege.Fastlege.Fornavn + ' ' + fastlege.Fastlege.Etternavn} <Icon svgIcon={ChevronUp} />
                  </Button>
                </div>
              </TableExpandedRow>
            </>
          ))}
        </TableBody>
      </Table>

      <h2>Tabell som ikke kan sorteres</h2>
      <Table smallViewportVariant="horizontalscroll">
        <TableHead>
          <TableRow key="0">
            <TableHeadCell>Navn</TableHeadCell>
            <TableHeadCell>Beskrivelse</TableHeadCell>
            <TableHeadCell>Mer info</TableHeadCell>
            <TableHeadCell>Antall</TableHeadCell>
            <TableHeadCell>Dato</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key="1">
            <TableCell dataLabel="Navn">Hans Nilsen</TableCell>
            <TableCell dataLabel="Beskrivelse">En ganske lang beskrivelse...</TableCell>
            <TableCell dataLabel="Mer info">asfdasdfadsfasfdsafdasfsa</TableCell>
            <TableCell dataLabel="Antall" textAlign="right" nowrap>
              11 234.12
            </TableCell>
            <TableCell dataLabel="Dato" textAlign="center">
              12.12.2020
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell dataLabel="Navn">Nils Hansen</TableCell>
            <TableCell dataLabel="Beskrivelse">Enda en ganske lang beskrivelse...</TableCell>
            <TableCell dataLabel="Mer info">asfdasdfadsfasfdsafdasfsa</TableCell>
            <TableCell dataLabel="Antall" textAlign="right" nowrap>
              1 234.12
            </TableCell>
            <TableCell dataLabel="Dato" textAlign="center">
              12.12.2020
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell dataLabel="Navn">Hans Nilsen</TableCell>
            <TableCell dataLabel="Beskrivelse" nowrap>
              En ganske lang beskrivelse...
            </TableCell>
            <TableCell dataLabel="Mer info">asfdasdfadsfasfdsafdasfsa</TableCell>
            <TableCell dataLabel="Antall" textAlign="right" nowrap>
              124.12
            </TableCell>
            <TableCell dataLabel="Dato" textAlign="center">
              12.12.2020
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};
