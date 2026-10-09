import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import UNSAFE_Table, { UNSAFE_TableBody, UNSAFE_TableCell, UNSAFE_TableHead, UNSAFE_TableHeadCell, UNSAFE_TableRow } from '../';
import { ResponsiveTableVariant } from '../constants';

/** Innsyn-appen i HN-Helseregistre bygger kolonner og rader dynamisk fra en CMS-drevet begrepsstruktur (register -> felt -> verdi). */
interface RegisterFelt {
  id: string;
  navn: string;
  verdi: string;
}

interface RegisterUtsnitt {
  id: string;
  register: string;
  felter: RegisterFelt[];
}

const utsnitt: RegisterUtsnitt[] = [
  {
    id: 'u1',
    register: 'Reseptregisteret',
    felter: [
      { id: 'legemiddel', navn: 'Legemiddel', verdi: 'Paracetamol' },
      { id: 'uttak', navn: 'Antall uttak', verdi: '3' },
    ],
  },
  {
    id: 'u2',
    register: 'Dødsårsaksregisteret',
    felter: [
      { id: 'legemiddel', navn: 'Legemiddel', verdi: '–' },
      { id: 'uttak', navn: 'Antall uttak', verdi: '0' },
    ],
  },
];

// Kolonnene er unionen av feltnavnene som faktisk finnes i utsnittene
const kolonner = Array.from(new Map(utsnitt.flatMap(u => u.felter).map(felt => [felt.id, felt.navn])).entries());

const meta = {
  title: '@helsenorge/designsystem-react/Components/UNSAFE_Table/RealExamples/Helseregistre',
  component: UNSAFE_Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={UNSAFE_Table} />,
      description: {
        component:
          'Basert på innsynsvisningen i HN-Helseregistre, der tabellens kolonner bygges dynamisk ut fra en generisk registerstruktur fra ' +
          'CMS-et, i stedet for faste kolonnedefinisjoner.',
      },
    },
  },
  args: {
    caption: 'Dine opplysninger i helseregistrene',
  },
} satisfies Meta<typeof UNSAFE_Table>;

export default meta;

type Story = StoryObj<typeof UNSAFE_Table>;

export const InnsynTabell: Story = {
  render: function InnsynTabellStory(args) {
    return (
      <UNSAFE_Table {...args} breakpointConfig={{ breakpoint: 'md', variant: ResponsiveTableVariant.stack }}>
        <UNSAFE_TableHead>
          <UNSAFE_TableRow>
            <UNSAFE_TableHeadCell>{'Register'}</UNSAFE_TableHeadCell>
            {kolonner.map(([id, navn]) => (
              <UNSAFE_TableHeadCell key={id}>{navn}</UNSAFE_TableHeadCell>
            ))}
          </UNSAFE_TableRow>
        </UNSAFE_TableHead>
        <UNSAFE_TableBody>
          {utsnitt.map(u => (
            <UNSAFE_TableRow key={u.id}>
              <UNSAFE_TableCell dataLabel="Register">{u.register}</UNSAFE_TableCell>
              {kolonner.map(([id, navn]) => (
                <UNSAFE_TableCell key={id} dataLabel={navn}>
                  {u.felter.find(felt => felt.id === id)?.verdi ?? '–'}
                </UNSAFE_TableCell>
              ))}
            </UNSAFE_TableRow>
          ))}
        </UNSAFE_TableBody>
      </UNSAFE_Table>
    );
  },
};
