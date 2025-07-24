import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import Checkbox from './Checkbox';
import { FormOnColor, FormSize } from '../../constants';
import { Sublabel } from '../Label';
import Label from '../Label/Label';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={Checkbox} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/checkbox/bruk-ZgTIx4UU" />
      ),
      description: {
        component:
          'Som innbygger vil jeg kunne se om noe er valgt eller ikke, og velge om dette noe skal være valgt eller ikke valgt, og se en umiddelbart oppdatert representasjon av valget jeg har gjort slik at jeg vet hva som gjelder for valget. <br><br>Checkbox kan brukes frittstående, som en del av en FormGroup eller direkte i et Validation komponent.',
      },
    },
  },
  args: {
    label: 'Label',
  },
  argTypes: {
    checked: {
      control: 'boolean',
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
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Checkbox {...args} label={<Label labelTexts={[{ text: args.label as string }]} />} />,
};

export const DifferentLabels: Story = {
  render: args => (
    <>
      <Checkbox {...args} label={<Label labelTexts={[{ text: args.label as string, type: 'normal' }]} />} />
      <Checkbox
        {...args}
        label={
          <Label
            sublabel={<Sublabel id="sublabel-testid2" sublabelTexts={[{ text: 'This is a normal sublabel', type: 'normal' }]} />}
            labelTexts={[{ text: args.label as string, type: 'normal' }]}
          />
        }
      />
    </>
  ),
};

export const AllColors: Story = {
  render: args => (
    <>
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'onwhite', type: 'normal' }]} />} onColor="onwhite" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'ongrey', type: 'normal' }]} />} onColor="ongrey" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'onblueberry', type: 'normal' }]} />} onColor="onblueberry" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'oninvalid', type: 'normal' }]} />} onColor="oninvalid" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'onwhite - disabled', type: 'normal' }]} />} onColor="onwhite" disabled />
      <div style={{ backgroundColor: '#06596C', display: 'block', marginTop: '1rem', padding: '1rem' }}>
        <Checkbox {...args} label={<Label onColor={'ondark'} labelTexts={[{ text: 'ondark' }]} />} onColor="ondark" />
      </div>
    </>
  ),
};

export const Large: Story = {
  render: args => (
    <div style={{ backgroundColor: '#EAE7E7', display: 'block', marginTop: '1rem', padding: '1rem' }}>
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'onwhite', type: 'subdued' }]} />} size="large" onColor="onwhite" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'ongrey', type: 'subdued' }]} />} size="large" onColor="ongrey" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'onblueberry', type: 'subdued' }]} />} size="large" onColor="onblueberry" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'oninvalid', type: 'subdued' }]} />} size="large" onColor="oninvalid" />
      <Checkbox
        {...args}
        label={<Label labelTexts={[{ text: 'onwhite - disabled', type: 'subdued' }]} />}
        size="large"
        onColor="onwhite"
        disabled
      />
      <Checkbox
        {...args}
        label={<Label onColor={'ondark'} labelTexts={[{ text: 'onwhite - disabled - checked', type: 'subdued' }]} />}
        size="large"
        checked
        onColor="onwhite"
        disabled
      />
    </div>
  ),
};
