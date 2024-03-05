import React from 'react';

import { Title as DocsTitle, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { Meta, StoryObj } from '@storybook/react';

import List from './List';
import { mediumLoremText } from '../../utils/loremtext';
import GridExample from '../GridExample';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/List',
  component: List,
  parameters: {
    docs: {
      description: {
        component: 'Strukturert visning av punktvise data',
      },
      page: () => (
        <>
          <DocsTitle />
          <Subtitle />
          <Description />
          <Primary />
          <ArgsTable story={PRIMARY_STORY} />
        </>
      ),
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
    <GridExample>
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
    </GridExample>
  ),
};

export const Bullet: Story = {
  render: () => (
    <GridExample>
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
    </GridExample>
  ),
};

export const Dashed: Story = {
  render: () => (
    <GridExample>
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
    </GridExample>
  ),
};

export const Numbered: Story = {
  render: () => (
    <GridExample>
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
    </GridExample>
  ),
};

export const Nested: Story = {
  render: () => (
    <GridExample>
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
    </GridExample>
  ),
};
