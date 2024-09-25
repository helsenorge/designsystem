import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import ExpanderHierarchy from './ExpanderHierarchy';
import { shortLoremText, mediumLoremText } from '../../utils/loremtext';

const meta = {
  title: '@helsenorge/designsystem-react/Components/ExpanderHierarchy',
  component: ExpanderHierarchy,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={ExpanderHierarchy} />,
      description: {
        component:
          'ExpanderList allows the creation of a single list of items which can be used as triggers to expand areas within the list to display arbitrary content.',
      },
    },
  },
  args: {
    htmlMarkup: 'h2',
    print: false,
  },
  argTypes: {
    htmlMarkup: {
      control: 'select',
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Changes the underlying element of the expander title. Default: h2.',
    },
    print: {
      control: 'boolean',
      description: 'Expand all children when printing.',
    },
    children: {
      control: 'object',
    },
    level: {
      control: 'number',
      description: 'Expander nesting level. Should not be set manually.',
    },
    testId: {
      control: 'text',
      description: 'Sets the data-testid attribute on the expander list.',
    },
  },
} satisfies Meta<typeof ExpanderHierarchy>;

export default meta;

type Story = StoryObj<typeof ExpanderHierarchy>;

export const Default: Story = {
  render: args => {
    const title = 'Nivå';
    const expanded = false;
    return (
      <ExpanderHierarchy {...args}>
        <ExpanderHierarchy.Expander title={`${title} (1)`} expanded={expanded}>
          {shortLoremText}
          <ExpanderHierarchy>
            <ExpanderHierarchy.Expander title={`${title} (2)`} expanded={expanded}>
              {mediumLoremText}
              <ExpanderHierarchy>
                <ExpanderHierarchy.Expander title={`${title} (3)`} expanded={expanded}>
                  {mediumLoremText}
                  <ExpanderHierarchy>
                    <ExpanderHierarchy.Expander title={`${title} (4)`} expanded={expanded}>
                      {mediumLoremText}
                      <ExpanderHierarchy>
                        <ExpanderHierarchy.Expander title={`${title} (5)`} expanded={expanded}>
                          {mediumLoremText}
                          <ExpanderHierarchy>
                            <ExpanderHierarchy.Expander title={`${title} (6)`} expanded={expanded}>
                              {mediumLoremText}{' '}
                              <ExpanderHierarchy>
                                <ExpanderHierarchy.Expander title={`${title} (7)`} expanded={expanded}>
                                  {mediumLoremText}
                                </ExpanderHierarchy.Expander>
                              </ExpanderHierarchy>
                            </ExpanderHierarchy.Expander>
                          </ExpanderHierarchy>
                        </ExpanderHierarchy.Expander>
                      </ExpanderHierarchy>
                    </ExpanderHierarchy.Expander>
                  </ExpanderHierarchy>
                </ExpanderHierarchy.Expander>
              </ExpanderHierarchy>
            </ExpanderHierarchy.Expander>
            <ExpanderHierarchy.Expander title={`${title} (2)`} expanded={expanded}>
              {mediumLoremText}
            </ExpanderHierarchy.Expander>
            <ExpanderHierarchy.Expander title={`${title} (2)`} expanded={expanded}>
              {mediumLoremText}
            </ExpanderHierarchy.Expander>
            <ExpanderHierarchy.Expander title={`${title} (2)`} expanded={expanded}>
              {mediumLoremText}
            </ExpanderHierarchy.Expander>
          </ExpanderHierarchy>
        </ExpanderHierarchy.Expander>
      </ExpanderHierarchy>
    );
  },
};
