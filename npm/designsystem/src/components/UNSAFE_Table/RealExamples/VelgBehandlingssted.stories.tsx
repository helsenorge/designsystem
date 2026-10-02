import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import UNSAFE_Table, { UNSAFE_TableBody, UNSAFE_TableCell, UNSAFE_TableHead, UNSAFE_TableHeadCell, UNSAFE_TableRow, useSort } from '../';
import FilterSort from '../../Filter/FilterSort';

interface Behandlingssted {
  id: string;
  navn: string;
  ventetider: Record<string, number>;
}

/** Ventetidstypene varierer avhengig av hvilken behandling brukeren har søkt etter, akkurat som i HN-VelgBehandlingssted. */
const ventetidstyper = ['Vurdering', 'Utredning'];

const behandlingssteder: Behandlingssted[] = [
  { id: 'b1', navn: 'Oslo universitetssykehus', ventetider: { Vurdering: 14, Utredning: 42 } },
  { id: 'b2', navn: 'Diakonhjemmet sykehus', ventetider: { Vurdering: 21, Utredning: 35 } },
  { id: 'b3', navn: 'Lovisenberg sykehus', ventetider: { Vurdering: 7, Utredning: 28 } },
];

const meta = {
  title: '@helsenorge/designsystem-react/Components/UNSAFE_Table/RealExamples/VelgBehandlingssted',
  component: UNSAFE_Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={UNSAFE_Table} />,
      description: {
        component:
          'Basert på sammenligningstabellen for behandlingssteder i HN-VelgBehandlingssted. Kolonnene for ventetid genereres dynamisk ut ' +
          'fra hvilke ventetidstyper som finnes i treffene, og tabellen er sorterbar på navn og ventetid.',
      },
    },
  },
  args: {
    caption: 'Sammenlign behandlingssteder',
  },
} satisfies Meta<typeof UNSAFE_Table>;

export default meta;

type Story = StoryObj<typeof UNSAFE_Table>;

export const BehandlingerTable: Story = {
  render: function BehandlingerTableStory(args) {
    const { sortedData, sortColumnKey, requestSort, getSortProps } = useSort({
      data: behandlingssteder,
      getSortValue: (sted, sortKey) => (sortKey.startsWith('ventetider.') ? sted.ventetider[sortKey.split('.')[1]] : sted.navn),
    });

    return (
      <>
        <FilterSort value={sortColumnKey ?? ''} onChange={(e): void => requestSort(e.target.value)}>
          <option value="navn">{'Navn'}</option>
          {ventetidstyper.map(type => (
            <option key={type} value={`ventetider.${type}`}>
              {type}
            </option>
          ))}
        </FilterSort>
        <UNSAFE_Table {...args}>
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell {...getSortProps('navn')}>{'Behandlingssted'}</UNSAFE_TableHeadCell>
              {ventetidstyper.map(type => (
                <UNSAFE_TableHeadCell key={type} {...getSortProps(`ventetider.${type}`)}>
                  {`Ventetid ${type.toLowerCase()}`}
                </UNSAFE_TableHeadCell>
              ))}
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            {sortedData.map(sted => (
              <UNSAFE_TableRow key={sted.id}>
                <UNSAFE_TableCell dataLabel="Behandlingssted">{sted.navn}</UNSAFE_TableCell>
                {ventetidstyper.map(type => (
                  <UNSAFE_TableCell key={type} dataLabel={`Ventetid ${type.toLowerCase()}`}>
                    {sted.ventetider[type] !== undefined ? `${sted.ventetider[type]} dager` : '–'}
                  </UNSAFE_TableCell>
                ))}
              </UNSAFE_TableRow>
            ))}
          </UNSAFE_TableBody>
        </UNSAFE_Table>
      </>
    );
  },
};
