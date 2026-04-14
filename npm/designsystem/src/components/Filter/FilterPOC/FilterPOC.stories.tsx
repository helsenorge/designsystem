import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { DummyFilter } from '../DrawerNavigation/utils';
import type { Meta } from '@storybook/react-vite';

import FilterPOC from './FilterPOC';
import Button from '../../Button';
import DrawerNavigation from '../DrawerNavigation';
import { useDrawerNavigation } from '../DrawerNavigation/useDrawerNavigation';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterPOC',
  component: DrawerNavigation,
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={DrawerNavigation} />,
      story: {
        inline: false,
        iframeHeight: '40rem',
      },
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof DrawerNavigation>;

export default meta;

export const Default = {
  render: (): React.ReactNode => {
    const [isOpen, setIsOpen] = useState(true);
    type FilterId = 'age' | 'gender';
    const filters: DummyFilter<FilterId>[] = [
      { title: 'Alder', id: 'age', activeFilters: ['20-30 år'] },
      { title: 'Kjønn', id: 'gender', activeFilters: [] },
    ];
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>{'Åpne filter'}</Button>
        <FilterPOC isOpen={isOpen} onCloseButton={() => setIsOpen(false)} filters={filters}>
          <DrawerNavigation.View<FilterId> id="age" title="Alder">
            <div>
              <p>{'View med parameter for alder her'}</p>
            </div>
          </DrawerNavigation.View>
          <DrawerNavigation.View<FilterId> id="gender" title="Kjønn">
            <div>
              <p>{'View med parameter for kjønn her'}</p>
            </div>
          </DrawerNavigation.View>
        </FilterPOC>
      </>
    );
  },
};

export const FilterWithCustomOverview = {
  render: (): React.ReactNode => {
    const [isOpen, setIsOpen] = useState(true);
    type FilterId = 'age' | 'gender';
    const filters: DummyFilter<FilterId>[] = [
      { title: 'Alder', id: 'age', activeFilters: ['20-30 år'] },
      { title: 'Kjønn', id: 'gender', activeFilters: [] },
    ];

    const CustomOverview = (): React.ReactNode => {
      const { goToView } = useDrawerNavigation<FilterId>();
      return (
        <div>
          <p>{'Min egendefinerte oversikt'}</p>
          <Button onClick={() => goToView('age')}>{'Gå til alder'}</Button>
          <Button onClick={() => goToView('gender')}>{'Gå til kjønn'}</Button>
        </div>
      );
    };

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>{'Åpne filter'}</Button>
        <FilterPOC
          isOpen={isOpen}
          onCloseButton={() => setIsOpen(false)}
          filters={filters}
          overviewTitle="Min tilpassede oversikt"
          overviewContent={<CustomOverview />}
        >
          <DrawerNavigation.View<FilterId> id="age" title="Alder">
            <div>
              <p>{'View med parameter for alder her'}</p>
            </div>
          </DrawerNavigation.View>
          <DrawerNavigation.View<FilterId> id="gender" title="Kjønn">
            <div>
              <p>{'View med parameter for kjønn her'}</p>
            </div>
          </DrawerNavigation.View>
        </FilterPOC>
      </>
    );
  },
};
