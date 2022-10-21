import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { allPaletteNames } from '../../../.storybook/knobs';
import { allLinkListSizes } from '../../../.storybook/knobs';
import LinkList from './LinkList';
import Icon from '../Icons';
import AlarmClock from '../Icons/AlarmClock';
import PaperPlane from '../Icons/PaperPlane';
import GridExample from '../GridExample';

export default {
  title: 'Components/LinkList',
  component: LinkList,
  argTypes: {
    chevron: {
      control: 'boolean',
      defaultValue: false,
    },
    size: {
      control: 'select',
      options: allLinkListSizes,
      defaultValue: 'medium',
    },
    color: {
      control: 'select',
      options: allPaletteNames,
      defaultValue: 'blueberry',
    },
    topBorder: {
      control: 'boolean',
      defaultValue: true,
    },
    bottomBorder: {
      control: 'boolean',
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof LinkList>;

export const Default: ComponentStory<typeof LinkList> = (args: any) => (
  <GridExample>
    <LinkList {...args}>
      <LinkList.Link>Innhold A-Å</LinkList.Link>
      <LinkList.Link>
        Frisk frukt har et høyt innhold av vann, og det høye vanninnholdet og fiberinnholdet vil fylle magen godt, gi god metthetsfølelse og
        bidra til en god fordøyelse. (Eksempel på wrapping av tekst)
      </LinkList.Link>
    </LinkList>
  </GridExample>
);

export const WithIcon: ComponentStory<typeof LinkList> = (args: any) => (
  <GridExample>
    <LinkList {...args}>
      <LinkList.Link icon={<Icon svgIcon={AlarmClock} />}>Innhold A-Å</LinkList.Link>
      <LinkList.Link icon={<Icon svgIcon={PaperPlane} />}>English</LinkList.Link>
    </LinkList>
  </GridExample>
);

export const AsButton: ComponentStory<typeof LinkList> = (args: any) => (
  <GridExample>
    <LinkList {...args}>
      <LinkList.Link htmlMarkup="button" onClick={action('Link 1 clicked')}>
        Innhold A-Å
      </LinkList.Link>
      <LinkList.Link htmlMarkup="button" onClick={action('Link 2 clicked')}>
        Frisk frukt har et høyt innhold av vann, og det høye vanninnholdet og fiberinnholdet vil fylle magen godt, gi god metthetsfølelse og
        bidra til en god fordøyelse. (Eksempel på wrapping av tekst)
      </LinkList.Link>
    </LinkList>
  </GridExample>
);
