import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import PanelTitle from './PanelTitle';
import { allTitleTags } from '../../../../.storybook/knobs';
import Badge from '../../Badge';
import Icon from '../../Icon';
import PdfFile from '../../Icons/PdfFile';
import Panel from '../Panel';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Panel/Panel.Title',
  component: PanelTitle,
  tags: ['new'],
  parameters: {
    docs: {
      description: {
        component: 'Panel benyttes for å vise formaterte data på et avgrenset område, og gjør det scanbart og tilgjengelig for innbygger.',
      },
      page: (): React.JSX.Element => <Docs component={PanelTitle} />,
    },
  },
  args: {
    title: 'Tittel på panelet',
    icon: <Icon svgIcon={PdfFile} />,
    badge: <Badge>{'Badge'}</Badge>,
  },
  argTypes: {
    badge: {
      control: 'object',
    },
    icon: {
      control: 'object',
    },
    testId: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    titleMarkup: {
      control: 'select',
      options: allTitleTags,
    },
    highlightText: {
      control: 'text',
    },
  },
} satisfies Meta<typeof PanelTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <Panel>
      <Panel.Title {...args} />
      <Panel.A>{'Innhold i container A'}</Panel.A>
    </Panel>
  ),
};
