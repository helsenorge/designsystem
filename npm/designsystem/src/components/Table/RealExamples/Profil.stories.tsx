import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Table, { TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../';
import Button from '../../Button';
import Modal from '../../Modal';
import { ResponsiveTableVariant } from '../constants';

interface Innlogging {
  id: string;
  hvor: string;
  enhet: string;
  innloggetDato: string;
}

const innlogginger: Innlogging[] = [
  { id: 'i1', hvor: 'Nettleser', enhet: 'Chrome på Windows', innloggetDato: '14.05.2024' },
  { id: 'i2', hvor: 'App', enhet: 'Helsenorge-appen på iPhone', innloggetDato: '02.05.2024' },
  { id: 'i3', hvor: 'Nettleser', enhet: 'Safari på Mac', innloggetDato: '29.04.2024' },
];

const meta = {
  title: '@helsenorge/designsystem-react/Components/Table/RealExamples/Profil',
  component: Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Table} />,
      description: {
        component:
          'Basert på listen over aktive innlogginger under "Bruk og tilganger" i HN-Profil. Hver rad har en handlingsknapp som ber om ' +
          'bekreftelse i en modal før den fjernes, og tabellen har en sentrert overflow som faller tilbake til stack-visning på smale skjermer.',
      },
    },
  },
  args: {
    caption: 'Aktive innlogginger',
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const AktiveInnlogginger: Story = {
  render: function AktiveInnloggingerStory(args) {
    const [valgtInnlogging, setValgtInnlogging] = useState<Innlogging | undefined>();

    return (
      <>
        <Table
          {...args}
          breakpointConfig={{
            breakpoint: 'md',
            variant: ResponsiveTableVariant.centeredoverflow,
            fallbackVariant: ResponsiveTableVariant.stack,
          }}
        >
          <TableHead>
            <TableRow>
              <TableHeadCell>{'Hvor'}</TableHeadCell>
              <TableHeadCell>{'Enhet'}</TableHeadCell>
              <TableHeadCell>{'Innlogget'}</TableHeadCell>
              <TableHeadCell>{''}</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {innlogginger.map(innlogging => (
              <TableRow key={innlogging.id}>
                <TableCell>{innlogging.hvor}</TableCell>
                <TableCell>{innlogging.enhet}</TableCell>
                <TableCell>{innlogging.innloggetDato}</TableCell>
                <TableCell>
                  <Button variant="borderless" onClick={(): void => setValgtInnlogging(innlogging)}>
                    {'Logg ut'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {valgtInnlogging && (
          <Modal
            title="Vil du logge ut denne enheten?"
            description={`Dette vil avslutte innloggingen på ${valgtInnlogging.enhet}.`}
            primaryButtonText="Logg ut"
            secondaryButtonText="Avbryt"
            onSuccess={(): void => setValgtInnlogging(undefined)}
            onClose={(): void => setValgtInnlogging(undefined)}
          />
        )}
      </>
    );
  },
};
