import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Checkbox from './Checkbox';
import { FormOnColor, FormSize } from '../../constants';
import { getColor } from '../../theme/currys';
import FormFieldTag from '../FormFieldTag';
import FormGroup from '../FormGroup';
import { Sublabel } from '../Label';
import Label from '../Label/Label';
import StatusDot from '../StatusDot';

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
            labelTexts={[{ text: args.label as string, type: 'normal' }]}
            sublabel={
              <Sublabel
                id="sublabel-testid2"
                sublabelTexts={[
                  { text: 'This is a normal sublabel', type: 'normal' },
                  { text: 'This is a subdued sublabel', type: 'subdued' },
                ]}
              />
            }
          />
        }
      />
      <Checkbox
        {...args}
        label={
          <Label
            labelTexts={[{ text: args.label as string, type: 'normal' }]}
            sublabel={<Sublabel id="sublabel-testid3" sublabelTexts={[{ text: 'This is a normal sublabel', type: 'normal' }]} />}
            statusDot={<StatusDot variant="active" text="Statusdot" />}
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
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'oninvalid' }]} />} onColor="oninvalid" />
    </>
  ),
};

export const Large: Story = {
  args: { size: 'large', label: 'Large checkbox label', onColor: 'onwhite' },
  render: args => (
    <FormGroup legend={'Large'} onColor={args.onColor} size={args.size}>
      <Checkbox {...args} label={<Label labelTexts={[{ text: args.label as string }]} />} />
      <Checkbox
        {...args}
        label={
          <Label
            labelTexts={[{ text: args.label as string, type: 'normal' }]}
            formFieldTag={<FormFieldTag level={'required-field'} />}
            sublabel={
              <Sublabel
                id="sublabel-testid2"
                sublabelTexts={[
                  { text: 'This is a normal sublabel', type: 'normal' },
                  { text: 'This is a subdued sublabel', type: 'subdued' },
                ]}
              />
            }
          />
        }
      />
      <Checkbox
        {...args}
        checked
        label={
          <Label
            labelTexts={[{ text: args.label as string, type: 'normal' }]}
            sublabel={<Sublabel id="sublabel-testid3" sublabelTexts={[{ text: 'This is a normal sublabel', type: 'normal' }]} />}
            formFieldTag={<FormFieldTag level="optional" />}
            statusDot={<StatusDot variant="active" text="Statusdot" />}
          />
        }
      />
    </FormGroup>
  ),
};

export const LargeEveryColor: Story = {
  render: args => (
    <>
      <FormGroup legend={'onwhite'} onColor={'onwhite'} size={'large'}>
        <Checkbox {...args} label={<Label labelTexts={[{ text: 'onwhite' }]} />} />
        <Checkbox {...args} checked label={<Label labelTexts={[{ text: 'onwhite - checked' }]} />} />
      </FormGroup>
      <FormGroup legend={'ongrey'} onColor={'ongrey'} size={'large'}>
        <Checkbox {...args} label={<Label labelTexts={[{ text: 'ongrey' }]} />} />
        <Checkbox {...args} checked label={<Label labelTexts={[{ text: 'ongrey - checked' }]} />} />
      </FormGroup>
      <div style={{ background: getColor('blueberry', 500), padding: '2rem' }}>
        <FormGroup legend={'ondark'} onColor={'ondark'} size={'large'}>
          <Checkbox {...args} label={<Label labelTexts={[{ text: 'ondark' }]} />} />
          <Checkbox {...args} checked label={<Label labelTexts={[{ text: 'ondark - checked' }]} />} />
        </FormGroup>
      </div>
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'oninvalid' }]} />} size={'large'} onColor={'oninvalid'} />
      <Checkbox {...args} checked label={<Label labelTexts={[{ text: 'oninvalid - checked' }]} />} size={'large'} onColor={'oninvalid'} />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'onwhite - disabled' }]} />} size={'large'} onColor={'onwhite'} disabled />
    </>
  ),
};

export const Disabled: Story = {
  render: args => (
    <>
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'disabled' }]} />} onColor="onwhite" disabled />
      <Checkbox {...args} label={<Label labelTexts={[{ text: 'large - disabled' }]} />} size="large" onColor="onwhite" disabled />
    </>
  ),
};
