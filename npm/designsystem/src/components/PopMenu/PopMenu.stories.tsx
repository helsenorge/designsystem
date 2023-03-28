import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PopMenu, PopMenuVariant } from './PopMenu';
import longLoremText from '../../utils/loremtext';
import GridExample from '../GridExample';
import { LinkList } from '../LinkList';
import { PopOverVariant } from '../PopOver';
import Table, { HeaderCategory, ResponsiveTableVariant, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../Table';

import styles from './story.module.scss';

export default {
  title: 'Components/PopMenu',
  component: PopMenu,
  parameters: {
    docs: {
      description: {
        component:
          'Som innbygger vil jeg kunne hente fram og velge handlingsalternativer for et element også der det ikke er plass til å vise disse valgene åpent i grensesnittet, slik at jeg kan foreta valg som gjelder i kontekst av akkurat dette ene elementet.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: PopOverVariant,
      defaultValue: PopOverVariant.positionautomatic,
    },
    popMenuVariant: {
      control: 'select',
      options: PopMenuVariant,
      defaultValue: PopMenuVariant.onWhite,
    },
  },
} as ComponentMeta<typeof PopMenu>;

export const Default: ComponentStory<typeof PopMenu> = args => (
  <GridExample>
    <p>{longLoremText}</p>
    <div className={styles['story-wrapper']}>
      <PopMenu {...args}>
        <LinkList testId="linkList-tester" chevron={false}>
          <LinkList.Link tabIndex={0} href="/">
            {'Link 1'}
          </LinkList.Link>
          <LinkList.Link tabIndex={0} href="/">
            {'Link 2'}
          </LinkList.Link>
          <LinkList.Link tabIndex={0} href="/">
            {'Link 3'}
          </LinkList.Link>
        </LinkList>
      </PopMenu>
      <div>{'PopMenuVariant: ' + args.popMenuVariant}</div>
    </div>
    <p>{longLoremText}</p>
  </GridExample>
);

export const HorizontalScroll: ComponentStory<typeof Table> = args => {
  return (
    <GridExample>
      <p>{longLoremText}</p>
      <Table breakpointConfig={{ variant: ResponsiveTableVariant.horizontalscroll, breakpoint: 'md' }}>
        <TableHead category={HeaderCategory.normal}>
          <TableRow key="head">
            <TableHeadCell>{'Fastlege'}</TableHeadCell>
            <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
            <TableHeadCell>{'Ledige plasser'}</TableHeadCell>
            <TableHeadCell>{'Antall på venteliste'}</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell dataLabel="navn">{'Line Danser'}</TableCell>
            <TableCell dataLabel="kontor">{'Røtvedt'}</TableCell>
            <TableCell dataLabel="ledige">{'1'}</TableCell>
            <TableCell dataLabel="antall">
              <PopMenu {...args}>
                <LinkList testId="linkList-tester" chevron={false}>
                  <LinkList.Link tabIndex={0} href="/">
                    {'Link 1'}
                  </LinkList.Link>
                  <LinkList.Link tabIndex={0} href="/">
                    {'Link 2'}
                  </LinkList.Link>
                  <LinkList.Link tabIndex={0} href="/">
                    {'Link 3'}
                  </LinkList.Link>
                </LinkList>
              </PopMenu>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell dataLabel="navn">{'Line Danser'}</TableCell>
            <TableCell dataLabel="kontor">{'Røtvedt'}</TableCell>
            <TableCell dataLabel="ledige">{'1'}</TableCell>
            <TableCell dataLabel="antall">{'200'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell dataLabel="navn">{'Line Danser'}</TableCell>
            <TableCell dataLabel="kontor">{'Røtvedt'}</TableCell>
            <TableCell dataLabel="ledige">{'1'}</TableCell>
            <TableCell dataLabel="antall">{'200'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell dataLabel="navn">{'Line Danser'}</TableCell>
            <TableCell dataLabel="kontor">{'Røtvedt'}</TableCell>
            <TableCell dataLabel="ledige">{'1'}</TableCell>
            <TableCell dataLabel="antall">{'200'}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <p>{longLoremText}</p>
    </GridExample>
  );
};
