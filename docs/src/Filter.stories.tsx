import React from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import Checkbox from '@helsenorge/designsystem-react/components/Checkbox';
import EmptyState from '@helsenorge/designsystem-react/components/EmptyState';
import ActiveFilters from '@helsenorge/designsystem-react/components/Filter/ActiveFilters/ActiveFilters';
import FilterButton from '@helsenorge/designsystem-react/components/Filter/FilterButton/FilterButton';
import FilterButtonAndActiveFiltersWrapper from '@helsenorge/designsystem-react/components/Filter/FilterButtonAndActiveFiltersWrapper/FilterButtonAndActiveFiltersWrapper';
import FilterDrawer from '@helsenorge/designsystem-react/components/Filter/FilterDrawer/FilterDrawer';
import FilterOverviewLinkList from '@helsenorge/designsystem-react/components/Filter/FilterOverviewLinkList/FilterOverviewLinkList';
import FilterResultTopBar from '@helsenorge/designsystem-react/components/Filter/FilterResultTopBar/FilterResultTopBar';
import FilterSort from '@helsenorge/designsystem-react/components/Filter/FilterSort/FilterSort';
import { useFilter } from '@helsenorge/designsystem-react/components/Filter/FiltreringsPOC/useFilter';
import {
  createFilterConfig,
  filterItems,
  matchFilter,
  toggleArrayFilter,
  type FilterMatchers,
} from '@helsenorge/designsystem-react/components/Filter/FiltreringsPOC/utils';
import { useFilterDrawer } from '@helsenorge/designsystem-react/components/Filter/useFilterDrawer';
import FormGroup from '@helsenorge/designsystem-react/components/FormGroup';
import Icon from '@helsenorge/designsystem-react/components/Icon';
import HTMLFile from '@helsenorge/designsystem-react/components/Icons/HTMLFile';
import Label, { Sublabel } from '@helsenorge/designsystem-react/components/Label';
import Panel from '@helsenorge/designsystem-react/components/Panel';
import { PanelVariant } from '@helsenorge/designsystem-react/components/Panel/constants';
import PanelList from '@helsenorge/designsystem-react/components/PanelList';
import RadioButton from '@helsenorge/designsystem-react/components/RadioButton';
import Tag from '@helsenorge/designsystem-react/components/Tag';
import TagList from '@helsenorge/designsystem-react/components/TagList';

