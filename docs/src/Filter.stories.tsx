import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import Checkbox from '@helsenorge/designsystem-react/components/Checkbox';
import EmptyState from '@helsenorge/designsystem-react/components/EmptyState';
import FilterButton from '@helsenorge/designsystem-react/components/Filter/FilterButton/FilterButton';
import FilterButtonAndChipsWrapper from '@helsenorge/designsystem-react/components/Filter/FilterButtonAndChipsWrapper/FilterButtonAndChipsWrapper';
import FilterDrawer from '@helsenorge/designsystem-react/components/Filter/FilterDrawer/FilterDrawer';
import FilterOverviewLinkList from '@helsenorge/designsystem-react/components/Filter/FilterOverviewLinkList/FilterOverviewLinkList';
import FilterResultCountAndSortWrapper from '@helsenorge/designsystem-react/components/Filter/FilterResultCountAndSortWrapper/FilterResultCountAndSortWrapper';
import FilterSort from '@helsenorge/designsystem-react/components/Filter/FilterSort/FilterSort';
import { useFilter } from '@helsenorge/designsystem-react/components/Filter/FiltreringsPOC/useFilter';
import {
  createFilterConfig,
  filterItems,
  matchFilter,
  toggleArrayFilter,
  type FilterMatchers,
} from '@helsenorge/designsystem-react/components/Filter/FiltreringsPOC/utils';
import getFilterChips from '@helsenorge/designsystem-react/components/Filter/getFilterChips/getFilterChips';
import { useFilterDrawer } from '@helsenorge/designsystem-react/components/Filter/useFilterDrawer';
import FormGroup from '@helsenorge/designsystem-react/components/FormGroup';
import Icon from '@helsenorge/designsystem-react/components/Icon';
import HTMLFile from '@helsenorge/designsystem-react/components/Icons/HTMLFile';
import Panel from '@helsenorge/designsystem-react/components/Panel';
import { PanelVariant } from '@helsenorge/designsystem-react/components/Panel/constants';
import PanelList from '@helsenorge/designsystem-react/components/PanelList';
import Tag from '@helsenorge/designsystem-react/components/Tag';
import TagList from '@helsenorge/designsystem-react/components/TagList';

import Unsafe_DateRangeSelector from '@helsenorge/datepicker/components/Unsafe_DatePicker/Unsafe_DateRangeSelector';
import { DateRangePresets, getDateRangeLabel } from '@helsenorge/datepicker/components/Unsafe_DatePicker/Unsafe_DateRangeSelector/utils';

