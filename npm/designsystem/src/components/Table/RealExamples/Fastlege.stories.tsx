import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Table, { TableBody, TableCell, TableHead, TableHeadCell, TableRow, useTableExpandedRows, useTableShowMore } from '../';
import { LanguageLocales } from '../../../constants';
import { useLanguage } from '../../../hooks/useLanguage';
import Button from '../../Button';
import Spacer from '../../Spacer';
import Toggle from '../../Toggle';
import { getResources } from '../resourceHelper';

interface Resultat {
  id: string;
  fastlege: string;
  legekontor: string;
  ledigePlasser: number;
  antallPaVenteliste: number;
  erVikar: boolean;
}

const resultater: Resultat[] = [
  { id: 'r1', fastlege: 'Line Danser', legekontor: 'Curato Røntgen', ledigePlasser: 3, antallPaVenteliste: 0, erVikar: false },
  { id: 'r2', fastlege: 'Hans Nilsen', legekontor: 'Aleris Frogner', ledigePlasser: 0, antallPaVenteliste: 14, erVikar: false },
  { id: 'r3', fastlege: 'Vikar', legekontor: 'Best Helse', ledigePlasser: 12, antallPaVenteliste: 0, erVikar: true },
  { id: 'r4', fastlege: 'Bjørn Olsen', legekontor: 'Volvat Majorstuen', ledigePlasser: 0, antallPaVenteliste: 3, erVikar: false },
];

const meta = {
  title: '@helsenorge/designsystem-react/Components/Table/RealExamples/Fastlege',
  component: Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Table} />,
      description: {
        component:
          'Basert på resultatlisten ved bytte av fastlege i HN-Fastlege. Hver rad kan utvides for å se flere detaljer om legekontoret, ' +
          '"Bytt fastlege"-kolonnen vises kun når innbyggeren er innlogget, listen lastes inn gradvis med useTableShowMore, og rader uten ' +
          'navngitt fastlege faller tilbake til "Vikar".',
      },
    },
  },
  args: {
    caption: 'Fastleger med ledig kapasitet',
  },
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const ByttFastlegeResultater: Story = {
  render: function ByttFastlegeResultaterStory(args) {
    const [erInnlogget, setErInnlogget] = useState(true);
    const { isExpanded, toggleExpanded } = useTableExpandedRows();
    const { visibleData, hasMore, showMore } = useTableShowMore({ data: resultater, pageSize: 2 });
    const { language } = useLanguage<LanguageLocales>(LanguageLocales.NORWEGIAN);
    const resources = getResources(language);

    return (
      <>
        <Toggle checked={erInnlogget} onChange={(): void => setErInnlogget(!erInnlogget)} label={[{ text: 'Innlogget (demo)' }]} />
        <Spacer size="s" />
        <Table {...args}>
          <TableHead>
            <TableRow>
              <TableHeadCell />
              <TableHeadCell>{'Fastlege'}</TableHeadCell>
              <TableHeadCell>{'Ledige plasser'}</TableHeadCell>
              <TableHeadCell>{'Antall på venteliste'}</TableHeadCell>
              {erInnlogget && <TableHeadCell>{''}</TableHeadCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {visibleData.map(resultat => {
              const expanded = isExpanded(resultat.id);
              const expandedRowId = `fastlege-detaljer-${resultat.id}`;

              return (
                <TableRow
                  key={resultat.id}
                  expanded={expanded}
                  expandableRowId={expandedRowId}
                  onClick={(): void => toggleExpanded(resultat.id)}
                  expandedContent={
                    <>
                      <p>{`${resultat.legekontor}. ${resultat.ledigePlasser > 0 ? `${resultat.ledigePlasser} ledige plasser.` : 'Ingen ledige plasser, men du kan sette deg på venteliste.'}`}</p>
                    </>
                  }
                >
                  <TableCell>{resultat.erVikar ? 'Vikar' : resultat.fastlege}</TableCell>
                  <TableCell>{resultat.ledigePlasser}</TableCell>
                  <TableCell>{resultat.antallPaVenteliste}</TableCell>
                  {erInnlogget && (
                    <TableCell>
                      <Button variant="borderless" disabled={resultat.ledigePlasser === 0}>
                        {'Bytt fastlege'}
                      </Button>
                    </TableCell>
                  )}
                </TableRow>
              );
            })}
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
