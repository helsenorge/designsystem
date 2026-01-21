import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import { PanelVariant } from '../Panel/constants';
import Panel from '../Panel/Panel';

import PanelList from '.';

const meta = {
  title: '@helsenorge/designsystem-react/Components/PanelList',
  component: PanelList,
  tags: ['new'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={PanelList} />,
      description: {
        component:
          'Som innbygger vil jeg kunne ta stilling til flere paneler med informasjon i en liste slik at jeg effektivt kan scanne gjennom nøkkelinformasjon for elementer i listen og gjennomføre mine oppgaver.',
      },
    },
  },
  args: {
    variant: PanelVariant.fill,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: PanelVariant,
    },
    highlightText: {
      control: 'text',
    },
  },
} satisfies Meta<typeof PanelList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <PanelList {...args}>
      <Panel>
        <Panel.Title title="Overskrift 1" />
        <Panel.A>
          {
            'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
          }
        </Panel.A>
      </Panel>
      <Panel>
        <Panel.Title title="Overskrift 2" />
        <Panel.A>
          {
            'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
          }
        </Panel.A>
      </Panel>
    </PanelList>
  ),
};

export const Expandable: Story = {
  render: args => (
    <PanelList {...args}>
      <Panel>
        <Panel.Title title="Overskrift 1" />
        <Panel.ExpandedContent>
          {
            'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
          }
        </Panel.ExpandedContent>
      </Panel>
      <Panel>
        <Panel.Title title="Overskrift 2" />
        <Panel.ExpandedContent>
          {
            'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
          }
        </Panel.ExpandedContent>
      </Panel>
    </PanelList>
  ),
};
