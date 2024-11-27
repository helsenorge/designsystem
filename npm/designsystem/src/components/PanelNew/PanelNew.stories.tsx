import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import PanelNew, { PanelNewVariant, PanelNewLayout, PanelNewStacking } from './PanelNew';

const meta = {
  title: '@helsenorge/designsystem-react/Components/PanelNew',
  component: PanelNew,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av PanelNew',
      },
      page: (): React.JSX.Element => <Docs component={PanelNew} />,
    },
  },
  args: {},
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(PanelNewVariant),
    },
    color: {
      control: 'select',
      options: ['blueberry', 'neutral', 'white'],
    },
    layout: {
      control: 'select',
      options: Object.values(PanelNewLayout),
    },
    stacking: {
      control: 'select',
      options: Object.values(PanelNewStacking),
    },
  },
} satisfies Meta<typeof PanelNew>;

export default meta;

type Story = StoryObj<typeof meta>;

const PreviewContainer = ({ children }) => {
  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#BD10E040', border: '1px #BD10E0 dotted', color: '#BD10E0' }}>
      {children}
    </div>
  );
};

export const Default: Story = {
  args: {},
  render: args => (
    <PanelNew {...args}>
      <PanelNew.PreContainer>
        <PreviewContainer>{'Precontainer'}</PreviewContainer>
      </PanelNew.PreContainer>
      <PanelNew.A>
        <PreviewContainer>{'Content A'}</PreviewContainer>
      </PanelNew.A>
      <PanelNew.B>
        <PreviewContainer>{'Content B'}</PreviewContainer>
      </PanelNew.B>
      <PanelNew.C>
        <PreviewContainer>{'Content C'}</PreviewContainer>
      </PanelNew.C>
    </PanelNew>
  ),
};
