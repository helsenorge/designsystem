import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {palette, theme} from '@styles/styled-constants';
import {ChevronDown, ChevronUp} from 'react-feather';
import {Link} from 'gatsby';

import brandIllustration from '@images/brand-illustration.svg';
import patternsIllustration from '@images/patterns-illustration.svg';
import componentsIllustration from '@images/components-illustration.svg';
import principlesIllustration from '@images/principles-illustration.svg';
import editorialIllustration from '@images/editorial-illustration.svg';
import materialIllustration from '@images/material-illustration.svg';
import roadmapIllustration from '@images/roadmap-illustration.svg';

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
  color: ${props => palette('bone200')};
  :hover {
    cursor: pointer;
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
  top: 3.5rem;
  left: 0;
  width: 100%;
  height: auto;
  background: white;
`;
const MenuDrawerItem = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  border-top: 1px solid #ded8d3;
  :hover {
    background: #d6f5f3;
  }
  ${Label} {
    margin-left: 1rem;
  }
  img {
    width: 2rem;
  }
`;

function setChevron(expanded: boolean) {
  return expanded ? (
    <StyledChevronUp color={theme.palette.vein50} size={24} />
  ) : (
    <StyledChevronDown color={theme.palette.vein50} size={24} />
  );
}
function showMenuDrawer(expanded: boolean) {
  return expanded ? (
    <MenuDrawer>
      {topLevelRoutes.map(route => {
        return (
          <MenuDrawerItem to={route.to}>
            <img src={route.icon} />
            <Label>{route.label}</Label>
          </MenuDrawerItem>
        );
      })}
    </MenuDrawer>
  ) : null;
}

function setComponentColors() {
  let componentColors = {
    hover: {
      background: theme.palette.vein50,
      color: 'black',
    },
    regular: {
      background: 'rgba(255, 255, 255, 0.5)',
      color: theme.palette.vein50,
    },
    expanded: {
      background: 'green',
    },
  };
  return componentColors;
}
const ICONSIZE = 24;

const topLevelRoutes = [
  {
    label: 'Brand',
    icon: brandIllustration,
    to: '/brand',
  },
  {
    label: 'Patterns',
    icon: patternsIllustration,
    to: '/patterns',
  },
  {
    label: 'Library',
    icon: componentsIllustration,
    to: '/library',
  },
  {
    label: 'Design principles',
    icon: principlesIllustration,
    to: '/principles',
  },
  {
    label: 'Editorial guidlines',
    icon: editorialIllustration,
    to: '/editorial',
  },
  {
    label: 'Marketing material',
    icon: materialIllustration,
    to: '/marketing-material',
  },
  {
    label: 'Roadmap',
    icon: roadmapIllustration,
    to: '/roadmap',
  },
];

interface RouteDropdownProps {
  activeRoute: string;
}

function RouteDropdown(props: RouteDropdownProps) {
  console.log(topLevelRoutes);
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
          <img src={mappedRoute.icon} /> <Label>{mappedRoute.label}</Label>
        </>
      ) : null}
      {setChevron(expanded)}
      {showMenuDrawer(expanded)}
    </StyledDropDownNav>
  );
}

export default RouteDropdown;
