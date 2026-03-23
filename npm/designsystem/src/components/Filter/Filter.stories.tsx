import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { UseFilterReturn } from './useFilter';
import type { FilterOption } from './utils';
import type { StoryObj, Meta } from '@storybook/react-vite';

import { LanguageLocales } from '../../constants';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Drawer from '../Drawer';
import RadioButton from '../RadioButton';
import Spacer from '../Spacer';
import TagList from '../TagList';
import FilterResult from './FilterResult';
import { useFilter } from './useFilter';
import { createFilterConfig, filterItems, getRawFilters, matchFilter, toggleArrayFilter } from './utils';
import EmptyState from '../EmptyState';
import Panel from '../Panel';
import Tag from '../Tag';
import Title from '../Title';
import { getResources } from './resourcesMock';
import LanguageProvider from '../../utils/language';
import PanelList from '../PanelList';

type ExampleFilterType = {
  sykehus: string[];
  reseptstatus: string;
  eResept: boolean;
};

const sykehusOptions = [
  { value: 'oslo_universitetssykehus', label: 'Oslo universitetssykehus' },
  { value: 'haukeland', label: 'Haukeland universitetssjukehus' },
  { value: 'st_olavs', label: 'St. Olavs hospital' },
];

const reseptStatusOptions = [
  { value: 'resept', label: 'Reseptbelagt' },
  { value: 'reseptfri', label: 'Reseptfri' },
];

const eReseptOptions: FilterOption<boolean>[] = [{ value: true, label: 'E-resept' }];

interface Medisin {
  navn: string;
  sykehus: string;
  reseptstatus: string;
  eResept: boolean;
}

const medisinerMockData: Medisin[] = [
  // TODO: Hvis feks dataen ikke har et felt som filtreres på, så kan consumeren noen ganger trenge å filtrere mot et annet felt for dette
  { navn: 'Paracet 500mg', sykehus: 'oslo_universitetssykehus', reseptstatus: 'resept', eResept: true },
  { navn: 'Ibux 400mg', sykehus: 'haukeland', reseptstatus: 'reseptfri', eResept: false },
  { navn: 'Voltaren 50mg', sykehus: 'st_olavs', reseptstatus: 'resept', eResept: true },
  { navn: 'Zyrtec 10mg', sykehus: 'oslo_universitetssykehus', reseptstatus: 'reseptfri', eResept: false },
  { navn: 'Metformin 500mg', sykehus: 'haukeland', reseptstatus: 'resept', eResept: true },
  { navn: 'Paralgin Forte', sykehus: 'st_olavs', reseptstatus: 'resept', eResept: false },
];

// Definerer hvordan hvert filter skal matche mot dataene.
// Hver nøkkel tilsvarer et filter i ExampleFilterType, og funksjonen avgjør om et dataelement matcher filterverdien.
// Sendes til filter-utils/filterItems() for å filtrere data basert på aktive filtre.
const filterMatchers = {
  categories: matchFilter.arrayIncludes<Medisin>(m => m.sykehus),
  status: matchFilter.exactMatch<Medisin>(m => m.reseptstatus),
  eResept: matchFilter.booleanToggle<Medisin>(m => m.eResept),
};

const FiltrertDataExample: React.FC<{ items: Medisin[] }> = ({ items }) => (
  <>
    <ul>
      {items.map(data => (
        <li key={data.navn}>{`${data.navn} — ${data.sykehus} — ${data.reseptstatus}${data.eResept ? ' (e-resept)' : ''}`}</li>
      ))}
    </ul>
    {items.length === 0 && <p>{'Ingen medisiner matcher valgte filtre.'}</p>}
  </>
);

const categoryLabels: Record<keyof ExampleFilterType, string> = {
  sykehus: 'Sykehus',
  reseptstatus: 'Medisintype',
  eResept: 'E-resept',
};

