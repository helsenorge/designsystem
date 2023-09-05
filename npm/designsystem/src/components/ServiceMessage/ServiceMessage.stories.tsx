import React from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ServiceMessage from './ServiceMessage';

export default {
  title: 'Components/ServiceMessage',
  component: ServiceMessage,
  parameters: {
    docs: {
      description: {
        component:
          'ServiceMessage lar brukeren velge et av flere valg i en liste. ServiceMessage kan brukes frittstående, som en del av en FormGroup eller direkte i et Validation komponent.',
      },
    },
  },

  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'ServiceMessage label',
    },
    info: {
      control: 'text',
      defaultValue: 'Nedetid for østre-aker',
    },
    extraInfo: {
      control: 'text',
      defaultValue: 'Ring 08400 for mer informasjon',
    },
    dismissable: {
      control: 'boolean',
      defaultValue: true,
    },
    expanderOpenFromStart: {
      control: 'boolean',
      defaultValue: true,
    },
    urlTitle: {
      control: 'text',
      defaultValue: 'Du kan henvises fra sykehuset eller fra din fastlege (helsedirektoratet.no)',
    },
    url: {
      control: 'text',
      defaultValue: '/',
    },
    target: {
      control: 'select',
      options: ['_self', '_blank', '_parent'],
      defaultValue: '_self',
    },
    closeBtnText: {
      control: 'text',
      defaultValue: 'fjern melding',
    },
    variant: {
      control: 'select',
      options: ['info', 'warn', 'alert', 'success'],
      defaultValue: 'alert',
    },
    testId: {
      control: 'text',
      defaultValue: 'test',
    },
    first: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof ServiceMessage>;

export const Default: ComponentStory<typeof ServiceMessage> = (args: any) => (
  <>
    <ServiceMessage {...args} />
    <ServiceMessage {...args} expanderOpenFromStart={false} />
    <ServiceMessage {...args} expanderOpenFromStart={false} variant="info" />
    <ServiceMessage {...args} expanderOpenFromStart={false} variant="success" />
    <ServiceMessage {...args} expanderOpenFromStart={false} variant="warn" />
  </>
);
export const ReadMore: ComponentStory<typeof ServiceMessage> = (args: any) => <ServiceMessage {...args} dismissable={false} />;
export const DismissableWithContent: ComponentStory<typeof ServiceMessage> = (args: any) => (
  <ServiceMessage
    label={'Dismissable with content'}
    info="You can dismiss!"
    extraInfo="If you like"
    url={undefined}
    urlTitle={undefined}
    dismissable={true}
    onDismiss={action('Dismiss clicked')}
  />
);
export const DismissableLabelOnly: ComponentStory<typeof ServiceMessage> = (args: any) => (
  <ServiceMessage label={'Dismissable label only'} variant="alert" dismissable={true} onDismiss={action('Dismiss clicked')} />
);

export const LabelOnly: ComponentStory<typeof ServiceMessage> = (args: any) => (
  <ServiceMessage label={'Label only'} variant="alert" dismissable={false} />
);
