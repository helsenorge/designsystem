import { useRef, useState } from 'react';

import { Docs } from 'frankenstein-build-tools';
import { action } from 'storybook/actions';

import type { StoryObj, Meta } from '@storybook/react-vite';

import HelpBubble, { HelpBubbleVariant } from './HelpBubble';
import { useToggle } from '../../hooks/useToggle';
import loremText, { longLoremText } from '../../utils/loremtext';
import HelpTriggerIcon from '../HelpTriggerIcon';
import HelpTriggerInline from '../HelpTriggerInline/HelpTriggerInline';
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
    ariaLabelledById: {
      control: 'text',
    },
    children: {
      control: 'text',
    },
    showBubble: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: Object.values(HelpBubbleVariant),
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
        <HelpTriggerIcon ref={controllerRef} ariaLabel="Hjelp" />
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
          <HelpTriggerIcon ref={controllerRef} ariaLabel="Hjelp" />
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
          <HelpTriggerIcon ref={controllerRef} ariaLabel="Hjelp" />
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
          <HelpTriggerIcon ref={controllerRef} onClick={toggleValue} ariaLabel="Åpne" />
          <HelpBubble {...args} controllerRef={controllerRef} showBubble={value}>
            {args.children}
          </HelpBubble>
        </div>
        <span> {loremText + loremText}</span>
      </>
    );
  },
};