const SelectedChips: React.FC<{ filter: UseFilterReturn<ExampleFilterType> }> = ({ filter }) => (
  <>
    {(Object.keys(categoryLabels) as (keyof ExampleFilterType)[]).map(key => {
      const entries = filter.filters[key];

      return (
        <div key={key} style={{ marginTop: '1rem' }}>
          <Title htmlMarkup="h3" appearance="title3">
            {categoryLabels[key]}
          </Title>
          <Spacer />
          {entries && entries.length > 0 && (
            <TagList>
              {entries.map(entry => (
                <Tag key={`${entry.filterKey}-${entry.value}`}>{entry.label}</Tag>
              ))}
            </TagList>
          )}
        </div>
      );
    })}
  </>
);

const FilterDrawerContent: React.FC<{
  filter: UseFilterReturn<ExampleFilterType>;
}> = ({ filter }) => (
  <>
    <SelectedChips filter={filter} />
    <div style={{ marginTop: '1rem' }}>
      <h3>{'Sykehus (checkbox)'}</h3>
      {sykehusOptions.map(opt => (
        <Checkbox
          key={opt.value}
          label={opt.label}
          checked={(filter.filters.sykehus ?? []).some(e => e.value === opt.value)}
          onChange={(): void => toggleArrayFilter(filter, 'sykehus', opt.value)}
        />
      ))}
    </div>
    <div style={{ marginTop: '1rem' }}>
      <h3>{'Medisintype (radio)'}</h3>
      {reseptStatusOptions.map(opt => (
        <RadioButton
          key={opt.value}
          label={opt.label}
          name="reseptstatus"
          checked={(filter.filters.reseptstatus ?? []).some(e => e.value === opt.value)}
          onChange={(): void => filter.setFilter('reseptstatus', opt.value)}
        />
      ))}
    </div>
    <div style={{ marginTop: '1rem' }}>
      <h3>{'E-resept (boolean)'}</h3>
      <Checkbox
        label={'Kun e-resept'}
        checked={(filter.filters.eResept ?? []).some(e => e.value === true)}
        onChange={(): void => filter.setFilter('eResept', filter.filters.eResept ? undefined : true)}
      />
    </div>
  </>
);

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter',
  component: FilterResult,
  parameters: {
    docs: {
      description: {
        component: 'Filter POC - demonstrerer bruk av useFilter hook med filter-utils for filtrering',
      },
      page: (): React.JSX.Element => <Docs component={FilterResult} />,
      story: { inline: false, iframeHeight: '40rem' },
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof FilterResult>;
export default meta;

type Story = StoryObj<typeof meta>;

export const LiveFiltering: Story = {
  args: { filters: {} },
  render: () => {
    const config = createFilterConfig<ExampleFilterType>({
      sykehus: { options: sykehusOptions, defaultValue: ['haukeland'] },
      reseptstatus: { options: reseptStatusOptions },
      eResept: { options: eReseptOptions, defaultValue: true },
    });
    const filter = useFilter<ExampleFilterType>(config);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const filtered = filterItems(medisinerMockData, filter.filters, filterMatchers);

    return (
      <>
        <FilterResult filters={filter.filters}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Button onClick={() => setDrawerOpen(true)}>{'Åpne filter'}</Button>
          </div>
          <Drawer isOpen={drawerOpen} title="Filter" onRequestClose={() => setDrawerOpen(false)}>
            <FilterDrawerContent filter={filter} />
          </Drawer>
        </FilterResult>
        <FiltrertDataExample items={filtered} />
      </>
    );
  },
};

export const DelayedFiltering: Story = {
  args: { filters: {} },
  render: () => {
    const config = createFilterConfig<ExampleFilterType>({
      sykehus: { options: sykehusOptions },
      reseptstatus: { options: reseptStatusOptions },
      eResept: { options: eReseptOptions },
    });
    const filter = useFilter<ExampleFilterType>({
      ...config,
      // removable: false,
    });
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [draftFilters, setDraftFilters] = useState<Partial<ExampleFilterType>>({});
    const filtered = filterItems(medisinerMockData, filter.filters, filterMatchers);

    const openDrawer = (): void => {
      setDraftFilters(getRawFilters(filter.filters));
      setDrawerOpen(true);
    };

    const applyFilters = (): void => {
      filter.setFilters(draftFilters);
      setDrawerOpen(false);
    };

    const discardFilters = (): void => {
      setDrawerOpen(false);
    };

    return (
      <>
        <FilterResult filters={filter.filters}>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Button onClick={openDrawer}>{'Åpne filter'}</Button>
          </div>
          <Drawer
            isOpen={drawerOpen}
            title="Filter (delayed)"
            onRequestClose={discardFilters}
            primaryActionText="Bruk filter"
            onPrimaryAction={applyFilters}
            secondaryActionText="Avbryt"
            onSecondaryAction={discardFilters}
          >
            <SelectedChips filter={filter} />
            <div>
              <h3>{'Sykehus (checkbox)'}</h3>
              {sykehusOptions.map(opt => (
                <Checkbox
                  key={opt.value}
                  label={opt.label}
                  checked={(draftFilters.sykehus ?? []).includes(opt.value)}
                  onChange={(): void => {
                    const current = draftFilters.sykehus ?? [];
                    const updated = current.includes(opt.value) ? current.filter(v => v !== opt.value) : [...current, opt.value];
                    setDraftFilters(prev => ({ ...prev, sykehus: updated.length > 0 ? updated : undefined }));
                  }}
                />
              ))}
            </div>
            <div style={{ marginTop: '1rem' }}>
              <h3>{'Medisintype (radio)'}</h3>
              {reseptStatusOptions.map(opt => (
                <RadioButton
                  key={opt.value}
                  label={opt.label}
                  name="status-delayed"
                  checked={draftFilters.reseptstatus === opt.value}
                  onChange={(): void => setDraftFilters(prev => ({ ...prev, reseptstatus: opt.value }))}
                />
              ))}
            </div>
            <div style={{ marginTop: '1rem' }}>
              <h3>{'E-resept (boolean)'}</h3>
              <Checkbox
                label={'Kun e-resept'}
                checked={draftFilters.eResept === true}
                onChange={(): void => setDraftFilters(prev => ({ ...prev, eResept: prev.eResept ? undefined : true }))}
              />
            </div>
          </Drawer>
        </FilterResult>
        <FiltrertDataExample items={filtered} />
      </>
    );
  },
};

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

export const VerktoyExample: Story = {
  args: { filters: {} },
  render: () => {
    const [language, setLanguage] = useState<LanguageLocales>(LanguageLocales.ENGLISH);
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
      },
      {
        navn: resources.verktoydata_grubl_name,
        ingress: resources.verktoydata_grubl_ingress,
        omrade: [FagomradeType.LIVSSTIL_OG_TRENING, FagomradeType.TANKER_OG_FOLELSER],
        passerFor: [MalgruppeType.Ungdom, MalgruppeType.Voksne],
        type: VerktoyType.App,
      },
      {
        navn: resources.verktoydata_mm_name,
        ingress: resources.verktoydata_mm_ingress,
        omrade: [FagomradeType.PSYKISK_HELSE, FagomradeType.GRAVIDITET_OG_FODSEL],
        passerFor: [MalgruppeType.Voksne],
        type: VerktoyType.App,
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
      { value: MalgruppeType.Barn, label: resources.passerForOptions_barn },
      { value: MalgruppeType.Ungdom, label: resources.passerForOptions_ungdom },
      { value: MalgruppeType.Voksne, label: resources.passerForOptions_voksne },
      { value: MalgruppeType.Eldre, label: resources.passerForOptions_eldre },
    ];

    const typeOptions = [
      { value: VerktoyType.App, label: resources.typeOptions_app },
      { value: VerktoyType.Weblosning, label: resources.typeOptions_web },
    ];

    const getLabel = <T extends number>(options: { value: T; label: string }[], value: T): string =>
      options.find(o => o.value === value)?.label ?? String(value);

    const categories = {
      // her hvis man bruker "default" skjer det ingenting, mens defaultValue er riktig. Hvordan gjøre dette tydeligere?
      omrade: { options: omradeOptions, defaultValue: [FagomradeType.GRAVIDITET_OG_FODSEL] },
      passerFor: { options: passerForOptions },
      type: { options: typeOptions },
      // fritekst: {}
    };

    const config = createFilterConfig<VerktoyFilterType>(categories);
    const filter = useFilter<VerktoyFilterType>(config);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const filterMatchers = {
      omrade: matchFilter.arrayIncludes<Verktoy>(m => m.omrade),
      passerFor: matchFilter.arrayIncludes<Verktoy>(m => m.passerFor),
      type: matchFilter.exactMatch<Verktoy>(m => m.type),
      // fritekst: (v: Verktoy): boolean => { // todo: hvordan støtte fritekst inn i oppsett
      //   return !!(v.navn?.includes(filter.filters.fritekst) || v.ingress?.includes(filter.filters.fritekst));
      // },
    };

    const filtered = filterItems(verktoyMockData, filter.filters, filterMatchers);

    const verktoyFilterLabels: Record<keyof VerktoyFilterType, string> = {
      omrade: resources.filterOptionTitles_omrade,
      passerFor: resources.filterOptionTitles_passerfor,
      type: resources.filterOptionTitles_type,
      fritekst: 'Fritekstsøk',
    };

    return (
      <LanguageProvider<LanguageLocales> language={language}>
        <div>
          <Button onClick={() => setLanguage(LanguageLocales.NORWEGIAN)}>{'Bokmål'}</Button>
          <Button onClick={() => setLanguage(LanguageLocales.ENGLISH)}>{'English'}</Button>
        </div>
        <div>
          <Button onClick={() => setDrawerOpen(true)}>{'Åpne filter'}</Button>
          <Button onClick={() => filter.resetFiltersToEmpty()} variant="borderless">
            {'Nullstill filter'}
          </Button>
          <br />
          <TagList>
            {Object.entries(filter.filters).flatMap(([key, entries]) =>
              (entries ?? []).map(entry => (
                <Tag key={`${entry.filterKey}-${entry.value}`}>
                  {key in categories ? getLabel(categories[key as keyof typeof categories].options, entry.value as number) : entry.label}
                </Tag>
              ))
            )}
          </TagList>
        </div>
        <Drawer isOpen={drawerOpen} title="Filter" onRequestClose={() => setDrawerOpen(false)}>
          {(Object.keys(verktoyFilterLabels) as (keyof VerktoyFilterType)[]).map(key => {
            const entries = filter.filters[key];

            return (
              <div key={key} style={{ marginTop: '1rem' }}>
                <Title htmlMarkup="h3" appearance="title3">
                  {verktoyFilterLabels[key]}
                </Title>
                <Spacer />
                {entries && entries.length > 0 && (
                  <TagList>
                    {entries.map(entry => (
                      <Tag key={`${entry.filterKey}-${entry.value}`}>
                        {key in categories
                          ? getLabel(categories[key as keyof typeof categories].options, entry.value as number)
                          : entry.label}
                      </Tag>
                    ))}
                  </TagList>
                )}
              </div>
            );
          })}
          <div style={{ marginTop: '1rem' }}>
            <h3>{verktoyFilterLabels.omrade}</h3>
            {omradeOptions.map(opt => (
              <Checkbox
                key={opt.value}
                label={opt.label}
                checked={(filter.filters.omrade ?? []).some(e => e.value === opt.value)}
                onChange={(): void => toggleArrayFilter(filter, 'omrade', opt.value)}
              />
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <h3>{verktoyFilterLabels.passerFor}</h3>
            {passerForOptions.map(opt => (
              <Checkbox
                key={opt.value}
                label={opt.label}
                checked={(filter.filters.passerFor ?? []).some(e => e.value === opt.value)}
                onChange={(): void => toggleArrayFilter(filter, 'passerFor', opt.value)}
              />
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <h3>{verktoyFilterLabels.type}</h3>
            {typeOptions.map(opt => (
              <Checkbox
                key={opt.value}
                label={opt.label}
                checked={(filter.filters.type ?? []).some(e => e.value === opt.value)}
                onChange={(): void => toggleArrayFilter(filter, 'type', opt.value)}
              />
            ))}
          </div>
        </Drawer>
        {filtered.length > 0 ? (
          <PanelList>
            {filtered.map(verktoy => (
              <Panel>
                <Panel.Title title={verktoy.navn} />
                <Panel.A>
                  <TagList>
                    {verktoy.omrade.map(o => (
                      <Tag key={o}>{getLabel(omradeOptions, o)}</Tag>
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
