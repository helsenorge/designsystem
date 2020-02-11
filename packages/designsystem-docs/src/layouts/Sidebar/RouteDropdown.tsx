import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import {palette, theme} from '@styles/styled-constants';
import {ChevronDown, ChevronUp} from 'react-feather';
import {Link} from 'gatsby';

import Brand from '../../components/Icons/Brand';
import Library from '../../components/Icons/Library';
import Patterns from '../../components/Icons/Patterns';
import Editorial from '../../components/Icons/Editorial';
import Principles from '../../components/Icons/Principles';
import Marketing from '../../components/Icons/Marketing';
import Roadmap from '../../components/Icons/Roadmap';

const Label = styled('div')`
  font-size: 1.125rem;
  font-weight: 600;
  text-transform: uppercase;
  color: inherit;
`;

const StyledChevronDown = styled(ChevronDown)`
  margin-left: auto;
`;
const StyledChevronUp = styled(ChevronUp)`
  margin-left: auto;
`;

const StyledDropDownNav = styled('div')`
  position: relative;
  margin-bottom: 2rem;
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0 1rem;
  border: 2px solid ${palette('bone200')};
  color: ${palette('vein500')};
  transition: all 200ms;
  cursor: pointer;
  &:hover {
    border: 2px solid ${palette('vein700')};
    color: ${palette('vein700')};
  }
  ${Label} {
    margin-left: 1rem;
  }
  img {
    width: 2rem;
  }
`;
const MenuDrawer = styled('div')`
  position: absolute;
  box-sizing: content-box;
  border: 2px solid ${palette('bone200')};
  top: 3.75rem;
  left: -0.1rem;
  width: 100%;
  background: white;
  transition: all 200ms;
  &:hover {
    border: 2px solid ${palette('vein700')};
  }
`;
const MenuDrawerItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 1.125rem;
  height: 3.5rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  transition: all 200ms;
  &:hover {
    color: white;
    background-color: ${palette('vein700')};
  }
  ${Label} {
    margin-left: 1rem;
  }
`;

function setChevron(expanded: boolean) {
  return expanded ? (
    <StyledChevronUp color={theme.palette.vein500} size={24} />
  ) : (
    <StyledChevronDown color={theme.palette.vein500} size={24} />
  );
}
function showMenuDrawer(expanded: boolean) {
  return expanded ? (
    <MenuDrawer>
      {topLevelRoutes.map(route => {
        return (
          <MenuDrawerItem to={route.to}>
            {route.icon}
            <Label>{route.label}</Label>
          </MenuDrawerItem>
        );
      })}
    </MenuDrawer>
  ) : null;
}

const topLevelRoutes = [
  {
    label: 'Brand',
    icon: <Brand />,
    to: '/brand',
  },
  {
    label: 'Patterns',
    icon: <Patterns />,
    to: '/patterns',
  },
  {
    label: 'Library',
    icon: <Library />,
    to: '/library',
  },
  {
    label: 'Design principles',
    icon: <Principles />,
    to: '/principles',
  },
  {
    label: 'Editorial guidlines',
    icon: <Editorial />,
    to: '/editorial',
  },
  {
    label: 'Marketing material',
    icon: <Marketing />,
    to: '/marketing-material',
  },
  {
    label: 'Roadmap',
    icon: <Roadmap />,
    to: '/roadmap',
  },
];

interface RouteDropdownProps {
  activeRoute: string;
}

function RouteDropdown(props: RouteDropdownProps) {
  const {activeRoute} = props;
  const [expanded, setExpanded] = useState(false);
  const [mappedRoute, setMappedRoute] = useState({} as any);
  useEffect(() => {
    const topLevelRoute = `/${activeRoute.split('/')[1]}`;
    const route = topLevelRoutes.filter(route => route.to === topLevelRoute)[0];
    setMappedRoute(route);
  }, [activeRoute]);
  return (
    <StyledDropDownNav onClick={() => setExpanded(!expanded)}>
      {mappedRoute ? (
        <>
          {mappedRoute.icon}
          <Label>{mappedRoute.label}</Label>
        </>
      ) : null}
      {setChevron(expanded)}
      {showMenuDrawer(expanded)}
    </StyledDropDownNav>
  );
}

export default RouteDropdown;
