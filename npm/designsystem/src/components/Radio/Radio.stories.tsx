import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Radio from './Radio';
import { FormOnColor, FormSize } from '../../constants';
import { getColor } from '../../theme/currys';
import FormGroup from '../FormGroup';
import Label, { Sublabel } from '../Label';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Radio',
  component: Radio,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Radio} />,
      description: {
        component:
          'Radio lar brukeren velge et av flere valg i en liste. Radio kan brukes frittstående, som en del av en FormGroup eller direkte i et Validation komponent.',
      },
    },
  },
  args: {
    label: 'Radio label',
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
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Radio {...args} label={<Label labelTexts={[{ text: args.label as string }]} />} />,
};

export const AllColors: Story = {
  render: args => (
    <>
      <Radio {...args} label={<Label labelTexts={[{ text: 'onwhite' }]} />} onColor={'onwhite'} />
      <Radio {...args} label={<Label labelTexts={[{ text: 'ongrey' }]} />} onColor={'ongrey'} />
      <Radio {...args} label={<Label labelTexts={[{ text: 'oninvalid' }]} />} onColor={'oninvalid'} />
      <Radio {...args} label={<Label labelTexts={[{ text: 'onwhite - disabled' }]} />} onColor={'onwhite'} disabled />
    </>
  ),
};

export const Large: Story = {
  args: { size: 'large', label: <Label labelTexts={[{ text: 'Valg' }]} />, onColor: 'onwhite' },
  render: args => (
    <FormGroup legend={'Large'} name="radio1" onColor={args.onColor} size={'large'}>
      <Radio {...args} />
      <Radio {...args} />
    </FormGroup>
  ),
};

export const LargeEveryColor: Story = {
  render: args => (
    <>
      <FormGroup legend={'onwhite'} name="radio1" onColor={'onwhite'} size={'large'}>
        <Radio {...args} label={<Label labelTexts={[{ text: 'onwhite' }]} />} />
        <Radio {...args} label={<Label labelTexts={[{ text: 'onwhite' }]} />} />
      </FormGroup>
      <FormGroup legend={'ongrey'} name="radio2" onColor={'ongrey'} size={'large'}>
        <Radio {...args} label={<Label labelTexts={[{ text: 'ongrey' }]} />} />
        <Radio {...args} label={<Label labelTexts={[{ text: 'ongrey' }]} />} />
      </FormGroup>
      <div style={{ background: getColor('blueberry', 500), padding: '2rem' }}>
        <FormGroup legend={'ondark'} name="radio4" onColor={'ondark'} size={'large'}>
          <Radio {...args} label={<Label labelTexts={[{ text: 'ondark' }]} />} />
          <Radio {...args} label={<Label labelTexts={[{ text: 'ondark' }]} />} />
        </FormGroup>
      </div>
      <Radio {...args} label={<Label labelTexts={[{ text: 'oninvalid' }]} />} size={'large'} onColor={'oninvalid'} />
      <Radio {...args} label={<Label labelTexts={[{ text: 'onwhite - disabled' }]} />} size={'large'} onColor={'onwhite'} disabled />
    </>
  ),
};

export const Controlled: Story = {
  render: args => {
    const [selected, setSelected] = useState<string>('');
    const onClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
      setSelected(e.target.value);
    };
    const buttonClick2 = (): void => {
      setSelected('2');
    };
    const buttonClickReset = (): void => {
      setSelected('');
    };
    return (
      <form>
        <Radio {...args} label={<Label labelTexts={[{ text: 'Radio 1' }]} />} onChange={onClick} value="1" checked={selected == '1'} />
        <Radio {...args} label={<Label labelTexts={[{ text: 'Radio 2' }]} />} onChange={onClick} value="2" checked={selected == '2'} />
        <Radio {...args} label={<Label labelTexts={[{ text: 'Radio 3' }]} />} onChange={onClick} value="3" checked={selected == '3'} />
        <Radio {...args} label={<Label labelTexts={[{ text: 'Radio 4' }]} />} onChange={onClick} value="4" checked={selected == '4'} />
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
export const WithoutControlledGroup: Story = {
  render: args => (
    <form>
      <Radio {...args} name="bug-group" label={<Label labelTexts={[{ text: 'Radio 1' }]} />} value="1" />
      <Radio {...args} name="bug-group" label={<Label labelTexts={[{ text: 'Radio 2' }]} />} value="2" />
      <Radio {...args} name="bug-group" label={<Label labelTexts={[{ text: 'Radio 3' }]} />} value="3" />
    </form>
  ),
};

export const DifferentLabels: Story = {
  render: args => (
    <>
      <Radio {...args} label={<Label labelTexts={[{ text: args.label as string, type: 'normal' }]} />} />
      <Radio
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
