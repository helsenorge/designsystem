import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import Toggle, { TogglePosition } from './Toggle';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component:
          'Toggle brukes for å veklse mellom to tilstander som gir umiddelbar virkning. Eksempler på dette kan være: å skru av / på en funksjon i innstillinger eller aktivere varslinger.',
      },
      page: (): React.JSX.Element => <Docs component={Toggle} />,
    },
  },
  args: {
    label: [{ text: 'Toggle' }],
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
  render: args => <Toggle {...args} label={[{ text: 'Toggle' }]} onChange={action('Toggle switched')} />,
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
        label={[{ text: 'Normal' }]}
        subLabel={'Sublabel'}
        onChange={action('Toggle switched')}
        togglePosition={TogglePosition.left}
      />
      <br />
      <Toggle
        {...args}
        label={[{ text: 'Subdued', type: 'subdued' }]}
        subLabel={'Sublabel'}
        onChange={action('Toggle switched')}
        togglePosition={TogglePosition.right}
      />
    </>
  ),
};

export const StatusExample: Story = {
  args: {},
  render: args => (
    <>
      <Toggle
        {...args}
        label={[{ text: 'Statistikk og analyse' }]}
        subLabel={
          'Vi bruker verktøy for å analysere hvordan Helsenorge brukes. Informasjonen vi får hjelper oss å forstå hvordan nettsiden brukes, slik at vi kan gjøre innhold og tjenester bedre. Verktøyene samler ikke inn personsensitiv data.'
        }
        statusText={{
          checked: 'Godtatt',
          unchecked: 'Avvist',
        }}
        onChange={action('Toggle switched')}
        togglePosition={TogglePosition.right}
      />
      <br />
      <Toggle
        {...args}
        label={[{ text: 'Se videoer' }]}
        subLabel={
          'Vi bruker Youtube eller Vimeo for å vise videoer på Helsenorge. De bruker egne informasjonskapsler. Du må godta informasjonskapsler for video for å kunne se video.'
        }
        statusText={{
          checked: 'Godtatt',
          unchecked: 'Avvist',
        }}
        checked={true}
        onChange={action('Toggle switched')}
        togglePosition={TogglePosition.right}
      />
    </>
  ),
};
