import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { shortLoremText, mediumLoremText } from '../../utils/loremtext';
import Duolist, { DuolistGroup } from './Duolist';
import Title from '../Title';
import GridExample from '../GridExample';

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
      <DuolistGroup term={'test term lang'} description={shortLoremText} />
      <DuolistGroup term={'test term enda lenger'} description={mediumLoremText} />
      <DuolistGroup term={'test term'} description={'test description'} />
    </Duolist>
    <br />
    <br />
    <Duolist boldColumn="second" {...args}>
      <DuolistGroup term={'test term'} description={'kort tekst'} />
      <DuolistGroup term={'test term lang'} description={shortLoremText} />
      <DuolistGroup term={'test term enda lenger'} description={mediumLoremText} />
      <DuolistGroup term={'test term'} description={'test description'} />
    </Duolist>
  </GridExample>
);

export const AllVariants: ComponentStory<typeof Duolist> = (args: any) => (
  <GridExample>
    <Default {...args} />
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
  </GridExample>
);
