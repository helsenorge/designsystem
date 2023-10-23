import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Checkbox from './Checkbox';
import { FormMode, FormSize } from '../../constants';
import GridExample from '../GridExample';
import Label from '../Label/Label';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg kunne se om noe er valgt eller ikke, og velge om dette noe skal være valgt eller ikke valgt, og se en umiddelbart oppdatert representasjon av valget jeg har gjort slik at jeg vet hva som gjelder for valget. <br><br>Checkbox kan brukes frittstående, som en del av en FormGroup eller direkte i et Validation komponent.',
      },
    },
  },
  argTypes: {
    checked: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    mode: {
      control: 'select',
      options: FormMode,
      defaultValue: FormMode.onwhite,
    },
    size: {
      control: 'select',
      options: FormSize,
      defaultValue: FormSize.medium,
    },
    name: {
      control: 'text',
      defaultValue: 'checkbox',
    },
    value: {
      control: 'text',
      defaultValue: '',
    },
    required: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Checkbox>;

export const Default: ComponentStory<typeof Checkbox> = args => (
  <GridExample>
    <Checkbox {...args} label={<Label labelTexts={[{ text: 'onwhite' }]} />} mode="onwhite" />
    <Checkbox {...args} label={<Label labelTexts={[{ text: 'ongrey' }]} />} mode="ongrey" />
    <Checkbox {...args} label={<Label labelTexts={[{ text: 'onblueberry' }]} />} mode="onblueberry" />
    <Checkbox {...args} label={<Label labelTexts={[{ text: 'oninvalid' }]} />} mode="oninvalid" />
    <Checkbox {...args} label={<Label labelTexts={[{ text: 'onwhite - disabled' }]} />} mode="onwhite" disabled />
    <div style={{ backgroundColor: '#06596C', display: 'block', marginTop: '1rem', padding: '1rem' }}>
      <Checkbox {...args} label={<Label mode={'ondark'} labelTexts={[{ text: 'ondark' }]} />} mode="ondark" />
    </div>
  </GridExample>
);

export const Large: ComponentStory<typeof Checkbox> = args => (
  <GridExample>
    <div style={{ backgroundColor: '#EAE7E7', display: 'block', marginTop: '1rem', padding: '1rem' }}>
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'onwhite' }]} />} size="large" mode="onwhite" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'ongrey' }]} />} size="large" mode="ongrey" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'onblueberry' }]} />} size="large" mode="onblueberry" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'oninvalid' }]} />} size="large" mode="oninvalid" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'onwhite - disabled' }]} />} size="large" mode="onwhite" disabled />
      <Checkbox
        {...args}
        label={<Label mode={'ondark'} labelTexts={[{ text: 'onwhite - disabled - checked' }]} />}
        size="large"
        checked
        mode="onwhite"
        disabled
      />
    </div>
  </GridExample>
);
