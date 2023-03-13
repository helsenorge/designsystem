import React, { useRef } from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HelpBubble, { HelpBubbleVariant } from './HelpBubble';
import { useToggle } from '../../hooks/useToggle';
import loremText, { longLoremText } from '../../utils/loremtext';
import Button from '../Button';
import GridExample from '../GridExample';
import Icon from '../Icons';
import HelpSign from '../Icons/HelpSign';
import Table, { ResponsiveTableVariant, TableHead, TableRow, TableHeadCell, TableBody, TableCell } from '../Table';

export default {
  title: 'Components/HelpBubble',
  component: HelpBubble,
  parameters: {
    docs: {
      description: {
        component: 'HelpBubble [Hjelpeboble] er en liten popup som lar innbygger lese et tekstinnhold som utdyper det som ble trykket på.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      defaultValue:
        'Dette er en HelpBubble. Aliquip aute consectetur eiusmod nisi ullamco aliquip adipisicing cupidatat reprehenderit nulla in Lorem sint.',
    },
    showBubble: {
      control: 'boolean',
      defaultValue: true,
    },
    variant: {
      control: 'select',
      options: HelpBubbleVariant,
      defaultValue: HelpBubbleVariant.positionautomatic,
    },
  },
} as ComponentMeta<typeof HelpBubble>;

export const Default: ComponentStory<typeof HelpBubble> = (args: any) => {
  const controllerRef = useRef<SVGSVGElement>(null);

  return (
    <GridExample>
      <span>{loremText + loremText + loremText + loremText}</span>
      <div style={{ position: 'relative', display: 'inline' }}>
        <Icon ref={controllerRef} svgIcon={HelpSign} />
        <HelpBubble {...args} onLinkClick={action('Mer hjelp clicked')} onClose={action('Bubble closed')} controllerRef={controllerRef}>
          {args.children}
        </HelpBubble>
      </div>
      <span>{loremText + loremText + loremText + loremText}</span>
    </GridExample>
  );
};

export const Toggle: ComponentStory<typeof HelpBubble> = (args: any) => {
  const controllerRef = useRef<HTMLButtonElement>(null);
  const { value, toggleValue } = useToggle(false);

  return (
    <GridExample>
      <span>{loremText + loremText + loremText + loremText}</span>
      <div style={{ position: 'relative', display: 'inline' }}>
        <Button ref={controllerRef} onClick={toggleValue}>
          {'Åpne'}
        </Button>
        <HelpBubble
          {...args}
          onLinkClick={action('Mer hjelp clicked')}
          onClose={action('Bubble closed')}
          controllerRef={controllerRef}
          showBubble={value}
        >
          {args.children}
        </HelpBubble>
      </div>
      <span>{loremText + loremText + loremText + loremText}</span>
    </GridExample>
  );
};

export const OnText: ComponentStory<typeof HelpBubble> = (args: any) => {
  const controllerRef = useRef<HTMLSpanElement>(null);

  return (
    <GridExample>
      <span>{loremText + loremText + loremText + loremText}</span>
      <div style={{ position: 'relative', display: 'inline' }}>
        <span ref={controllerRef} style={{ display: 'inline-block', color: 'red' }}>
          {'Jeg er en tooltip tekst.'}
        </span>
        <HelpBubble tooltip {...args} onClose={action('Bubble closed')} controllerRef={controllerRef}>
          <div>{args.children}</div>
        </HelpBubble>
      </div>
      <span>{loremText + loremText + loremText + loremText}</span>
    </GridExample>
  );
};

export const HorizontalScroll: ComponentStory<typeof Table> = (args: any) => {
  const controllerRef = useRef<SVGSVGElement>(null);

  return (
    <GridExample>
      <p>{longLoremText}</p>
      <Table breakpointConfig={{ variant: ResponsiveTableVariant.horizontalscroll, breakpoint: 'md' }}>
        <TableHead category={args.headerCategory}>
          <TableRow key="head">
            <TableHeadCell>Fastlege</TableHeadCell>
            <TableHeadCell>Fastlegekontor</TableHeadCell>
            <TableHeadCell>Ledige plasser</TableHeadCell>
            <TableHeadCell>Antall på venteliste</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell dataLabel="navn">Line Danser</TableCell>
            <TableCell dataLabel="kontor">Røtvedt</TableCell>
            <TableCell dataLabel="ledige">1</TableCell>
            <TableCell dataLabel="antall">
              <Icon ref={controllerRef} svgIcon={HelpSign} />
              <HelpBubble {...args} onClose={action('Bubble closed')} controllerRef={controllerRef}>
                <div>{args.children}</div>
              </HelpBubble>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell dataLabel="navn">Line Danser</TableCell>
            <TableCell dataLabel="kontor">Røtvedt</TableCell>
            <TableCell dataLabel="ledige">1</TableCell>
            <TableCell dataLabel="antall">200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell dataLabel="navn">Line Danser</TableCell>
            <TableCell dataLabel="kontor">Røtvedt</TableCell>
            <TableCell dataLabel="ledige">1</TableCell>
            <TableCell dataLabel="antall">200</TableCell>
          </TableRow>
          <TableRow>
            <TableCell dataLabel="navn">Line Danser</TableCell>
            <TableCell dataLabel="kontor">Røtvedt</TableCell>
            <TableCell dataLabel="ledige">1</TableCell>
            <TableCell dataLabel="antall">200</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <p>{longLoremText}</p>
    </GridExample>
  );
};
