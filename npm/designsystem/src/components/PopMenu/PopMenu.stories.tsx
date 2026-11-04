import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import { PopMenuLabelPosition, PopMenuVariant } from './constants';
import { PopMenu } from './PopMenu';
import { LanguageLocales } from '../../constants';
import longLoremText from '../../utils/loremtext';
import { LinkList } from '../LinkList';
import Table, { ResponsiveTableVariant, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from '../Table';
import { getResources } from '../Table/resourceHelper';

import styles from './story.module.scss';

const menuHeadCell = getResources(LanguageLocales.NORWEGIAN).menuHeadCell;

const meta = {
  title: '@helsenorge/designsystem-react/Components/PopMenu',
  component: PopMenu,
  tags: ['not-supernova'],
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={PopMenu} />,
      description: {
        component:
          'Som innbygger vil jeg kunne hente fram og velge handlingsalternativer for et element også der det ikke er plass til å vise disse valgene åpent i grensesnittet, slik at jeg kan foreta valg som gjelder i kontekst av akkurat dette ene elementet.',
      },
      story: {
        inline: false,
        iframeHeight: '25rem',
      },
    },
  },
  args: {
    openButtonAriaLabel: 'Åpne meny',
    closeButtonAriaLabel: 'Lukk meny',
  },
  argTypes: {
    popMenuVariant: {
      control: 'select',
      options: Object.values(PopMenuVariant),
    },
    labelTextPosition: {
      control: 'select',
      options: Object.values(PopMenuLabelPosition),
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
      </LinkList>
    ),
  },
  render: args => <PopMenu {...args}></PopMenu>,
};

export const WithLinkListAsButton: Story = {
  args: {
    children: (
      <LinkList chevron={false}>
        <LinkList.Link htmlMarkup="button" onClick={handleClick}>
          {'Button 1'}
        </LinkList.Link>
        <LinkList.Link htmlMarkup="button" onClick={handleClick}>
          {'Button 2'}
        </LinkList.Link>
      </LinkList>
    ),
  },
  render: args => <PopMenu {...args}></PopMenu>,
};

export const WithText: Story = {
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

export const CustomIcon: Story = {
  args: {
    svgIcon: 'InfoSignStroke',
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
export const WithLabel: Story = {
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
    labelText: 'Label',
    labelTextPosition: PopMenuLabelPosition.left,
  },
  render: args => (
    <>
      <p>{longLoremText}</p>
      <div className={styles['story-wrapper']}>
        <PopMenu {...args} />
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
        <Table caption="Eksempeltabell" breakpointConfig={{ variant: ResponsiveTableVariant.horizontalscroll, breakpoint: 'md' }}>
          <TableHead>
            <TableRow key="head">
              <TableHeadCell>{'Fastlege'}</TableHeadCell>
              <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
              <TableHeadCell>{'Ledige plasser'}</TableHeadCell>
              <TableHeadCell>{'Antall på venteliste'}</TableHeadCell>
              <TableHeadCell>{menuHeadCell}</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow popMenu={<PopMenu {...args} />}>
              <TableCell>{'Line Danser'}</TableCell>
              <TableCell>{'Røtvedt'}</TableCell>
              <TableCell>{'1'}</TableCell>
              <TableCell>{'200'}</TableCell>
            </TableRow>
            <TableRow popMenu={<PopMenu {...args} />}>
              <TableCell>{'Line Danser'}</TableCell>
              <TableCell>{'Røtvedt'}</TableCell>
              <TableCell>{'1'}</TableCell>
              <TableCell>{'200'}</TableCell>
            </TableRow>
            <TableRow popMenu={<PopMenu {...args} />}>
              <TableCell>{'Line Danser'}</TableCell>
              <TableCell>{'Røtvedt'}</TableCell>
              <TableCell>{'1'}</TableCell>
              <TableCell>{'200'}</TableCell>
            </TableRow>
            <TableRow popMenu={<PopMenu {...args} />}>
              <TableCell>{'Line Danser'}</TableCell>
              <TableCell>{'Røtvedt'}</TableCell>
              <TableCell>{'1'}</TableCell>
              <TableCell>{'200'}</TableCell>
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
            <Table caption="Eksempeltabell" breakpointConfig={{ variant: ResponsiveTableVariant.centeredoverflow, breakpoint: 'xl' }}>
              <TableHead>
                <TableRow key="head">
                  <TableHeadCell>{'Fastlege'}</TableHeadCell>
                  <TableHeadCell>{'Alder'}</TableHeadCell>
                  <TableHeadCell>{'Kjønn'}</TableHeadCell>
                  <TableHeadCell>{'Fastlegekontor'}</TableHeadCell>
                  <TableHeadCell>{'Adresse'}</TableHeadCell>
                  <TableHeadCell>{'Ledige plasser'}</TableHeadCell>
                  <TableHeadCell>{'Antall på venteliste'}</TableHeadCell>
                  <TableHeadCell>{menuHeadCell}</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow popMenu={<PopMenu {...args} />}>
                  <TableCell>{'Line Danser'}</TableCell>
                  <TableCell>{'35 år'}</TableCell>
                  <TableCell>{'Kvinne'}</TableCell>
                  <TableCell>{'Regnbuen Legekontor'}</TableCell>
                  <TableCell>{'Vestre Kjennervei 2B'}</TableCell>
                  <TableCell>{'0 av 1000'}</TableCell>
                  <TableCell>{'53'}</TableCell>
                </TableRow>
                <TableRow popMenu={<PopMenu {...args} />}>
                  <TableCell>{'Line Danser'}</TableCell>
                  <TableCell>{'35 år'}</TableCell>
                  <TableCell>{'Kvinne'}</TableCell>
                  <TableCell>{'Regnbuen Legekontor'}</TableCell>
                  <TableCell>{'Vestre Kjennervei 2B'}</TableCell>
                  <TableCell>{'0 av 1000'}</TableCell>
                  <TableCell>{'53'}</TableCell>
                </TableRow>
                <TableRow popMenu={<PopMenu {...args} />}>
                  <TableCell>{'Line Danser'}</TableCell>
                  <TableCell>{'35 år'}</TableCell>
                  <TableCell>{'Kvinne'}</TableCell>
                  <TableCell>{'Regnbuen Legekontor'}</TableCell>
                  <TableCell>{'Vestre Kjennervei 2B'}</TableCell>
                  <TableCell>{'0 av 1000'}</TableCell>
                  <TableCell>{'53'}</TableCell>
                </TableRow>
                <TableRow popMenu={<PopMenu {...args} />}>
                  <TableCell>{'Line Danser'}</TableCell>
                  <TableCell>{'35 år'}</TableCell>
                  <TableCell>{'Kvinne'}</TableCell>
                  <TableCell>{'Regnbuen Legekontor'}</TableCell>
                  <TableCell>{'Vestre Kjennervei 2B'}</TableCell>
                  <TableCell>{'0 av 1000'}</TableCell>
                  <TableCell>{'53'}</TableCell>
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
