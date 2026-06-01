import { useId } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Title from '../Title';
import VisualCheckboxGroup from './VisualCheckboxGroup';
import fontStyles from '../../scss/typography.module.scss';

interface MockOption {
  value: string;
  label: string;
  defaultChecked?: boolean;
}

const mockOptions1: MockOption[] = [
  { value: 'muskel-og-skjelettplager', label: 'Muskel og skjelettplager' },
  { value: 'forleng-sykmelding', label: 'Forleng sykmelding', defaultChecked: true },
  { value: 'svangerskapsplager', label: 'Svangerskapsplager' },
];

const mockOptions2: MockOption[] = [
  { value: 'muskel-og-skjelettplager', label: 'Muskel og skjelettplager' },
  { value: 'forleng-sykmelding', label: 'Forleng sykmelding', defaultChecked: true },
  { value: 'svangerskapsplager', label: 'Svangerskapsplager' },
  { value: 'hud-og-utslett', label: 'Hud og utslett' },
  { value: 'hodepine', label: 'Hodepine' },
  { value: 'luftveisplager', label: 'Luftveisplager', defaultChecked: true },
  { value: 'mage-og-tarmproblemer', label: 'Mage og tarmproblemer', defaultChecked: true },
  { value: 'oppfolging-etter-fastlegetime', label: 'Oppfølging etter fastlegetime' },
];

const meta = {
  title: '@helsenorge/designsystem-react/Components/VisualCheckboxGroup',
  component: VisualCheckboxGroup,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={VisualCheckboxGroup} />,
      description: {
        component:
          'VisualCheckboxGroup lar innbygger velge ett eller flere alternativer fra et sett avkrysningsbokser med ramme som er optimert for visuell skanning.',
      },
    },
  },
  args: {},
  argTypes: {
    error: { control: 'text' },
    variant: {
      control: 'radio',
      options: ['line', 'rectangle'],
    },
    mobileLineVariantLimit: { control: 'number' },
  },
} satisfies Meta<typeof VisualCheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'rectangle',
  },
  render: args => (
    <VisualCheckboxGroup {...args}>
      {mockOptions1.map(option => (
        <VisualCheckboxGroup.VisualCheckbox
          key={option.value}
          value={option.value}
          visualContent={<img src="https://placehold.co/64x64" alt="" />}
        >
          {option.label}
        </VisualCheckboxGroup.VisualCheckbox>
      ))}
    </VisualCheckboxGroup>
  ),
};

export const WithDefaultChecked: Story = {
  render: args => (
    <VisualCheckboxGroup {...args}>
      {mockOptions1.map(option => (
        <VisualCheckboxGroup.VisualCheckbox
          key={option.value}
          value={option.value}
          defaultChecked={option.defaultChecked}
          visualContent={<img src="https://placehold.co/64x64" alt="" />}
        >
          {option.label}
        </VisualCheckboxGroup.VisualCheckbox>
      ))}
    </VisualCheckboxGroup>
  ),
};

export const WithError: Story = {
  args: {
    error: 'Du må velge minst ett alternativ',
  },
  render: args => (
    <VisualCheckboxGroup {...args}>
      {mockOptions1.map(option => (
        <VisualCheckboxGroup.VisualCheckbox
          key={option.value}
          value={option.value}
          visualContent={<img src="https://placehold.co/64x64" alt="" />}
        >
          {option.label}
        </VisualCheckboxGroup.VisualCheckbox>
      ))}
    </VisualCheckboxGroup>
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
          <VisualCheckboxGroup {...args}>
            {mockOptions1.map(option => (
              <VisualCheckboxGroup.VisualCheckbox
                key={option.value}
                value={option.value}
                visualContent={<img src="https://placehold.co/64x64" alt="" />}
              >
                {option.label}
              </VisualCheckboxGroup.VisualCheckbox>
            ))}
          </VisualCheckboxGroup>
        </fieldset>
      </>
    );
  },
};

export const VariantLine: Story = {
  args: {
    variant: 'line',
  },
  render: args => (
    <VisualCheckboxGroup {...args}>
      {mockOptions1.map(option => (
        <VisualCheckboxGroup.VisualCheckbox
          key={option.value}
          value={option.value}
          visualContent={<img src="https://placehold.co/64x64" alt="" />}
        >
          {option.label}
        </VisualCheckboxGroup.VisualCheckbox>
      ))}
    </VisualCheckboxGroup>
  ),
};

export const VariantRectangle: Story = {
  args: {
    variant: 'rectangle',
  },
  render: args => (
    <VisualCheckboxGroup {...args}>
      {mockOptions1.map(option => (
        <VisualCheckboxGroup.VisualCheckbox
          key={option.value}
          value={option.value}
          visualContent={<img src="https://placehold.co/64x64" alt="" />}
        >
          {option.label}
        </VisualCheckboxGroup.VisualCheckbox>
      ))}
    </VisualCheckboxGroup>
  ),
};

export const MobileLineVariantLimit: Story = {
  args: {
    variant: 'rectangle',
    mobileLineVariantLimit: 4,
  },
  render: args => (
    <VisualCheckboxGroup {...args}>
      {mockOptions2.map(option => (
        <VisualCheckboxGroup.VisualCheckbox
          key={option.value}
          value={option.value}
          visualContent={<img src="https://placehold.co/64x64" alt="" />}
        >
          {option.label}
        </VisualCheckboxGroup.VisualCheckbox>
      ))}
    </VisualCheckboxGroup>
  ),
};
