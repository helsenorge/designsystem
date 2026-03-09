import { Docs } from 'frankenstein-build-tools';

import type { Meta, StoryObj } from '@storybook/react-vite';

import Badge from './Badge';
import ElementHeader from '../ElementHeader';
import LazyIcon from '../LazyIcon';
import LinkList from '../LinkList';
import Panel, { PanelStatus } from '../Panel';
import PanelList from '../PanelList';
import Title from '../Title';

const meta = {
  title: '@helsenorge/designsystem-react/Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      page: (): React.JSX.Element => (
        <Docs component={Badge} supernovaLink="https://frankenstein.helsenorge.design/latest/komponenter/badge/bruk-TCKiSYLz" />
      ),
      description: {
        component:
          'Badge [Markør] lar innbygger oppfatte at det er et antall nye elementer som har kommet til i et område siden sist gang innbygger besøkte området.',
      },
    },
  },
  args: {
    children: 'Tekst',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['blueberry', 'cherry', 'neutral'],
    },
    type: {
      control: 'select',
      options: ['string', 'notification'],
    },
    notificationVariant: {
      control: 'select',
      options: ['success', 'warn', 'error', 'info'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => <Badge {...args} />,
};

export const VariantsColors: Story = {
  render: () => (
    <div>
      <Badge color="blueberry">{'Blueberry'}</Badge>
      <Badge color="cherry">{'Cherry'}</Badge>
      <Badge color="neutral">{'Neutral'}</Badge>
    </div>
  ),
};

export const VariantsNotification: Story = {
  render: () => (
    <div>
      <Badge type="notification" notificationVariant="info" />
      <Badge type="notification" notificationVariant="warn" />
      <Badge type="notification" notificationVariant="error" />
      <Badge type="notification" notificationVariant="success" />
    </div>
  ),
};

export const Colors: Story = {
  args: { children: '1' },
  render: args => (
    <>
      <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
        {'Colors'}
      </Title>
      <br />
      <Badge color="blueberry">{args.children}</Badge>
      <br />
      <Badge color="cherry">{args.children}</Badge>
      <br />
      <Badge color="neutral">{args.children}</Badge>
    </>
  ),
};

export const Notification: Story = {
  render: () => (
    <>
      <Title margin={2} htmlMarkup={'h3'} appearance={'title3'}>
        {'Notification variants'}
      </Title>
      <br />
      <Badge type="notification" notificationVariant="info" />
      <br />
      <Badge type="notification" notificationVariant="warn" />
      <br />
      <Badge type="notification" notificationVariant="error" />
      <br />
      <Badge type="notification" notificationVariant="success" />
    </>
  ),
};

export const EksemplerInnboks: Story = {
  render: () => (
    <PanelList>
      <Panel buttonBottomText="Se detaljer" buttonBottomOnClick={() => null} status={PanelStatus.new}>
        <Panel.Title title="Konsultasjon" badge={<Badge>{'Ny'}</Badge>} />
        <Panel.A>{'Vikar for fastlege Nille Psa Augestad'}</Panel.A>
      </Panel>
      <Panel buttonBottomText="Se detaljer" buttonBottomOnClick={() => null}>
        <Panel.Title title="Konsultasjon" />
        <Panel.A>{'Vikar for fastlege Nille Psa Augestad'}</Panel.A>
      </Panel>
    </PanelList>
  ),
};

export const EksemplerForsiden: Story = {
  render: () => (
    <LinkList chevron>
      <LinkList.Link icon={<LazyIcon iconName="Envelope" />}>
        <ElementHeader>
          {'Du har nye meldinger'}
          <Badge color="cherry">{'26'}</Badge>
        </ElementHeader>
      </LinkList.Link>
    </LinkList>
  ),
};
