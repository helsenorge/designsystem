import React, { useRef, useEffect } from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LinkList from './LinkList';
import { allPaletteNames } from '../../../.storybook/knobs';
import { allLinkListSizes } from '../../../.storybook/knobs';
import Avatar from '../Avatar';
import Badge from '../Badge';
import GridExample from '../GridExample';
import Icon from '../Icon';
import AlarmClock from '../Icons/AlarmClock';
import PaperPlane from '../Icons/PaperPlane';
import ListHeader from '../ListHeader/ListHeader';
import ListHeaderText from '../ListHeader/ListHeaderText/ListHeaderText';
import { StatusDotVariant } from '../StatusDot';

export default {
  title: 'Components/LinkList',
  component: LinkList,
  parameters: {
    docs: {
      description: {
        component: 'Et komponent som lar deg vise en rekke lenker i et listeformat',
      },
    },
  },
  argTypes: {
    chevron: {
      control: 'boolean',
      defaultValue: false,
    },
    variant: {
      control: 'select',
      options: ['line', 'outline', 'fill'],
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
      <LinkList.Link href="/">Innhold A-Å</LinkList.Link>
      <LinkList.Link href="/">
        Frisk frukt har et høyt innhold av vann, og det høye vanninnholdet og fiberinnholdet vil fylle magen godt, gi god metthetsfølelse og
        bidra til en god fordøyelse. (Eksempel på wrapping av tekst)
      </LinkList.Link>
    </LinkList>
  </GridExample>
);

export const WithIconAndChevron: ComponentStory<typeof LinkList> = (args: any) => (
  <GridExample>
    <LinkList {...args} chevron>
      <LinkList.Link href="/" icon={<Icon svgIcon={AlarmClock} />}>
        Innhold A-Å
      </LinkList.Link>
      <LinkList.Link htmlMarkup="button" icon={<Icon svgIcon={PaperPlane} />}>
        Frisk frukt har et høyt innhold av vann, og det høye vanninnholdet og fiberinnholdet vil fylle magen godt, gi god metthetsfølelse og
        bidra til en god fordøyelse. (Eksempel på wrapping av tekst)
      </LinkList.Link>
    </LinkList>
  </GridExample>
);

export const WithListHeaderComp: ComponentStory<typeof LinkList> = (args: any) => (
  <GridExample>
    <LinkList {...args} chevron>
      <LinkList.Link href="/" icon={<Icon svgIcon={AlarmClock} />}>
        <ListHeader>
          <ListHeaderText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
          <ListHeaderText subText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
          <ListHeaderText subText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
          <ListHeaderText
            {...args}
            subText
            statusDotVariant={StatusDotVariant.alert}
            firstText={'Statdot og uthevet skrift'}
            firstTextEmphasised
            secondText=""
          />
        </ListHeader>
      </LinkList.Link>
      <LinkList.Link href="/" icon={<Icon svgIcon={PaperPlane} />}>
        <ListHeader titleHtmlMarkup="span">
          <>
            <span>
              Ved å gi LinkList.Link et <span style={{ fontWeight: 'bold' }}>JSX.Element</span> kan man gjøre deler av teksten
              <span style={{ fontWeight: 'bold' }}>bold.</span> Nå midstiller ikoner seg i forhold til øverste linje.
            </span>
          </>
        </ListHeader>
      </LinkList.Link>
    </LinkList>
  </GridExample>
);
export const WithAvatarAndBadge: ComponentStory<typeof LinkList> = (args: any) => (
  <GridExample>
    <LinkList {...args} chevron>
      <LinkList.Link href="/">
        <ListHeader>
          <ListHeaderText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
          <ListHeaderText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
          <Avatar>Line Danser</Avatar>
          <Badge color="blueberry">10000</Badge>
        </ListHeader>
      </LinkList.Link>
      <LinkList.Link href="/">
        <ListHeader titleHtmlMarkup="span">
          LinkListText
          <Badge color="blueberry">Ny</Badge>
          <Avatar>Line Danser</Avatar>
        </ListHeader>
      </LinkList.Link>
      <LinkList.Link href="/">
        <ListHeader titleHtmlMarkup="span">
          Test Test Eu et minim esse do eiusmod eu cillum et aute enim. Quis ea reprehenderit veniam est ullamco laboris culpa fugiat duis
          voluptate ullamco fugiat. Ullamco Lorem occaecat adipisicing duis aliquip.
          <Badge color="blueberry">10000</Badge>
        </ListHeader>
      </LinkList.Link>
    </LinkList>
  </GridExample>
);
export const VariantLine: ComponentStory<typeof LinkList> = (args: any) => (
  <GridExample>
    <LinkList {...args} chevron variant="line">
      <LinkList.Link href="/">
        <ListHeader>
          <ListHeaderText firstText="Variant: line" />
          <ListHeaderText firstText="This i standard variant" subText />
        </ListHeader>
      </LinkList.Link>
      <LinkList.Link href="/">Gives the listelements lines</LinkList.Link>
      <LinkList.Link href="/" icon={<Icon svgIcon={AlarmClock} />}>
        <ListHeader>
          <ListHeaderText firstText='Linklist (level 1) "line" visual priority'></ListHeaderText>
        </ListHeader>
      </LinkList.Link>
    </LinkList>
  </GridExample>
);
export const VariantOutline: ComponentStory<typeof LinkList> = (args: any) => (
  <GridExample>
    <LinkList {...args} chevron variant="outline">
      <LinkList.Link href="/">Variant: Outline</LinkList.Link>
      <LinkList.Link href="/">Gives the listelements outline</LinkList.Link>
      <LinkList.Link href="/" icon={<Icon svgIcon={AlarmClock} />}>
        <ListHeader>
          <ListHeaderText firstText='Linklist (level 2) "outline" visual priority'></ListHeaderText>
        </ListHeader>
      </LinkList.Link>
    </LinkList>
  </GridExample>
);
export const VariantFill: ComponentStory<typeof LinkList> = (args: any) => (
  <GridExample>
    <LinkList {...args} chevron variant="fill">
      <LinkList.Link href="/">
        <ListHeader>
          <ListHeaderText firstText="Variant: fill" />
        </ListHeader>
      </LinkList.Link>
      <LinkList.Link href="/">Gives the listelements fill</LinkList.Link>
      <LinkList.Link href="/" icon={<Icon svgIcon={AlarmClock} />}>
        <ListHeader>
          <ListHeaderText firstText='Linklist (level 3) "fill" visual priority'></ListHeaderText>
        </ListHeader>
      </LinkList.Link>
    </LinkList>
  </GridExample>
);

export const WithRef: ComponentStory<typeof LinkList> = (args: any) => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ref.current?.addEventListener('click', () => {
      action('Link clicked');
    });
  }, [ref]);

  return (
    <GridExample>
      <LinkList {...args}>
        <LinkList.Link icon={<Icon svgIcon={AlarmClock} />} linkRef={ref} htmlMarkup={'button'}>
          {'Innhold A-Å'}
        </LinkList.Link>
        <LinkList.Link icon={<Icon svgIcon={PaperPlane} />} htmlMarkup={'button'}>
          {'English'}
        </LinkList.Link>
      </LinkList>
    </GridExample>
  );
};

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
