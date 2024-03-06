import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import SharingStatus from './SharingStatus';
import GridExample from '../GridExample';
import Eye from '../Icons/Eye';
import Globe from '../Icons/Globe';
import Group from '../Icons/Group';
import NoEye from '../Icons/NoEye';
import Spacer from '../Spacer';

const meta = {
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
  args: {
    children: 'SharingStatus',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    wrapText: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof SharingStatus>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Eye,
  },
  render: args => (
    <GridExample>
      <SharingStatus {...args} />
    </GridExample>
  ),
};

export const WrapText: Story = {
  args: {
    icon: Eye,
  },
  render: args => (
    <GridExample>
      <SharingStatus {...args} wrapText={false}>
        {'Wrap text satt til false Labore sunt eiusmod duis ut. '}
      </SharingStatus>
      <Spacer size="m" />{' '}
      <div style={{ maxWidth: '13.8rem' }}>
        <SharingStatus {...args} wrapText={true}>
          {'Wrap text satt til true Labore sunt eiusmod duis ut. '}
        </SharingStatus>
      </div>
    </GridExample>
  ),
};

export const DifferentIcons: Story = {
  args: {
    icon: Eye,
  },
  render: args => (
    <GridExample>
      <SharingStatus {...args} wrapText={false}>
        {'Eye'}
      </SharingStatus>
      <Spacer size="m" />{' '}
      <SharingStatus {...args} icon={NoEye} wrapText={false}>
        {'NoEye'}
      </SharingStatus>
      <Spacer size="m" />{' '}
      <SharingStatus {...args} icon={Group} wrapText={false}>
        {'Group'}
      </SharingStatus>
      <Spacer size="m" />{' '}
      <SharingStatus {...args} icon={Globe} wrapText={false}>
        {'Globe'}
      </SharingStatus>
    </GridExample>
  ),
};

export const AllColors: Story = {
  args: {
    icon: Eye,
  },
  render: args => (
    <GridExample>
      <SharingStatus {...args} color={'kiwi'}>
        {'Kiwi'}
      </SharingStatus>
      <Spacer size="m" />
      <SharingStatus {...args} color={'cherry'}>
        {'Cherry'}
      </SharingStatus>
      <Spacer size="m" />
      <SharingStatus {...args} color={'neutral'}>
        {'Neutral'}
      </SharingStatus>
      <Spacer size="m" />
      <SharingStatus {...args} color={'blueberry'}>
        {'Blueberry'}
      </SharingStatus>
      <Spacer size="m" />
      <SharingStatus {...args} color={'banana'}>
        {'Banana'}
      </SharingStatus>
    </GridExample>
  ),
};
