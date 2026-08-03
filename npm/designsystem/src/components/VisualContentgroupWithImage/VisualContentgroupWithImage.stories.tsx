import type React from 'react';
import { useId } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { Meta, StoryObj } from '@storybook/react-vite';

import VisualContentgroupWithImage from './VisualContentgroupWithImage';
import FormGroup from '../FormGroup';
import Label from '../Label';
import Radio from '../Radio';
import Spacer from '../Spacer';
import Title from '../Title';

interface MockOption {
  value: string;
  label: string;
}

const mockOptions: MockOption[] = [
  { value: 'muskel-og-skjelettplager', label: 'Muskel og skjelettplager' },
  { value: 'forleng-sykmelding', label: 'Forleng sykmelding' },
  { value: 'svangerskapsplager', label: 'Svangerskapsplager' },
];

const meta = {
  title: '@helsenorge/designsystem-react/Components/VisualContentgroupWithImage',
  component: VisualContentgroupWithImage,
  parameters: {
    docs: {
      description: {
        component:
          'VisualContentgroupWithImage viser et bilde sammen med annet innhold i en ramme med valgbart størrelsesforhold som er optimert for visuell skanning.',
      },
      page: (): React.JSX.Element => <Docs component={VisualContentgroupWithImage} />,
    },
  },
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    visualContent: <img src="https://placehold.co/709x472" alt="Placeholder bilde" />,
    imageRatio: 'square',
  },
  argTypes: {},
} satisfies Meta<typeof VisualContentgroupWithImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => <VisualContentgroupWithImage {...args} />,
};

export const ImageRatios: Story = {
  args: {},
  render: args => (
    <>
      <VisualContentgroupWithImage {...args} imageRatio="square" />
      <Spacer size="2xl" />
      <VisualContentgroupWithImage {...args} imageRatio="landscape" />
    </>
  ),
};

export const WithFormElements: Story = {
  args: { children: undefined },
  render: args => {
    const titleId = useId();
    const legendId = useId();

    return (
      <VisualContentgroupWithImage {...args}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Title id={titleId} htmlMarkup="h2" appearance="title2" margin={{ marginTop: 0, marginBottom: 1 }}>
            {'«Hva trenger du mest hjelp med?»'}
          </Title>

          <FormGroup legend={'Velg ett alternativ'} name={'gruppe1'} aria-labelledby={titleId} aria-describedby={legendId}>
            {mockOptions.map(option => (
              <Radio key={option.value} inputId={option.value} label={<Label labelTexts={[{ text: option.label, type: 'subdued' }]} />} />
            ))}
          </FormGroup>
        </div>
      </VisualContentgroupWithImage>
    );
  },
};
