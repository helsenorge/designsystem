import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Title as DocsTitle, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { allPaletteNames } from '../../../.storybook/knobs';

import Loader, { Overlay } from './Loader';
import Title from '../Title/Title';
import Button from '../Button/Button';
import GridExample from '../GridExample';

export default {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    docs: {
      description: {
        component:
          'Loader benyttes for å vise innbygger at det lastes ned innhold, slik at innbygger må vente til innholdet er lastet ferdig.',
      },
      page: () => (
        <>
          <DocsTitle />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      ),
    },
  },
  argTypes: {
    color: {
      control: 'select',
      options: allPaletteNames,
      defaultValue: 'blueberry',
    },
  },
} as ComponentMeta<typeof Loader>;

export const Default: ComponentStory<typeof Loader> = (args: any) => (
  <GridExample>
    <Loader {...args} />
  </GridExample>
);

export const AllSizes: ComponentStory<typeof Loader> = (args: any) => (
  <GridExample>
    <div style={{ display: 'grid', gridGap: '2rem' }}>
      <Loader {...args} size={'tiny'} />
      <Loader {...args} size={'small'} />
      <Loader {...args} size={'medium'} />
      <Loader {...args} size={'large'} />
    </div>
  </GridExample>
);

export const LoaderIsCentered: ComponentStory<typeof Loader> = (args: any) => (
  <GridExample>
    <div style={{ background: 'white' }}>
      <Loader {...args} center />
    </div>
  </GridExample>
);

export const Inline: ComponentStory<typeof Loader> = (args: any) => (
  <GridExample>
    <Title htmlMarkup="span" appearance="title1">
      {'Søker'}
    </Title>
    <Loader {...args} color="black" inline size="tiny" />
  </GridExample>
);

export const OverlayScreen: ComponentStory<typeof Loader> = (args: any) => (
  <div style={{ width: '100%', height: '200vh' }}>
    <h2>{'Fastlegen din er Arnfinn Nesset ved Orkdal sykehjem'}</h2>
    <Loader {...args} overlay={Overlay.screen} />
  </div>
);

export const OverlayParent: ComponentStory<typeof Loader> = (args: any) => (
  <div style={{ width: '100%', height: '100vh' }}>
    <h2>{'Fastlegen din er Arnfinn Nesset ved Orkdal sykehjem'}</h2>
    <div>
      <Title>{'Søknad'}</Title>
      <p style={{ color: 'red' }}>{'Søknad om greier'}</p>
      <Button>{'Lagre'}</Button>
      <Loader {...args} overlay={Overlay.parent} />
    </div>
  </div>
);
