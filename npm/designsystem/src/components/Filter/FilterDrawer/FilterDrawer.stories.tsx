/* eslint-disable @typescript-eslint/explicit-function-return-type */
import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { Meta, StoryObj } from '@storybook/react-vite';

import FilterDrawer from './FilterDrawer';
import Button from '../../Button';
import NotificationPanel from '../../NotificationPanel';
import { useDrawerNavigation } from '../DrawerNavigation';
import FilterOverviewLinkList from '../FilterOverviewLinkList/FilterOverviewLinkList';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterDrawer',
  component: FilterDrawer,
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={FilterDrawer} />,
    },
    story: {
      inline: false,
      iframeHeight: '40rem',
    },
  },
  args: {
    drawer: { isOpen: false, initialView: 'overview', open: () => {}, close: () => {} },
    children: undefined,
  },
} satisfies Meta<typeof FilterDrawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(true);

    const dummyFilter = {
      filters: {
        dummyParam1: ['1-1', '1-2', '1-3', '1-4'],
        dummyParam2: ['2-1', '2-2'],
        dummyParam3: '3',
      },
      setFilter: () => {},
      setFilters: () => {},
      removeFilter: (key: string) => action(`removeFilter: ${key}`)(),
      resetFilters: () => {},
      resetFiltersToEmpty: () => {},
    };
    const getDummyLabels = (_: string, value: unknown): string => {
      return value as string;
    };
    const dummyLinks = [
      {
        filterKey: 'dummyParam1',
        title: 'First',
      },
      {
        filterKey: 'dummyParam2',
        title: 'Second',
      },
      {
        filterKey: 'dummyParam3',
        title: 'Third',
      },
    ];

    const drawer = {
      isOpen,
      initialView: 'overview',
      open: (view?: string) => {
        setIsOpen(true);
        action(`drawer.open(${view})`)();
      },
      close: () => {
        setIsOpen(false);
        action('drawer.close()')();
      },
    };

    return (
      <FilterDrawer {...args} drawer={drawer} onReset={() => action('onReset')()} resultCount={5} onClose={() => action('onClose')()}>
        <FilterDrawer.Overview title="Finn...">
          <FilterOverviewLinkList filter={dummyFilter} getLabel={getDummyLabels} links={dummyLinks} />
        </FilterDrawer.Overview>
        <FilterDrawer.View id="dummyParam1" title="First Filter">
          <div style={{ padding: '1rem' }}>{'Filter content for dummyParam1'}</div>
        </FilterDrawer.View>
        <FilterDrawer.View id="dummyParam2" title="Second Filter">
          <div style={{ padding: '1rem' }}>{'Filter content for dummyParam2'}</div>
        </FilterDrawer.View>
        <FilterDrawer.View id="dummyParam3" title="Third Filter">
          <div style={{ padding: '1rem' }}>{'Filter content for dummyParam3'}</div>
        </FilterDrawer.View>
      </FilterDrawer>
    );
  },
};

export const WithNotificationPanel: Story = {
  render: (args): React.JSX.Element => {
    const dummyFilter = {
      filters: {
        dummyParam1: [],
        dummyParam2: [],
        dummyParam3: null,
      },
      setFilter: () => {},
      setFilters: () => {},
      removeFilter: (key: string) => action(`removeFilter: ${key}`)(),
      resetFilters: () => {},
      resetFiltersToEmpty: () => {},
    };
    const getDummyLabels = (_: string, value: unknown): string => {
      return value as string;
    };
    const dummyLinks = [
      {
        filterKey: 'dummyParam1',
        title: 'Title',
      },
      {
        filterKey: 'dummyParam2',
        title: 'Title',
      },
      {
        filterKey: 'dummyParam3',
        title: 'Title',
      },
    ];

    const drawer = {
      isOpen: true,
      initialView: 'overview',
      open: (view?: string) => {
        action(`drawer.open(${view})`)();
      },
      close: () => {
        action('drawer.close()')();
      },
    };

    return (
      <FilterDrawer {...args} drawer={drawer} onReset={() => action('onReset')()} resultCount={5} onClose={() => action('onClose')()}>
        <FilterDrawer.Overview title="Finn...">
          <div style={{ display: 'flex', flexFlow: 'column', gap: '1rem', marginBottom: '2rem' }}>
            <span>{'Ingress ved behov'}</span>
            <NotificationPanel compactVariant="outline">
              {
                'Finner du ikke dokumentet du leter etter kan det skyldes nedetid hos behandlingsstedet eller at perioden du har angitt er for lang.'
              }
            </NotificationPanel>
          </div>
          <FilterOverviewLinkList filter={dummyFilter} getLabel={getDummyLabels} links={dummyLinks} />
        </FilterDrawer.Overview>
        <FilterDrawer.View id="dummyParam1" title="First Filter">
          <div style={{ padding: '1rem' }}>{'Filter content for dummyParam1'}</div>
        </FilterDrawer.View>
        <FilterDrawer.View id="dummyParam2" title="Second Filter">
          <div style={{ padding: '1rem' }}>{'Filter content for dummyParam2'}</div>
        </FilterDrawer.View>
        <FilterDrawer.View id="dummyParam3" title="Third Filter">
          <div style={{ padding: '1rem' }}>{'Filter content for dummyParam3'}</div>
        </FilterDrawer.View>
      </FilterDrawer>
    );
  },
};

export const WithCustomNavigation: Story = {
  render: (args): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(true);

    type DummyViewId = 'overview' | 'dummyParam1' | 'dummyParam2' | 'dummyParam3';

    const drawer = {
      isOpen,
      initialView: 'overview',
      open: (view?: string) => {
        setIsOpen(true);
        action(`drawer.open(${view})`)();
      },
      close: () => {
        setIsOpen(false);
        action('drawer.close()')();
      },
    };

    const CustomNavigationLinkList = () => {
      const { goToView } = useDrawerNavigation<DummyViewId>();

      return (
        <div>
          <Button onClick={() => goToView('dummyParam1')}>{'Til første filter'}</Button>
          <Button onClick={() => goToView('dummyParam2')}>{'Til andre filter'}</Button>
          <Button onClick={() => goToView('dummyParam3')}>{'Til tredje filter'}</Button>
        </div>
      );
    };

    return (
      <FilterDrawer {...args} drawer={drawer} onReset={() => action('onReset')()} resultCount={5} onClose={() => action('onClose')()}>
        <FilterDrawer.Overview title="Finn...">
          <CustomNavigationLinkList />
        </FilterDrawer.Overview>
        <FilterDrawer.View id="dummyParam1" title="First Filter">
          <div style={{ padding: '1rem' }}>{'Filter content for dummyParam1'}</div>
        </FilterDrawer.View>
        <FilterDrawer.View id="dummyParam2" title="Second Filter">
          <div style={{ padding: '1rem' }}>{'Filter content for dummyParam2'}</div>
        </FilterDrawer.View>
        <FilterDrawer.View id="dummyParam3" title="Third Filter">
          <div style={{ padding: '1rem' }}>{'Filter content for dummyParam3'}</div>
        </FilterDrawer.View>
      </FilterDrawer>
    );
  },
};
