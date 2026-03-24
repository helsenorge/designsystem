import type React from 'react';
import { useState, type ReactElement } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { DummyFilter } from './utils';
import type { Meta } from '@storybook/react-vite';

import DrawerNavigation from './DrawerNavigation';
import FinnFastlegeFlytExample from './FinnFastlegeFlyt.example';
import { useDrawerNavigation } from './useDrawerNavigation';
import Button from '../../Button';
import FilterOverviewView from '../FilterPOC/FilterOverviewView';

type DefaultStoryViewId = 'home' | 'category' | 'details';

const HomeView = (): React.JSX.Element => {
  const { goToView } = useDrawerNavigation<DefaultStoryViewId>();
  return (
    <div>
      <p>{'Velkommen til din drawer. Hva vil du gjøre nå?'}</p>
      <Button onClick={() => goToView('category')}>{'Gå til kategori'}</Button>
      <Button onClick={() => goToView('details')}>{'Gå til detaljer'}</Button>
    </div>
  );
};

interface CategoryViewProps {
  chosenCategory: string;
}

const CategoryView = ({ chosenCategory }: CategoryViewProps): React.JSX.Element => {
  const { goToView, goBack } = useDrawerNavigation<DefaultStoryViewId>();
  return (
    <div>
      <p>{'Dette er valgt kategori akkurat nå: ' + chosenCategory}</p>
      <Button onClick={() => goToView('details')}>{'Gå videre til detaljer'}</Button>
      <Button variant="borderless" onClick={() => goBack()}>
        {'Tilbake'}
      </Button>
    </div>
  );
};

const DetailsView = (): React.JSX.Element => {
  const { goToViewAndClearStack } = useDrawerNavigation<DefaultStoryViewId>();
  return (
    <div>
      <p>{'Detaljer kommer her.'}</p>
      <Button variant="borderless" onClick={() => goToViewAndClearStack('home')}>
        {'Tilbake til startsiden'}
      </Button>
    </div>
  );
};

const meta = {
  title: '@helsenorge/designsystem-react/Components/Filter/DrawerNavigation',
  component: DrawerNavigation,
  tags: ['new'],
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
  render: (): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>{'Åpne drawer'}</Button>
        <DrawerNavigation isOpen={isOpen} onCloseButton={() => setIsOpen(false)}>
          <DrawerNavigation.View<DefaultStoryViewId> id="home" title="Hjem" home>
            <HomeView />
          </DrawerNavigation.View>
          <DrawerNavigation.View<DefaultStoryViewId> id="category" title="Kategori">
            <CategoryView chosenCategory="dokumenter" />
          </DrawerNavigation.View>
          <DrawerNavigation.View<DefaultStoryViewId> id="details" title="Detaljer">
            <DetailsView />
          </DrawerNavigation.View>
        </DrawerNavigation>
      </div>
    );
  },
};

export const FinnFastlegeFlyt = {
  render: (): ReactElement => {
    return <FinnFastlegeFlytExample />;
  },
};

export const WithFilterOverviewView = {
  render: (): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);

    type FilterViews = 'overview' | 'age' | 'gender';

    const filters: DummyFilter<FilterViews>[] = [
      {
        title: 'Alder',
        id: 'age',
        activeFilters: [],
      },
      {
        title: 'Kjønn',
        id: 'gender',
        activeFilters: ['Spiller ingen rolle så lenge du er kul'],
      },
    ];

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>{'Åpne drawer'}</Button>
        <p>
          {
            'FilterOverviewView er en komponent som tar i bruk FilterLinkList, men istedenfor at man må ta i bruk navigate-funksjonene selv kan man bare sende inn filters med id og activeFilters så lages det en linklist med navigasjon'
          }
        </p>
        <DrawerNavigation isOpen={isOpen} onCloseButton={() => setIsOpen(false)}>
          <DrawerNavigation.View<FilterViews> id="overview" title="Hjem" home>
            <FilterOverviewView filters={filters} />
          </DrawerNavigation.View>
          <DrawerNavigation.View<FilterViews> id="age" title="Alder">
            <div>{'En side her'}</div>
          </DrawerNavigation.View>
          <DrawerNavigation.View<FilterViews> id="gender" title="Kjønn">
            <div>{'En side der'}</div>
          </DrawerNavigation.View>
        </DrawerNavigation>
      </div>
    );
  },
};

export const WithFooterButton = {
  render: (): ReactElement => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>{'Åpne drawer'}</Button>
        <DrawerNavigation
          isOpen={isOpen}
          onCloseButton={() => setIsOpen(false)}
          footer={<Button onClick={() => setIsOpen(false)}>{'Lukk'}</Button>}
        >
          <DrawerNavigation.View<DefaultStoryViewId> id="home" title="Hjem" home>
            <HomeView />
          </DrawerNavigation.View>
          <DrawerNavigation.View<DefaultStoryViewId>
            id="category"
            title="Kategori"
            onCloseButton={() => {
              alert('Du lukket på kategori-siden. Bra for deg!');
              setIsOpen(false);
            }}
          >
            <CategoryView chosenCategory="dokumenter" />
          </DrawerNavigation.View>
          <DrawerNavigation.View<DefaultStoryViewId> id="details" title="Detaljer" footer={<span>{'Custom footer på detaljside'}</span>}>
            <DetailsView />
          </DrawerNavigation.View>
        </DrawerNavigation>
      </div>
    );
  },
};
