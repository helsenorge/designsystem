import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import UNSAFE_Table, {
  UNSAFE_TableBody,
  UNSAFE_TableCell,
  UNSAFE_TableHead,
  UNSAFE_TableHeadCell,
  UNSAFE_TableRow,
  useTableExpandedRows,
  useTableShowMore,
} from '../';
import Button from '../../Button';
import Spacer from '../../Spacer';
import Toggle from '../../Toggle';

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
  title: '@helsenorge/designsystem-react/Components/UNSAFE_Table/RealExamples/Fastlege',
  component: UNSAFE_Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={UNSAFE_Table} />,
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
} satisfies Meta<typeof UNSAFE_Table>;

export default meta;

type Story = StoryObj<typeof UNSAFE_Table>;

export const ByttFastlegeResultater: Story = {
  render: function ByttFastlegeResultaterStory(args) {
    const [erInnlogget, setErInnlogget] = useState(true);
    const { isExpanded, toggleExpanded } = useTableExpandedRows();
    const { visibleData, hasMore, showMore } = useTableShowMore({ data: resultater, pageSize: 2 });

    return (
      <>
        <Toggle checked={erInnlogget} onChange={(): void => setErInnlogget(!erInnlogget)} label={[{ text: 'Innlogget (demo)' }]} />
        <Spacer size="s" />
        <UNSAFE_Table {...args}>
          <UNSAFE_TableHead>
            <UNSAFE_TableRow>
              <UNSAFE_TableHeadCell />
              <UNSAFE_TableHeadCell>{'Fastlege'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Ledige plasser'}</UNSAFE_TableHeadCell>
              <UNSAFE_TableHeadCell>{'Antall på venteliste'}</UNSAFE_TableHeadCell>
              {erInnlogget && <UNSAFE_TableHeadCell>{''}</UNSAFE_TableHeadCell>}
            </UNSAFE_TableRow>
          </UNSAFE_TableHead>
          <UNSAFE_TableBody>
            {visibleData.map(resultat => {
              const expanded = isExpanded(resultat.id);
              const expandedRowId = `fastlege-detaljer-${resultat.id}`;

              return (
                <UNSAFE_TableRow
                  key={resultat.id}
                  expanded={expanded}
                  expandableRowId={expandedRowId}
                  onClick={(): void => toggleExpanded(resultat.id)}
                  hideDetailsText="Skjul detaljer"
                  showDetailsText="Vis detaljer"
                  expandedContent={
                    <>
                      <p>{`${resultat.legekontor}. ${resultat.ledigePlasser > 0 ? `${resultat.ledigePlasser} ledige plasser.` : 'Ingen ledige plasser, men du kan sette deg på venteliste.'}`}</p>
                    </>
                  }
                >
                  <UNSAFE_TableCell>{resultat.erVikar ? 'Vikar' : resultat.fastlege}</UNSAFE_TableCell>
                  <UNSAFE_TableCell>{resultat.ledigePlasser}</UNSAFE_TableCell>
                  <UNSAFE_TableCell>{resultat.antallPaVenteliste}</UNSAFE_TableCell>
                  {erInnlogget && (
                    <UNSAFE_TableCell>
                      <Button variant="borderless" disabled={resultat.ledigePlasser === 0}>
                        {'Bytt fastlege'}
                      </Button>
                    </UNSAFE_TableCell>
                  )}
                </UNSAFE_TableRow>
              );
            })}
          </UNSAFE_TableBody>
        </UNSAFE_Table>
        {hasMore && (
          <>
            <Spacer size="s" />
            <Button variant="outline" onClick={showMore}>
              {'Vis flere fastleger'}
            </Button>
          </>
        )}
      </>
    );
  },
};
