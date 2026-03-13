import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { DummyFilter as DummyFilterWithProps } from '../DrawerNavigationPOC/ViewOverview';
import type { DummyFilter as DummyFilterWithContext } from '../DrawerNavigationWithContext/utils';
import type { Meta } from '@storybook/react-vite';

import { createView } from '../DrawerNavigationPOC/DrawerNavigationPOC';
import { default as DrawerNavigationWithContext } from '../DrawerNavigationWithContext';
import FilterPOCWithContext from './FilterPOCWithContext';
import FilterPOCWithProps from './FilterPOCWithProps';
import Button from '../../Button';
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

export const FilterWithProps = {
  render: (): React.ReactNode => {
    const [isOpen, setIsOpen] = useState(true);
    type FilterId = 'age' | 'gender';

    const filters: DummyFilterWithProps<FilterId>[] = [
      { title: 'Alder', viewId: 'age', activeFilters: ['20-30 år'] },
      { title: 'Kjønn', viewId: 'gender', activeFilters: [] },
    ];

    const views = [
      createView<FilterId>({
        id: 'age',
        title: 'Alder',
        component: () => (
          <div>
            <p>{'View med parameter for alder her'}</p>
          </div>
        ),
      }),
      createView<FilterId>({
        id: 'gender',
        title: 'Kjønn',
        component: () => (
          <div>
            <p>{'View med parameter for kjønn her'}</p>
          </div>
        ),
      }),
    ];

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>{'Åpne filter'}</Button>
        <FilterPOCWithProps isOpen={isOpen} onCloseButton={() => setIsOpen(false)} filters={filters} views={views} />
      </>
    );
  },
};

export const FilterWithPropsCustomOverview = {
  render: (): React.ReactNode => {
    const [isOpen, setIsOpen] = useState(true);
    type FilterId = 'age' | 'gender';

    const filters: DummyFilterWithProps<FilterId>[] = [
      { title: 'Alder', viewId: 'age', activeFilters: ['20-30 år'] },
      { title: 'Kjønn', viewId: 'gender', activeFilters: [] },
    ];

    const views = [
      createView<FilterId>({
        id: 'age',
        title: 'Alder',
        component: () => (
          <div>
            <p>{'View med parameter for alder her'}</p>
          </div>
        ),
      }),
      createView<FilterId>({
        id: 'gender',
        title: 'Kjønn',
        component: () => (
          <div>
            <p>{'View med parameter for kjønn her'}</p>
          </div>
        ),
      }),
    ];

    const customHomeView = createView<FilterId>({
      id: 'overview' as FilterId,
      title: 'Min tilpassede oversikt',
      component: ({ navigate }) => (
        <div>
          <p>{'Min egendefinerte oversikt'}</p>
          <Button onClick={() => navigate.goToView('age')}>{'Gå til alder'}</Button>
          <Button onClick={() => navigate.goToView('gender')}>{'Gå til kjønn'}</Button>
        </div>
      ),
    });

    return (
      <>
        <Button onClick={() => setIsOpen(true)}>{'Åpne filter'}</Button>
        <FilterPOCWithProps
          isOpen={isOpen}
          onCloseButton={() => setIsOpen(false)}
          filters={filters}
          views={views}
          homeView={customHomeView}
        />
      </>
    );
  },
};
