import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
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

type Story = StoryObj<typeof meta>;

interface FirstViewProps {
  uniqueProp: number;
}
const FirstView: React.FC<NavigationProps & FirstViewProps> = ({ uniqueProp, goToView, goBack }) => (
  <div>
    {'First view'} {uniqueProp}
    <button onClick={goBack}>{'Go back'}</button>
    <button onClick={() => goToView('second')}>{'Go to Second'}</button>
  </div>
);
const SecondView: React.FC<NavigationProps> = ({ goBack, goToView }) => (
  <div>
    {'Second view'}
    <button onClick={goBack}>{'Go Back'}</button>
    <button onClick={() => goToView('first')}>{'Go to First'}</button>
    <button onClick={() => goToView('third')}>{'Go to Third'}</button>
  </div>
);
const ThirdView: React.FC<NavigationProps> = ({ goToView, goBack, goToViewAndClearStack }) => (
  <div>
    {'Third view'}
    <button onClick={goBack}>{'Go Back'}</button>
    <button onClick={() => goToView('first')}>{'Go to First'}</button>
    <button
      onClick={() => {
        goToViewAndClearStack('first');
      }}
    >
      {'Go to First and start fresh'}
    </button>
    <button onClick={() => goToView('second')}>{'Go to Second'}</button>
  </div>
);

const views = [
  { id: 'first', component: FirstView, props: { uniqueProp: 2 } },
  { id: 'second', component: SecondView },
  { id: 'third', component: ThirdView },
] satisfies ViewConfig<any>[];

export const Default: Story = {
  args: { views },
  render: args => (
    <div>
      <DrawerNavigationPOC {...args} />
    </div>
  ),
};
