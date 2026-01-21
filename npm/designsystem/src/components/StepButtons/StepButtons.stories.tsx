import type React from 'react';

import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { StoryObj, Meta } from '@storybook/react-vite';

import StepButtons from './StepButtons';
import Button from '../Button';

const meta = {
  title: '@helsenorge/designsystem-react/Components/StepButtons',
  component: StepButtons,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={StepButtons} />,
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
    return <StepButtons {...args} />;
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
    return <StepButtons {...args} />;
  },
};
