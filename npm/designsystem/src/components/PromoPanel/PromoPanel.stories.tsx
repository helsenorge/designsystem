/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import PromoPanel from './PromoPanel';
import GridExample from '../GridExample';

export default {
  title: '@helsenorge∕designsystem-react/Components/PromoPanel',
  component: PromoPanel,
  parameters: {
    docs: {
      description: {
        component:
          'Som en innbygger vil jeg kunne gjøres spesielt oppmerksom på inngang til vesentlig innhold på en annen side som er relevant for meg på den siden jeg befinner meg.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Fastlegen din',
    },
    children: {
      control: 'text',
      defaultValue: 'Se hvilke tjenester fastlegen og kommunen tilbyr',
    },
    href: {
      control: 'text',
      defaultValue: '/',
    },
    color: {
      control: 'select',
      options: ['neutral', 'blueberry', 'cherry'],
      defaultValue: 'neutral',
    },
  },
} as ComponentMeta<typeof PromoPanel>;

export const Default: ComponentStory<typeof PromoPanel> = (args: any) => (
  <GridExample>
    <PromoPanel {...args} />
  </GridExample>
);

export const CustomLinkComponent: ComponentStory<typeof PromoPanel> = (args: any) => (
  <GridExample>
    <PromoPanel {...args} linkComponent={<a href="/testest" />} />
  </GridExample>
);
