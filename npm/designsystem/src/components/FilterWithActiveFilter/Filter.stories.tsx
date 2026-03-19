import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { UseFilterReturn } from './useFilter';
import type { FilterOption } from './utils';
import type { StoryObj, Meta } from '@storybook/react-vite';

import Button from '../Button';
import Checkbox from '../Checkbox';
import Drawer from '../Drawer';
import RadioButton from '../RadioButton';
import FilterResult from './FilterResult';
import { useFilter } from './useFilter';
import { createFilterConfig, filterItems, matchFilter, toggleArrayFilter } from './utils';

type ExampleFilterType = {
  categories: string[];
  status: string;
  eResept: boolean;
};

const categoryOptions = [
  { value: 'oslo_universitetssykehus', label: 'Oslo universitetssykehus' },
  { value: 'haukeland', label: 'Haukeland universitetssjukehus' },
  { value: 'st_olavs', label: 'St. Olavs hospital' },
];

const statusOptions = [
  { value: 'resept', label: 'Reseptbelagt' },
  { value: 'reseptfri', label: 'Reseptfri' },
];

const eReseptOptions: FilterOption<boolean>[] = [{ value: true, label: 'E-resept' }];

interface Medisin {
  navn: string;
  sykehus: string;
  status: string;
  eResept: boolean;
}

const medisinerMockData: Medisin[] = [
  // TODO: Hvis feks dataen ikke har et felt som filtreres på, så kan consumeren noen ganger trenge å filtrere mot et annet felt for dette
  { navn: 'Paracet 500mg', sykehus: 'oslo_universitetssykehus', status: 'resept', eResept: true },
  { navn: 'Ibux 400mg', sykehus: 'haukeland', status: 'reseptfri', eResept: false },
  { navn: 'Voltaren 50mg', sykehus: 'st_olavs', status: 'resept', eResept: true },
  { navn: 'Zyrtec 10mg', sykehus: 'oslo_universitetssykehus', status: 'reseptfri', eResept: false },
  { navn: 'Metformin 500mg', sykehus: 'haukeland', status: 'resept', eResept: true },
  { navn: 'Paralgin Forte', sykehus: 'st_olavs', status: 'resept', eResept: false },
];

// Definerer hvordan hvert filter skal matche mot dataene.
// Hver nøkkel tilsvarer et filter i ExampleFilterType, og funksjonen avgjør om et dataelement matcher filterverdien.
// Sendes til filter-utils/filterItems() for å filtrere data basert på aktive filtre.
const filterMatchers = {
  categories: matchFilter.arrayIncludes<Medisin>(m => m.sykehus),
  status: matchFilter.exactMatch<Medisin>(m => m.status),
  eResept: matchFilter.booleanToggle<Medisin>(m => m.eResept),
};

const FiltrertDataExample: React.FC<{ items: Medisin[] }> = ({ items }) => (
  <>
    <ul>
      {items.map(data => (
        <li key={data.navn}>{`${data.navn} — ${data.sykehus} — ${data.status}${data.eResept ? ' (e-resept)' : ''}`}</li>
      ))}
    </ul>
    {items.length === 0 && <p>{'Ingen medisiner matcher valgte filtre.'}</p>}
  </>
);

const FilterDrawerContent: React.FC<{
  filter: UseFilterReturn<ExampleFilterType>;
}> = ({ filter }) => (
  <>
    <div>
      <h3>{'Sykehus (checkbox)'}</h3>
      {categoryOptions.map(opt => (
        <Checkbox
          key={opt.value}
          label={opt.label}
          checked={(filter.filters.categories ?? []).includes(opt.value)}
          onChange={(): void => toggleArrayFilter(filter, 'categories', opt.value)}
        />
      ))}
    </div>
    <div style={{ marginTop: '1rem' }}>
      <h3>{'Medisintype (radio)'}</h3>
      {statusOptions.map(opt => (
        <RadioButton
          key={opt.value}
          label={opt.label}
          name="status"
          checked={filter.filters.status === opt.value}
          onChange={(): void => filter.setFilter('status', opt.value)}
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
  title: '@helsenorge/designsystem-react/Components/FilterWithActiveFilter',
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
  args: { activeFilters: [] },
  render: () => {
    const filter = useFilter<ExampleFilterType>(
      createFilterConfig<ExampleFilterType>({
        categories: { options: categoryOptions, defaultValue: ['haukeland'] },
        status: { options: statusOptions },
        eResept: { options: eReseptOptions, defaultValue: true },
      })
    );
    const [drawerOpen, setDrawerOpen] = useState(false);

    const filtered = filterItems(medisinerMockData, filter.filters, filterMatchers);

    return (
      <>
        <FilterResult activeFilters={filter.activeFilters}>
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
  args: { activeFilters: [] },
  render: () => {
    const filter = useFilter<ExampleFilterType>({
      ...createFilterConfig<ExampleFilterType>({
        categories: { options: categoryOptions },
        status: { options: statusOptions },
        eResept: { options: eReseptOptions },
      }),
      removable: false,
    });
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [draftFilters, setDraftFilters] = useState(filter.filters);
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
        <FilterResult activeFilters={filter.activeFilters}>
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
            <div>
              <h3>{'Sykehus (checkbox)'}</h3>
              {categoryOptions.map(opt => (
                <Checkbox
                  key={opt.value}
                  label={opt.label}
                  checked={(draftFilters.categories ?? []).includes(opt.value)}
                  onChange={(): void => {
                    const current = draftFilters.categories ?? [];
                    const updated = current.includes(opt.value) ? current.filter(v => v !== opt.value) : [...current, opt.value];
                    setDraftFilters(prev => ({ ...prev, categories: updated.length > 0 ? updated : undefined }));
                  }}
                />
              ))}
            </div>
            <div style={{ marginTop: '1rem' }}>
              <h3>{'Medisintype (radio)'}</h3>
              {statusOptions.map(opt => (
                <RadioButton
                  key={opt.value}
                  label={opt.label}
                  name="status-delayed"
                  checked={draftFilters.status === opt.value}
                  onChange={(): void => setDraftFilters(prev => ({ ...prev, status: opt.value }))}
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
