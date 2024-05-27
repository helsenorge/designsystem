import React from 'react';

import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import AnchorLink from './AnchorLink';
import Docs from '../../docs';

const meta = {
  title: '@helsenorge/designsystem-react/Components/AnchorLink',
  component: AnchorLink,
  parameters: {
    docs: {
      page: (): React.JSX.Element => <Docs component={AnchorLink} />,
      description: {
        component:
          'AnchorLink kan bli brukt som et komponent for \\<a\\> tag eller \\<button\\> tag som skal ha en anchorlink styling.<br>.anchorlink-wrapper kan også bli brukt når det ikke er kontroll over markup som kommer inn.',
      },
    },
  },
  args: {
    children: 'Anchorlink tekst',
    href: 'https://www.helsenorge.no',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    style: {
      control: 'object',
    },
  },
} satisfies Meta<typeof AnchorLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: args => (
    <>
      <AnchorLink {...args} target={'_parent'}>
        {args.children}
      </AnchorLink>
      <br />
      <br />
      <AnchorLink {...args} target={'_parent'}>
        {
          'Eiusmod veniam reprehenderit dolore magna tempor dolor reprehenderit reprehenderit ullamco sit in nulla qui. (Lang tekst - Skal wrappe).'
        }
      </AnchorLink>
    </>
  ),
};

export const External: Story = {
  render: args => (
    <>
      <AnchorLink {...args} target={'_blank'}>
        {args.children}
      </AnchorLink>
      <br />
      <br />
      <AnchorLink {...args} target={'_blank'}>
        {
          'Eiusmod veniam reprehenderit dolore magna tempor dolor reprehenderit reprehenderit ullamco sit in nulla qui. (Lang tekst - Skal wrappe).'
        }
      </AnchorLink>
    </>
  ),
};

export const AsButton: Story = {
  render: args => (
    <p style={{ fontSize: '1.25rem' }}>
      {'Dette er først en '}
      <AnchorLink htmlMarkup={'a'} onClick={action('AnchorLink clicked!')} {...args}>
        {'vanlig lenke i løpende tekst'}
      </AnchorLink>
      {' og nå kommer en'}
      <AnchorLink htmlMarkup={'button'} onClick={action('AnchorLink clicked!')} {...args}>
        {'button-lenke i løpende tekst som går over flere linjer'}
      </AnchorLink>
      {' og til slutt en '}
      <AnchorLink htmlMarkup={'button'} onClick={action('AnchorLink clicked!')} {...args}>
        {'kort'}
      </AnchorLink>
      {' button-lenke'}
    </p>
  ),
};

export const UnderlineTesting: Story = {
  args: {
    children: 'Standard lugargnom',
    style: {
      textDecorationThickness: '0.0625rem',
      textUnderlineOffset: '0.1rem',
      textUnderlinePosition: 'auto',
    },
  },
  render: args => (
    <>
      <p>{'Default, gitt font og browser'}</p>
      <AnchorLink {...args} target={'_parent'}>
        {args.children}
      </AnchorLink>
      <br />
      <p>{'Med tykkelse lik tidligere (0.0625rem):'}</p>
      <AnchorLink {...args} target={'_parent'} style={{ textDecorationThickness: '0.0625rem' }}>
        {args.children}
      </AnchorLink>
      <br />
      <p>{'Med plassering av underline "under"'}</p>
      <AnchorLink {...args} target={'_parent'} style={{ textDecorationThickness: '0.0625rem', textUnderlinePosition: 'under' }}>
        {args.children}
      </AnchorLink>
      <br />
      <p>{'Med underline offset (0.1rem):'}</p>
      <AnchorLink {...args} target={'_parent'} style={{ textDecorationThickness: '0.0625rem', textUnderlineOffset: '0.1rem' }}>
        {args.children}
      </AnchorLink>
      <br />
      <br />
      <p>{'Med interaktive verdier (endre "style"-objektet i "Controls"-fanen):'}</p>
      <AnchorLink {...args} target={'_parent'} style={args.style}>
        {args.children}
      </AnchorLink>
    </>
  ),
};
