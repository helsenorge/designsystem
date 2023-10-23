import React, { useRef, useState } from 'react';

import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HelpBubble, { HelpBubbleVariant } from './HelpBubble';
import { useOutsideEvent } from '../../hooks/useOutsideEvent';
import { useToggle } from '../../hooks/useToggle';
import loremText, { longLoremText } from '../../utils/loremtext';
import DictionaryTrigger from '../DictionaryTrigger/DictionaryTrigger';
import GridExample from '../GridExample';
import HelpQuestion from '../HelpQuestion';
import Table, { ResponsiveTableVariant, TableHead, TableRow, TableHeadCell, TableBody, TableCell } from '../Table';
import Trigger from '../Trigger/Trigger';

export default {
  title: '@helsenorge∕designsystem-react/Components/HelpBubble',
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
  const controllerRef = useRef<HTMLButtonElement>(null);

  return (
    <GridExample>
      <span>{loremText + loremText + loremText + loremText} </span>
      <div style={{ position: 'relative', display: 'inline' }}>
        <Trigger ref={controllerRef} ariaLabel="Hjelp" />
        <HelpBubble {...args} onLinkClick={action('Mer hjelp clicked')} onClose={action('Bubble closed')} controllerRef={controllerRef}>
          {args.children}
        </HelpBubble>
      </div>
      <span> {loremText + loremText + loremText + loremText}</span>
    </GridExample>
  );
};

export const Link: ComponentStory<typeof HelpBubble> = (args: any) => {
  const controllerRef = useRef<HTMLButtonElement>(null);

  return (
    <GridExample>
      <span>{loremText + loremText + loremText + loremText} </span>
      <div style={{ position: 'relative', display: 'inline' }}>
        <Trigger ref={controllerRef} ariaLabel="Hjelp" />
        <HelpBubble
          {...args}
          linkTarget="_blank"
          linkText="Helsenorge"
          linkUrl="https://www.helsenorge.no"
          onClose={action('Bubble closed')}
          controllerRef={controllerRef}
        >
          {args.children}
        </HelpBubble>
      </div>
      <span> {loremText + loremText + loremText + loremText}</span>
    </GridExample>
  );
};

export const Toggle: ComponentStory<typeof HelpBubble> = (args: any) => {
  const controllerRef = useRef<HTMLButtonElement>(null);
  const { value, toggleValue } = useToggle(false);

  return (
    <GridExample>
      <span>{loremText + loremText + loremText + loremText} </span>
      <div style={{ position: 'relative', display: 'inline' }}>
        <Trigger ref={controllerRef} onClick={toggleValue} ariaLabel="Åpne" />
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
      <span> {loremText + loremText + loremText + loremText}</span>
    </GridExample>
  );
};

export const OnText: ComponentStory<typeof HelpBubble> = (args: any) => {
  const controllerRef = useRef<HTMLButtonElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOutsideEvent(bubbleRef, () => setIsOpen(false));

  return (
    <GridExample>
      {loremText + loremText + loremText + loremText}
      <DictionaryTrigger ref={controllerRef} selected={isOpen} onClick={(): void => setIsOpen(!isOpen)}>
        {'Helsebiblioteket'}
      </DictionaryTrigger>{' '}
      <HelpBubble ref={bubbleRef} {...args} onClose={(): void => setIsOpen(false)} controllerRef={controllerRef} showBubble={isOpen}>
        {args.children}
      </HelpBubble>
      {loremText + loremText + loremText + loremText}
    </GridExample>
  );
};
export const AsTooltip: ComponentStory<typeof HelpBubble> = (args: any) => {
  const controllerRef = useRef<HTMLButtonElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  useOutsideEvent(bubbleRef, () => isOpen && setIsOpen(false));

  return (
    <GridExample>
      {loremText + loremText + loremText + loremText}
      <DictionaryTrigger
        ref={controllerRef}
        selected={isOpen}
        onClick={(): void => setIsOpen(true)}
        onFocus={(): void => setIsOpen(true)}
        onBlur={(): void => setIsOpen(false)}
      >
        {'Helsebiblioteket'}
      </DictionaryTrigger>{' '}
      <HelpBubble
        role="tooltip"
        ref={bubbleRef}
        {...args}
        onClose={(): void => setIsOpen(false)}
        controllerRef={controllerRef}
        showBubble={isOpen}
      >
        {args.children}
      </HelpBubble>
      {loremText + loremText + loremText + loremText}
    </GridExample>
  );
};

