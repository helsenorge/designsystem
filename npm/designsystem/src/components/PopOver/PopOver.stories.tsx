import React, { useRef } from 'react';

import { StoryObj, Meta } from '@storybook/react';
import { Docs } from 'frankenstein-build-tools';

import PopOver, { PopOverVariant } from './PopOver';
import { useToggle } from '../../hooks/useToggle';
import loremText, { longLoremText } from '../../utils/loremtext';
import Button from '../Button';
import Icon from '../Icon';
import HelpSign from '../Icons/HelpSign';
import Table, { TableHead, TableRow, TableHeadCell, TableBody, TableCell, ResponsiveTableVariant, HeaderCategory } from '../Table';

const meta = {
  title: '@helsenorge/designsystem-react/_Internal/PopOver',
  component: PopOver,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      description: {
        component: 'PopOver er en liten popup som lar innbygger lese et tekstinnhold som utdyper det som ble trykket på.',
      },
      page: (): React.JSX.Element => <Docs component={PopOver} />,
      story: {
        inline: false,
        height: '25rem',
      },
    },
  },
  args: {
    controllerRef: undefined,
    children:
      'Dette er en PopOver. Aliquip aute consectetur eiusmod nisi ullamco aliquip adipisicing cupidatat reprehenderit nulla in Lorem sint.',
    variant: PopOverVariant.positionautomatic,
  },
  argTypes: {
    children: {
      control: 'text',
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom'],
    },
  },
} satisfies Meta<typeof PopOver>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => {
    const controllerRef = useRef<SVGSVGElement>(null);

    return (
      <>
        <Icon ref={controllerRef} svgIcon={HelpSign} />
        <PopOver {...args} controllerRef={controllerRef}>
          {args.children}
        </PopOver>
      </>
    );
  },
};

export const WithOneliner: Story = {
  render: args => {
    const controllerRef = useRef<SVGSVGElement>(null);

    return (
      <>
        <Icon ref={controllerRef} svgIcon={HelpSign} />
        <PopOver {...args} controllerRef={controllerRef}>
          {'Hello from small'}
        </PopOver>
      </>
    );
  },
};

export const WithText: Story = {
  render: args => {
    const controllerRef = useRef<SVGSVGElement>(null);

    return (
      <>
        <span>{loremText}</span>
        <div style={{ position: 'relative', display: 'inline' }}>
          <Icon ref={controllerRef} svgIcon={HelpSign} />
          <PopOver {...args} controllerRef={controllerRef}>
            {args.children}
          </PopOver>
        </div>
        <span>{loremText + loremText}</span>
      </>
    );
  },
};

export const Toggle: Story = {
  render: args => {
    const controllerRef = useRef<HTMLButtonElement>(null);
    const { value, toggleValue } = useToggle(false);

    return (
      <>
        <span>{loremText}</span>
        <div style={{ position: 'relative', display: 'inline' }}>
          <Button ref={controllerRef} onClick={toggleValue}>
            {'Åpne'}
          </Button>
          {value && (
            <PopOver {...args} controllerRef={controllerRef}>
              {args.children}
            </PopOver>
          )}
        </div>
        <span>{loremText}</span>
      </>
    );
  },
};

export const HorizontalScroll: Story = {
  render: args => {
    const controllerRef = useRef<SVGSVGElement>(null);

    return (
      <>
        <p>{longLoremText}</p>
        <Table breakpointConfig={{ breakpoint: 'xl', variant: ResponsiveTableVariant.horizontalscroll }}>
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
                <Icon ref={controllerRef} svgIcon={HelpSign} />
                <PopOver {...args} controllerRef={controllerRef}>
                  {args.children}
                </PopOver>
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
      </>
    );
  },
};
