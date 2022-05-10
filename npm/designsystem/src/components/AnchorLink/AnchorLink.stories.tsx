import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import AnchorLink from './AnchorLink';

export default {
  title: 'Components/AnchorLink',
  component: AnchorLink,
  argTypes: {
    children: {
      control: 'text',
      defaultValue: 'Anchorlink tekst',
    },
    href: {
      control: 'text',
      defaultValue: '/test',
    },
  },
} as ComponentMeta<typeof AnchorLink>;

export const Default: ComponentStory<typeof AnchorLink> = (args: any) => (
  <div style={{ width: '20rem' }}>
    <AnchorLink {...args} target={'_self'}>
      {args.children}
    </AnchorLink>
    <br />
    <br />
    <AnchorLink {...args} target={'_self'}>
      {
        'Eiusmod veniam reprehenderit dolore magna tempor dolor reprehenderit reprehenderit ullamco sit in nulla qui. (Lang tekst - Skal wrappe).'
      }
    </AnchorLink>
  </div>
);

export const External: ComponentStory<typeof AnchorLink> = (args: any) => (
  <div style={{ width: '20rem' }}>
    <AnchorLink {...args} target={'_blank'}>
      {args.children}
    </AnchorLink>
    <br />
    <br />
    <AnchorLink {...args} target={'_blank'}>
      {
        'Eiusmod veniam reprehenderit dolore magna tempor dolor reprehenderit reprehenderit ullamco sit in nulla qui. (Lang tekst - Skal wrappe).'
      }
    </AnchorLink>
  </div>
);
