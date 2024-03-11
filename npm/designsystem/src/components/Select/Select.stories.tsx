import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import Select from './Select';
import { palette } from '../../theme/palette';
import GridExample from '../GridExample';
import Label from '../Label';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg kunne se hva som er valgt av et liste med skjulte valgalternativer, og åpne den skjulte listen og gjøre andre valg dersom jeg ønsker det, slik at jeg kan løse mine oppgaver. <br><br>Nytteverdi: Lar innbygger velge ETT blant flere alternativer <br>Bruksområde: Brukes når innbygger skal kunne velge ett enkelt valg under en etikett, men plassen som er til rådighet for kontrollen bare rommer ett valg. ',
      },
    },
  },
  args: {
    children: (
      <>
        <option value={'Option 1'}>{'Option 1'}</option>
        <option value={'Option 2'}>{'Option 2'}</option>
        <option value={'Option 3'}>{'Option 3'}</option>
      </>
    ),
    label: <Label labelTexts={[{ text: 'Velg noe', type: 'semibold' }]} />,
    name: 'select name 1',
    onChange: action('onChange called'),
    disabled: false,
    autoComplete: '',
  },
  argTypes: {
    disabled: {
      control: 'boolean',
    },
    autoComplete: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <GridExample>
      <Select {...args} />
    </GridExample>
  ),
};
export const DefaultValue: Story = {
  args: {
    defaultValue: 'Option 2',
  },
  render: args => (
    <GridExample>
      <Select {...args} />
    </GridExample>
  ),
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: args => (
    <GridExample>
      <Select {...args} />
    </GridExample>
  ),
};

export const Concepts: Story = {
  render: args => (
    <GridExample>
      <div style={{ backgroundColor: palette.blueberry100, padding: '2rem' }}>
        <Select
          {...args}
          concept={'normal'}
          label={<Label labelTexts={[{ text: 'Velg noe', type: 'semibold' }]} />}
          name={'select name 1'}
          onChange={action('onChange called')}
        >
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>

        <Select
          {...args}
          concept={'transparent'}
          label={<Label labelTexts={[{ text: 'Velg noe', type: 'semibold' }]} />}
          name={'select name 1'}
          onChange={action('onChange called')}
        >
          <option value={'Option 1'}>{'Option 1'}</option>
          <option value={'Option 2'}>{'Option 2'}</option>
          <option value={'Option 3'}>{'Option 3'}</option>
        </Select>
      </div>
    </GridExample>
  ),
};

export const Modes: Story = {
  render: args => (
    <GridExample>
      <Select
        {...args}
        mode={'onwhite'}
        label={<Label labelTexts={[{ text: 'Velg noe', type: 'semibold' }]} />}
        name={'select name 1'}
        onChange={action('onChange called')}
      >
        <option value={'Option 1'}>{'Option 1'}</option>
        <option value={'Option 2'}>{'Option 2'}</option>
        <option value={'Option 3'}>{'Option 3'}</option>
      </Select>

      <Select
        {...args}
        mode={'ongrey'}
        label={<Label labelTexts={[{ text: 'Velg noe', type: 'semibold' }]} />}
        name={'select name 1'}
        onChange={action('onChange called')}
      >
        <option value={'Option 1'}>{'Option 1'}</option>
        <option value={'Option 2'}>{'Option 2'}</option>
        <option value={'Option 3'}>{'Option 3'}</option>
      </Select>
      <Select
        {...args}
        mode={'onblueberry'}
        label={<Label labelTexts={[{ text: 'Velg noe', type: 'semibold' }]} />}
        name={'select name 1'}
        onChange={action('onChange called')}
      >
        <option value={'Option 1'}>{'Option 1'}</option>
        <option value={'Option 2'}>{'Option 2'}</option>
        <option value={'Option 3'}>{'Option 3'}</option>
      </Select>
      <Select
        {...args}
        mode={'oninvalid'}
        label={<Label labelTexts={[{ text: 'Velg noe', type: 'semibold' }]} />}
        name={'select name 1'}
        onChange={action('onChange called')}
      >
        <option value={'Option 1'}>{'Option 1'}</option>
        <option value={'Option 2'}>{'Option 2'}</option>
        <option value={'Option 3'}>{'Option 3'}</option>
      </Select>
    </GridExample>
  ),
};

export const Width: Story = {
  render: args => (
    <GridExample>
      <Select
        {...args}
        label={<Label labelTexts={[{ text: 'Velg noe', type: 'semibold' }]} />}
        name={'select name 1'}
        onChange={action('onChange called')}
      >
        <option value={'Option 1'}>{'Option 1'}</option>
        <option value={'Option 2'}>{'Option 2'}</option>
        <option value={'Option 3'}>{'Option 3'}</option>
      </Select>

      <Select
        {...args}
        width={20}
        label={<Label labelTexts={[{ text: 'Velg noe', type: 'semibold' }]} />}
        name={'select name 1'}
        onChange={action('onChange called')}
      >
        <option value={'Option 1'}>{'Option 1'}</option>
        <option value={'Option 2'}>{'Option 2'}</option>
        <option value={'Option 3'}>{'Option 3'}</option>
      </Select>
    </GridExample>
  ),
};
