import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import StepButtons from './StepButtons';
import Button from '../Button';
import GridExample from '../GridExample';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/StepButtons',
  component: StepButtons,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av StepButtons',
      },
    },
  },
  argTypes: {},
} satisfies Meta<typeof StepButtons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    backButton: <Button>{'Tilbake'}</Button>,
    forwardButton: <Button>{'Neste'}</Button>,
    cancelButton: <Button>{'Avbryt'}</Button>,
  },
  render: args => {
    return (
      <GridExample>
        <StepButtons {...args} />
      </GridExample>
    );
  },
};

export const AdditionalButtons: Story = {
  args: {
    backButton: <Button>{'Tilbake'}</Button>,
    forwardButton: <Button>{'Neste'}</Button>,
    cancelButton: <Button>{'Avbryt'}</Button>,
    additionalButtons: [
      <Button onClick={action('Valgfri knapp')} key="valgfri2" variant="outline" concept="destructive">
        {'Fjern'}
      </Button>,
    ],
  },
  render: args => {
    return (
      <GridExample>
        <StepButtons {...args} />
      </GridExample>
    );
  },
};
