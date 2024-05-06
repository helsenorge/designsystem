import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import HighlightPanel, { HighlightPanelSize } from './HighlightPanel';
import Docs from '../../docs';
import PdfFile from '../Icons/PdfFile';

const meta = {
  title: '@helsenorge/designsystem-react/Components/HighlightPanel',
  component: HighlightPanel,
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
    color: 'white',
    size: HighlightPanelSize.medium,
    htmlMarkup: 'div',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['white', 'neutral', 'blueberry', 'cherry'],
    },
    size: {
      control: 'select',
      options: HighlightPanelSize,
    },
    htmlMarkup: {
      control: 'select',
      options: ['div', 'nav', 'section', 'article', 'span'],
    },
  },
} satisfies Meta<typeof HighlightPanel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <HighlightPanel {...args} />,
};

export const WithIcon: Story = {
  args: {
    svgIcon: PdfFile,
  },
  render: args => <HighlightPanel {...args} />,
};
