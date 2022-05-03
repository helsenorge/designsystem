import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { allPaletteNames } from '../../../.storybook/knobs';

import Loader, { Overlay } from './Loader';
import Title from '../Title/Title';
import Button from '../Button/Button';

export default {
  title: 'Loader',
  component: Loader,
  argTypes: {
    color: {
      control: 'select',
      options: allPaletteNames,
      defaultValue: 'blueberry',
    },
  },
} as ComponentMeta<typeof Loader>;

export const Default: ComponentStory<typeof Loader> = (args: any) => <Loader {...args} />;

export const AllSizes: ComponentStory<typeof Loader> = (args: any) => (
  <div style={{ display: 'grid', gridGap: '2rem' }}>
    <Loader {...args} size={'tiny'} />
    <Loader {...args} size={'small'} />
    <Loader {...args} size={'medium'} />
    <Loader {...args} size={'large'} />
  </div>
);

export const LoaderIsCentered: ComponentStory<typeof Loader> = (args: any) => (
  <div style={{ width: 300, background: 'white' }}>
    <Loader {...args} center />
  </div>
);

export const Inline: ComponentStory<typeof Loader> = (args: any) => (
  <div>
    <Title htmlMarkup="span" appearance="title1">
      {'Søker'}
    </Title>
    <Loader {...args} color="black" inline size="tiny" />
  </div>
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
