import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import Loader, { Overlay } from './Loader';
import { allPaletteNames } from '../../../.storybook/knobs';
import Button from '../Button/Button';
import Title from '../Title/Title';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Loader',
  component: Loader,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Loader} />,
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
  render: args => <Loader {...args} />,
};

export const AllSizes: Story = {
  render: args => (
    <div style={{ display: 'grid', gridGap: '2rem' }}>
      <Loader {...args} size={'tiny'} />
      <Loader {...args} size={'small'} />
      <Loader {...args} size={'medium'} />
      <Loader {...args} size={'large'} />
    </div>
  ),
};

export const LoaderIsCentered: Story = {
  args: {
    center: true,
  },
  render: args => (
    <div style={{ background: 'white' }}>
      <Loader {...args} />
    </div>
  ),
};

export const Inline: Story = {
  args: {
    color: 'black',
    inline: true,
    size: 'tiny',
  },
  render: args => (
    <>
      <Title htmlMarkup="span" appearance="title1">
        {'Søker'}
      </Title>
      <Loader {...args} />
    </>
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
