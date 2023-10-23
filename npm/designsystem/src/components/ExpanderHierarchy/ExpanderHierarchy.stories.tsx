import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import ExpanderHierarchy from './ExpanderHierarchy';
import { shortLoremText, mediumLoremText } from '../../utils/loremtext';
import GridExample from '../GridExample';

export default {
  title: '@helsenorge∕designsystem-react/Components/ExpanderHierarchy',
  component: ExpanderHierarchy,
  parameters: {
    docs: {
      description: {
        component:
          'ExpanderList allows the creation of a single list of items which can be used as triggers to expand areas within the list to display arbitrary content.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      defaultValue: 'Nivå',
    },
    htmlMarkup: {
      control: 'select',
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      defaultValue: 'h2',
    },
    expanded: {
      control: 'boolean',
      defaultValue: false,
    },
    print: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof ExpanderHierarchy & typeof ExpanderHierarchy.Expander>;

export const Default: ComponentStory<typeof ExpanderHierarchy & typeof ExpanderHierarchy.Expander> = args => (
  <GridExample>
    <ExpanderHierarchy {...args}>
      <ExpanderHierarchy.Expander title={`${args.title} (1)`} expanded={args.expanded}>
        {shortLoremText}
        <ExpanderHierarchy>
          <ExpanderHierarchy.Expander title={`${args.title} (2)`} expanded={args.expanded}>
            {mediumLoremText}
            <ExpanderHierarchy>
              <ExpanderHierarchy.Expander title={`${args.title} (3)`} expanded={args.expanded}>
                {mediumLoremText}
                <ExpanderHierarchy>
                  <ExpanderHierarchy.Expander title={`${args.title} (4)`} expanded={args.expanded}>
                    {mediumLoremText}
                    <ExpanderHierarchy>
                      <ExpanderHierarchy.Expander title={`${args.title} (5)`} expanded={args.expanded}>
                        {mediumLoremText}
                        <ExpanderHierarchy>
                          <ExpanderHierarchy.Expander title={`${args.title} (6)`} expanded={args.expanded}>
                            {mediumLoremText}{' '}
                            <ExpanderHierarchy>
                              <ExpanderHierarchy.Expander title={`${args.title} (7)`} expanded={args.expanded}>
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
          <ExpanderHierarchy.Expander title={`${args.title} (2)`} expanded={args.expanded}>
            {mediumLoremText}
          </ExpanderHierarchy.Expander>
          <ExpanderHierarchy.Expander title={`${args.title} (2)`} expanded={args.expanded}>
            {mediumLoremText}
          </ExpanderHierarchy.Expander>
          <ExpanderHierarchy.Expander title={`${args.title} (2)`} expanded={args.expanded}>
            {mediumLoremText}
          </ExpanderHierarchy.Expander>
        </ExpanderHierarchy>
      </ExpanderHierarchy.Expander>
    </ExpanderHierarchy>
  </GridExample>
);
