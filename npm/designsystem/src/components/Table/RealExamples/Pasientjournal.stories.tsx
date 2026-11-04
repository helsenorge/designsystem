import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Table, { TableBody, TableCell, TableHead, TableHeadCell, TableRow, useTableShowMore } from '../';
import { LanguageLocales } from '../../../constants';
import { useLanguage } from '../../../hooks/useLanguage';
import Button from '../../Button';
import Spacer from '../../Spacer';
import { getResources } from '../resourceHelper';

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
  title: '@helsenorge/designsystem-react/Components/Table/RealExamples/Pasientjournal',
  component: Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Table} />,
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
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const TilgangsloggDetaljer: Story = {
  render: function TilgangsloggDetaljerStory(args) {
    const { visibleData, hasMore, showMore, newRowsStartIndex, firstNewRowRef } = useTableShowMore<Tilgang, HTMLButtonElement>({
      data: tilganger,
      pageSize: 3,
    });

    const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
    const resources = getResources(language);

    return (
      <>
        <Table {...args}>
          <TableHead>
            <TableRow>
              <TableHeadCell>{'Tidspunkt'}</TableHeadCell>
              <TableHeadCell>{'Dokument'}</TableHeadCell>
              <TableHeadCell>{'Dokumenttilhørighet'}</TableHeadCell>
              <TableHeadCell>{''}</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleData.map((tilgang, index) => (
              <TableRow key={tilgang.id}>
                <TableCell>{tilgang.tidspunkt}</TableCell>
                <TableCell>{tilgang.dokument}</TableCell>
                <TableCell>{tilgang.dokumenttilhorighet}</TableCell>
                <TableCell>
                  <Button variant="borderless" ref={index === newRowsStartIndex ? firstNewRowRef : undefined}>
                    {'Se dokument'}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {hasMore && (
          <>
            <Spacer size="s" />
            <Button variant="outline" onClick={showMore}>
              {resources.showMoreButton}
            </Button>
          </>
        )}
      </>
    );
  },
};
