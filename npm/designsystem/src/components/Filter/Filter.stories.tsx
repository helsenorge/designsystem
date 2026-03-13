import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Button from '../Button';
import Checkbox from '../Checkbox';
import Drawer from '../Drawer';
import RadioButton from '../RadioButton';
import Filter from './Filter';
import { useFilter } from './useFilter';

const categoryOptions = [
  { value: 'fruits', label: 'Frukt' },
  { value: 'vegetables', label: 'Grønnsaker' },
  { value: 'dairy', label: 'Meieri' },
];

const statusOptions = [
  { value: 'available', label: 'Tilgjengelig' },
  { value: 'sold_out', label: 'Utsolgt' },
];

const labelsConfig = {
  categories: Object.fromEntries(categoryOptions.map(o => [o.value, o.label])),
  status: Object.fromEntries(statusOptions.map(o => [o.value, o.label])),
};

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter',
  component: Filter,
  parameters: {
    docs: {
      description: {
        component: 'Filter POC - demonstrerer bruk av useFilter hook med Checkbox, RadioButton, Chip og Drawer',
      },
      page: (): React.JSX.Element => <Docs component={Filter} />,
      story: { inline: false, iframeHeight: '40rem' },
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof Filter>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LiveFiltering: Story = {
  render: () => {
    const filter = useFilter<{ categories: string[]; status: string }>({ labels: labelsConfig });
    const [drawerOpen, setDrawerOpen] = useState(false);

    // TODO: Prøv å introdusere dette som en del av hooken
    // TODO: Behold den enkle hooken, også kan resten være opt-in
    // TODO: Behold det enkle forholdet mellom hooken og komponente, komponenten eier fortsatt ingen state og rendrer bare
    const handleCheckboxChange = (optionValue: string): void => {
      const current = filter.filters.categories ?? [];
      const updated = current.includes(optionValue) ? current.filter(v => v !== optionValue) : [...current, optionValue];
      filter.setFilter('categories', updated.length > 0 ? updated : undefined);
    };

    return (
      <Filter>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button onClick={() => setDrawerOpen(true)}>{'Åpne filter'}</Button>
        </div>
        // TODO: Gjør dette i filter
        <Filter.Chips activeFilters={filter.activeFilters} />
        <p>
          {'Aktive filter (live): '}
          <code>{JSON.stringify(filter.filters)}</code>
        </p>
        <Drawer isOpen={drawerOpen} title="Filter" onRequestClose={() => setDrawerOpen(false)}>
          <div>
            <h3>{'Kategorier (checkbox)'}</h3>
            // TODO: taglist
            {categoryOptions.map(opt => (
              <Checkbox
                key={opt.value}
                label={opt.label}
                checked={(filter.filters.categories ?? []).includes(opt.value)}
                onChange={() => handleCheckboxChange(opt.value)}
              />
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <h3>{'Status (radio)'}</h3>
            {statusOptions.map(opt => (
              <RadioButton
                key={opt.value}
                label={opt.label}
                name="status"
                checked={filter.filters.status === opt.value}
                onChange={() => filter.setFilter('status', opt.value)}
              />
            ))}
          </div>
        </Drawer>
      </Filter>
    );
  },
};

export const DelayedFiltering: Story = {
  render: () => {
    const filter = useFilter<{ categories: string[]; status: string }>({ labels: labelsConfig });
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [draftFilters, setDraftFilters] = useState(filter.filters);

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

    const handleCheckboxChange = (optionValue: string): void => {
      const current = draftFilters.categories ?? [];
      const updated = current.includes(optionValue) ? current.filter(v => v !== optionValue) : [...current, optionValue];
      setDraftFilters(prev => ({ ...prev, categories: updated.length > 0 ? updated : undefined }));
    };

    return (
      <Filter>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <Button onClick={openDrawer}>{'Åpne filter'}</Button>
        </div>
        <Filter.Tags activeFilters={filter.activeFilters} />
        <p>
          {'Aktive filter (oppdateres ved "Bruk filter"): '}
          <code>{JSON.stringify(filter.filters)}</code>
        </p>
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
            <h3>{'Kategorier (checkbox)'}</h3>
            {categoryOptions.map(opt => (
              <Checkbox
                key={opt.value}
                label={opt.label}
                checked={(draftFilters.categories ?? []).includes(opt.value)}
                onChange={() => handleCheckboxChange(opt.value)}
              />
            ))}
          </div>
          <div style={{ marginTop: '1rem' }}>
            <h3>{'Status (radio)'}</h3>
            {statusOptions.map(opt => (
              <RadioButton
                key={opt.value}
                label={opt.label}
                name="status-delayed"
                checked={draftFilters.status === opt.value}
                onChange={() => setDraftFilters(prev => ({ ...prev, status: opt.value }))}
              />
            ))}
          </div>
        </Drawer>
      </Filter>
    );
  },
};
