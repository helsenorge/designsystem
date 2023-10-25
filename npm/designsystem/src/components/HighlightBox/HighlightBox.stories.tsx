import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import HighlightBox, { HighlightBoxSize } from './HighlightBox';
import PdfFile from '../Icons/PdfFile';

export default {
  title: '@helsenorge∕designsystem-react/Components/HighlightBox',
  component: HighlightBox,
  parameters: {
    docs: {
      description: {
        component:
          'HighlightBox hjelper innbygger å oppfatte viktigere innhold, der hvor det er behov for å utheve et innholdsområde fremfor annet innhold på samme side',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      defaultValue:
        'Risiko for alvorleg sjukdom aukar med alderen og underliggande sjukdomar, og menn har høgare risiko enn kvinner. Unge personar utan kjende risikofaktorar kan også få eit alvorleg forløp av sjukdomen. Det er meir sannsynleg at dette skjer dersom dei har underliggande sjukdomar.',
    },
    color: {
      control: 'select',
      options: ['white', 'neutral', 'blueberry', 'cherry'],
      defaultValue: 'white',
    },
    size: {
      control: 'select',
      options: HighlightBoxSize,
      defaultValue: HighlightBoxSize.medium,
    },
    htmlMarkup: {
      control: 'select',
      options: ['div', 'nav', 'section', 'article', 'span'],
      defaultValue: 'div',
    },
  },
} as ComponentMeta<typeof HighlightBox>;

export const Default: ComponentStory<typeof HighlightBox> = args => <HighlightBox {...args}>{args.children}</HighlightBox>;

export const WithIcon: ComponentStory<typeof HighlightBox> = args => (
  <HighlightBox {...args} svgIcon={PdfFile}>
    {args.children}
  </HighlightBox>
);