export const WithHelpQuestion: ComponentStory<typeof HelpBubble> = (args: any) => {
  const controllerRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GridExample>
      <p>{loremText + loremText + loremText + loremText}</p>
      <HelpQuestion ref={controllerRef} selected={isOpen} onClick={(): void => setIsOpen(!isOpen)}>
        {'Helsebiblioteket'}
      </HelpQuestion>
      <HelpBubble {...args} onClose={(): void => setIsOpen(false)} controllerRef={controllerRef} showBubble={isOpen}>
        {args.children}
      </HelpBubble>
      <p>{loremText + loremText + loremText + loremText}</p>
    </GridExample>
  );
};

export const HorizontalScroll: ComponentStory<typeof Table> = (args: any) => {
  const controllerRef = useRef<HTMLButtonElement>(null);

  return (
    <GridExample>
      <p>{longLoremText}</p>
      <Table breakpointConfig={{ variant: ResponsiveTableVariant.horizontalscroll, breakpoint: 'md' }}>
        <TableHead category={args.headerCategory}>
          <TableRow key="head">
            <TableHeadCell>Fastlege</TableHeadCell>
            <TableHeadCell>Alder</TableHeadCell>
            <TableHeadCell>Kjønn</TableHeadCell>
            <TableHeadCell>Fastlegekontor</TableHeadCell>
            <TableHeadCell>Adresse</TableHeadCell>
            <TableHeadCell>Ledige plasser</TableHeadCell>
            <TableHeadCell>Antall på venteliste</TableHeadCell>
            <TableHeadCell>Handlinger</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell dataLabel="Fastlege">Line Danser</TableCell>
            <TableCell dataLabel="Alder">35 år</TableCell>
            <TableCell dataLabel="Kjønn">Kvinne</TableCell>
            <TableCell dataLabel="Fastlegekontor">Regnbuen Legekontor</TableCell>
            <TableCell dataLabel="Adresse">Vestre Kjennervei 2B</TableCell>
            <TableCell dataLabel="Ledige plasser">0 av 1000</TableCell>
            <TableCell dataLabel="Antall på venteliste">53</TableCell>
            <TableCell dataLabel="Handlinger">
              <Trigger ref={controllerRef} ariaLabel="Hjelp" />
              <HelpBubble {...args} onClose={action('Bubble closed')} controllerRef={controllerRef}>
                <div>{args.children}</div>
              </HelpBubble>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell dataLabel="Fastlege">Line Danser</TableCell>
            <TableCell dataLabel="Alder">35 år</TableCell>
            <TableCell dataLabel="Kjønn">Kvinne</TableCell>
            <TableCell dataLabel="Fastlegekontor">Regnbuen Legekontor</TableCell>
            <TableCell dataLabel="Adresse">Vestre Kjennervei 2B</TableCell>
            <TableCell dataLabel="Ledige plasser">0 av 1000</TableCell>
            <TableCell dataLabel="Antall på venteliste">53</TableCell>
            <TableCell dataLabel="Handlinger">{''}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell dataLabel="Fastlege">Line Danser</TableCell>
            <TableCell dataLabel="Alder">35 år</TableCell>
            <TableCell dataLabel="Kjønn">Kvinne</TableCell>
            <TableCell dataLabel="Fastlegekontor">Regnbuen Legekontor</TableCell>
            <TableCell dataLabel="Adresse">Vestre Kjennervei 2B</TableCell>
            <TableCell dataLabel="Ledige plasser">0 av 1000</TableCell>
            <TableCell dataLabel="Antall på venteliste">53</TableCell>
            <TableCell dataLabel="Handlinger">{''}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell dataLabel="Fastlege">Line Danser</TableCell>
            <TableCell dataLabel="Alder">35 år</TableCell>
            <TableCell dataLabel="Kjønn">Kvinne</TableCell>
            <TableCell dataLabel="Fastlegekontor">Regnbuen Legekontor</TableCell>
            <TableCell dataLabel="Adresse">Vestre Kjennervei 2B</TableCell>
            <TableCell dataLabel="Ledige plasser">0 av 1000</TableCell>
            <TableCell dataLabel="Antall på venteliste">53</TableCell>
            <TableCell dataLabel="Handlinger">{''}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <p>{longLoremText}</p>
    </GridExample>
  );
};

