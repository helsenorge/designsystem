import { useState } from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import ListEditModeItem from './ListEditMode';
import ExpanderList from '../ExpanderList';
import Icon from '../Icon';
import AlarmClock from '../Icons/AlarmClock';
import PaperPlane from '../Icons/PaperPlane';
import LazyIcon from '../LazyIcon';
import LinkList from '../LinkList';
import Toggle from '../Toggle';

const meta = {
  title: '@helsenorge/designsystem-react/_Internal/ListEditMode',
  component: ListEditModeItem,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={ListEditModeItem} />,
      description: {
        component: 'En intern hjelpekomponent som brukes i LinkList og ExpanderList for å legge til redigeringsfunksjonalitet',
      },
    },
  },
  args: {
    children: '',
    variant: 'line',
    color: 'white',
  },
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['neutral', 'blueberry', 'cherry', 'white'],
    },
    variant: {
      control: { type: 'select' },
      options: ['line', 'outline', 'fill', 'fill-negative'],
    },
  },
} satisfies Meta<typeof ListEditModeItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'fill',
    color: 'blueberry',
  },
  render: args => (
    <LinkList {...args} editMode={true}>
      <LinkList.Link
        onDelete={() => alert('Delete')}
        href={'https://www.helsenorge.no'}
        target="_blank"
        icon={<Icon svgIcon={AlarmClock} />}
      >
        {'Innhold A-Å'}
      </LinkList.Link>
      <LinkList.Link onDelete={() => alert('Delete')} htmlMarkup="button" icon={<Icon svgIcon={PaperPlane} />}>
        {'Helsenorge'}
      </LinkList.Link>
    </LinkList>
  ),
};

export const OnLinkList: Story = {
  args: {
    variant: 'fill',
    color: 'blueberry',
  },
  render: args => {
    const [editMode, setEditMode] = useState(true);
    const toggleEditMode = (): void => setEditMode(!editMode);

    const onDelete = (id: string): void => {
      alert(`Delete ${id}`);
    };
    return (
      <>
        <Toggle checked={editMode} onChange={toggleEditMode} label={[{ text: 'Redigeringsmodus' }]} />
        <br />
        <br />
        <LinkList {...args} editMode={editMode} chevron>
          <LinkList.Link
            onDelete={() => onDelete('1')}
            href={'https://www.helsenorge.no'}
            target="_blank"
            icon={<Icon svgIcon={AlarmClock} />}
          >
            {'Innhold A-Å'}
          </LinkList.Link>
          <LinkList.Link onDelete={() => onDelete('2')} htmlMarkup="button" icon={<Icon svgIcon={PaperPlane} />}>
            {'Helsenorge'}
          </LinkList.Link>
        </LinkList>
      </>
    );
  },
};

export const WithLazyIcon: Story = {
  args: {
    variant: 'fill',
    color: 'blueberry',
  },
  render: args => {
    const [editMode, setEditMode] = useState(true);
    const toggleEditMode = (): void => setEditMode(!editMode);

    const onDelete = (id: string): void => {
      alert(`Delete ${id}`);
    };
    return (
      <>
        <Toggle checked={editMode} onChange={toggleEditMode} label={[{ text: 'Redigeringsmodus' }]} />
        <br />
        <br />
        <LinkList {...args} editMode={editMode} chevron>
          <LinkList.Link
            onDelete={() => onDelete('1')}
            href={'https://www.helsenorge.no'}
            target="_blank"
            icon={<LazyIcon iconName="AlarmClock" />}
          >
            {'Innhold A-Å'}
          </LinkList.Link>
          <LinkList.Link onDelete={() => onDelete('2')} htmlMarkup="button" icon={<LazyIcon iconName="PaperPlane" />}>
            {'Helsenorge'}
          </LinkList.Link>
        </LinkList>
      </>
    );
  },
};

export const OnExpanderList: Story = {
  args: {
    variant: 'fill',
    color: 'blueberry',
  },
  render: args => {
    const [editMode, setEditMode] = useState(true);
    const toggleEditMode = (): void => setEditMode(!editMode);

    const onDelete = (id: string): void => {
      alert(`Delete ${id}`);
    };

    return (
      <>
        <Toggle checked={editMode} onChange={toggleEditMode} label={[{ text: 'Redigeringsmodus' }]} />
        <br />
        <br />
        <ExpanderList editMode={editMode} {...args}>
          <ExpanderList.Expander onDelete={() => onDelete('1')} title={'Innhold A-Å'} icon={<Icon svgIcon={AlarmClock} />}>
            {'Innhold i Expander'}
          </ExpanderList.Expander>
          <ExpanderList.Expander title={'Helsenorge'} onDelete={() => onDelete('2')} icon={<Icon svgIcon={PaperPlane} />}>
            {'Innhold i Expander'}
          </ExpanderList.Expander>
        </ExpanderList>
      </>
    );
  },
};
