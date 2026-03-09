import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { Meta, StoryObj } from '@storybook/react-vite';

import List from './List';
import { mediumLoremText } from '../../utils/loremtext';
import AnchorLink from '../AnchorLink';

import styles from './stories.module.scss';

const meta = {
  title: '@helsenorge/designsystem-react/Components/List',
  component: List,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      description: {
        component: 'Strukturert visning av punktvise data',
      },
      page: (): React.JSX.Element => <Docs component={List} />,
    },
  },
  args: {
    variant: 'bullet',
    margin: false,
    className: '',
    testId: '',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['bullet', 'dashed', 'numbered', 'alphabetical'],
      description: 'Changes the visual representation of the list.',
      defaultValue: 'bullet',
    },
    margin: {
      control: 'boolean',
      description: 'Adds margin above/below list',
    },
    children: {
      control: 'object',
      description: 'List contents',
    },
    className: {
      control: 'text',
      description: 'Adds className to list element.',
    },
    testId: {
      control: 'text',
      description: 'Sets the data-testid attribute.',
    },
  },
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: args => (
    <List {...args}>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>
        {mediumLoremText}
        <List variant={args.variant}>
          <List.Item>{mediumLoremText}</List.Item>
          <List.Item>{mediumLoremText}</List.Item>
          <List.Item>{mediumLoremText}</List.Item>
          <List.Item>
            {mediumLoremText}
            <List variant={args.variant}>
              <List.Item>{mediumLoremText}</List.Item>
              <List.Item>{mediumLoremText}</List.Item>
              <List.Item>{mediumLoremText}</List.Item>
              <List.Item>
                {mediumLoremText}
                <List variant={args.variant}>
                  <List.Item>{mediumLoremText}</List.Item>
                  <List.Item>{mediumLoremText}</List.Item>
                  <List.Item>{mediumLoremText}</List.Item>
                  <List.Item>
                    {mediumLoremText}
                    <List variant={args.variant}>
                      <List.Item>{mediumLoremText}</List.Item>
                      <List.Item>{mediumLoremText}</List.Item>
                      <List.Item>{mediumLoremText}</List.Item>
                      <List.Item>{mediumLoremText}</List.Item>
                    </List>
                  </List.Item>
                </List>
              </List.Item>
            </List>
          </List.Item>
        </List>
      </List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
      <List.Item>{mediumLoremText}</List.Item>
    </List>
  ),
};

export const Bullet: Story = {
  render: () => (
    <List variant="bullet">
      <List.Item>
        {mediumLoremText}
        <List variant="bullet">
          <List.Item>
            {mediumLoremText}
            <List variant="bullet">
              <List.Item>
                {mediumLoremText}
                <List variant="bullet">
                  <List.Item>{mediumLoremText}</List.Item>
                  <List.Item>{mediumLoremText}</List.Item>
                </List>
              </List.Item>
              <List.Item>{mediumLoremText}</List.Item>
            </List>
          </List.Item>
          <List.Item>{mediumLoremText}</List.Item>
        </List>
      </List.Item>
      <List.Item>{mediumLoremText}</List.Item>
    </List>
  ),
};

export const Dashed: Story = {
  render: () => (
    <List variant="dashed">
      <List.Item>
        {mediumLoremText}
        <List variant="dashed">
          <List.Item>
            {mediumLoremText}
            <List variant="dashed">
              <List.Item>
                {mediumLoremText}
                <List variant="dashed">
                  <List.Item>{mediumLoremText}</List.Item>
                  <List.Item>{mediumLoremText}</List.Item>
                </List>
              </List.Item>
              <List.Item>{mediumLoremText}</List.Item>
            </List>
          </List.Item>
          <List.Item>{mediumLoremText}</List.Item>
        </List>
      </List.Item>
      <List.Item>{mediumLoremText}</List.Item>
    </List>
  ),
};

export const Numbered: Story = {
  render: () => (
    <List variant="numbered">
      <List.Item>
        {mediumLoremText}
        <List variant="numbered">
          <List.Item>
            {mediumLoremText}
            <List variant="numbered">
              <List.Item>
                {mediumLoremText}
                <List variant="numbered">
                  <List.Item>{mediumLoremText}</List.Item>
                  <List.Item>{mediumLoremText}</List.Item>
                </List>
              </List.Item>
              <List.Item>{mediumLoremText}</List.Item>
            </List>
          </List.Item>
          <List.Item>{mediumLoremText}</List.Item>
        </List>
      </List.Item>
      <List.Item>{mediumLoremText}</List.Item>
    </List>
  ),
};

export const Nested: Story = {
  render: () => (
    <List variant="numbered">
      <List.Item>
        {mediumLoremText}
        <List variant="bullet">
          <List.Item>
            {mediumLoremText}
            <List variant="alphabetical">
              <List.Item>
                {mediumLoremText}
                <List variant="dashed">
                  <List.Item>{mediumLoremText}</List.Item>
                  <List.Item>{mediumLoremText}</List.Item>
                </List>
              </List.Item>
              <List.Item>{mediumLoremText}</List.Item>
            </List>
          </List.Item>
          <List.Item>{mediumLoremText}</List.Item>
        </List>
      </List.Item>
      <List.Item>{mediumLoremText}</List.Item>
    </List>
  ),
};

export const AnchorlinkInList: Story = {
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
CSS:
Add this snippet to align the marker with the first line of text when 
Anchorlink has htmlMarkup 'button'.

.list-anchorlink {
  li {
    button {
      vertical-align: top;
    }
  }
}


React:

<List className={styles['list-anchorlink']}>
  <List.Item>
    <AnchorLink htmlMarkup={'a'} onClick={action('AnchorLink clicked!')} {...args}>
      {'vanlig lenke i liste, med lang tekst så den wrapper'}
    </AnchorLink>
  </List.Item>
  <List.Item>
    <AnchorLink htmlMarkup={'button'} onClick={action('AnchorLink clicked!')} {...args}>
      {'button lenke i liste, med lang tekst så den wrapper'}
    </AnchorLink>
  </List.Item>
  <List.Item>
    <AnchorLink htmlMarkup={'a'} onClick={action('AnchorLink clicked!')} {...args}>
      {'vanlig lenke i liste, med lang tekst så den wrapper'}
    </AnchorLink>
  </List.Item>
</List>
`,
      },
    },
  },
  render: args => (
    <List className={styles['list-anchorlink']}>
      <List.Item>
        <AnchorLink htmlMarkup={'a'} onClick={action('AnchorLink clicked!')} {...args}>
          {'vanlig lenke i liste, med lang tekst så den wrapper'}
        </AnchorLink>
      </List.Item>
      <List.Item>
        <AnchorLink htmlMarkup={'button'} onClick={action('AnchorLink clicked!')} {...args}>
          {'button lenke i liste, med lang tekst så den wrapper'}
        </AnchorLink>
      </List.Item>
      <List.Item>
        <AnchorLink htmlMarkup={'a'} onClick={action('AnchorLink clicked!')} {...args}>
          {'vanlig lenke i liste, med lang tekst så den wrapper'}
        </AnchorLink>
      </List.Item>
    </List>
  ),
};
