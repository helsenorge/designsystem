import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Dropdown, { DropdownMode } from './Dropdown';
import Checkbox from '../Checkbox';
import RadioButton from '../RadioButton';
import GridExample from '../GridExample';

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    label: {
      control: 'text',
      defaultValue: 'Ta et valg',
    },
    placeholder: {
      control: 'text',
      defaultValue: 'Hva skjer i kroppen?',
    },
    closeText: {
      control: 'text',
      defaultValue: 'Lukk',
    },
    open: {
      control: 'boolean',
      defaultValue: false,
    },
    mode: {
      control: 'select',
      options: DropdownMode,
      defaultValue: DropdownMode.onwhite,
    },
    transparent: {
      control: 'boolean',
      defaultValue: false,
    },
    fluid: {
      control: 'boolean',
      defaultValue: false,
    },
    noCloseButton: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Dropdown>;

export const RadioButtonChildren: ComponentStory<typeof Dropdown> = (args: any) => (
  <GridExample>
    <Dropdown {...args} onToggle={action('onToggle')}>
      <RadioButton label="Valg 1" name="radiobutton" />
      <RadioButton label="Valg 2" name="radiobutton" />
      <RadioButton label="Valg 3" name="radiobutton" />
      <RadioButton label="Valg 4" name="radiobutton" />
      <RadioButton label="Valg 5" name="radiobutton" />
      <RadioButton label="Valg 6" name="radiobutton" />
      <RadioButton label="Valg 7" name="radiobutton" />
      <RadioButton label="Valg 8" name="radiobutton" />
      <RadioButton label="Valg 9" name="radiobutton" />
    </Dropdown>
  </GridExample>
);

export const CheckboxChildren: ComponentStory<typeof Dropdown> = (args: any) => (
  <GridExample>
    <Dropdown {...args} onToggle={action('onToggle')}>
      <Checkbox label="Valg 1" name="checkbox" />
      <Checkbox label="Valg 2" name="checkbox" />
      <Checkbox label="Valg 3" name="checkbox" />
      <Checkbox label="Valg 4" name="checkbox" />
      <Checkbox label="Valg 5" name="checkbox" />
      <Checkbox label="Valg 6" name="checkbox" />
      <Checkbox label="Valg 7" name="checkbox" />
      <Checkbox label="Valg 8" name="checkbox" />
      <Checkbox label="Valg 9" name="checkbox" />
    </Dropdown>
  </GridExample>
);

export const CustomContent: ComponentStory<typeof Dropdown> = (args: any) => (
  <GridExample>
    <Dropdown {...args} onToggle={action('onToggle')}>
      <div style={{ padding: '1rem' }}>
        {
          'Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen?'
        }
      </div>
    </Dropdown>
  </GridExample>
);