const meta: Meta = {
  title: 'Documentation/Examples/Filter',
  parameters: {
    docs: {
      description: {
        component:
          'This example demonstrates how to use the new Filter components from @helsenorge/designsystem. ' +
          'This story lives in the docs/guide workspace and has its own dependencies.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const DokumenterExample: Story = {
  render: () => {
    enum InnholdType {
      notat = 1,
      epikriseSammenfatning = 2,
      journalsammendrag = 3,
      brevOgKorrespondanse = 4,
      provesvar = 5,
      egenkartlegging = 6,
      ikkeIBruk2 = 7,
      innsynsrapport = 8,
      vaksinebevis = 9,
      enkeltvedtak = 10,
    }
    enum KontekstType {
      pasientjournal = 1,
      helseregistre = 2,
      skjemautfyller = 3,
      provesvar = 4,
      koronasertifikat = 5,
      fastlegetjenester = 6,
      ekstern = 7,
      henvendelse = 8,
      pasientreiser = 9,
      behandlingsplan = 10,
      gravid = 11,
    }

    type DokumenterFilterType = {
      innhold: InnholdType[];
      kommerFra: KontekstType[];
      dateRange: string;
    };

    interface Dokument {
      navn: string;
      innholdstype: InnholdType[];
      beskrivelse?: string;
      kommerFra: KontekstType[];
      arkivertDato?: Date;
    }

    const dokumentMockData: Dokument[] = [
      {
        navn: 'Allergi (Egenkartlegging)',
        beskrivelse: 'Skjemautfyller, arkivert 26.03.2026',
        innholdstype: [InnholdType.egenkartlegging],
        kommerFra: [KontekstType.skjemautfyller],
        arkivertDato: new Date(2026, 2, 26),
      },
      {
        navn: 'Epikrise kirurgisk avdeling',
        beskrivelse: 'Haukeland, 20.03.2025',
        innholdstype: [InnholdType.epikriseSammenfatning],
        kommerFra: [KontekstType.pasientjournal],
        arkivertDato: new Date(2025, 2, 20),
      },
      {
        navn: 'Blodprøvesvar mars 2026',
        beskrivelse: 'Laboratoriet, 18.03.2026',
        innholdstype: [InnholdType.provesvar],
        kommerFra: [KontekstType.provesvar],
        arkivertDato: new Date(2026, 2, 18),
      },
      {
        navn: 'Journalnotat fastlege',
        beskrivelse: 'Dr. Hansen, 15.03.2026',
        innholdstype: [InnholdType.notat],
        kommerFra: [KontekstType.pasientjournal],
        arkivertDato: new Date(2026, 2, 15),
      },
      {
        navn: 'Brev fra spesialist',
        beskrivelse: 'Rikshospitalet, 12.03.2026',
        innholdstype: [InnholdType.brevOgKorrespondanse],
        kommerFra: [KontekstType.pasientjournal],
        arkivertDato: new Date(2026, 2, 12),
      },
      {
        navn: 'Vaksinebevis COVID-19',
        beskrivelse: 'FHI, 10.03.2026',
        innholdstype: [InnholdType.vaksinebevis],
        kommerFra: [KontekstType.helseregistre],
        arkivertDato: new Date(2026, 2, 10),
      },
      {
        navn: 'Innsynsrapport kjernejournal',
        beskrivelse: 'Kjernejournal, 08.03.2026',
        innholdstype: [InnholdType.innsynsrapport],
        kommerFra: [KontekstType.helseregistre],
        arkivertDato: new Date(2026, 2, 8),
      },
      {
        navn: 'Enkeltvedtak om egenandel',
        beskrivelse: 'Helfo, 05.03.2026',
        innholdstype: [InnholdType.enkeltvedtak],
        kommerFra: [KontekstType.fastlegetjenester],
        arkivertDato: new Date(2026, 2, 5),
      },
      {
        navn: 'Sammenfatning poliklinikk',
        beskrivelse: 'St. Olavs, 01.03.2026',
        innholdstype: [InnholdType.epikriseSammenfatning],
        kommerFra: [KontekstType.pasientjournal],
        arkivertDato: new Date(2026, 2, 1),
      },
      {
        navn: 'Journalsammendrag 2025',
        beskrivelse: 'Fastlege, 28.02.2026',
        innholdstype: [InnholdType.journalsammendrag],
        kommerFra: [KontekstType.pasientjournal],
        arkivertDato: new Date(2026, 1, 28),
      },
      {
        navn: 'Svar på henvendelse',
        beskrivelse: 'Helsenorge, 25.02.2026',
        innholdstype: [InnholdType.brevOgKorrespondanse],
        kommerFra: [KontekstType.henvendelse],
        arkivertDato: new Date(2026, 1, 25),
      },
      {
        navn: 'Urinprøvesvar',
        beskrivelse: 'Laboratoriet, 22.02.2026',
        innholdstype: [InnholdType.provesvar],
        kommerFra: [KontekstType.provesvar],
        arkivertDato: new Date(2026, 1, 22),
      },
      {
        navn: 'Smertekartlegging',
        beskrivelse: 'Skjemautfyller, 20.02.2026',
        innholdstype: [InnholdType.egenkartlegging],
        kommerFra: [KontekstType.skjemautfyller],
        arkivertDato: new Date(2026, 1, 20),
      },
      {
        navn: 'Notat fysioterapeut',
        beskrivelse: 'Fysioterapi AS, 18.02.2026',
        innholdstype: [InnholdType.notat],
        kommerFra: [KontekstType.pasientjournal],
        arkivertDato: new Date(2026, 1, 18),
      },
      {
        navn: 'Reiseregning godkjent',
        beskrivelse: 'Pasientreiser, 15.02.2026',
        innholdstype: [InnholdType.enkeltvedtak],
        kommerFra: [KontekstType.pasientreiser],
        arkivertDato: new Date(2026, 1, 15),
      },
      {
        navn: 'Behandlingsplan diabetes',
        beskrivelse: 'Fastlege, 12.02.2026',
        innholdstype: [InnholdType.notat],
        kommerFra: [KontekstType.behandlingsplan],
        arkivertDato: new Date(2026, 1, 12),
      },
      {
        navn: 'Vaksinebevis influensa',
        beskrivelse: 'Apotek, 10.02.2026',
        innholdstype: [InnholdType.vaksinebevis],
        kommerFra: [KontekstType.helseregistre],
        arkivertDato: new Date(2026, 1, 10),
      },
      {
        navn: 'Røntgensvar hofte',
        beskrivelse: 'Radiologisk avd., 08.02.2026',
        innholdstype: [InnholdType.provesvar],
        kommerFra: [KontekstType.provesvar],
        arkivertDato: new Date(2026, 1, 8),
      },
      {
        navn: 'Epikrise rehabilitering',
        beskrivelse: 'Sunnaas, 05.02.2026',
        innholdstype: [InnholdType.epikriseSammenfatning],
        kommerFra: [KontekstType.pasientjournal],
        arkivertDato: new Date(2026, 1, 5),
      },
      {
        navn: 'Koronasertifikat',
        beskrivelse: 'FHI, 01.02.2026',
        innholdstype: [InnholdType.vaksinebevis],
        kommerFra: [KontekstType.koronasertifikat],
        arkivertDato: new Date(2026, 1, 1),
      },
      {
        navn: 'Brev fra fastlege',
        beskrivelse: 'Dr. Berg, 28.01.2026',
        innholdstype: [InnholdType.brevOgKorrespondanse],
        kommerFra: [KontekstType.fastlegetjenester],
        arkivertDato: new Date(2026, 0, 28),
      },
      {
        navn: 'Svangerskapskontroll',
        beskrivelse: 'Jordmor, 25.01.2026',
        innholdstype: [InnholdType.notat],
        kommerFra: [KontekstType.gravid],
        arkivertDato: new Date(2026, 0, 25),
      },
      {
        navn: 'Journalsammendrag spesialist',
        beskrivelse: 'OUS, 22.06.2025',
        innholdstype: [InnholdType.journalsammendrag],
        kommerFra: [KontekstType.pasientjournal],
        arkivertDato: new Date(2025, 5, 22),
      },
      {
        navn: 'Innsynsrapport reseptregisteret',
        beskrivelse: 'E-resept, 20.01.2026',
        innholdstype: [InnholdType.innsynsrapport],
        kommerFra: [KontekstType.helseregistre],
        arkivertDato: new Date(2026, 0, 20),
      },
      {
        navn: 'Ekstern rapport tannlege',
        beskrivelse: 'Tannklinikken, 18.01.2026',
        innholdstype: [InnholdType.notat],
        kommerFra: [KontekstType.ekstern],
        arkivertDato: new Date(2026, 0, 18),
      },
      {
        navn: 'Søvnkartlegging',
        beskrivelse: 'Skjemautfyller, 15.01.2026',
        innholdstype: [InnholdType.egenkartlegging],
        kommerFra: [KontekstType.skjemautfyller],
        arkivertDato: new Date(2026, 0, 15),
      },
      {
        navn: 'MR-svar kne',
        beskrivelse: 'Radiologisk avd., 12.01.2026',
        innholdstype: [InnholdType.provesvar],
        kommerFra: [KontekstType.provesvar],
        arkivertDato: new Date(2026, 0, 12),
      },
      {
        navn: 'Vedtak om frikort',
        beskrivelse: 'Helfo, 10.01.2026',
        innholdstype: [InnholdType.enkeltvedtak],
        kommerFra: [KontekstType.fastlegetjenester],
        arkivertDato: new Date(2026, 0, 10),
      },
      {
        navn: 'Korrespondanse NAV',
        beskrivelse: 'NAV, 08.01.2026',
        innholdstype: [InnholdType.brevOgKorrespondanse],
        kommerFra: [KontekstType.ekstern],
        arkivertDato: new Date(2026, 0, 8),
      },
      {
        navn: 'Epikrise øyeavdeling',
        beskrivelse: 'Ullevål, 05.01.2026',
        innholdstype: [InnholdType.epikriseSammenfatning],
        kommerFra: [KontekstType.pasientjournal],
        arkivertDato: new Date(2026, 0, 5),
      },
      {
        navn: 'Dokument som kom inn i dag',
        beskrivelse: 'Skjemautfyller',
        innholdstype: [InnholdType.egenkartlegging],
        kommerFra: [KontekstType.skjemautfyller],
        arkivertDato: new Date(2026, 3, 8),
      },
    ];

    const innholdTypeOptions = [
      { value: InnholdType.notat, displaytext: 'Notat' },
      { value: InnholdType.epikriseSammenfatning, displaytext: 'Epikrise, sammenfatning' },
      { value: InnholdType.journalsammendrag, displaytext: 'Journalsammendrag' },
      { value: InnholdType.brevOgKorrespondanse, displaytext: 'Brev og korrespondanse' },
      { value: InnholdType.provesvar, displaytext: 'Prøvesvar' },
      { value: InnholdType.egenkartlegging, displaytext: 'Egenkartlegging' },
      { value: InnholdType.innsynsrapport, displaytext: 'Innsynsrapport' },
      { value: InnholdType.vaksinebevis, displaytext: 'Vaksinebevis' },
      { value: InnholdType.enkeltvedtak, displaytext: 'Enkeltvedtak' },
    ];

    const kommerFraOptions = [
      { value: KontekstType.pasientjournal, displaytext: 'Pasientjournal' },
      { value: KontekstType.helseregistre, displaytext: 'Helseregistre' },
      { value: KontekstType.skjemautfyller, displaytext: 'Skjemautfyller' },
      { value: KontekstType.provesvar, displaytext: 'Prøvesvar' },
      { value: KontekstType.koronasertifikat, displaytext: 'Koronasertifikat' },
      { value: KontekstType.fastlegetjenester, displaytext: 'Fastlegetjenester' },
      { value: KontekstType.ekstern, displaytext: 'Ekstern' },
      { value: KontekstType.henvendelse, displaytext: 'Henvendelse' },
      { value: KontekstType.pasientreiser, displaytext: 'Pasientreiser' },
      { value: KontekstType.behandlingsplan, displaytext: 'Behandlingsplan' },
      { value: KontekstType.gravid, displaytext: 'Gravid' },
    ];

    const dateRangeOptions = [
      DateRangePresets.LastMonth,
      DateRangePresets.Last6Months,
      DateRangePresets.Last12Months,
      DateRangePresets.FullYear,
    ];

    const { filterOptions, getLabel: baseGetLabel } = createFilterConfig<DokumenterFilterType>({
      innhold: { options: innholdTypeOptions, getLabel: o => o.displaytext },
      kommerFra: { options: kommerFraOptions, getLabel: o => o.displaytext },
      dateRange: { options: dateRangeOptions, getLabel: o => o.displayText, defaultValue: DateRangePresets.Last12Months.value },
    });

    // Sorting state
    const [sortOption, setSortOption] = React.useState<'date-desc' | 'date-asc' | 'name-asc' | 'name-desc'>('date-desc');

    // Custom date range state
    const [dateRangeValue, setDateRangeValue] = React.useState<string | undefined>(DateRangePresets.Last12Months.value);
    const [selectedRange, setSelectedRange] = React.useState<{ from: Date; to: Date }>(DateRangePresets.Last12Months.dateRange);

    const handleDateRangeChange = React.useCallback((value: string) => {
      setDateRangeValue(value);
    }, []);

    const handlePresetSelected = React.useCallback((preset: typeof DateRangePresets.LastMonth) => {
      setDateRangeValue(preset.value);
      setSelectedRange(preset.dateRange);
    }, []);

    const handleRangeChange = React.useCallback((from: Date | undefined, to: Date | undefined) => {
      if (from && to) {
        setSelectedRange({ from, to });
      }
    }, []);

    const getLabel: typeof baseGetLabel = (key, value) => {
      if (key === 'dateRange' && value === 'custom') {
        return getDateRangeLabel(selectedRange);
      }
      return baseGetLabel(key, value);
    };

    const filter = useFilter<DokumenterFilterType>(filterOptions);
    const drawer = useFilterDrawer<DokumentFilterViews>();

    React.useEffect(() => {
      filter.setFilter('dateRange', dateRangeValue);
    }, [dateRangeValue]);

    const filterMatchers: FilterMatchers<Dokument, DokumenterFilterType> = {
      innhold: matchFilter.arrayIncludes<Dokument>(d => d.innholdstype),
      kommerFra: matchFilter.arrayIncludes<Dokument>(d => d.kommerFra),
      dateRange: (dokument, selected) => {
        if (!selected) return true;
        const docDate = dokument.arkivertDato;
        if (!docDate) return false;
        return docDate >= selectedRange.from && docDate <= selectedRange.to;
      },
    };

    // Filtering
    const filtered = filterItems(dokumentMockData, filter.filters, filterMatchers);

    // Sorting
    const sorted = React.useMemo(() => {
      const arr = [...filtered];
      switch (sortOption) {
        case 'date-desc':
          return arr.sort((a, b) => (b.arkivertDato?.getTime() ?? 0) - (a.arkivertDato?.getTime() ?? 0));
        case 'date-asc':
          return arr.sort((a, b) => (a.arkivertDato?.getTime() ?? 0) - (b.arkivertDato?.getTime() ?? 0));
        case 'name-asc':
          return arr.sort((a, b) => a.navn.localeCompare(b.navn, 'nb'));
        case 'name-desc':
          return arr.sort((a, b) => b.navn.localeCompare(a.navn, 'nb'));
        default:
          return arr;
      }
    }, [filtered, sortOption]);

    const dokumentFilterLabels: Record<keyof DokumenterFilterType, string> = {
      innhold: 'Innholdstype',
      kommerFra: 'Kommer fra',
      dateRange: 'Arkivert dato',
    };

    type DokumentFilterViews = 'overview' | 'innhold' | 'kommerFra' | 'periode';

    return (
      <>
        <div style={{ display: 'flex', flexFlow: 'column', gap: '12px' }}>
          <FilterButtonAndChipsWrapper
            filterButtonComponent={<FilterButton onClick={() => drawer.open()} />}
            filterChips={getFilterChips({
              filter,
              getLabel,
              onChipClick: key => drawer.open(key === 'dateRange' ? 'periode' : (key as DokumentFilterViews)),
              onOverflowChipClick: () => drawer.open(),
            })}
          />

          <FilterResultCountAndSortWrapper
            resultCount={`${sorted.length} dokumenter`}
            sortComponent={
              <FilterSort
                value={sortOption}
                onChange={e => setSortOption(e.target.value as 'date-desc' | 'date-asc' | 'name-asc' | 'name-desc')}
              >
                <option value="date-desc">{'Nyeste-Eldste'}</option>
                <option value="date-asc">{'Eldste-Nyeste'}</option>
                <option value="name-asc">{'A-Å'}</option>
                <option value="name-desc">{'Å-A'}</option>
              </FilterSort>
            }
          />
        </div>

        <FilterDrawer
          drawer={drawer}
          onReset={() => {
            filter.removeFilter('innhold');
            filter.removeFilter('kommerFra');
          }}
          showResultButtonText={`Vis ${filtered.length} treff`}
        >
          <FilterDrawer.Overview title={'Finn ...'}>
            <FilterOverviewLinkList
              filter={filter}
              getLabel={getLabel}
              links={[
                { filterKey: 'innhold', title: dokumentFilterLabels.innhold },
                { filterKey: 'kommerFra', title: dokumentFilterLabels.kommerFra },
                { filterKey: 'dateRange', viewId: 'periode', title: dokumentFilterLabels.dateRange },
              ]}
            />
          </FilterDrawer.Overview>
          <FilterDrawer.View id="innhold" title={dokumentFilterLabels.innhold} onReset={() => filter.removeFilter('innhold')}>
            <div>
              <FormGroup legend={'Velg en eller flere'}>
                {innholdTypeOptions.map(opt => (
                  <Checkbox
                    key={opt.value}
                    label={opt.displaytext}
                    checked={(filter.filters.innhold ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'innhold', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </FilterDrawer.View>
          <FilterDrawer.View id="kommerFra" title={dokumentFilterLabels.kommerFra} onReset={() => filter.removeFilter('kommerFra')}>
            <div>
              <FormGroup legend={'Velg en eller flere'}>
                {kommerFraOptions.map(opt => (
                  <Checkbox
                    key={opt.value}
                    label={opt.displaytext}
                    checked={(filter.filters.kommerFra ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'kommerFra', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </FilterDrawer.View>
          <FilterDrawer.View id="periode" title={dokumentFilterLabels.dateRange} noResetButton>
            <div>
              <FormGroup legend={'Velg periode'}>
                <Unsafe_DateRangeSelector
                  key={dateRangeValue}
                  name="periode"
                  options={dateRangeOptions}
                  value={dateRangeValue}
                  selectedRange={selectedRange}
                  onChange={handleDateRangeChange}
                  customValueDisplayText="Egendefinert periode/dato"
                  onPresetSelected={handlePresetSelected}
                  onRangeChange={handleRangeChange}
                />
                {/* Legger til space til kalender popup */}
                <div style={{ height: '23rem', width: '1px' }} />
              </FormGroup>
            </div>
          </FilterDrawer.View>
        </FilterDrawer>
        {sorted.length > 0 ? (
          <PanelList variant={PanelVariant.outline}>
            {sorted.map(dokument => (
              <Panel>
                <Panel.Title title={dokument.navn} icon={<Icon svgIcon={HTMLFile} />} />
                <Panel.A>
                  <span>{dokument.beskrivelse}</span>
                </Panel.A>
                <Panel.B>
                  <TagList>
                    {dokument.innholdstype.map(o => (
                      <Tag key={o}>{getLabel('innhold', o)}</Tag>
                    ))}
                  </TagList>
                </Panel.B>
              </Panel>
            ))}
          </PanelList>
        ) : (
          <EmptyState title={'Ingen dokumenter ble funnet med valgt filter. Prøv å endre filteret for å se flere dokumenter.'} />
        )}
      </>
    );
  },
};
