import React, { useState } from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import Step from './Step';
import { mediumLoremText, longLoremText } from '../../utils/loremtext';
import Button from '../Button';
import StepButtons from '../StepButtons';
import Stepper from '../Stepper';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Step',
  component: Step,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Step} />,
      description: {
        component: 'Stegvisning skal gi en konsistent ramme rundt navigasjon mellom 2 eller flere steg.',
      },
    },
  },
  args: {
    children: '',
    stickyButtons: false,
  },
  argTypes: {
    stickyButtons: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Step>;

export default meta;

type Story = StoryObj<typeof meta>;

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

export const Default: Story = {
  render: args => {
    const { currentStep, back, forward } = useStep();

    return (
      <Step
        {...args}
        stepper={<Stepper min={MIN} max={MAX} value={currentStep} ariaLabel={`Steg ${currentStep}/${MAX}`} />}
        backButton={currentStep > MIN && currentStep < MAX ? <Button onClick={back}>{'Tilbake'}</Button> : undefined}
        forwardButton={currentStep < MAX ? <Button onClick={forward}>{currentStep < MAX ? 'Neste' : 'Ferdig'}</Button> : undefined}
        cancelButton={currentStep < MAX ? <Button>{'Avbryt'}</Button> : undefined}
      >
        <span>{currentStep < MAX ? mediumLoremText + longLoremText : 'Ferdig!'}</span>
      </Step>
    );
  },
};

export const StickyButtons: Story = {
  render: args => {
    const { currentStep, back, forward } = useStep();

    return (
      <>
        <Step
          {...args}
          stepper={<Stepper min={MIN} max={MAX} value={currentStep} ariaLabel={`Steg ${currentStep}/${MAX}`} />}
          backButton={currentStep > MIN && currentStep < MAX ? <Button onClick={back}>{'Tilbake'}</Button> : undefined}
          forwardButton={currentStep < MAX ? <Button onClick={forward}>{currentStep < MAX ? 'Neste' : 'Ferdig'}</Button> : undefined}
          cancelButton={currentStep < MAX ? <Button>{'Avbryt'}</Button> : undefined}
          stickyButtons
        >
          <span>{mediumLoremText + longLoremText}</span>
        </Step>
        <p>{mediumLoremText}</p>
      </>
    );
  },
};
export const StickyButtonsNoSiblings: Story = {
  render: args => {
    const { currentStep, back, forward } = useStep();

    return (
      <Step
        {...args}
        stepper={<Stepper min={MIN} max={MAX} value={currentStep} ariaLabel={`Steg ${currentStep}/${MAX}`} />}
        backButton={currentStep > MIN && currentStep < MAX ? <Button onClick={back}>{'Tilbake'}</Button> : undefined}
        forwardButton={currentStep < MAX ? <Button onClick={forward}>{currentStep < MAX ? 'Neste' : 'Ferdig'}</Button> : undefined}
        cancelButton={currentStep < MAX ? <Button>{'Avbryt'}</Button> : undefined}
        stickyButtons
      >
        <span>{mediumLoremText + longLoremText}</span>
      </Step>
    );
  },
};
export const NoNavigation: Story = {
  render: args => {
    const { currentStep } = useStep();

    return (
      <Step {...args} stepper={<Stepper min={MIN} max={MAX} value={currentStep} ariaLabel={`Steg ${currentStep}/${MAX}`} />}>
        <span>{mediumLoremText + longLoremText}</span>
      </Step>
    );
  },
};

export const WithStepButtons: Story = {
  render: args => {
    const { currentStep, back, forward } = useStep();

    return (
      <Step {...args} stepper={<Stepper min={MIN} max={MAX} value={currentStep} ariaLabel={`Steg ${currentStep}/${MAX}`} />}>
        <span>{mediumLoremText + longLoremText}</span>
        <StepButtons
          backButton={currentStep > MIN && currentStep < MAX ? <Button onClick={back}>{'Tilbake'}</Button> : undefined}
          forwardButton={currentStep < MAX ? <Button onClick={forward}>{currentStep < MAX ? 'Neste' : 'Ferdig'}</Button> : undefined}
          cancelButton={currentStep < MAX ? <Button>{'Avbryt'}</Button> : undefined}
          additionalButtons={[
            <Button onClick={action('Valgfri knapp')} key="valgfri2" variant="outline" concept="destructive">
              {'Fjern'}
            </Button>,
          ]}
        />
      </Step>
    );
  },
};

export const AdditionalButtons: Story = {
  render: args => {
    const { currentStep, back, forward } = useStep();

    return (
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
        <span>{currentStep < MAX ? 'Hei' : 'Ferdig!'}</span>
      </Step>
    );
  },
};

export const Locked: Story = {
  render: args => {
    const { currentStep, back, forward } = useStep();

    return (
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
        <span>{currentStep < MAX ? 'Hei' : 'Ferdig!'}</span>
      </Step>
    );
  },
};
