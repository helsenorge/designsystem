import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import AsChildSlot, { AsChildSlotHandle } from './AsChildSlot';
import AnchorLink from '../AnchorLink';
import Button from '../Button';
import Spacer from '../Spacer';

const meta = {
  title: '@helsenorge/designsystem-react/_Internal/AsChildSlot',
  component: AsChildSlot,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={AsChildSlot} />,
      description: {
        component:
          'Et usynlig wrapper-element som lar deg trigge barnets native klikk (onClick/navigasjon) via en ref. Tenkt å brukes med asChild pattern.',
      },
      story: {
        inline: false,
        iframeHeight: '16rem',
      },
    },
  },
  args: {
    active: true,
  },
  argTypes: {},
} satisfies Meta<typeof AsChildSlot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    active: true,
  },
  render: args => {
    const slotRef = React.useRef<AsChildSlotHandle | null>(null);
    return (
      <div>
        <p>{'Child is hidden; clicking the Button will trigger the child Button onClick.'}</p>
        <Button onClick={() => slotRef.current?.click()}>{"Trigger AsChildSlot child's click event"}</Button>
        <AsChildSlot {...args} ref={slotRef}>
          <Button onClick={action('child Button onClick')} />
        </AsChildSlot>
      </div>
    );
  },
};

export const WithAnchorLinkChild: Story = {
  args: {
    active: true,
  },
  render: args => {
    const slotRef = React.useRef<AsChildSlotHandle | null>(null);
    return (
      <div>
        <Button onClick={() => slotRef.current?.click()}>{"Trigger AsChildSlot child's click event"}</Button>
        <Spacer />
        <Spacer />
        <AsChildSlot {...args} ref={slotRef}>
          <AnchorLink
            href="#"
            target="_blank"
            onClick={e => {
              action('child AnchorLink onClick')(e);
            }}
          />
        </AsChildSlot>
      </div>
    );
  },
};

export const Inactive: Story = {
  args: {
    active: false,
  },
  render: args => {
    const slotRef = React.useRef<AsChildSlotHandle | null>(null);
    return (
      <div>
        <p>{'This button should not trigger Actions when clicked'}</p>
        <Button onClick={() => slotRef.current?.click()}>{'Inactive AsChildSlot'}</Button>
        <Spacer />
        <AsChildSlot {...args} ref={slotRef}>
          <Button onClick={action('should NOT fire when inactive')} />
        </AsChildSlot>
      </div>
    );
  },
};
