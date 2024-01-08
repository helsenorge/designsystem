import React from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Tile from './Tile';
import GridExample from '../GridExample';
import Icon, { IconSize } from '../Icon';
import AlarmClock from '../Icons/AlarmClock';
import Eye from '../Icons/Eye';
import SharingStatus from '../SharingStatus';

export default {
  title: '@helsenorge∕designsystem-react/Components/Tile',
  component: Tile,
  parameters: {
    docs: {
      description: {
        component: 'Som innbygger vil jeg kunne vise knapp og link innhold i ulike layouts og formater.',
      },
    },
  },
  argTypes: {
    fixed: {
      control: 'boolean',
      defaultValue: false,
    },
    highlighted: {
      control: 'boolean',
      defaultValue: false,
    },
    href: {
      control: 'text',
      defaultValue: 'https://www.helsenorge.no',
    },
    description: {
      control: 'text',
      defaultValue:
        'Førstehjelp de første minuttene etter at en akutt sykdom eller skade har oppstått er livsviktig og minsker risikoen for langtidsskader.',
    },
  },
} as ComponentMeta<typeof Tile>;

export const Default: ComponentStory<typeof Tile> = (args: any) => (
  <GridExample>
    <Tile
      {...args}
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title htmlMarkup={'h1'}>{'Inbox'}</Tile.Title>}
    />
  </GridExample>
);

export const External: ComponentStory<typeof Tile> = (args: any) => (
  <GridExample>
    <Tile
      {...args}
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      href={'https://www.helsenorge.no'}
      title={<Tile.Title htmlMarkup={'h1'}>{'External'}</Tile.Title>}
    />
  </GridExample>
);

export const WrappedContainer: ComponentStory<typeof Tile> = (args: any) => (
  <GridExample>
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
  </GridExample>
);

export const WithOnClick: ComponentStory<typeof Tile> = (args: any) => (
  <GridExample>
    <Tile
      {...args}
      onClick={action('Tile clicked!')}
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title htmlMarkup={'h1'}>{'External'}</Tile.Title>}
    />
  </GridExample>
);

export const ReactChildren: ComponentStory<typeof Tile> = (args: any) => (
  <GridExample>
    <Tile
      href="https://www.helsenorge.no"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title>{'Hva skal du si når du ringer 113?'}</Tile.Title>}
      description="Hva du heter.
      Hvor du ringer fra.
      Telefonnummer du ringer fra.
      Beskriv situasjonen og symptomer."
    >
      <SharingStatus icon={Eye} color={'kiwi'}>
        {'Eksempel på React Child'}
      </SharingStatus>
    </Tile>
  </GridExample>
);
