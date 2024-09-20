import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import ServiceMessage from './ServiceMessage';

const meta = {
  title: '@helsenorge/designsystem-react/Components/ServiceMessage',
  component: ServiceMessage,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={ServiceMessage} />,
      description: {
        component:
          'ServiceMessage lar brukeren velge et av flere valg i en liste. ServiceMessage kan brukes frittstående, som en del av en FormGroup eller direkte i et Validation komponent.',
      },
    },
  },
  args: {
    label: 'ServiceMessage label',
    info: 'Nedetid for østre-aker',
    extraInfo: 'Ring 08400 for mer informasjon',
    dismissable: true,
    expanderOpenFromStart: true,
    urlTitle: 'Du kan henvises fra sykehuset eller fra din fastlege (helsedirektoratet.no)',
    url: 'https://www.helsenorge.no',
    target: '_parent',
    closeBtnText: 'fjern melding',
    variant: 'error',
    testId: 'test',
  },
  argTypes: {
    label: {
      control: 'text',
    },
    info: {
      control: 'text',
    },
    extraInfo: {
      control: 'text',
    },
    dismissable: {
      control: 'boolean',
    },
    expanderOpenFromStart: {
      control: 'boolean',
    },
    urlTitle: {
      control: 'text',
    },
    url: {
      control: 'text',
    },
    target: {
      control: 'select',
      options: ['_self', '_blank', '_parent'],
    },
    closeBtnText: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['info', 'warn', 'error', 'success'],
    },
    testId: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ServiceMessage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    expanderOpenFromStart: false,
  },
  render: args => (
    <>
      <ServiceMessage {...args} expanderOpenFromStart={true} />
      <ServiceMessage {...args} />
      <ServiceMessage {...args} variant="info" />
      <ServiceMessage {...args} variant="success" />
      <ServiceMessage {...args} variant="warn" />
    </>
  ),
};

export const ReadMore: Story = {
  render: args => <ServiceMessage {...args} dismissable={false} />,
};

export const DismissableWithContent: Story = {
  render: () => (
    <ServiceMessage
      label={'Dismissable with content'}
      info="You can dismiss!"
      extraInfo="If you like"
      url={undefined}
      urlTitle={undefined}
      dismissable={true}
      onDismiss={action('Dismiss clicked')}
    />
  ),
};
export const DismissableLabelOnly: Story = {
  render: () => (
    <ServiceMessage label={'Dismissable label only'} variant="error" dismissable={true} onDismiss={action('Dismiss clicked')} />
  ),
};

export const LabelOnly: Story = {
  render: () => <ServiceMessage label={'Label only'} variant="error" dismissable={false} />,
};
