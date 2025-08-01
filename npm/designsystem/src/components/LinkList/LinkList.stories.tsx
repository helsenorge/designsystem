import React, { useRef, useEffect } from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import LinkList from './LinkList';
import { allLinkListSizes } from '../../../.storybook/knobs';
import Avatar from '../Avatar';
import Badge from '../Badge';
import Icon from '../Icon';
import AlarmClock from '../Icons/AlarmClock';
import PaperPlane from '../Icons/PaperPlane';
import ListHeader from '../ListHeader/ListHeader';
import ListHeaderText from '../ListHeader/ListHeaderText/ListHeaderText';
import { StatusDotVariant } from '../StatusDot';

const meta = {
  title: '@helsenorge/designsystem-react/Components/LinkList',
  component: LinkList,
  tags: ['breaking'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={LinkList} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/link-list/bruk-JmsYNBpp" />
      ),
      description: {
        component: 'Et komponent som lar deg vise en rekke lenker i et listeformat',
      },
    },
  },
  args: {
    children: '',
    chevron: false,
  },
  argTypes: {
    chevron: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: ['line', 'outline', 'fill', 'fill-negative'],
    },
    size: {
      control: 'select',
      options: allLinkListSizes,
    },
    color: {
      control: 'select',
      options: ['white', 'blueberry', 'cherry', 'neutral'],
    },
    highlightText: {
      control: 'text',
    },
  },
} satisfies Meta<typeof LinkList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <LinkList {...args}>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank">
        {'Innhold A-Å'}
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank">
        {'Helsenorge'}
      </LinkList.Link>
    </LinkList>
  ),
};

export const WithIconAndChevron: Story = {
  args: {
    chevron: true,
  },
  render: args => (
    <LinkList {...args}>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank" icon={<Icon svgIcon={AlarmClock} />}>
        {'Innhold A-Å'}
      </LinkList.Link>
      <LinkList.Link htmlMarkup="button" icon={<Icon svgIcon={PaperPlane} />}>
        {
          'Frisk frukt har et høyt innhold av vann, og det høye vanninnholdet og fiberinnholdet vil fylle magen godt, gi god metthetsfølelse og bidra til en god fordøyelse. (Eksempel på wrapping av tekst)'
        }
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank" icon={<Icon svgIcon={AlarmClock} />}>
        <ListHeader titleHtmlMarkup="span">
          {'LinkListText'}
          <Badge color="blueberry">{'Ny'}</Badge>
        </ListHeader>
      </LinkList.Link>
    </LinkList>
  ),
};

export const WithListHeaderComp: Story = {
  args: {
    chevron: true,
  },
  render: args => (
    <LinkList {...args}>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank" icon={<Icon svgIcon={AlarmClock} />}>
        <ListHeader>
          <ListHeaderText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
          <ListHeaderText subText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
          <ListHeaderText subText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
          <ListHeaderText
            subText
            statusDotVariant={StatusDotVariant.alert}
            firstText={'Statdot og uthevet skrift'}
            firstTextEmphasised
            secondText=""
          />
        </ListHeader>
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank" icon={<Icon svgIcon={PaperPlane} />}>
        <ListHeader titleHtmlMarkup="span">
          <>
            <span>
              {'Ved å gi LinkList.Link et '}
              <span style={{ fontWeight: 'bold' }}>{'JSX.Element'}</span> {'kan man gjøre deler av teksten '}
              <span style={{ fontWeight: 'bold' }}>{'bold.'}</span>
              {' Nå midstiller ikoner seg i forhold til øverste linje.'}
            </span>
          </>
        </ListHeader>
      </LinkList.Link>
    </LinkList>
  ),
};

