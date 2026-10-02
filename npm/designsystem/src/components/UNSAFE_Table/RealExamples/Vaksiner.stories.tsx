import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import UNSAFE_Table, { UNSAFE_TableBody, UNSAFE_TableCell, UNSAFE_TableHead, UNSAFE_TableHeadCell, UNSAFE_TableRow } from '../';
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
  title: '@helsenorge/designsystem-react/Components/UNSAFE_Table/RealExamples/Vaksiner',
  component: UNSAFE_Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={UNSAFE_Table} />,
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
} satisfies Meta<typeof UNSAFE_Table>;

export default meta;

type Story = StoryObj<typeof UNSAFE_Table>;

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
          <UNSAFE_Table {...args}>
            <UNSAFE_TableHead>
              <UNSAFE_TableRow>
                <UNSAFE_TableHeadCell>{'Vaksine'}</UNSAFE_TableHeadCell>
                <UNSAFE_TableHeadCell>{'Dato'}</UNSAFE_TableHeadCell>
              </UNSAFE_TableRow>
            </UNSAFE_TableHead>
            <UNSAFE_TableBody>
              {vaksiner.map(vaksine => (
                <UNSAFE_TableRow key={vaksine.id}>
                  <UNSAFE_TableCell dataLabel="Vaksine">{visEngelskNavn ? vaksine.navnEngelsk : vaksine.navn}</UNSAFE_TableCell>
                  <UNSAFE_TableCell dataLabel="Dato">{vaksine.dato}</UNSAFE_TableCell>
                </UNSAFE_TableRow>
              ))}
            </UNSAFE_TableBody>
          </UNSAFE_Table>
        ) : (
          <p>{'Du har ingen registrerte vaksiner.'}</p>
        )}
      </>
    );
  },
};
