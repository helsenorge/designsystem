import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import UNSAFE_Table, { UNSAFE_TableBody, UNSAFE_TableCell, UNSAFE_TableHead, UNSAFE_TableHeadCell, UNSAFE_TableRow } from '../';
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
  title: '@helsenorge/designsystem-react/Components/UNSAFE_Table/RealExamples/Representasjon',
  component: UNSAFE_Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={UNSAFE_Table} />,
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
} satisfies Meta<typeof UNSAFE_Table>;

export default meta;

type Story = StoryObj<typeof UNSAFE_Table>;

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
            <UNSAFE_Table
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
              <UNSAFE_TableHead>
                <UNSAFE_TableRow>
                  <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
                  <UNSAFE_TableHeadCell>{'Fødselsnummer'}</UNSAFE_TableHeadCell>
                  <UNSAFE_TableHeadCell>{'Opprettet'}</UNSAFE_TableHeadCell>
                  <UNSAFE_TableHeadCell>{'Avsluttet'}</UNSAFE_TableHeadCell>
                  <UNSAFE_TableHeadCell>{'Virkeområde'}</UNSAFE_TableHeadCell>
                  <UNSAFE_TableHeadCell>{'Type fullmakt'}</UNSAFE_TableHeadCell>
                  <UNSAFE_TableHeadCell>{'Tjenesteområder'}</UNSAFE_TableHeadCell>
                </UNSAFE_TableRow>
              </UNSAFE_TableHead>
              <UNSAFE_TableBody>
                {historiskeFullmakter.map(fullmakt => (
                  <UNSAFE_TableRow key={fullmakt.id}>
                    <UNSAFE_TableCell dataLabel="Navn">{fullmakt.navn}</UNSAFE_TableCell>
                    <UNSAFE_TableCell dataLabel="Fødselsnummer">{fullmakt.fnr}</UNSAFE_TableCell>
                    <UNSAFE_TableCell dataLabel="Opprettet">{fullmakt.opprettet}</UNSAFE_TableCell>
                    <UNSAFE_TableCell dataLabel="Avsluttet">{fullmakt.avsluttet}</UNSAFE_TableCell>
                    <UNSAFE_TableCell dataLabel="Virkeområde">{fullmakt.virkeomrade}</UNSAFE_TableCell>
                    <UNSAFE_TableCell dataLabel="Type fullmakt">{fullmakt.typeFullmakt}</UNSAFE_TableCell>
                    <UNSAFE_TableCell dataLabel="Tjenesteområder">{fullmakt.tjenesteomrader}</UNSAFE_TableCell>
                  </UNSAFE_TableRow>
                ))}
              </UNSAFE_TableBody>
            </UNSAFE_Table>
          </>
        )}
      </>
    );
  },
};
