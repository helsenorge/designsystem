import React from 'react';

import { Title as DocsTitle, Subtitle, Description, Primary, ArgsTable, PRIMARY_STORY } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import List from './List';
import { mediumLoremText } from '../../utils/loremtext';
import GridExample from '../GridExample';

export default {
  title: 'Components/List',
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
  argTypes: {
    variant: {
      control: 'select',
      options: ['bullet', 'dashed', 'numbered', 'alphabetical'],
      defaultValue: 'bullet',
    },
    margin: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof List>;

export const Default: ComponentStory<typeof List> = args => (
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
);

export const Bullet: ComponentStory<typeof List> = () => (
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
);

export const Dashed: ComponentStory<typeof List> = () => (
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
);

export const Numbered: ComponentStory<typeof List> = () => (
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
);

export const Nested: ComponentStory<typeof List> = () => (
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
);
