import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import RadioGroup from './RadioGroup';
import RadioGroupButton from './RadioGroupButton';
import GridExample from '../GridExample';
import Label from '../Label';

export default {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av RadioGroup',
      },
    },
  },
  argTypes: {},
} as ComponentMeta<typeof RadioGroup>;

export const Default: ComponentStory<typeof RadioGroup> = (args: any) => (
  <GridExample>
    <RadioGroup id="Test" {...args}>
      <RadioGroupButton {...args} label={<Label labelTexts={[{ text: 'Radio onwhite' }]} />} mode="onwhite" />
      <RadioGroupButton {...args} label={<Label labelTexts={[{ text: 'ongrey' }]} />} mode="ongrey" />
      <RadioGroupButton {...args} label={<Label labelTexts={[{ text: 'onblueberry' }]} />} mode="onblueberry" checked />
      <RadioGroupButton {...args} label={<Label labelTexts={[{ text: 'onwhite - disabled' }]} />} mode="onwhite" disabled />
    </RadioGroup>
  </GridExample>
);
