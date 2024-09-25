import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import EyebrowHeader from './EyebrowHeader';

const meta = {
  title: '@helsenorge/designsystem-react/Components/EyebrowHeader',
  component: EyebrowHeader,
  parameters: {
    docs: {
      description: {
        component:
          'EyebrowHeader har en stikktittel som gir mulighet til å videreføre et tema eller område over flere sider - slik at man implisitt ser at siden man er på tilhører et gitt tema eller område.',
      },
      page: (): React.JSX.Element => <Docs component={EyebrowHeader} />,
    },
  },
  args: {},
  argTypes: {},
} satisfies Meta<typeof EyebrowHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <EyebrowHeader {...args}>
      <EyebrowHeader.Subtitle>{'Stikktittel'}</EyebrowHeader.Subtitle>
      <EyebrowHeader.Title>{'Tittel'}</EyebrowHeader.Title>
    </EyebrowHeader>
  ),
};
