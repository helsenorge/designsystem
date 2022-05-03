import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { allPaletteNames } from '../../../.storybook/knobs';
import { allLinkListSizes } from '../../../.storybook/knobs';
import LinkList from './LinkList';
import Icon from '../Icons';
import AlarmClock from '../Icons/AlarmClock';
import PaperPlane from '../Icons/PaperPlane';

export default {
  title: 'LinkList',
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
  <div
    style={{
      width: '40rem',
    }}
  >
    <LinkList {...args}>
      <LinkList.Link>Innhold A-Å</LinkList.Link>
      <LinkList.Link>
        Frisk frukt har et høyt innhold av vann, og det høye vanninnholdet og fiberinnholdet vil fylle magen godt, gi god metthetsfølelse og
        bidra til en god fordøyelse. (Eksempel på wrapping av tekst)
      </LinkList.Link>
    </LinkList>
  </div>
);

export const WithIcon: ComponentStory<typeof LinkList> = (args: any) => (
  <div
    style={{
      width: '40rem',
    }}
  >
    <LinkList {...args}>
      <LinkList.Link icon={<Icon svgIcon={AlarmClock} />}>Innhold A-Å</LinkList.Link>
      <LinkList.Link icon={<Icon svgIcon={PaperPlane} />}>English</LinkList.Link>
    </LinkList>
  </div>
);
