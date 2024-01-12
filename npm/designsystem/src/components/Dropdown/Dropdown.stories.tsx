import React from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown, { DropdownMode } from './Dropdown';
import Checkbox from '../Checkbox';
import GridExample from '../GridExample';
import Label from '../Label';
import RadioButton from '../RadioButton';

export default {
  title: '@helsenorge∕designsystem-react/Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger ønsker jeg å kunne gjøre ett eller flere valg i en liste der hvor det ikke er plass til å vise listen i grensesnittet',
      },
    },
  },
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
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 1' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 2 VeldigLangtOrdSomErForBredt' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 3' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 4' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 5' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 6' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 7' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 8' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 9' }]} />} name="radiobutton" />
    </Dropdown>
  </GridExample>
);

export const CheckboxChildren: ComponentStory<typeof Dropdown> = (args: any) => (
  <GridExample>
    <Dropdown {...args} onToggle={action('onToggle')}>
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 1' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 2 VeldigLangtOrdSomErForBredt' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 3' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 4' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 5' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 6' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 7' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 8' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 9' }]} />} name="checkbox" />
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
