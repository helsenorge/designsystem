import React from 'react';

import { Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import DrawerNavigationPOC, { NavigationProps, ViewConfig } from './DrawerNavigationPOC';

const meta = {
  title: '@helsenorge/designsystem-react/Components/DrawerNavigationPOC',
  component: DrawerNavigationPOC,
  tags: ['new'],
  parameters: {
    docs: {
      page: (): React.ReactNode => <Docs component={DrawerNavigationPOC} />,
      description: {
        component:
          'Drawer er en generisk container komponent som brukes for å vise innhold fra bunn til topp på mobil, og venstre eller høyre til motsatt side på desktop. Samtidig som det lar brukeren se litt av innholdet bak komponentet. Komponenten er controlled og vises via `isOpen` prop',
      },
      story: {
        inline: false,
        iframeHeight: '40rem',
      },
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof DrawerNavigationPOC>;

export default meta;

interface FirstViewProps {
  uniqueProp: number;
}
const FirstView: React.FC<NavigationProps & FirstViewProps> = ({ uniqueProp, navigate }) => (
  <div>
    {'First view'} {uniqueProp}
    <button onClick={navigate.goBack}>{'Go back'}</button>
    <button onClick={() => navigate.goToView('second')}>{'Go to Second'}</button>
  </div>
);
const SecondView: React.FC<NavigationProps> = ({ navigate }) => (
  <div>
    {'Second view'}
    <button onClick={navigate.goBack}>{'Go Back'}</button>
    <button onClick={() => navigate.goToView('first')}>{'Go to First'}</button>
    <button onClick={() => navigate.goToView('third')}>{'Go to Third'}</button>
  </div>
);
const ThirdView: React.FC<NavigationProps> = ({ navigate }) => (
  <div>
    {'Third view'}
    <button onClick={navigate.goBack}>{'Go Back'}</button>
    <button onClick={() => navigate.goToView('first')}>{'Go to First'}</button>
    <button
      onClick={() => {
        navigate.goToViewAndClearStack('first');
      }}
    >
      {'Go to First and start fresh'}
    </button>
    <button onClick={() => navigate.goToView('second')}>{'Go to Second'}</button>
  </div>
);

type FirstViewConfig = ViewConfig<FirstViewProps> & { id: 'first' };
type SecondViewConfig = ViewConfig & { id: 'second' };
type ThirdViewConfig = ViewConfig & { id: 'third' };
type AllViewConfigs = FirstViewConfig | SecondViewConfig | ThirdViewConfig;

const views: AllViewConfigs[] = [
  { id: 'first', component: FirstView, props: { uniqueProp: 2 } },
  { id: 'second', component: SecondView },
  { id: 'third', component: ThirdView },
];

export const Default = {
  args: { views },
  render: ({ views }: { views: AllViewConfigs[] }): JSX.Element => (
    <div>
      <DrawerNavigationPOC views={views} />
    </div>
  ),
};
