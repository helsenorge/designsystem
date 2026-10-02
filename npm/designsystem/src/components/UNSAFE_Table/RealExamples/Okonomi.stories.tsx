import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import UNSAFE_Table, { UNSAFE_TableBody, UNSAFE_TableCell, UNSAFE_TableHead, UNSAFE_TableHeadCell, UNSAFE_TableRow } from '../';
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
  title: '@helsenorge/designsystem-react/Components/UNSAFE_Table/RealExamples/Okonomi',
  component: UNSAFE_Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={UNSAFE_Table} />,
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
} satisfies Meta<typeof UNSAFE_Table>;

export default meta;

type Story = StoryObj<typeof UNSAFE_Table>;

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
        <UNSAFE_Table {...args}>
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell>{'Dato'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Egenandel'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Beløp'}</UNSAFE_TableHeadCell>
              {harUtbetalt && <UNSAFE_TableHeadCell>{'Utbetalingsbeløp'}</UNSAFE_TableHeadCell>}
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            {rader.map(rad => (
              <UNSAFE_TableRow key={rad.id}>
                <UNSAFE_TableCell dataLabel="Dato">{rad.dato}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Egenandel">{rad.egenandel}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Beløp" textAlign={TextAlign.right}>
                  {rad.belop}
                </UNSAFE_TableCell>
                {harUtbetalt && (
                  <UNSAFE_TableCell dataLabel="Utbetalingsbeløp" textAlign={TextAlign.right}>
                    {rad.utbetalingsbelop}
                  </UNSAFE_TableCell>
                )}
              </UNSAFE_TableRow>
            ))}
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      </>
    );
  },
};
