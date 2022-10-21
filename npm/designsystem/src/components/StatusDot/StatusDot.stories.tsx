import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import StatusDot, { StatusDotVariant } from './StatusDot';
import GridExample from '../GridExample';

export default {
  title: 'Components/StatusDot',
  component: StatusDot,
  argTypes: {
    variant: {
      control: 'select',
      options: StatusDotVariant,
      defaultValue: StatusDotVariant.info,
    },
    text: {
      control: 'text',
      defaultValue: 'StatusDot label',
    },
  },
} as ComponentMeta<typeof StatusDot>;

export const Default: ComponentStory<typeof StatusDot> = (args: any) => (
  <GridExample>
    <StatusDot {...args} />
  </GridExample>
);

export const AllVariants: ComponentStory<typeof StatusDot> = () => (
  <GridExample>
    <p>{'info'}</p>
    <StatusDot variant={StatusDotVariant.info} text="Info" />
    <p>{'warning'}</p>
    <StatusDot variant={StatusDotVariant.warning} text="Warning" />
    <p>{'alert'}</p>
    <StatusDot variant={StatusDotVariant.alert} text="Alert" />
    <p>{'cancelled'}</p>
    <StatusDot variant={StatusDotVariant.cancelled} text="Cancelled" />
    <p>{'active'}</p>
    <StatusDot variant={StatusDotVariant.active} text="Active" />
    <p>{'transparent'}</p>
    <StatusDot variant={StatusDotVariant.transparent} text="Transparent" />
    <p>{'recurring'}</p>
    <StatusDot variant={StatusDotVariant.recurring} text="Recurring" />
    <p>{'group'}</p>
    <StatusDot variant={StatusDotVariant.group} text="Group" />
    <p>{'no access'}</p>
    <StatusDot variant={StatusDotVariant.noaccess} text="No Access" />
    <p>{'info no text'}</p>
    <StatusDot variant={StatusDotVariant.info} text="" />
  </GridExample>
);
