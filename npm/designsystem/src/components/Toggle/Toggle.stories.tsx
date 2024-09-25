import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import Toggle, { TogglePosition } from './Toggle';
import Docs from '../../docs';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av Toggle',
      },
      page: (): React.JSX.Element => <Docs component={Toggle} />,
    },
  },
  args: {
    checked: false,
    label: [{ text: 'Toggle' }],
    onColor: undefined,
    subLabel: '',
    togglePosition: TogglePosition.left,
    testId: 'toggle',
  },
  argTypes: {
    label: {
      control: 'object',
    },
    subLabel: {
      control: 'text',
    },
    checked: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => <Toggle {...args} onChange={action('Toggle switched')} />,
};

export const OnColor: Story = {
  args: {},
  render: args => (
    <>
      <Toggle {...args} onColor={'onwhite'} onChange={action('Toggle switched')} label={[{ text: 'onWhite' }]} />
      <br />
      <Toggle {...args} onColor={'onneutral'} onChange={action('Toggle switched')} label={[{ text: 'onNeutral' }]} />
      <br />
      <Toggle {...args} onColor={'onblueberry'} onChange={action('Toggle switched')} label={[{ text: 'onBlueberry' }]} />
    </>
  ),
};

export const TogglePositions: Story = {
  args: {},
  render: args => (
    <>
      <Toggle
        {...args}
        label={[{ text: 'Toggle Left(Default)' }]}
        onChange={action('Toggle switched')}
        togglePosition={TogglePosition.left}
      />
      <br />
      <Toggle {...args} label={[{ text: 'Toggle Right' }]} onChange={action('Toggle switched')} togglePosition={TogglePosition.right} />
    </>
  ),
};

export const LabelAndSublabel: Story = {
  args: {},
  render: args => (
    <>
      <Toggle
        {...args}
        label={[{ text: 'Semibold', type: 'semibold' }, { text: 'Normal' }]}
        subLabel={'Sublabel'}
        onChange={action('Toggle switched')}
        togglePosition={TogglePosition.left}
      />
      <br />
      <Toggle
        {...args}
        label={[{ text: 'Normal' }]}
        subLabel={'Sublabel'}
        onChange={action('Toggle switched')}
        togglePosition={TogglePosition.right}
      />
    </>
  ),
};