import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { StoryObj, Meta } from '@storybook/react-vite';

import TagList from './TagList';
import Chip from '../Chip';
import Tag from '../Tag';

const meta = {
  title: '@helsenorge/designsystem-react/Components/TagList',
  component: TagList,
  tags: ['not-supernova'],
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
      <Chip onChipClick={() => action('Læring clicked')} onCloseClick={() => action('Fjern Læring clicked')}>
        {'Læring'}
      </Chip>
      <Chip onChipClick={() => action('Psykisk helse clicked')} onCloseClick={() => action('Fjern Psykisk helse clicked')}>
        {'Psykisk helse'}
      </Chip>
      <Chip onChipClick={() => action('Fysisk helse clicked')} onCloseClick={() => action('Fjern Fysisk helse clicked')}>
        {'Fysisk helse'}
      </Chip>
      <Chip onChipClick={() => action('Livsstil clicked')} onCloseClick={() => action('Fjern Livsstil clicked')}>
        {'Livsstil'}
      </Chip>
    </TagList>
  ),
};
