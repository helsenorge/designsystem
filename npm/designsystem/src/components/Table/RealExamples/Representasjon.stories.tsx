import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Table, { TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../';
import Button from '../../Button';
import Icon from '../../Icon';
import ChevronDown from '../../Icons/ChevronDown';
import ChevronUp from '../../Icons/ChevronUp';
import Spacer from '../../Spacer';
import { ResponsiveTableVariant } from '../constants';

interface Fullmakt {
  id: string;
  navn: string;
  fnr: string;
  opprettet: string;
  avsluttet: string;
  virkeomrade: string;
  typeFullmakt: string;
  tjenesteomrader: string;
}

const historiskeFullmakter: Fullmakt[] = [
  {
    id: 'f1',
    navn: 'Kari Hansen',
    fnr: '01019012345',
    opprettet: '12.03.2022',
    avsluttet: '04.11.2023',
    virkeomrade: 'Helsenorge',
    typeFullmakt: 'Representasjon',
    tjenesteomrader: 'Timer, Resepter',
  },
  {
    id: 'f2',
    navn: 'Ola Nordmann',
    fnr: '02029012345',
    opprettet: '18.06.2021',
    avsluttet: '18.06.2022',
    typeFullmakt: 'Representasjon',
    virkeomrade: 'Helsenorge',
    tjenesteomrader: 'Meldinger',
  },
];

const meta = {
  title: '@helsenorge/designsystem-react/Components/Table/RealExamples/Representasjon',
  component: Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Table} />,
      description: {
        component:
          'Basert på historikklisten over avsluttede fullmakter i HN-Representasjon. Statisk tabell uten sortering, der innholdet i stedet ' +
          'kan vises/skjules som en egen seksjon. breakpointConfig er en to-stegs liste: horisontal scroll (med stack som kapasitetsfallback ' +
          'for ikke-touch-enheter) på middels/store skjermer, og stack direkte på de minste skjermene.',
      },
    },
  },
  args: {
    caption: 'Tidligere fullmakter',
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const HistoriskeFullmakter: Story = {
  render: function HistoriskeFullmakterStory(args) {
    const [visHistorikk, setVisHistorikk] = useState(false);

    return (
      <>
        <Button variant="borderless" onClick={(): void => setVisHistorikk(!visHistorikk)}>
          {visHistorikk ? 'Skjul historiske fullmakter' : 'Vis historiske fullmakter'}
          <Icon svgIcon={visHistorikk ? ChevronUp : ChevronDown} />
        </Button>
        {visHistorikk && (
          <>
            <Spacer size="s" />
            <Table
              {...args}
              breakpointConfig={[
                {
                  breakpoint: 'lg',
                  variant: ResponsiveTableVariant.horizontalscroll,
                  fallbackVariant: ResponsiveTableVariant.stack,
                },
                { breakpoint: 'sm', variant: ResponsiveTableVariant.stack },
              ]}
            >
              <TableHead>
                <TableRow>
                  <TableHeadCell>{'Navn'}</TableHeadCell>
                  <TableHeadCell>{'Fødselsnummer'}</TableHeadCell>
                  <TableHeadCell>{'Opprettet'}</TableHeadCell>
                  <TableHeadCell>{'Avsluttet'}</TableHeadCell>
                  <TableHeadCell>{'Virkeområde'}</TableHeadCell>
                  <TableHeadCell>{'Type fullmakt'}</TableHeadCell>
                  <TableHeadCell>{'Tjenesteområder'}</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {historiskeFullmakter.map(fullmakt => (
                  <TableRow key={fullmakt.id}>
                    <TableCell>{fullmakt.navn}</TableCell>
                    <TableCell>{fullmakt.fnr}</TableCell>
                    <TableCell>{fullmakt.opprettet}</TableCell>
                    <TableCell>{fullmakt.avsluttet}</TableCell>
                    <TableCell>{fullmakt.virkeomrade}</TableCell>
                    <TableCell>{fullmakt.typeFullmakt}</TableCell>
                    <TableCell>{fullmakt.tjenesteomrader}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </>
        )}
      </>
    );
  },
};
