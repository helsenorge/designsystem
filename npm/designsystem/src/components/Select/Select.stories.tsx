import React from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from './Select';
import { palette } from '../../theme/palette';
import Label from '../Label';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg kunne se hva som er valgt av et liste med skjulte valgalternativer, og åpne den skjulte listen og gjøre andre valg dersom jeg ønsker det, slik at jeg kan løse mine oppgaver. <br><br>Nytteverdi: Lar innbygger velge ETT blant flere alternativer <br>Bruksområde: Brukes når innbygger skal kunne velge ett enkelt valg under en etikett, men plassen som er til rådighet for kontrollen bare rommer ett valg. ',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof Select>;

export const Default: ComponentStory<typeof Select> = (args: any) => (
  <>
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
  </>
);
export const DefaultValue: ComponentStory<typeof Select> = (args: any) => (
  <>
    <Select
      defaultValue={'Option 2'}
      {...args}
      label={<Label labelTexts={[{ text: 'Velg noe', type: 'semibold' }]} />}
      name={'select name 1'}
      onChange={action('onChange called')}
    >
      <option value={'Option 1'}>{'Option 1'}</option>
      <option value={'Option 2'}>{'Option 2'}</option>
      <option value={'Option 3'}>{'Option 3'}</option>
    </Select>
  </>
);
export const Disabled: ComponentStory<typeof Select> = (args: any) => (
  <>
    <Select
      {...args}
      disabled
      label={<Label labelTexts={[{ text: 'Velg noe', type: 'semibold' }]} />}
      name={'select name 1'}
      onChange={action('onChange called')}
    >
      <option value={'Option 1'}>{'Option 1'}</option>
      <option value={'Option 2'}>{'Option 2'}</option>
      <option value={'Option 3'}>{'Option 3'}</option>
    </Select>
  </>
);

export const Concepts: ComponentStory<typeof Select> = (args: any) => (
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
);

export const Modes: ComponentStory<typeof Select> = (args: any) => (
  <>
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
  </>
);

export const Width: ComponentStory<typeof Select> = (args: any) => (
  <>
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
  </>
);

export const AllExamples: ComponentStory<typeof Select> = (args: any) => (
  <>
    <Default {...args} />
    <DefaultValue {...args} />
    <Disabled {...args} />
    <Concepts {...args} />
    <Modes {...args} />
    <Width {...args} />
  </>
);
