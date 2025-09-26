import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import HighlightPanel from './HighlightPanel';
import PdfFile from '../Icons/PdfFile';
import Spacer from '../Spacer';

const meta = {
  title: '@helsenorge/designsystem-react/Components/HighlightPanel',
  component: HighlightPanel,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={HighlightPanel} />,
      description: {
        component:
          'HighlightPanel hjelper innbygger å oppfatte viktigere innhold, der hvor det er behov for å utheve et innholdsområde fremfor annet innhold på samme side',
      },
    },
  },
  args: {
    children:
      'Risiko for alvorleg sjukdom aukar med alderen og underliggande sjukdomar, og menn har høgare risiko enn kvinner. Unge personar utan kjende risikofaktorar kan også få eit alvorleg forløp av sjukdomen. Det er meir sannsynleg at dette skjer dersom dei har underliggande sjukdomar.',
    color: 'blueberry',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['white', 'neutral', 'blueberry', 'cherry'],
    },
    htmlMarkup: {
      control: 'select',
      options: ['div', 'nav', 'section', 'article', 'span'],
    },
    variant: {
      control: 'select',
      options: ['normal', 'compact'],
    },
  },
} satisfies Meta<typeof HighlightPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <HighlightPanel {...args} />,
};

export const AllColors: Story = {
  render: args => (
    <>
      <HighlightPanel {...args} color="blueberry" />
      <Spacer size="m" />
      <HighlightPanel {...args} color="neutral" />
      <Spacer size="m" />
      <HighlightPanel {...args} color="cherry" />
      <Spacer size="m" />
      <HighlightPanel {...args} color="white" />
    </>
  ),
};

export const WithIcon: Story = {
  args: {
    svgIcon: PdfFile,
  },
  render: args => <HighlightPanel {...args} svgIcon={PdfFile} />,
};
