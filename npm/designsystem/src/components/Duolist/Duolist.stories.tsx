import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { shortLoremText, mediumLoremText } from '../../utils/loremtext';
import Duolist, { DuolistGroup } from './Duolist';
import Title from '../Title';
import GridExample from '../GridExample';
import AnchorLink from '../AnchorLink';

export default {
  title: 'Components/Duolist',
  component: Duolist,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg kunne se utlisting av parvise dataelementer bestående av parameternavn og parameterverdi ("name/value pairs") slik at jeg kan scanne listen raskt for å se hvilke verdier som gjelder for hvlke elementer.',
      },
    },
  },
  argTypes: {
    descriptionWidth: {
      control: 'number',
    },
  },
} as ComponentMeta<typeof Duolist>;

export const Default: ComponentStory<typeof Duolist> = (args: any) => (
  <GridExample>
    <Duolist {...args}>
      <DuolistGroup term={'test term'} description={'kort tekst'} />
      <DuolistGroup term={'test term lang'} description={shortLoremText} />
      <DuolistGroup term={'test term enda lenger'} description={mediumLoremText} />
      <DuolistGroup term={'test term'} description={'test description'} />
    </Duolist>
  </GridExample>
);

const descriptionWithLink = (
  <>
    {'Her er en link: '} <AnchorLink href={'https://www.helsenorge.no'}>{'Anchorlink test'}</AnchorLink>
  </>
);

export const DescriptionWithLink: ComponentStory<typeof Duolist> = (args: any) => (
  <GridExample>
    <Duolist {...args}>
      <DuolistGroup term={'test term'} description={descriptionWithLink} />
      <DuolistGroup term={'test term lang'} description={shortLoremText} />
      <DuolistGroup term={'test term enda lenger'} description={mediumLoremText} />
      <DuolistGroup term={'test term'} description={'test description'} />
    </Duolist>
  </GridExample>
);

export const WithLabel: ComponentStory<typeof Duolist> = (args: any) => (
  <GridExample>
    <Duolist
      label={
        <Title appearance="title3" htmlMarkup="h3">
          {'Test label'}
        </Title>
      }
      {...args}
    >
      <DuolistGroup term={'test term'} description={'kort tekst'} />
      <DuolistGroup term={'test term lang'} description={shortLoremText} />
      <DuolistGroup term={'test term enda lenger'} description={mediumLoremText} />
      <DuolistGroup term={'test term'} description={'test description'} />
    </Duolist>
  </GridExample>
);

export const WithLines: ComponentStory<typeof Duolist> = (args: any) => (
  <GridExample>
    <Duolist variant="line" {...args}>
      <DuolistGroup term={'test term'} description={'kort tekst'} />
      <DuolistGroup term={'test term lang'} description={shortLoremText} />
      <DuolistGroup term={'test term enda lenger'} description={mediumLoremText} />
      <DuolistGroup term={'test term'} description={'test description'} />
    </Duolist>
  </GridExample>
);

export const WithBorder: ComponentStory<typeof Duolist> = (args: any) => (
  <GridExample>
    <Duolist border="border" {...args}>
      <DuolistGroup term={'test term'} description={'kort tekst'} />
      <DuolistGroup term={'test term lang'} description={shortLoremText} />
      <DuolistGroup term={'test term enda lenger'} description={mediumLoremText} />
      <DuolistGroup term={'test term'} description={'test description'} />
    </Duolist>
  </GridExample>
);

export const BoldColumn: ComponentStory<typeof Duolist> = (args: any) => (
  <GridExample>
    <Duolist {...args}>
      <DuolistGroup term={'test term'} description={'kort tekst'} />
      <DuolistGroup boldColumn={'second'} term={'test term lang'} description={shortLoremText} />
      <DuolistGroup term={'test term enda lenger'} description={mediumLoremText} />
      <DuolistGroup boldColumn={'second'} term={'test term'} description={'test description'} />
    </Duolist>
    <br />
    <br />
    <Duolist boldColumn="second" {...args}>
      <DuolistGroup term={'test term'} description={'kort tekst'} />
      <DuolistGroup term={'test term lang'} description={shortLoremText} />
      <DuolistGroup boldColumn={'first'} term={'test term enda lenger'} description={mediumLoremText} />
      <DuolistGroup term={'test term'} description={'test description'} />
    </Duolist>
  </GridExample>
);

export const DescriptionWidth: ComponentStory<typeof Duolist> = (args: any) => (
  <GridExample>
    <Duolist descriptionWidth={40} {...args}>
      <DuolistGroup term={'Her er en test term'} description={mediumLoremText} />
    </Duolist>
    <Duolist descriptionWidth={60} {...args}>
      <DuolistGroup term={'Her er en test term'} description={mediumLoremText} />
    </Duolist>
    <Duolist descriptionWidth={80} {...args}>
      <DuolistGroup term={'Her er en test term'} description={mediumLoremText} />
    </Duolist>
  </GridExample>
);

export const NonFormatted: ComponentStory<typeof Duolist> = (args: any) => (
  <GridExample>
    <Duolist format="non-formatted" {...args}>
      <DuolistGroup term={'Her er en test term'} description={mediumLoremText} />
      <DuolistGroup term={'Her er en test term nr 2'} description={mediumLoremText} />
    </Duolist>
    <Duolist format="non-formatted" separator=" - " {...args}>
      <DuolistGroup term={'Custom separator'} description={mediumLoremText} />
    </Duolist>
  </GridExample>
);

export const AllExamples: ComponentStory<typeof Duolist> = (args: any) => (
  <GridExample>
    <Default {...args} />
    <br />
    <br />
    <DescriptionWithLink {...args} />
    <br />
    <br />
    <WithLabel {...args} />
    <br />
    <br />
    <WithLines {...args} />
    <br />
    <br />
    <WithBorder {...args} />
    <br />
    <br />
    <BoldColumn {...args} />
    <br />
    <br />
    <DescriptionWidth {...args} />
  </GridExample>
);
