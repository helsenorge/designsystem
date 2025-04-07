import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import PanelOld, { PanelOldVariant } from '../PanelOld';

import PanelListOld from '.';

const meta = {
  title: '@helsenorge/designsystem-react/Components/PanelListOld',
  component: PanelListOld,
  tags: ['deprecated'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={PanelListOld} />,
      description: {
        component:
          'Som innbygger vil jeg kunne ta stilling til flere paneler med informasjon i en liste slik at jeg effektivt kan scanne gjennom nøkkelinformasjon for elementer i listen og gjennomføre mine oppgaver.',
      },
    },
  },
  args: {
    variant: PanelOldVariant.fill,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: PanelOldVariant,
    },
  },
} satisfies Meta<typeof PanelListOld>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <PanelListOld {...args}>
      <PanelOld title="Overskrift 1">
        {
          'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
        }
      </PanelOld>
      <PanelOld title="Overskrift 2">
        {
          'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
        }
      </PanelOld>
      <PanelOld title="Overskrift 3">
        {
          'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
        }
      </PanelOld>
      <PanelOld title="Overskrift 4">
        {
          'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
        }
      </PanelOld>
    </PanelListOld>
  ),
};
