import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

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
      options: Object.values(FormOnColor),
    },
    size: {
      control: 'select',
      options: Object.values(FormSize),
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
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'onwhite' }]} />} onColor="onwhite" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'ongrey' }]} />} onColor="ongrey" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'onblueberry' }]} />} onColor="onblueberry" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'oninvalid' }]} />} onColor="oninvalid" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'onwhite - disabled' }]} />} onColor="onwhite" disabled />
      <div style={{ backgroundColor: '#06596C', display: 'block', marginTop: '1rem', padding: '1rem' }}>
        <Checkbox {...args} label={<Label onColor={'ondark'} labelTexts={[{ text: 'ondark' }]} />} onColor="ondark" />
      </div>
    </>
  ),
};

export const Large: Story = {
  render: args => (
    <div style={{ backgroundColor: '#EAE7E7', display: 'block', marginTop: '1rem', padding: '1rem' }}>
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'onwhite' }]} />} size="large" onColor="onwhite" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'ongrey' }]} />} size="large" onColor="ongrey" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'onblueberry' }]} />} size="large" onColor="onblueberry" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'oninvalid' }]} />} size="large" onColor="oninvalid" />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'onwhite - disabled' }]} />} size="large" onColor="onwhite" disabled />
      <Checkbox
        {...args}
        label={<Label onColor={'ondark'} labelTexts={[{ text: 'onwhite - disabled - checked' }]} />}
        size="large"
        checked
        onColor="onwhite"
        disabled
      />
    </div>
  ),
};
