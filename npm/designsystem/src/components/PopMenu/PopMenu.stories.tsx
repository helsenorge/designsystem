import React from 'react';

import { StoryObj, Meta } from '@storybook/react';

import { PopMenu, PopMenuVariant } from './PopMenu';
import Docs from '../../docs';
import longLoremText from '../../utils/loremtext';
import { LinkList } from '../LinkList';
import Table, { HeaderCategory, ResponsiveTableVariant, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../Table';

import styles from './story.module.scss';

const meta = {
  title: '@helsenorge∕designsystem-react/Components/PopMenu',
  component: PopMenu,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={PopMenu} />,
      description: {
        component:
          'Som innbygger vil jeg kunne hente fram og velge handlingsalternativer for et element også der det ikke er plass til å vise disse valgene åpent i grensesnittet, slik at jeg kan foreta valg som gjelder i kontekst av akkurat dette ene elementet.',
      },
      story: {
        inline: false,
        iframeHeight: '40rem',
      },
    },
  },
  args: {
    popMenuVariant: PopMenuVariant.onWhite,
  },
  argTypes: {
    popMenuVariant: {
      control: 'select',
      options: PopMenuVariant,
    },
  },
} satisfies Meta<typeof PopMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

const handleClick = (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>): void => {
  event.preventDefault();
};

export const Default: Story = {
  args: {
    children: (
      <LinkList chevron={false}>
        <LinkList.Link onClick={handleClick} href="#">
          {'Link 1'}
        </LinkList.Link>
        <LinkList.Link onClick={handleClick} href="#">
          {'Link 2'}
        </LinkList.Link>
        <LinkList.Link onClick={handleClick} href="#">
          {'Link 3'}
        </LinkList.Link>
      </LinkList>
    ),
  },
  render: args => (
    <>
      <p>{longLoremText}</p>
      <div className={styles['story-wrapper']}>
        <PopMenu {...args}></PopMenu>
        <div>{'PopMenuVariant: ' + args.popMenuVariant}</div>
      </div>
      <p>{longLoremText}</p>
    </>
  ),
};

export const HorizontalScroll: Story = {
  args: {
    children: (
      <LinkList chevron={false}>
        <LinkList.Link onClick={handleClick} href="#">
          {'Link 1'}
        </LinkList.Link>
        <LinkList.Link onClick={handleClick} href="#">
          {'Link 2'}
        </LinkList.Link>
        <LinkList.Link onClick={handleClick} href="#">
          {'Link 3'}
        </LinkList.Link>
      </LinkList>
    ),
  },
  render: args => {
    return (
      <>
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
                <PopMenu {...args} />
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

export const CenteredOverflow: Story = {
  args: {
    children: (
      <LinkList chevron={false}>
        <LinkList.Link onClick={handleClick} href="#">
          {'Link 1'}
        </LinkList.Link>
        <LinkList.Link onClick={handleClick} href="#">
          {'Link 2'}
        </LinkList.Link>
        <LinkList.Link onClick={handleClick} href="#">
          {'Link 3'}
        </LinkList.Link>
      </LinkList>
    ),
  },
  render: args => {
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
                    <PopMenu {...args} />
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
