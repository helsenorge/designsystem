import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Table, { TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../';
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
  title: '@helsenorge/designsystem-react/Components/Table/RealExamples/Helseregistre',
  component: Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Table} />,
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
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const InnsynTabell: Story = {
  render: function InnsynTabellStory(args) {
    return (
      <Table {...args} breakpointConfig={{ breakpoint: 'xs', variant: ResponsiveTableVariant.stack }}>
        <TableHead>
          <TableRow>
            <TableHeadCell>{'Register'}</TableHeadCell>
            {kolonner.map(([id, navn]) => (
              <TableHeadCell key={id}>{navn}</TableHeadCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {utsnitt.map(u => (
            <TableRow key={u.id}>
              <TableCell>{u.register}</TableCell>
              {kolonner.map(([id]) => (
                <TableCell key={id}>{u.felter.find(felt => felt.id === id)?.verdi ?? '–'}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
