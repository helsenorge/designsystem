import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import UNSAFE_Table, { UNSAFE_TableBody, UNSAFE_TableCell, UNSAFE_TableHead, UNSAFE_TableHeadCell, UNSAFE_TableRow } from '../';
import Badge from '../../Badge';
import { TableSizes } from '../constants';

interface Provesvar {
  id: string;
  analysenavn: string;
  dato: string;
  resultat: string;
  referanseomrade?: string;
  avvik: boolean;
}

const provesvar: Provesvar[] = [
  { id: 'p1', analysenavn: 'Hemoglobin', dato: '12.05.2024', resultat: '13,4 g/dL', referanseomrade: '11,7–15,3 g/dL', avvik: false },
  { id: 'p2', analysenavn: 'Ferritin', dato: '12.05.2024', resultat: '9 µg/L', referanseomrade: '15–150 µg/L', avvik: true },
  { id: 'p3', analysenavn: 'CRP', dato: '12.05.2024', resultat: '< 5 mg/L', referanseomrade: '< 5 mg/L', avvik: false },
];

const meta = {
  title: '@helsenorge/designsystem-react/Components/UNSAFE_Table/RealExamples/Provesvar',
  component: UNSAFE_Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={UNSAFE_Table} />,
      description: {
        component:
          'Basert på prøvesvarhistorikken i HN-Provesvar. Kompakt tabellstørrelse, kolonnen for referanseområde vises kun når minst ett ' +
          'av svarene faktisk har et referanseområde, og avvikende svar markeres med en badge.',
      },
    },
  },
  args: {
    caption: 'Prøvesvar',
    size: TableSizes.compact,
  },
} satisfies Meta<typeof UNSAFE_Table>;

export default meta;

type Story = StoryObj<typeof UNSAFE_Table>;

export const Historikk: Story = {
  render: function HistorikkStory(args) {
    const skalViseReferanseomrade = provesvar.some(svar => !!svar.referanseomrade);

    return (
      <UNSAFE_Table {...args}>
        <UNSAFE_TableHead>
          <UNSAFE_TableRow>
            <UNSAFE_TableHeadCell>{'Analyse'}</UNSAFE_TableHeadCell>
            <UNSAFE_TableHeadCell>{'Dato'}</UNSAFE_TableHeadCell>
            <UNSAFE_TableHeadCell>{'Resultat'}</UNSAFE_TableHeadCell>
            {skalViseReferanseomrade && <UNSAFE_TableHeadCell>{'Referanseområde'}</UNSAFE_TableHeadCell>}
          </UNSAFE_TableRow>
        </UNSAFE_TableHead>
        <UNSAFE_TableBody>
          {provesvar.map(svar => (
            <UNSAFE_TableRow key={svar.id}>
              <UNSAFE_TableCell dataLabel="Analyse">{svar.analysenavn}</UNSAFE_TableCell>
              <UNSAFE_TableCell dataLabel="Dato">{svar.dato}</UNSAFE_TableCell>
              <UNSAFE_TableCell dataLabel="Resultat">
                {svar.resultat}
                {svar.avvik && (
                  <>
                    {' '}
                    <Badge color="cherry">{'Avvik'}</Badge>
                  </>
                )}
              </UNSAFE_TableCell>
              {skalViseReferanseomrade && <UNSAFE_TableCell dataLabel="Referanseområde">{svar.referanseomrade ?? '–'}</UNSAFE_TableCell>}
            </UNSAFE_TableRow>
          ))}
        </UNSAFE_TableBody>
      </UNSAFE_Table>
    );
  },
};
