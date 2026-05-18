import { useId } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Title from '../Title';
import VisualRadioButtonCloud from './VisualRadioButtonCloud';
import fontStyles from '../../scss/typography.module.scss';

interface MockOption {
  value: string;
  label: string;
}

const mockOptions: MockOption[] = [
  { value: 'muskel-og-skjelettplager', label: 'Muskel og skjelettplager' },
  { value: 'forleng-sykmelding', label: 'Forleng sykmelding' },
  { value: 'svangerskapsplager', label: 'Svangerskapsplager' },
  { value: 'hud-og-utslett', label: 'Hud og utslett' },
  { value: 'hodepine', label: 'Hodepine' },
  { value: 'luftveisplager', label: 'Luftveisplager' },
  { value: 'mage-og-tarmproblemer', label: 'Mage og tarmproblemer' },
  { value: 'oppfolging-etter-fastlegetime', label: 'Oppfølging etter fastlegetime' },
  { value: 'legeerklaering-eller-attest', label: 'Legeerklæring eller attest' },
  { value: 'allergi', label: 'Allergi' },
  { value: 'psykiske-plager', label: 'Psykiske plager' },
  { value: 'annet', label: 'Annet' },
];

const meta = {
  title: '@helsenorge/designsystem-react/Components/VisualRadioButtonCloud',
  component: VisualRadioButtonCloud,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={VisualRadioButtonCloud} />,
      description: {
        component:
          'VisualRadioButtonCloud lar innbygger velge étt alternativ fra et sett pill-formede radioknapper som er optimert for visuell skanning.',
      },
    },
  },
  args: {
    name: 'kategori',
  },
  argTypes: {
    error: { control: 'text' },
  },
} satisfies Meta<typeof VisualRadioButtonCloud>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <VisualRadioButtonCloud {...args}>
      {mockOptions.map(option => (
        <VisualRadioButtonCloud.RadioButton key={option.value} value={option.value}>
          {option.label}
        </VisualRadioButtonCloud.RadioButton>
      ))}
    </VisualRadioButtonCloud>
  ),
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'luftveisplager',
  },
  render: args => (
    <VisualRadioButtonCloud {...args}>
      {mockOptions.map(option => (
        <VisualRadioButtonCloud.RadioButton key={option.value} value={option.value}>
          {option.label}
        </VisualRadioButtonCloud.RadioButton>
      ))}
    </VisualRadioButtonCloud>
  ),
};

export const WithError: Story = {
  args: {
    error: 'Du må velge ett alternativ',
  },
  render: args => (
    <VisualRadioButtonCloud {...args}>
      {mockOptions.map(option => (
        <VisualRadioButtonCloud.RadioButton key={option.value} value={option.value}>
          {option.label}
        </VisualRadioButtonCloud.RadioButton>
      ))}
    </VisualRadioButtonCloud>
  ),
};

export const WithExternalFieldsetAndLegend: Story = {
  render: args => {
    const titleId = useId();
    const legendId = useId();

    return (
      <>
        <Title id={titleId} htmlMarkup="h2" appearance="title2" margin={{ marginTop: 0, marginBottom: 1 }}>
          {'«Hva trenger du mest hjelp med?»'}
        </Title>
        <fieldset aria-labelledby={titleId + ' ' + legendId} style={{ border: 'none', padding: 0, margin: 0 }}>
          <legend id={legendId} style={{ marginBottom: '2rem' }} className={fontStyles.preamble}>
            {'Velg én'}
          </legend>
          <VisualRadioButtonCloud {...args}>
            {mockOptions.map(option => (
              <VisualRadioButtonCloud.RadioButton key={option.value} value={option.value}>
                {option.label}
              </VisualRadioButtonCloud.RadioButton>
            ))}
          </VisualRadioButtonCloud>
        </fieldset>
      </>
    );
  },
};
