import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { DummyFilter as DummyFilterWithContext } from '../DrawerNavigationWithContext/utils';
import type { Meta } from '@storybook/react-vite';

import FilterPOCWithContext from './FilterPOCWithContext';
import Button from '../../Button';
import { default as DrawerNavigationWithContext } from '../DrawerNavigationWithContext';
import { useDrawerNavigation } from '../DrawerNavigationWithContext/useDrawerNavigation';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/FilterPOC',
  component: DrawerNavigationWithContext,
  tags: ['new'],
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={DrawerNavigationWithContext} />,
      story: {
        inline: false,
        iframeHeight: '40rem',
      },
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof DrawerNavigationWithContext>;

export default meta;

export const FilterWithContext = {
  render: (): React.ReactNode => {
    const [isOpen, setIsOpen] = useState(true);
    type FilterId = 'age' | 'gender';
    const filters: DummyFilterWithContext<FilterId>[] = [
      { title: 'Alder', id: 'age', activeFilters: ['20-30 år'] },
      { title: 'Kjønn', id: 'gender', activeFilters: [] },
    ];
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>{'Åpne filter'}</Button>
        <FilterPOCWithContext isOpen={isOpen} onCloseButton={() => setIsOpen(false)} filters={filters}>
          <DrawerNavigationWithContext.View<FilterId> id="age" title="Alder">
            <div>
              <p>{'View med parameter for alder her'}</p>
            </div>
          </DrawerNavigationWithContext.View>
          <DrawerNavigationWithContext.View<FilterId> id="gender" title="Kjønn">
            <div>
              <p>{'View med parameter for kjønn her'}</p>
            </div>
          </DrawerNavigationWithContext.View>
        </FilterPOCWithContext>
      </>
    );
  },
};

export const FilterWithContextCustomOverview = {
  render: (): React.ReactNode => {
    const [isOpen, setIsOpen] = useState(true);
    type FilterId = 'age' | 'gender';
    const filters: DummyFilterWithContext<FilterId>[] = [
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
        <FilterPOCWithContext
          isOpen={isOpen}
          onCloseButton={() => setIsOpen(false)}
          filters={filters}
          overviewTitle="Min tilpassede oversikt"
          overviewContent={<CustomOverview />}
        >
          <DrawerNavigationWithContext.View<FilterId> id="age" title="Alder">
            <div>
              <p>{'View med parameter for alder her'}</p>
            </div>
          </DrawerNavigationWithContext.View>
          <DrawerNavigationWithContext.View<FilterId> id="gender" title="Kjønn">
            <div>
              <p>{'View med parameter for kjønn her'}</p>
            </div>
          </DrawerNavigationWithContext.View>
        </FilterPOCWithContext>
      </>
    );
  },
};
