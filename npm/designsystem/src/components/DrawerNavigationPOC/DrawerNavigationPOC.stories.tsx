import React, { useState } from 'react';

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

export const Default = {
  args: { views: parameterViews },
  render: ({ views }: { views: AllConfigs[] }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div>
        <button onClick={() => setIsOpen(true)}>{'Åpne drawer'}</button>
        <DrawerNavigationPOC views={views} isOpen={isOpen} onCloseButton={() => setIsOpen(false)} />
      </div>
    );
  },
};
