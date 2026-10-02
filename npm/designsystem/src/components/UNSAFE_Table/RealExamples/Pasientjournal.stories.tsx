import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import UNSAFE_Table, {
  UNSAFE_TableBody,
  UNSAFE_TableCell,
  UNSAFE_TableHead,
  UNSAFE_TableHeadCell,
  UNSAFE_TableRow,
  useTableShowMore,
} from '../';
import Button from '../../Button';
import Spacer from '../../Spacer';

interface Tilgang {
  id: string;
  tidspunkt: string;
  dokument: string;
  dokumenttilhorighet: string;
}

const tilganger: Tilgang[] = Array.from({ length: 8 }, (_, index) => ({
  id: `t${index + 1}`,
  tidspunkt: `${10 + index}.04.2024 kl. 09:${(index * 7) % 60}`,
  dokument: 'Epikrise',
  dokumenttilhorighet: index % 2 === 0 ? 'Fastlege' : 'Spesialisthelsetjenesten',
}));

const meta = {
  title: '@helsenorge/designsystem-react/Components/UNSAFE_Table/RealExamples/Pasientjournal',
  component: UNSAFE_Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={UNSAFE_Table} />,
      description: {
        component:
          'Basert på tilgangsloggens detaljvisning i HN-Pasientjournal, som viser alle innsyn i et dokument. Tabellen er ikke sorterbar, ' +
          'men laster inn flere rader etter hvert med useTableShowMore.',
      },
    },
  },
  args: {
    caption: 'Hvem har sett dette dokumentet',
  },
} satisfies Meta<typeof UNSAFE_Table>;

export default meta;

type Story = StoryObj<typeof UNSAFE_Table>;

export const TilgangsloggDetaljer: Story = {
  render: function TilgangsloggDetaljerStory(args) {
    const { visibleData, hasMore, showMore, newRowsStartIndex, firstNewRowRef } = useTableShowMore<Tilgang, HTMLButtonElement>({
      data: tilganger,
      pageSize: 3,
    });

    return (
      <>
        <UNSAFE_Table {...args}>
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell>{'Tidspunkt'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Dokument'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Dokumenttilhørighet'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{''}</UNSAFE_TableHeadCell>
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            {visibleData.map((tilgang, index) => (
              <UNSAFE_TableRow key={tilgang.id}>
                <UNSAFE_TableCell dataLabel="Tidspunkt">{tilgang.tidspunkt}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Dokument">{tilgang.dokument}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="Dokumenttilhørighet">{tilgang.dokumenttilhorighet}</UNSAFE_TableCell>
                <UNSAFE_TableCell dataLabel="">
                  <Button variant="borderless" ref={index === newRowsStartIndex ? firstNewRowRef : undefined}>
                    {'Se dokument'}
                  </Button>
                </UNSAFE_TableCell>
              </UNSAFE_TableRow>
            ))}
          </UNSAFE_TableBody>
        </UNSAFE_Table>
        {hasMore && (
          <>
            <Spacer size="s" />
            <Button variant="outline" onClick={showMore}>
              {'Vis flere'}
            </Button>
          </>
        )}
      </>
    );
  },
};
