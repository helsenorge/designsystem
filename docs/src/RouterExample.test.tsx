import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Link, useNavigate, useLocation } from 'react-router';
import { vi } from 'vitest';

import AnchorLink from '@helsenorge/designsystem-react/components/AnchorLink';

describe('AnchorLink with React Router Link', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders AnchorLink with Link component using asChild prop', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <MemoryRouter initialEntries={['/']}>
        <AnchorLink asChild>
          <Link to="/">{'Test Link'}</Link>
        </AnchorLink>
      </MemoryRouter>
    );

    const link = screen.getByRole('link', { name: 'Test Link' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/');
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it('renders multiple AnchorLinks with different routes', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <MemoryRouter initialEntries={['/start']}>
        <div>
          <AnchorLink asChild>
            <Link to="/">{'Home'}</Link>
          </AnchorLink>
          <AnchorLink asChild>
            <Link to="/about">{'About'}</Link>
          </AnchorLink>
          <AnchorLink asChild>
            <Link to="/contact">{'Contact'}</Link>
          </AnchorLink>
        </div>
      </MemoryRouter>
    );

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it('renders without errors when Link is wrapped in AnchorLink', () => {
    const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <AnchorLink asChild>
          <Link to="/test">{'Navigation Link'}</Link>
        </AnchorLink>
      </MemoryRouter>
    );

    expect(container).toBeInTheDocument();
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  it('AnchorLink with asChild behaves the same as AnchorLink with htmlMarkup="button" and useNavigate', async () => {
    const user = userEvent.setup();

    const TestComponent = (): JSX.Element => {
      const navigate = useNavigate();
      const location = useLocation();

      return (
        <div>
          <div data-testid="current-path">{location.pathname}</div>
          <AnchorLink asChild>
            <Link to="/destination">{'Link with asChild'}</Link>
          </AnchorLink>
          <AnchorLink
            htmlMarkup="button"
            onClick={() => {
              navigate('/destination');
            }}
          >
            {'Link with useNavigate'}
          </AnchorLink>
        </div>
      );
    };

    const { unmount } = render(
      <MemoryRouter initialEntries={['/start']}>
        <TestComponent />
      </MemoryRouter>
    );

    expect(screen.getByTestId('current-path')).toHaveTextContent('/start');

    // Click the Link with asChild
    await user.click(screen.getByRole('link', { name: 'Link with asChild' }));
    expect(screen.getByTestId('current-path')).toHaveTextContent('/destination');

    // Clean up and create a new instance
    unmount();

    render(
      <MemoryRouter initialEntries={['/start']}>
        <TestComponent />
      </MemoryRouter>
    );
    expect(screen.getByTestId('current-path')).toHaveTextContent('/start');

    // Click the Link with useNavigate
    await user.click(screen.getByRole('button', { name: 'Link with useNavigate' }));
    expect(screen.getByTestId('current-path')).toHaveTextContent('/destination');
  });
});