export const WithAvatarAndBadge: Story = {
  args: {
    chevron: true,
  },
  render: args => (
    <LinkList {...args}>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank">
        <ListHeader>
          <ListHeaderText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
          <ListHeaderText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
          <Avatar>{'Line Danser'}</Avatar>
          <Badge color="blueberry">{'10000'}</Badge>
        </ListHeader>
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank">
        <ListHeader titleHtmlMarkup="span">
          {'LinkListText'}
          <Badge color="blueberry">{'Ny'}</Badge>
          <Avatar>{'Line Danser'}</Avatar>
        </ListHeader>
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank">
        <ListHeader titleHtmlMarkup="span">
          {
            'Test Test Eu et minim esse do eiusmod eu cillum et aute enim. Quis ea reprehenderit veniam est ullamco laboris culpa fugiat duis voluptate ullamco fugiat. Ullamco Lorem occaecat adipisicing duis aliquip.'
          }
          <Badge color="blueberry">{'10000'}</Badge>
        </ListHeader>
      </LinkList.Link>
    </LinkList>
  ),
};
export const VariantLine: Story = {
  args: {
    chevron: true,
    variant: 'line',
  },
  render: args => (
    <LinkList {...args}>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank">
        <ListHeader>
          <ListHeaderText firstText="Variant: line" />
          <ListHeaderText firstText="This i standard variant" subText />
        </ListHeader>
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank">
        {'Gives the listelements lines'}
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank" icon={<Icon svgIcon={AlarmClock} />}>
        <ListHeader>
          <ListHeaderText firstText='Linklist (level 1) "line" visual priority'></ListHeaderText>
        </ListHeader>
      </LinkList.Link>
    </LinkList>
  ),
};
export const VariantOutline: Story = {
  args: {
    chevron: true,
    variant: 'outline',
  },
  render: args => (
    <LinkList {...args}>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank">
        {'Variant: Outline'}
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank">
        {'Gives the listelements outline'}
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank" icon={<Icon svgIcon={AlarmClock} />}>
        <ListHeader>
          <ListHeaderText firstText='Linklist (level 2) "outline" visual priority'></ListHeaderText>
        </ListHeader>
      </LinkList.Link>
    </LinkList>
  ),
};
export const VariantFill: Story = {
  args: {
    chevron: true,
    variant: 'fill',
  },
  render: args => (
    <LinkList {...args}>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank">
        <ListHeader>
          <ListHeaderText firstText="Variant: fill" />
        </ListHeader>
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank">
        {'Gives the listelements fill'}
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank" icon={<Icon svgIcon={AlarmClock} />}>
        <ListHeader>
          <ListHeaderText firstText='Linklist (level 3) "fill" visual priority'></ListHeaderText>
        </ListHeader>
      </LinkList.Link>
    </LinkList>
  ),
};

export const WithRef: Story = {
  render: args => {
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      ref.current?.addEventListener('click', () => {
        action('Link clicked');
      });
    }, [ref]);

    return (
      <LinkList {...args}>
        <LinkList.Link icon={<Icon svgIcon={AlarmClock} />} linkRef={ref} htmlMarkup={'button'}>
          {'Innhold A-Å'}
        </LinkList.Link>
        <LinkList.Link icon={<Icon svgIcon={PaperPlane} />} htmlMarkup={'button'}>
          {'English'}
        </LinkList.Link>
      </LinkList>
    );
  },
};

export const AsButton: Story = {
  render: args => (
    <LinkList {...args}>
      <LinkList.Link htmlMarkup="button" onClick={action('Link 1 clicked')}>
        {'Innhold A-Å'}
      </LinkList.Link>
      <LinkList.Link htmlMarkup="button" onClick={action('Link 2 clicked')}>
        {
          'Frisk frukt har et høyt innhold av vann, og det høye vanninnholdet og fiberinnholdet vil fylle magen godt, gi god metthetsfølelse og bidra til en god fordøyelse. (Eksempel på wrapping av tekst)'
        }
      </LinkList.Link>
    </LinkList>
  ),
};

export const WithNotificationBadge: Story = {
  args: {
    chevron: true,
  },
  render: args => (
    <LinkList {...args}>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank">
        <ListHeader>
          <ListHeaderText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
          <ListHeaderText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
          <Badge type="notification" notificationVariant="info" />
        </ListHeader>
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank">
        <ListHeader titleHtmlMarkup="span">
          {'LinkListText'}
          <Badge type="notification" notificationVariant="warn" />
        </ListHeader>
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank">
        <ListHeader titleHtmlMarkup="span">
          {
            'Test Test Eu et minim esse do eiusmod eu cillum et aute enim. Quis ea reprehenderit veniam est ullamco laboris culpa fugiat duis voluptate ullamco fugiat. Ullamco Lorem occaecat adipisicing duis aliquip.'
          }
          <Badge type="notification" notificationVariant="error" />
        </ListHeader>
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank">
        <ListHeader titleHtmlMarkup="span">
          {'LinkListText'}
          <Badge type="notification" notificationVariant="success" />
        </ListHeader>
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank">
        <ListHeader titleHtmlMarkup="span">
          {'LinkListText'}
          <Badge type="notification" notificationVariant="success" />
          <Badge type="string">{'100'}</Badge>
        </ListHeader>
      </LinkList.Link>
    </LinkList>
  ),
};
