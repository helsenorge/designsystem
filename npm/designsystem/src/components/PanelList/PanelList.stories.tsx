import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import GridExample from '../GridExample';
import Panel, { PanelVariant } from '../Panel';
import PanelList from '../PanelList';

export default {
  title: 'Components/PanelList',
  component: PanelList,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg kunne ta stilling til flere paneler med informasjon i en liste slik at jeg effektivt kan scanne gjennom nøkkelinformasjon for elementer i listen og gjennomføre mine oppgaver.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: PanelVariant,
      defaultValue: PanelVariant.fill,
    },
  },
} as ComponentMeta<typeof PanelList>;

export const Default: ComponentStory<typeof PanelList> = (args: any) => (
  <GridExample>
    <PanelList {...args}>
      <Panel title="Overskrift 1">
        {
          'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
        }
      </Panel>
      <Panel title="Overskrift 2">
        {
          'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
        }
      </Panel>
      <Panel title="Overskrift 3">
        {
          'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
        }
      </Panel>
      <Panel title="Overskrift 4">
        {
          'Syk og ønsker legetime? Hvis fastlegen din tilbyr videotimer på Helsenorge, kan det være et godt alternativ. Da slipper du å møte opp fysisk på legekontoret.'
        }
      </Panel>
    </PanelList>
  </GridExample>
);
