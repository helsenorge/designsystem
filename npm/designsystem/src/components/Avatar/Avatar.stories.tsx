import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar, { AvatarSize } from './Avatar';
import GridExample from '../GridExample';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component:
          'Avatar lar innbygger oppfatte en representasjon, f.eks. hvem man er logget inn som, hvem man handler på vegne av eller hvem som er avsender eller mottaker av en melding',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Line Danser',
    },
    selected: {
      control: 'boolean',
      defaultValue: false,
    },
    size: {
      control: 'select',
      options: AvatarSize,
      defaultValue: AvatarSize.small,
    },
  },
} as ComponentMeta<typeof Avatar>;

export const Default: ComponentStory<typeof Avatar> = (args: any) => (
  <GridExample>
    <Avatar {...args}>{args.children}</Avatar>
  </GridExample>
);

export const Inverted: ComponentStory<typeof Avatar> = (args: any) => (
  <GridExample>
    <Avatar {...args} variant={'black'}>
      {args.children}
    </Avatar>
  </GridExample>
);
