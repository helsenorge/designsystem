import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { shortLoremText, mediumLoremText } from '../../utils/loremtext';
import Duolist, { DuolistGroup } from './Duolist';
import Title from '../Title';

export default {
  title: 'Components/Duolist',
  component: Duolist,
} as ComponentMeta<typeof Duolist>;

export const Default: ComponentStory<typeof Duolist> = (args: any) => (
  <Duolist {...args}>
    <DuolistGroup term={'test term'} description={'kort tekst'} />
    <DuolistGroup term={'test term lang'} description={shortLoremText} />
    <DuolistGroup term={'test term enda lenger'} description={mediumLoremText} />
    <DuolistGroup term={'test term'} description={'test description'} />
  </Duolist>
);

export const WithLabel: ComponentStory<typeof Duolist> = (args: any) => (
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
);

export const WithLines: ComponentStory<typeof Duolist> = (args: any) => (
  <Duolist variant="line" {...args}>
    <DuolistGroup term={'test term'} description={'kort tekst'} />
    <DuolistGroup term={'test term lang'} description={shortLoremText} />
    <DuolistGroup term={'test term enda lenger'} description={mediumLoremText} />
    <DuolistGroup term={'test term'} description={'test description'} />
  </Duolist>
);

export const WithBorder: ComponentStory<typeof Duolist> = (args: any) => (
  <Duolist border="border" {...args}>
    <DuolistGroup term={'test term'} description={'kort tekst'} />
    <DuolistGroup term={'test term lang'} description={shortLoremText} />
    <DuolistGroup term={'test term enda lenger'} description={mediumLoremText} />
    <DuolistGroup term={'test term'} description={'test description'} />
  </Duolist>
);

export const BoldColumn: ComponentStory<typeof Duolist> = (args: any) => (
  <>
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
  </>
);

export const AllVariants: ComponentStory<typeof Duolist> = (args: any) => (
  <>
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
  </>
);
