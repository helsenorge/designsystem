import { useState } from 'react';

import type { UseFilterReturn } from './useFilter';
import type { FilterMatchers, FilterOption } from './utils';
import type { StoryObj, Meta } from '@storybook/react-vite';

import { LanguageLocales } from '../../constants';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Chip from '../Chip';
import Drawer from '../Drawer';
import RadioButton from '../RadioButton';
import Spacer from '../Spacer';
import TagList from '../TagList';
import FilterResult from './FilterResult';
import { useFilter } from './useFilter';
import { createFilterConfig, filterItems, matchFilter, toggleArrayFilter } from './utils';
import EmptyState from '../EmptyState';
import Input from '../Input';
import Label from '../Label';
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
const filterMatchers: FilterMatchers<Medisin, ExampleFilterType> = {
  sykehus: matchFilter.arrayIncludes<Medisin>(m => m.sykehus),
  reseptstatus: matchFilter.exactMatch<Medisin>(m => m.reseptstatus),
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

const SelectedChips: React.FC<{
  filter: UseFilterReturn<ExampleFilterType>;
  getLabel: (key: keyof ExampleFilterType, value: unknown) => string;
}> = ({ filter, getLabel }) => (
  <>
    {(Object.keys(categoryLabels) as (keyof ExampleFilterType)[]).map(key => {
      const raw = filter.filters[key];
      const values = raw === undefined ? [] : Array.isArray(raw) ? raw : [raw];

      return (
        <div key={key} style={{ marginTop: '1rem' }}>
          <Title htmlMarkup="h3" appearance="title3">
            {categoryLabels[key]}
          </Title>
          <Spacer />
          {values.length > 0 && (
            <TagList>
              {values.map(v => (
                <Tag key={`${key}-${v}`}>{getLabel(key, v)}</Tag>
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
  getLabel: (key: keyof ExampleFilterType, value: unknown) => string;
}> = ({ filter, getLabel }) => (
  <>
    <SelectedChips filter={filter} getLabel={getLabel} />
    <div style={{ marginTop: '1rem' }}>
      <h3>{'Sykehus (checkbox)'}</h3>
      {sykehusOptions.map(opt => (
        <Checkbox
          key={opt.value}
          label={opt.label}
          checked={(filter.filters.sykehus ?? []).includes(opt.value)}
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
          checked={filter.filters.reseptstatus === opt.value}
          onChange={(): void => filter.setFilter('reseptstatus', opt.value)}
        />
      ))}
    </div>
    <div style={{ marginTop: '1rem' }}>
      <h3>{'E-resept (boolean)'}</h3>
      <Checkbox
        label={'Kun e-resept'}
        checked={filter.filters.eResept === true}
        onChange={(): void => filter.setFilter('eResept', filter.filters.eResept ? undefined : true)}
      />
    </div>
  </>
);

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter',
  parameters: {
    docs: {
      description: {
        component: 'Filter POC - demonstrerer bruk av useFilter hook med filter-utils for filtrering',
      },
      story: { inline: false, iframeHeight: '40rem' },
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof FilterResult>;
export default meta;

type Story = StoryObj<typeof meta>;

export const LiveFiltering: Story = {
  render: () => {
    const { filterOptions, getLabel } = createFilterConfig<ExampleFilterType>({
      sykehus: { options: sykehusOptions, defaultValue: ['haukeland'], getLabel: o => o.label },
      reseptstatus: { options: reseptStatusOptions, getLabel: o => o.label },
      eResept: { options: eReseptOptions, defaultValue: true, getLabel: o => o.label },
    });
    const filter = useFilter<ExampleFilterType>(filterOptions);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const filtered = filterItems(medisinerMockData, filter.filters, filterMatchers);

    return (
      <>
        <FilterResult>
          <TagList>
            {Object.entries(filter.filters).flatMap(([key, raw]) => {
              const values = raw === undefined ? [] : Array.isArray(raw) ? raw : [raw];
              return values.map(v => (
                <Chip key={`${key}-${v}`} action="remove" onClick={() => filter.removeFilter(key, String(v))}>
                  {getLabel(key as keyof ExampleFilterType, v)}
                </Chip>
              ));
            })}
          </TagList>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Button onClick={() => setDrawerOpen(true)}>{'Åpne filter'}</Button>
          </div>
          <Drawer isOpen={drawerOpen} title="Filter" onRequestClose={() => setDrawerOpen(false)}>
            <FilterDrawerContent filter={filter} getLabel={getLabel} />
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
    const { filterOptions, getLabel } = createFilterConfig<ExampleFilterType>({
      sykehus: { options: sykehusOptions, getLabel: o => o.label },
      reseptstatus: { options: reseptStatusOptions, getLabel: o => o.label },
      eResept: { options: eReseptOptions, getLabel: o => o.label },
    });
    const filter = useFilter<ExampleFilterType>(filterOptions);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [draftFilters, setDraftFilters] = useState<Partial<ExampleFilterType>>({});
    const filtered = filterItems(medisinerMockData, filter.filters, filterMatchers);

    const openDrawer = (): void => {
      setDraftFilters({ ...filter.filters });
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
        <FilterResult>
          <TagList>
            {Object.entries(filter.filters).flatMap(([key, raw]) => {
              const values = raw === undefined ? [] : Array.isArray(raw) ? raw : [raw];
              return values.map(v => <Tag key={`${key}-${v}`}>{getLabel(key as keyof ExampleFilterType, v)}</Tag>);
            })}
          </TagList>
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
            <SelectedChips filter={filter} getLabel={getLabel} />
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
    // todo: lag en story som ikke bruker config

    const filter = useFilter<VerktoyFilterType>(filterOptions);
    const [drawerOpen, setDrawerOpen] = useState(false);

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
            {Object.entries(filter.filters).flatMap(([key, raw]) => {
              const values = raw === undefined ? [] : Array.isArray(raw) ? raw : [raw];
              return values.map(v => <Tag key={`${key}-${v}`}>{getLabel(key as keyof VerktoyFilterType, v)}</Tag>);
            })}
          </TagList>
        </div>
        <Drawer isOpen={drawerOpen} title="Filter" onRequestClose={() => setDrawerOpen(false)}>
          {(Object.keys(verktoyFilterLabels) as (keyof VerktoyFilterType)[]).map(key => {
            const raw = filter.filters[key];
            const values = raw === undefined ? [] : Array.isArray(raw) ? raw : [raw];

            return (
              <div key={key} style={{ marginTop: '1rem' }}>
                <Title htmlMarkup="h3" appearance="title3">
                  {verktoyFilterLabels[key]}
                </Title>
                <Spacer />
                {values.length > 0 && (
                  <TagList>
                    {values.map(v => (
                      <Tag key={`${key}-${v}`}>{getLabel(key, v)}</Tag>
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
                checked={(filter.filters.omrade ?? []).includes(opt.value)}
                onChange={(): void => toggleArrayFilter(filter, 'omrade', opt.value)}
              />
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <h3>{verktoyFilterLabels.passerFor}</h3>
            {passerForOptions.map(opt => (
              <Checkbox
                key={opt.value}
                label={opt.text}
                checked={(filter.filters.passerFor ?? []).includes(opt.value)}
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
                checked={(filter.filters.type ?? []).includes(opt.value)}
                onChange={(): void => toggleArrayFilter(filter, 'type', opt.value)}
              />
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <h3>{verktoyFilterLabels.fritekst}</h3>
            <Input
              value={(filter.filters.fritekst as string) ?? ''}
              onChange={e => filter.setFilter('fritekst', e.target.value || undefined)}
              label={<Label labelTexts={[{ text: 'Søk' }]} />}
            />
          </div>
        </Drawer>
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
