import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import UNSAFE_Table, { UNSAFE_TableBody, UNSAFE_TableCell, UNSAFE_TableHead, UNSAFE_TableHeadCell, UNSAFE_TableRow } from '../';
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
  title: '@helsenorge/designsystem-react/Components/UNSAFE_Table/RealExamples/Profil',
  component: UNSAFE_Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={UNSAFE_Table} />,
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
} satisfies Meta<typeof UNSAFE_Table>;

export default meta;

type Story = StoryObj<typeof UNSAFE_Table>;

export const AktiveInnlogginger: Story = {
  render: function AktiveInnloggingerStory(args) {
    const [valgtInnlogging, setValgtInnlogging] = useState<Innlogging | undefined>();

    return (
      <>
        <UNSAFE_Table
          {...args}
          breakpointConfig={{
            breakpoint: 'md',
            variant: ResponsiveTableVariant.centeredoverflow,
            fallbackVariant: ResponsiveTableVariant.stack,
          }}
        >
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell>{'Hvor'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Enhet'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Innlogget'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{''}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            {innlogginger.map(innlogging => (
              <UNSAFE_TableRow key={innlogging.id}>
                <UNSAFE_TableCell dataLabel="Hvor">{innlogging.hvor}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Enhet">{innlogging.enhet}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Innlogget">{innlogging.innloggetDato}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="">
                  <Button variant="borderless" onClick={(): void => setValgtInnlogging(innlogging)}>
                    {'Logg ut'}
                  </Button>
                </UNSAFE_TableCell>
              </UNSAFE_TableRow>
            ))}
          </UNSAFE_TableBody>
        </UNSAFE_Table>
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
