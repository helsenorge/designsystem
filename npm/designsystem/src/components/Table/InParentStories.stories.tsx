import { useState } from 'react';
import type React from 'react';

import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import { longLoremText } from '@helsenorge/designsystem-react/utils/loremtext';

import Button from '../Button';
import Drawer from '../Drawer';
import Expander from '../Expander';
import ExpanderHierarchy from '../ExpanderHierarchy';
import ExpanderList from '../ExpanderList';
import Modal from '../Modal';
import Tabs from '../Tabs';
import Title from '../Title';

import Table, { ResponsiveTableVariant, TableBody, TableCell, TableHead, TableHeadCell, TableRow, type TableProps } from '.';

interface Fastlege {
  id: string;
  navn: string;
  alder: number;
  kontor: { navn: string; adresse: string };
  ledigePlasser: number;
  telefon: string;
  sprak: string;
  ventetid: number;
  apningstid: string;
  poststed: string;
}

const fastleger: Fastlege[] = [
  {
    id: 'lege1',
    navn: 'Line Danser',
    alder: 42,
    kontor: { navn: 'Curato Røntgen', adresse: 'Karl Johans gate 1' },
    ledigePlasser: 3,
    telefon: '22 33 44 55',
    sprak: 'Norsk, engelsk',
    ventetid: 2,
    apningstid: '08–16',
    poststed: 'Oslo',
  },
  {
    id: 'lege2',
    navn: 'Hans Nilsen',
    alder: 38,
    kontor: { navn: 'Aleris Frogner', adresse: 'Frognerveien 10' },
    ledigePlasser: 0,
    telefon: '99 88 77 66',
    sprak: 'Norsk',
    ventetid: 0,
    apningstid: '09–15',
    poststed: 'Oslo',
  },
  {
    id: 'lege3',
    navn: 'Åse Berg',
    alder: 55,
    kontor: { navn: 'Best Helse', adresse: 'Storgata 5' },
    ledigePlasser: 12,
    telefon: '40 50 60 70',
    sprak: 'Norsk, svensk',
    ventetid: 4,
    apningstid: '08–17',
    poststed: 'Bergen',
  },
  {
    id: 'lege4',
    navn: 'Bjørn Olsen',
    alder: 61,
    kontor: { navn: 'Volvat Majorstuen', adresse: 'Bogstadveien 20' },
    ledigePlasser: 7,
    telefon: '12 34 56 78',
    sprak: 'Norsk, tysk',
    ventetid: 1,
    apningstid: '07:30–15:30',
    poststed: 'Trondheim',
  },
];

const meta = {
  title: '@helsenorge/designsystem-react/Components/Table/InParentComponents',
  component: Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={Table} />,
      description: {
        component:
          'Viser Table satt inn i en annen komponent, her ExpanderHierarchy, for å illustrere hvordan tabellen oppfører seg i ' +
          'kontekst når den ligger nestet inne i et ekspanderbart hierarki.',
      },
    },
  },
  args: {
    caption: 'Fastleger i nærheten',
  },
} satisfies Meta<typeof Table>;

export default meta;

const inParentConfig = { breakpoint: 'xl', variant: ResponsiveTableVariant.normal, fallbackVariant: ResponsiveTableVariant.stack } as const;

const FastlegeTable: React.FC<TableProps> = args => (
  <Table {...args} breakpointConfig={inParentConfig}>
    <TableHead>
      <TableRow>
        <TableHeadCell>{'Navn'}</TableHeadCell>
        <TableHeadCell>{'Alder'}</TableHeadCell>
        <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
        <TableHeadCell>{'Ledige plasser'}</TableHeadCell>
        <TableHeadCell>{'Telefon'}</TableHeadCell>
        <TableHeadCell>{'Språk'}</TableHeadCell>
        <TableHeadCell>{'Ventetid (uker)'}</TableHeadCell>
        <TableHeadCell>{'Åpningstid'}</TableHeadCell>
        <TableHeadCell>{'Poststed'}</TableHeadCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {fastleger.map(fastlege => (
        <TableRow key={fastlege.id}>
          <TableCell>{fastlege.navn}</TableCell>
          <TableCell>{fastlege.alder}</TableCell>
          <TableCell>{fastlege.kontor.navn}</TableCell>
          <TableCell>{fastlege.ledigePlasser}</TableCell>
          <TableCell>{fastlege.telefon}</TableCell>
          <TableCell>{fastlege.sprak}</TableCell>
          <TableCell>{fastlege.ventetid}</TableCell>
          <TableCell>{fastlege.apningstid}</TableCell>
          <TableCell>{fastlege.poststed}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

type Story = StoryObj<TableProps>;

export const InTabs: Story = {
  render: function InTableStory(args) {
    return (
      <>
        <Title appearance="title3">
          {
            'Config for standard og komplekse tabeller, og tabeller hvor det er er i brukerens interesse å kryss-indeksere eller sammenligne verdier fremfor å bare finne riktig rad.'
          }
        </Title>
        <p>{longLoremText}</p>
        <Tabs>
          <Tabs.Tab title="Fastleger" icon={'Calendar'}>
            <FastlegeTable {...args} />
          </Tabs.Tab>
          <Tabs.Tab title="Hjelp">{longLoremText}</Tabs.Tab>
        </Tabs>
        <p>{longLoremText}</p>
      </>
    );
  },
};

export const InExpanderHierarchy: Story = {
  render: function InExpanderHierarchyStory(args) {
    return (
      <ExpanderHierarchy>
        <ExpanderHierarchy.Expander key="Fastleger" title="Fastleger">
          <FastlegeTable {...args} />
        </ExpanderHierarchy.Expander>
      </ExpanderHierarchy>
    );
  },
};

export const InNestedExpanderHierarchy: Story = {
  render: function InNestedExpanderHierarchyStory(args) {
    return (
      <ExpanderHierarchy>
        <ExpanderHierarchy.Expander key="region" title="Region" expanded>
          <ExpanderHierarchy.Expander key="fylke" title="Fylke" expanded>
            <ExpanderHierarchy.Expander key="kommune" title="Kommune" expanded>
              <ExpanderHierarchy.Expander key="fastleger" title="Fastleger" expanded>
                <FastlegeTable {...args} />
              </ExpanderHierarchy.Expander>
            </ExpanderHierarchy.Expander>
          </ExpanderHierarchy.Expander>
        </ExpanderHierarchy.Expander>
      </ExpanderHierarchy>
    );
  },
};

export const InModal: Story = {
  render: function InModalStory(args) {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={(): void => setOpen(true)}>{'Åpne modal'}</Button>
        {open && (
          <Modal title="Fastleger i nærheten" onClose={(): void => setOpen(false)}>
            <FastlegeTable {...args} />
          </Modal>
        )}
      </>
    );
  },
};

export const InDrawer: Story = {
  render: function InDrawerStory(args) {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={(): void => setOpen(true)}>{'Åpne drawer'}</Button>
        <Drawer isOpen={open} title="Fastleger i nærheten" onRequestClose={(): void => setOpen(false)}>
          <FastlegeTable {...args} />
        </Drawer>
      </>
    );
  },
};

export const InExpander: Story = {
  render: function InExpanderStory(args) {
    return (
      <Expander title="Fastleger i nærheten" expanded>
        <FastlegeTable {...args} />
      </Expander>
    );
  },
};

export const InExpanderList: Story = {
  render: function InExpanderListStory(args) {
    return (
      <ExpanderList>
        <ExpanderList.Expander title="Fastleger i nærheten" expanded>
          <FastlegeTable {...args} />
        </ExpanderList.Expander>
      </ExpanderList>
    );
  },
};
