import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Step from './Step';
import Button from '../Button';
import GridExample from '../GridExample';
import Stepper from '../Stepper';

export default {
  title: 'Components/Step',
  component: Step,
  parameters: {
    docs: {
      description: {
        component: 'Stegvisning skal gi en konsistent ramme rundt navigasjon mellom 2 eller flere steg.',
      },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Step>;

const MIN = 1;
const MAX = 4;

const useStep = () => {
  const [currentStep, setCurrentStep] = useState(MIN);

  const back = (): void => {
    if (currentStep > MIN) {
      setCurrentStep(currentStep - 1);
    }
  };

  const forward = (): void => {
    if (currentStep < MAX) {
      setCurrentStep(currentStep + 1);
    }
  };

  return { currentStep, back, forward };
};

export const Default: ComponentStory<typeof Step> = args => {
  const { currentStep, back, forward } = useStep();

  return (
    <GridExample>
      <Step
        {...args}
        stepper={<Stepper min={MIN} max={MAX} value={currentStep} ariaLabel={`Steg ${currentStep}/${MAX}`} />}
        backButton={currentStep > MIN && currentStep < MAX ? <Button onClick={back}>{'Tilbake'}</Button> : undefined}
        forwardButton={currentStep < MAX ? <Button onClick={forward}>{currentStep < MAX ? 'Neste' : 'Ferdig'}</Button> : undefined}
        cancelButton={currentStep < MAX ? <Button>{'Avbryt'}</Button> : undefined}
      >
        <p>{currentStep < MAX ? 'Hei' : 'Ferdig!'}</p>
      </Step>
    </GridExample>
  );
};

export const AdditionalButtons: ComponentStory<typeof Step> = args => {
  const { currentStep, back, forward } = useStep();

  return (
    <GridExample>
      <Step
        {...args}
        stepper={<Stepper min={MIN} max={MAX} value={currentStep} ariaLabel={`Steg ${currentStep}/${MAX}`} />}
        backButton={currentStep > MIN ? <Button onClick={back}>{'Tilbake'}</Button> : undefined}
        forwardButton={currentStep < MAX ? <Button onClick={forward}>{currentStep < MAX ? 'Neste' : 'Ferdig'}</Button> : undefined}
        additionalButtons={[
          <Button onClick={action('Valgfri knapp')} key="valgfri2" variant="outline" concept="destructive">
            {'Fjern'}
          </Button>,
        ]}
        cancelButton={currentStep < MAX ? <Button>{'Avbryt'}</Button> : undefined}
      >
        <p>{currentStep < MAX ? 'Hei' : 'Ferdig!'}</p>
      </Step>
    </GridExample>
  );
};

export const Locked: ComponentStory<typeof Step> = args => {
  const { currentStep, back, forward } = useStep();

  return (
    <GridExample>
      <Step
        {...args}
        stepper={<Stepper min={MIN} max={MAX} value={currentStep} ariaLabel={`Steg ${currentStep}/${MAX}`} />}
        backButton={
          <Button onClick={back} disabled>
            {'Tilbake'}
          </Button>
        }
        forwardButton={
          <Button onClick={forward} disabled>
            {'Neste'}
          </Button>
        }
        cancelButton={<Button>{'Avbryt'}</Button>}
      >
        <p>{currentStep < MAX ? 'Hei' : 'Ferdig!'}</p>
      </Step>
    </GridExample>
  );
};
