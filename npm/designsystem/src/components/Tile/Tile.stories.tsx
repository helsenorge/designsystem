import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Tile from './Tile';
import Icon, { IconSize } from '../Icons';
import AlarmClock from '../Icons/AlarmClock';
import GridExample from '../GridExample';

export default {
  title: 'Components/Tile',
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
      defaultValue: 'https://vg.no',
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
      href={'https://helsenorge.no'}
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
        href="https://helsenorge.no"
        icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
        title={<Tile.Title>Hva skal du si når du ringer 113?</Tile.Title>}
        description="Hva du heter.
      Hvor du ringer fra.
      Telefonnummer du ringer fra.
      Beskriv situasjonen og symptomer."
      />
      <Tile
        href="https://helsenorge.no"
        icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
        title={<Tile.Title>Hva skal du si når du ringer 113?</Tile.Title>}
        description="Hva du heter.
      Hvor du ringer fra.
      Telefonnummer du ringer fra.
      Beskriv situasjonen og symptomer."
      />
      <Tile
        href="https://helsenorge.no"
        icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
        title={<Tile.Title>Hva skal du si når du ringer 113?</Tile.Title>}
        description="Hva du heter.
      Hvor du ringer fra.
      Telefonnummer du ringer fra.
      Beskriv situasjonen og symptomer."
      />
      <Tile
        href="https://helsenorge.no"
        icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
        title={<Tile.Title>Hva skal du si når du ringer 113?</Tile.Title>}
        description="Hva du heter.
      Hvor du ringer fra.
      Telefonnummer du ringer fra.
      Beskriv situasjonen og symptomer."
      />
      <Tile
        href="https://helsenorge.no"
        icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
        title={<Tile.Title>Hva skal du si når du ringer 113?</Tile.Title>}
        description="Hva du heter.
      Hvor du ringer fra.
      Telefonnummer du ringer fra.
      Beskriv situasjonen og symptomer."
      />
      <Tile
        href="https://helsenorge.no"
        icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
        title={<Tile.Title>Hva skal du si når du ringer 113?</Tile.Title>}
        description="Hva du heter.
      Hvor du ringer fra.
      Telefonnummer du ringer fra.
      Beskriv situasjonen og symptomer."
      />
      <Tile
        href="https://helsenorge.no"
        icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
        title={<Tile.Title>Europeisk helsetrygdekort (nav)</Tile.Title>}
      />
      <Tile
        href="https://helsenorge.no"
        icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
        title={<Tile.Title>Europeisk helsetrygdekort (nav)</Tile.Title>}
      />
    </div>
  </GridExample>
);

export const AsButton: ComponentStory<typeof Tile> = (args: any) => (
  <GridExample>
    <Tile
      {...args}
      onClick={action('Tile clicked!')}
      htmlMarkup="button"
      icon={<Icon size={IconSize.Medium} svgIcon={AlarmClock} />}
      title={<Tile.Title htmlMarkup={'h1'}>{'External'}</Tile.Title>}
    />
  </GridExample>
);
