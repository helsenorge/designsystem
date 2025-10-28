import React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
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

const Visuals = ({ text }: { text: string }): React.ReactElement => (
  <span style={{ padding: '1rem', border: '1px solid black' }}>
    <span>{text}</span>
  </span>
);

export const Default: Story = {
  render: args => {
    const slotRef = React.useRef<AsChildSlotHandle | null>(null);
    return (
      <>
        <AsChildSlot
          {...args}
          ref={slotRef}
          className="storybook-reset"
          onSelect={action('onSelect')}
          ariaCurrent="true"
          content={<Visuals text="Renderered by AsChildSlot" />}
        >
          <button onClick={action('child <button> onClick')} />
        </AsChildSlot>
        <br />
        <button onClick={() => slotRef.current?.click()}>{'Triggers clicking the above button via ref'}</button>
      </>
    );
  },
};

export const WithAnchorChild: Story = {
  render: args => {
    const slotRef = React.useRef<AsChildSlotHandle | null>(null);
    return (
      <>
        <AsChildSlot
          {...args}
          ref={slotRef}
          className="storybook-reset"
          onSelect={action('onSelect')}
          content={<Visuals text="Rendered by AsChildSlot" />}
        >
          <a href="#" target="_blank">
            {' '}
          </a>
        </AsChildSlot>

        <br />
        <button onClick={() => slotRef.current?.click()}>{'Triggers clicking the above anchorlink via ref'}</button>
      </>
    );
  },
};
