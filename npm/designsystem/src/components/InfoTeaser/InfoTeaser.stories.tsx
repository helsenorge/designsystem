import React from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import InfoTeaser from './InfoTeaser';
import { allTitleTags } from '../../../.storybook/knobs';
import longLoremText from '../../utils/loremtext';
import HandWaving from '../Icons/HandWaving';

const meta = {
  title: '@helsenorge/designsystem-react/Components/InfoTeaser',
  component: InfoTeaser,
  parameters: {
    docs: {
      description: {
        component: 'Beskrivelse av InfoTeaser',
      },
      page: (): React.JSX.Element => <Docs component={InfoTeaser} />,
    },
  },
  args: {
    title: 'Mange lurer på dette',
    children: <span>{longLoremText}</span>,
    svgIcon: HandWaving,
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
  },
} satisfies Meta<typeof InfoTeaser>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => <InfoTeaser {...args} />,
};
