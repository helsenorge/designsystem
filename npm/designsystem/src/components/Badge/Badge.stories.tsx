import React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import Badge from './Badge';
import Title from '../Title';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={Badge} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/badge/bruk-TCKiSYLz" />
      ),
      description: {
        component:
          'Badge [Markør] lar innbygger oppfatte at det er et antall nye elementer som har kommet til i et område siden sist gang innbygger besøkte området.',
      },
    },
  },
  args: {
    children: 'Tekst',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['blueberry', 'cherry', 'neutral'],
    },
    type: {
      control: 'select',
      options: ['string', 'notification'],
    },
    notificationVariant: {
      control: 'select',
      options: ['success', 'warn', 'error', 'info'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Badge {...args} />,
};

export const Colors: Story = {
  render: args => (
    <>
      <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
        {'Colors'}
      </Title>
      <br />
      <Badge color="blueberry">{args.children}</Badge>
      <br />
      <Badge color="cherry">{args.children}</Badge>
      <br />
      <Badge color="neutral">{args.children}</Badge>
    </>
  ),
};

export const Notification: Story = {
  render: () => (
    <>
      <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
        {'Notification variants'}
      </Title>
      <br />
      <Badge type="notification" notificationVariant="info" />
      <br />
      <Badge type="notification" notificationVariant="warn" />
      <br />
      <Badge type="notification" notificationVariant="error" />
      <br />
      <Badge type="notification" notificationVariant="success" />
    </>
  ),
};
