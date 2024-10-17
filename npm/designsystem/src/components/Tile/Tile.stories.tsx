import React from 'react';

import { action } from '@storybook/addon-actions';
import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import Tile from './Tile';
import Icon, { IconSize } from '../Icon';
import AlarmClock from '../Icons/AlarmClock';
import Eye from '../Icons/Eye';
import SharingStatus from '../SharingStatus';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Tile',
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
    title: (
      <Tile.Title htmlMarkup={'h1'} className={''} highlighted={false} compact={false}>
        {'Inbox'}
      </Tile.Title>
    ),
    icon: <Icon size={IconSize.Medium} svgIcon={AlarmClock} />,
    description:
      'Førstehjelp de første minuttene etter at en akutt sykdom eller skade har oppstått er livsviktig og minsker risikoen for langtidsskader.',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    className: {
      control: 'text',
      description: 'Adds custom classes to the element.',
    },
    icon: {
      control: 'object',
      description: 'Sets the icon to be displayed inside the tile.',
    },
    title: {
      control: 'object',
      description: 'Sets the title to be displayed inside the tile.',
    },
    highlighted: {
      control: 'boolean',
      description: 'Toggles the highlighted style of the tile.',
    },
    description: {
      control: 'text',
      description: 'Sets the description to be displayed inside the tile.',
    },
    fixed: {
      control: 'boolean',
      description: 'Sets a fixed max and min width for the tile.',
    },
    href: {
      control: 'text',
    },
    testId: {
      control: 'text',
      description: 'Sets the data-testid attribute.',
    },
  },
} satisfies Meta<typeof Tile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
