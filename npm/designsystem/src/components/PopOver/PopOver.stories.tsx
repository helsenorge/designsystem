import React, { useRef } from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PopOver, { PopOverVariant } from './PopOver';
import { useToggle } from '../../hooks/useToggle';
import loremText, { longLoremText } from '../../utils/loremtext';
import Button from '../Button';
import GridExample from '../GridExample';
import Icon from '../Icons';
import HelpSign from '../Icons/HelpSign';
import Table, { TableHead, TableRow, TableHeadCell, TableBody, TableCell, ResponsiveTableVariant } from '../Table';

export default {
  title: '@helsenorge∕designsystem-react/Components/PopOver',
  component: PopOver,
  parameters: {
    docs: {
      description: {
        component: 'PopOver er en liten popup som lar innbygger lese et tekstinnhold som utdyper det som ble trykket på.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      defaultValue:
        'Dette er en PopOver. Aliquip aute consectetur eiusmod nisi ullamco aliquip adipisicing cupidatat reprehenderit nulla in Lorem sint.',
    },
    showBubble: {
      control: 'boolean',
      defaultValue: true,
    },
    variant: {
      control: 'select',
      options: PopOverVariant,
      defaultValue: PopOverVariant.positionautomatic,
    },
  },
} as ComponentMeta<typeof PopOver>;

export const Default: ComponentStory<typeof PopOver> = (args: any) => {
  const controllerRef = useRef<SVGSVGElement>(null);

  return (
    <GridExample>
      <span>{loremText + loremText + loremText + loremText}</span>
      <div style={{ position: 'relative', display: 'inline' }}>
        <Icon ref={controllerRef} svgIcon={HelpSign} />
        <PopOver {...args} onLinkClick={action('Mer hjelp clicked')} onClose={action('Bubble closed')} controllerRef={controllerRef}>
          <div style={{ padding: '0.5rem 1rem' }}>{args.children}</div>
        </PopOver>
      </div>
      <span>{loremText + loremText + loremText + loremText}</span>
    </GridExample>
  );
};

export const Toggle: ComponentStory<typeof PopOver> = (args: any) => {
  const controllerRef = useRef<HTMLButtonElement>(null);
  const { value, toggleValue } = useToggle(false);

  return (
    <GridExample>
      <span>{loremText + loremText + loremText + loremText}</span>
      <div style={{ position: 'relative', display: 'inline' }}>
        <Button ref={controllerRef} onClick={toggleValue}>
          {'Åpne'}
        </Button>
        {value && (
          <PopOver {...args} onLinkClick={action('Mer hjelp clicked')} onClose={action('Bubble closed')} controllerRef={controllerRef}>
            <div style={{ padding: '0.5rem 1rem' }}>{args.children}</div>
          </PopOver>
        )}
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
      <Table breakpointConfig={{ breakpoint: 'xl', variant: ResponsiveTableVariant.horizontalscroll }}>
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
              <PopOver {...args} onClose={action('Bubble closed')} controllerRef={controllerRef}>
                <div style={{ padding: '0.5rem 1rem' }}>{args.children}</div>
              </PopOver>
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
