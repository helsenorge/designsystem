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

import UNSAFE_Table, {
  ResponsiveTableVariant,
  UNSAFE_TableBody,
  UNSAFE_TableCell,
  UNSAFE_TableHead,
  UNSAFE_TableHeadCell,
  UNSAFE_TableRow,
  type UNSAFE_TableProps,
} from '.';

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
  title: '@helsenorge/designsystem-react/Components/UNSAFE_Table/InParentComponents',
  component: UNSAFE_Table,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={UNSAFE_Table} />,
      description: {
        component:
          'Viser UNSAFE_Table satt inn i en annen komponent, her ExpanderHierarchy, for å illustrere hvordan tabellen oppfører seg i ' +
          'kontekst når den ligger nestet inne i et ekspanderbart hierarki.',
      },
    },
  },
  args: {
    caption: 'Fastleger i nærheten',
  },
} satisfies Meta<typeof UNSAFE_Table>;

export default meta;

const inParentConfig = { breakpoint: 'xl', variant: ResponsiveTableVariant.normal, fallbackVariant: ResponsiveTableVariant.stack } as const;

const FastlegeTable: React.FC<UNSAFE_TableProps> = args => (
  <UNSAFE_Table {...args} breakpointConfig={inParentConfig}>
    <UNSAFE_TableHead>
      <UNSAFE_TableRow>
        <UNSAFE_TableHeadCell>{'Navn'}</UNSAFE_TableHeadCell>
        <UNSAFE_TableHeadCell>{'Alder'}</UNSAFE_TableHeadCell>
        <UNSAFE_TableHeadCell>{'Fastlegekontor'}</UNSAFE_TableHeadCell>
        <UNSAFE_TableHeadCell>{'Ledige plasser'}</UNSAFE_TableHeadCell>
        <UNSAFE_TableHeadCell>{'Telefon'}</UNSAFE_TableHeadCell>
        <UNSAFE_TableHeadCell>{'Språk'}</UNSAFE_TableHeadCell>
        <UNSAFE_TableHeadCell>{'Ventetid (uker)'}</UNSAFE_TableHeadCell>
        <UNSAFE_TableHeadCell>{'Åpningstid'}</UNSAFE_TableHeadCell>
        <UNSAFE_TableHeadCell>{'Poststed'}</UNSAFE_TableHeadCell>
      </UNSAFE_TableRow>
    </UNSAFE_TableHead>
    <UNSAFE_TableBody>
      {fastleger.map(fastlege => (
        <UNSAFE_TableRow key={fastlege.id}>
          <UNSAFE_TableCell>{fastlege.navn}</UNSAFE_TableCell>
          <UNSAFE_TableCell>{fastlege.alder}</UNSAFE_TableCell>
          <UNSAFE_TableCell>{fastlege.kontor.navn}</UNSAFE_TableCell>
          <UNSAFE_TableCell>{fastlege.ledigePlasser}</UNSAFE_TableCell>
          <UNSAFE_TableCell>{fastlege.telefon}</UNSAFE_TableCell>
          <UNSAFE_TableCell>{fastlege.sprak}</UNSAFE_TableCell>
          <UNSAFE_TableCell>{fastlege.ventetid}</UNSAFE_TableCell>
          <UNSAFE_TableCell>{fastlege.apningstid}</UNSAFE_TableCell>
          <UNSAFE_TableCell>{fastlege.poststed}</UNSAFE_TableCell>
        </UNSAFE_TableRow>
      ))}
    </UNSAFE_TableBody>
  </UNSAFE_Table>
);

type Story = StoryObj<UNSAFE_TableProps>;

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
