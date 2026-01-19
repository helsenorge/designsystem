import React from 'react';

import { MemoryRouter, Link, useLocation, useNavigate } from 'react-router';

import type { Decorator, Meta, StoryObj } from '@storybook/react-vite';

import AnchorLink from '@helsenorge/designsystem-react/components/AnchorLink';

const withRouter: Decorator = Story => (
  <MemoryRouter initialEntries={['/']}>
    <Story />
  </MemoryRouter>
);

const meta: Meta = {
  title: 'Documentation/Examples/AnchorLink with React Router',
  decorators: [withRouter],
  parameters: {
    docs: {
      description: {
        component: 'This example demonstrates how to use AnchorLink from @helsenorge/designsystem-react with react-router. ',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

const LocationDisplay = (): React.JSX.Element => {
  const location = useLocation();
  return (
    <div style={{ marginTop: '1rem', padding: '1rem', background: '#f0f0f0' }}>
      {'Current location: '}
      {location.pathname}
    </div>
  );
};

export const Default: Story = {
  render: () => {
    return (
      <AnchorLink asChild>
        <Link to="/">{'Lenke til rot'}</Link>
      </AnchorLink>
    );
  },
};

export const ComparyToAnchorLink: Story = {
  render: () => {
    const navigate = useNavigate();

    return (
      <>
        <AnchorLink asChild>
          <Link to="/">{'Lenke til rot'}</Link>
        </AnchorLink>
        <br />
        <AnchorLink
          htmlMarkup="button"
          onClick={() => {
            navigate('/');
          }}
        >
          {'Lenke til rot (uten react-router)'}
        </AnchorLink>
      </>
    );
  },
};

export const WithNavigation: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <AnchorLink asChild>
          <Link to="/">{'Lenke til rot'}</Link>
        </AnchorLink>
        <AnchorLink asChild>
          <Link to="/about">{'Lenke til about'}</Link>
        </AnchorLink>
        <AnchorLink asChild>
          <Link to="/contact">{'Lenke til contact'}</Link>
        </AnchorLink>
        <LocationDisplay />
      </div>
    );
  },
};
