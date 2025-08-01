import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import Select from './Select';
import { palette } from '../../theme/palette';
import Label from '../Label';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Select',
  component: Select,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={Select} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/select/bruk-N0esXTFh" />
      ),
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
    label: <Label labelTexts={[{ text: 'Velg noe' }]} />,
    name: 'select name 1',
    onChange: action('onChange called'),
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
  render: args => <Select {...args} />,
};
export const DefaultValue: Story = {
  args: {
    defaultValue: 'Option 2',
  },
  render: args => <Select {...args} />,
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: args => <Select {...args} />,
};

export const Concepts: Story = {
  render: args => (
    <div style={{ backgroundColor: palette.blueberry100, padding: '2rem' }}>
      <Select
        {...args}
        concept={'normal'}
        label={<Label labelTexts={[{ text: 'Velg noe' }]} />}
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
        label={<Label labelTexts={[{ text: 'Velg noe' }]} />}
        name={'select name 1'}
        onChange={action('onChange called')}
      >
        <option value={'Option 1'}>{'Option 1'}</option>
        <option value={'Option 2'}>{'Option 2'}</option>
        <option value={'Option 3'}>{'Option 3'}</option>
      </Select>
    </div>
  ),
};

export const BackgroundColors: Story = {
  render: args => (
    <>
      <Select
        {...args}
        onColor={'onwhite'}
        label={<Label labelTexts={[{ text: 'Velg noe' }]} />}
        name={'select name 1'}
        onChange={action('onChange called')}
      >
        <option value={'Option 1'}>{'Option 1'}</option>
        <option value={'Option 2'}>{'Option 2'}</option>
        <option value={'Option 3'}>{'Option 3'}</option>
      </Select>
      <Select
        {...args}
        onColor={'ongrey'}
        label={<Label labelTexts={[{ text: 'Velg noe' }]} />}
        name={'select name 1'}
        onChange={action('onChange called')}
      >
        <option value={'Option 1'}>{'Option 1'}</option>
        <option value={'Option 2'}>{'Option 2'}</option>
        <option value={'Option 3'}>{'Option 3'}</option>
      </Select>
      <Select
        {...args}
        onColor={'onblueberry'}
        label={<Label labelTexts={[{ text: 'Velg noe' }]} />}
        name={'select name 1'}
        onChange={action('onChange called')}
      >
        <option value={'Option 1'}>{'Option 1'}</option>
        <option value={'Option 2'}>{'Option 2'}</option>
        <option value={'Option 3'}>{'Option 3'}</option>
      </Select>
      <Select
        {...args}
        onColor={'oninvalid'}
        label={<Label labelTexts={[{ text: 'Velg noe' }]} />}
        name={'select name 1'}
        onChange={action('onChange called')}
      >
        <option value={'Option 1'}>{'Option 1'}</option>
        <option value={'Option 2'}>{'Option 2'}</option>
        <option value={'Option 3'}>{'Option 3'}</option>
      </Select>
    </>
  ),
};

export const Width: Story = {
  render: args => (
    <>
      <Select {...args} label={<Label labelTexts={[{ text: 'Velg noe' }]} />} name={'select name 1'} onChange={action('onChange called')}>
        <option value={'Option 1'}>{'Option 1'}</option>
        <option value={'Option 2'}>{'Option 2'}</option>
        <option value={'Option 3'}>{'Option 3'}</option>
      </Select>
      <Select
        {...args}
        width={20}
        label={<Label labelTexts={[{ text: 'Velg noe' }]} />}
        name={'select name 1'}
        onChange={action('onChange called')}
      >
        <option value={'Option 1'}>{'Option 1'}</option>
        <option value={'Option 2'}>{'Option 2'}</option>
        <option value={'Option 3'}>{'Option 3'}</option>
      </Select>
    </>
  ),
};

export const WithPlaceholderText: Story = {
  render: args => (
    <>
      <Select
        {...args}
        label={<Label labelTexts={[{ text: 'Velg et alternativ:', type: 'semibold' }]} />}
        name={'select name 1'}
        onChange={() => null}
        defaultValue={''}
      >
        <option value="">{'-- Velg noe --'}</option>
        <option value={'Option 1'}>{'Option 1'}</option>
        <option value={'Option 2'}>{'Option 2'}</option>
        <option value={'Option 3'}>{'Option 3'}</option>
      </Select>
      {/* TODO: Legg til litt UU best practice her  */}
    </>
  ),
};
