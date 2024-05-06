import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import TagList from './TagList';
import Docs from '../../docs';
import Chip from '../Chip';
import Tag from '../Tag';

const meta = {
  title: '@helsenorge/designsystem-react/Components/TagList',
  component: TagList,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={TagList} />,
      description: {
        component:
          'Som innbygger vil jeg kunne ta stilling til flere Tager og/eller Chiper med informasjon i en liste slik at jeg effektivt kan scanne gjennom nøkkelinformasjon for elementer i listen og gjennomføre mine oppgaver.',
      },
    },
  },
} satisfies Meta<typeof TagList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <TagList>
      <Tag>{'Læring'}</Tag>
      <Tag>{'Psykisk helse'}</Tag>
      <Tag>{'Fysisk helse'}</Tag>
      <Tag>{'Livsstil'}</Tag>
    </TagList>
  ),
};

export const WithChips: Story = {
  render: () => (
    <TagList>
      <Chip action="remove" onClick={() => action('Læring clicked')}>
        {'Læring'}
      </Chip>
      <Chip action="remove" onClick={() => action('Psykisk helse clicked')}>
        {'Psykisk helse'}
      </Chip>
      <Chip action="remove" onClick={() => action('Fysisk helse clicked')}>
        {'Fysisk helse'}
      </Chip>
      <Chip action="remove" onClick={() => action('Livsstil clicked')}>
        {'Livsstil'}
      </Chip>
    </TagList>
  ),
};
