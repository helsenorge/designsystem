import React, { Children } from 'react';

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
    children: {
      control: 'text',
      defaultValue: 'SharingStatus',
    },
    wrapText: {
      control: 'boolean',
    },
  },
} as ComponentMeta<typeof SharingStatus>;

export const Default: ComponentStory<typeof SharingStatus> = (args: any) => (
  <GridExample>
    <SharingStatus icon={Eye} {...args}>
      {args.children}
    </SharingStatus>
  </GridExample>
);

export const WrapText: ComponentStory<typeof SharingStatus> = (args: any) => (
  <GridExample>
    <SharingStatus icon={Eye} wrapText={false} {...args}>
      {'Wrap text satt til false Labore sunt eiusmod duis ut. '}
    </SharingStatus>
    <Spacer size="m" />{' '}
    <div style={{ maxWidth: '13.8rem' }}>
      <SharingStatus icon={Eye} {...args} wrapText={true}>
        {'Wrap text satt til true Labore sunt eiusmod duis ut. '}
      </SharingStatus>
    </div>
  </GridExample>
);

export const DifferentIcons: ComponentStory<typeof SharingStatus> = (args: any) => (
  <GridExample>
    <SharingStatus icon={Eye} wrapText={false} {...args}>
      {'Eye'}
    </SharingStatus>
    <Spacer size="m" />{' '}
    <SharingStatus icon={NoEye} wrapText={false} {...args}>
      {'NoEye'}
    </SharingStatus>
    <Spacer size="m" />{' '}
    <SharingStatus icon={Group} wrapText={false} {...args}>
      {'Group'}
    </SharingStatus>
    <Spacer size="m" />{' '}
    <SharingStatus icon={Globe} wrapText={false} {...args}>
      {'Globe'}
    </SharingStatus>
    <Spacer size="m" />{' '}
  </GridExample>
);

export const AllColors: ComponentStory<typeof SharingStatus> = (args: any) => (
  <GridExample>
    <SharingStatus icon={Eye} color={'kiwi'} {...args}>
      {'Kiwi'}
    </SharingStatus>
    <Spacer size="m" />
    <SharingStatus icon={Eye} color={'cherry'} {...args}>
      {'Cherry'}
    </SharingStatus>
    <Spacer size="m" />
    <SharingStatus icon={Eye} color={'neutral'} {...args}>
      {'Neutral'}
    </SharingStatus>
    <Spacer size="m" />
    <SharingStatus icon={Eye} color={'blueberry'} {...args}>
      {'Blueberry'}
    </SharingStatus>
    <Spacer size="m" />
    <SharingStatus icon={Eye} color={'banana'} {...args}>
      {'Banana'}
    </SharingStatus>
  </GridExample>
);
