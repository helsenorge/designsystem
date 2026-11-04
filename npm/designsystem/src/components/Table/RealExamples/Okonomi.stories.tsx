import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Table, { TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../';
import Button from '../../Button';
import Icon from '../../Icon';
import Printer from '../../Icons/Printer';
import Toggle from '../../Toggle';
import { TextAlign } from '../constants';

interface EgenandelRad {
  id: string;
  dato: string;
  egenandel: string;
  belop: string;
  utbetalingsbelop?: string;
}

const rader: EgenandelRad[] = [
  { id: 'r1', dato: '03.01.2024', egenandel: 'Legebesøk', belop: 'kr 250,00', utbetalingsbelop: 'kr 0,00' },
  { id: 'r2', dato: '14.02.2024', egenandel: 'Fysioterapi', belop: 'kr 180,00', utbetalingsbelop: 'kr 0,00' },
  { id: 'r3', dato: '20.03.2024', egenandel: 'Psykolog', belop: 'kr 320,00', utbetalingsbelop: 'kr 150,00' },
];

const meta = {
  title: '@helsenorge/designsystem-react/Components/Table/RealExamples/Okonomi',
  component: Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Table} />,
      description: {
        component:
          'Basert på egenandelstabellen i HN-Okonomi. Kolonnen for utbetalingsbeløp vises kun når minst én rad faktisk har fått utbetalt ' +
          'noe, tabellen er ikke sorterbar, og det ligger en utskriftsknapp ved siden av tabellen.',
      },
    },
  },
  args: {
    caption: 'Egenandeler på frikortet',
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const EgenandelstakTabell: Story = {
  render: function EgenandelstakTabellStory(args) {
    const [harUtbetalt, setHarUtbetalt] = useState(true);

    return (
      <>
        <Toggle
          checked={harUtbetalt}
          onChange={(): void => setHarUtbetalt(!harUtbetalt)}
          label={[{ text: 'Vis utbetalte egenandeler (demo)' }]}
        />
        <Button variant="borderless" onClick={(): void => window.print()}>
          <Icon svgIcon={Printer} />
          {'Skriv ut'}
        </Button>
        <Table {...args}>
          <TableHead>
            <TableRow>
              <TableHeadCell>{'Dato'}</TableHeadCell>
              <TableHeadCell>{'Egenandel'}</TableHeadCell>
              <TableHeadCell>{'Beløp'}</TableHeadCell>
              {harUtbetalt && <TableHeadCell>{'Utbetalingsbeløp'}</TableHeadCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {rader.map(rad => (
              <TableRow key={rad.id}>
                <TableCell>{rad.dato}</TableCell>
                <TableCell>{rad.egenandel}</TableCell>
                <TableCell textAlign={TextAlign.right}>{rad.belop}</TableCell>
                {harUtbetalt && <TableCell textAlign={TextAlign.right}>{rad.utbetalingsbelop}</TableCell>}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </>
    );
  },
};