import Unsafe_DatePicker from '@helsenorge/datepicker/components/Unsafe_DatePicker';

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
        arkivertDato: new Date(),
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
      { value: 'lastMonth', displayText: 'Siste måned' },
      { value: 'last6Months', displayText: 'Siste 6 måneder' },
      { value: 'last12Months', displayText: 'Siste 12 måneder' },
      { value: 'fullYear', displayText: new Date().getFullYear().toString() },
      { value: 'custom', displayText: 'Egendefinert periode/dato' },
    ];

    const { filterOptions, getLabel: baseGetLabel } = createFilterConfig<DokumenterFilterType>({
      innhold: { options: innholdTypeOptions, getLabel: o => o.displaytext },
      kommerFra: { options: kommerFraOptions, getLabel: o => o.displaytext },
      dateRange: { options: dateRangeOptions, getLabel: o => o.displayText },
    });

    const formatDate = (date?: Date): string =>
      date ? date.toLocaleDateString('nb-NO', { day: '2-digit', month: '2-digit', year: 'numeric' }) : '';

    // Custom getLabel for dateRange chips
    const getLabel: typeof baseGetLabel = (key, value) => {
      if (key === 'dateRange' && value === 'custom') {
        if (customStartDate && customEndDate) {
          return `${formatDate(customStartDate)}-${formatDate(customEndDate)}`;
        }
        if (customStartDate) {
          return `${formatDate(customStartDate)}->`;
        }
        if (customEndDate) {
          return `<-${formatDate(customEndDate)}`;
        }
        return 'Egendefinert periode';
      }
      return baseGetLabel(key, value);
    };

    const filter = useFilter<DokumenterFilterType>(filterOptions);
    const drawer = useFilterDrawer<DokumentFilterViews>();

    // Custom date range state
    const [customStartDate, setCustomStartDate] = React.useState<Date | undefined>();
    const [customEndDate, setCustomEndDate] = React.useState<Date | undefined>();

    const filterMatchers: FilterMatchers<Dokument, DokumenterFilterType> = {
      innhold: matchFilter.arrayIncludes<Dokument>(d => d.innholdstype),
      kommerFra: matchFilter.arrayIncludes<Dokument>(d => d.kommerFra),
      dateRange: (dokument, selected) => {
        if (!selected) return true;
        const docDate = dokument.arkivertDato;
        if (!docDate) return false;
        const today = new Date();
        if (selected === 'custom') {
          if (!customStartDate && !customEndDate) {
            return true;
          }
          if (customStartDate && customEndDate) {
            return docDate >= customStartDate && docDate <= customEndDate;
          }
          if (customStartDate) {
            return docDate >= customStartDate;
          }
          if (customEndDate) {
            return docDate <= customEndDate;
          }
          return true;
        }
        let startDate: Date | undefined;
        if (selected === 'lastMonth') {
          startDate = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
        } else if (selected === 'last6Months') {
          startDate = new Date(today.getFullYear(), today.getMonth() - 6, today.getDate());
        } else if (selected === 'last12Months') {
          startDate = new Date(today.getFullYear(), today.getMonth() - 12, today.getDate());
        } else if (selected === 'fullYear') {
          startDate = new Date(today.getFullYear(), 0, 1);
        }
        if (!startDate) return true;
        return docDate >= startDate;
      },
    };

    const filtered = filterItems(dokumentMockData, filter.filters, filterMatchers);

    const dokumentFilterLabels: Record<keyof DokumenterFilterType, string> = {
      innhold: 'Innholdstype',
      kommerFra: 'Kommer fra',
      dateRange: 'Arkivert dato',
    };

    type DokumentFilterViews = 'overview' | 'innhold' | 'kommerFra' | 'periode';

    return (
      <>
        <FilterButtonAndActiveFiltersWrapper>
          <FilterButton onClick={() => drawer.open()} />
          <ActiveFilters
            filter={filter}
            getLabel={getLabel}
            onChipClick={key => drawer.open(key === 'dateRange' ? 'periode' : (key as DokumentFilterViews))}
            onOverflowChipClick={() => drawer.open()}
          />
        </FilterButtonAndActiveFiltersWrapper>
        <FilterResultTopBar
          countText={`${filtered.length} dokumenter`}
          sortComponent={
            <FilterSort>
              <option value={'Option 1'}>{'Eldste-Nyeste'}</option>
              <option value={'Option 2'}>{'Nyeste-Eldste'}</option>
              <option value={'Option 3'}>{'A-Å'}</option>
              <option value={'Option 4'}>{'Å-A'}</option>
            </FilterSort>
          }
        />

        <FilterDrawer drawer={drawer} onReset={() => filter.resetFiltersToEmpty()} showResultButtonText={`Vis ${filtered.length} treff`}>
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
          <FilterDrawer.View id="innhold" title={dokumentFilterLabels.innhold}>
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
          <FilterDrawer.View id="kommerFra" title={dokumentFilterLabels.kommerFra}>
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
          <FilterDrawer.View id="periode" title={dokumentFilterLabels.dateRange}>
            <div>
              <FormGroup legend={'Velg periode'}>
                <RadioButton
                  name="periode"
                  label={'Siste måned'}
                  checked={filter.filters.dateRange === 'lastMonth'}
                  onChange={(): void => filter.setFilter('dateRange', 'lastMonth')}
                />
                <RadioButton
                  name="periode"
                  label={'Siste 6 måneder'}
                  checked={filter.filters.dateRange === 'last6Months'}
                  onChange={(): void => filter.setFilter('dateRange', 'last6Months')}
                />
                <RadioButton
                  name="periode"
                  label={'Siste 12 måneder'}
                  checked={filter.filters.dateRange === 'last12Months'}
                  onChange={(): void => filter.setFilter('dateRange', 'last12Months')}
                />
                <RadioButton
                  name="periode"
                  label={new Date().getFullYear().toString()}
                  checked={filter.filters.dateRange === 'fullYear'}
                  onChange={(): void => filter.setFilter('dateRange', 'fullYear')}
                />
                <RadioButton
                  name="periode"
                  label={'Egendefinert periode/dato'}
                  checked={filter.filters.dateRange === 'custom'}
                  onChange={(): void => filter.setFilter('dateRange', 'custom')}
                />
                <Unsafe_DatePicker
                  label={
                    <Label
                      labelTexts={[{ text: 'Startdato' }]}
                      sublabel={<Sublabel sublabelTexts={[{ text: 'dd.mm.yyyy', type: 'subdued' }]} id={'sublabel-startdato'} />}
                    />
                  }
                  aria-describedby="sublabel-startdato"
                  captionLayout="dropdown"
                  showGoToTodayButton
                  value={customStartDate}
                  onChange={date => {
                    setCustomStartDate(date);
                    if (date) filter.setFilter('dateRange', 'custom');
                  }}
                />
                <Unsafe_DatePicker
                  label={
                    <Label
                      labelTexts={[{ text: 'Sluttdato' }]}
                      sublabel={<Sublabel sublabelTexts={[{ text: 'dd.mm.yyyy', type: 'subdued' }]} id={'sublabel-sluttdato'} />}
                    />
                  }
                  endMonth={new Date()}
                  aria-describedby="sublabel-sluttdato"
                  captionLayout="dropdown"
                  showGoToTodayButton
                  value={customEndDate}
                  onChange={date => {
                    setCustomEndDate(date);
                    if (date) filter.setFilter('dateRange', 'custom');
                  }}
                />
                {/* Legger til space til kalender popup */}
                <div style={{ height: '23rem', width: '1px' }} />
              </FormGroup>
            </div>
          </FilterDrawer.View>
        </FilterDrawer>
        {filtered.length > 0 ? (
          <PanelList variant={PanelVariant.outline}>
            {filtered.map(dokument => (
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
