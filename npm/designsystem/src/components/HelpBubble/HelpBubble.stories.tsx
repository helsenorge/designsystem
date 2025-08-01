import React, { useRef, useState } from 'react';

import { StoryObj, Meta } from '@storybook/react-vite';
import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import HelpBubble, { HelpBubbleVariant } from './HelpBubble';
import { useOutsideEvent } from '../../hooks/useOutsideEvent';
import { useToggle } from '../../hooks/useToggle';
import loremText, { longLoremText } from '../../utils/loremtext';
import DictionaryTrigger from '../DictionaryTrigger/DictionaryTrigger';
import HelpQuestion from '../HelpQuestion';
import HelpTrigger from '../HelpTrigger';
import Table, { ResponsiveTableVariant, TableHead, TableRow, TableHeadCell, TableBody, TableCell, HeaderCategory } from '../Table';

const meta = {
  title: '@helsenorge/designsystem-react/Components/HelpBubble',
  component: HelpBubble,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={HelpBubble} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/help-bubble/bruk-hSW8wk3D" />
      ),
      description: {
        component: 'HelpBubble [Hjelpeboble] er en liten popup som lar innbygger lese et tekstinnhold som utdyper det som ble trykket på.',
      },
      story: {
        inline: false,
        iframeHeight: '25rem',
      },
    },
  },
  args: {
    controllerRef: undefined,
    children: 'Dette er en HelpBubble.',
    showBubble: true,
  },
  argTypes: {
    children: {
      control: 'text',
    },
    showBubble: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: HelpBubbleVariant,
    },
  },
} satisfies Meta<typeof HelpBubble>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: action('Bubble closed'),
  },
  render: args => {
    const controllerRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <HelpTrigger ref={controllerRef} ariaLabel="Hjelp" />
        <HelpBubble {...args} controllerRef={controllerRef}>
          {args.children}
        </HelpBubble>
      </>
    );
  },
};

export const LongText: Story = {
  args: {
    onLinkClick: action('Mer hjelp clicked'),
    onClose: action('Bubble closed'),
  },
  render: args => {
    const controllerRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <span>{loremText} </span>
        <div style={{ position: 'relative', display: 'inline' }}>
          <HelpTrigger ref={controllerRef} ariaLabel="Hjelp" />
          <HelpBubble {...args} controllerRef={controllerRef}>
            {args.children}
          </HelpBubble>
        </div>
        <span> {loremText + loremText}</span>
      </>
    );
  },
};

export const Link: Story = {
  args: {
    linkTarget: '_blank',
    linkText: 'Helsenorge',
    linkUrl: 'https://www.helsenorge.no',
    onClose: action('Bubble closed'),
  },
  render: args => {
    const controllerRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <span>{loremText + loremText} </span>
        <div style={{ position: 'relative', display: 'inline' }}>
          <HelpTrigger ref={controllerRef} ariaLabel="Hjelp" />
          <HelpBubble {...args} controllerRef={controllerRef}>
            {args.children}
          </HelpBubble>
        </div>
        <span> {loremText + loremText}</span>
      </>
    );
  },
};

export const Toggle: Story = {
  args: {
    onLinkClick: action('Mer hjelp clicked'),
    onClose: action('Bubble closed'),
  },
  render: args => {
    const controllerRef = useRef<HTMLButtonElement>(null);
    const { value, toggleValue } = useToggle(false);

    return (
      <>
        <span>{loremText + loremText} </span>
        <div style={{ position: 'relative', display: 'inline' }}>
          <HelpTrigger ref={controllerRef} onClick={toggleValue} ariaLabel="Åpne" />
          <HelpBubble {...args} controllerRef={controllerRef} showBubble={value}>
            {args.children}
          </HelpBubble>
        </div>
        <span> {loremText + loremText}</span>
      </>
    );
  },
};

export const OnText: Story = {
  render: args => {
    const controllerRef = useRef<HTMLButtonElement>(null);
    const bubbleRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    useOutsideEvent(bubbleRef, () => setIsOpen(false));

    return (
      <>
        {loremText + loremText}
        <DictionaryTrigger ref={controllerRef} selected={isOpen} onClick={(): void => setIsOpen(!isOpen)}>
          {'Helsebiblioteket'}
        </DictionaryTrigger>{' '}
        <HelpBubble ref={bubbleRef} {...args} onClose={(): void => setIsOpen(false)} controllerRef={controllerRef} showBubble={isOpen}>
          {args.children}
        </HelpBubble>
        {loremText + loremText}
      </>
    );
  },
};
export const AsTooltip: Story = {
  args: {
    role: 'tooltip',
  },
  render: args => {
    const controllerRef = useRef<HTMLButtonElement>(null);
    const bubbleRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    useOutsideEvent(bubbleRef, () => isOpen && setIsOpen(false));

    return (
      <>
        {loremText + loremText}
        <DictionaryTrigger
          ref={controllerRef}
          selected={isOpen}
          onClick={(): void => setIsOpen(true)}
          onFocus={(): void => setIsOpen(true)}
          onBlur={(): void => setIsOpen(false)}
        >
          {'Helsebiblioteket'}
        </DictionaryTrigger>{' '}
        <HelpBubble ref={bubbleRef} {...args} onClose={(): void => setIsOpen(false)} controllerRef={controllerRef} showBubble={isOpen}>
          {args.children}
        </HelpBubble>
        {loremText + loremText}
      </>
    );
  },
};

export const WithHelpQuestion: Story = {
  render: args => {
    const controllerRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <p>{loremText + loremText}</p>
        <HelpQuestion ref={controllerRef} selected={isOpen} onClick={(): void => setIsOpen(!isOpen)}>
          {'Helsebiblioteket'}
        </HelpQuestion>
        <HelpBubble {...args} onClose={(): void => setIsOpen(false)} controllerRef={controllerRef} showBubble={isOpen}>
          {args.children}
        </HelpBubble>
        <p>{loremText + loremText}</p>
      </>
    );
  },
};

export const HorizontalScroll: Story = {
  args: {
    onClose: action('Bubble closed'),
  },
  render: args => {
    const controllerRef = useRef<HTMLButtonElement>(null);

    return (
      <>
        <p>{longLoremText}</p>
        <Table breakpointConfig={{ variant: ResponsiveTableVariant.horizontalscroll, breakpoint: 'md' }}>
          <TableHead category={HeaderCategory.normal}>
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
                <HelpTrigger ref={controllerRef} ariaLabel="Hjelp" />
                <HelpBubble {...args} controllerRef={controllerRef}>
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
      </>
    );
  },
};

export const CenteredOverflow: Story = {
  render: args => {
    const controllerRef = useRef<HTMLButtonElement>(null);

    return (
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <p>{longLoremText}</p>
            <Table breakpointConfig={{ variant: ResponsiveTableVariant.centeredoverflow, breakpoint: 'xl' }}>
              <TableHead category={HeaderCategory.normal}>
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
                    <HelpTrigger ref={controllerRef} ariaLabel="Hjelp" />
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
  },
};