export const CenteredOverflow: ComponentStory<typeof Table> = (args: any) => {
  const controllerRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <p>{longLoremText}</p>
          <Table breakpointConfig={{ variant: ResponsiveTableVariant.centeredoverflow, breakpoint: 'xl' }}>
            <TableHead category={args.headerCategory}>
              <TableRow key="head">
                <TableHeadCell>Fastlege</TableHeadCell>
                <TableHeadCell>Alder</TableHeadCell>
                <TableHeadCell>Kjønn</TableHeadCell>
                <TableHeadCell>Fastlegekontor</TableHeadCell>
                <TableHeadCell>Adresse</TableHeadCell>
                <TableHeadCell>Ledige plasser</TableHeadCell>
                <TableHeadCell>Antall på venteliste</TableHeadCell>
                <TableHeadCell>Handlinger</TableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell dataLabel="Fastlege">Line Danser</TableCell>
                <TableCell dataLabel="Alder">35 år</TableCell>
                <TableCell dataLabel="Kjønn">Kvinne</TableCell>
                <TableCell dataLabel="Fastlegekontor">Regnbuen Legekontor</TableCell>
                <TableCell dataLabel="Adresse">Vestre Kjennervei 2B</TableCell>
                <TableCell dataLabel="Ledige plasser">0 av 1000</TableCell>
                <TableCell dataLabel="Antall på venteliste">53</TableCell>
                <TableCell dataLabel="Handlinger">
                  <Trigger ref={controllerRef} ariaLabel="Hjelp" />
                  <HelpBubble {...args} onClose={action('Bubble closed')} controllerRef={controllerRef}>
                    <div>{args.children}</div>
                  </HelpBubble>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell dataLabel="Fastlege">Line Danser</TableCell>
                <TableCell dataLabel="Alder">35 år</TableCell>
                <TableCell dataLabel="Kjønn">Kvinne</TableCell>
                <TableCell dataLabel="Fastlegekontor">Regnbuen Legekontor</TableCell>
                <TableCell dataLabel="Adresse">Vestre Kjennervei 2B</TableCell>
                <TableCell dataLabel="Ledige plasser">0 av 1000</TableCell>
                <TableCell dataLabel="Antall på venteliste">53</TableCell>
                <TableCell dataLabel="Handlinger">{''}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell dataLabel="Fastlege">Line Danser</TableCell>
                <TableCell dataLabel="Alder">35 år</TableCell>
                <TableCell dataLabel="Kjønn">Kvinne</TableCell>
                <TableCell dataLabel="Fastlegekontor">Regnbuen Legekontor</TableCell>
                <TableCell dataLabel="Adresse">Vestre Kjennervei 2B</TableCell>
                <TableCell dataLabel="Ledige plasser">0 av 1000</TableCell>
                <TableCell dataLabel="Antall på venteliste">53</TableCell>
                <TableCell dataLabel="Handlinger">{''}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell dataLabel="Fastlege">Line Danser</TableCell>
                <TableCell dataLabel="Alder">35 år</TableCell>
                <TableCell dataLabel="Kjønn">Kvinne</TableCell>
                <TableCell dataLabel="Fastlegekontor">Regnbuen Legekontor</TableCell>
                <TableCell dataLabel="Adresse">Vestre Kjennervei 2B</TableCell>
                <TableCell dataLabel="Ledige plasser">0 av 1000</TableCell>
                <TableCell dataLabel="Antall på venteliste">53</TableCell>
                <TableCell dataLabel="Handlinger">{''}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <p>{longLoremText}</p>
        </div>
      </div>
    </div>
  );
};
