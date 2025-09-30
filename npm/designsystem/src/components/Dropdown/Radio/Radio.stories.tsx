import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import Radio from './Radio';
import Label from '../../Label';
import Dropdown from '../Dropdown';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Dropdown/Radio',
  component: Radio,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Radio} />,
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
    label: 'Ta et valg',
  },
  argTypes: {},
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Dropdown label="Dropdown" placeholder="Velg en">
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 1', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 2', type: 'subdued' }]} />} name="radiobutton" />
      <Dropdown.Radio label={<Label labelTexts={[{ text: 'Valg 3', type: 'subdued' }]} />} name="radiobutton" />
    </Dropdown>
  ),
};
