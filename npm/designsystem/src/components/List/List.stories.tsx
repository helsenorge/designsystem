import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import List from './List';
import { mediumLoremText } from '../../utils/loremtext';

const meta = {
  title: '@helsenorge/designsystem-react/Components/List',
  component: List,
  parameters: {
    docs: {
      description: {
        component: 'Strukturert visning av punktvise data',
      },
      page: (): React.JSX.Element => <Docs component={List} hideStories />,
    },
  },
  args: {
    variant: 'bullet',
    margin: false,
    className: '',
    testId: '',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['bullet', 'dashed', 'numbered', 'alphabetical'],
      description: 'Changes the visual representation of the list.',
      defaultValue: 'bullet',
    },
    margin: {
      control: 'boolean',
      description: 'Adds margin above/below list',
    },
    children: {
      control: 'object',
      description: 'List contents',
    },
    className: {
      control: 'string',
      description: 'Adds className to list element.',
    },
    testId: {
      control: 'string',
      description: 'Sets the data-testid attribute.',
    },
  },
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: args => (
    <List {...args}>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>
        {mediumLoremText}
        <List variant={args.variant}>
          <List.Item>{mediumLoremText}</List.Item>
          <List.Item>{mediumLoremText}</List.Item>
          <List.Item>{mediumLoremText}</List.Item>
          <List.Item>
            {mediumLoremText}
            <List variant={args.variant}>
              <List.Item>{mediumLoremText}</List.Item>
              <List.Item>{mediumLoremText}</List.Item>
              <List.Item>{mediumLoremText}</List.Item>
              <List.Item>
                {mediumLoremText}
                <List variant={args.variant}>
                  <List.Item>{mediumLoremText}</List.Item>
                  <List.Item>{mediumLoremText}</List.Item>
                  <List.Item>{mediumLoremText}</List.Item>
                  <List.Item>
                    {mediumLoremText}
                    <List variant={args.variant}>
                      <List.Item>{mediumLoremText}</List.Item>
                      <List.Item>{mediumLoremText}</List.Item>
                      <List.Item>{mediumLoremText}</List.Item>
                      <List.Item>{mediumLoremText}</List.Item>
                    </List>
                  </List.Item>
                </List>
              </List.Item>
            </List>
          </List.Item>
        </List>
      </List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
    </List>
  ),
};

export const Bullet: Story = {
  render: () => (
    <List variant="bullet">
      <List.Item>
        {mediumLoremText}
        <List variant="bullet">
          <List.Item>
            {mediumLoremText}
            <List variant="bullet">
              <List.Item>
                {mediumLoremText}
                <List variant="bullet">
                  <List.Item>{mediumLoremText}</List.Item>
                  <List.Item>{mediumLoremText}</List.Item>
                </List>
              </List.Item>
              <List.Item>{mediumLoremText}</List.Item>
            </List>
          </List.Item>
          <List.Item>{mediumLoremText}</List.Item>
        </List>
      </List.Item>
      <List.Item>{mediumLoremText}</List.Item>
    </List>
  ),
};

export const Dashed: Story = {
  render: () => (
    <List variant="dashed">
      <List.Item>
        {mediumLoremText}
        <List variant="dashed">
          <List.Item>
            {mediumLoremText}
            <List variant="dashed">
              <List.Item>
                {mediumLoremText}
                <List variant="dashed">
                  <List.Item>{mediumLoremText}</List.Item>
                  <List.Item>{mediumLoremText}</List.Item>
                </List>
              </List.Item>
              <List.Item>{mediumLoremText}</List.Item>
            </List>
          </List.Item>
          <List.Item>{mediumLoremText}</List.Item>
        </List>
      </List.Item>
      <List.Item>{mediumLoremText}</List.Item>
    </List>
  ),
};

export const Numbered: Story = {
  render: () => (
    <List variant="numbered">
      <List.Item>
        {mediumLoremText}
        <List variant="numbered">
          <List.Item>
            {mediumLoremText}
            <List variant="numbered">
              <List.Item>
                {mediumLoremText}
                <List variant="numbered">
                  <List.Item>{mediumLoremText}</List.Item>
                  <List.Item>{mediumLoremText}</List.Item>
                </List>
              </List.Item>
              <List.Item>{mediumLoremText}</List.Item>
            </List>
          </List.Item>
          <List.Item>{mediumLoremText}</List.Item>
        </List>
      </List.Item>
      <List.Item>{mediumLoremText}</List.Item>
    </List>
  ),
};

export const Nested: Story = {
  render: () => (
    <List variant="numbered">
      <List.Item>
        {mediumLoremText}
        <List variant="bullet">
          <List.Item>
            {mediumLoremText}
            <List variant="alphabetical">
              <List.Item>
                {mediumLoremText}
                <List variant="dashed">
                  <List.Item>{mediumLoremText}</List.Item>
                  <List.Item>{mediumLoremText}</List.Item>
                </List>
              </List.Item>
              <List.Item>{mediumLoremText}</List.Item>
            </List>
          </List.Item>
          <List.Item>{mediumLoremText}</List.Item>
        </List>
      </List.Item>
      <List.Item>{mediumLoremText}</List.Item>
    </List>
  ),
};
