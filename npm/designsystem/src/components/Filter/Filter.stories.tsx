import { useEffect, useRef, useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react-vite';

import { LanguageLocales } from '../../constants';
import { useSort } from '../../hooks/useSort';
import LanguageProvider from '../../utils/language';
import Dropdown from '../Dropdown';
import EmptyState from '../EmptyState';
import FormGroup from '../FormGroup';
import Globe from '../Icons/Globe';
import Loader from '../Loader';
import Panel from '../Panel';
import PanelList from '../PanelList';
import RadioButton from '../RadioButton';
import Spacer from '../Spacer';
import StatusDot from '../StatusDot';
import Table, { SortDirection, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../Table';
import Tag from '../Tag';
import TagList from '../TagList';
import Toggle from '../Toggle';
import FilterButton from './FilterButton/FilterButton';
import FilterButtonAndChipsWrapper from './FilterButtonAndChipsWrapper/FilterButtonAndChipsWrapper';
import FilterDrawer from './FilterDrawer/FilterDrawer';
import FilterOverviewLinkList from './FilterOverviewLinkList/FilterOverviewLinkList';
import FilterOverviewSearch from './FilterOverviewSearch/FilterOverviewSearch';
import FilterResultCountAndSortWrapper from './FilterResultCountAndSortWrapper/FilterResultCountAndSortWrapper';
import FilterSearch from './FilterSearch/FilterSearch';
import FilterSort from './FilterSort/FilterSort';
import FilterStateWrapper from './FilterStateWrapper/FilterStateWrapper';
import getFilterChips from './getFilterChips/getFilterChips';
import { getResources } from './resourcesMock';
import { useFilter } from './useFilter';
import { useFilterDrawer } from './useFilterDrawer';
import { createFilterConfig, filterItems, matchFilter, toggleArrayFilter, type FilterMatchers } from './utils';

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

const LanguagePickerExample: React.FC<{ onChange: (language: LanguageLocales) => void }> = ({ onChange }) => (
  <>
    <Dropdown svgIcon={Globe} triggerText="Velg språk">
      <Dropdown.SingleSelectItem text={'English'} asChild>
        <button onClick={() => onChange(LanguageLocales.ENGLISH)} />
      </Dropdown.SingleSelectItem>
      <Dropdown.SingleSelectItem text={'Bokmål'} asChild defaultSelected>
        <button onClick={() => onChange(LanguageLocales.NORWEGIAN)} />
      </Dropdown.SingleSelectItem>
      <Dropdown.SingleSelectItem text={'Nynorsk'} asChild defaultSelected>
        <button onClick={() => onChange(LanguageLocales.NORWEGIAN_NYNORSK)} />
      </Dropdown.SingleSelectItem>
      <Dropdown.SingleSelectItem text={'Nordsamisk'} asChild defaultSelected>
        <button onClick={() => onChange(LanguageLocales.SAMI_NORTHERN)} />
      </Dropdown.SingleSelectItem>
    </Dropdown>
    <Spacer size="2xl" />
  </>
);

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
    const resources = getResources(LanguageLocales.NORWEGIAN);

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

    const [sortKey, setSortKey] = useState('standard');
    const sortValg: Record<string, { columnKey: string; direction?: SortDirection }> = {
      nameAsc: { columnKey: 'navn' },
      nameDesc: { columnKey: 'navn', direction: SortDirection.desc },
    };
    const { sortedData: sorted } = useSort({
      data: filtered,
      sortColumnKey: sortValg[sortKey]?.columnKey,
      sortDirection: sortValg[sortKey]?.direction,
    });

    return (
      <>
        <FilterStateWrapper>
          <FilterButtonAndChipsWrapper
            filterButtonComponent={<FilterButton onClick={() => drawer.open()} />}
            filterChips={getFilterChips({
              filter,
              getLabel,
              onChipClick: key => drawer.open(key as FilterViews),
              onOverflowChipClick: () => drawer.open(),
            })}
          />

          <FilterResultCountAndSortWrapper
            resultCount={`${filtered.length} verktøy`}
            sortComponent={
              <FilterSort value={sortKey} onChange={e => setSortKey(e.target.value)}>
                <option value={'standard'}>{'Standard sortering'}</option>
                <option value={'nameAsc'}>{'Alfabetisk A-Å'}</option>
                <option value={'nameDesc'}>{'Alfabetisk Å-A'}</option>
              </FilterSort>
            }
          />
        </FilterStateWrapper>

        <FilterDrawer
          drawer={drawer}
          onReset={() => filter.resetFiltersToEmpty()}
          resultCount={filtered.length}
          resources={{ showButtonText: `Vis verktøy` }}
        >
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
            <FilterOverviewSearch
              value={(filter.filters.fritekst as string) ?? ''}
              onChange={e => filter.setFilter('fritekst', e.target.value || undefined)}
              clearButtonProps={{
                onClick: () => filter.removeFilter('fritekst'),
              }}
            />
          </FilterDrawer.Overview>
          <FilterDrawer.View id="omrade" title={verktoyFilterLabels.omrade} onReset={() => filter.removeFilter('omrade')}>
            <div>
              <FormGroup legend={resources.filterOption_omrade_legend}>
                {omradeOptions.map(opt => (
                  <Toggle
                    key={opt.value}
                    label={[{ text: opt.label }]}
                    checked={(filter.filters.omrade ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'omrade', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </FilterDrawer.View>
          <FilterDrawer.View id="passerFor" title={verktoyFilterLabels.passerFor} onReset={() => filter.removeFilter('passerFor')}>
            <div>
              <FormGroup legend={resources.filterOption_passerFor_legend}>
                {passerForOptions.map(opt => (
                  <Toggle
                    key={opt.value}
                    label={[{ text: opt.text }]}
                    checked={(filter.filters.passerFor ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'passerFor', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </FilterDrawer.View>
          <FilterDrawer.View id="type" title={verktoyFilterLabels.type} onReset={() => filter.removeFilter('type')}>
            <div>
              <FormGroup legend={resources.filterOption_type_legend}>
                {typeOptions.map(opt => (
                  <Toggle
                    key={opt.value}
                    label={[{ text: opt.label }]}
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
            {sorted.map(verktoy => (
              <Panel key={verktoy.navn}>
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
      </>
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
        <FilterStateWrapper>
          <FilterButtonAndChipsWrapper
            filterButtonComponent={<FilterButton onClick={() => drawer.open()} />}
            filterChips={getFilterChips({
              filter,
              getLabel,
              onChipClick: key => drawer.open(key as LogginnslagFilterViews),
              onOverflowChipClick: () => drawer.open(),
            })}
          />
          <FilterResultCountAndSortWrapper resultCount={`${filtered.length} logginnslag`} />
        </FilterStateWrapper>

        <FilterDrawer drawer={drawer} onReset={() => filter.resetFiltersToEmpty()} resultCount={filtered.length}>
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
          <FilterDrawer.View id="who" title={logginnslagFilterLabels.who} onReset={() => filter.removeFilter('who')}>
            <div>
              <FormGroup legend={'Velg en eller flere'}>
                {whoOptions.map(opt => (
                  <Toggle
                    key={opt.value}
                    label={[{ text: opt.displaytext }]}
                    checked={(filter.filters.who ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'who', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </FilterDrawer.View>
          <FilterDrawer.View id="where" title={logginnslagFilterLabels.where} onReset={() => filter.removeFilter('where')}>
            <div>
              <FormGroup legend={'Velg en'}>
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

    interface Resept {
      navn: string;
      virkestoff: string;
      aktiv: boolean;
      medRefusjon: boolean;
      rekvirertDato: Date;
      gyldigTil: Date;
    }

    const reseptMockData: Resept[] = [
      {
        navn: 'Accolate Tab 20 mg',
        virkestoff: 'Zafirlukast',
        aktiv: true,
        medRefusjon: true,
        rekvirertDato: new Date('2024-03-12'),
        gyldigTil: new Date('2025-03-12'),
      },
      {
        navn: 'Ibux Gel 50 mg/g',
        virkestoff: 'Ibuprofen',
        aktiv: true,
        medRefusjon: false,
        rekvirertDato: new Date('2024-01-20'),
        gyldigTil: new Date('2025-01-20'),
      },
      {
        navn: 'Paracet Tab 500 mg',
        virkestoff: 'Paracetamol',
        aktiv: false,
        medRefusjon: false,
        rekvirertDato: new Date('2023-06-05'),
        gyldigTil: new Date('2024-06-05'),
      },
      {
        navn: 'Metformin Tab 500 mg',
        virkestoff: 'Metformin',
        aktiv: true,
        medRefusjon: true,
        rekvirertDato: new Date('2024-02-14'),
        gyldigTil: new Date('2025-02-14'),
      },
      {
        navn: 'Atorvastatin Tab 20 mg',
        virkestoff: 'Atorvastatin',
        aktiv: true,
        medRefusjon: true,
        rekvirertDato: new Date('2024-04-01'),
        gyldigTil: new Date('2025-04-01'),
      },
      {
        navn: 'Ventoline Inh 0,1 mg/dose',
        virkestoff: 'Salbutamol',
        aktiv: false,
        medRefusjon: true,
        rekvirertDato: new Date('2023-09-10'),
        gyldigTil: new Date('2024-09-10'),
      },
      {
        navn: 'Zoloft Tab 50 mg',
        virkestoff: 'Sertralin',
        aktiv: false,
        medRefusjon: false,
        rekvirertDato: new Date('2023-11-30'),
        gyldigTil: new Date('2024-11-30'),
      },
      {
        navn: 'Marevan Tab 2,5 mg',
        virkestoff: 'Warfarin',
        aktiv: true,
        medRefusjon: true,
        rekvirertDato: new Date('2024-05-22'),
        gyldigTil: new Date('2025-05-22'),
      },
      {
        navn: 'Somac Tab 20 mg',
        virkestoff: 'Pantoprazol',
        aktiv: false,
        medRefusjon: false,
        rekvirertDato: new Date('2023-08-17'),
        gyldigTil: new Date('2024-08-17'),
      },
      {
        navn: 'Aerius Tab 5 mg',
        virkestoff: 'Desloratadin',
        aktiv: true,
        medRefusjon: false,
        rekvirertDato: new Date('2024-06-03'),
        gyldigTil: new Date('2025-06-03'),
      },
    ];

    const filter = useFilter<ResepterFilterType>();
    const [sortKey, setSortKey] = useState('standard');

    const filterMatchers: FilterMatchers<Resept, ResepterFilterType> = {
      kunAktive: matchFilter.booleanToggle<Resept>(m => m.aktiv),
      kunRefusjon: matchFilter.booleanToggle<Resept>(m => m.medRefusjon),
    };

    const filtered = filterItems(reseptMockData, filter.filters, filterMatchers);

    const sortValg: Record<string, { columnKey: string; direction?: SortDirection }> = {
      navn: { columnKey: 'navn' },
      rekvirertDato: { columnKey: 'rekvirertDato', direction: SortDirection.desc },
      gyldigTil: { columnKey: 'gyldigTil' },
    };
    const { sortedData: sorted } = useSort({
      data: filtered,
      sortColumnKey: sortValg[sortKey]?.columnKey,
      sortDirection: sortValg[sortKey]?.direction,
    });

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
        <FilterResultCountAndSortWrapper
          resultCount={`${filtered.length} resepter`}
          sortComponent={
            <FilterSort value={sortKey} onChange={e => setSortKey(e.target.value)}>
              <option value={'standard'}>{'Standard sortering'}</option>
              <option value={'navn'}>{'Navn'}</option>
              <option value={'rekvirertDato'}>{'Rekvirert dato'}</option>
              <option value={'gyldigTil'}>{'Gyldig til'}</option>
            </FilterSort>
          }
        />
        {sorted.length > 0 ? (
          <PanelList>
            {sorted.map(resept => (
              <Panel key={resept.navn}>
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
                    {' | Rekvirert: '}
                    {resept.rekvirertDato.toLocaleDateString('nb-NO')}
                    {' | Gyldig til: '}
                    {resept.gyldigTil.toLocaleDateString('nb-NO')}
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

export const FilterSearchInFilterState: Story = {
  render: () => {
    interface MockData {
      navn: string;
      dato: Date;
    }

    const searchInFilterResultsMockData: MockData[] = [
      { navn: 'Data 1', dato: new Date('2024-01-10') },
      { navn: 'Data 2', dato: new Date('2024-03-05') },
      { navn: 'Data 3', dato: new Date('2024-02-18') },
    ];

    type FilterSearchInFilterType = {
      fritekst: string;
    };

    const { filterOptions } = createFilterConfig<FilterSearchInFilterType>({});
    const filter = useFilter<FilterSearchInFilterType>(filterOptions);
    const drawer = useFilterDrawer();
    const inputRef = useRef<HTMLInputElement>(null);

    const filterMatchers: FilterMatchers<MockData, FilterSearchInFilterType> = {
      fritekst: matchFilter.textSearch<MockData>(v => v.navn),
    };

    const filtered = filterItems(searchInFilterResultsMockData, filter.filters, filterMatchers);

    const [sortKey, setSortKey] = useState('newest');
    const sortValg: Record<string, { columnKey: string; direction?: SortDirection }> = {
      newest: { columnKey: 'dato', direction: SortDirection.desc },
      oldest: { columnKey: 'dato' },
    };
    const { sortedData: sorted } = useSort({
      data: filtered,
      sortColumnKey: sortValg[sortKey]?.columnKey,
      sortDirection: sortValg[sortKey]?.direction,
    });

    return (
      <FilterStateWrapper>
        <FilterButton onClick={() => drawer.open()} />
        <FilterSearch
          ref={inputRef}
          value={(filter.filters.fritekst as string) ?? ''}
          onChange={e => filter.setFilter('fritekst', e.target.value || undefined)}
          clearButtonProps={{
            onClick: () => filter.removeFilter('fritekst'),
          }}
        />
        <FilterResultCountAndSortWrapper
          resultCount={`${filtered.length} verktøy`}
          sortComponent={
            <FilterSort value={sortKey} onChange={e => setSortKey(e.target.value)}>
              <option value={'newest'}>{'Nyeste'}</option>
              <option value={'oldest'}>{'Eldste'}</option>
            </FilterSort>
          }
        />
        <ul>
          {sorted.map(data => (
            <li key={data.navn}>{`${data.navn} (${data.dato.toLocaleDateString('nb-NO')})`}</li>
          ))}
        </ul>

        <FilterDrawer drawer={drawer} onReset={() => undefined} resultCount={filtered.length}>
          <FilterDrawer.Overview title={'Filter'}>
            <div>{'Filter content'}</div>
          </FilterDrawer.Overview>
        </FilterDrawer>
      </FilterStateWrapper>
    );
  },
};

export const WithAsyncFiltering: Story = {
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

    const logginnslagFilterLabels: Record<keyof LoggFilterType, string> = {
      who: 'Hvem',
      where: 'Hvor',
    };

    const filtered = filterItems(dokumentMockData, filter.filters, filterMatchers);

    // Simulate an async API call: show isLoading briefly whenever the filter changes.
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
      setIsLoading(true);
      const timeout = setTimeout(() => setIsLoading(false), 1200);
      return (): void => clearTimeout(timeout);
    }, [filter.filters.who, filter.filters.where]);

    return (
      <>
        <FilterStateWrapper>
          <FilterButtonAndChipsWrapper
            filterButtonComponent={<FilterButton onClick={() => drawer.open()} />}
            filterChips={getFilterChips({
              filter,
              getLabel,
              onChipClick: key => drawer.open(key as LogginnslagFilterViews),
              onOverflowChipClick: () => drawer.open(),
            })}
          />
          <FilterResultCountAndSortWrapper resultCount={<span aria-live="polite">{`${filtered.length} logginnslag`}</span>} />
        </FilterStateWrapper>

        <FilterDrawer resultCount={filtered.length} isLoading={isLoading} drawer={drawer} onReset={() => filter.resetFiltersToEmpty()}>
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
          <FilterDrawer.View id="who" title={logginnslagFilterLabels.who} onReset={() => filter.removeFilter('who')}>
            <div>
              <FormGroup legend={'Velg en eller flere'}>
                {whoOptions.map(opt => (
                  <Toggle
                    key={opt.value}
                    label={[{ text: opt.displaytext }]}
                    checked={(filter.filters.who ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'who', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </FilterDrawer.View>
          <FilterDrawer.View id="where" title={logginnslagFilterLabels.where} onReset={() => filter.removeFilter('where')}>
            <div>
              <FormGroup legend={'Velg en'}>
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
        {isLoading ? (
          <Loader />
        ) : filtered.length > 0 ? (
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

export const WithLanguageProvider: Story = {
  render: () => {
    const [language, setLanguage] = useState<LanguageLocales>(LanguageLocales.NORWEGIAN);
    const drawer = useFilterDrawer();
    const [searchValue, setSearchValue] = useState<string>('');

    return (
      <LanguageProvider<LanguageLocales> language={language}>
        <LanguagePickerExample onChange={setLanguage} />

        <FilterButton onClick={() => drawer.open()} />
        <FilterSort>
          <option value={'newest'}>{'Nyeste'}</option>
          <option value={'oldest'}>{'Eldste'}</option>
        </FilterSort>

        <FilterDrawer drawer={drawer} onReset={() => undefined} resultCount={42}>
          <FilterDrawer.Overview title={'Filter'}>
            <FilterOverviewSearch
              value={searchValue}
              onChange={e => setSearchValue((e.target as HTMLInputElement).value)}
              clearButtonProps={{
                onClick: () => setSearchValue(''),
              }}
            />
          </FilterDrawer.Overview>
        </FilterDrawer>
      </LanguageProvider>
    );
  },
};

export const WithLanguageFull: Story = {
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

    const [sortKey, setSortKey] = useState('standard');
    const sortValg: Record<string, { columnKey: string; direction?: SortDirection }> = {
      nameAsc: { columnKey: 'navn' },
      nameDesc: { columnKey: 'navn', direction: SortDirection.desc },
    };
    const { sortedData: sorted } = useSort({
      data: filtered,
      sortColumnKey: sortValg[sortKey]?.columnKey,
      sortDirection: sortValg[sortKey]?.direction,
    });

    return (
      <LanguageProvider<LanguageLocales> language={language}>
        <LanguagePickerExample onChange={setLanguage} />

        <FilterStateWrapper>
          <FilterButtonAndChipsWrapper
            filterButtonComponent={<FilterButton onClick={() => drawer.open()} />}
            filterChips={getFilterChips({
              filter,
              getLabel,
              onChipClick: key => drawer.open(key as FilterViews),
              onOverflowChipClick: () => drawer.open(),
            })}
          />

          <FilterResultCountAndSortWrapper
            resultCount={`${filtered.length} verktøy`}
            sortComponent={
              <FilterSort value={sortKey} onChange={e => setSortKey(e.target.value)}>
                <option value={'standard'}>{'Standard sortering'}</option>
                <option value={'nameAsc'}>{'Alfabetisk A-Å'}</option>
                <option value={'nameDesc'}>{'Alfabetisk Å-A'}</option>
              </FilterSort>
            }
          />
        </FilterStateWrapper>

        <FilterDrawer
          drawer={drawer}
          onReset={() => filter.resetFiltersToEmpty()}
          resultCount={filtered.length}
          resources={{ showButtonText: `Vis verktøy` }}
        >
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
            <FilterOverviewSearch
              value={(filter.filters.fritekst as string) ?? ''}
              onChange={e => filter.setFilter('fritekst', e.target.value || undefined)}
              clearButtonProps={{
                onClick: () => filter.removeFilter('fritekst'),
              }}
            />
          </FilterDrawer.Overview>
          <FilterDrawer.View id="omrade" title={verktoyFilterLabels.omrade} onReset={() => filter.removeFilter('omrade')}>
            <div>
              <FormGroup legend={resources.filterOption_omrade_legend}>
                {omradeOptions.map(opt => (
                  <Toggle
                    key={opt.value}
                    label={[{ text: opt.label }]}
                    checked={(filter.filters.omrade ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'omrade', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </FilterDrawer.View>
          <FilterDrawer.View id="passerFor" title={verktoyFilterLabels.passerFor} onReset={() => filter.removeFilter('passerFor')}>
            <div>
              <FormGroup legend={resources.filterOption_passerFor_legend}>
                {passerForOptions.map(opt => (
                  <Toggle
                    key={opt.value}
                    label={[{ text: opt.text }]}
                    checked={(filter.filters.passerFor ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'passerFor', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </FilterDrawer.View>
          <FilterDrawer.View id="type" title={verktoyFilterLabels.type} onReset={() => filter.removeFilter('type')}>
            <div>
              <FormGroup legend={resources.filterOption_type_legend}>
                {typeOptions.map(opt => (
                  <Toggle
                    key={opt.value}
                    label={[{ text: opt.label }]}
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
            {sorted.map(verktoy => (
              <Panel key={verktoy.navn}>
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

export const WithValidation: Story = {
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
    };
    const resources = getResources(LanguageLocales.NORWEGIAN);

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
    ];

    const omradeOptions = [
      { value: FagomradeType.PSYKISK_HELSE, label: resources.omradeOptions_psykiskhelse },
      { value: FagomradeType.GRAVIDITET_OG_FODSEL, label: resources.omradeOptions_graviditet },
      { value: FagomradeType.LIVSSTIL_OG_TRENING, label: resources.omradeOptions_livsstil },
      { value: FagomradeType.SYKDOM_OG_SKADER, label: resources.omradeOptions_sykdom },
    ];
    const { filterOptions, getLabel } = createFilterConfig<VerktoyFilterType>({
      omrade: { options: omradeOptions, defaultValue: [FagomradeType.SYKDOM_OG_SKADER], getLabel: o => o.label },
    });

    const filter = useFilter<VerktoyFilterType>(filterOptions);
    const drawer = useFilterDrawer<FilterViews>();

    const filterMatchers: FilterMatchers<Verktoy, VerktoyFilterType> = {
      omrade: matchFilter.arrayIncludes<Verktoy>(m => m.omrade),
    };

    const filtered = filterItems(verktoyMockData, filter.filters, filterMatchers);

    const verktoyFilterLabels: Record<keyof VerktoyFilterType, string> = {
      omrade: resources.filterOptionTitles_omrade,
    };

    type FilterViews = 'overview' | 'omrade';

    const isErrorInForm = !filter.filters.omrade;

    return (
      <>
        <FilterStateWrapper>
          <FilterButtonAndChipsWrapper
            filterButtonComponent={<FilterButton onClick={() => drawer.open()} />}
            filterChips={getFilterChips({
              filter,
              getLabel,
              onChipClick: key => drawer.open(key as FilterViews),
              onOverflowChipClick: () => drawer.open(),
              willShowCloseButton: () => false,
            })}
          />

          <FilterResultCountAndSortWrapper resultCount={`${filtered.length} verktøy`} />
        </FilterStateWrapper>

        <FilterDrawer
          drawer={drawer}
          onClose={() => {
            if (isErrorInForm) {
              alert('Kan ikke lukke med valideringsfeil');
            } else {
              drawer.close();
            }
          }}
          onReset={() => filter.resetFiltersToEmpty()}
          resultCount={filtered.length}
          resources={{ showButtonText: `Vis verktøy` }}
        >
          <FilterDrawer.Overview title={'Finn ...'}>
            <FilterOverviewLinkList
              filter={filter}
              getLabel={getLabel}
              links={[{ filterKey: 'omrade', title: verktoyFilterLabels.omrade }]}
            />
          </FilterDrawer.Overview>
          <FilterDrawer.View id="omrade" title={verktoyFilterLabels.omrade} onReset={() => filter.removeFilter('omrade')}>
            <FormGroup legend={'Velg en eller flere'} error={isErrorInForm ? 'Du må velge minst ett område' : undefined}>
              {omradeOptions.map(opt => (
                <Toggle
                  key={opt.value}
                  label={[{ text: opt.label }]}
                  checked={(filter.filters.omrade ?? []).includes(opt.value)}
                  onChange={(): void => toggleArrayFilter(filter, 'omrade', opt.value)}
                />
              ))}
            </FormGroup>
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
      </>
    );
  },
};

export const SlowsearchExample: Story = {
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

    const [filteredData, setFilteredData] = useState(dokumentMockData);

    const runFilter = () => {
      const filtered = filterItems(dokumentMockData, filter.filters, filterMatchers);
      setFilteredData(filtered);
    };
    const logginnslagFilterLabels: Record<keyof LoggFilterType, string> = {
      who: 'Hvem',
      where: 'Hvor',
    };

    return (
      <>
        <FilterStateWrapper>
          <FilterButtonAndChipsWrapper
            filterButtonComponent={<FilterButton onClick={() => drawer.open()} />}
            filterChips={getFilterChips({
              filter,
              getLabel,
              onChipClick: key => drawer.open(key as LogginnslagFilterViews),
              onOverflowChipClick: () => drawer.open(),
            })}
          />
          <FilterResultCountAndSortWrapper resultCount={`${filteredData.length} logginnslag`} />
        </FilterStateWrapper>

        <FilterDrawer
          drawer={drawer}
          onReset={() => filter.resetFiltersToEmpty()}
          onClose={() => {
            runFilter();
            drawer.close();
          }}
        >
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
          <FilterDrawer.View id="who" title={logginnslagFilterLabels.who} onReset={() => filter.removeFilter('who')}>
            <div>
              <FormGroup legend={'Velg en eller flere'}>
                {whoOptions.map(opt => (
                  <Toggle
                    key={opt.value}
                    label={[{ text: opt.displaytext }]}
                    checked={(filter.filters.who ?? []).includes(opt.value)}
                    onChange={(): void => toggleArrayFilter(filter, 'who', opt.value)}
                  />
                ))}
              </FormGroup>
            </div>
          </FilterDrawer.View>
          <FilterDrawer.View id="where" title={logginnslagFilterLabels.where} onReset={() => filter.removeFilter('where')}>
            <div>
              <FormGroup legend={'Velg en'}>
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
        {filteredData.length > 0 ? (
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
              {filteredData.map(logg => (
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
