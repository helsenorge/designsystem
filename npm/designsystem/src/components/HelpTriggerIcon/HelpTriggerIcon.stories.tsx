import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import HelpTriggerIcon, { HelpTriggerIconProps } from './HelpTriggerIcon';
import Title from '../Title';

const meta = {
  title: '@helsenorge/designsystem-react/Components/HelpTriggerIcon',
  component: HelpTriggerIcon,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs
          component={HelpTriggerIcon}
          supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/help-trigger-icon/bruk-o4PKfguM"
        />
      ),
      description: {
        component:
          'HelpTriggerIcon lar innbygger se at hjelp finnes for et område eller en detalj, og tillater innbygger å be om hjelp ved behov. Brukes der hvor innbygger skal kunne be om assistanse”',
      },
    },
    controls: {
      exclude: ['htmlMarkup'],
    },
  },
  args: {
    ariaLabel: 'Aria text',
  },
  argTypes: {
    ariaLabel: {
      control: 'text',
    },
    ariaLabelledById: {
      control: 'text',
    },
    'aria-expanded': {
      control: 'boolean',
    },
    'aria-haspopup': {
      control: 'boolean',
    },
    'aria-controls': {
      control: 'text',
    },
    size: {
      control: 'select',
      options: ['inherit', 'medium', 'large', 'xlarge'],
    },
  },
} satisfies Meta<typeof HelpTriggerIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: HelpTriggerIconProps) => <HelpTriggerIcon {...args} onClick={action('Trigger clicked!')} />,
};

export const Sizes: Story = {
  render: (args: HelpTriggerIconProps) => (
    <>
      <Title appearance="title3" htmlMarkup="h1">
        {'Inherit'}
      </Title>
      <p style={{ fontSize: '18px' }}>
        {'Laborum eu commodo qui pariatur irure exercitation duis id qui proident nisi nulla aliquip veniam '}
        <HelpTriggerIcon {...args} onClick={action('Trigger clicked!')} size="inherit" />
        {' Laborum eu commodo qui pariatur irure exercitation duis id qui proident nisi nulla aliquip veniam'}
      </p>
      <p style={{ fontSize: '26px' }}>
        {'Laborum eu commodo qui pariatur irure exercitation duis id qui proident nisi nulla aliquip veniam '}
        <HelpTriggerIcon {...args} onClick={action('Trigger clicked!')} size="inherit" />
        {' Cillum quis sit reprehenderit adipisicing labore.'}
      </p>
      <br />
      <br />
      <Title appearance="title3" htmlMarkup="h1">
        {'Medium'}
      </Title>
      <p style={{ fontSize: '18px' }}>{'Ad dolor Lorem cupidatat dolor ipsum elit fugiat.'}</p>
      <HelpTriggerIcon {...args} onClick={action('Trigger clicked!')} size="medium" />
      <br />
      <br />
      <Title appearance="title3" htmlMarkup="h1">
        {'Large'}
      </Title>
      <HelpTriggerIcon {...args} onClick={action('Trigger clicked!')} size="large" />
      <br />
      <br />
      <Title appearance="title3" htmlMarkup="h1">
        {'xlarge'}
      </Title>
      <HelpTriggerIcon {...args} onClick={action('Trigger clicked!')} size="xlarge" />
    </>
  ),
};

export const Weights: Story = {
  render: (args: HelpTriggerIconProps) => (
    <>
      <HelpTriggerIcon {...args} onClick={action('Trigger clicked!')} weight="normal" />
      <br />
      <HelpTriggerIcon {...args} onClick={action('Trigger clicked!')} weight="strong" />
    </>
  ),
};
