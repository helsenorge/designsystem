/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { Meta } from '@storybook/react-vite';

import FilterSort from './FilterSort';
import { sortBy, sortItems } from '../utils';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterSort',
  component: FilterSort,
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={FilterSort} />,
    },
  },
  args: {
    children: (
      <>
        <option value={'Option 1'}>{'Nyest-Eldst'}</option>
        <option value={'Option 2'}>{'Eldst-Nyest'}</option>
        <option value={'Option 3'}>{'Alfabetisk A-Å'}</option>
        <option value={'Option 4'}>{'Alfabetisk Å-A'}</option>
      </>
    ),
  },
  argTypes: {},
} satisfies Meta<typeof FilterSort>;

export default meta;

export const Default = {
  render: (args: any): React.JSX.Element => <FilterSort {...args} />,
};

interface Dokument {
  navn: string;
  dato: Date;
}

const dokumenter: Dokument[] = [
  { navn: 'Prøvesvar', dato: new Date('2024-03-10') },
  { navn: 'Epikrise', dato: new Date('2024-01-05') },
  { navn: 'Årskontroll', dato: new Date('2024-02-20') },
  { navn: 'Henvisning', dato: new Date('2023-12-01') },
];

const WithSortingExample: React.FC = () => {
  const [sortKey, setSortKey] = useState('newest');

  const sorted = sortItems(dokumenter, sortKey, {
    newest: sortBy<Dokument>(d => d.dato, 'desc'),
    oldest: sortBy<Dokument>(d => d.dato),
    nameAsc: sortBy<Dokument>(d => d.navn),
    nameDesc: sortBy<Dokument>(d => d.navn, 'desc'),
  });

  return (
    <>
      <FilterSort value={sortKey} onChange={e => setSortKey(e.target.value)}>
        <option value={'newest'}>{'Nyest-Eldst'}</option>
        <option value={'oldest'}>{'Eldst-Nyest'}</option>
        <option value={'nameAsc'}>{'Alfabetisk A-Å'}</option>
        <option value={'nameDesc'}>{'Alfabetisk Å-A'}</option>
      </FilterSort>
      <ul>
        {sorted.map(dokument => (
          <li key={dokument.navn}>{`${dokument.navn} (${dokument.dato.toLocaleDateString('nb-NO')})`}</li>
        ))}
      </ul>
    </>
  );
};

export const WithSorting = {
  render: (): React.JSX.Element => <WithSortingExample />,
};
