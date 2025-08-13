import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import NotificationPanel from './NotificationPanel';
import { allTitleTags } from '../../../.storybook/knobs';
import { getColor } from '../../theme/currys';

const meta = {
  title: '@helsenorge/designsystem-react/Components/NotificationPanel',
  component: NotificationPanel,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs
          component={NotificationPanel}
          supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/notification-panel/bruk-ZWQpRl7n"
        />
      ),
      description: {
        component: 'Et NotificationPanel lar deg vise viktig informasjon avskilt fra bakgrunnen med ulike farger og ikoner',
      },
    },
  },
  args: {
    label: 'Label',
    children: 'Innhold',
  },
  argTypes: {
    dismissable: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    fluid: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    labelHtmlMarkup: {
      control: 'select',
      options: allTitleTags,
    },
    variant: {
      control: 'select',
      options: ['info', 'warn', 'error', 'success'],
    },
    role: {
      control: 'select',
      options: ['', 'status', 'alert', 'region'],
    },
  },
} satisfies Meta<typeof NotificationPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <NotificationPanel {...args}>{args.children}</NotificationPanel>,
};

export const WithoutLabel: Story = {
  render: args => (
    <>
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
    </>
  ),
};

export const AllVariants: Story = {
  render: args => (
    <>
      <div className="row">
        <div className={'col-12'}>
          <NotificationPanel {...args} variant={'info'}>
            <div>
              {`På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis utilgjenglig i en
              periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å prøve igjen senere.`}
              <a href={'https://www.helsenorge.no'} target="_parent">
                {'Les mer om dine rettigheter her.'}
              </a>
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
              <a href={'https://www.helsenorge.no'} target="_blank" rel="noopener noreferrer">
                {'Les mer om dine rettigheter her (external).'}
              </a>
            </div>
          </NotificationPanel>
        </div>
      </div>
      <div className="row mt-6">
        <div className={'col-12'}>
          <NotificationPanel {...args} variant={'error'}>
            <div>
              {`På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis utilgjenglig i en
              periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å prøve igjen senere. `}
              <a href={'https://www.helsenorge.no'} target="_parent">
                {'Les mer om dine rettigheter her.'}
              </a>
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
              <a href={'https://www.helsenorge.no'} target="_parent">
                {'Les mer om dine rettigheter her.'}
              </a>
            </div>
          </NotificationPanel>
        </div>
      </div>
    </>
  ),
};

export const Expander: Story = {
  render: args => (
    <>
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
    </>
  ),
};
export const Dismissable: Story = {
  render: args => (
    <NotificationPanel {...args} label={'Dismissable'} dismissable>
      {'Dette er dismissesable'}
    </NotificationPanel>
  ),
};

export const Compact: Story = {
  render: args => (
    <div style={{ padding: '3rem' }}>
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
  ),
};

export const CompactWithChildren: Story = {
  render: args => (
    <div style={{ backgroundColor: getColor('blueberry', 50), padding: '3rem' }}>
      <div className="row mt-6">
        <div className={'col-12'}>
          <NotificationPanel {...args} label={undefined} compactVariant={'basic'}>
            <div>
              {`På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis utilgjenglig i en
              periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å prøve igjen senere.`}
              <a href={'https://www.helsenorge.no'} target="_parent">
                {'Les mer om dine rettigheter her.'}
              </a>
            </div>
          </NotificationPanel>{' '}
        </div>
      </div>
      <div className="row mt-6">
        <div className={'col-12'}>
          <NotificationPanel {...args} label={undefined} compactVariant={'outline'}>
            <div>
              {`På grunn av kommunesammenslåingen ved nyttår vil enkelte Helsenorge-tjenester være ustabile eller tidsvis utilgjenglig i en
              periode i begynnelsen av januar. Vi beklager ulempnene dette medfører og oppfordrer til å prøve igjen senere.`}
              <a href={'https://www.helsenorge.no'} target="_parent">
                {'Les mer om dine rettigheter her.'}
              </a>
            </div>
          </NotificationPanel>
        </div>
      </div>
    </div>
  ),
};

export const WithSetWidth: Story = {
  render: args => (
    <>
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
    </>
  ),
};
