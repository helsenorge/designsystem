import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import ExpanderList, { Expander } from './ExpanderList';
import { allTitleTags } from '../../../.storybook/knobs';

const meta = {
  title: '@helsenorge/designsystem-react/Components/ExpanderList/ExpanderList.Expander',
  component: Expander,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Expander} />,
      description: {
        component:
          'ExpanderList er en liste av elementer som skjuler detaljinformasjon når den ikke trengs, og gjør den lett tilgjengelig i kontekst når den trengs.',
      },
    },
  },
  args: {
    title: 'Her skrives en kort overskrift.',
    children: <span>{'Innhold i expander'}</span>,
  },
  argTypes: {
    id: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    titleHtmlMarkup: {
      control: 'select',
      options: allTitleTags,
      description: 'Changes the underlying element of the title. Default: span',
    },
    children: {
      control: 'object',
    },
    className: {
      control: 'text',
    },
    icon: {
      control: 'object',
    },
    expanded: {
      control: 'boolean',
      description: 'Controls the expander state',
    },
    testId: {
      control: 'text',
    },
    handleExpanderClick: { action: 'handleExpanderClick', description: 'Called when clicking the Expander.' },
    onExpand: { action: 'onExpand', description: 'Called when expander is open/closed.' },
    zIndex: {
      control: 'number',
      description: 'Overrides the default z-index of the expander header',
    },
    highlightText: {
      control: 'text',
      description: 'Highlights text in title and content. Override if different from list.',
    },
    status: {
      control: 'select',
      options: ['none', 'new'],
      description: 'Displays a status on the left side: default none',
    },
  },
} satisfies Meta<typeof Expander>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <>
      <ExpanderList>
        <ExpanderList.Expander {...args}>{args.children}</ExpanderList.Expander>
        <ExpanderList.Expander {...args}>{args.children}</ExpanderList.Expander>
      </ExpanderList>
    </>
  ),
};
