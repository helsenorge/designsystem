import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Loader, { Overlay } from './Loader';
import { allPaletteNames } from '../../../.storybook/knobs';
import Button from '../Button/Button';
import GridExample from '../GridExample';
import Title from '../Title/Title';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Loader',
  component: Loader,
  parameters: {
    docs: {
      description: {
        component:
          'Loader benyttes for å vise innbygger at det lastes ned innhold, slik at innbygger må vente til innholdet er lastet ferdig.',
      },
    },
  },
  args: {
    color: 'blueberry',
  },
  argTypes: {
    color: {
      control: 'select',
      options: allPaletteNames,
    },
  },
} satisfies Meta<typeof Loader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <GridExample>
      <Loader {...args} />
    </GridExample>
  ),
};

export const AllSizes: Story = {
  render: args => (
    <GridExample>
      <div style={{ display: 'grid', gridGap: '2rem' }}>
        <Loader {...args} size={'tiny'} />
        <Loader {...args} size={'small'} />
        <Loader {...args} size={'medium'} />
        <Loader {...args} size={'large'} />
      </div>
    </GridExample>
  ),
};

export const LoaderIsCentered: Story = {
  args: {
    center: true,
  },
  render: args => (
    <GridExample>
      <div style={{ background: 'white' }}>
        <Loader {...args} />
      </div>
    </GridExample>
  ),
};

export const Inline: Story = {
  args: {
    color: 'black',
    inline: true,
    size: 'tiny',
  },
  render: args => (
    <GridExample>
      <Title htmlMarkup="span" appearance="title1">
        {'Søker'}
      </Title>
      <Loader {...args} />
    </GridExample>
  ),
};

export const OverlayScreen: Story = {
  args: {
    overlay: Overlay.screen,
  },
  render: args => (
    <div style={{ width: '100%', height: '200vh' }}>
      <Loader {...args} />
    </div>
  ),
};

export const OverlayParent: Story = {
  args: {
    overlay: Overlay.parent,
  },
  render: args => (
    <div style={{ width: '100%', height: '100vh' }}>
      <div>
        <Title>{'Søknad'}</Title>
        <p style={{ color: 'red' }}>{'Søknad om greier'}</p>
        <Button>{'Lagre'}</Button>
        <Loader {...args} />
      </div>
    </div>
  ),
};
