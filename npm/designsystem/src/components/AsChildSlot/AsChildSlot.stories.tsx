import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import AsChildSlot, { AsChildSlotHandle } from './AsChildSlot';

const meta = {
  title: '@helsenorge/designsystem-react/_Internal/AsChildSlot',
  component: AsChildSlot,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={AsChildSlot} />,
      description: {
        component:
          'Wrapper som kloner barnet og injiserer props (ref, aria, handlers). Gir også en imperativ ref med .click(), så jeg kan trigge barnets naturlige onClick/navigasjon programmatisk. Brukes i asChild-pattern.',
      },
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof AsChildSlot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const slotRef = React.useRef<AsChildSlotHandle | null>(null);
    return (
      <div>
        <p>{'Klikk på knappen for å trigge barnets onClick.'}</p>
        <button onClick={() => slotRef.current?.click()}>{'Trigger child onClick()'}</button>
        <div style={{ height: 16 }} />
        <AsChildSlot
          {...args}
          ref={slotRef}
          content="Dette er barnet (button) – blir klikket via .click()"
          onSelect={action('onSelect (user click)')}
        >
          <button onClick={e => action('child <button> onClick')(e)} />
        </AsChildSlot>
      </div>
    );
  },
};

export const WithAnchorLinkChild: Story = {
  render: args => {
    const slotRef = React.useRef<AsChildSlotHandle | null>(null);
    return (
      <div>
        <button onClick={() => slotRef.current?.click()}>{'Trigger child anchor click()'}</button>
        <div style={{ height: 24 }} />
        <AsChildSlot
          {...args}
          ref={slotRef}
          content="Dette er barnet (<a>) – vi preventer i onClick for å unngå navigasjon"
          onSelect={action('onSelect (user click)')}
        >
          <a href="#" target="_blank">
            {'As AnchorLink 1'}
          </a>
        </AsChildSlot>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: args => {
    const slotRef = React.useRef<AsChildSlotHandle | null>(null);
    return (
      <div>
        <p>{'Disabled: click() gjør ingenting og user click blokkeres.'}</p>
        <button onClick={() => slotRef.current?.click()}>{'Prøv å trigge (skal ikke skje noe)'}</button>
        <div style={{ height: 16 }} />
        <AsChildSlot {...args} ref={slotRef} disabled content="Disabled child" onSelect={action('onSelect (skal IKKE fyres når disabled)')}>
          <button onClick={e => action('child <button> onClick (skal IKKE fyres)')(e)} />
        </AsChildSlot>
      </div>
    );
  },
};
