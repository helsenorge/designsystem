import React, {useState, useEffect} from 'react';
import {Link} from 'gatsby';
import styled, {css} from 'styled-components';
import {theme as hndsTheme} from '@helsenorge/designsystem-react';
import {Location} from '@reach/router';

import RouteDropdown from './RouteDropdown';
import {routes} from './routes';

const NavContent = styled('nav')``;

interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
}

const StyledNavLink = styled(Link)<{child?: boolean; activeLink?: boolean}>`
  text-decoration: none;
  display: block;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.5rem;
  transition: all 200ms;
  ${props =>
    props.child &&
    css`
      font-size: 1.1rem;
      padding-left: 1.5rem;
      font-weight: 400;
    `}
  ${props =>
    props.activeLink &&
    css`
      background-color: ${hndsTheme.palette.blueberry500};
      color: white;
    `}
  &:hover {
    background-color: ${hndsTheme.palette.blueberry700};
    color: white;
  }
`;

const StyledNavItem = styled('li')`
  list-style: none;
`;

const StyledNavGroup = styled('ul')`
  margin: 0;
`;

export const useRouteMap = (activeRoute: string) => {
  const [routeMap, setRouteMap] = useState([]);
  useEffect(() => {
    if (activeRoute) {
      setRouteMap(routes[activeRoute.split('/')[1]]);
    }
  }, [activeRoute]);
  return routeMap;
};

// TODO: Make custom node using GraphQL to fetch the folder structure rather than hard coded routes.
// Will take some extended time, not a straight forward job.
function Sidebar(props: SidebarProps): JSX.Element {
  const [activeRoute, setActiveRoute] = useState('');
  const routeMap = useRouteMap(activeRoute);
  return (
    <StyledSidebar>
      <Location>
        {({location}) => {
          setActiveRoute(location.pathname);
          return <></>;
        }}
      </Location>
      <NavContent>
        <RouteDropdown activeRoute={activeRoute} />
        {routeMap &&
          routeMap.map((route: any, index: number) => {
            return (
              <StyledNavGroup key={route.path}>
                <StyledNavItem>
                  <StyledNavLink activeLink={activeRoute === route.path} to={route.path}>
                    {route.label}
                  </StyledNavLink>
                </StyledNavItem>
                {route.children.map((child: any) => {
                  return (
                    <StyledNavItem key={child.path}>
                      <StyledNavLink activeLink={activeRoute === child.path} child to={child.path}>
                        {child.label}
                      </StyledNavLink>
                    </StyledNavItem>
                  );
                })}
              </StyledNavGroup>
            );
          })}
      </NavContent>
    </StyledSidebar>
  );
}

const StyledSidebar = styled('div')`
  padding: ${hndsTheme.spacer}rem ${hndsTheme.spacer}rem ${hndsTheme.spacers[6]}rem 0;

  @media ${hndsTheme.screen.sm} {
    padding-bottom: ${hndsTheme.spacer}rem;
  }
`;

export {Sidebar};
