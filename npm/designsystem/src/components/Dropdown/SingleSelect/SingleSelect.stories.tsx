import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import SingleSelectItem from './SingleSelectItem';
import Dropdown from '../Dropdown';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Dropdown/SingleSelect',
  component: SingleSelectItem,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={SingleSelectItem} />,
      description: {
        component:
          'Som innbygger ønsker jeg å kunne gjøre ett valg i en liste der hvor det ikke er plass til å vise listen i grensesnittet',
      },
      story: {
        inline: false,
        iframeHeight: '40rem',
      },
    },
  },
  args: {
    text: 'Ta et valg',
  },
  argTypes: {
    text: {
      control: 'text',
      description: 'The text to the singleSelectItem',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the singleSelectItem',
    },
    value: {
      control: 'text',
      description: 'Value for this singleSelectItem option - used by the parent wrapper to keep track of the context',
    },
    testId: {
      control: 'text',
      description: 'Sets the data-testid attribute.',
    },
    asChild: {
      control: 'boolean',
      description: 'When true, onclick and keyboard events will be passed to the child Button or AnchorLink.',
    },
    children: {
      control: 'object',
      description: 'Only use when asChild is set to true and only pass one child',
    },
    defaultSelected: {
      control: 'boolean',
      description: 'Marks this option as initially selected',
    },
    ['aria-describedby']: {
      control: 'text',
      description: 'aria-describedby passthrough if needed',
    },
  },
} satisfies Meta<typeof SingleSelectItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Dropdown triggerText="Velg en">
      <Dropdown.SingleSelectItem text={'Valg 1'} />
      <Dropdown.SingleSelectItem text={'Valg 2'} />
      <Dropdown.SingleSelectItem text={'Valg 3'} />
    </Dropdown>
  ),
};
