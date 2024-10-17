import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';
import { useForm } from 'react-hook-form';

import Dropdown, { DropdownOnColor } from './Dropdown';
import Checkbox from '../Checkbox';
import Label from '../Label';
import RadioButton from '../RadioButton';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Dropdown',
  component: Dropdown,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Dropdown} />,
      description: {
        component:
          'Som innbygger ønsker jeg å kunne gjøre ett eller flere valg i en liste der hvor det ikke er plass til å vise listen i grensesnittet',
      },
      story: {
        inline: false,
        iframeHeight: '40rem',
      },
    },
  },
  args: {
    label: 'Ta et valg',
    children: '',
    placeholder: 'Hva skjer i kroppen?',
  },
  argTypes: {
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    closeText: {
      control: 'text',
    },
    open: {
      control: 'boolean',
    },
    onColor: {
      control: 'select',
      options: DropdownOnColor,
    },
    transparent: {
      control: 'boolean',
    },
    fluid: {
      control: 'boolean',
    },
    noCloseButton: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onToggle: action('onToggle'),
  },
  render: args => (
    <Dropdown {...args}>
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 1' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 2' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 3' }]} />} name="radiobutton" />
    </Dropdown>
  ),
};

export const RadioButtonChildren: Story = {
  args: {
    onToggle: action('onToggle'),
  },
  render: args => (
    <Dropdown {...args}>
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 1' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 2' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 3' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 4' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 5' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 6' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 7' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 8' }]} />} name="radiobutton" />
      <RadioButton label={<Label labelTexts={[{ text: 'Valg 9' }]} />} name="radiobutton" />
    </Dropdown>
  ),
};

export const CheckboxChildren: Story = {
  render: args => (
    <Dropdown {...args} onToggle={action('onToggle')}>
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 1' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 2' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 3' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 4' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 5' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 6' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 7' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 8' }]} />} name="checkbox" />
      <Checkbox label={<Label labelTexts={[{ text: 'Valg 9' }]} />} name="checkbox" />
    </Dropdown>
  ),
};

export const WideChildren: Story = {
  render: args => (
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
  ),
};

export const CustomContent: Story = {
  render: args => (
    <Dropdown {...args} onToggle={action('onToggle')}>
      <div style={{ padding: '1rem' }}>
        {
          'Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen? Hva skjer i kroppen?'
        }
      </div>
    </Dropdown>
  ),
};

export const EksternChildrenRefs: Story = {
  render: args => {
    const { register, watch } = useForm();
    const checkboxChanging = watch(['checkbox.1', 'checkbox.2', 'checkbox.3']);
    React.useEffect(() => {
      action('Checked')(checkboxChanging);
    }, [checkboxChanging]);
    return (
      <Dropdown {...args} onToggle={action('onToggle')}>
        <form>
          <Checkbox {...register('checkbox.1')} label={<Label labelTexts={[{ text: 'Valg 1' }]} />} />
          <Checkbox {...register('checkbox.2')} label={<Label labelTexts={[{ text: 'Valg 2' }]} />} />
          <Checkbox {...register('checkbox.3')} label={<Label labelTexts={[{ text: 'Valg 3' }]} />} />
        </form>
      </Dropdown>
    );
  },
};
