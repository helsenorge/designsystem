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
      label={'Driftsmelding'}
      info={'Her er det noe som dessverre ikke stemmer i våre systemer. Prøv igjen senere!  Vi jobber hard for å løse problemet for deg.'}
      onDismiss={(): number => 0}
      extraInfo={'Alternativ ekstrainformasjon som må skrives kan legges inn her.'}
      closeBtnText="Lukk"
      urlTitle="Les mer om dette her"
      url="/"
      expanderOpenFromStart
    />
    <ServiceMessage {...args} label={'Systemet er nede'} onDismiss={(): number => 0} url="/" />
  </GridExample>
);
