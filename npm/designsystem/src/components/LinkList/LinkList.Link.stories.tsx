import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import LinkList, { Link } from './LinkList';

const meta = {
  title: '@helsenorge/designsystem-react/Components/LinkList/LinkList.Link',
  component: Link,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={Link} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/link-list/bruk-JmsYNBpp" />
      ),
      description: {
        component:
          'Et komponent som lar deg vise en rekke lenker i et listeformat. LinkList.Link er en underkomponent av LinkList og brukes for hvert element i listen.',
      },
    },
  },
  args: {
    href: 'https://www.helsenorge.no',
    children: 'Lenketekst',
    target: '_blank',
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <LinkList>
      <LinkList.Link {...args} href={'https://www.helsenorge.no'} target="_blank"></LinkList.Link>
    </LinkList>
  ),
};
