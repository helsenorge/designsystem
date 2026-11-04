import React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Table, { TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../';
import Button from '../../Button';

interface Kontaktperson {
  id: string;
  navn: string;
}

const meta = {
  title: '@helsenorge/designsystem-react/Components/Table/RealExamples/Kjernejournal',
  component: Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Table} />,
      description: {
        component:
          'Basert på donorkort-visningen i HN-Kjernejournal, der innbyggeren kan fjerne kontaktpersoner fra donorkortet sitt. Enkel ' +
          'tabell med to kolonner, ingen sortering, og en handlingsknapp i siste kolonne.',
      },
    },
  },
  args: {
    caption: 'Dine kontaktpersoner på donorkortet',
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const Donorkort: Story = {
  render: function DonorkortStory(args) {
    const [kontaktpersoner, setKontaktpersoner] = React.useState<Kontaktperson[]>([
      { id: 'k1', navn: 'Per Hansen' },
      { id: 'k2', navn: 'Anne Olsen' },
    ]);

    const fjernKontaktperson = (id: string): void => {
      setKontaktpersoner(personer => personer.filter(person => person.id !== id));
    };

    return (
      <Table {...args}>
        <TableHead>
          <TableRow>
            <TableHeadCell>{'Navn'}</TableHeadCell>
            <TableHeadCell>{''}</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {kontaktpersoner.length > 0 ? (
            kontaktpersoner.map(person => (
              <TableRow key={person.id}>
                <TableCell>{person.navn}</TableCell>
                <TableCell>
                  <Button variant="borderless" onClick={(): void => fjernKontaktperson(person.id)}>
                    {'Fjern'}
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={2}>{'Du har ingen kontaktpersoner på donorkortet.'}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  },
};
