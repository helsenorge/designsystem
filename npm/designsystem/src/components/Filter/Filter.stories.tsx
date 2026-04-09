import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { LanguageLocales } from '../../constants';
import LanguageProvider from '../../utils/language';
import Button from '../Button';
import Checkbox from '../Checkbox';
import EmptyState from '../EmptyState';
import FormGroup from '../FormGroup';
import Panel from '../Panel';
import PanelList from '../PanelList';
import RadioButton from '../RadioButton';
import StatusDot from '../StatusDot';
import Table, { TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../Table';
import Tag from '../Tag';
import TagList from '../TagList';
import Toggle from '../Toggle';
import ActiveFilters from './ActiveFilters/ActiveFilters';
import FilterButton from './FilterButton/FilterButton';
import FilterButtonAndActiveFiltersWrapper from './FilterButtonAndActiveFiltersWrapper/FilterButtonAndActiveFiltersWrapper';
import FilterDrawer from './FilterDrawer/FilterDrawer';
import FilterOverviewLinkList from './FilterOverviewLinkList/FilterOverviewLinkList';
import FilterResultTopBar from './FilterResultTopBar/FilterResultTopBar';
import FilterSort from './FilterSort/FilterSort';
import { useFilter } from './FiltreringsPOC/useFilter';
import { createFilterConfig, filterItems, matchFilter, toggleArrayFilter, type FilterMatchers } from './FiltreringsPOC/utils';
import { getResources } from './resourcesMock';
import { useFilterDrawer } from './useFilterDrawer';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter',
  parameters: {
    docs: {
      description: {
        component: 'Filter POC - demonstrerer bruk av useFilter hook og UI komponenter',
      },
      story: { inline: false, iframeHeight: '40rem' },
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta;
export default meta;

type Story = StoryObj<typeof meta>;

export const VerktoyExample: Story = {
  render: () => {
    enum FagomradeType {
      PSYKISK_HELSE = 1,
      SYKDOM_OG_SKADER = 2,
      LIVSSTIL_OG_TRENING = 3,
      TANKER_OG_FOLELSER = 4,
      GRAVIDITET_OG_FODSEL = 5,
      RAAD_OG_TIPS_I_HVERDAGEN = 6,
    }

    enum MalgruppeType {
      Barn = 1,
      Ungdom = 2,
      Voksne = 3,
      Eldre = 4,
    }

    enum VerktoyType {
      App = 1,
      Weblosning = 2,
    }

    type VerktoyFilterType = {
      omrade: FagomradeType[];
      passerFor: MalgruppeType[];
      type: VerktoyType[];
      fritekst: string;
    };
    const [language, setLanguage] = useState<LanguageLocales>(LanguageLocales.NORWEGIAN);
    const resources = getResources(language);

    interface Verktoy {
      navn: string;
      omrade: FagomradeType[];
      ingress?: string;
      passerFor: MalgruppeType[];
      type: VerktoyType;
      lenke?: string;
      lenkeTekst?: string;
      logoSrc?: string;
    }

    const verktoyMockData: Verktoy[] = [
      {
        navn: resources.verktoydata_aa_name,
        ingress: resources.verktoydata_aa_ingress,
        omrade: [FagomradeType.SYKDOM_OG_SKADER],
        passerFor: [MalgruppeType.Barn, MalgruppeType.Ungdom, MalgruppeType.Voksne, MalgruppeType.Eldre],
        type: VerktoyType.Weblosning,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_grubl_name,
        ingress: resources.verktoydata_grubl_ingress,
        omrade: [FagomradeType.LIVSSTIL_OG_TRENING, FagomradeType.TANKER_OG_FOLELSER, FagomradeType.PSYKISK_HELSE],
        passerFor: [MalgruppeType.Ungdom, MalgruppeType.Voksne],
        type: VerktoyType.App,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_mm_name,
        ingress: resources.verktoydata_mm_ingress,
        omrade: [FagomradeType.PSYKISK_HELSE, FagomradeType.GRAVIDITET_OG_FODSEL],
        passerFor: [MalgruppeType.Voksne],
        type: VerktoyType.App,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_hverdagshjelpen_name,
        ingress: resources.verktoydata_hverdagshjelpen_ingress,
        omrade: [FagomradeType.RAAD_OG_TIPS_I_HVERDAGEN, FagomradeType.LIVSSTIL_OG_TRENING],
        passerFor: [MalgruppeType.Voksne, MalgruppeType.Eldre],
        type: VerktoyType.Weblosning,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_ungmestring_name,
        ingress: resources.verktoydata_ungmestring_ingress,
        omrade: [FagomradeType.PSYKISK_HELSE, FagomradeType.TANKER_OG_FOLELSER],
        passerFor: [MalgruppeType.Ungdom],
        type: VerktoyType.App,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_bevegelsesglede_name,
        ingress: resources.verktoydata_bevegelsesglede_ingress,
        omrade: [FagomradeType.LIVSSTIL_OG_TRENING],
        passerFor: [MalgruppeType.Barn, MalgruppeType.Ungdom],
        type: VerktoyType.Weblosning,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_tryggfodsel_name,
        ingress: resources.verktoydata_tryggfodsel_ingress,
        omrade: [FagomradeType.GRAVIDITET_OG_FODSEL, FagomradeType.RAAD_OG_TIPS_I_HVERDAGEN],
        passerFor: [MalgruppeType.Voksne],
        type: VerktoyType.App,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_skadekompasset_name,
        ingress: resources.verktoydata_skadekompasset_ingress,
        omrade: [FagomradeType.SYKDOM_OG_SKADER, FagomradeType.RAAD_OG_TIPS_I_HVERDAGEN],
        passerFor: [MalgruppeType.Barn, MalgruppeType.Ungdom, MalgruppeType.Voksne, MalgruppeType.Eldre],
        type: VerktoyType.Weblosning,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_seniorbalanse_name,
        ingress: resources.verktoydata_seniorbalanse_ingress,
        omrade: [FagomradeType.LIVSSTIL_OG_TRENING, FagomradeType.SYKDOM_OG_SKADER],
        passerFor: [MalgruppeType.Eldre],
        type: VerktoyType.App,
        logoSrc: 'https://placehold.co/48x48',
      },
      {
        navn: resources.verktoydata_tankevenn_name,
        ingress: resources.verktoydata_tankevenn_ingress,
        omrade: [FagomradeType.TANKER_OG_FOLELSER, FagomradeType.PSYKISK_HELSE],
        passerFor: [MalgruppeType.Voksne, MalgruppeType.Eldre],
        type: VerktoyType.Weblosning,
        logoSrc: 'https://placehold.co/48x48',
      },
    ];

    const omradeOptions = [
      { value: FagomradeType.PSYKISK_HELSE, label: resources.omradeOptions_psykiskhelse },
      { value: FagomradeType.GRAVIDITET_OG_FODSEL, label: resources.omradeOptions_graviditet },
      { value: FagomradeType.LIVSSTIL_OG_TRENING, label: resources.omradeOptions_livsstil },
      { value: FagomradeType.SYKDOM_OG_SKADER, label: resources.omradeOptions_sykdom },
      { value: FagomradeType.RAAD_OG_TIPS_I_HVERDAGEN, label: resources.omradeOptions_rad },
      { value: FagomradeType.TANKER_OG_FOLELSER, label: resources.omradeOptions_tanker },
    ];

    const passerForOptions = [
      { value: MalgruppeType.Barn, text: resources.passerForOptions_barn },
      { value: MalgruppeType.Ungdom, text: resources.passerForOptions_ungdom },
      { value: MalgruppeType.Voksne, text: resources.passerForOptions_voksne },
      { value: MalgruppeType.Eldre, text: resources.passerForOptions_eldre },
    ];

    const typeOptions = [
      { value: VerktoyType.App, label: resources.typeOptions_app },
      { value: VerktoyType.Weblosning, label: resources.typeOptions_web },
    ];

    const { filterOptions, getLabel } = createFilterConfig<VerktoyFilterType>({
      omrade: { options: omradeOptions, defaultValue: [FagomradeType.PSYKISK_HELSE], getLabel: o => o.label },
      passerFor: { options: passerForOptions, getLabel: o => o.text },
      type: { options: typeOptions, getLabel: o => o.label },
    });

    const filter = useFilter<VerktoyFilterType>(filterOptions);
    const drawer = useFilterDrawer<FilterViews>();

    const filterMatchers: FilterMatchers<Verktoy, VerktoyFilterType> = {
      omrade: matchFilter.arrayIncludes<Verktoy>(m => m.omrade),
      passerFor: matchFilter.arrayIncludes<Verktoy>(m => m.passerFor),
      type: matchFilter.exactMatch<Verktoy>(m => m.type),
      fritekst: matchFilter.textSearch<Verktoy>(
        v => v.navn,
        v => v.ingress
      ),
    };

    const filtered = filterItems(verktoyMockData, filter.filters, filterMatchers);

    const verktoyFilterLabels: Record<keyof VerktoyFilterType, string> = {
      omrade: resources.filterOptionTitles_omrade,
      passerFor: resources.filterOptionTitles_passerfor,
      type: resources.filterOptionTitles_type,
      fritekst: 'Fritekstsøk',
    };

    type FilterViews = 'overview' | 'omrade' | 'passerFor' | 'type';

    return (
      <LanguageProvider<LanguageLocales> language={language}>
        <div style={{ marginBottom: '1rem' }}>
          <Button onClick={() => setLanguage(LanguageLocales.NORWEGIAN)}>{'Bokmål'}</Button>
          <Button onClick={() => setLanguage(LanguageLocales.ENGLISH)}>{'English'}</Button>
        </div>

        <div style={{ display: 'flex', flexFlow: 'column', gap: '12px' }}>
          <FilterButtonAndActiveFiltersWrapper>
            <FilterButton onClick={() => drawer.open()} />
            <ActiveFilters
              filter={filter}
              getLabel={getLabel}
              onChipClick={key => drawer.open(key as FilterViews)}
              onOverflowChipClick={() => drawer.open()}
            />
          </FilterButtonAndActiveFiltersWrapper>
          <FilterResultTopBar
            countText={`${filtered.length} verktøy`}
            sortComponent={
              <FilterSort>
                <option value={'Option 1'}>{'Nyeste'}</option>
                <option value={'Option 2'}>{'Eldste'}</option>
                <option value={'Option 3'}>{'Alfabetisk A-Å'}</option>
              </FilterSort>
            }
          />
        </div>

        <FilterDrawer drawer={drawer} onReset={() => filter.resetFiltersToEmpty()} showResultButtonText={`Vis ${filtered.length} verktøy`}>
          <FilterDrawer.Overview title={'Finn ...'}>
            <FilterOverviewLinkList
              filter={filter}
              getLabel={getLabel}
              links={[
                { filterKey: 'omrade', title: verktoyFilterLabels.omrade },
                { filterKey: 'passerFor', title: verktoyFilterLabels.passerFor },
                { filterKey: 'type', title: verktoyFilterLabels.type },
              ]}
            />
          </FilterDrawer.Overview>
          <FilterDrawer.View id="omrade" title={verktoyFilterLabels.omrade}>
            <div>
              <FormGroup legend={resources.filterOption_omrade_legend}>
                {omradeOptions.map(opt => (
                  <Checkbox
                    key={opt.value}
                    label={opt.label}
                    checked={(filter.filters.omrade ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'omrade', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </FilterDrawer.View>
          <FilterDrawer.View id="passerFor" title={verktoyFilterLabels.passerFor}>
            <div>
              <FormGroup legend={resources.filterOption_passerFor_legend}>
                {passerForOptions.map(opt => (
                  <Checkbox
                    key={opt.value}
                    label={opt.text}
                    checked={(filter.filters.passerFor ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'passerFor', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </FilterDrawer.View>
          <FilterDrawer.View id="type" title={verktoyFilterLabels.type}>
            <div>
              <FormGroup legend={resources.filterOption_type_legend}>
                {typeOptions.map(opt => (
                  <Checkbox
                    key={opt.value}
                    label={opt.label}
                    checked={(filter.filters.type ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'type', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </FilterDrawer.View>
        </FilterDrawer>
        {filtered.length > 0 ? (
          <PanelList>
            {filtered.map(verktoy => (
              <Panel>
                <Panel.Title title={verktoy.navn} icon={<img src={verktoy.logoSrc} alt="logo" />} />
                <Panel.A>
                  <TagList>
                    {verktoy.omrade.map(o => (
                      <Tag key={o}>{getLabel('omrade', o)}</Tag>
                    ))}
                  </TagList>
                </Panel.A>
                <Panel.B>
                  <span>{verktoy.ingress}</span>
                </Panel.B>
              </Panel>
            ))}
          </PanelList>
        ) : (
          <EmptyState title={'Ingen verktøy som matcher filtrering funnet'} />
        )}
      </LanguageProvider>
    );
  },
};

export const LoggOverBrukExample: Story = {
  render: () => {
    type Clients = 'Alle' | 'Helsenorge' | 'Helsenorge mobilapp' | 'Doctrin';

    interface Logginnslag {
      when: string;
      who: string;
      isYou: boolean;
      what: string;
      where: Clients;
    }

    const dokumentMockData: Logginnslag[] = [
      { when: '27.03.2026', who: 'Line Danser (egen bruk)', isYou: true, what: 'Helsekontakter', where: 'Helsenorge' },
      { when: '26.03.2026', who: 'Line Danser (egen bruk)', isYou: true, what: 'Timeavtaler', where: 'Helsenorge mobilapp' },
      { when: '25.03.2026', who: 'Dr. Hansen', isYou: false, what: 'Journalnotat', where: 'Helsenorge' },
      { when: '24.03.2026', who: 'Line Danser (egen bruk)', isYou: true, what: 'Meldinger', where: 'Helsenorge' },
      { when: '23.03.2026', who: 'Sykehuset Innlandet', isYou: false, what: 'Prøvesvar', where: 'Helsenorge' },
      { when: '22.03.2026', who: 'Line Danser (egen bruk)', isYou: true, what: 'Resepter', where: 'Helsenorge mobilapp' },
      { when: '21.03.2026', who: 'Dr. Olsen', isYou: false, what: 'Epikrise', where: 'Doctrin' },
      { when: '20.03.2026', who: 'Line Danser (egen bruk)', isYou: true, what: 'Vaksiner', where: 'Helsenorge' },
      { when: '19.03.2026', who: 'Line Danser (egen bruk)', isYou: true, what: 'Bytte fastlege', where: 'Helsenorge mobilapp' },
      { when: '18.03.2026', who: 'Fastlege Johansen', isYou: false, what: 'Henvisning', where: 'Helsenorge' },
      { when: '17.03.2026', who: 'Line Danser (egen bruk)', isYou: true, what: 'Dokumenter', where: 'Helsenorge' },
      { when: '16.03.2026', who: 'Haukeland sykehus', isYou: false, what: 'Innkalling', where: 'Helsenorge' },
      { when: '15.03.2026', who: 'Line Danser (egen bruk)', isYou: true, what: 'Egenkartlegging', where: 'Doctrin' },
      { when: '14.03.2026', who: 'Dr. Berg', isYou: false, what: 'Medisinliste', where: 'Helsenorge mobilapp' },
      { when: '13.03.2026', who: 'Line Danser (egen bruk)', isYou: true, what: 'Helseregistre', where: 'Helsenorge' },
      { when: '12.03.2026', who: 'Line Danser (egen bruk)', isYou: true, what: 'Pasientreiser', where: 'Helsenorge' },
      { when: '11.03.2026', who: 'St. Olavs hospital', isYou: false, what: 'Prøvesvar', where: 'Helsenorge' },
      { when: '10.03.2026', who: 'Line Danser (egen bruk)', isYou: true, what: 'Kjernejournal', where: 'Helsenorge mobilapp' },
      { when: '09.03.2026', who: 'Dr. Nilsen', isYou: false, what: 'Sykmelding', where: 'Doctrin' },
      { when: '08.03.2026', who: 'Line Danser (egen bruk)', isYou: true, what: 'Behandlingsplan', where: 'Helsenorge' },
    ];

    type LoggFilterType = {
      who: string[];
      where: Clients;
    };

    const whoOptions = [
      { value: 'you', displaytext: 'Deg selv' },
      { value: 'others', displaytext: 'Andre' },
    ];
    const whereOptions: { value: Clients }[] = [
      { value: 'Alle' },
      { value: 'Helsenorge' },
      { value: 'Helsenorge mobilapp' },
      { value: 'Doctrin' },
    ];

    const { filterOptions, getLabel } = createFilterConfig<LoggFilterType>({
      who: { options: whoOptions, getLabel: o => o.displaytext },
      where: { options: whereOptions, getLabel: o => o.value },
    });

    type LogginnslagFilterViews = 'overview' | 'who' | 'where';

    const filter = useFilter<LoggFilterType>(filterOptions);
    const drawer = useFilterDrawer<LogginnslagFilterViews>();

    const filterMatchers: FilterMatchers<Logginnslag, LoggFilterType> = {
      who: (item, value) => {
        const values = Array.isArray(value) ? value : [value];
        return values.some(v => (v === 'you' && item.isYou) || (v === 'others' && !item.isYou));
      },
      where: (item, value) => value === 'Alle' || item.where === value,
    };

    const filtered = filterItems(dokumentMockData, filter.filters, filterMatchers);

    const logginnslagFilterLabels: Record<keyof LoggFilterType, string> = {
      who: 'Hvem',
      where: 'Hvor',
    };

    return (
      <>
        <div style={{ display: 'flex', flexFlow: 'column', gap: '12px' }}>
          <FilterButtonAndActiveFiltersWrapper>
            <FilterButton onClick={() => drawer.open()} />
            <ActiveFilters
              filter={filter}
              getLabel={getLabel}
              onChipClick={key => drawer.open(key as LogginnslagFilterViews)}
              onOverflowChipClick={() => drawer.open()}
            />
          </FilterButtonAndActiveFiltersWrapper>
          <FilterResultTopBar countText={`${filtered.length} logginnslag`} />
        </div>

        <FilterDrawer drawer={drawer} onReset={() => filter.resetFiltersToEmpty()} showResultButtonText={`Vis ${filtered.length} treff`}>
          <FilterDrawer.Overview title={'Finn ...'}>
            <FilterOverviewLinkList
              filter={filter}
              getLabel={getLabel}
              links={[
                { filterKey: 'who', title: logginnslagFilterLabels.who },
                { filterKey: 'where', title: logginnslagFilterLabels.where },
              ]}
            />
          </FilterDrawer.Overview>
          <FilterDrawer.View id="who" title={logginnslagFilterLabels.who}>
            <div>
              <FormGroup legend={'Velg en eller flere'}>
                {whoOptions.map(opt => (
                  <Checkbox
                    key={opt.value}
                    label={opt.displaytext}
                    checked={(filter.filters.who ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'who', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </FilterDrawer.View>
          <FilterDrawer.View id="where" title={logginnslagFilterLabels.where}>
            <div>
              <FormGroup legend={'Velg en eller flere'}>
                {whereOptions.map(opt => (
                  <RadioButton
                    key={opt.value}
                    label={opt.value}
                    name="where"
                    checked={filter.filters.where === opt.value}
                    onChange={(): void => filter.setFilter('where', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </FilterDrawer.View>
        </FilterDrawer>
        {filtered.length > 0 ? (
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>{'Når'}</TableHeadCell>
                <TableHeadCell>{'Hvem'}</TableHeadCell>
                <TableHeadCell>{'Hva'}</TableHeadCell>
                <TableHeadCell>{'Hvor'}</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filtered.map(logg => (
                <TableRow key={logg.when + logg.what}>
                  <TableCell>{logg.when}</TableCell>
                  <TableCell>{logg.who}</TableCell>
                  <TableCell>{logg.what}</TableCell>
                  <TableCell>{logg.where}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <EmptyState title={'Ingen dokumenter ble funnet med valgt filter. Prøv å endre filteret for å se flere dokumenter.'} />
        )}
      </>
    );
  },
};

export const KunHurtigfilter: Story = {
  render: () => {
    type ResepterFilterType = {
      kunAktive: boolean;
      kunRefusjon: boolean;
    };

    const filter = useFilter<ResepterFilterType>();

    interface Resept {
      navn: string;
      virkestoff: string;
      aktiv: boolean;
      medRefusjon: boolean;
    }

    const filterMatchers: FilterMatchers<Resept, ResepterFilterType> = {
      kunAktive: matchFilter.booleanToggle<Resept>(m => m.aktiv),
      kunRefusjon: matchFilter.booleanToggle<Resept>(m => m.medRefusjon),
    };

    const reseptMockData: Resept[] = [
      { navn: 'Accolate Tab 20 mg', virkestoff: 'Zafirlukast', aktiv: true, medRefusjon: true },
      { navn: 'Ibux Gel 50 mg/g', virkestoff: 'Ibuprofen', aktiv: true, medRefusjon: false },
      { navn: 'Paracet Tab 500 mg', virkestoff: 'Paracetamol', aktiv: false, medRefusjon: false },
      { navn: 'Metformin Tab 500 mg', virkestoff: 'Metformin', aktiv: true, medRefusjon: true },
      { navn: 'Atorvastatin Tab 20 mg', virkestoff: 'Atorvastatin', aktiv: true, medRefusjon: true },
      { navn: 'Ventoline Inh 0,1 mg/dose', virkestoff: 'Salbutamol', aktiv: false, medRefusjon: true },
      { navn: 'Zoloft Tab 50 mg', virkestoff: 'Sertralin', aktiv: false, medRefusjon: false },
      { navn: 'Marevan Tab 2,5 mg', virkestoff: 'Warfarin', aktiv: true, medRefusjon: true },
      { navn: 'Somac Tab 20 mg', virkestoff: 'Pantoprazol', aktiv: false, medRefusjon: false },
      { navn: 'Aerius Tab 5 mg', virkestoff: 'Desloratadin', aktiv: true, medRefusjon: false },
    ];

    const filtered = filterItems(reseptMockData, filter.filters, filterMatchers);

    return (
      <>
        <div>{'Her vises kun aktive resepter og resepter med utleveringer siste 12 måneder.'}</div>
        <div>
          <Toggle
            label={[{ text: 'Vis kun aktive resepter', type: 'subdued' }]}
            onChange={() => filter.setFilter('kunAktive', !filter.filters.kunAktive)}
          />
          <Toggle
            label={[{ text: 'Vis kun resepter med refusjon', type: 'subdued' }]}
            onChange={() => filter.setFilter('kunRefusjon', !filter.filters.kunRefusjon)}
          />
        </div>
        <FilterResultTopBar
          countText={`${filtered.length} resepter`}
          sortComponent={
            <FilterSort>
              <option value={'Option 1'}>{'Standard sortering'}</option>
              <option value={'Option 2'}>{'Navn'}</option>
              <option value={'Option 3'}>{'Rekvirert dato'}</option>
              <option value={'Option 4'}>{'Gyldig til'}</option>
            </FilterSort>
          }
        />
        {filtered.length > 0 ? (
          <PanelList>
            {filtered.map(resept => (
              <Panel>
                {resept.aktiv && (
                  <Panel.PreContainer>
                    <StatusDot text="Aktiv" variant="active" />
                  </Panel.PreContainer>
                )}
                <Panel.Title title={resept.navn} />
                <Panel.A>
                  <span>
                    {'Virkestoff: '}
                    {resept.virkestoff}
                  </span>
                </Panel.A>
                <Panel.B>
                  <span>
                    {'Refusjon: '}
                    {resept.medRefusjon ? 'Ja' : 'Nei'}
                  </span>
                </Panel.B>
              </Panel>
            ))}
          </PanelList>
        ) : (
          <EmptyState title={'Ingen resepter ble funnet med valgt filter.'} />
        )}
      </>
    );
  },
};
