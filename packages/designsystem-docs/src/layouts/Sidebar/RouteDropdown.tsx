import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Codesandbox, ChevronDown, ChevronUp, Globe, Framer} from 'react-feather';
import {palette, theme} from '@styles/styled-constants';
import {Link} from 'gatsby';

import brandIllustration from '@images/brand-illustration.svg';
import patternsIllustration from '@images/patterns-illustration.svg';
import componentsIllustration from '@images/components-illustration.svg';
import principlesIllustration from '@images/principles-illustration.svg';
import editorialIllustration from '@images/editorial-illustration.svg';
import materialIllustration from '@images/material-illustration.svg';
import roadmapIllustration from '@images/roadmap-illustration.svg';

const ComponentWrapper = styled('div')``;

const IconContainer = styled('div')`
  width: 44px;
  margin-left: 1rem;
  display: flex;
  align-items: center;
`;
const Icon = styled('img')`
  width: 2rem;
`;
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
  height: auto;
  height: 3.5rem;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0 1rem;
  border: 2px solid ${palette('bone200')};
  color: ${props => palette('bone200')};
  :hover {
    cursor: pointer;
    /* color: ${setComponentColors().hover.color};
    background: ${setComponentColors().hover.background}; */
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
  display: block;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
  border-top: 1px solid #ded8d3;
  :hover {
    background: #d6f5f3;
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
        return <MenuDrawerItem to={route.to}>{route.label}</MenuDrawerItem>;
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

const topLevelRoutes = [
  {
    label: 'Brand',
    icon: <Globe size={32} />,
    to: '/brand',
  },
  {
    label: 'Patterns',
    icon: <Framer size={32} />,
    to: '/patterns',
  },
  {
    label: 'Library',
    icon: <Codesandbox size={32} />,
    to: '/library',
  },
  {
    label: 'Design principles',
    icon: <Codesandbox size={32} />,
    to: '/principles',
  },
  {
    label: 'Editorial guidlines',
    icon: <Codesandbox size={32} />,
    to: '/editorial',
  },
  {
    label: 'Marketing material',
    icon: <Codesandbox size={32} />,
    to: '/marketing-material',
  },
  {
    label: 'Roadmap',
    icon: <Codesandbox size={32} />,
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
      {mappedRoute ? <Label>{mappedRoute.label}</Label> : null}
      {setChevron(expanded)}
      {showMenuDrawer(expanded)}
    </StyledDropDownNav>
  );
}

export default RouteDropdown;
