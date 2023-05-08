import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Label, { LabelProps, LabelText } from './Label';
import { Sublabel } from './SubLabel';
import { FormMode } from '../../constants';
import { getColor } from '../../theme/currys';
import GridExample from '../GridExample';
import Input from '../Input';
import StatusDot from '../StatusDot';

export default {
  title: 'Components/Label',
  component: Label,
  parameters: {
    docs: {
      description: {
        component:
          'Som en innbygger vil jeg kunne se flere dataelementer gruppert i en og samme label på en konsistent måte slik at jeg mer effektivt kan scanne og forstå valgene jeg skal kunne gjøre. \n\n <b>For å sette opp aria-label riktig med Label komponentet:</b> \n\n Gi input feltet sin id til id propen til Label. Gi Input feltet sin aria-describedby prop eventuelle sublabel/statusdot id(er). Du kan skjule bestemte label/sublabel tekster for skjermlesere ved hjelp av hideFromScreenReader property per tekst.',
      },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof Label>;

export const Default: ComponentStory<typeof Label> = ({ ...args }: LabelProps & { showicon?: boolean }) => {
  const inputId = 'input-testid';
  const sublabelId = 'sublabel-testid';
  const sublabelTexts: LabelText[] = [
    { text: 'This is a normal sublabel', type: 'normal' },
    { text: 'Emphasised sublabel', type: 'semibold', hideFromScreenReader: true },
  ];
  const statusDotId = 'statusdot-testid';

  return (
    <GridExample>
      <Label
        {...args}
        labelTexts={[
          { text: 'Semibold label', type: 'semibold' },
          { text: 'normal label', type: 'normal' },
          { text: 'semibold returns', type: 'semibold' },
          { text: 'this is hidden from screen readers', type: 'normal', hideFromScreenReader: true },
        ]}
        sublabel={<Sublabel id={sublabelId} sublabelTexts={sublabelTexts} />}
        statusDot={<StatusDot id={statusDotId} text={'Statusdot text'} variant={'alert'} />}
        htmlFor={inputId}
      />
      <Input aria-describedby={sublabelId + ' ' + statusDotId} inputId={inputId} />
    </GridExample>
  );
};

export const OnDark: ComponentStory<typeof Label> = ({ ...args }: LabelProps & { showicon?: boolean }) => {
  const inputId = 'input-testid';
  const sublabelId = 'sublabel-testid';
  const sublabelTexts: LabelText[] = [
    { text: 'normal sublabel with a pretty long text', type: 'normal' },
    { text: 'Semibold sublabel', type: 'semibold' },
  ];
  const statusDotId = 'statusdot-testid';

  return (
    <GridExample>
      <div style={{ padding: '3rem', backgroundColor: getColor('blueberry', 600) }}>
        <Label
          {...args}
          mode={FormMode.ondark}
          labelTexts={[
            { text: 'Semibold label', type: 'semibold' },
            { text: 'normal label', type: 'normal' },
            { text: 'semibold returns', type: 'semibold' },
            { text: 'another normal label', type: 'normal' },
          ]}
          sublabel={<Sublabel id={sublabelId} sublabelTexts={sublabelTexts} />}
          statusDot={<StatusDot id={statusDotId} text={'Statusdot text'} variant={'alert'} />}
          htmlFor={inputId}
        />
        <Input mode={'ondark'} aria-describedby={sublabelId + ' ' + statusDotId} inputId={inputId} />
      </div>
    </GridExample>
  );
};
