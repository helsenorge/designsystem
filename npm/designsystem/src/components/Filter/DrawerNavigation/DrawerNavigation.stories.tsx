import type React from 'react';
import { useState, type ReactElement } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { Meta } from '@storybook/react-vite';

import DrawerNavigation from './DrawerNavigation';
import FinnFastlegeFlytExample from './FinnFastlegeFlyt.example';
import { useDrawerNavigation } from './useDrawerNavigation';
import Button from '../../Button';

type ViewId = 'home' | 'category' | 'details';

const HomeView = (): React.JSX.Element => {
  const { goToView } = useDrawerNavigation<ViewId>();
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
  const { goToView, goBack } = useDrawerNavigation<ViewId>();
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
  const { goToViewAndClearStack } = useDrawerNavigation<ViewId>();
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
  title: '@helsenorge/designsystem-react/Components/Filter/DrawerNavigationWithContext',
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
          <DrawerNavigation.View<ViewId> id="home" title="Hjem" home>
            <HomeView />
          </DrawerNavigation.View>
          <DrawerNavigation.View<ViewId> id="category" title="Kategori">
            <CategoryView chosenCategory="dokumenter" />
          </DrawerNavigation.View>
          <DrawerNavigation.View<ViewId> id="details" title="Detaljer">
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
