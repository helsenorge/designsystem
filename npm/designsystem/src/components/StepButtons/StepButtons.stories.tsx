import React from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import StepButtons from './StepButtons';
import Button from '../Button';
import GridExample from '../GridExample';

export default {
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
} as ComponentMeta<typeof StepButtons>;

export const Default: ComponentStory<typeof StepButtons> = args => {
  return (
    <GridExample>
      <StepButtons
        {...args}
        backButton={<Button>{'Tilbake'}</Button>}
        forwardButton={<Button>{'Neste'}</Button>}
        cancelButton={<Button>{'Avbryt'}</Button>}
      />
    </GridExample>
  );
};

export const AdditionalButtons: ComponentStory<typeof StepButtons> = args => {
  return (
    <GridExample>
      <StepButtons
        {...args}
        backButton={<Button onClick={action('Tilbake')}>{'Tilbake'}</Button>}
        forwardButton={<Button onClick={action('Neste')}>{'Neste'}</Button>}
        cancelButton={<Button onClick={action('Avbryt')}>{'Avbryt'}</Button>}
        additionalButtons={[
          <Button onClick={action('Valgfri knapp')} key="valgfri2" variant="outline" concept="destructive">
            {'Fjern'}
          </Button>,
        ]}
      />
    </GridExample>
  );
};
