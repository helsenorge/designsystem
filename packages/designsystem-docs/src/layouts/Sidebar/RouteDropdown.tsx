import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import {theme as hndsTheme} from '@helsenorge/designsystem-react';
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
  line-height: 1rem;
  text-transform: uppercase;
  color: inherit;
`;

const SectionIcon = styled('span')``;

const StyledChevronDown = styled(ChevronDown)`
  margin-left: auto;
  color: ${hndsTheme.palette.blueberry500};
`;

const StyledChevronUp = styled(ChevronUp)`
  margin-left: auto;
  color: ${hndsTheme.palette.blueberry500};
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
  border: 2px solid ${hndsTheme.palette.blueberry500};
  color: ${hndsTheme.palette.blueberry500};
  transition: all 200ms;
  cursor: pointer;
  ${SectionIcon} {
    fill: ${hndsTheme.palette.blueberry500};
  }
  ${Label} {
    margin-left: 1rem;
  }
  &:hover {
    border-color: ${hndsTheme.palette.blueberry700};
    color: ${hndsTheme.palette.blueberry700};

    > ${StyledChevronDown}, ${StyledChevronUp} {
      color: ${hndsTheme.palette.blueberry700};
    }
    > ${SectionIcon} {
      fill: ${hndsTheme.palette.blueberry700};
    }
  }
`;
const MenuDrawer = styled('div')`
  position: absolute;
  box-sizing: content-box;
  border: 2px solid ${hndsTheme.palette.blueberry500};
  top: 3.75rem;
  left: -0.1rem;
  width: 100%;
  background: white;
  transition: all 200ms;
  &:hover {
    border-color: ${hndsTheme.palette.blueberry700};
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
  ${SectionIcon} {
    fill: black;
  }
  ${Label} {
    margin-left: 1rem;
  }
  &:hover {
    color: ${hndsTheme.palette.black};
    background-color: ${hndsTheme.palette.neutral100};

    > ${SectionIcon} {
      fill: ${hndsTheme.palette.black};
    }
  }
`;

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

function setChevron(expanded: boolean) {
  return expanded ? <StyledChevronUp size={24} /> : <StyledChevronDown size={24} />;
}
function showMenuDrawer(expanded: boolean) {
  return expanded ? (
    <MenuDrawer>
      {topLevelRoutes.map(route => {
        return (
          <MenuDrawerItem to={route.to}>
            <SectionIcon>{route.icon}</SectionIcon>
            <Label>{route.label}</Label>
          </MenuDrawerItem>
        );
      })}
    </MenuDrawer>
  ) : null;
}

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
          {<SectionIcon>{mappedRoute.icon}</SectionIcon>}
          <Label>{mappedRoute.label}</Label>
        </>
      ) : null}
      {setChevron(expanded)}
      {showMenuDrawer(expanded)}
    </StyledDropDownNav>
  );
}

export default RouteDropdown;
