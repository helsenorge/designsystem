import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import SharingStatus from './SharingStatus';
import GridExample from '../GridExample';
import Eye from '../Icons/Eye';
import Globe from '../Icons/Globe';
import Group from '../Icons/Group';
import NoEye from '../Icons/NoEye';
import Spacer from '../Spacer';

export default {
  title: '@helsenorge∕designsystem-react/Components/SharingStatus',
  component: SharingStatus,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg tydelig kunne se hvem som har tilgang til enkelte av mine tjenester (ved fullmakt eller pga ungdomsrettigheter) og enkelt-dokumenter/resepter/mm, slik at jeg blir påminnet om hvilke delingsforhold som gjelder og ikke forveksler statusmeldinger med delingsstatuser.',
      },
    },
  },
  argTypes: {
    text: {
      control: 'text',
    },
    wrapText: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof SharingStatus>;

export const Default: ComponentStory<typeof SharingStatus> = (args: any) => (
  <GridExample>
    <SharingStatus icon={Eye} {...args} />
  </GridExample>
);

export const WrapText: ComponentStory<typeof SharingStatus> = (args: any) => (
  <GridExample>
    <SharingStatus icon={Eye} wrapText={false} text="Wrap text satt til false Labore sunt eiusmod duis ut. " {...args} />
    <Spacer size="m" />{' '}
    <div style={{ maxWidth: '13.8rem' }}>
      <SharingStatus icon={Eye} text="Wrap text satt til true Irure irure sit ut." {...args} wrapText={true} />
    </div>
  </GridExample>
);

export const DifferentIcons: ComponentStory<typeof SharingStatus> = (args: any) => (
  <GridExample>
    <SharingStatus icon={Eye} wrapText={false} text="Eye" {...args} />
    <Spacer size="m" /> <SharingStatus icon={NoEye} wrapText={false} text="NoEye" {...args} />
    <Spacer size="m" /> <SharingStatus icon={Group} wrapText={false} text="Group" {...args} />
    <Spacer size="m" /> <SharingStatus icon={Globe} wrapText={false} text="Globe" {...args} />
    <Spacer size="m" />{' '}
  </GridExample>
);

export const AllColors: ComponentStory<typeof SharingStatus> = (args: any) => (
  <GridExample>
    <SharingStatus icon={Eye} color={'kiwi'} text="Kiwi" {...args} />
    <Spacer size="m" />
    <SharingStatus icon={Eye} color={'cherry'} text="Cherry" {...args} />
    <Spacer size="m" />
    <SharingStatus icon={Eye} color={'neutral'} text="Neutral" {...args} />
    <Spacer size="m" />
    <SharingStatus icon={Eye} color={'blueberry'} text="Blueberry" {...args} />
    <Spacer size="m" />
    <SharingStatus icon={Eye} color={'banana'} text="Banana" {...args} />
  </GridExample>
);
