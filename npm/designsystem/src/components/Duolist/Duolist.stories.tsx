import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import Duolist, { DuolistGroup } from './Duolist';
import { shortLoremText, mediumLoremText } from '../../utils/loremtext';
import AnchorLink from '../AnchorLink';
import GridExample from '../GridExample';
import Title from '../Title';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/Duolist',
  component: Duolist,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg kunne se utlisting av parvise dataelementer bestående av parameternavn og parameterverdi ("name/value pairs") slik at jeg kan scanne listen raskt for å se hvilke verdier som gjelder for hvlke elementer.',
      },
    },
  },
  args: {
    children: '',
  },
  argTypes: {
    descriptionWidth: {
      control: 'number',
    },
  },
} satisfies Meta<typeof Duolist>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <GridExample>
      <Duolist {...args}>
        <DuolistGroup term={'test term'} description={'kort tekst'} />
        <DuolistGroup term={'test term lang'} description={shortLoremText} />
        <DuolistGroup term={'test term enda lenger'} description={mediumLoremText} />
        <DuolistGroup term={'test term'} description={'test description'} />
      </Duolist>
    </GridExample>
  ),
};

const descriptionWithLink = (
  <>
    {'Her er en link: '} <AnchorLink href={'https://www.helsenorge.no'}>{'Anchorlink test'}</AnchorLink>
  </>
);

export const DescriptionWithLink: Story = {
  render: args => (
    <GridExample>
      <Duolist {...args}>
        <DuolistGroup term={'test term'} description={descriptionWithLink} />
        <DuolistGroup term={'test term lang'} description={shortLoremText} />
        <DuolistGroup term={'test term enda lenger'} description={mediumLoremText} />
        <DuolistGroup term={'test term'} description={'test description'} />
      </Duolist>
    </GridExample>
  ),
};

export const WithLabel: Story = {
  render: args => (
    <GridExample>
      <Duolist
        {...args}
        label={
          <Title appearance="title3" htmlMarkup="h3">
            {'Test label'}
          </Title>
        }
      >
        <DuolistGroup term={'test term'} description={'kort tekst'} />
        <DuolistGroup term={'test term lang'} description={shortLoremText} />
        <DuolistGroup term={'test term enda lenger'} description={mediumLoremText} />
        <DuolistGroup term={'test term'} description={'test description'} />
      </Duolist>
    </GridExample>
  ),
};

export const WithLines: Story = {
  args: {
    variant: 'line',
  },
  render: args => (
    <GridExample>
      <Duolist {...args}>
        <DuolistGroup term={'test term'} description={'kort tekst'} />
        <DuolistGroup term={'test term lang'} description={shortLoremText} />
        <DuolistGroup term={'test term enda lenger'} description={mediumLoremText} />
        <DuolistGroup term={'test term'} description={'test description'} />
      </Duolist>
    </GridExample>
  ),
};

export const WithBorder: Story = {
  args: {
    border: 'border',
  },
  render: args => (
    <GridExample>
      <Duolist {...args}>
        <DuolistGroup term={'test term'} description={'kort tekst'} />
        <DuolistGroup term={'test term lang'} description={shortLoremText} />
        <DuolistGroup term={'test term enda lenger'} description={mediumLoremText} />
        <DuolistGroup term={'test term'} description={'test description'} />
      </Duolist>
    </GridExample>
  ),
};

export const BoldColumn: Story = {
  render: args => (
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
  ),
};

export const DescriptionWidth: Story = {
  render: args => (
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
  ),
};

export const NonFormatted: Story = {
  render: args => (
    <GridExample>
      <Duolist format="non-formatted" {...args}>
        <DuolistGroup term={'Her er en test term'} description={mediumLoremText} />
        <DuolistGroup term={'Her er en test term nr 2'} description={mediumLoremText} />
      </Duolist>
      <Duolist format="non-formatted" separator=" - " {...args}>
        <DuolistGroup term={'Custom separator'} description={mediumLoremText} />
      </Duolist>
    </GridExample>
  ),
};
