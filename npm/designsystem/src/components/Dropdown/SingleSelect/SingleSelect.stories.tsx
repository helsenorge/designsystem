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
  argTypes: {},
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
