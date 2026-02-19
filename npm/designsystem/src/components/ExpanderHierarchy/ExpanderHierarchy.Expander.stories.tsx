import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import ExpanderHierarchy from './ExpanderHierarchy';
import { shortLoremText, mediumLoremText } from '../../utils/loremtext';

const Expander = ExpanderHierarchy.Expander;

const meta = {
  title: '@helsenorge/designsystem-react/Components/ExpanderHierarchy/Expander',
  component: Expander,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Expander} />,
      description: {
        component:
          'ExpanderList allows the creation of a single list of items which can be used as triggers to expand areas within the list to display arbitrary content.',
      },
    },
  },
} satisfies Meta<typeof Expander>;

export default meta;

type Story = StoryObj<typeof Expander>;

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
