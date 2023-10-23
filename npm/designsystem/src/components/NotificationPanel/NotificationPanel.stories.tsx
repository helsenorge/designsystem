import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import NotificationPanel from './NotificationPanel';
import { getColor } from '../../theme/currys';
import GridExample from '../GridExample';

export default {
  title: '@helsenorge∕designsystem-react/Components/NotificationPanel',
  component: NotificationPanel,
  parameters: {
    docs: {
      description: {
        component: 'Et NotificationPanel lar deg vise viktig informasjon avskilt fra bakgrunnen med ulike farger og ikoner',
      },
    },
  },
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
      options: ['info', 'warn', 'alert'],
      defaultValue: 'alert',
    },
    role: {
      control: 'select',
      options: ['', 'alert', 'region'],
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof NotificationPanel>;

export const Default: ComponentStory<typeof NotificationPanel> = (args: any) => (
  <GridExample>
    <NotificationPanel {...args} label="Label only"></NotificationPanel>
  </GridExample>
);

export const WithoutLabel: ComponentStory<typeof NotificationPanel> = (args: any) => (
  <GridExample>
    <NotificationPanel {...args}>
      <span>{'Eksempel med label'}</span>
    </NotificationPanel>
    <br />
    <NotificationPanel {...args} label={undefined}>
      <span>{'Eksempel uten label. Nå får innhold en font-vekt som ligner mer på label'}</span>
    </NotificationPanel>
    <br />
    <NotificationPanel
      {...args}
      label={undefined}
      expanderChildren={'Dette er innhold i expanderen. Det vises først når man trykker på knappen.'}
      expanderButtonText="Vis mindre"
      expanderButtonClosedText="Vis mer"
    >
      <span>{'Eksempel uten label. Nå får innhold en font-vekt som ligner mer på label'}</span>
    </NotificationPanel>
  </GridExample>
);

export const AllVariants: ComponentStory<typeof NotificationPanel> = (args: any) => (
  <GridExample>
    <div className="row">
      <div className={'col-12'}>
        <NotificationPanel {...args} variant={'info'}>
          <div>
            {`På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis utilgjenglig i en
            periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å prøve igjen senere.`}
            <a href="/">{'Les mer om dine rettigheter her.'}</a>
          </div>
        </NotificationPanel>
      </div>
    </div>
    <div className="row mt-6">
      <div className={'col-12'}>
        <NotificationPanel {...args} variant={'warn'}>
          <div>
            {`På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis utilgjenglig i en
            periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å prøve igjen senere. `}
            <a href="/" target="_blank" rel="noopener noreferrer">
              {'Les mer om dine rettigheter her (external).'}
            </a>
          </div>
        </NotificationPanel>
      </div>
    </div>
    <div className="row mt-6">
      <div className={'col-12'}>
        <NotificationPanel {...args} variant={'alert'}>
          <div>
            {`På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis utilgjenglig i en
            periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å prøve igjen senere. `}
            <a href="/">{'Les mer om dine rettigheter her.'}</a>
          </div>
        </NotificationPanel>
      </div>
    </div>
    <div className="row mt-6">
      <div className={'col-12'}>
        <NotificationPanel {...args} variant={'success'}>
          <div>
            {`På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis utilgjenglig i en
            periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å prøve igjen senere. `}
            <a href="/">{'Les mer om dine rettigheter her.'}</a>
          </div>
        </NotificationPanel>
      </div>
    </div>
  </GridExample>
);
export const Expander: ComponentStory<typeof NotificationPanel> = (args: any) => (
  <GridExample>
    <div className="row mt-6">
      <div className={'col-12'}>
        <NotificationPanel
          {...args}
          label={'Med expander'}
          expanderChildren={'Dette er innhold i expanderen. Det vises først når man trykker på knappen.'}
          expanderButtonText="Vis mindre"
          expanderButtonClosedText="Vis mer"
        >
          {'Dette er innhold'}
        </NotificationPanel>
      </div>
    </div>
    <div className="row mt-6">
      <div className={'col-12'}>
        <NotificationPanel
          {...args}
          label={'Med expander'}
          expanderChildren={'Dette er innhold i expanderen. Dette innholdet er åpnet fra start'}
          expanderButtonText="Vis mindre"
          expanderButtonClosedText="Vis mer"
          expanderOpenFromStart
        >
          {'Dette er innhold'}
        </NotificationPanel>
      </div>
    </div>
  </GridExample>
);
export const Dismissable: ComponentStory<typeof NotificationPanel> = (args: any) => (
  <GridExample>
    <NotificationPanel {...args} label={'Dismissable'} dismissable>
      {'Dette er dismissesable'}
    </NotificationPanel>
  </GridExample>
);
export const Compact: ComponentStory<typeof NotificationPanel> = (args: any) => (
  <GridExample>
    <div style={{ backgroundColor: getColor('blueberry', 50), padding: '3rem' }}>
      <div className="row mt-6">
        <div className={'col-12'}>
          <NotificationPanel {...args} label={'Compact - basic'} compactVariant={'basic'}></NotificationPanel>{' '}
        </div>
      </div>
      <div className="row mt-6">
        <div className={'col-12'}>
          <NotificationPanel {...args} label={'Compact - outline'} compactVariant={'outline'}></NotificationPanel>
        </div>
      </div>
    </div>
  </GridExample>
);
export const WithSetWidth: ComponentStory<typeof NotificationPanel> = (args: any) => (
  <GridExample>
    <div className="row mt-6">
      <div className={'col-12'}>
        <NotificationPanel {...args} size="small" label={'Size: small'}></NotificationPanel>{' '}
      </div>
    </div>
    <div className="row mt-6">
      <div className={'col-12'}>
        <NotificationPanel {...args} size="medium" label={'Size: medium'}></NotificationPanel>
      </div>
    </div>
    <div className="row mt-6">
      <div className={'col-12'}>
        <NotificationPanel {...args} size="large" label={'Size: large'}></NotificationPanel>
      </div>
    </div>
  </GridExample>
);
