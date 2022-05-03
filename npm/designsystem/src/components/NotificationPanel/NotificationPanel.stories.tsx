import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import NotificationPanel from './NotificationPanel';

export default {
  title: 'NotificationPanel',
  component: NotificationPanel,
  argTypes: {
    shadow: {
      control: 'boolean',
      defaultValue: false,
    },
    dismissable: {
      control: 'boolean',
      defaultValue: false,
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'large',
    },
    fluid: {
      control: 'boolean',
      defaultValue: false,
    },
    label: {
      control: 'text',
      defaultValue: 'Det har skjedd noe galt. Prøv igjen senere.',
    },
    variant: {
      control: 'select',
      options: ['info', 'warn', 'alert', 'crisis'],
      defaultValue: 'alert',
    },
  },
} as ComponentMeta<typeof NotificationPanel>;

export const Default: ComponentStory<typeof NotificationPanel> = (args: any) => (
  <div style={{ width: args.fluid ? '100vw' : '1400px' }}>
    <NotificationPanel {...args}>
      {`På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis utilgjenglig i en periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å prøve igjen senere. `}
      <a href="/test" target="_blank" rel="noopener noreferrer">
        {'Les mer'}
      </a>
    </NotificationPanel>
  </div>
);

export const SimplifiedLabelOnly: ComponentStory<typeof NotificationPanel> = (args: any) => (
  <div style={{ width: args.fluid ? '100vw' : '80rem' }}>
    <NotificationPanel {...args} />
  </div>
);

export const AllVariants: ComponentStory<typeof NotificationPanel> = (args: any) => (
  <div className="container">
    <div className="row">
      <div className={'col-12'}>
        <NotificationPanel {...args} variant={'info'}>
          <p>
            {`På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis utilgjenglig i en
            periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å prøve igjen senere.`}
            <a href="/">{'Les mer om dine rettigheter her.'}</a>
          </p>
        </NotificationPanel>
      </div>
    </div>
    <div className="row mt-6">
      <div className={'col-12'}>
        <NotificationPanel {...args} variant={'warn'}>
          <p>
            {`På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis utilgjenglig i en
            periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å prøve igjen senere. `}
            <a href="/" target="_blank" rel="noopener noreferrer">
              {'Les mer om dine rettigheter her (external).'}
            </a>
          </p>
        </NotificationPanel>
      </div>
    </div>
    <div className="row mt-6">
      <div className={'col-12'}>
        <NotificationPanel {...args} variant={'alert'}>
          <p>
            {`På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis utilgjenglig i en
            periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å prøve igjen senere. `}
            <a href="/">{'Les mer om dine rettigheter her.'}</a>
          </p>
        </NotificationPanel>
      </div>
    </div>
    <div className="row mt-6">
      <div className={'col-12'}>
        <NotificationPanel {...args} variant={'crisis'}>
          <p>
            {`På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis utilgjenglig i en
            periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å prøve igjen senere. `}
            <a href="/" target="_blank" rel="noopener noreferrer">
              {'Les mer om dine rettigheter her.'}
            </a>
          </p>
        </NotificationPanel>
      </div>
    </div>
  </div>
);
