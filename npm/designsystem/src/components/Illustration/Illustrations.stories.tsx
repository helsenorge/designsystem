import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import HighlightPanel from '../HighlightPanel';
import { IllustrationList } from '../Illustrations/IllustrationNames';
import LazyIllustration from '../LazyIllustration';
import Spacer from '../Spacer';
import Title from '../Title';

type IllustrationWallWithAndCustomArgs = React.ComponentProps<typeof LazyIllustration> & {
  query: string;
};

const meta = {
  title: '@helsenorge/designsystem-react/Components/Illustration',
  component: LazyIllustration,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={LazyIllustration} />,
      description: {
        component: 'LazyIllustration lar deg vise et av flere ikoner i ulike størrelser og farger',
      },
    },
  },
  args: {
    size: 200,
    color: 'neutral',
    ariaLabel: '',
  },
  argTypes: {
    query: {
      control: 'text',
    },
    size: {
      control: 'number',
    },
    color: {
      control: 'select',
      options: ['neutral', 'blueberry', 'cherry'],
    },
    ariaLabel: {
      control: 'text',
    },
  },
} satisfies Meta<IllustrationWallWithAndCustomArgs>;

export default meta;

type Story = StoryObj<IllustrationWallWithAndCustomArgs>;

export const IllustrationWall: Story = {
  render: args => {
    const filtered = IllustrationList.filter(x => (args.query ? x.toLowerCase().includes(args.query.toLowerCase()) : true));

    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {filtered.map(illustrationName => (
          <div key={illustrationName}>
            <Title htmlMarkup="h2" appearance="title5">
              {illustrationName}
            </Title>
            <Spacer />
            <HighlightPanel color={args.color}>
              <LazyIllustration color={args.color} size={args.size} illustrationName={illustrationName} />
            </HighlightPanel>
          </div>
        ))}
      </div>
    );
  },
};
