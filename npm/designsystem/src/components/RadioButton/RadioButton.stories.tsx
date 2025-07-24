import React, { useState } from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import RadioButton from './RadioButton';
import { FormOnColor, FormSize } from '../../constants';
import { getColor } from '../../theme/currys';
import FormGroup from '../FormGroup';
import Label, { Sublabel } from '../Label';

const meta = {
  title: '@helsenorge/designsystem-react/Components/RadioButton',
  component: RadioButton,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={RadioButton} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/radiobutton/bruk-iNKHuzL2" />
      ),
      description: {
        component:
          'RadioButton lar brukeren velge et av flere valg i en liste. RadioButton kan brukes frittstående, som en del av en FormGroup eller direkte i et Validation komponent.',
      },
    },
  },
  args: {
    label: 'RadioButton label',
    name: 'radio',
  },
  argTypes: {
    label: {
      control: 'text',
    },
    checked: {
      control: 'boolean',
      description: 'Used for controlled component. Only works when size is default (medium), does not work with large version.',
    },
    defaultChecked: {
      control: 'boolean',
      description: 'Used for uncontrolled component. Only works when "checked" prop is not used.',
    },
    disabled: {
      control: 'boolean',
    },
    onColor: {
      control: 'select',
      options: FormOnColor,
    },
    size: {
      control: 'select',
      options: FormSize,
    },
    name: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <RadioButton {...args} label={<Label labelTexts={[{ text: args.label as string, type: 'subdued' }]} />} />,
};

export const AllColors: Story = {
  render: args => (
    <>
      <RadioButton {...args} label={<Label labelTexts={[{ text: 'onwhite', type: 'subdued' }]} />} onColor={'onwhite'} />
      <RadioButton {...args} label={<Label labelTexts={[{ text: 'ongrey', type: 'subdued' }]} />} onColor={'ongrey'} />
      <RadioButton {...args} label={<Label labelTexts={[{ text: 'onblueberry', type: 'subdued' }]} />} onColor={'onblueberry'} />
      <RadioButton {...args} label={<Label labelTexts={[{ text: 'oninvalid', type: 'subdued' }]} />} onColor={'oninvalid'} />
      <RadioButton
        {...args}
        label={<Label labelTexts={[{ text: 'onwhite - disabled', type: 'subdued' }]} />}
        onColor={'onwhite'}
        disabled
      />
      <div style={{ backgroundColor: '#06596C', display: 'block', marginTop: '1rem', padding: '1rem' }}>
        <RadioButton {...args} label={<Label labelTexts={[{ text: 'ondark', type: 'subdued' }]} />} onColor={'ondark'} />
      </div>
    </>
  ),
};

export const Large: Story = {
  render: args => (
    <>
      <FormGroup legend={'onwhite'} name="radio1" onColor={'onwhite'} size={'large'}>
        <RadioButton {...args} label={<Label labelTexts={[{ text: 'onwhite', type: 'subdued' }]} />} />
        <RadioButton {...args} label={<Label labelTexts={[{ text: 'onwhite', type: 'subdued' }]} />} />
      </FormGroup>
      <FormGroup legend={'ongrey'} name="radio2" onColor={'ongrey'} size={'large'}>
        <RadioButton {...args} label={<Label labelTexts={[{ text: 'ongrey', type: 'subdued' }]} />} />
        <RadioButton {...args} label={<Label labelTexts={[{ text: 'ongrey', type: 'subdued' }]} />} />
      </FormGroup>
      <FormGroup legend={'onblueberry'} name="radio3" onColor={'onblueberry'} size={'large'}>
        <RadioButton {...args} label={<Label labelTexts={[{ text: 'onblueberry', type: 'subdued' }]} />} />
        <RadioButton {...args} label={<Label labelTexts={[{ text: 'onblueberry', type: 'subdued' }]} />} />
      </FormGroup>
      <div style={{ background: getColor('blueberry', 500), padding: '2rem' }}>
        <FormGroup legend={'ondark'} name="radio4" onColor={'ondark'} size={'large'}>
          <RadioButton {...args} label={<Label labelTexts={[{ text: 'ondark', type: 'subdued' }]} />} />
          <RadioButton {...args} label={<Label labelTexts={[{ text: 'ondark', type: 'subdued' }]} />} />
        </FormGroup>
      </div>
      <RadioButton {...args} label={<Label labelTexts={[{ text: 'oninvalid', type: 'subdued' }]} />} size={'large'} onColor={'oninvalid'} />
      <RadioButton
        {...args}
        label={<Label labelTexts={[{ text: 'onwhite - disabled', type: 'subdued' }]} />}
        size={'large'}
        onColor={'onwhite'}
        disabled
      />
    </>
  ),
};

export const Controlled: Story = {
  render: args => {
    const [selected, setSelected] = useState<string>('');
    const onClick = e => {
      setSelected(e.target.value);
    };
    const buttonClick2 = () => {
      setSelected('2');
    };
    const buttonClickReset = () => {
      setSelected('');
    };
    return (
      <form>
        <RadioButton
          {...args}
          label={<Label labelTexts={[{ text: 'RadioButton 1', type: 'subdued' }]} />}
          onChange={onClick}
          value="1"
          checked={selected == '1'}
        />
        <RadioButton
          {...args}
          label={<Label labelTexts={[{ text: 'RadioButton 2', type: 'subdued' }]} />}
          onChange={onClick}
          value="2"
          checked={selected == '2'}
        />
        <RadioButton
          {...args}
          label={<Label labelTexts={[{ text: 'RadioButton 3', type: 'subdued' }]} />}
          onChange={onClick}
          value="3"
          checked={selected == '3'}
        />
        <RadioButton
          {...args}
          label={<Label labelTexts={[{ text: 'RadioButton 4', type: 'subdued' }]} />}
          onChange={onClick}
          value="4"
          checked={selected == '4'}
        />
        <button type="button" onClick={buttonClick2}>
          {'Set to 2'}
        </button>
        <button type="button" onClick={buttonClickReset}>
          {'Reset'}
        </button>
      </form>
    );
  },
};

export const DifferentLabels: Story = {
  render: args => (
    <>
      <RadioButton {...args} label={<Label labelTexts={[{ text: args.label as string, type: 'normal' }]} />} />
      <RadioButton
        {...args}
        label={
          <Label
            labelTexts={[{ text: args.label as string, type: 'normal' }]}
            sublabel={<Sublabel id="sublabel-testid2" sublabelTexts={[{ text: 'This is a normal sublabel', type: 'normal' }]} />}
          />
        }
      />
    </>
  ),
};
