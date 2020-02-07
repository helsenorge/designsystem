import React, {useState, useEffect} from 'react';
import {Link, graphql, useStaticQuery} from 'gatsby';
import {Location} from '@reach/router';
import styled, {css} from 'styled-components';

import npm from '../images/npm-brands.svg';
import useLatestNPMVersion from '../../hooks/UseLatestNPMVersion';

import RouteDropdown from './RouteDropdown';
import {routes} from './routes';
import {palette} from '@styles/styled-constants';

const NavGroupName = styled('span')`
  /* padding: 0.5rem; */
  font-weight: 600;
  color: #9b978c;
  text-transform: uppercase;
`;

const NavGroupLink = styled(Link)`
  /* padding: 0.4rem; */
  text-decoration: none;
  background-color: ${(props: {active?: boolean}) => (props.active ? 'white' : 'none')};
  border: ${(props: {active?: boolean}) => (props.active ? '1px solid #dedbd3' : '1px solid transparent')};
  transition: all 200ms;
  /* margin: 0.2rem 0; */
  &:hover {
    background-color: ${(props: {active?: boolean}) => (!props.active ? '#ffdbbe' : 'white')};
  }
`;

// function StyledNavGroup({
//   className,
//   children,
//   groupTitle,
// }: {
//   className?: string;
//   children: React.ReactNode;
//   groupTitle?: string;
// }) {
//   return (
//     <div className={className}>
//       {groupTitle ? <NavGroupName>{groupTitle}</NavGroupName> : null}
//       {children}
//     </div>
//   );
// }

// const NavGroup = styled(StyledNavGroup)`
//   margin-bottom: 2rem;
//   display: flex;
//   flex-direction: column;
// `;

const NavContent = styled('nav')`
  /* margin-top: 3rem; */
  /* padding: 0 2rem; */
`;

interface SidebarProps {
  children?: React.ReactNode;
  className?: string;
}

// function NavLink(props: any) {
//   return (
//     <StyledNavLink>

//     </StyledNavLink>
//   )
// }

// const StyledNavLink = styled(Link)<{active?: boolean}>`
//   display: block;
//   padding: 0.5rem;
//   font-weight: 600;
//   text-decoration: none;
//   transition: all 200ms;
//   ${props =>
//     props.active &&
//     css`
//       background-color: ${palette('surgical400')};
//       color: white;
//     `}
//   &:hover {
//     background-color: ${palette('surgical300')};
//   }
// `;

// const renderNavLink = (route: any, activeRoute: string) => (
//   <StyledNavLink active={activeRoute === route.path} to={route.path}>
//     {route.label}
//   </StyledNavLink>
// );

// function NavLink(props: {children: React.ReactNode; to: string}) {
//   const {children, to} = props;
//   return (
//     <StyledNavItem>
//       <StyledNavLink to={to}>{children}</StyledNavLink>
//     </StyledNavItem>
//   );
// }

const StyledNavLink = styled(Link)<{child?: boolean; activeLink?: boolean}>`
  text-decoration: none;
  display: block;
  font-weight: 600;
  font-size: 1.2rem;
  padding: 0.5rem;
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
      background-color: white;
      color: ${palette('surgical500')};
    `}
  &:hover {
    background-color: white;
    color: ${palette('surgical500')};
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
  padding-top: 5rem;
`;

export {Sidebar};
