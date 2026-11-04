import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Table, { TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../';
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
  title: '@helsenorge/designsystem-react/Components/Table/RealExamples/Provesvar',
  component: Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Table} />,
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
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const Historikk: Story = {
  render: function HistorikkStory(args) {
    const skalViseReferanseomrade = provesvar.some(svar => !!svar.referanseomrade);

    return (
      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableHeadCell>{'Analyse'}</TableHeadCell>
            <TableHeadCell>{'Dato'}</TableHeadCell>
            <TableHeadCell>{'Resultat'}</TableHeadCell>
            {skalViseReferanseomrade && <TableHeadCell>{'Referanseområde'}</TableHeadCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {provesvar.map(svar => (
            <TableRow key={svar.id}>
              <TableCell>{svar.analysenavn}</TableCell>
              <TableCell>{svar.dato}</TableCell>
              <TableCell>
                {svar.resultat}
                {svar.avvik && (
                  <>
                    {' '}
                    <Badge color="cherry">{'Avvik'}</Badge>
                  </>
                )}
              </TableCell>
              {skalViseReferanseomrade && <TableCell>{svar.referanseomrade ?? '–'}</TableCell>}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};
