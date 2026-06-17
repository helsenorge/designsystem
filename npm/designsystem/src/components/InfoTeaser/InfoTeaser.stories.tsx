import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import InfoTeaser from './InfoTeaser';
import { allTitleTags } from '../../../.storybook/knobs';
import longLoremText from '../../utils/loremtext';
import { IconList } from '../Icons/IconNames';
import InfoSignStroke from '../Icons/InfoSignStroke';

const meta = {
  title: '@helsenorge/designsystem-react/Components/InfoTeaser',
  component: InfoTeaser,
  parameters: {
    docs: {
      description: {
        component: 'InfoTeaser viser faktainformasjon i en avgrenset høyde, med mulighet for ekspandering.',
      },
      page: (): React.JSX.Element => <Docs component={InfoTeaser} />,
    },
  },
  args: {
    title: 'Mange lurer på dette',
    children: <span>{longLoremText}</span>,
    svgIcon: InfoSignStroke,
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
    svgIcon: {
      control: {
        type: 'select',
      },
      options: IconList,
    },
  },
} satisfies Meta<typeof InfoTeaser>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <InfoTeaser {...args} />,
};

export const NoIcon: Story = {
  args: { svgIcon: undefined },
  render: args => <InfoTeaser {...args} />,
};

export const CustomContent: Story = {
  args: { title: undefined, svgIcon: undefined },
  render: args => <InfoTeaser {...args} />,
};
