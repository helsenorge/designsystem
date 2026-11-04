import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Table, { TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../';
import Toggle from '../../Toggle';

interface Vaksine {
  id: string;
  navn: string;
  navnEngelsk: string;
  dato: string;
}

const vaksiner: Vaksine[] = [
  { id: 'v1', navn: 'MMR-vaksine', navnEngelsk: 'MMR vaccine', dato: '12.09.2010' },
  { id: 'v2', navn: 'Difteri-stivkrampe-kikhoste', navnEngelsk: 'Diphtheria-tetanus-pertussis', dato: '03.04.2011' },
];

const meta = {
  title: '@helsenorge/designsystem-react/Components/Table/RealExamples/Vaksiner',
  component: Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Table} />,
      description: {
        component:
          'Basert på vaksinelisten i HN-Vaksiner. Enkel tabell med to kolonner, der vaksinenavnet kan vises på engelsk i tillegg til norsk, ' +
          'og som viser en tom-tilstand når innbyggeren ikke har registrerte vaksiner.',
      },
    },
  },
  args: {
    caption: 'Dine vaksiner',
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const VaksinerTabell: Story = {
  render: function VaksinerTabellStory(args) {
    const [visEngelskNavn, setVisEngelskNavn] = useState(false);
    const [harVaksiner, setHarVaksiner] = useState(true);

    return (
      <>
        <Toggle
          checked={visEngelskNavn}
          onChange={(): void => setVisEngelskNavn(!visEngelskNavn)}
          label={[{ text: 'Vis vaksinenavn på engelsk' }]}
        />
        <Toggle
          checked={harVaksiner}
          onChange={(): void => setHarVaksiner(!harVaksiner)}
          label={[{ text: 'Har registrerte vaksiner (demo)' }]}
        />
        {harVaksiner ? (
          <Table {...args}>
            <TableHead>
              <TableRow>
                <TableHeadCell>{'Vaksine'}</TableHeadCell>
                <TableHeadCell>{'Dato'}</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vaksiner.map(vaksine => (
                <TableRow key={vaksine.id}>
                  <TableCell>{visEngelskNavn ? vaksine.navnEngelsk : vaksine.navn}</TableCell>
                  <TableCell>{vaksine.dato}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <p>{'Du har ingen registrerte vaksiner.'}</p>
        )}
      </>
    );
  },
};
