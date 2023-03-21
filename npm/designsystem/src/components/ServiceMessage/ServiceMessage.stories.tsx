import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ServiceMessage from './ServiceMessage';
import GridExample from '../GridExample';

export default {
  title: 'Components/ServiceMessage',
  component: ServiceMessage,
  parameters: {
    docs: {
      description: {
        component:
          'En ServiceMessage lar deg vise viktig informasjon avskilt fra bakgrunnen med ulike farger og ikoner. Tiltenkt for å vise driftsmeldinger',
      },
    },
  },
  argTypes: {
    dismissable: {
      control: 'boolean',
      defaultValue: false,
    },
    variant: {
      control: 'select',
      options: ['info', 'warn', 'alert'],
      defaultValue: 'alert',
    },
  },
} as ComponentMeta<typeof ServiceMessage>;

export const AsServiceMessage: ComponentStory<typeof ServiceMessage> = args => (
  <GridExample container={false}>
    <ServiceMessage
      {...args}
      serviceMessageLabel={'Driftsmelding'}
      serviceMessageInfo={
        'Her er det noe som dessverre ikke stemmer i våre systemer. Prøv igjen senere!  Vi jobber hard for å løse problemet for deg.'
      }
      onDismiss={(): number => 0}
      serviceMessageExtraInfo={'Alternativ ekstrainformasjon som må skrives kan legges inn her.'}
      serviceMessageCloseBtnText="Lukk"
      serviceMessageReadMoreText="Les mer om dette her"
      serviceMessageReadMoreUrl="/"
      expanderOpenFromStart
    />
    <ServiceMessage {...args} serviceMessageLabel={'Systemet er nede'} onDismiss={(): number => 0} serviceMessageReadMoreUrl="/" />
  </GridExample>
);
