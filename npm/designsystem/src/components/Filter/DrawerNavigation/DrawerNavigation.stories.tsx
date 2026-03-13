import type React from 'react';
import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { Meta } from '@storybook/react-vite';

import DrawerNavigation, { type DrawerViewProps, type ViewConfig } from './DrawerNavigation';
import Button from '../../Button';

type ViewId = 'home' | 'category' | 'details';

const HomeView = ({ navigate }: DrawerViewProps<ViewId>): React.JSX.Element => (
  <div>
    <p>{'Velkommen til din drawer. Hva vil du gjøre nå?'}</p>
    <Button onClick={() => navigate.goToView('category')}>{'Gå til kategori'}</Button>
    <Button onClick={() => navigate.goToView('details')}>{'Gå til detaljer'}</Button>
  </div>
);

const CategoryView = ({ navigate }: DrawerViewProps<ViewId>): React.JSX.Element => (
  <div>
    <p>{'Her kan du velge kategori.'}</p>
    <Button onClick={() => navigate.goToView('details')}>{'Gå videre til detaljer'}</Button>
    <Button variant="borderless" onClick={() => navigate.goBack()}>
      {'Tilbake'}
    </Button>
  </div>
);

const DetailsView = ({ navigate }: DrawerViewProps<ViewId>): React.JSX.Element => (
  <div>
    <p>{'Detaljer for valgt filter.'}</p>
    <Button variant="borderless" onClick={() => navigate.goToViewAndClearStack('home')}>
      {'Tilbake til startsiden'}
    </Button>
  </div>
);

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
  render: (): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const homeView: ViewConfig<ViewId> = {
      id: 'home',
      title: 'Hjem',
      component: HomeView,
    };

    const views: ViewConfig<ViewId>[] = [
      {
        id: 'category',
        title: 'Kategori',
        component: CategoryView,
      },
      {
        id: 'details',
        title: 'Detaljer',
        component: DetailsView,
      },
    ];

    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>{'Åpne drawer'}</Button>
        <DrawerNavigation homeView={homeView} views={views} isOpen={isOpen} onCloseButton={() => setIsOpen(false)} />
      </div>
    );
  },
};
