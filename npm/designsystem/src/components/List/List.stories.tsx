import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import List from './List';
import Docs from '../../docs';
import { mediumLoremText } from '../../utils/loremtext';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/List',
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
    children: '',
    variant: 'bullet',
    margin: false,
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['bullet', 'dashed', 'numbered', 'alphabetical'],
    },
    margin: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof meta>;

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
