import React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import UNSAFE_Table, { UNSAFE_TableBody, UNSAFE_TableCell, UNSAFE_TableHead, UNSAFE_TableHeadCell, UNSAFE_TableRow } from '../';
import Button from '../../Button';

interface Kontaktperson {
  id: string;
  navn: string;
}

const meta = {
  title: '@helsenorge/designsystem-react/Components/UNSAFE_Table/RealExamples/Kjernejournal',
  component: UNSAFE_Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={UNSAFE_Table} />,
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
} satisfies Meta<typeof UNSAFE_Table>;

export default meta;

type Story = StoryObj<typeof UNSAFE_Table>;

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
      <UNSAFE_Table {...args}>
        <UNSAFE_TableHead>
          <UNSAFE_TableRow>
            <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
            <UNSAFE_TableHeadCell>{''}</UNSAFE_TableHeadCell>
          </UNSAFE_TableRow>
        </UNSAFE_TableHead>
        <UNSAFE_TableBody>
          {kontaktpersoner.map(person => (
            <UNSAFE_TableRow key={person.id}>
              <UNSAFE_TableCell dataLabel="Navn">{person.navn}</UNSAFE_TableCell>
              <UNSAFE_TableCell dataLabel="">
                <Button variant="borderless" onClick={(): void => fjernKontaktperson(person.id)}>
                  {'Fjern'}
                </Button>
              </UNSAFE_TableCell>
            </UNSAFE_TableRow>
          ))}
        </UNSAFE_TableBody>
      </UNSAFE_Table>
    );
  },
};
