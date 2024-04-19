import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import ExpanderHierarchy from './ExpanderHierarchy';
import Docs from '../../docs';
import { shortLoremText, mediumLoremText } from '../../utils/loremtext';

type ExpanderHierarchyWithAndCustomArgs = React.ComponentProps<typeof ExpanderHierarchy> & {
  title: string;
  expanded: boolean;
};

const meta = {
  title: '@helsenorge∕designsystem-react/Components/ExpanderHierarchy',
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
    title: 'Nivå',
    htmlMarkup: 'h2',
    expanded: false,
    print: false,
  },
  argTypes: {
    title: {
      control: 'text',
    },
    htmlMarkup: {
      control: 'select',
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
    },
    expanded: {
      control: 'boolean',
    },
    print: {
      control: 'boolean',
    },
  },
} satisfies Meta<ExpanderHierarchyWithAndCustomArgs>;

export default meta;

type Story = StoryObj<ExpanderHierarchyWithAndCustomArgs>;

export const Default: Story = {
  render: ({ title, expanded, ...args }) => (
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
  ),
};
