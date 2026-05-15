import { useId } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Title from '../Title';
import VisualCheckboxCloud from './VisualCheckboxCloud';
import fontStyles from '../../scss/typography.module.scss';

interface MockOption {
  value: string;
  label: string;
  defaultChecked?: boolean;
}

const mockOptions: MockOption[] = [
  { value: 'muskel-og-skjelettplager', label: 'Muskel og skjelettplager' },
  { value: 'forleng-sykmelding', label: 'Forleng sykmelding', defaultChecked: true },
  { value: 'svangerskapsplager', label: 'Svangerskapsplager' },
  { value: 'hud-og-utslett', label: 'Hud og utslett' },
  { value: 'hodepine', label: 'Hodepine' },
  { value: 'luftveisplager', label: 'Luftveisplager', defaultChecked: true },
  { value: 'mage-og-tarmproblemer', label: 'Mage og tarmproblemer', defaultChecked: true },
  { value: 'oppfolging-etter-fastlegetime', label: 'Oppfølging etter fastlegetime' },
  { value: 'legeerklaering-eller-attest', label: 'Legeerklæring eller attest' },
  { value: 'allergi', label: 'Allergi' },
  { value: 'psykiske-plager', label: 'Psykiske plager' },
  { value: 'annet', label: 'Annet' },
];

const meta = {
  title: '@helsenorge/designsystem-react/Components/VisualCheckboxCloud',
  component: VisualCheckboxCloud,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={VisualCheckboxCloud} />,
      description: {
        component:
          'VisualCheckboxCloud lar innbygger velge ett eller flere alternativer fra et sett pill-formede avkrysningsbokser som er optimert for visuell skanning.',
      },
    },
  },
  args: {},
  argTypes: {
    error: { control: 'text' },
  },
} satisfies Meta<typeof VisualCheckboxCloud>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <VisualCheckboxCloud {...args}>
      {mockOptions.map(option => (
        <VisualCheckboxCloud.Checkbox key={option.value} value={option.value}>
          {option.label}
        </VisualCheckboxCloud.Checkbox>
      ))}
    </VisualCheckboxCloud>
  ),
};

export const WithDefaultChecked: Story = {
  render: args => (
    <VisualCheckboxCloud {...args}>
      {mockOptions.map(option => (
        <VisualCheckboxCloud.Checkbox key={option.value} value={option.value} defaultChecked={option.defaultChecked}>
          {option.label}
        </VisualCheckboxCloud.Checkbox>
      ))}
    </VisualCheckboxCloud>
  ),
};

export const WithError: Story = {
  args: {
    error: 'Du må velge minst ett alternativ',
  },
  render: args => (
    <VisualCheckboxCloud {...args}>
      {mockOptions.map(option => (
        <VisualCheckboxCloud.Checkbox key={option.value} value={option.value}>
          {option.label}
        </VisualCheckboxCloud.Checkbox>
      ))}
    </VisualCheckboxCloud>
  ),
};

export const WithExternalFieldsetAndLegend: Story = {
  render: args => {
    const titleId = useId();

    return (
      <>
        <fieldset aria-labelledby={titleId} style={{ border: 'none', padding: 0, margin: 0 }}>
          <div style={{ marginBottom: '2rem' }}>
            <Title id={titleId} htmlMarkup="h2" appearance="title2" margin={{ marginTop: 0, marginBottom: 1 }}>
              {'«Psykisk helse» og «Søvn og søvnvansker»'}
            </Title>
            <legend className={fontStyles.preamble}>{'Velg kategori'}</legend>
          </div>
          <VisualCheckboxCloud {...args}>
            {mockOptions.map(option => (
              <VisualCheckboxCloud.Checkbox key={option.value} value={option.value}>
                {option.label}
              </VisualCheckboxCloud.Checkbox>
            ))}
          </VisualCheckboxCloud>
        </fieldset>
      </>
    );
  },
};
