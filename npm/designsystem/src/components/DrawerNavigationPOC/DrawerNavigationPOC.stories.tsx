import React from 'react';

import { Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import DrawerNavigationPOC, { NavigationProps, ViewConfig } from './DrawerNavigationPOC';
import Badge from '../Badge';
import Button from '../Button';
import LinkList from '../LinkList';

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

type FirstViewConfig = ViewConfig<FirstViewProps>;
type SecondViewConfig = ViewConfig;
type ThirdViewConfig = ViewConfig;
type AllViewConfigs = FirstViewConfig | SecondViewConfig | ThirdViewConfig;

const views: AllViewConfigs[] = [
  { id: 'first', title: 'First page', component: FirstView, props: { uniqueProp: 2 } },
  { id: 'second', title: 'Second page', component: SecondView },
  { id: 'third', title: 'Third page', component: ThirdView },
];

export const Default = {
  args: { views },
  render: ({ views }: { views: AllViewConfigs[] }): JSX.Element => (
    <div>
      <DrawerNavigationPOC views={views} />
    </div>
  ),
};

interface OverviewPageProps {
  badge: number;
}
const OverviewPage: React.FC<NavigationProps & OverviewPageProps> = ({ badge, navigate }) => (
  <div>
    <LinkList>
      <LinkList.Link onClick={() => navigate.goToView('one')} htmlMarkup="button">
        {'Parameter one '}
        <Badge>{badge}</Badge>
      </LinkList.Link>
      <LinkList.Link onClick={() => navigate.goToView('two')} htmlMarkup="button">
        {'Parameter two'}
      </LinkList.Link>
    </LinkList>
  </div>
);
const TweakParameterOne: React.FC<NavigationProps> = () => <div>{'Parameter one'}</div>;
const TweakParameterTwo: React.FC<NavigationProps> = ({ navigate }) => (
  <div>
    <p>{'Parameter two'}</p>
    <Button onClick={() => navigate.goToView('nested')}>{'Go to nested parameter'}</Button>
  </div>
);
const NestedParameter: React.FC<NavigationProps> = ({ navigate }) => (
  <div>
    <p>{'Nested parameter'}</p>
    <Button onClick={() => navigate.goToViewAndClearStack('overview')}>{'Go back to start'}</Button>
  </div>
);

type OverviewPageConfig = ViewConfig<OverviewPageProps>;
type TweakParameterOneonfig = ViewConfig;
type TweakParameterTwoConfig = ViewConfig;
type AllConfigs = OverviewPageConfig | TweakParameterOneonfig | TweakParameterTwoConfig;

const parameterViews: AllConfigs[] = [
  { id: 'overview', title: 'Overview', component: OverviewPage, props: { badge: 2 } },
  { id: 'one', title: 'First parameter', component: TweakParameterOne },
  { id: 'two', title: 'Second parameter', component: TweakParameterTwo },
  { id: 'nested', title: 'Nested parameter', component: NestedParameter },
];

export const WithLinkList = {
  args: { views: parameterViews },
  render: ({ views }: { views: AllViewConfigs[] }): JSX.Element => (
    <div>
      <DrawerNavigationPOC views={views} />
    </div>
  ),
};
