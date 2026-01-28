import { Docs } from 'frankenstein-build-tools';

import type { StoryObj, Meta } from '@storybook/react-vite';

import Avatar from '../Avatar';
import Badge from '../Badge';
import ExpanderList from '../ExpanderList';
import Icon from '../Icon';
import ElementHeader from './ElementHeader';
import AlarmClock from '../Icons/AlarmClock';
import ChevronRight from '../Icons/ChevronRight';
import PaperPlane from '../Icons/PaperPlane';
import LinkList from '../LinkList';
import StatusDot, { StatusDotVariant } from '../StatusDot';
import Title from '../Title';

const meta = {
  title: '@helsenorge/designsystem-react/_Internal/ElementHeader',
  component: ElementHeader,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={ElementHeader} />,
    },
  },
  args: {
    children: '',
  },
} satisfies Meta<typeof LinkList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Element header',
    chevronIcon: ChevronRight,
    icon: <Icon svgIcon={AlarmClock} />,
  },
  render: args => (
    <ElementHeader {...args}>
      {args.children}
      <Badge color="blueberry">{'Ny'}</Badge>
    </ElementHeader>
  ),
};

export const Sizes: Story = {
  args: {},
  render: args => (
    <div>
      <Title appearance="title3">{'With text'}</Title>
      <ElementHeader {...args} size="small" icon={<Icon svgIcon={AlarmClock} />}>
        {'Small ElementHeader'}
        <Badge color="blueberry">{'Ny'}</Badge>
      </ElementHeader>
      <br />
      <ElementHeader {...args} size="medium" icon={<Icon svgIcon={AlarmClock} />}>
        {'Medium ElementHeader'}
        <Badge color="blueberry">{'Ny'}</Badge>
      </ElementHeader>
      <br />
      <ElementHeader {...args} size="large" icon={<Icon svgIcon={AlarmClock} />}>
        {'Large ElementHeader'}
        <Badge color="blueberry">{'Ny'}</Badge>
      </ElementHeader>
      <br /> <br />
      <Title appearance="title3">{'With JSX'}</Title>
      <ElementHeader {...args} size="small" icon={<Icon svgIcon={AlarmClock} />}>
        <>
          <span>
            {'Ved å gi LinkList.Link et '}
            <span style={{ fontWeight: 'bold' }}>{'JSX.Element'}</span> {'kan man gjøre deler av teksten '}
            <span style={{ fontWeight: 'bold' }}>{'bold.'}</span>
            {' Nå midstiller ikoner seg i forhold til øverste linje.'}
          </span>
        </>
      </ElementHeader>
      <br />
      <ElementHeader {...args} size="medium" icon={<Icon svgIcon={AlarmClock} />}>
        <>
          <span>
            {'Ved å gi LinkList.Link et '}
            <span style={{ fontWeight: 'bold' }}>{'JSX.Element'}</span> {'kan man gjøre deler av teksten '}
            <span style={{ fontWeight: 'bold' }}>{'bold.'}</span>
            {' Nå midstiller ikoner seg i forhold til øverste linje.'}
          </span>
        </>
      </ElementHeader>
      <br />
      <ElementHeader {...args} size="large" icon={<Icon svgIcon={AlarmClock} />}>
        <>
          <span>
            {'Ved å gi LinkList.Link et '}
            <span style={{ fontWeight: 'bold' }}>{'JSX.Element'}</span> {'kan man gjøre deler av teksten '}
            <span style={{ fontWeight: 'bold' }}>{'bold.'}</span>
            {' Nå midstiller ikoner seg i forhold til øverste linje.'}
          </span>
        </>
      </ElementHeader>
      <br /> <br />
    </div>
  ),
};

export const LinkListWithElementHeaderComp: Story = {
  args: {},
  render: args => (
    <LinkList chevron>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank" icon={<Icon svgIcon={AlarmClock} />}>
        <ElementHeader {...args}>
          <Badge color="blueberry">{'Ny'}</Badge>
          <ElementHeader.Text firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
          <ElementHeader.Text subText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
          <ElementHeader.Text subText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
          <StatusDot variant={StatusDotVariant.alert} text="StatusDot label" />
        </ElementHeader>
      </LinkList.Link>
      <LinkList.Link href={'https://www.helsenorge.no'} target="_blank" icon={<Icon svgIcon={PaperPlane} />}>
        <ElementHeader {...args} titleHtmlMarkup="span">
          <>
            <span>
              {'Ved å gi LinkList.Link et '}
              <span style={{ fontWeight: 'bold' }}>{'JSX.Element'}</span> {'kan man gjøre deler av teksten '}
              <span style={{ fontWeight: 'bold' }}>{'bold.'}</span>
              {' Nå midstiller ikoner seg i forhold til øverste linje.'}
            </span>
          </>
        </ElementHeader>
      </LinkList.Link>
    </LinkList>
  ),
};

