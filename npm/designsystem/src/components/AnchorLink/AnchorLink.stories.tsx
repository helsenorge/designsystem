import React from 'react';

import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import AnchorLink from './AnchorLink';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/AnchorLink',
  component: AnchorLink,
  parameters: {
    docs: {
      description: {
        component:
          'AnchorLink kan bli brukt som et komponent for \\<a\\> tag eller \\<button\\> tag som skal ha en anchorlink styling.<br>.anchorlink-wrapper kan også bli brukt når det ikke er kontroll over markup som kommer inn.',
      },
    },
  },
  args: {
    children: 'Anchorlink tekst',
    href: '/test',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
  },
} satisfies Meta<typeof AnchorLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <>
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
    </>
  ),
};

export const External: Story = {
  render: args => (
    <>
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
    </>
  ),
};

export const AsButton: Story = {
  render: args => (
    <p style={{ fontSize: '1.25rem' }}>
      Dette er først en{' '}
      <AnchorLink htmlMarkup={'a'} onClick={action('AnchorLink clicked!')} {...args}>
        vanlig lenke i løpende tekst
      </AnchorLink>{' '}
      og nå kommer en
      <AnchorLink htmlMarkup={'button'} onClick={action('AnchorLink clicked!')} {...args}>
        button-lenke i løpende tekst som går over flere linjer
      </AnchorLink>{' '}
      og til slutt en{' '}
      <AnchorLink htmlMarkup={'button'} onClick={action('AnchorLink clicked!')} {...args}>
        kort
      </AnchorLink>{' '}
      button-lenke
    </p>
  ),
};
