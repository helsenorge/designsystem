import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import ElementHeaderText from './ElementHeaderText';
import { allTitleTags } from '../../../../.storybook/knobs';
import ElementHeader from '../ElementHeader';

const meta = {
  title: '@helsenorge/designsystem-react/_Internal/ElementHeader/Text',
  component: ElementHeaderText,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={ElementHeaderText} />,
    },
  },
  args: {
    firstText: 'Element header text',
  },
  argTypes: {
    firstText: {
      control: 'text',
      description: 'The first text in the ElementHeaderText Component',
    },
    firstTextEmphasised: {
      control: 'boolean',
      description: 'Will style the first text as bold',
    },
    secondText: {
      control: 'text',
      description: 'The second text in the ElementHeaderText Component',
    },
    secondTextEmphasised: {
      control: 'boolean',
      description: 'Will style the second text as bold',
    },
    subText: {
      control: 'boolean',
      description: 'Whether or not this ElementHeaderText is a sub text',
    },
    className: {
      control: 'text',
      description: 'Adds custom classes to the ElementHeaderText component.',
    },
    testId: {
      control: 'text',
      description: 'Sets the data-testid attribute.',
    },
    titleHtmlMarkup: {
      control: 'select',
      options: allTitleTags,
      description: 'Changes the underlying element of the text. Default: span',
    },
  },
} satisfies Meta<typeof ElementHeaderText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: args => (
    <ElementHeader>
      <ElementHeader.Text {...args} />
    </ElementHeader>
  ),
};
