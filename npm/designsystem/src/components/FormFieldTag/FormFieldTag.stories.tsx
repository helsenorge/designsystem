import React from 'react';

import { Meta, StoryObj } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import FormFieldTag from './FormFieldTag';
import { HNDesignsystemFormFieldTag } from '../../resources/Resources';

const meta = {
  title: '@helsenorge/designsystem-react/Components/FormFieldTag',
  component: FormFieldTag,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av FormFieldTag',
      },
      page: (): React.JSX.Element => <Docs component={FormFieldTag} />,
    },
  },
  args: {
    level: 'all-required',
  },
  argTypes: {
    level: {
      control: 'select',
      options: ['all-required', 'required-field', 'optional'],
    },
  },
} satisfies Meta<typeof FormFieldTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <FormFieldTag {...args} />,
};

const resourcesEnglish: HNDesignsystemFormFieldTag = {
  allRequired: 'All fields are required',
  requiredField: 'Required field',
  optional: 'Optional',
};

export const AllTypes: Story = {
  render: () => (
    <>
      <FormFieldTag level="all-required" />
      <br />
      <FormFieldTag level="required-field" />
      <br />
      <FormFieldTag level="optional" />
      <br />
      <FormFieldTag level="all-required" resources={resourcesEnglish} />
      <br />
      <FormFieldTag level="required-field" resources={resourcesEnglish} />
      <br />
      <FormFieldTag level="optional" resources={resourcesEnglish} />
    </>
  ),
};
