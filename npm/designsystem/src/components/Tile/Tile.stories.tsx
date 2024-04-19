import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';

import Tile from './Tile';
import Docs from '../../docs';
import Icon, { IconSize } from '../Icon';
import AlarmClock from '../Icons/AlarmClock';
import Eye from '../Icons/Eye';
import SharingStatus from '../SharingStatus';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Tile',
  component: Tile,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Tile} />,
      description: {
        component: 'Som innbygger vil jeg kunne vise knapp og link innhold i ulike layouts og formater.',
      },
    },
  },
  args: {
    fixed: false,
    highlighted: false,
    href: 'https://www.helsenorge.no',
    description:
      'Førstehjelp de første minuttene etter at en akutt sykdom eller skade har oppstått er livsviktig og minsker risikoen for langtidsskader.',
  },
  argTypes: {
    fixed: {
      control: 'boolean',
    },
    highlighted: {
      control: 'boolean',
    },
    href: {
      control: 'text',
    },
    description: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Tile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Icon size={IconSize.Medium} svgIcon={AlarmClock} />,
    title: <Tile.Title htmlMarkup={'h1'}>{'Inbox'}</Tile.Title>,
  },
  render: args => <Tile {...args} />,
};

export const External: Story = {
  args: {
    icon: <Icon size={IconSize.Medium} svgIcon={AlarmClock} />,
    href: 'https://www.helsenorge.no',
    title: <Tile.Title htmlMarkup={'h1'}>{'External'}</Tile.Title>,
  },
  render: args => <Tile {...args} />,
};

export const WrappedContainer: StoryObj = {
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 33.3%)',
        gridGap: '1.5rem',
      }}
    >
      <Tile
        href="https://www.helsenorge.no"
        icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
        title={<Tile.Title>{'Hva skal du si når du ringer 113?'}</Tile.Title>}
        description="Hva du heter.
        Hvor du ringer fra.
        Telefonnummer du ringer fra.
        Beskriv situasjonen og symptomer."
      />
      <Tile
        href="https://www.helsenorge.no"
        icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
        title={<Tile.Title>{'Hva skal du si når du ringer 113?'}</Tile.Title>}
        description="Hva du heter.
        Hvor du ringer fra.
        Telefonnummer du ringer fra.
        Beskriv situasjonen og symptomer."
      />
      <Tile
        href="https://www.helsenorge.no"
        icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
        title={<Tile.Title>{'Hva skal du si når du ringer 113?'}</Tile.Title>}
        description="Hva du heter.
        Hvor du ringer fra.
        Telefonnummer du ringer fra.
        Beskriv situasjonen og symptomer."
      />
      <Tile
        href="https://www.helsenorge.no"
        icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
        title={<Tile.Title>{'Hva skal du si når du ringer 113?'}</Tile.Title>}
        description="Hva du heter.
        Hvor du ringer fra.
        Telefonnummer du ringer fra.
        Beskriv situasjonen og symptomer."
      />
      <Tile
        href="https://www.helsenorge.no"
        icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
        title={<Tile.Title>{'Hva skal du si når du ringer 113?'}</Tile.Title>}
        description="Hva du heter.
        Hvor du ringer fra.
        Telefonnummer du ringer fra.
        Beskriv situasjonen og symptomer."
      />
      <Tile
        href="https://www.helsenorge.no"
        icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
        title={<Tile.Title>{'Hva skal du si når du ringer 113?'}</Tile.Title>}
        description="Hva du heter.
        Hvor du ringer fra.
        Telefonnummer du ringer fra.
        Beskriv situasjonen og symptomer."
      />
      <Tile
        href="https://www.helsenorge.no"
        icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
        title={<Tile.Title>{'Europeisk helsetrygdekort (nav)'}</Tile.Title>}
      />
      <Tile
        href="https://www.helsenorge.no"
        icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
        title={<Tile.Title>{'Europeisk helsetrygdekort (nav)'}</Tile.Title>}
      />
    </div>
  ),
};

export const WithOnClick: Story = {
  args: {
    onClick: action('Tile clicked!'),
    icon: <Icon size={IconSize.Medium} svgIcon={AlarmClock} />,
    title: <Tile.Title htmlMarkup={'h1'}>{'External'}</Tile.Title>,
  },
  render: args => <Tile {...args} />,
};

export const ReactChildren: Story = {
  args: {
    href: 'https://www.helsenorge.no',
    icon: <Icon size={IconSize.Medium} svgIcon={AlarmClock} />,
    title: <Tile.Title>{'Hva skal du si når du ringer 113?'}</Tile.Title>,
    description: 'Hva du heter. Hvor du ringer fra. Telefonnummer du ringer fra. Beskriv situasjonen og symptomer.',
  },
  render: args => (
    <Tile {...args}>
      <SharingStatus icon={Eye} color={'kiwi'}>
        {'Eksempel på React Child'}
      </SharingStatus>
    </Tile>
  ),
};