export const WithHelpTriggerInline: Story = {
  render: args => {
    const controllerRef = useRef<HTMLButtonElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <p>
          {loremText + loremText}
          <HelpTriggerInline ref={controllerRef} aria-expanded={isOpen} onClick={(): void => setIsOpen(!isOpen)}>
            {'Helsebiblioteket'}
          </HelpTriggerInline>
          <HelpBubble {...args} onClose={(): void => setIsOpen(false)} controllerRef={controllerRef} showBubble={isOpen}>
            {args.children}
          </HelpBubble>
          {loremText + loremText}
        </p>
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
              <TableHeadCell>{'Fastlege'}</TableHeadCell>
              <TableHeadCell>{'Alder'}</TableHeadCell>
              <TableHeadCell>{'Kjønn'}</TableHeadCell>
              <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
              <TableHeadCell>{'Adresse'}</TableHeadCell>
              <TableHeadCell>{'Ledige plasser'}</TableHeadCell>
              <TableHeadCell>{'Antall på venteliste'}</TableHeadCell>
              <TableHeadCell>{'Handlinger'}</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell dataLabel="Fastlege">{'Line Danser'}</TableCell>
              <TableCell dataLabel="Alder">{'35 år'}</TableCell>
              <TableCell dataLabel="Kjønn">{'Kvinne'}</TableCell>
              <TableCell dataLabel="Fastlegekontor">{'Regnbuen Legekontor'}</TableCell>
              <TableCell dataLabel="Adresse">{'Vestre Kjennervei 2B'}</TableCell>
              <TableCell dataLabel="Ledige plasser">{'0 av 1000'}</TableCell>
              <TableCell dataLabel="Antall på venteliste">{'53'}</TableCell>
              <TableCell dataLabel="Handlinger">
                <HelpTriggerIcon ref={controllerRef} ariaLabel="Hjelp" />
                <HelpBubble {...args} controllerRef={controllerRef}>
                  <div>{args.children}</div>
                </HelpBubble>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell dataLabel="Fastlege">{'Line Danser'}</TableCell>
              <TableCell dataLabel="Alder">{'35 år'}</TableCell>
              <TableCell dataLabel="Kjønn">{'Kvinne'}</TableCell>
              <TableCell dataLabel="Fastlegekontor">{'Regnbuen Legekontor'}</TableCell>
              <TableCell dataLabel="Adresse">{'Vestre Kjennervei 2B'}</TableCell>
              <TableCell dataLabel="Ledige plasser">{'0 av 1000'}</TableCell>
              <TableCell dataLabel="Antall på venteliste">{'53'}</TableCell>
              <TableCell dataLabel="Handlinger">{''}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell dataLabel="Fastlege">{'Line Danser'}</TableCell>
              <TableCell dataLabel="Alder">{'35 år'}</TableCell>
              <TableCell dataLabel="Kjønn">{'Kvinne'}</TableCell>
              <TableCell dataLabel="Fastlegekontor">{'Regnbuen Legekontor'}</TableCell>
              <TableCell dataLabel="Adresse">{'Vestre Kjennervei 2B'}</TableCell>
              <TableCell dataLabel="Ledige plasser">{'0 av 1000'}</TableCell>
              <TableCell dataLabel="Antall på venteliste">{'53'}</TableCell>
              <TableCell dataLabel="Handlinger">{''}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell dataLabel="Fastlege">{'Line Danser'}</TableCell>
              <TableCell dataLabel="Alder">{'35 år'}</TableCell>
              <TableCell dataLabel="Kjønn">{'Kvinne'}</TableCell>
              <TableCell dataLabel="Fastlegekontor">{'Regnbuen Legekontor'}</TableCell>
              <TableCell dataLabel="Adresse">{'Vestre Kjennervei 2B'}</TableCell>
              <TableCell dataLabel="Ledige plasser">{'0 av 1000'}</TableCell>
              <TableCell dataLabel="Antall på venteliste">{'53'}</TableCell>
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
                  <TableHeadCell>{'Fastlege'}</TableHeadCell>
                  <TableHeadCell>{'Alder'}</TableHeadCell>
                  <TableHeadCell>{'Kjønn'}</TableHeadCell>
                  <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
                  <TableHeadCell>{'Adresse'}</TableHeadCell>
                  <TableHeadCell>{'Ledige plasser'}</TableHeadCell>
                  <TableHeadCell>{'Antall på venteliste'}</TableHeadCell>
                  <TableHeadCell>{'Handlinger'}</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell dataLabel="Fastlege">{'Line Danser'}</TableCell>
                  <TableCell dataLabel="Alder">{'35 år'}</TableCell>
                  <TableCell dataLabel="Kjønn">{'Kvinne'}</TableCell>
                  <TableCell dataLabel="Fastlegekontor">{'Regnbuen Legekontor'}</TableCell>
                  <TableCell dataLabel="Adresse">{'Vestre Kjennervei 2B'}</TableCell>
                  <TableCell dataLabel="Ledige plasser">{'0 av 1000'}</TableCell>
                  <TableCell dataLabel="Antall på venteliste">{'53'}</TableCell>
                  <TableCell dataLabel="Handlinger">
                    <HelpTriggerIcon ref={controllerRef} ariaLabel="Hjelp" />
                    <HelpBubble {...args} onClose={action('Bubble closed')} controllerRef={controllerRef}>
                      <div>{args.children}</div>
                    </HelpBubble>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell dataLabel="Fastlege">{'Line Danser'}</TableCell>
                  <TableCell dataLabel="Alder">{'35 år'}</TableCell>
                  <TableCell dataLabel="Kjønn">{'Kvinne'}</TableCell>
                  <TableCell dataLabel="Fastlegekontor">{'Regnbuen Legekontor'}</TableCell>
                  <TableCell dataLabel="Adresse">{'Vestre Kjennervei 2B'}</TableCell>
                  <TableCell dataLabel="Ledige plasser">{'0 av 1000'}</TableCell>
                  <TableCell dataLabel="Antall på venteliste">{'53'}</TableCell>
                  <TableCell dataLabel="Handlinger">{''}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell dataLabel="Fastlege">{'Line Danser'}</TableCell>
                  <TableCell dataLabel="Alder">{'35 år'}</TableCell>
                  <TableCell dataLabel="Kjønn">{'Kvinne'}</TableCell>
                  <TableCell dataLabel="Fastlegekontor">{'Regnbuen Legekontor'}</TableCell>
                  <TableCell dataLabel="Adresse">{'Vestre Kjennervei 2B'}</TableCell>
                  <TableCell dataLabel="Ledige plasser">{'0 av 1000'}</TableCell>
                  <TableCell dataLabel="Antall på venteliste">{'53'}</TableCell>
                  <TableCell dataLabel="Handlinger">{''}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell dataLabel="Fastlege">{'Line Danser'}</TableCell>
                  <TableCell dataLabel="Alder">{'35 år'}</TableCell>
                  <TableCell dataLabel="Kjønn">{'Kvinne'}</TableCell>
                  <TableCell dataLabel="Fastlegekontor">{'Regnbuen Legekontor'}</TableCell>
                  <TableCell dataLabel="Adresse">{'Vestre Kjennervei 2B'}</TableCell>
                  <TableCell dataLabel="Ledige plasser">{'0 av 1000'}</TableCell>
                  <TableCell dataLabel="Antall på venteliste">{'53'}</TableCell>
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