export const ExpanderListWithElementHeaderComp: Story = {
  args: {},
  render: args => (
    <ExpanderList {...args}>
      <ExpanderList.Expander
        title={
          <ElementHeader>
            <StatusDot variant={StatusDotVariant.alert} text="StatusDot label" />
            <Badge color="blueberry">{'Ny'}</Badge>
            <ElementHeader.Text firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
            <ElementHeader.Text subText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
            <ElementHeader.Text subText firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
          </ElementHeader>
        }
        icon={<Icon svgIcon={AlarmClock} />}
      >
        {'test'}
      </ExpanderList.Expander>
      <ExpanderList.Expander
        title={
          <div>
            <span>{'Tittel'}</span>
            <StatusDot text="Status tekst" variant="noaccess" />
          </div>
        }
      >
        {'Hei'}
      </ExpanderList.Expander>
    </ExpanderList>
  ),
};

export const WithAvatarAndBadge: Story = {
  args: {},
  render: args => (
    <ElementHeader {...args}>
      <ElementHeader.Text firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
      <ElementHeader.Text firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
      <Avatar>{'Line Danser'}</Avatar>
      <Badge color="blueberry">{'10000'}</Badge>
    </ElementHeader>
  ),
};

export const WithNotificationBadge: Story = {
  args: {},
  render: args => (
    <ElementHeader {...args}>
      <ElementHeader.Text firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
      <ElementHeader.Text firstText="Emphasized label segment" firstTextEmphasised secondText=" and normal segment" />
      <Badge type="notification" notificationVariant="info" />
    </ElementHeader>
  ),
};

export const WithStatusDots: Story = {
  args: {},
  render: args => (
    <>
      <ElementHeader {...args}>
        <StatusDot variant={StatusDotVariant.alert} text="StatusDot label" />
        <StatusDot variant={StatusDotVariant.attachment} text="StatusDot label" />
        <ElementHeader.Text firstText="With just StatusDots" />
      </ElementHeader>
      <br />
      <ElementHeader {...args}>
        <ElementHeader.StatusDotList>
          <StatusDot variant={StatusDotVariant.alert} text="StatusDot label" />
          <StatusDot variant={StatusDotVariant.attachment} text="StatusDot label" />
        </ElementHeader.StatusDotList>
        <ElementHeader.Text firstText="With StatusDotList default" />
      </ElementHeader>
      <br />
      <ElementHeader {...args}>
        <ElementHeader.StatusDotList stacking="vertical">
          <StatusDot variant={StatusDotVariant.alert} text="StatusDot label" />
          <StatusDot variant={StatusDotVariant.attachment} text="StatusDot label" />
        </ElementHeader.StatusDotList>
        <ElementHeader.Text firstText="With StatusDotList vertical" />
      </ElementHeader>
      <br />
      <ElementHeader {...args}>
        <ElementHeader.StatusDotList stacking="vertical" hiddenForChild>
          <StatusDot variant={StatusDotVariant.alert} text="StatusDot label" />
          <StatusDot variant={StatusDotVariant.attachment} text="StatusDot label" />
        </ElementHeader.StatusDotList>
        <ElementHeader.Text firstText="With hiddenForChild" />
      </ElementHeader>
      <br />
      <ElementHeader {...args}>
        <ElementHeader.StatusDotList
          topStatusDot={<StatusDot variant={StatusDotVariant.exception} text="Top StatusDot" />}
          bottomStatusDot={<StatusDot variant={StatusDotVariant.group} text="Bottom StatusDot" />}
        >
          <StatusDot variant={StatusDotVariant.alert} text="StatusDot label" />
          <StatusDot variant={StatusDotVariant.attachment} text="StatusDot label" />
        </ElementHeader.StatusDotList>
        <ElementHeader.Text firstText="With StatusDotList" />
      </ElementHeader>
    </>
  ),
};

export const WithEverything: Story = {
  args: {
    icon: <Icon svgIcon={AlarmClock} />,
    chevronIcon: ChevronRight,
  },
  render: args => (
    <ElementHeader {...args}>
      <ElementHeader.StatusDotList
        hiddenForChild
        bottomStatusDot={<StatusDot variant={StatusDotVariant.success} text="Label" />}
        additionalText="Additional text"
      >
        <StatusDot variant={StatusDotVariant.success} text="Label" />
        <StatusDot variant={StatusDotVariant.recurring} text="Label" />
        <StatusDot variant={StatusDotVariant.group} text="Label" />
        <StatusDot variant={StatusDotVariant.attachment} text="Label" />
      </ElementHeader.StatusDotList>
      <ElementHeader.Text firstText="Label" firstTextEmphasised />
      <ElementHeader.Text subText firstText="Sublabel 1" />
      <ElementHeader.Text subText firstText="Emphasized sublabel" firstTextEmphasised />
      <Badge color="blueberry">{'Ny'}</Badge>
    </ElementHeader>
  ),
};
