import React from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';

import HelpTeaser from './HelpTeaser';
import { allTitleTags } from '../../../.storybook/knobs';
import longLoremText from '../../utils/loremtext';

const meta = {
  title: '@helsenorge/designsystem-react/Components/HelpTeaser',
  component: HelpTeaser,
  parameters: {
    docs: {
      description: {
        component: 'HelpTeaser viser hjelpeinformasjon i en avgrenset høyde, med mulighet for ekspandering.',
      },
      page: (): React.JSX.Element => <Docs component={HelpTeaser} />,
    },
  },
  args: {
    title: 'Mange lurer på dette',
    children: <span>{longLoremText}</span>,
  },
  argTypes: {
    title: {
      control: 'text',
    },
    htmlMarkup: {
      control: {
        type: 'select',
        options: ['div', 'section', 'aside', 'article'],
      },
    },
    titleHtmlMarkup: {
      control: {
        type: 'select',
        options: allTitleTags,
      },
    },
    collapsedMaxHeight: {
      control: 'text',
      description: 'Override the default max height for collapsed teaser. Default is 12.25rem',
    },
  },
} satisfies Meta<typeof HelpTeaser>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => <HelpTeaser {...args} />,
};
